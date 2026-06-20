function MasteredList({ cards }) {
  if (cards.length === 0) {
    return null
  }

  return (
    <section className="mastered-section" aria-labelledby="mastered-heading">
      <div className="mastered-heading-row">
        <h2 id="mastered-heading">Mastered cards</h2>
        <span>{cards.length}</span>
      </div>
      <ul>
        {cards.map((card) => (
          <li key={card.id}>
            <span>{card.answer}</span>
            <span className={`mastered-level ${card.difficulty.toLowerCase()}`}>
              {card.difficulty}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default MasteredList
