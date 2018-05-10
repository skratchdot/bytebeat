import { Box, Flex } from 'grid-styled';
import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import {
  setExampleDropdownVisible,
  SetExampleDropdownVisibleAction,
  setSelectedExample,
  SetSelectedExampleAction
} from '../actions/examples';
import { ByteBeatState, Code, Example, ExampleState } from '../types';

type StateProps = {
  code: Code;
} & ExampleState;

type DispatchProps = {
  onOpenDropdown: () => void;
  onCloseDropdown: () => void;
  onSelectExample: (example: Example) => void;
};

type Props = StateProps & DispatchProps;

type ExampleButtonProps = {
  example: Example | null;
  onClick: any;
};

const ExampleButton = (props: any) => {
  const { example, onClick } = props;
  let content;
  if (example) {
    content = (
      <>
        <small>
          {example.itemNum} / {example.group}
        </small>
        <br />
        <strong>{example.author}</strong>
        &nbsp;
        <small>{example.title}</small>
      </>
    );
  } else {
    content = <strong>CLICK HERE TO CHOOSE AN EXAMPLE</strong>;
  }
  return (
    <button style={{ width: 200, height: 60 }} onClick={onClick}>
      {content}
    </button>
  );
};

class ExamplePicker extends React.Component<Props> {
  render() {
    const {
      code,
      examples,
      selectedExample,
      isExampleDropdownVisible,
      onOpenDropdown,
      onSelectExample
    } = this.props;
    return (
      <Flex style={{ position: 'relative' }} justifyContent="center">
        <Box>
          <ExampleButton
            example={
              code.value !== selectedExample.code0 ? null : selectedExample
            }
            onClick={onOpenDropdown}
          />
        </Box>
        <Box
          style={{
            display: isExampleDropdownVisible ? 'block' : 'none',
            width: 220,
            height: 500,
            overflow: 'auto',
            position: 'absolute',
            zIndex: 10,
            top: -60,
            background: 'black'
          }}
        >
          {examples.map((example, i) => (
            <div key={`example-${i}`}>
              <ExampleButton
                example={example}
                onClick={onSelectExample.bind(null, example)}
              />
            </div>
          ))}
        </Box>
      </Flex>
    );
  }
}

const mapStateToProps = (state: ByteBeatState): StateProps => ({
  code: state.code,
  examples: state.examples.examples,
  selectedExample: state.examples.selectedExample,
  isExampleDropdownVisible: state.examples.isExampleDropdownVisible
});

const mapDispatchToProps = (
  dispatch: Dispatch<SetSelectedExampleAction | SetExampleDropdownVisibleAction>
): DispatchProps => ({
  onOpenDropdown: () => {
    dispatch(setExampleDropdownVisible(true));
  },
  onCloseDropdown: () => {
    dispatch(setExampleDropdownVisible(false));
  },
  onSelectExample: (example: Example) => {
    dispatch(setSelectedExample(example));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ExamplePicker);
