function initMap() {
  var usLatLng = {lat: 38, lng: -96};
  var hawaiiLatLng = {lat: 21, lng: -158};
  var alaskaLatLng = {lat: 64, lng: -149};
  var usMap = new google.maps.Map(document.getElementById('usMap'), {
    zoom: 4,
    center: usLatLng,
    mapTypeId: 'terrain',
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.TOP_RIGHT
    },
    streetViewControl: true,
    streetViewControlOptions: {
      position: google.maps.ControlPosition.TOP_RIGHT
    }
  });
  usMap.setOptions({ minZoom: 3, maxZoom: 15 });
  setUSMarkers(usMap);

  var alaskaMap = new google.maps.Map(document.getElementById('alaskaMap'), {
    zoom: 4,
    center: alaskaLatLng,
    mapTypeId: 'terrain',
    zoomControl: true,
    zoomControlOptions: {
    position: google.maps.ControlPosition.TOP_RIGHT
    },
    streetViewControl: true,
    streetViewControlOptions: {
    position: google.maps.ControlPosition.TOP_RIGHT
    }
  });
  alaskaMap.setOptions({ minZoom: 3, maxZoom: 15 });
  setAlaskaMarkers(alaskaMap);

  var hawaiiMap = new google.maps.Map(document.getElementById('hawaiiMap'), {
    zoom: 6,
    center: hawaiiLatLng,
    mapTypeId: 'terrain',
    zoomControl: true,
    zoomControlOptions: {
    position: google.maps.ControlPosition.TOP_RIGHT
    },
    streetViewControl: true,
    streetViewControlOptions: {
    position: google.maps.ControlPosition.TOP_RIGHT
    }
  });
  hawaiiMap.setOptions({ minZoom: 2, maxZoom: 15 });
  setHawaiiMarkers(hawaiiMap);
  favorite();
}

parkInfo.forEach((park) => {
  var select = `<option data-toggle="modal" data-target="#${park.id}">${park.title}</option>`;
  $('#park').append(select);
  park =
  `<div id="${park.id}" class="modal fade" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <img class="img-responsive" src="${park.image}" alt="national park">
          <h1 class="modal-title">${park.title}</h1>
          <h2 class="modal-title">Est. ${park.year}</h2>
        </div>
        <div class="modal-body">
          <h3>Top Features: </h3>
          <p>${park.features}</p>
          <p>Find out more here: <a href="${park.website}">${park.website}</a></p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary fav" data-complete-text="My Favorites" data-target="${park.id}" data-title="${park.title}">Add to Favorites</button>
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>`;
  $('#info').append(park);
})

$('#park').change(function(){
  var $park = $('#park option:selected').data('target')
  $($park).modal('toggle');
});

$('#favorite').change(function(){
  var $favorite = $('#favorite option:selected').data('target')
  $('#' + $favorite).modal('toggle');
});

function setHawaiiMarkers(hawaiiMap) {
  var hawaiiMarkers = [];
  parkInfo.forEach((park)=> {
    if(park.map === 'hawaiiMap') {
      var marker = new google.maps.Marker ({
        position: park.position,
        map: hawaiiMap,
        title: park.title,
        popup: '#' + park.id,
        animation: google.maps.Animation.DROP
      });
      hawaiiMarkers.push(marker);
      google.maps.event.addListener(marker, 'click', function(){
        $(this.popup).modal('toggle');
      });
    }
  })
}

function setAlaskaMarkers(alaskaMap) {
  var alaskaMarkers = [];
  parkInfo.forEach((park)=> {
    if(park.map === 'alaskaMap') {
      var marker = new google.maps.Marker ({
        position: park.position,
        map: alaskaMap,
        title: park.title,
        popup: '#' + park.id,
        animation: google.maps.Animation.DROP
      });
      alaskaMarkers.push(marker);
      google.maps.event.addListener(marker, 'click', function(){
        $(this.popup).modal('toggle');
      });
    }
  })
}

function setUSMarkers(usMap) {
  var usMarkers = [];
  parkInfo.forEach((park)=> {
    if(park.map === 'usMap') {
      var marker = new google.maps.Marker ({
        position: park.position,
        map: usMap,
        title: park.title,
        popup: '#' + park.id,
        animation: google.maps.Animation.DROP
      });
      usMarkers.push(marker);
      google.maps.event.addListener(marker, 'click', function(){
        $(this.popup).modal('toggle');
      });
    }
  })
}

var favoriteParks = [];

function favorite() {
  $('.fav').one('click', function(){
    var title = $(this).attr('data-title');
    var target = $(this).attr('data-target');
    $(this).button('complete');
    favoriteParks.push(title);
    $('#favorite').append('<option data-target=' + target + '>' + title + '</option>');
  });
}
