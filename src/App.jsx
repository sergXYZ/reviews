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
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>

        <div className="btn-container">
          <button className="prev-btn" type="button" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" type="button" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>
          Random person
        </button>
      </article>
    </main>
  )
}
export default App
