import Button from '../Button/Button'

export default function Options ({total, feedbacks, feedbackUpdates}) {
    const buttonsTitles = Object.keys(feedbacks)
    
    return <>
    {buttonsTitles.map(title => {
        return <Button key={title} title={title} feedbacks={feedbacks} feedbackUpdates={feedbackUpdates}/>
    })}
    {Boolean(total) && <Button key='reset' title='Reset' feedbacks={feedbacks} feedbackUpdates={feedbackUpdates}/>}
    
    
    </>
}