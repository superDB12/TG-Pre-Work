const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(small => {
  return small < 250
})
console.log(randomNumbers+ '\n' +smallNumbers)

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(long => {
  return long.length > 7
})

console.log(longFavoriteWords)

//.filter is not a mutagen. It will not make Ninja Turtle arrays. Just new arrays using whatever function you put into them.
