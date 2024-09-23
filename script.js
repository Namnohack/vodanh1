let tempName = null;
let tempEmail = null;


document.getElementById('practice-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    tempName = name
    tempEmail = email
    alert(`${name}, ${email}`)
    const message = `Hello, ${name}! Thank you for signing up with ${email}.`;
    document.getElementById('form-message').textContent = message;
})

document.getElementById('color-button').addEventListener('click', function() {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
})

// // document.getElementById('header').addEventListener('mouseenter', () => {
//     ChangeColor()
// })

function changeColor() {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.getElementByClass("header").style.backgroundColor = randomColor
}




