const gurusList = shuffleArray([
  'Earth',
  'Water',
  'Air',
  'Fire',
  'Sky',
  'Moon',
  'Sun',
  'Pigeon',
  'Python',
  'Ocean',
  'Moth',
  'Bumblebee',
  'Honey gatherer',
  'Elephant',
  'Deer',
  'Fish',
  'Dancing-girl Pingala',
  'Raven',
  'Child',
  'Maiden who found peace',
  'Serpent',
  'An arrow-maker',
  'Spider',
  'Beetle'
])

const falseGurus = shuffleArray(['Tree', 'Rope', 'Lion', 'Ant', 'Cow'])

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

export { gurusList, falseGurus, shuffleArray }
