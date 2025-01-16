import React, { useEffect, useState } from "react";
import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";

// export default function App() {
//   const [feedback, setFeedback] = useState({
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   });
export default function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem("feedback");
    return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
  });
    useEffect(() => localStorage.setItem("feedback", JSON.stringify(feedback)), [feedback] )

     const updateFeedback = (feedbackType) => {
         setFeedback(prev => ({
             ...prev, [feedbackType]: prev[feedbackType] + 1,
        }))
        
    }
    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
    const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100)

    const cleanFeedback = () => {
  setFeedback({
    good: 0,
    neutral: 0,
    bad: 0,
  });
};
    return (
        <>
          
            <Description />
            <Options
                onLeaveFeedback={updateFeedback}
                feedback={feedback}
                totalFeedback={totalFeedback}
                cleanFeedback={cleanFeedback}/>
      {totalFeedback > 0 ? (
                <Feedback
                    feedback={feedback}
                    totalFeedback={totalFeedback}
                    positiveFeedback={positiveFeedback } />
      ) : (
        <Notification message="No feedback given yet."/>
      )}
        </>
    )
}








