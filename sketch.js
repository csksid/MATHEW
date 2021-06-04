var n1,n2;
var b1,b2,b3,b4;

//WELCOME TO VS CODE!!!!

function setup() {
  
  createCanvas(400, 400);
  
  num1 = createInput("Enter num1"); //5 --> "5"
  num1.position(5, 60);
  
  num2 = createInput("Enter num2");
  num2.position(200, 60);
  
  b1 = createButton('ADD');
  b1.position(10, 200);
  b1.mousePressed(add); //add--> callback func 
  
  b2 = createButton('Multiply');
  b2.position(100, 200);
  b2.mousePressed(mathew);
  
  b3 = createButton('Hax');
  b3.position(10, 300);
  b3.mousePressed(sub)
  
  b4 = createButton('NotHaxISwear')
  b4.position(100, 300)
  b3.mousePressed(div)
  
  
  textAlign(CENTER);
  textSize(15);
}

function draw() {
  background("turquoise")
  
  text("Number 1",70,50)
  text("Number 2",270,50)

  //parseInt() is a pe-defined js func used to  convert string data into integer
  // num1.value() --> value() is a func used to read the value entered by the user
  n1 = parseInt( num1.value() )
  n2 = parseInt( num2.value() )
}

function add(){

  console.log(n1+n2)
}

function mathew(){

console.log(n1*n2)
}

function sub(){

  console.log(n1-n2)
}

function div(){

  console.log(n1/n2)
}
