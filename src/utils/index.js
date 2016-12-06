import range from 'lodash/range';
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
  const raise = stats.reduce((p, stat) => (
      p + range(1, stat)
        .map(s => ((s < 100) ?
          Math.floor((s - 1) / 10) + 2 :
          (4 * Math.floor((s - 100) / 5)) + 16
        ))
        .reduce((prev, curr) => prev + curr, 0)
  ), 0);

  return statsPoint - raise;
};

export const statsBounsesCaculator = (job, level) => {
  const jobBounses = jobStatBounses.filter(j => j.id === job);
  return jobBounses[0].bounses.filter(r => r[0] <= level)
    .reduce((prev, next) => {
      const nextBounses = [...prev];
      nextBounses[next[1]] += 1;
      return nextBounses;
    }, [0, 0, 0, 0, 0, 0]);
};
