// let chainBubbles = [];
class ChainBubble {

  // CHAIN BUBBLE CONSTRUCTOR
  constructor(title, userInput, id) {
    this.title = title;
    this.userInput = userInput;
    this.id = id;

    // chainBubbles.push(this);
  }

  // render = function(container) {
  //   console.log(`render container status: ${container}`); // delete later
  //   let bubble = document.createElement('div');
  //   bubble.classList.add('rendered-bubble');
  //   bubble.id = this.id;
  //   let h3 = document.createElement('h3');
  //   h3.textContent = this.title;
  //   let p = document.createElement('p');
  //   p.textContent = this.userInput;
  //   bubble.appendChild(h3);
  //   bubble.appendChild(p);
  //   container.appendChild(bubble);
  // };
}

export default ChainBubble;