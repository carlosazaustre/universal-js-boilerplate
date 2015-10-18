/* eslint no-unused-expressions: 0 */
import { incrementIfOdd, increment, incrementAsync } from '../../actions/CounterActions';
import { spy, useFakeTimers } from 'sinon';
import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

describe('counter actions', () => {

  it('dispatch increment if odd', () => {
    let getState = () => {
      return { counter:3 };
    };

    let dispatch = spy();
    incrementIfOdd()(dispatch, getState);
    expect(dispatch).to.have.been.calledWith(increment());
  });

  it('increment async calls increment after one sec', () => {
    let dispatch = spy();
    let clock = useFakeTimers();
    incrementAsync()(dispatch);
    clock.tick(999);
    expect(dispatch).not.to.have.been.called;
    clock.tick(1);
    expect(dispatch).to.have.been.calledWith(increment());
    clock.restore();

  });
});
