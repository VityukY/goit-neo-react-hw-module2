
export default function Feedback ({possitives,feedbacks, total}) {
    return <>
    
    <ul>
        <li>Good: {feedbacks.good}</li>
        <li>Neutral: {feedbacks.neutral}</li>
        <li>Bad: {feedbacks.bad}</li>
        <li>Total: {total}</li>
        <li>possitives: {possitives.toFixed(2)}%</li>
    </ul>
        
    </>
}