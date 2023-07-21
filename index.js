function getLottoNumbers() {
  const winningNums = []
  for (let i = 0; i < 6; i++) {
    winningNums.push(Math.round(Math.random() * 100))
  }
  return winningNums
}

function getWinningNumbersHtml() {
  return getLottoNumbers()
    .map((num) => `<div class="number">${num}</div>`)
    .join('')
}

console.log(getWinningNumbersHtml())

document.getElementById('winning-numbers').innerHTML = getWinningNumbersHtml()
