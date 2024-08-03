export default function Button ({title , feedbackUpdates,feedbacks}) {

    return <button
        onClick={() => {
            if (title=='Reset'){
                feedbackUpdates({
                    good:0,
                    bad:0,
                    neutral:0
                })
            }else{
                feedbackUpdates({
                    ...feedbacks,
                   [title]:feedbacks[title]+1
                })
            }
        
    }
    }    
    
    >{title}</button>
}