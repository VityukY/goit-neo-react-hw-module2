import Button from '../Button/Button'

export default function Options ({feedbacks, feedbackUpdates}) {
    const buttonsTitles = Object.keys(feedbacks)
    return <>
    {buttonsTitles.map(title => {
        return <Button key={title} title={title} feedbacks={feedbacks} feedbackUpdates={feedbackUpdates}/>
    })}
    <Button key='reset' title='Reset' feedbacks={feedbacks} feedbackUpdates={feedbackUpdates}/>
   
    
    </>
}