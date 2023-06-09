// Say hello let'us build a calculator
console.log('hello');

(function () {
  let screen = document.querySelector('.screen');
  let buttons = document.querySelectorAll('.btn');
  let clear = document.querySelector('.btn-clear');
  let equal = document.querySelector('.btn-equal');

  buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
      let value = e.target.dataset.num;
      screen.value += value;
    });
  });

  equal.addEventListener('click', function (e) {
    if (screen.value === '') {
      screen.value = '';
    } else {
      let answer = eval(screen.value);
      screen.value = answer;
    }
  });

  clear.addEventListener('click', function (e) {
    screen.value = '';
  });
})();

// const input = document.getElementById('show');
// const parent = document.getElementById('parent');

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// for(const num of numbers){
//     let numElement = document.createElement('div');
//     numElement.classList.add('num-button');
//     numElement.innerText = num;

//     numElement.addEventListener('click', () => {
//         show.value += num;
//     })

//     parent.append(numElement)
// }
