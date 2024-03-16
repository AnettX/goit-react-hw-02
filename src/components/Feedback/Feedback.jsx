import css from "./Feedback.module.css";

const Feedback = ({ feedback, total, positiveValue }) => {
  return (
    <div className={css.feedbackContainer}>
      <li>Good: {feedback.good}</li>
      <li>Neutral: {feedback.neutral}</li>
      <li>Bad: {feedback.bad}</li>
      <li>Total: {total}</li>
      <li>Positive: {positiveValue}%</li>
    </div>
  );
};

export default Feedback;
