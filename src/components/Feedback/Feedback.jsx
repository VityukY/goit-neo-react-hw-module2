
export default function Feedback ({feedbacks}) {
    const total = Object.values(feedbacks).reduce((acc, value) => acc + value, 0);
    const possitives = feedbacks.good/  (feedbacks.good + feedbacks.bad) * 100|| 0;
    const allRating = {...feedbacks,'total':total,'possitives':possitives}

    return <>
    <ul>
        <li>Good: {allRating.good}</li>
        <li>Neutral: {allRating.neutral}</li>
        <li>Bad: {allRating.bad}</li>
        <li>Total: {allRating.total}</li>
        <li>possitives: {allRating.possitives.toFixed(2)}%</li>
    </ul>
    
    </>
}