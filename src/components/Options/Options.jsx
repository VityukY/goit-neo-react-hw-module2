import Button from '../Button/Button'

export default function Options ({resetFeedbacks,total, feedbacks, updateRating}) {
    const buttonsTitles = Object.keys(feedbacks)
    
    return <>
    {buttonsTitles.map(title => {
        return <Button key={title} title={title} updateRating={updateRating}/>
    })}
    {Boolean(total) && <Button key='reset' title='Reset' resetFeedbacks={resetFeedbacks}/>}
    
    
    </>
}