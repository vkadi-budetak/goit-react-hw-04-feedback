export default function FeedbackOptions({ onLeaveFeedback, options }) {
  return (
    <div>
      {options.map(name => (
        <button key={name} onClick={() => onLeaveFeedback(name)}>
          {name}
        </button>
      ))}
    </div>
  );
}
