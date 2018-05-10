import { Box, Flex } from 'grid-styled';
import * as React from 'react';
import { connect } from 'react-redux';
import { ByteBeatState, Code } from '../types';

type Props = {
  code: Code;
};

class CompileStatus extends React.Component<Props> {
  render() {
    const { code } = this.props;
    let message;
    if (code.error) {
      message = <span style={{ color: 'red' }}>{code.error.message}</span>;
    } else {
      message = <span style={{ color: 'green' }}>Compilation succesful</span>;
    }
    return (
      <Flex justifyContent="center">
        <Box>{message}</Box>
      </Flex>
    );
  }
}

const mapStateToProps = (state: ByteBeatState): Props => ({
  code: state.code
});

export default connect(mapStateToProps)(CompileStatus);
