
// add a function to proceed a data//
(function () {
/* --- select elements using variables and querySelector --- */
//select the screen (input)//
  let screen = document.querySelector('.screen');
//select buttons with numbers and operators//
  let buttons = document.querySelectorAll('.btn');
//select clear button//
  let clear = document.querySelector('.btn-clear');
//select equal button//
  let equal = document.querySelector('.btn-equal');

/* --- make this variables calculate data --- */

// push buttons value to screen //
/*check each button and find out which button was pressed. 
function works only if event is active */
  buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
    /* take a value of button using attributes num in html and put it inside a variable.
    first it should be event, than we target button using dataset.num */
      let value = e.target.dataset.num;
    // push value storing in variable inside the screen //
      screen.value += value;
    });
  });

/* --- convert string from buttons into numbers and calculate --- */
// make equal button to work when we have some data in screen and when button pressed //
  equal.addEventListener('click', function (e) {
    if (screen.value === '') {
      screen.value = '';
    } else {
    // evaluate string and calculate data //
      let answer = eval(screen.value);
    // display result //
      screen.value = answer;
    }
  });

// make clear button works //
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
