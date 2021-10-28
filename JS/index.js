$(document).ready(function () {
  $('#farmer').click(function () {

    sessionStorage.setItem('name', 'farmer');

  })
  $('#lion').click(function () {
    sessionStorage.setItem('name', 'lion');
  
  })
  $('#lair').click(function () {
    sessionStorage.setItem('name', 'lair');

  })
  $('#fox').click(function () {
    sessionStorage.setItem('name', 'fox');
  })
  $('#horse').click(function () {
    sessionStorage.setItem('name', 'horse');
  })
  $('#rabit').click(function () {
    sessionStorage.setItem('name', 'rabit');
  })
})