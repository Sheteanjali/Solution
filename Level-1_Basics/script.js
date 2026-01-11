// Task 2: Greeting based on current time
function displayGreeting() {
    const now = new Date();
    const hour = now.getHours();
    let greeting;

    if (hour < 12) {
        greeting = "Good Morning! Welcome to Level 1.";
    } else if (hour < 18) {
        greeting = "Good Afternoon! Welcome to Level 1.";
    } else {
        greeting = "Good Evening! Welcome to Level 1.";
    }

    alert(greeting);
}

// Task 2: Button Color Change logic
const colorBtn = document.getElementById('colorBtn');

colorBtn.addEventListener('click', function() {
    // Generate a random hex color
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    colorBtn.style.backgroundColor = randomColor;
});

// Task 2: Basic Calculator (Addition)
function calculateSum() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultElement = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers in both fields.");
    } else {
        const sum = num1 + num2;
        resultElement.innerText = sum;
    }
}