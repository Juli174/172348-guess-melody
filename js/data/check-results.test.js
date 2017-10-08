import countScore from './check-results.js';
import assert from 'assert';

/**
 * 1 - правильный ответ, время ответа менее 30 секунд
 * 2 - правильный ответ, время ответа более 30 секунд
 * 3 - неправильный ответб время ответа менее 30 секунд
 * 4 - неправильный ответ, время ответа игрока более 30 секунд
 * */

describe(`Count number of scores`, () => {
  it(`Should allow to count win result`, () => {
    /**
     * игрок ответил на все вопросы, но сумма баллов < 10
     * */
    let answer = [1, 2, 3, 4, 2, 2, 1, 3, 1, 1];
    assert.equal(countScore(2, answer), 5);
    /**
     * игрок ответил на все вопросы и сумма баллов равна 10
     * */
    answer = [1, 2, 3, 2, 1, 1, 1, 4, 1, 1];
    assert .equal(countScore(2, answer), 10);
    /**
     * игрок ответил на все вопросы и сумма баллов > 10
     * */
    answer = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    assert .equal(countScore(2, answer), 10);
    /**
     * сумма баллов игрока > 10 и на все вопросы он отвечал менее 30 секунд
     * */
    answer = [1, 1, 3, 1, 1, 3, 1, 3, 1, 3];
    assert.equal(countScore(2, answer), 10);
  });
  it(`Should allow to enter fail result`, () => {
    /**
      * игрок ответил на на все вопросы
      * */
    let answer = [1, 2, 2, 1, 1];
    assert.equal(countScore(0, answer), -1);
    /**
     * игрок ответил на все вопросы, но проиграл
     * */
    answer = [1, 2, 2, 1, 1, 3, 3, 3, 3, 3];
    assert.equal(countScore(0, answer), -2);
  });
  it(`Should not allow to enter incorrect params`, () => {
    assert.equal(countScore(2, null), -1);
    assert.equal(countScore(0), -1);
    assert.equal(countScore(0, []), -1);
    assert.equal(countScore(`some string`, [1, 2, 3, 4, 2, 2, 1, 3, 1, 1]), -1);
    assert.equal(countScore(null, [1, 2, 3, 4, 2, 2, 1, 3, 1, 1]), -1);
    assert.equal(countScore([], [1, 2, 3, 4, 2, 2, 1, 3, 1, 1]), -1);
    assert.equal(countScore({}, [1, 2, 3, 4, 2, 2, 1, 3, 1, 1]), -1);
    assert.equal(countScore(1, {}), -1);
  });
});
