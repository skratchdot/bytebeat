import 'brace';
import 'brace/mode/javascript';
import 'brace/theme/twilight';
import * as React from 'react';
import AceEditor from 'react-ace';
import { connect, Dispatch } from 'react-redux';
import { setCodeValue, SetCodeValueAction } from '../actions/code';
import { ByteBeatState, Code } from '../types';

type StateProps = {
  code: Code;
};

type DispatchProps = {
  onChange: (value: string) => void;
};

type Props = StateProps & DispatchProps;

class Editor extends React.Component<Props> {
  render() {
    const { code, onChange } = this.props;
    return (
      <AceEditor
        mode="javascript"
        theme="twilight"
        name="byte-beat-editor"
        fontSize={20}
        showPrintMargin={true}
        showGutter={false}
        highlightActiveLine={false}
        onChange={onChange}
        setOptions={{
          enableBasicAutocompletion: false,
          enableLiveAutocompletion: false,
          enableSnippets: false,
          showLineNumbers: false,
          tabSize: 2
        }}
        width="100%"
        height="100%"
        value={code.value}
      />
    );
  }
}

const mapStateToProps = (state: ByteBeatState): StateProps => ({
  code: state.code
});

const mapDispatchToProps = (
  dispatch: Dispatch<SetCodeValueAction>
): DispatchProps => ({
  onChange: (value: string) => {
    dispatch(setCodeValue(value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
