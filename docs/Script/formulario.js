function toggleOptions(buttonId) {
  var optionsDiv = document.getElementById('options-div-' + buttonId.charAt(buttonId.length - 1));
  optionsDiv.classList.toggle('hidden');
  checkFormCompletion();
}

function validateForm() {
  var checkboxes = document.getElementsByName('botao');
  var isChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
  if (!isChecked) {
    alert('Por favor, selecione pelo menos uma opção.');
    return false;
  }

  for (var i = 1; i <= 3; i++) {
    var checkbox = document.getElementById('botao' + i);
    if (checkbox.checked) {
      var options = document.getElementsByName('option' + i);
      var isOptionChecked = Array.from(options).some(option => option.checked);
      if (!isOptionChecked) {
        alert('Por favor, selecione pelo menos uma opção para o Botão ' + i + '.');
        return false;
      }
    }
  }

  return true;
}

function checkFormCompletion() {
  var checkboxes = document.getElementsByName('botao');
  var isChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
  var allOptionsChecked = true;

  for (var i = 1; i <= 3; i++) {
    var checkbox = document.getElementById('botao' + i);
    if (checkbox.checked) {
      var options = document.getElementsByName('option' + i);
      var isOptionChecked = Array.from(options).some(option => option.checked);
      if (!isOptionChecked) {
        allOptionsChecked = false;
        break;
      }
    }
  }

  var submitButton = document.getElementById('submit-button');
  if (isChecked && allOptionsChecked) {
    submitButton.style.display = 'block';
  } else {
    submitButton.style.display = 'none';
  }
}

document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
  checkbox.addEventListener('change', checkFormCompletion);
});