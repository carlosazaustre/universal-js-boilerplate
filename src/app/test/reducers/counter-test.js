import counter from '../../reducers/counter';
import { increment, decrement } from '../../actions/CounterActions';
import { expect } from 'chai';

describe('counter-reducer', () => {

  it('increments', () => {
    expect(counter(10, increment())).to.equal(11);
  });

  it('decrements', () => {
    expect(counter(10, decrement())).to.equal(9);
  });
});
