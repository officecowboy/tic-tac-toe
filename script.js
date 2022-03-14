
const squares = document.querySelectorAll(".square")
const reset = document.querySelector(".reset")
const header = document.querySelector(".text-top")

let j = 0;
let k = 0;
let l = true;


for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", function () {
    if (l === true) {
      if (j == 0 && squares[i].style.backgroundColor !== "red" && squares[i].style.backgroundColor !== "blue") {
        squares[i].style.backgroundColor = "red"
        j += 1
        k += 1
        header.innerHTML = ""

        if (k == 9) {
          header.innerHTML = "TIE!";
          l = false
        }

        if (squares[0].style.backgroundColor == 'red' && squares[1].style.backgroundColor == 'red' && squares[2].style.backgroundColor == 'red') {
          header.innerHTML = "RED WINS!"
          l = false
        }
        if (squares[3].style.backgroundColor == 'red' && squares[4].style.backgroundColor == 'red' && squares[5].style.backgroundColor == 'red') {
          header.innerHTML = "RED WINS!"
          l = false
        }
        if (squares[6].style.backgroundColor == 'red' && squares[7].style.backgroundColor == 'red' && squares[8].style.backgroundColor == 'red') {
          header.innerHTML = "RED WINS!"
          l = false
        }
        if (squares[0].style.backgroundColor == 'red' && squares[3].style.backgroundColor == 'red' && squares[6].style.backgroundColor == 'red') {
          header.innerHTML = "RED WINS!"
          l = false
        }
        if (squares[1].style.backgroundColor == 'red' && squares[4].style.backgroundColor == 'red' && squares[7].style.backgroundColor == 'red') {
          header.innerHTML = "RED WINS!"
          l = false
        }
        if (squares[2].style.backgroundColor == 'red' && squares[5].style.backgroundColor == 'red' && squares[8].style.backgroundColor == 'red') {
          header.innerHTML = "RED WINS!"
          l = false
        }
        if (squares[0].style.backgroundColor == 'red' && squares[4].style.backgroundColor == 'red' && squares[8].style.backgroundColor == 'red') {
          header.innerHTML = "RED WINS!"
          l = false
        }
        if (squares[2].style.backgroundColor == 'red' && squares[4].style.backgroundColor == 'red' && squares[6].style.backgroundColor == 'red') {
          header.innerHTML = "RED WINS!"
          l = false
        }

        return
      }
      if (j == 1 && squares[i].style.backgroundColor !== "red" && squares[i].style.backgroundColor !== "blue") {
        squares[i].style.backgroundColor = "blue"
        j -= 1
        k += 1

        if (k == 9) {
          header.innerHTML = "TIE!";
          l = false
        }

        if (squares[0].style.backgroundColor == 'blue' && squares[1].style.backgroundColor == 'blue' && squares[2].style.backgroundColor == 'blue') {
          header.innerHTML = "BLUE WINS!"
          l = false
        }
        if (squares[3].style.backgroundColor == 'blue' && squares[4].style.backgroundColor == 'blue' && squares[5].style.backgroundColor == 'blue') {
          header.innerHTML = "BLUE WINS!"
          l = false
        }
        if (squares[6].style.backgroundColor == 'blue' && squares[7].style.backgroundColor == 'blue' && squares[8].style.backgroundColor == 'blue') {
          header.innerHTML = "BLUE WINS!"
          l = false
        }
        if (squares[0].style.backgroundColor == 'blue' && squares[3].style.backgroundColor == 'blue' && squares[6].style.backgroundColor == 'blue') {
          header.innerHTML = "BLUE WINS!"
          l = false
        }
        if (squares[1].style.backgroundColor == 'blue' && squares[4].style.backgroundColor == 'blue' && squares[7].style.backgroundColor == 'blue') {
          header.innerHTML = "BLUE WINS!"
          l = false
        }
        if (squares[2].style.backgroundColor == 'blue' && squares[5].style.backgroundColor == 'blue' && squares[8].style.backgroundColor == 'blue') {
          header.innerHTML = "BLUE WINS!"
          l = false
        }
        if (squares[0].style.backgroundColor == 'blue' && squares[4].style.backgroundColor == 'blue' && squares[8].style.backgroundColor == 'blue') {
          header.innerHTML = "BLUE WINS!"
          l = false
        }
        if (squares[2].style.backgroundColor == 'blue' && squares[4].style.backgroundColor == 'blue' && squares[6].style.backgroundColor == 'blue') {
          header.innerHTML = "BLUE WINS!"
          l = false
        }

      }
    }
  })
}

reset.addEventListener("click", function () {
  for (let m = 0; m < squares.length; m++) {
    squares[m].style.backgroundColor = "white"
  }
  k = 0
  j = 0
  l = true
  header.innerHTML = "Click a square to begin!"
})
