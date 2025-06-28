import { useState } from 'react'
import person from './data'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { FaQuoteRight } from 'react-icons/fa6'

const App = () => {
  const [index, setIndex] = useState(0)
  const { id, name, job, image, text } = person[index]

  const nextPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1

      return newIndex % person.length
    })
  }
  const prevPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1 + person.length

      return newIndex % person.length
    })
  }
  const randomPerson = () => {
    let randomIndex = Math.floor(Math.random() * person.length)
    if (randomIndex === index) {
      randomIndex++
    }
    const newIndex = randomIndex % person.length
    setIndex(newIndex)
  }

  // console.log(person[index])
  return (
    <main>
      <article>
        <img src={image} />
        <h2>{name}</h2>
        <h4>{job}</h4>
        <p>{text}</p>
        <div>
          <button type="button" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button type="button" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button onClick={randomPerson}>Random person</button>
      </article>
    </main>
  )
}
export default App
