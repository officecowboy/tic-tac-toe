

let squares = document.querySelectorAll(".square")
let notification = document.querySelector(".text-top")
let reset = document.querySelector(".reset")
let squareOne = document.querySelector("#one")

let j = 0;
let k = 0;

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", function () {
    if (j == 0 && squares[i].style.backgroundColor !== "red" && squares[i].style.backgroundColor !== "blue") {
      squares[i].style.backgroundColor = "red";
      squares[i].style.display === "block";
      j += 1;
      k += 1;

      if (k == 9) {
        notification.innerHTML = "TIE!";
        reset.style.display = 'initial';
      }

      if (squares[0].style.backgroundColor == 'red' && squares[1].style.backgroundColor == 'red' && squares[2].style.backgroundColor == 'red') {
        notification.innerHTML = 'RED WINS!'
        reset.style.display = 'initial'

      }

      if (squares[3].style.backgroundColor == 'red' && squares[4].style.backgroundColor == 'red' && squares[5].style.backgroundColor == 'red') {
        notification.innerHTML = 'RED WINS!'
        reset.style.display = 'initial'
      }

      if (squares[6].style.backgroundColor == 'red' && squares[7].style.backgroundColor == 'red' && squares[8].style.backgroundColor == 'red') {
        notification.innerHTML = 'RED WINS!'
        reset.style.display = 'initial'
      }

      if (squares[0].style.backgroundColor == 'red' && squares[3].style.backgroundColor == 'red' && squares[6].style.backgroundColor == 'red') {
        notification.innerHTML = 'RED WINS!'
        reset.style.display = 'initial'
      }

      if (squares[1].style.backgroundColor == 'red' && squares[4].style.backgroundColor == 'red' && squares[7].style.backgroundColor == 'red') {
        notification.innerHTML = 'RED WINS!'
        reset.style.display = 'initial'
      }

      if (squares[2].style.backgroundColor == 'red' && squares[5].style.backgroundColor == 'red' && squares[8].style.backgroundColor == 'red') {
        notification.innerHTML = 'RED WINS!'
        reset.style.display = 'initial'
      }

      if (squares[0].style.backgroundColor == 'red' && squares[4].style.backgroundColor == 'red' && squares[8].style.backgroundColor == 'red') {
        notification.innerHTML = 'RED WINS!'
        reset.style.display = 'initial'
      }

      if (squares[2].style.backgroundColor == 'red' && squares[4].style.backgroundColor == 'red' && squares[8].style.backgroundColor == 'red') {
        notification.innerHTML = 'RED WINS!'
        reset.style.display = 'initial'
      }
      return
    }

    if (j == 1 && squares[i].style.backgroundColor !== "red" && squares[i].style.backgroundColor !== "blue") {
      squares[i].style.backgroundColor = "blue";
      j -= 1;
      k += 1;

      if (k == 9) {
        notification.innerHTML = "TIE!";
      }

      if (squares[0].style.backgroundColor == 'blue' && squares[1].style.backgroundColor == 'blue' && squares[2].style.backgroundColor == 'blue') {
        notification.innerHTML = 'BLUE WINS!'
        reset.style.display = 'initial'
      }

      if (squares[3].style.backgroundColor == 'blue' && squares[4].style.backgroundColor == 'blue' && squares[5].style.backgroundColor == 'blue') {
        notification.innerHTML = 'BLUE WINS!'
        reset.style.display = 'initial'
      }

      if (squares[6].style.backgroundColor == 'blue' && squares[7].style.backgroundColor == 'blue' && squares[8].style.backgroundColor == 'blue') {
        notification.innerHTML = 'BLUE WINS!'
        reset.style.display = 'initial'
      }

      if (squares[0].style.backgroundColor == 'blue' && squares[3].style.backgroundColor == 'blue' && squares[6].style.backgroundColor == 'blue') {
        notification.innerHTML = 'BLUE WINS!'
        reset.style.display = 'initial'
      }

      if (squares[1].style.backgroundColor == 'blue' && squares[4].style.backgroundColor == 'blue' && squares[7].style.backgroundColor == 'blue') {
        notification.innerHTML = 'BLUE WINS!'
        reset.style.display = 'initial'
      }

      if (squares[2].style.backgroundColor == 'blue' && squares[5].style.backgroundColor == 'blue' && squares[8].style.backgroundColor == 'blue') {
        notification.innerHTML = 'BLUE WINS!'
        reset.style.display = 'initial'
      }

      if (squares[0].style.backgroundColor == 'blue' && squares[4].style.backgroundColor == 'blue' && squares[8].style.backgroundColor == 'blue') {
        notification.innerHTML = 'BLUE WINS!'
        reset.style.display = 'initial'
      }

      if (squares[2].style.backgroundColor == 'blue' && squares[4].style.backgroundColor == 'blue' && squares[6].style.backgroundColor == 'blue') {
        notification.innerHTML = 'BLUE WINS!'
        reset.style.display = 'initial'
      }
    }
  })
}

reset.addEventListener("click", function () {

  for (let m = 0; m < squares.length; m++) {
    squares[m].style.backgroundColor = "white";
  }
  j = 0;
  k = 0;
  notification.innerHTML = ''
  reset.style.display = 'none'
})