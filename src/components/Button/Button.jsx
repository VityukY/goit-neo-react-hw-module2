export default function Button ({resetFeedbacks,title , updateRating}) {

    return <button
        onClick={() => {
            if (title=='Reset'){
                resetFeedbacks()
            }else{
                updateRating(title)
            }
        
    }
    }    
    
    >{title}</button>
}