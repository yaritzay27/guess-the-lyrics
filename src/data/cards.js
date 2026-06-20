import eternalSunshineVinyl from '../assets/eternal-sunshine-vinyl.png'
import hateThatIMadeYouLoveMeVinyl from '../assets/hate-that-i-made-you-love-me-vinyl.png'
import positionsVinyl from '../assets/positions-vinyl.png'
import sweetenerVinyl from '../assets/sweetener-vinyl.png'
import yoursTrulyVinyl from '../assets/yours-truly-vinyl.png'

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
].map((card, index) => ({ ...card, id: index + 1 }))

export default cards
