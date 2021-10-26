$(document).ready(function(){
    $('#farmer').click(function(){
//set session storage name of the story
        // console.log()
        sessionStorage.setItem('name', 'farmer');
        // console.log(sessionStorage.getItem('name'));
        // window.location.href
    })
    $('#lion').click(function(){
        sessionStorage.setItem('name','lion');
    })
    $('#lair').click(function(){
        sessionStorage.setItem('name','lair');
  
  })
  $('#fox').click(function(){
    sessionStorage.setItem('name','fox');
  })
  $('#horse').click(function(){
    sessionStorage.setItem('name','horse');
  })
  $('#rabit').click(function(){
    sessionStorage.setItem('name','rabit');
  })
})

