import { useState } from 'react'
import eternalSunshineVinyl from './assets/eternal-sunshine-vinyl.png'
import hateThatIMadeYouLoveMeVinyl from './assets/hate-that-i-made-you-love-me-vinyl.png'
import positionsVinyl from './assets/positions-vinyl.png'
import sweetenerVinyl from './assets/sweetener-vinyl.png'
import yoursTrulyVinyl from './assets/yours-truly-vinyl.png'
import './App.css'

const cards = [
  {
    clue: 'A grateful breakup anthem that names lessons from past relationships.',
    answer: 'thank u, next',
    album: 'thank u, next',
    year: '2019',
    difficulty: 'Easy',
  },
  {
    clue: 'A sparkling flex about matching jewelry, confidence, and best-friend luxury.',
    answer: '7 rings',
    album: 'thank u, next',
    year: '2019',
    difficulty: 'Easy',
  },
  {
    clue: 'A smooth love song where romance switches roles through the night and day.',
    answer: 'positions',
    album: 'positions',
    year: '2020',
    difficulty: 'Easy',
  },
  {
    clue: 'A healing pop track about choosing to keep dancing after sadness.',
    answer: 'no tears left to cry',
    album: 'Sweetener',
    year: '2018',
    difficulty: 'Medium',
  },
  {
    clue: 'A dangerous crush gets so intense that staying calm is no longer possible.',
    answer: 'Into You',
    album: 'Dangerous Woman',
    year: '2016',
    difficulty: 'Medium',
  },
  {
    clue: 'A duet where attraction is complicated by a situation that keeps getting in the way.',
    answer: 'Problem',
    album: 'My Everything',
    year: '2014',
    difficulty: 'Medium',
  },
  {
    clue: 'An escape-from-a-bad-love dance track about finally feeling independent.',
    answer: 'Break Free',
    album: 'My Everything',
    year: '2014',
    difficulty: 'Medium',
  },
  {
    clue: 'A dramatic track that turns devotion into something celestial and powerful.',
    answer: 'God is a woman',
    album: 'Sweetener',
    year: '2018',
    difficulty: 'Hard',
  },
  {
    clue: 'A quiet late-night confession about wanting one more moment with someone.',
    answer: 'One Last Time',
    album: 'My Everything',
    year: '2014',
    difficulty: 'Hard',
  },
  {
    clue: 'A dreamy song that compares a relationship to something rare, scientific, and bright.',
    answer: 'Moonlight',
    album: 'Dangerous Woman',
    year: '2016',
    difficulty: 'Hard',
  },
  {
    type: 'cover',
    cover: yoursTrulyVinyl,
    answer: 'Yours Truly',
    album: 'Yours Truly',
    year: '2013',
    difficulty: 'Easy',
  },
  {
    type: 'cover',
    cover: hateThatIMadeYouLoveMeVinyl,
    answer: 'hate that i made you love me',
    album: 'eternal sunshine',
    year: '2024',
    difficulty: 'Hard',
  },
  {
    type: 'cover',
    cover: sweetenerVinyl,
    answer: 'Sweetener',
    album: 'Sweetener',
    year: '2018',
    difficulty: 'Medium',
  },
  {
    type: 'cover',
    cover: eternalSunshineVinyl,
    answer: 'eternal sunshine',
    album: 'eternal sunshine',
    year: '2024',
    difficulty: 'Easy',
  },
  {
    type: 'cover',
    cover: positionsVinyl,
    answer: 'positions',
    album: 'positions',
    year: '2020',
    difficulty: 'Medium',
  },
]

function getRandomCardIndex(currentIndex) {
  if (cards.length === 1) {
    return 0
  }

  let nextIndex = currentIndex
  while (nextIndex === currentIndex) {
    nextIndex = Math.floor(Math.random() * cards.length)
  }

  return nextIndex
}

function App() {
  const [cardIndex, setCardIndex] = useState(0)
  const [questionNumber, setQuestionNumber] = useState(1)
  const [isFlipped, setIsFlipped] = useState(false)
  const currentCard = cards[cardIndex]

  const handleNextCard = () => {
    setCardIndex((currentIndex) => getRandomCardIndex(currentIndex))
    setQuestionNumber((currentQuestion) =>
      currentQuestion === cards.length ? 1 : currentQuestion + 1,
    )
    setIsFlipped(false)
  }

  return (
    <main className="study-shell">
      <section className="set-header">
        <div>
          <p className="subheading">Ariana Grande Flashcards</p>
          <h1>Guess the Song</h1>
          <p className="description">
            Read the lyric-inspired clue or study the vinyl cover, then flip
            the card to reveal the song.
          </p>
        </div>
        <div className="set-count" aria-label="Total cards">
          {cards.length} cards
        </div>
      </section>

      <section className="study-area" aria-label="Flashcard game">
        <button
          type="button"
          className={`flashcard ${isFlipped ? 'is-flipped' : ''} ${currentCard.difficulty.toLowerCase()}`}
          onClick={() => setIsFlipped((flipped) => !flipped)}
          aria-label={isFlipped ? 'Show lyric clue' : 'Reveal song answer'}
        >
          <div className="card-face card-front">
            <div className="card-meta">
              <span className="record-icon" aria-hidden="true">
                &#128191;
              </span>
              <span className="difficulty">{currentCard.difficulty}</span>
            </div>
            <div className="card-copy">
              <p className="prompt-label">
                {currentCard.type === 'cover' ? 'Vinyl cover clue' : 'Lyric clue'}
              </p>
              {currentCard.type === 'cover' ? (
                <img
                  className="cover-clue"
                  src={currentCard.cover}
                  alt="Stylized vinyl cover clue"
                />
              ) : (
                <p className="clue">{currentCard.clue}</p>
              )}
            </div>
          </div>

          <div className="card-face card-back">
            <div className="card-meta">
              <span className="record-icon" aria-hidden="true">
                &#128191;
              </span>
              <span className="difficulty">{currentCard.difficulty}</span>
            </div>
            <div className="card-copy">
              <p className="prompt-label">Song answer</p>
              <p className="answer">{currentCard.answer}</p>
              <p className="album">
                {currentCard.album} <span>({currentCard.year})</span>
              </p>
            </div>
          </div>
        </button>

        <div className="controls" aria-label="Flashcard controls">
          <button
            type="button"
            className="control-button"
            disabled
            aria-label="Previous card available in part two"
          >
            &larr;
          </button>
          <span className="card-progress">
            {questionNumber} / {cards.length}
          </span>
          <button
            type="button"
            className="control-button"
            onClick={handleNextCard}
            aria-label="Next random card"
          >
            &rarr;
          </button>
        </div>

        <div className="set-summary" aria-label="Flashcard set summary">
          <span className="question-total">{cards.length} questions</span>
          <span className="level-pill easy">Easy</span>
          <span className="level-pill medium">Medium</span>
          <span className="level-pill hard">Hard</span>
        </div>
      </section>
    </main>
  )
}

export default App
