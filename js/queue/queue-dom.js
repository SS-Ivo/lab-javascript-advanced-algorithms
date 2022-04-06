const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector(
  '#queue-container .warning-bottom'
);
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const queue = new Queue();

const clearQueueInput = () => {
  queueInput.value = '';
};

const generateListQueue = () => {
  // Clears the previous representation of the queue list so the new updated one can be drawn
    queueUL.innerHTML = "";

  /* We will iterate the number of times as the max size of the queue (in this case, 10 times).
  For each iteration, we will check if the queue array (queue.display) has any element on that specific index.
  If it has, with the string being either empty or not, we will draw an active line.
  For each index the queue has no value, we print an inactive line.*/
  for (let i = 0; i < queue.MAX_SIZE; i++){
    let li = document.createElement('li');
    if(queue.display()[i] || queue.display()[i] === ''){
      li.className = 'active';
      li.innerText = queue.display()[i];
      queueUL.appendChild(li); 
    } else {
      li.className = 'inactive';
      queueUL.appendChild(li);
    }
  }
};

generateListQueue();

const generateWarningQueue = (type) => {
  if (type === 'underflow') {
    warningBottomQueue.style.display = 'block';
    warningBottomQueue.innerText = type;
  } else if (type === 'overflow') {
    warningTopQueue.style.display = 'block';
    warningTopQueue.insertTime = type;
  }
};

const addToQueue = () => {
  try {
    queue.enqueue(queueInput.value);
    clearQueueInput();
    generateListQueue();
  } catch (error) {
    generateWarningQueue('overflow');
  }
};

const removeFromQueue = () => {
  try {
    queue.dequeue();
    generateListQueue();
  } catch (error) {
    generateWarningQueue('underflow');
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
