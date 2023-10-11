import css from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div className={css.statistics}>
      <div>
        <div>Good: {good}</div>
        <div>Neutral: {neutral}</div>
        <div>Bad: {bad}</div>
        <div>Total: {total}</div>
        <div>PositiveFeedback: {positivePercentage} %</div>
      </div>
    </div>
  );
}
