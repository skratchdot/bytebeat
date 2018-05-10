import getAlgorithmicSoundscapes from '../examples/algorithmic-soundscapes';
import getIteration1 from '../examples/iteration-1';
import getIteration2 from '../examples/iteration-2';
import getIteration3 from '../examples/iteration-3';
import getOther from '../examples/other';
import getOxaVideos from '../examples/oxa-videos';
import { Example, ExampleGroup } from '../types';

export default () => {
  const groups: Array<ExampleGroup> = [
    { group: 'Iteration 1', examples: getIteration1() },
    { group: 'Iteration 2', examples: getIteration2() },
    { group: 'Iteration 3', examples: getIteration3() },
    { group: 'OXA Videos', examples: getOxaVideos() },
    { group: 'Other', examples: getOther() },
    { group: 'Soundscapes', examples: getAlgorithmicSoundscapes() }
  ];
  let itemNum = 0;
  const examples: Array<Example> = [];
  groups.forEach((group) => {
    group.examples.forEach((example) => {
      examples.push({
        group: group.group,
        itemNum: itemNum++,
        ...example
      });
    });
  });
  return examples;
};
