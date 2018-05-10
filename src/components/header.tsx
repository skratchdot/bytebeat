import { Box, Flex } from 'grid-styled';
import * as React from 'react';
import { connect } from 'react-redux';
import packageJson from '../../package.json';
import Counter from './counter';
import PlayingControls from './playing-controls';
import SampleRateControls from './sample-rate-controls';
import VolumeControls from './volume-controls';

class Header extends React.Component {
  render() {
    return (
      <Flex flexWrap="wrap">
        <Box
          width={[1]}
          style={{ fontSize: '1.3rem', textAlign: 'center' }}
          my={10}
        >
          ByteBeat v{packageJson.version}
        </Box>
        <Box width={[1, 1 / 2, 1 / 2, 1 / 4]} my={10}>
          <PlayingControls />
        </Box>
        <Box width={[1, 1 / 2, 1 / 2, 1 / 4]} my={10}>
          <VolumeControls />
        </Box>
        <Box width={[1, 1 / 2, 1 / 2, 1 / 4]} my={10}>
          <SampleRateControls />
        </Box>
        <Box width={[1, 1 / 2, 1 / 2, 1 / 4]} my={10}>
          <Counter />
        </Box>
      </Flex>
    );
  }
}

export default connect()(Header);
