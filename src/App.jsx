import { useState,useEffect } from 'react'
import './App.css'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'
import Description from './components/Description/Description'
import Notifications from './components/Notifications/Notifications'



function App() {
  const [feedbacks, updateFeedbacks] = useState(() => {   
    const savedRatings = window.localStorage.getItem("saved-rating")
    if (savedRatings !== null) {
      return JSON.parse(savedRatings)
    }
    return {
      good:0,
      neutral:0,
      bad:0
  };
  }
 )
 useEffect(() => {
  const ratings = JSON.stringify(feedbacks)
  window.localStorage.setItem("saved-rating", ratings);
}, [feedbacks]);

  const total = Object.values(feedbacks).reduce((acc, value) => acc + value, 0);
  const possitives = ((feedbacks.good + feedbacks.neutral)/  total) * 100|| 0;

  function updateRating (title) {
    updateFeedbacks({
      ...feedbacks,
     [title]:feedbacks[title]+1
  })
  }  
  function resetFeedbacks () {
      updateFeedbacks({
        good:0,
        neutral:0,
        bad:0
    })
    }
  return (
    <>
    <Description />
    <Options  resetFeedbacks={resetFeedbacks} total = {total} updateRating = {updateRating} feedbacks={feedbacks}/>
    {total ?<Feedback possitives={possitives} feedbacks={feedbacks} total={total}/>:<Notifications />}
    </>
  )
}

export default App
