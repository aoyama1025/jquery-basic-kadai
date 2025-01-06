$(function () {
  $('#change-color').on('click', function () {
    $('#target').css('color', 'red');
  });

  $('#fade-out').on('click', function() {
    $('#target').fadeOut();
  });

  const text = document.getElementById('target');
  const btn = document.getElementById('change-text');
  btn.addEventListener('click', () => {
    text.textContent = 'Hello!';
  });

  $('#fade-in').on('click', function() {
    $('#target').fadeIn();
  });

});