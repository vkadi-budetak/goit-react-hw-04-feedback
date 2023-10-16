import React, { useState } from 'react';

import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

import Statistics from './Statistics/Statistics';

import Section from './Section/Section';

import Notification from './Notification/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = property => {
    switch (property) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total > 0 ? (good * 100) / total : 0;
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={onLeaveFeedback}
          options={['good', 'neutral', 'bad']}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage().toFixed()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
export default App;

// export class App extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = property => {
//     this.setState(prevState => {
//       return {
//         [property]: prevState[property] + 1,
//       };
//     });
//   };

//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const total = this.countTotalFeedback();
//     return total > 0 ? (this.state.good * 100) / total : 0;
//   };

//   render() {
//     return (
//       <div>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             onLeaveFeedback={this.onLeaveFeedback}
//             options={['good', 'neutral', 'bad']}
//           />
//         </Section>

//         <Section title="Statistics">
//           {this.countTotalFeedback() > 0 ? (
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage().toFixed()}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }
