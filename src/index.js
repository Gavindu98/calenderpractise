import RRuleGenerator from 'react-rrule-generator';
import React from 'react';


// render it as it is

const SimpleRender = () => (
  <RRuleGenerator onChange={(rrule) => console.log(`RRule changed, now it's ${rrule}`)} />
);


// or with your own forms configuration

import MyCustomCalendar from './MyCustomCalendar';

const CustomizedRender = () => (
  <RRuleGenerator
    onChange={(rrule) => console.log(`RRule changed, now it's ${rrule}`)}
    config={{
      repeat: ['Monthly', 'Weekly'],
      yearly: 'on the',
      monthly: 'on',
      end: ['Never', 'On date'],
      weekStartsOnSunday: true,
      hideError: true,
    }}
    customCalendar={MyCustomCalendar}
  />
);


// you can also use it as controlled input component and feed it with your own RRule!

class ControlledRender extends Component {
  state = {
    rrule: 'SOME REALLY COOL RRULE'
  };

  render() {
    return (
      <RRuleGenerator
        onChange={(rrule) => this.setState({ rrule })}
        value={this.state.rrule}
      />
    );
  }
}
