document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('order-form');
  var productSelect = document.getElementById('product');
  var quantityInput = document.getElementById('quantity');
  var calcButton = document.getElementById('calc-btn');
  var errorMessage = document.getElementById('error-message');
  var result = document.getElementById('result');

  var quantityPattern = /^\d+$/;

  function showError(message) {
    errorMessage.textContent = message;
    errorMessage.hidden = false;
    result.textContent = '';
  }

  function clearError() {
    errorMessage.textContent = '';
    errorMessage.hidden = true;
  }

  function calculateTotal() {
    clearError();

    var rawValue = quantityInput.value.trim();

    if (rawValue === '') {
      showError('Введите количество товара.');
      return;
    }

    if (!quantityPattern.test(rawValue)) {
      showError('Количество должно быть целым неотрицательным числом.');
      return;
    }

    var quantity = parseInt(rawValue, 10);
    var price = parseInt(productSelect.value, 10);
    var total = price * quantity;

    result.textContent = 'Стоимость заказа: ' + total + ' руб.';
  }

  calcButton.addEventListener('click', calculateTotal);

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    calculateTotal();
  });
});
