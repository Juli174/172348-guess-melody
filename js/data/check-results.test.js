import countScore from './check-results.js';
import assert from 'assert';

describe(`Count number of scores`, () => {
  it(`Should allow to count win result`, () => {
    /**
     * игрок ответил на все вопросы, но сумма баллов < 10
     * */
    const answer1 = [
      {result: true, time: 10},
      {result: true, time: 40},
      {result: false, time: 10},
      {result: false, time: 40},
      {result: true, time: 50},
      {result: true, time: 40},
      {result: true, time: 10},
      {result: false, time: 10},
      {result: true, time: 10},
      {result: true, time: 10}
    ];
    assert.equal(countScore(2, answer1), 5);
    /**
     * игрок ответил на все вопросы и сумма баллов равна 10
     * */
    const answer2 = [
      {result: true, time: 10},
      {result: true, time: 40},
      {result: false, time: 10},
      {result: true, time: 40},
      {result: true, time: 10},
      {result: true, time: 10},
      {result: true, time: 10},
      {result: false, time: 40},
      {result: true, time: 10},
      {result: true, time: 10}
    ];
    assert.equal(countScore(2, answer2), 10);
    /**
     * игрок ответил на все вопросы и сумма баллов > 10
     * */
    const answer3 = [
      {result: true, time: 10},
      {result: true, time: 10},
      {result: true, time: 10},
      {result: true, time: 10},
      {result: true, time: 10},
      {result: true, time: 10},
      {result: true, time: 10},
      {result: true, time: 10},
      {result: true, time: 10},
      {result: true, time: 10}
    ];
    assert.equal(countScore(2, answer3), 20);
    /**
     * сумма баллов игрока > 10 и на все вопросы он отвечал менее 30 секунд
     * */
    const answer4 = [
      {result: true, time: 10},
      {result: true, time: 10},
      {result: false, time: 10},
      {result: true, time: 10},
      {result: true, time: 10},
      {result: false, time: 10},
      {result: true, time: 10},
      {result: true, time: 10},
      {result: true, time: 10},
      {result: true, time: 10}
    ];
    assert.equal(countScore(2, answer4), 12);
  });
  it(`Should allow to enter fail result`, () => {
    /**
      * игрок ответил на на все вопросы
      * */
    const answer5 = [
      {result: true, time: 10},
      {result: true, time: 40},
      {result: true, time: 40},
      {result: true, time: 10},
      {result: true, time: 10}
    ];
    assert.equal(countScore(0, answer5), -1);
    /**
     * игрок ответил на все вопросы, но проиграл
     * */
    const answer6 = [
      {result: true, time: 10},
      {result: true, time: 40},
      {result: false, time: 40},
      {result: true, time: 10},
      {result: true, time: 10},
      {result: false, time: 10},
      {result: false, time: 10},
      {result: false, time: 10},
      {result: false, time: 10},
      {result: false, time: 10}
    ];
    assert.equal(countScore(0, answer6), -5);
  });
  it(`Should not allow to enter incorrect params`, () => {
    const answer = [1, 2, 3, 4, 2, 2, 1, 3, 1, 1];
    assert.equal(countScore(2, null), -1);
    assert.equal(countScore(0), -1);
    assert.equal(countScore(0, []), -1);
    assert.equal(countScore(`some string`, answer), -1);
    assert.equal(countScore(null, answer), -1);
    assert.equal(countScore([], answer), -1);
    assert.equal(countScore({}, answer), -1);
    assert.equal(countScore(1, {}), -1);
    assert.equal(countScore(1, 4), -1);
    assert.equal(countScore(`<script>alert(1)</script>`, 4), -1);
    assert.equal(countScore(1, `document.getElementsByClassName(main)`), -1);
  });
});
