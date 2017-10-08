import assert from 'assert';
import results from './results.js';

describe(`Output of player results`, () => {
  it(`Should allow the player win`, () => {
    assert.notEqual(results([1, 4, 3], {score: 6, notes: 6, time: 30}).indexOf(`Вы заняли`), -1);
    assert.notEqual(results([2, 4, 3], {score: 1, notes: 6, time: 30}).indexOf(`Вы заняли`), -1);
  });

  it(`Should not allow the player win`, () => {
    assert.notEqual(results([1, 4, 3], {score: -1, notes: 6, time: 0}).indexOf(`Время вышло`), -1);
    assert.notEqual(results([1, 4, 3], {score: -1, notes: 0, time: 20}).indexOf(`У вас закончились`), -1);
  });

  it(`Should not allow to enter incorrect params`, () => {
    assert.notEqual(results([], {score: 5, notes: 6, time: 30}), false);
    assert.equal(results(null, {score: 5, notes: 6, time: 30}), false);
    assert.equal(results(null, {score: null, notes: 6, time: 30}), false);
    assert.equal(results(null, {score: 5, notes: null, time: 30}), false);
    assert.equal(results(null, {score: 5, notes: 6, time: null}), false);
  });
});
