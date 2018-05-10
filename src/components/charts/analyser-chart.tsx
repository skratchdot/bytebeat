import * as React from 'react';
import { connect } from 'react-redux';

type Props = {
  data: Uint8Array;
};

const AnalyserChart = (props: Props) => {
  const { data } = props;
  const d = data.reduce((prev, curr, index) => {
    return `${prev} M${index},0 L${index},${curr}`;
  }, ''); // tslint:disable-line
  return (
    <svg
      preserveAspectRatio="none"
      viewBox={`0 0 ${data.length} 256`}
      style={{
        transform: 'scale(1,-1)',
        border: '1px solid',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
      }}
    >
      <path d={d} stroke="white" />
    </svg>
  );
};

export default AnalyserChart;
