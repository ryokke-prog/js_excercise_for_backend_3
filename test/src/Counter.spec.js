const Counter = require("../../src/Counter.js");
const assert = require("power-assert");

describe('src/Counter.jsのテスト', () => {
  it('Counterインスタンスは_countプロパティを持つ', () => {
    const counter = new Counter();
    assert.equal(counter.hasOwnProperty('_count'), true);
  });

  it('_countプロパティの初期値は0である', () => {
    const counter = new Counter();
    assert.equal(counter._count === 0, true);
  });

  it('Counterインスタンスはincrementメソッドを持つ', () => {
    const counter = new Counter();
    assert.equal(typeof counter.increment === 'function', true);
  });

  it('incrementメソッドを実行すると_countの値が1増える', () => {
    const counter = new Counter();
    counter.increment();
    assert.equal(counter._count === 1, true);
  });

  it('Counterインスタンスはdecrementメソッドを持つ', () => {
    const counter = new Counter();
    assert.equal(typeof counter.decrement === 'function', true);
  });

  it('decrementメソッドを実行すると_countの値が1減る', () => {
    const counter = new Counter();
    counter.decrement();
    assert.equal(counter._count === -1, true);
  });

});