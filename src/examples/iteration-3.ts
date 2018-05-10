// tslint:disable max-line-length
export default () => [
  {
    code0: '(t*5&t>>7)|(t*3&t>>10)',
    source: 'http://www.youtube.com/watch?v=tCRPUv8V22o',
    title: '2011-10-10',
    author: 'viznut'
  },
  {
    code0: '(int)(t/1e7*t*t+t)%127|t>>4|t>>5|t%127+(t>>16)|t',
    source: 'http://www.youtube.com/watch?v=tCRPUv8V22o',
    title: '2011-10-10',
    author: 'bst'
  },
  {
    code0:
      '((t/2*(15&(0x234568a0>>(t>>8&28))))|t/2>>(t>>11)^t>>12)+(t/16&t&24)',
    source: 'http://pouet.net/topic.php?which=8357&page=8',
    samplerate: 44100,
    title: '2011-10-04',
    author: 'kb'
  },
  {
    code0: '(t&t%255)-(t*3&t>>13&t>>6)',
    source: 'http://www.youtube.com/watch?v=tCRPUv8V22o  ',
    title: '2011-10-10',
    author: 'viznut'
  },
  {
    code0: 't>>4|t&((t>>5)/(t>>7-(t>>15)&-t>>7-(t>>15)))',
    source: 'http://www.youtube.com/watch?v=tCRPUv8V22o',
    title: '2011-10-10',
    author: 'droid'
  },
  {
    code0:
      '((t*("36364689"[t>>13&7]&15))/12&128)+(((((t>>12)^(t>>12)-2)%11*t)/4|t>>13)&127)',
    source: 'http://www.youtube.com/watch?v=tCRPUv8V22o',
    samplerate: 44100,
    title: '2011-10-10',
    author: 'ryg'
  },
  {
    code0: '(t*9&t>>4|t*5&t>>7|t*3&t/1024)-1',
    source: 'http://news.ycombinator.com/item?id=3063359',
    title: '2011-10-03',
    author: 'stephth'
  },
  {
    code0:
      '((t*(t>>12)&(201*t/100)&(199*t/100))&(t*(t>>14)&(t*301/100)&(t*399/100)))+((t*(t>>16)&(t*202/100)&(t*198/100))-(t*(t>>17)&(t*302/100)&(t*298/100)))',
    source: 'http://www.youtube.com/watch?v=tCRPUv8V22o',
    title: '2011-10-10 "Dante\'s Inferno" short version',
    author: 'viznut+oasiz'
  },
  {
    code0:
      '((t*(t>>12)&(201*t/100)&(199*t/100))&(t*(t>>14)&(t*301/100)&(t*399/100)))+((t*(t>>16)&(t*202/100)&(t*198/100))-(t*(t>>18)&(t*302/100)&(t*298/100)))',
    source: 'http://www.youtube.com/watch?v=tCRPUv8V22o',
    title: '2011-10-10 "Dante\'s Inferno" long version',
    author: 'viznut+oasiz'
  },
  {
    code0:
      'w=t>>9,k=32,m=2048,a=1-t/m%1,d=(14*t*t^t)%m*a,y=[3,3,4.7,2][p=w/k&3]*t/4,h="IQNNNN!!]]!Q!IW]WQNN??!!W]WQNNN?".charCodeAt(w/2&15|p/3<<4)/33*t-t,s=y*.98%80+y%80+(w>>7&&a*((5*t%m*a&128)*(0x53232323>>w/4&1)+(d&127)*(0xa444c444>>w/4&1)*1.5+(d*w&1)+(h%k+h*1.99%k+h*.49%k+h*.97%k-64)*(4-a-a))),s*s>>14?127:s',
    source: 'http://www.youtube.com/watch?v=tCRPUv8V22o',
    title:
      '2011-10-10 "Long-line Theory", Chaos Theory cover, optimized by ryg, p01 et al., JS-only',
    author: 'mu6k'
  },
  {
    code0: 't*(t^t+(t>>15|1)^(t-1280^t)>>10)',
    source: 'http://www.youtube.com/watch?v=tCRPUv8V22o',
    title: '2011-10-10',
    author: '216'
  },
  {
    code0:
      '(3e3/(y=t&16383)&1)*35 +(x=t*"6689"[t>>16&3]/24&127)*y/4e4 +((t>>8^t>>10|t>>14|x)&63)',
    source: 'http://www.youtube.com/watch?v=tCRPUv8V22o',
    samplerate: 32000,
    title: 'mu6k',
    author: 'mu6k'
  }
];
