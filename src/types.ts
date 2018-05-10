export enum ActionKeys {
  SET_CODE_ERROR = 'SET_CODE_ERROR',
  SET_CODE_FN = 'SET_CODE_FN',
  SET_CODE_VALUE = 'SET_CODE_VALUE',
  SET_COUNTER = 'SET_COUNTER',
  SET_MUTED = 'SET_MUTED',
  SET_SAMPLE_RATE = 'SET_SAMPLE_RATE',
  SET_SQUARE_FIRST = 'SET_SQUARE_FIRST',
  SET_SQUARE_RECENT = 'SET_SQUARE_RECENT',
  SET_VOLUME = 'SET_VOLUME',
  STOP_PLAYING = 'STOP_PLAYING',
  TOGGLE_MUTED = 'TOGGLE_MUTED',
  SET_ANALYSER_DATA = 'SET_ANALYSER_DATA',
  SET_SELECTED_EXAMPLE = 'SET_SELECTED_EXAMPLE',
  SET_EXAMPLE_DROPDOWN_VISIBLE = 'SET_EXAMPLE_DROPDOWN_VISIBLE',
  TOGGLE_PLAYING = 'TOGGLE_PLAYING'
}
export enum Constants {
  SQUARE_FIRST_ROWS = 256,
  SQUARE_FIRST_COLS = 1024
}
export type ByteBeatState = {
  analyser: AnalyserData;
  code: Code;
  counter: Counter;
  examples: ExampleState;
  muted: Muted;
  playing: Playing;
  sampleRate: SampleRate;
  volume: Volume;
};
export type AnalyserData = {
  frequencyData: Uint8Array;
  timeDomainData: Uint8Array;
};
export type Data = {
  squareFirst: Array<RGBA>;
  squareRecent: Array<RGBA>;
};
export type Code = {
  value: string;
  error: null | Error;
  fn: null | Function;
};
export type Counter = number;
export type ExampleGroup = {
  group: string;
  examples: Array<any>;
};
export type Example = {
  group: string;
  itemNum: number;
  code0: string;
  code1?: string;
  author: string;
  title: string;
  source: string;
  samplerate?: number;
};
export type ExampleState = {
  examples: Array<Example>;
  selectedExample: Example;
  isExampleDropdownVisible: boolean;
};
export type Muted = boolean;
export type Playing = boolean;
export type RGBA = {
  r: number;
  g: number;
  b: number;
  a: number;
};
export type SampleRate = number;
export type Volume = number;
