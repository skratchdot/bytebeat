export default () => [
  {
    author: 'hadez',
    code0: '(t|t>>8)>>(t>>7)|(t<<6|t<<8)>>(t>>11)|(t<<7|t<<11)>>(t>>11)',
    title: '',
    source:
      'https://wiki.shackspace.de/doku.php?id=project:algorithmicsoundscapes'
  },
  {
    author: 'h0uz3',
    code0: '(t|t>>17)>>(t>>7)|(t<<2|t<<8)>>(t>>11)|(t<<2|t<<11)>>(t>>17)',
    title: 'cool morse blips after a while',
    source:
      'https://wiki.shackspace.de/doku.php?id=project:algorithmicsoundscapes'
  },
  {
    author: 'hadez',
    code0: 'Math.sin(t>>16)|(t|t>>8)',
    title: 'slow chippy bassline',
    source:
      'https://wiki.shackspace.de/doku.php?id=project:algorithmicsoundscapes'
  },
  {
    author: 'h0uz3',
    code0: '(t>>9&t>>8)*(t>>3)',
    title: 'Ready for a horror trip? Just add some LSD...',
    source:
      'https://wiki.shackspace.de/doku.php?id=project:algorithmicsoundscapes'
  },
  {
    author: 'h0uz3',
    code0: 't>>8|t-2)&(2-t|8<<t)',
    title: 'Symmetries are for pussies',
    source:
      'https://wiki.shackspace.de/doku.php?id=project:algorithmicsoundscapes'
  },
  {
    author: 'h0uz3',
    code0:
      '((t>>8|t-2)&(2-t|8<<t))<<((t>>8|t-2)&(2-t|8<<t))>>((t>>8|t-2)&(2-t|8<<t))',
    title: 'Downward spiral',
    source:
      'https://wiki.shackspace.de/doku.php?id=project:algorithmicsoundscapes'
  },
  {
    author: 'h0uz3',
    code0: '((t>>3|t<<7)|t>>11)|t>>16',
    title: 'Time to wake up, huh?',
    source:
      'https://wiki.shackspace.de/doku.php?id=project:algorithmicsoundscapes'
  },
  {
    author: 'h0uz3',
    code0: '((((t>>3|t<<7)|t>>11)|t>>16)&23)',
    title: '23 makes everything a little more sane',
    source:
      'https://wiki.shackspace.de/doku.php?id=project:algorithmicsoundscapes'
  },
  {
    author: 'samuirai',
    code0: '((Math.sin((t%17)*3.1415*0.5)*100)<<t/90)|(Math.sin(t*t*3.1415*0.5)*50)',
    title: 'dramatic space aliens',
    source:
      'https://wiki.shackspace.de/doku.php?id=project:algorithmicsoundscapes'
  },
  {
    author: 'tv',
    code0: '((t>>4)|(t<<4)&0x11111+t/1000)',
    title: 'Baby-Kübelwagen-Alarm-Therapist #x1 [pre]',
    source:
      'https://wiki.shackspace.de/doku.php?id=project:algorithmicsoundscapes'
  },
  {
    author: 'tv',
    code0: `t<700000?((t/2000%2?t<<3:t<<2)>>(t/10000%3)<<t/100000)
:t<800000?-t*t*t>>(t/1000)|t/(800000-t)
:t<805000?t<<(t/500)
:/*"fin"*/1/(t-t)`,
    title: 'Alarm-Symphony #x2 (w/happy end)',
    source:
      'https://wiki.shackspace.de/doku.php?id=project:algorithmicsoundscapes'
  },
  {
    author: 'bdwheele',
    code0: '((t>>7)* 0xff) * (t & 0xff)/32 & ~(t / 127)',
    title: 'Almost pac-man',
    source:
      'https://wiki.shackspace.de/doku.php?id=project:algorithmicsoundscapes'
  },
  {
    author: 'tito',
    code0: '((t>>10)<<((t>>4)%([8,9,10,11][(t>>11)%4]-(t>>15)%4)))',
    title: 'Boss level',
    source:
      'https://wiki.shackspace.de/doku.php?id=project:algorithmicsoundscapes'
  },
  {
    author: '',
    code0: '(t<<6|t<<8)>>(t>>11)',
    title: 'note 1',
    source:
      'https://wiki.shackspace.de/doku.php?id=project:algorithmicsoundscapes'
  },
  {
    author: '',
    code0: '(t<<7|t<<11)>>(t>>11)',
    title: 'note 2',
    source:
      'https://wiki.shackspace.de/doku.php?id=project:algorithmicsoundscapes'
  },
  {
    author: '',
    code0: '(t<<6|t<<8)>>(t>>11)|(t<<7|t<<11)>>(t>>11)',
    title: 'combine note 1 and 2',
    source:
      'https://wiki.shackspace.de/doku.php?id=project:algorithmicsoundscapes'
  }
];
