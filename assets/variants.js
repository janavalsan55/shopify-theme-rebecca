// var product = {{ product | json }};

document.querySelectorAll('.product-option input[type="radio"]').forEach(radio => {
  radio.addEventListener('change', () => {
    
  var selectedOptions = []
  document.querySelectorAll('.product-option input[type="radio"]:checked').forEach(radio => {
  selectedOptions.push(radio.value)
  });
  });
});