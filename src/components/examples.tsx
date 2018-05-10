import { Box, Flex } from 'grid-styled';
import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { setCodeValue } from '../actions/code';
import {
  setExampleDropdownVisible,
  SetExampleDropdownVisibleAction,
  setSelectedExample,
  SetSelectedExampleAction
} from '../actions/examples';
import { ByteBeatState, Example, ExampleState } from '../types';
import ExamplePicker from './example-picker';

type StateProps = ExampleState;

type DispatchProps = {
  onPrev: (allExamples: Array<Example>, current: Example) => void;
  onNext: (allExamples: Array<Example>, current: Example) => void;
  onClear: () => void;
  onSelectExample: (example: Example) => void;
};

type Props = StateProps & DispatchProps;

const Label = (props: any) => (
  <span
    style={{
      display: 'inline-block',
      width: 80,
      textAlign: 'right',
      marginRight: 10
    }}
  >
    {props.children}
  </span>
);

const ButtonRow = (props: any) => <Flex flexWrap="wrap">{props.children}</Flex>;

const Button = (props: any) => (
  <button
    onClick={props.onClick}
    style={{ width: '100%' }}
    className={props.selected ? 'selected' : ''}
  >
    {props.children}
  </button>
);

const firstExampleInGroup: Array<Example> = [];

const buildGroups = (examples: Array<Example>) => {
  let currentGroup;
  for (let i = 0; i < examples.length; i++) {
    let groupName = examples[i].group;
    if (currentGroup !== groupName) {
      currentGroup = groupName;
      firstExampleInGroup.push(examples[i]);
    }
  }
};

class Examples extends React.Component<Props> {
  render() {
    const {
      examples,
      selectedExample,
      onPrev,
      onNext,
      onClear,
      onSelectExample
    } = this.props;
    if (firstExampleInGroup.length === 0) {
      buildGroups(examples);
    }
    return (
      <Flex flexWrap="wrap">
        <Box width={[1, 1 / 2]} my={10}>
          <ExamplePicker />
        </Box>
        <Box width={[1, 1 / 2]} my={10}>
          <Flex flexDirection="column" justifyContent="center">
            <Box>
              <ButtonRow>
                <Box>
                  <Label>groups:</Label>
                </Box>
                {firstExampleInGroup.map((example) => (
                  <Box>
                    <Button
                      onClick={onSelectExample.bind(null, example)}
                      selected={selectedExample.group === example.group}
                    >
                      {example.group}
                    </Button>
                  </Box>
                ))}
              </ButtonRow>
            </Box>
            <Box>
              <ButtonRow>
                <Box>
                  <Label>browse:</Label>
                </Box>
                <Box>
                  <Button
                    onClick={onPrev.bind(null, examples, selectedExample)}
                  >
                    prev
                  </Button>
                </Box>
                <Box>
                  <Button
                    onClick={onNext.bind(null, examples, selectedExample)}
                  >
                    next
                  </Button>
                </Box>
              </ButtonRow>
            </Box>
            <Box>
              <ButtonRow>
                <Box>
                  <Label>controls:</Label>
                </Box>
                <Box>
                  <Button onClick={onClear}>clear</Button>
                </Box>
                <Box>
                  <Button onClick={onSelectExample.bind(null, selectedExample)}>
                    refresh example
                  </Button>
                </Box>
              </ButtonRow>
            </Box>
          </Flex>
        </Box>
      </Flex>
    );
  }
}

const mapStateToProps = (state: ByteBeatState): StateProps => ({
  examples: state.examples.examples,
  selectedExample: state.examples.selectedExample,
  isExampleDropdownVisible: state.examples.isExampleDropdownVisible
});

const mapDispatchToProps = (
  dispatch: Dispatch<SetSelectedExampleAction | SetExampleDropdownVisibleAction>
): DispatchProps => ({
  onPrev: (allExamples: Array<Example>, current: Example) => {
    let index = current.itemNum - 1;
    if (index < 0) {
      index = allExamples.length - 1;
    }
    dispatch(setSelectedExample(allExamples[index]));
  },
  onNext: (allExamples: Array<Example>, current: Example) => {
    let index = current.itemNum + 1;
    if (index > allExamples.length - 1) {
      index = 0;
    }
    dispatch(setSelectedExample(allExamples[index]));
  },
  onClear: () => {
    dispatch(setCodeValue(''));
  },
  onSelectExample: (example: Example) => {
    dispatch(setSelectedExample(example));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Examples);
