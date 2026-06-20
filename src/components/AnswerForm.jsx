function AnswerForm({ guess, feedback, isCorrect, onGuessChange, onSubmit }) {
  const feedbackMessage =
    feedback === 'correct'
      ? 'Correct! You got it.'
      : feedback === 'incorrect'
        ? 'Not quite. Try again or reveal the answer.'
        : ''

  return (
    <form className={`answer-form ${feedback}`} onSubmit={onSubmit}>
      <label htmlFor="answer-input">Your answer</label>
      <div className="answer-row">
        <input
          id="answer-input"
          type="text"
          value={guess}
          onChange={(event) => onGuessChange(event.target.value)}
          placeholder="Enter the song or album title"
          autoComplete="off"
          disabled={isCorrect}
        />
        <button type="submit" disabled={!guess.trim() || isCorrect}>
          Submit
        </button>
      </div>
      <p
        className={`answer-feedback ${feedback || ''}`}
        role="status"
        aria-live="polite"
      >
        {feedbackMessage}
      </p>
    </form>
  )
}

export default AnswerForm
