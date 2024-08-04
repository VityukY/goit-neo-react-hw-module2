import { useState,useEffect } from 'react'
import './App.css'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'
import Description from './components/Description/Description'

function App() {
  const [feedbacks, updateFeedbacks] = useState(() => {   
    const savedRatings = window.localStorage.getItem("saved-rating")
    if (savedRatings !== null) {
      return JSON.parse(savedRatings)
    }
    return {
      good:0,
      bad:0,
      neutral:0
  };
  }
 )
 useEffect(() => {
  const ratings = JSON.stringify(feedbacks)
  window.localStorage.setItem("saved-rating", ratings);
}, [feedbacks]);

  const total = Object.values(feedbacks).reduce((acc, value) => acc + value, 0);
  return (
    <>
    <Description />
    <Options total = {total} feedbackUpdates = {updateFeedbacks} feedbacks={feedbacks}/>
    <Feedback feedbacks={feedbacks} total={total}/>
    </>
  )
}

export default App
