import React, { useState } from 'react'


const Button = ({text, handleClick}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Stat = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  
  const total = good + neutral + bad

  if (total === 0) {
    return <div>No feedback given</div>
  }

  const average = () => ((good - bad)/total)

  const positive = () => ((good/total)*100) + ' %'

  return (
    <table>
      <tbody>
        <Stat text='good' value={good} />
        <Stat text='neutral' value={neutral} />
        <Stat text='bad' value={bad} />
        <Stat text='all' value={total} />
        <Stat text='average' value={average()} />
        <Stat text='positive' value={positive()} />
      </tbody>
    </table>
  )
} 

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good +1)
  const handleNeutralClick = () => setNeutral(neutral +1)
  const handleBadClick = () => setBad(bad +1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App