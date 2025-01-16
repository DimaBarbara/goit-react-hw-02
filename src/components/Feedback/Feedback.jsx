import React from "react";

export default function Feedback({feedback, totalFeedback, positiveFeedback}) {
   
        const liObj = Object.keys(feedback)
    return (
        <>
            <ul style={{listStyleType: "none"}}> {liObj.map(option => 
               (<li key={option}>{option}: {feedback[option]} </li> )
            )}
                <li>Total Feedback: {totalFeedback}</li>
      <li>Positive Feedback: {positiveFeedback}%</li>
            </ul>
            
           
        </>
    )
}