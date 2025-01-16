export default function Options({feedback, onLeaveFeedback, totalFeedback, cleanFeedback}) {

   const btnObj = Object.keys(feedback)
    return (
        <>
            <div style={{display: "flex", gap: 5}}>
               {btnObj.map(option => 
               (<button key={option} onClick={() => onLeaveFeedback(option)}>{option}</button> )
            )}
             {totalFeedback > 0 && (
        <button onClick={cleanFeedback}>Reset</button>
      )} 
            </div>
            
        </>
    )
} 