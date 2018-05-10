import { Box, Flex } from 'grid-styled';
import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { toggleMuted, ToggleMutedAction } from '../actions/muted';
import { setVolume, SetVolumeAction } from '../actions/volume';
import muteButton from '../assets/mute-button.svg';
import soundButton from '../assets/sound-button.svg';
import soundLowButton from '../assets/sound-low-button.svg';
import { ByteBeatState, Muted, Volume } from '../types';

type StateProps = {
  muted: Muted;
  volume: Volume;
};

type DispatchProps = {
  onToggleMuted: (event: {}) => void;
  onSetVoume: (event: React.FormEvent<HTMLInputElement>) => void;
};

type Props = StateProps & DispatchProps;

const Image = (props: any) => <img {...props} style={{ width: 25 }} />;

class VolumeControls extends React.Component<Props> {
  render() {
    const { muted, volume, onToggleMuted, onSetVoume } = this.props;
    return (
      <Flex justifyContent="center">
        <Box>
          <Flex flexDirection="column" alignItems="center">
            <Box>Volume: {muted ? '0.00' : volume.toFixed(2)}</Box>
            <Box>
              <Flex>
                <Box style={{ cursor: 'pointer' }} onClick={onToggleMuted}>
                  {muted ? (
                    <Image src={muteButton} />
                  ) : volume < 0.35 ? (
                    <Image src={soundLowButton} />
                  ) : (
                    <Image src={soundButton} />
                  )}
                </Box>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={muted ? 0 : volume}
                  onChange={onSetVoume}
                  onInput={onSetVoume}
                />
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Flex>
    );
  }
}

const mapStateToProps = (state: ByteBeatState): StateProps => ({
  muted: state.muted,
  volume: state.volume
});

const mapDispatchToProps = (
  dispatch: Dispatch<ToggleMutedAction | SetVolumeAction>
): DispatchProps => ({
  onToggleMuted: () => {
    dispatch(toggleMuted());
  },
  onSetVoume: (event: React.FormEvent<HTMLInputElement>) => {
    dispatch(setVolume(parseFloat(event.currentTarget.value)));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(VolumeControls);
