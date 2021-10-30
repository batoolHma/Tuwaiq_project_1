function FavItem(image, title ) {
    this.img = image;
    this.tit = title;
 //  this.vid = video;
}

function addNewItemToFavorities(newItem) {
    let selectedItems = JSON.parse(window.localStorage.getItem('FavoriteItems'));
    console.log(selectedItems);
    if (selectedItems == null) {
        let a = [];
        a.push(newItem);
        console.log(newItem);
        window.localStorage.setItem('FavoriteItems', JSON.stringify(a));
    } else {
        selectedItems.push(newItem);
        window.localStorage.setItem('FavoriteItems', JSON.stringify(selectedItems));
    }
}
$(document).ready(function () {
    let favoriteItems = JSON.parse(window.localStorage.getItem('FavoriteItems'));
    console.log(favoriteItems);
    if (favoriteItems != null) {
        for (let i = 0; i < favoriteItems.length; i++) {
        
        $("#topRow").append( `<div class="col-12 col-md-4">
        <div class="card" style="width: 20;">
        <img  src="${favoriteItems[i].img}" class="card-img-top myImg" alt="horse">
        <div class="card-body">
          <h5  class="card-title">${favoriteItems[i].tit}</h5>

          <a href="stories.html" class="btn btn-primary">أقرا الان</a>
          <button onclick="window.location.href = ${favoriteItems[i].vid};">
              للمشاهدة هنا
            </button>
      
          
        </div>
      </div>
    </div>`)
        
        }
    }
    $('#story1').click(function () {
        let img = $('#lionn').attr('src');
        let tit = $('#liontit').text();
        //let vid = $('#vid1').attr();
        let newItem = new FavItem(img, tit);
        addNewItemToFavorities(newItem);
    })
    $('#story2').click(function () {
        let img = $('#foxx').attr('src');
        let tit = $('#foxtit').text();
        //let vid = $('#vid2').attr();
        let newItem = new FavItem(img, tit );
        addNewItemToFavorities(newItem);
    })
})
$('#story3').click(function () {
    let img = $('#horsee').attr('src');
    let tit = $('#horsetit').text();
    //let vid = $('#vid3').attr();
    let newItem = new FavItem(img, tit );
    addNewItemToFavorities(newItem);
})
$('#story4').click(function () {
    let img = $('#farmerr').attr('src');
    let tit = $('#farmertit').text();
    //let vid = $('#vid4').attr();
    let newItem = new FavItem(img, tit );
    addNewItemToFavorities(newItem);
})
$('#story5').click(function () {
    let img = $('#lairs').attr('src');
    let tit = $('#lairtit').text();
    //let vid = $('#vid5').attr();
    let newItem = new FavItem(img, tit );
    addNewItemToFavorities(newItem);
})
$('#story6').click(function () {
    let img = $('#rabits').attr('src');
    let tit = $('#rabittit').text();
    //let vid = $('#vid6').attr();
    let newItem = new FavItem(img, tit );
    addNewItemToFavorities(newItem);
})