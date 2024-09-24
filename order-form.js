document.addEventListener('DOMContentLoaded', function() {
  // Calculate total amount when product or quantity changes
  function calculateTotal() {
    var productPrice = parseFloat(document.getElementById('product').value) || 0;
    var quantity = parseInt(document.getElementById('quantity').value) || 0;
    var total = (productPrice * quantity).toFixed(2);
    document.getElementById('totalAmount').textContent = total;
  }

  // Attach event listeners
  document.getElementById('product').addEventListener('change', calculateTotal);
  document.getElementById('quantity').addEventListener('input', calculateTotal);

  // Handle form submission
  document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var productSelect = document.getElementById('product');
    var productText = productSelect.options[productSelect.selectedIndex].text;
    var quantity = document.getElementById('quantity').value;
    var totalAmount = document.getElementById('totalAmount').textContent;

    // Prepare email content
    var emailBody = `
      Name: ${name}
      Email: ${email}
      Product: ${productText}
      Quantity: ${quantity}
      Total Amount: $${totalAmount}
    `;

    // Send form data to your email (requires a form handling service)

    // Redirect to confirmation page
    window.location.href = '/confirmation-page';
  });
});
