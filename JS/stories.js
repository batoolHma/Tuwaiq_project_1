$(document).ready(function(){
    let story = sessionStorage.getItem('name');
    //console.log(story);

    $('#'+story).removeClass('hidden');
})