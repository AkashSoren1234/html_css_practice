const username = document.getElementById("username")
const password = document.getElementById("password");
const form = document.querySelector("form");
const errorMessage = document.getElementById("errorMessage");



form.addEventListener('submit', (e) => {
 const errors = [];
 console.log(username.value)
 if (username.value.trim() === "") {
  errors.push("username required")
 }

 if (password.value.length < 4) {
  errors.push("Password must be at least 4 characters")
 }

  if (password.value.length > 10) {
    errors.push("Password must be less than 10 characters");
  }

 if(errors.length > 0) {
   e.preventDefault();
   errorMessage.toggleAttribute('hidden');
   errorMessage.innerHTML = errors.join(', ');
 }
})
