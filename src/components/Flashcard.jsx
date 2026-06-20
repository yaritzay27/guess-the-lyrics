function Flashcard({ card, isFlipped, canFlip, onFlip }) {
  const clueLabel = card.type === 'cover' ? 'Vinyl cover clue' : 'Lyric clue'

  return (
    <button
      type="button"
      className={`flashcard ${isFlipped ? 'is-flipped' : ''} ${card.difficulty.toLowerCase()}`}
      onClick={onFlip}
      aria-label={
        isFlipped
          ? 'Show clue'
          : canFlip
            ? 'Reveal answer'
            : 'Submit a guess before revealing the answer'
      }
      aria-disabled={!canFlip}
    >
      <div className="card-face card-front">
        <div className="card-meta">
          <span className="record-icon" aria-hidden="true">
            &#128191;
          </span>
          <span className="difficulty">{card.difficulty}</span>
        </div>
        <div className="card-copy">
          <p className="prompt-label">{clueLabel}</p>
          {card.type === 'cover' ? (
            <img
              className="cover-clue"
              src={card.cover}
              alt="Ariana Grande vinyl cover clue"
            />
          ) : (
            <p className="clue">{card.clue}</p>
          )}
        </div>
      </div>

      <div className="card-face card-back">
        <div className="card-meta">
          <span className="record-icon" aria-hidden="true">
            &#128191;
          </span>
          <span className="difficulty">{card.difficulty}</span>
        </div>
        <div className="card-copy">
          <p className="prompt-label">Correct answer</p>
          <p className="answer">{card.answer}</p>
          <p className="album">
            {card.album} <span>({card.year})</span>
          </p>
        </div>
      </div>
    </button>
  )
}

export default Flashcard
