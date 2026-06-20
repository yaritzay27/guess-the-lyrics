function Controls({ currentIndex, totalCards, onPrevious, onNext }) {
  const isFirstCard = currentIndex === 0
  const isLastCard = currentIndex === totalCards - 1

  return (
    <div className="controls" aria-label="Flashcard navigation">
      <button
        type="button"
        className="control-button"
        onClick={onPrevious}
        disabled={isFirstCard}
        aria-label="Previous card"
      >
        &larr;
      </button>
      <span className="card-progress">
        {currentIndex + 1} / {totalCards}
      </span>
      <button
        type="button"
        className="control-button"
        onClick={onNext}
        disabled={isLastCard}
        aria-label="Next card"
      >
        &rarr;
      </button>
    </div>
  )
}

export default Controls
