import { useEffect, useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification ";

const initialFeedback = { good: 0, neutral: 0, bad: 0 };

function App() {
  const [feedback, setFeedback] = useState(() => {
    const stringifyFeedback = localStorage.getItem("feedbackValue");
    const parsedFeedback = JSON.parse(stringifyFeedback) ?? initialFeedback;
    return parsedFeedback;
  });

  const updateFeedback = (feedbackType) => {
    // feedbackType  -> "good" | "neutral" | "bad"
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  };

  const handleResetFeedback = () => {
    setFeedback(initialFeedback);
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveValue = Math.round(
    ((feedback.good + feedback.neutral) / totalFeedback) * 100
  );

  useEffect(() => {
    localStorage.setItem("feedbackValue", JSON.stringify(feedback));
  }, [feedback]);

  return (
    <div className="app-container">
      <Description />
      <Options
        updateFeedback={updateFeedback}
        handleResetFeedback={handleResetFeedback}
        total={totalFeedback}
      />

      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          total={totalFeedback}
          positiveValue={positiveValue}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
