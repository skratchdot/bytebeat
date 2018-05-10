import { Box, Flex } from 'grid-styled';
import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { setCounter, SetCounterAction } from '../actions/counter';
import {
  stopPlaying,
  StopPlayingAction,
  togglePlaying,
  TogglePlayingAction
} from '../actions/playing';
import pauseButton from '../assets/pause-button.svg';
import playButton from '../assets/play-button.svg';
import previousButton from '../assets/previous-button.svg';
import stopButton from '../assets/stop-button.svg';
import { ByteBeatState } from '../types';

type StateProps = {
  playing: boolean;
  value: string;
};

type DispatchProps = {
  onTogglePlayState: (event: {}) => void;
  onStop: (event: {}) => void;
  onStart: (event: {}) => void;
};

type Props = StateProps & DispatchProps;

const ButtonBox = (props: any) => (
  <Box {...props} style={{ cursor: 'pointer', ...props.style }} />
);

class PlayingControls extends React.Component<Props> {
  render() {
    const { onTogglePlayState, onStop, onStart, playing } = this.props;
    return (
      <Flex justifyContent="center">
        <ButtonBox onClick={onStart}>
          <img src={previousButton} />
        </ButtonBox>
        <ButtonBox px={2} onClick={onStop}>
          <img src={stopButton} />
        </ButtonBox>
        <ButtonBox onClick={onTogglePlayState} style={{ width: 50 }}>
          {playing ? <img src={pauseButton} /> : <img src={playButton} />}
        </ButtonBox>
      </Flex>
    );
  }
}

const mapStateToProps = (state: ByteBeatState): StateProps => ({
  playing: state.playing,
  value: state.code.value
});

const mapDispatchToProps = (
  dispatch: Dispatch<TogglePlayingAction | StopPlayingAction | SetCounterAction>
): DispatchProps => ({
  onTogglePlayState: () => {
    dispatch(togglePlaying());
  },
  onStop: () => {
    dispatch(stopPlaying());
  },
  onStart: () => {
    dispatch(setCounter(0));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayingControls);
