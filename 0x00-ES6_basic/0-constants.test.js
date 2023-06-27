import { taskFirst, taskNext } from './0-constants.js';

test('Example test', () => {
  expect(`${taskFirst()} ${taskNext()}`).toBe('I prefer const when I can. But sometimes let is okay');
});
