import { useState } from 'react'
import './App.css'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'
import Description from './components/Description/Description'

function App() {
  const [feedbacks, updateFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })
  return (
    <>
    <Description />
    
    <Options feedbackUpdates = {updateFeedbacks} feedbacks={feedbacks}/>
    <Feedback feedbacks={feedbacks}/>
    
    </>
  )
}

export default App
