export default (worker: Worker | null): Worker => {
  if (worker) {
    worker.terminate();
  }
  const getData = function() {
    const buildFn = (fnString: string) => new Function(`return ${fnString};`)();
    self.onmessage = function(e: MessageEvent) {
      const {
        fnString,
        start,
        end,
        successFnString,
        errorFnString,
        buffer,
        numCols,
        numRows
      } = e.data;
      const arr = new Uint8Array(buffer);
      const fn = buildFn(fnString);
      const successFn = buildFn(successFnString);
      const errorFn = buildFn(errorFnString);
      for (let i = 0, t = start; t < end; t++, i++) {
        const result = fn(t);
        let rgba;
        if (Number.isFinite(result)) {
          const byte = result % 256;
          rgba = successFn(byte);
        } else {
          rgba = errorFn(result);
        }
        const row = i % numRows;
        const col = Math.floor(i / numRows);
        const idx = (row * numCols + col) * 4;
        if (idx + 4 < arr.length - 1) {
          arr[idx + 0] = rgba.r;
          arr[idx + 1] = rgba.g;
          arr[idx + 2] = rgba.b;
          arr[idx + 3] = rgba.a;
        }
      }
      self.postMessage(
        {
          buffer,
          numCols,
          numRows
        },
        // @ts-ignore
        [buffer]
      );
    };
  };
  const blobURL = URL.createObjectURL(
    new Blob(['(', getData.toString(), ')()'], {
      type: 'application/javascript'
    })
  );
  worker = new Worker(blobURL);
  URL.revokeObjectURL(blobURL);
  return worker;
};
