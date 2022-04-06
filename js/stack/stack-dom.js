const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector(
  '#stack-container .warning-bottom'
);
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new Stack();

const clearStackInput = () => {
  stackInput.value = "";
};

const renderListStack = () => {
// Clears the previous representation of the stacklist so the new updated one can be drawn
  stackList.innerHTML = "";

  /* We will iterate the number of times as the max size of the stack (in this case, 10 times).
  For each iteration, we will check if the stack array (newStack.display) has any element on that specific index.
  If it has, with the string being either empty or not, we will draw an active line.
  For each index the stack has no value, we print an inactive line.*/
  for (let i = 0; i < newStack.MAX_SIZE; i++){
    let li = document.createElement('li');
    if(newStack.display()[i] || newStack.display()[i] === ''){
      li.className = 'active';
      li.innerText = newStack.display()[i];
      stackList.appendChild(li); 
    } else {
      li.className = 'inactive';
      stackList.appendChild(li);
    }
  }
};



const generateWarningStack = (type) => {
  if (type === 'underflow') {
        // If we have an underflow, we will first make sure the warning div will be visible 
    warningBottomStack.style.display = 'block';
    // Then we insert the underflow text inside the div
    warningBottomStack.innerText = type;
  } else if (type === 'overflow') {
    // If we have an overflow, we will first make sure the warning div will be visible 
    warningTopStack.style.display = 'block';
    // Then we insert the overflow text inside the div
    warningTopStack.innerText = type;
  }
};

const addToStack = () => {
  try {
    /* When the button is clicked, the value from the form is inserted inside the
    stack array using its specific push method coded on the other file. */
    newStack.push(stackInput.value);
    clearStackInput();
    renderListStack();
  } catch (error) {
    generateWarningStack('overflow');
  }
};

const removeFromStack = () => {
  try {
    // Clicking the remove button calls the pop method from newStack. Then we re-draw the list with the updated stack
    newStack.pop();
    renderListStack();
  } catch (error) {
    generateWarningStack('underflow');
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
