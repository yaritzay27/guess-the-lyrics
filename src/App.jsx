import { useState } from 'react'
import AnswerForm from './components/AnswerForm'
import Controls from './components/Controls'
import Flashcard from './components/Flashcard'
import MasteredList from './components/MasteredList'
import StudyToolbar from './components/StudyToolbar'
import cards from './data/cards'
import { isAnswerCorrect } from './utils/answerMatching'
import './App.css'

function shuffleCards(cardList) {
  const shuffledCards = [...cardList]

  for (let index = shuffledCards.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1))
    const cardAtIndex = shuffledCards[index]
    shuffledCards[index] = shuffledCards[randomIndex]
    shuffledCards[randomIndex] = cardAtIndex
  }

  const orderDidNotChange = shuffledCards.every(
    (card, index) => card.id === cardList[index].id,
  )

  if (orderDidNotChange && shuffledCards.length > 1) {
    const firstCard = shuffledCards[0]
    shuffledCards[0] = shuffledCards[1]
    shuffledCards[1] = firstCard
  }

  return shuffledCards
}

function App() {
  const [activeCards, setActiveCards] = useState(cards)
  const [masteredCards, setMasteredCards] = useState([])
  const [cardIndex, setCardIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [guess, setGuess] = useState('')
  const [feedback, setFeedback] = useState('')
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [hasCorrectGuess, setHasCorrectGuess] = useState(false)
  const [currentStreak, setCurrentStreak] = useState(0)
  const [longestStreak, setLongestStreak] = useState(0)
  const currentCard = activeCards[cardIndex]

  const resetCardState = () => {
    setIsFlipped(false)
    setGuess('')
    setFeedback('')
    setHasSubmitted(false)
    setHasCorrectGuess(false)
  }

  const navigateToCard = (nextIndex) => {
    setCardIndex(nextIndex)
    resetCardState()
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (hasCorrectGuess) {
      return
    }

    const guessIsCorrect = isAnswerCorrect(guess, currentCard.answer)

    setFeedback(guessIsCorrect ? 'correct' : 'incorrect')
    setHasSubmitted(true)

    if (guessIsCorrect) {
      const nextStreak = currentStreak + 1

      setHasCorrectGuess(true)
      setIsFlipped(true)
      setCurrentStreak(nextStreak)
      setLongestStreak((previousLongest) =>
        Math.max(previousLongest, nextStreak),
      )
    } else {
      setCurrentStreak(0)
    }
  }

  const handleGuessChange = (value) => {
    setGuess(value)
    setFeedback('')
  }

  const handleFlip = () => {
    if (hasSubmitted) {
      setIsFlipped((flipped) => !flipped)
    }
  }

  const handleShuffle = () => {
    setActiveCards((currentCards) => shuffleCards(currentCards))
    setCardIndex(0)
    resetCardState()
  }

  const handleMasterCard = () => {
    if (!currentCard) {
      return
    }

    const remainingCards = activeCards.filter(
      (card) => card.id !== currentCard.id,
    )

    setMasteredCards((currentMasteredCards) => [
      ...currentMasteredCards,
      currentCard,
    ])
    setActiveCards(remainingCards)
    setCardIndex(
      remainingCards.length === 0
        ? 0
        : Math.min(cardIndex, remainingCards.length - 1),
    )
    resetCardState()
  }

  return (
    <main className="study-shell">
      <section className="set-header">
        <div>
          <p className="subheading">Ariana Grande Flashcards</p>
          <h1>Guess the Song</h1>
          <p className="description">
            Study each clue, submit your guess, and master all {cards.length}{' '}
            cards.
          </p>
        </div>
        <div className="set-count" aria-label="Cards remaining">
          {activeCards.length} remaining
        </div>
      </section>

      <section className="study-area" aria-label="Flashcard game">
        <StudyToolbar
          currentStreak={currentStreak}
          longestStreak={longestStreak}
          canShuffle={activeCards.length > 1}
          canMaster={Boolean(currentCard)}
          onShuffle={handleShuffle}
          onMaster={handleMasterCard}
        />

        {currentCard ? (
          <>
            <Flashcard
              card={currentCard}
              isFlipped={isFlipped}
              canFlip={hasSubmitted}
              onFlip={handleFlip}
            />

            <AnswerForm
              guess={guess}
              feedback={feedback}
              isCorrect={hasCorrectGuess}
              onGuessChange={handleGuessChange}
              onSubmit={handleSubmit}
            />

            <Controls
              currentIndex={cardIndex}
              totalCards={activeCards.length}
              onPrevious={() => navigateToCard(cardIndex - 1)}
              onNext={() => navigateToCard(cardIndex + 1)}
            />

            <div className="set-summary" aria-label="Flashcard set summary">
              <span className="question-total">
                {activeCards.length} questions
              </span>
              <span className="level-pill easy">Easy</span>
              <span className="level-pill medium">Medium</span>
              <span className="level-pill hard">Hard</span>
            </div>
          </>
        ) : (
          <div className="completion-panel">
            <span className="record-icon" aria-hidden="true">
              &#128191;
            </span>
            <h2>All cards mastered</h2>
            <p>You completed the full Ariana Grande card set.</p>
          </div>
        )}

        <MasteredList cards={masteredCards} />
      </section>
    </main>
  )
}

export default App
