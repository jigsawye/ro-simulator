import range from 'lodash/range';
import mapValues from 'lodash/mapValues';
import { jobStatBounses } from './constants';

export const statsPointCaculator = level => range(1, +level)
  .map((lv) => {
    if (lv < 100) {
      return Math.floor((lv / 5) + 3);
    } else if (lv < 151) {
      return Math.floor((lv / 10) + 13);
    }

    return Math.floor(((lv - 150) / 7) + 28);
  })
  .reduce((prev, curr) => prev + curr, 100);

export const statsRaiseCaculator = (level, stats) => {
  const statsPoint = statsPointCaculator(level);
  const raises = mapValues(stats, stat => range(1, stat).map(s => ((s < 100) ?
    Math.floor((s - 1) / 10) + 2 :
    (4 * Math.floor((s - 100) / 5)) + 16
  )).reduce((prev, curr) => prev + curr, 0));
  const totalRaise = Object.keys(raises).reduce((previous, key) => previous + raises[key], 0);

  return statsPoint - totalRaise;
};

export const statsBounsesCaculator = (job, level) => {
  const statsMap = ['str', 'agi', 'vit', 'int', 'dex', 'luk'];
  const jobBounses = jobStatBounses.filter(j => j.id === job);
  return jobBounses[0].bounses.filter(r => r[0] <= level)
    .reduce((prev, next) => {
      const nextBounses = { ...prev };
      nextBounses[statsMap[next[1]]] += 1;
      return nextBounses;
    }, { str: 0, agi: 0, vit: 0, int: 0, dex: 0, luk: 0 });
};
