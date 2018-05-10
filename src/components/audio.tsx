import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { setAnalyserData, SetAnalyserDataAction } from '../actions/analyser';
import { setCounter, SetCounterAction } from '../actions/counter';
import {
  ByteBeatState,
  Code,
  Counter,
  Muted,
  Playing,
  SampleRate,
  Volume
} from '../types';

type StateProps = {
  code: Code;
  counter: Counter;
  muted: Muted;
  playing: Playing;
  sampleRate: SampleRate;
  volume: Volume;
};

type DispatchProps = {
  onCounterChange: (value: number) => void;
  onUpdateAnalyserData: (
    frequencyData: Uint8Array,
    timeDomainData: Uint8Array
  ) => void;
};

type Props = StateProps & DispatchProps;

class Audio extends React.Component<Props> {
  private audioContext: AudioContext;
  private scriptProcessor: ScriptProcessorNode;
  private analyser: AnalyserNode;
  private gain: GainNode;
  private sampleCount: number = 0;
  private tCounter: number = 0;
  private tFloor: number = 0;
  private lastResult: any;
  private lastValue: number = 0;
  private timeoutId: any;
  constructor(props: Props) {
    super(props);
    // audioContext
    this.audioContext = new AudioContext();
    // scriptProcessor
    this.scriptProcessor = this.audioContext.createScriptProcessor();
    this.scriptProcessor.onaudioprocess = this.processAudio;
    // analyser
    this.analyser = this.audioContext.createAnalyser();
    this.analyser.fftSize = 512;
    this.analyser.smoothingTimeConstant = 0.1;
    // gain
    this.gain = this.audioContext.createGain();
    this.gain.gain.value = props.volume;
    // connect nodes
    this.scriptProcessor.connect(this.gain);
    this.scriptProcessor.connect(this.analyser);
    this.gain.connect(this.audioContext.destination);
    window.requestAnimationFrame(this.handleRaf);
  }
  componentDidUpdate(prevProps: Props) {
    const { muted, playing, volume } = this.props;
    // playing state
    if (playing && this.audioContext.state !== 'running') {
      this.audioContext.resume();
    } else if (!playing && this.audioContext.state === 'running') {
      this.audioContext.suspend();
    }
    // volume
    if (volume !== prevProps.volume || muted !== prevProps.muted) {
      this.gain.gain.value = muted ? 0 : volume;
    }
  }
  componentWillUnmount() {
    this.audioContext.close();
  }
  render() {
    return null;
  }
  private handleRaf = () => {
    const { onUpdateAnalyserData } = this.props;
    var timeDomainData = new Uint8Array(this.analyser.fftSize);
    this.analyser.getByteTimeDomainData(timeDomainData);
    var frequencyData = new Uint8Array(this.analyser.frequencyBinCount);
    this.analyser.getByteFrequencyData(frequencyData);
    onUpdateAnalyserData(frequencyData, timeDomainData);
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => {
      window.requestAnimationFrame(this.handleRaf);
    }, 250); // tslint:disable-line
  }; // tslint:disable-line
  private processAudio = (audioProcessingEvent: AudioProcessingEvent) => {
    const {
      code,
      counter,
      muted,
      playing,
      sampleRate,
      onCounterChange,
      volume
    } = this.props;
    const ratio = sampleRate / this.audioContext.sampleRate;
    this.tCounter = counter;
    this.tFloor = Math.floor(counter);
    const { outputBuffer } = audioProcessingEvent;
    let firstChannel;
    for (let channel = 0; channel < outputBuffer.numberOfChannels; channel++) {
      const outputData = outputBuffer.getChannelData(channel);
      if (channel === 0) {
        firstChannel = outputData;
      }
      for (let sample = 0; sample < outputBuffer.length; sample++) {
        if (channel === 0) {
          if (playing) {
            const floor = Math.floor(this.tCounter);
            if (floor > this.tFloor) {
              this.tFloor = floor;
              if (typeof code.fn === 'function') {
                try {
                  this.lastResult = code.fn(this.tFloor);
                  if (Number.isFinite(this.lastResult)) {
                    this.lastValue = (this.lastResult % 256) / 128 - 1;
                  }
                } catch (e) {
                  this.lastResult = e;
                }
              }
            }
            this.tCounter += ratio;
          }
          outputData[sample] = this.lastValue;
          this.sampleCount++;
        } else if (firstChannel) {
          outputData[sample] = firstChannel[sample];
        }
      }
    }
    if (this.tCounter !== counter) {
      onCounterChange(this.tCounter);
    }
  }; // tslint:disable-line
}

const mapStateToProps = (state: ByteBeatState): StateProps => ({
  code: state.code,
  counter: state.counter,
  muted: state.muted,
  playing: state.playing,
  sampleRate: state.sampleRate,
  volume: state.volume
});

const mapDispatchToProps = (
  dispatch: Dispatch<SetCounterAction>
): DispatchProps => ({
  onCounterChange: (value: number) => {
    dispatch(setCounter(value));
  },
  onUpdateAnalyserData: (
    frequencyData: Uint8Array,
    timeDomainData: Uint8Array
  ) => {
    dispatch(setAnalyserData(frequencyData, timeDomainData));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Audio);
