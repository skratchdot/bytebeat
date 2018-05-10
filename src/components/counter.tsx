import { Box, Flex } from 'grid-styled';
import * as React from 'react';
import { connect } from 'react-redux';
import { ByteBeatState } from '../types';
import humanizeDuration from 'humanize-duration';

type StateProps = {
  counter: number;
  counterFloor: number;
  sampleRate: number;
};

type Props = StateProps;

class Counter extends React.Component<Props> {
  render() {
    const { counterFloor, sampleRate } = this.props;
    const humanizedRate =
      sampleRate < 1000
        ? `${sampleRate} Hz`
        : `${(sampleRate / 1000).toFixed(1)} kHz`;
    return (
      <Flex justifyContent="center">
        <Box style={{ textAlign: 'center' }}>
          t: {counterFloor}
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

export default connect(mapStateToProps)(Counter);
