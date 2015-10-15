/*eslint-disable */
import testdom from "testdom";
testdom('<html><body></body></html>');

import Counter from "../../components/Counter";
import React from "react";
import ReactAddons from "react/addons";
import sinon from "sinon";
import chai, {expect} from "chai";
import sinonChai from "sinon-chai";
chai.use(sinonChai);

const TestUtils = React.addons.TestUtils;

describe('Counter component',() => {

  let increment = sinon.spy();
  let incrementIfOdd = sinon.spy();
  let decrement = sinon.spy();
  let counterProps = {increment: increment, incrementIfOdd: incrementIfOdd, decrement: decrement,counter:10};
  let counter = TestUtils.renderIntoDocument(<Counter {...counterProps}/>);

  it('increment click',() => {
    let buttons = TestUtils.scryRenderedDOMComponentsWithTag(counter,'button');
    TestUtils.Simulate.click(buttons[0])
    expect(increment).to.have.been.called;
  });

});
