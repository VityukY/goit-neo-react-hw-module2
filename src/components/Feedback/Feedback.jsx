
export default function Feedback ({feedbacks, total}) {
    const possitives = ((feedbacks.good + feedbacks.neutral)/  total) * 100|| 0;
    return <>
    
    {total ? <ul>
        <li>Good: {feedbacks.good}</li>
        <li>Neutral: {feedbacks.neutral}</li>
        <li>Bad: {feedbacks.bad}</li>
        <li>Total: {total}</li>
        <li>possitives: {possitives.toFixed(2)}%</li>
    </ul>:<p>There is no feedback</p>}
        
    </>
}