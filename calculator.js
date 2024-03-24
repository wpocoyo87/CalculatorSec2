class Calculator {
  constructor() {
    this.currentLeft = ""; // 78 --> 132
    this.operation = ""; //
    this.currentRight = ""; //
  }

  reset() {
    this.currentLeft = ""; // 78 --> 132
    this.operation = ""; //
    this.currentRight = ""; //
  }


  appendNumber(num) {
    if (this.operation === "") {
      this.appendLeft(num)
    } else if(this.operation === "=") {
      this.reset();
      this.appendLeft(num)
    } else {
      this.appendRight(num)
    }
      
  }

  appendLeft(left) {
    this.currentLeft = this.currentLeft + left;
  }

  appendRight(right) {
    this.currentRight = this.currentRight + right;
  }

  setLeft(left) {
    this.currentLeft = left;
  }

  setRight(right) {
    this.currentRight = right;
  }

  setOperation(operation) {
    this.operation = operation;
  }

  output() {
    if (this.operation === "" || this.operation === "=")
      return parseInt(this.currentLeft).toString();
    else 
      return parseInt(this.currentRight).toString();
  }

  evaluate() {
    let result = 0;
    // do something
    // if this.operation equals 'x' --> result = left * right
    

    

    if (this.operation !== "=")
      this.operation = "";

    this.currentLeft = result.toString();
    this.currentRight = "";

    return;
  }

  debug() {
    console.log(
      `Left value is ${this.currentLeft} will be performing ${this.operation} operation to right value which is ${this.currentRight}`
    );
  }
}

console.log("Started...");

window.onload = (event) => {
  const calculator = new Calculator();
  const inputTxt = document.getElementById('displayOutput');

  const updateDisplay = (txt) => {
      inputTxt.value = txt;
  }


  const numberHandler = (event) => {
    //console.log(event.target.innerHTML);
    const value = event.target.innerHTML;
    calculator.appendNumber(value);
    updateDisplay(calculator.output());
    calculator.debug();
  };

  const operationHandler = (event) => {
    const value = event.target.innerHTML;
    calculator.setOperation(value);

    // Do something
    // 1. IF left has value , right has a value (evaluate)
    // Clear right
    calculator.debug();
  };

  // DO NOT CHANGE
  document
    .querySelectorAll(".number > button")
    .forEach((numberButton) =>
      numberButton.addEventListener("click", numberHandler)
    );

  document
    .querySelectorAll(".operation > button")
    .forEach((numberButton) =>
      numberButton.addEventListener("click", operationHandler)
    );
};
