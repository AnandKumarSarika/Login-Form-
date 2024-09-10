const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === '' || password === '') {
    alert('Please fill in both fields');
  } else {
    alert('Login successful');
    // You can add more functionality here, like sending form data to a server
  }
});
