function joined(){
    console.log('title')
    let title = document.getElementById('title');
    title.innerText='thank you!';
    let btn = document.getElementById('btn');
    btn.style.backgroundColor="yellow";
    btn.innerText = 'Rejoin!'
}

function convert(){
    let m = document.getElementById('meterInput');
  //  console.log(m.value);
    let cm = m.value* 100;
    let finalResult = m.value + " M is " + cm + "CM"
    let result=document.getElementById('result');
    result.innerText= cm;
    // make input field blank
    m.value= '';
}

function split(){
     let amount = document.getElementById('amount');
    let person= document.getElementById('persons');
    // toFixed() - to remove the decimal value
  let bill =( amount.value/person.value).toFixed(0);
   document.getElementById('result').innerText = bill;
}

// blank array to store the value of user
let users=[]
function add(){
    let name = document.getElementById('name');
    let email = document.getElementById('email');

   // console.log(name.value, email.value)
   let user={
     name:name.value,
     email:email.value
   }
   users.push(user)
   console.log(users)
}



// 1. divide height/weight = ans
// 2. ans/ height => BMI
// 3. BMI = weight / height². 

function calculateBMI(){

  let weightInput = document.getElementById("weight").value;
  let heightInput = document.getElementById("height").value;

  // Convert input values to numbers
  let weight = parseFloat(weightInput);
  let height = parseFloat(heightInput);
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    document.getElementById("result").textContent = 'Invalid input. Please enter valid numeric values for weight and height';
    return;
}

// Calculate BMI
let bmi = weight / (height * height);

// Determine the BMI category
let bmiCategory;
if (bmi < 18.5) {
    bmiCategory = 'Underweight';
} else if (bmi >= 18.5 && bmi <= 24.9) {
    bmiCategory = 'Normal weight';
} else if (bmi >= 25 && bmi <= 29.9) {
    bmiCategory = 'Overweight';
} else if (bmi >= 30 && bmi <= 34.9) {
    bmiCategory = 'Obesity';
} else {
    bmiCategory = 'Severe obesity';
}

// Display the result in the "result" element
document.getElementById("result").textContent = `Your BMI is ${bmi.toFixed(2)} (${bmiCategory})`;
}