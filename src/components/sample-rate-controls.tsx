import { Box, Flex } from 'grid-styled';
import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { toggleMuted, ToggleMutedAction } from '../actions/muted';
import { setSampleRate, SetSampleRateAction } from '../actions/sample-rate';
import muteButton from '../assets/mute-button.svg';
import soundButton from '../assets/sound-button.svg';
import soundLowButton from '../assets/sound-low-button.svg';
import { ByteBeatState, SampleRate } from '../types';

type StateProps = {
  sampleRate: SampleRate;
};

type DispatchProps = {
  setRateFromButton: (rate: number) => void;
  onSetSampleRate: (event: React.FormEvent<HTMLInputElement>) => void;
};

type Props = StateProps & DispatchProps;

const Image = (props: any) => <img {...props} style={{ width: 25 }} />;

type SampleRateButtonProps = {
  rate: number;
  children: any;
};
const SampleRateButtonRow = (props: any) => (
  <Box p={0} m={0} style={{ height: '1em', margin: 0, padding: 0 }}>
    {props.children}
  </Box>
);
const SampleRateButton = (props: SampleRateButtonProps & Props) => {
  const { rate, sampleRate, children, setRateFromButton } = props;
  const handleClick = () => setRateFromButton(rate);
  return (
    <button
      className={rate === sampleRate ? 'selected' : ''}
      style={{ fontSize: '.5em', height: '100%', width: 50 }}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

class SampleRateControls extends React.Component<Props> {
  render() {
    const { sampleRate, onSetSampleRate } = this.props;
    return (
      <Flex justifyContent="center">
        <Box>
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            m={0}
            p={0}
          >
            <SampleRateButtonRow>
              <SampleRateButton {...this.props} rate={8000}>
                8kHz
              </SampleRateButton>
              <SampleRateButton {...this.props} rate={11025}>
                11kHz
              </SampleRateButton>
            </SampleRateButtonRow>
            <SampleRateButtonRow>
              <SampleRateButton {...this.props} rate={16000}>
                16kHz
              </SampleRateButton>
              <SampleRateButton {...this.props} rate={22050}>
                22kHz
              </SampleRateButton>
            </SampleRateButtonRow>
            <SampleRateButtonRow>
              <SampleRateButton {...this.props} rate={32000}>
                32kHz
              </SampleRateButton>
              <SampleRateButton {...this.props} rate={44100}>
                44kHz
              </SampleRateButton>
            </SampleRateButtonRow>
          </Flex>
        </Box>
        <Box>
          <Flex flexDirection="column" alignItems="center">
            <Box>SRate: {sampleRate}</Box>
            <Box>
              <input
                type="range"
                min="1"
                max="44100"
                step="1"
                value={sampleRate}
                onChange={onSetSampleRate}
                onInput={onSetSampleRate}
              />
            </Box>
          </Flex>
        </Box>
      </Flex>
    );
  }
}

const mapStateToProps = (state: ByteBeatState): StateProps => ({
  sampleRate: state.sampleRate
});

const mapDispatchToProps = (
  dispatch: Dispatch<SetSampleRateAction>
): DispatchProps => ({
  setRateFromButton: (rate: number) => {
    dispatch(setSampleRate(rate));
  },
  onSetSampleRate: (event: React.FormEvent<HTMLInputElement>) => {
    dispatch(setSampleRate(parseFloat(event.currentTarget.value)));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SampleRateControls);
