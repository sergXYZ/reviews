import { useState } from 'react'
import person from './data'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { FaQuoteRight } from 'react-icons/fa6'

const App = () => {
  const [index, setIndex] = useState(0)
  const { id, name, job, image, text } = person[index]
  console.log(person[index])
  return (
    <main>
      <article>
        <img src={image} />
        <h2>{name}</h2>
        <h4>{job}</h4>
        <p>{text}</p>
        <div>
          <button type="button">
            <FaChevronLeft />
          </button>
          <button type="button">
            <FaChevronRight />
          </button>
        </div>
      </article>
    </main>
  )
}
export default App
