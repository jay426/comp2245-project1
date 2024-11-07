document.getElementById('newsletter-form').addEventListener('submit', (event) => {
    event.preventDefault(); 
  
    const emailInput = document.getElementById('email-input');
    const email = emailInput.value.trim();
  
    const messageDiv = document.querySelector('.message');
  
    if (email) {
      
      messageDiv.textContent = `Thank you! Your email address "${email}" has been added to our mailing list!`;
      
    } else {

      messageDiv.textContent = 'Please enter a valid email address.';
    }
  
    emailInput.value = '';
  });