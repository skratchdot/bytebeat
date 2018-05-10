import { Box, Flex } from 'grid-styled';
import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { ByteBeatState, Counter as CounterType } from '../types';
import humanizeDuration from 'humanize-duration';
import { setCounter, SetCounterAction } from '../actions/counter';

type StateProps = {
  counter: CounterType;
  counterFloor: number;
  sampleRate: number;
};

type DispatchProps = {
  onSetCounter: (event: React.FormEvent<HTMLInputElement>) => void;
};

type Props = StateProps & DispatchProps;

class Counter extends React.Component<Props> {
  render() {
    const { counterFloor, sampleRate, onSetCounter } = this.props;
    const humanizedRate =
      sampleRate < 1000
        ? `${sampleRate} Hz`
        : `${(sampleRate / 1000).toFixed(1)} kHz`;
    /*
    let val = 3;
    let max = Math.pow(10, val);
    while (max <= counterFloor - 10) {
      max = Math.pow(10, val++);
    }
    */
    let max = Math.pow(10, 8);
    return (
      <Flex justifyContent="center">
        <Box style={{ textAlign: 'center' }}>
          t: {counterFloor}
          <br />
          <input
            type="range"
            min="0"
            max={max}
            step="1"
            value={counterFloor}
            onChange={onSetCounter}
            onInput={onSetCounter}
          />
          <br />
          <small>
            {humanizeDuration((counterFloor / sampleRate * 1000).toFixed(0))}
            @ {humanizedRate}
          </small>
        </Box>
      </Flex>
    );
  }
}

const mapStateToProps = (state: ByteBeatState): StateProps => ({
  counter: state.counter,
  counterFloor: Math.floor(state.counter),
  sampleRate: state.sampleRate
});

const mapDispatchToProps = (
  dispatch: Dispatch<SetCounterAction>
): DispatchProps => ({
  onSetCounter: (event: React.FormEvent<HTMLInputElement>) => {
    dispatch(setCounter(Math.floor(parseFloat(event.currentTarget.value))));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
