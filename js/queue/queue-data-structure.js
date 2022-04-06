class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    if (this.queueControl.length < this.MAX_SIZE){
      return true;
    } else {
      return false;
    }
  }

  isEmpty() {
    if(this.queueControl.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  /*Still have to ask about this one. If i write it like this to behave as the exercise explanation diagram
  and the demo provided, it throws an error. The tests only pass if I make it behave like the stack iterations.*/
  enqueue(item) {
    if(this.canEnqueue()){
      this.queueControl.unshift(item);
      return this.queueControl;
    } else {
      throw new Error('QUEUE_OVERFLOW');
    }
  }

  dequeue() {
    if(!this.isEmpty()){
      return this.queueControl.pop();
    } else {
      throw new Error('QUEUE_UNDERFLOW');
    }
  }

  display() {
    return this.queueControl;
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
