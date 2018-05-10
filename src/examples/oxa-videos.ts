export default () => [
  {
    code0: '((t>>1%128)+20)*3*t>>14*t>>18 ',
    source: 'http://0xa.kuri.mu/2011/10/09/bitop-videos/',
    title: '2011-10-09',
    author: 'harism'
  },
  {
    code0: 't*(((t>>9)&10)|((t>>11)&24)^((t>>10)&15&(t>>15)))',
    source: 'http://0xa.kuri.mu/2011/10/09/bitop-videos/',
    title: '2011-10-09',
    author: 'tangent128'
  },
  {
    code0:
      '(t*t/256)&(t>>((t/1024)%16))^t%64*(0xC0D3DE4D69>>(t>>9&30)&t%32)*t>>18',
    source: 'http://0xa.kuri.mu/2011/10/09/bitop-videos/',
    title: '2011-10-12',
    author: 'ultrageranium'
  }
];
