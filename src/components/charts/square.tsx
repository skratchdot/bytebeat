import * as React from 'react';
import { connect } from 'react-redux';
import { RGBA } from '../../types';
import getDataWorker from '../../util/get-data-worker';

type SquareProps = {
  numRows?: number;
  numCols?: number;
  width?: any;
  height?: any;
  fn: Function | null;
  start: number;
  end: number;
  successFn: (val: number) => RGBA;
  errorFn: (val: any) => RGBA;
};

class Square extends React.Component<SquareProps> {
  public static defaultProps: Partial<SquareProps> = {
    numRows: 100,
    numCols: 100,
    width: 'auto',
    height: 'auto'
  };
  private canvas: HTMLCanvasElement | null;
  private ctx: CanvasRenderingContext2D | null;
  private worker: Worker | null;
  private drawComplete: boolean = true;
  private timeoutId: any;
  componentDidMount() {
    if (!this.ctx && this.canvas) {
      this.ctx = this.canvas.getContext('2d');
    }
    // start our draw loop
    window.requestAnimationFrame(this.drawLoop);
  }
  componentDidUpdate(nextProps: SquareProps) {
    let recalculate = false;
    ['numCols', 'numRows', 'fn', 'successFn', 'errorFn'].forEach((key) => {
      if (nextProps[key] !== this.props[key]) {
        recalculate = true;
      }
    });
    if (recalculate) {
      this.drawComplete = true;
      this.draw();
    }
  }
  render() {
    const { numRows, numCols, width, height } = this.props;
    return (
      <canvas
        ref={(ref) => (this.canvas = ref)}
        width={numCols}
        height={numRows}
        style={{ width: width, height: height, border: '1px solid' }}
      />
    );
  }
  private drawLoop = () => {
    this.draw();

    // this setTimeout is a hack to get chrome to quick
    // breaking up the audio.
    // previously, I just had the RAF line. In that case
    // Firefox played the audio just fine and handled that animations
    // as well.  Chrome on the other hand updated the animations much
    // more frequently (and smoothly), but the audio was terrible
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => {
      window.requestAnimationFrame(this.drawLoop);
    }, 250); // tslint:disable-line
  }; // tslint:disable-line
  private onWorkerMessage = (e: MessageEvent) => {
    const { buffer, numCols, numRows } = e.data;
    if (this.ctx && this.canvas) {
      const arr = new Uint8ClampedArray(buffer);
      const imageData = new ImageData(arr, numCols, numRows);
      this.ctx.putImageData(imageData, 0, 0, 0, 0, numCols, numRows);
    }
    this.drawComplete = true;
  }; // tslint:disable-line
  private draw = () => {
    const { fn, start, end, successFn, errorFn } = this.props;
    let buffer;
    if (this.ctx && this.canvas && this.drawComplete) {
      const numRows = this.canvas.height;
      const numCols = this.canvas.width;
      const imageData = this.ctx.getImageData(0, 0, numCols, numRows);
      buffer = imageData.data.buffer;
      this.worker = getDataWorker(this.worker);
      this.worker.onmessage = this.onWorkerMessage;
      this.drawComplete = false;
      this.worker.postMessage(
        {
          fnString: typeof fn === 'function' ? fn.toString() : 'function () {}',
          start,
          end,
          successFnString: successFn.toString(),
          errorFnString: errorFn.toString(),
          buffer,
          numRows,
          numCols
        },
        [buffer]
      );
    }
  }; // tslint:disable-line
}

export default Square;
