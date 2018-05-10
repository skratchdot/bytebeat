import { Box, Flex } from 'grid-styled';
import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import {
  AnalyserData,
  ByteBeatState,
  Code,
  Constants,
  Counter,
  Example,
  ExampleState,
  RGBA
} from '../types';
import Audio from './audio';
import AnalyserChart from './charts/analyser-chart';
import Square from './charts/square';
import CompileStatus from './compile-status';
import Editor from './editor';
import Examples from './examples';
import Header from './header';
import {
  setSelectedExample,
  SetSelectedExampleAction
} from '../actions/examples';

const FIRST_EXAMPLE_INDEX = 29;

type StateProps = {
  analyser: AnalyserData;
  code: Code;
  counter: Counter;
  examples: ExampleState;
};

type DispatchProps = {
  onInit: (example: Example) => void;
};

type Props = StateProps & DispatchProps;

const successFn = (val: number): RGBA => ({
  r: 255,
  g: 255,
  b: 255,
  a: val
});

const errorFn = (val: number): RGBA => ({
  r: 255,
  g: 0,
  b: 0,
  a: 255
});

class App extends React.Component<Props> {
  componentDidMount() {
    const { examples, onInit } = this.props;
    onInit(examples.examples[FIRST_EXAMPLE_INDEX]);
  }
  render() {
    const { analyser, code, counter } = this.props;
    return (
      <Flex flexDirection="column" style={{ width: '100vw', height: '100vh' }}>
        <Box>
          <Header />
        </Box>
        <Box>
          <Examples />
        </Box>
        <Box my={10}>
          <CompileStatus />
        </Box>
        <Box m={10} flex="1">
          <Flex style={{ width: '100%', height: '100%' }}>
            <Box width={[1]} style={{ position: 'relative', height: '100%' }}>
              <Editor />
            </Box>
            <Box width={[1]}>
              <Flex flexDirection="column" style={{ height: '100%' }}>
                <Box
                  flex="1"
                  m={10}
                  style={{ position: 'relative', height: '100%' }}
                >
                  <AnalyserChart data={analyser.timeDomainData} />
                </Box>
                <Box
                  flex="1"
                  m={10}
                  style={{ position: 'relative', height: '100%' }}
                >
                  <AnalyserChart data={analyser.frequencyData} />
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Box my={10}>
          <Flex>
            <Box flex="1 auto" m={10}>
              <Square
                start={0}
                end={Constants.SQUARE_FIRST_COLS * Constants.SQUARE_FIRST_ROWS}
                numCols={Constants.SQUARE_FIRST_COLS}
                numRows={Constants.SQUARE_FIRST_ROWS}
                fn={code.fn}
                successFn={successFn}
                errorFn={errorFn}
                width="100%"
                height="100%"
              />
            </Box>
            <Box flex="1 auto" m={10}>
              <Square
                start={counter}
                end={
                  counter +
                  Constants.SQUARE_FIRST_COLS * Constants.SQUARE_FIRST_ROWS
                }
                numCols={Constants.SQUARE_FIRST_COLS}
                numRows={Constants.SQUARE_FIRST_ROWS}
                fn={code.fn}
                successFn={successFn}
                errorFn={errorFn}
                width="100%"
                height="100%"
              />
            </Box>
          </Flex>
        </Box>
        <Audio />
      </Flex>
    );
  }
}

const mapStateToProps = (state: ByteBeatState): StateProps => ({
  analyser: state.analyser,
  code: state.code,
  counter: state.counter,
  examples: state.examples
});

const mapDispatchToProps = (
  dispatch: Dispatch<SetSelectedExampleAction>
): DispatchProps => ({
  onInit: (example: Example) => {
    dispatch(setSelectedExample(example));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
