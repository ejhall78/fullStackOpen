import React from 'react'

const Total = ( { parts } ) => {
    
    let exercises = parts.map(part => part.exercises)
    console.log(exercises)

    return (
        <strong>
            total of {exercises.reduce((a , b) => a + b)} exercises
        </strong>
    )
} 

export default Total