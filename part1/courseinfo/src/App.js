import React from 'react'


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
  const [part1, part2, part3] = course.parts
  
  return (
    <div>
      <h1>Course Name: {course.name}</h1>
      <p>
        {part1.name} contains {part1.exercises} exercises
      </p>
      <p>
        {part2.name} contains {part2.exercises} exercises
      </p>
      <p>
        {part3.name} contains {part3.exercises} exercises
      </p>
      <p>
        Total exercises: {part1.exercises + part2.exercises + part3.exercises}
      </p>
    </div>
  )
}

export default App