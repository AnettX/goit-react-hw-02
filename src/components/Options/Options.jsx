import css from "./Options.module.css";

const Options = ({ updateFeedback, handleResetFeedback, total }) => {
  return (
    <div className={css.optionBtnContainer}>
      <button type="button" onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button type="button" onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button type="button" onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {total !== 0 && (
        <button type="button" onClick={handleResetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
