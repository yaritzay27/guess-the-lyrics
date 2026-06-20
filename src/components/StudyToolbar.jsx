function StudyToolbar({
  currentStreak,
  longestStreak,
  canShuffle,
  canMaster,
  onShuffle,
  onMaster,
}) {
  return (
    <div className="study-toolbar">
      <div className="streaks" aria-label="Answer streaks">
        <span>
          Current <strong>{currentStreak}</strong>
        </span>
        <span>
          Longest <strong>{longestStreak}</strong>
        </span>
      </div>
      <div className="study-actions">
        <button type="button" onClick={onShuffle} disabled={!canShuffle}>
          <span aria-hidden="true">&#8644;</span> Shuffle
        </button>
        <button type="button" onClick={onMaster} disabled={!canMaster}>
          <span aria-hidden="true">&#10003;</span> Mark mastered
        </button>
      </div>
    </div>
  )
}

export default StudyToolbar
