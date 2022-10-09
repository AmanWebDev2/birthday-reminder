import React from 'react'
import './list.css'

function List({people}) {
  return (
    <div>
        {people.map((person)=>{
           return(
           <article className='person' key={person.id}>
            <img src={person.image} alt="person-img" />
            <div>
                <h4>{person.name}</h4>
                <p>{person.age}</p>
            </div>
            </article>
        )
        })}
    </div>
  )
}

export default List