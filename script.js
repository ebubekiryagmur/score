function increaseScore(team) {
  const scoreId = `score${team}`
  const scoreElement = document.getElementById(scoreId) 
  let score = parseInt(scoreElement.textContent)
  scoreElement.textContent = ++score
}

function decreaseScore(team) {
  const scoreElement = document.getElementById("score" + team)
  let currentScore = parseInt(scoreElement.innerText)

  if(currentScore > 0 ) {
    currentScore--
    scoreElement.innerText = currentScore
  } else {
    alert("Skor 0'dan küçük olamaz.")
  }
}

document.getElementById("resetButtonA").addEventListener("click", function() {
  document.getElementById("scoreA").innerText = "0"
})

document.getElementById("resetButtonB").addEventListener("click", function() {
  document.getElementById("scoreB").innerText = "0"
})

function setScorePrompt(team) {
  const score = prompt("Yeni gol sayısı:")
  if(score !== null && !isNaN(score)) {
    const scoreNum = parseInt(score)
   if(Number.isInteger(scoreNum)) {
    document.getElementById(`score${team}`).textContent = scoreNum
   } else {
    alert("Lütfen geçerli bir sayı giriniz.")
   }
    
  } else {
    alert ("Giriş İptal edildi veya geçersiz bir değer girildi.")
  }
  
}
