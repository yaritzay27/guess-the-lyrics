export function normalizeAnswer(answer) {
  return answer
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function getEditDistance(firstValue, secondValue) {
  const previousRow = Array.from(
    { length: secondValue.length + 1 },
    (_, index) => index,
  )

  for (let firstIndex = 1; firstIndex <= firstValue.length; firstIndex += 1) {
    const currentRow = [firstIndex]

    for (
      let secondIndex = 1;
      secondIndex <= secondValue.length;
      secondIndex += 1
    ) {
      const substitutionCost =
        firstValue[firstIndex - 1] === secondValue[secondIndex - 1] ? 0 : 1

      currentRow[secondIndex] = Math.min(
        currentRow[secondIndex - 1] + 1,
        previousRow[secondIndex] + 1,
        previousRow[secondIndex - 1] + substitutionCost,
      )
    }

    previousRow.splice(0, previousRow.length, ...currentRow)
  }

  return previousRow[secondValue.length]
}

export function isAnswerCorrect(guess, targetAnswer) {
  const normalizedGuess = normalizeAnswer(guess)
  const normalizedTarget = normalizeAnswer(targetAnswer)

  if (!normalizedGuess) {
    return false
  }

  if (normalizedGuess === normalizedTarget) {
    return true
  }

  const shorterLength = Math.min(
    normalizedGuess.length,
    normalizedTarget.length,
  )
  const longerLength = Math.max(
    normalizedGuess.length,
    normalizedTarget.length,
  )
  const isMeaningfulPartial =
    shorterLength >= 5 &&
    shorterLength / longerLength >= 0.5 &&
    (normalizedGuess.includes(normalizedTarget) ||
      normalizedTarget.includes(normalizedGuess))

  if (isMeaningfulPartial) {
    return true
  }

  const allowedEdits =
    normalizedTarget.length >= 12 ? 2 : normalizedTarget.length >= 5 ? 1 : 0

  return getEditDistance(normalizedGuess, normalizedTarget) <= allowedEdits
}
