function initMap() {
  var us = {lat: 38, lng: -96};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: us,
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

  var alaska = {lat: 64, lng: -149};
  var map2 = new google.maps.Map(document.getElementById('map2'), {
    zoom: 4,
    center: alaska,
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

  var hawaii = {lat: 21, lng: -158};
  var map3 = new google.maps.Map(document.getElementById('map3'), {
    zoom: 6,
    center: hawaii,
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

  var contentAcadia = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/acadia.jpeg" alt="acadia">'+
  '<h2 class="modal-title" >Acadia National Park</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>Cadillac Mountain, Bass Harbor Head, Thunder Hole, Jordan Pond, Sand Beach, Asticou Azalea Garden, Wild Gardens of Acadia, Bubble Rock Overlook, Blue Hill Overlook, Gorham Mountain Trailhead, and plenty more!</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/acad/index.htm">www.nps.gov/acad/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="Acadia">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var acadiaMarker = new google.maps.Marker({
    position: {lat: 44.35, lng: -68.21},
    map: map,
    title: 'Acadia National Park'
  });
  google.maps.event.addListener(acadiaMarker, 'click', function(){
    $(contentAcadia).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var contentAmericanSamoa = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/american_samoa.jpg" alt="american samoa">'+
  '<h2 class="modal-title">National Park of American Samoa</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>Pola Island Trail, World War 2 Heritage Trail, Lower Sauma Ridge Trail, Tuafanua Trail, Blunts Point Trail, Breakers Point Trail, Vatia Bay, Mount &#39;Alava, Si&#39;u Point Trail, Oge Beach Trail, and plenty more!</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/npsa/index.htm">www.nps.gov/npsa/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="American Samoa">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var americanSamoaMarker = new google.maps.Marker({
    position: {lat: -14.25, lng: -170.68},
    map: map3,
    title:'National Park of American Samoa'
  });
  google.maps.event.addListener(americanSamoaMarker, 'click', function(){
    $(contentAmericanSamoa).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var contentArches = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/arches.jpg" alt="arches">'+
  '<h2 class="modal-title">Arches National Park</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>Delicate Arch, Landscape Arch, Corona Arch, Double Arch, Fiery Furnace, Balanced Rock, Turret Arch, North Window, Courthouse Towers, Devil&#39;s Garden, and plenty more!</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/arch/index.htm">www.nps.gov/arch/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="Arches">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var archesMarker = new google.maps.Marker({
    position: {lat: 38.68, lng: -109.57},
    map: map,
    title: 'Arches National Park'
  });
  google.maps.event.addListener(archesMarker, 'click', function(){
    $(contentArches).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var contentBadlands = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/badlands.jpg" alt="badlands">'+
  '<h2 class="modal-title">Badlands National Park</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>Pinnacles Overlook, Big Badlands Overlook, Yellow Mounds Overlook, Saddle Pass Trailhead, Conata Basin Overlook, Panorama Point, White River Valley Overlook, Medicine Root Loop, Fossil Exhibit Trail, Castle Trail, and plenty more!</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/badl/index.htm">www.nps.gov/badl/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="Badlands">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var badlandsMarker = new google.maps.Marker({
    position: {lat: 43.75, lng: -102.5},
    map: map,
    title: 'Badlands National Park'
  });
  google.maps.event.addListener(badlandsMarker, 'click', function(){
    $(contentBadlands).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var contentBigBend = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/big_bend.jpg" alt="big bend">'+
  '<h2 class="modal-title">Big Bend National Park</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>Emory Peak, Window Trail, Boquillas Canyon Trail, Santa Elena Canyon Trail, Lost Mine Trail, Sam Nail Ranch, Boot Canyon Trail, Cattail Falls, Rio Grande Village Nature Trail, Grapevine Hills Trail, and plenty more!</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/bibe/index.htm">www.nps.gov/bibe/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="Big Bend">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var bigBendMarker = new google.maps.Marker({
    position: {lat: 29.25, lng: -103.25},
    map: map,
    title: 'Big Bend National Park'
  });
  google.maps.event.addListener(bigBendMarker, 'click', function(){
    $(contentBigBend).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var contentBiscayne = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/biscayne.jpg" alt="biscayne">'+
  '<h2 class="modal-title">Biscayne National Park</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>Boca Chita Key, Maritime Heritage Trail, Jones Family Historic District and Jones Lagoon, Elliot Key, Stiltsville, Biscayne Bay, Hurricane Creek, Adam&#39;s Key, Sands Key, Totten Key, and plenty more!</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/bisc/index.htm">www.nps.gov/bisc/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="Biscayne">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var biscayneMarker = new google.maps.Marker({
    position: {lat: 25.65, lng: -80.08},
    map: map,
    title: 'Biscayne National Park'
  });
  google.maps.event.addListener(biscayneMarker, 'click', function(){
    $(contentBiscayne).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var contentBlackCanyon = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/black_canyon.jpg" alt="black canyon">'+
  '<h2 class="modal-title">Black Canyon of the Gunnison National Park</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>Chasm View, Pulpit Rock Overlook, Tomichi Point, Cedar Point Nature Trail, Gunnison Point, Painted Wall View, Cross Fissures View, Sunset View, Kneeling Camel View, Rim Rock Trail, and plenty more!</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/blca/index.htm">www.nps.gov/blca/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="Black Canyon of the Gunnison">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var blackCanyonMarker = new google.maps.Marker({
    position: {lat: 38.57, lng: -107.72},
    map: map,
    title:'Black Canyon of the Gunnison National Park'
  });
  google.maps.event.addListener(blackCanyonMarker, 'click', function(){
    $(contentBlackCanyon).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var contentBryceCanyon = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/bryce_canyon.jpg" alt="bryce canyon">'+
  '<h2 class="modal-title">Bryce Canyon National Park</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>Sunrise Point, Mossy Cave, Peek-A-Boo Trailhead, Inspiration Point, Bryce Point, Rainbow Point, Paria View, Natural Bridge, Agua Canyon, Fairyland Loop Trail, and plenty more!</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/brca/index.htm">www.nps.gov/brca/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="Bryce Canyon">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var bryceCanyonMarker = new google.maps.Marker({
    position: {lat: 37.57, lng: -112.18},
    map: map,
    title: 'Bryce Canyon National Park'
  });
  google.maps.event.addListener(bryceCanyonMarker, 'click', function(){
    $(contentBryceCanyon).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var contentCanyonlands = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/canyonlands.jpeg" alt="canyonlands">'+
  '<h2 class="modal-title">Canyonlands National Park</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>Mesa Arch, False Kiva, Grand View Point, Shafer Canyon Overlook, Green River Overlook, Druid Arch, Big Spring Canyon, Buck Canyon, Confluence of Green and Colorado Rivers, Elephant Hill, and plenty more!</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/cany/index.htm">www.nps.gov/cany/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="Canyonlands">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var canyonlandsMarker = new google.maps.Marker({
    position: {lat: 38.2, lng: -109.93},
    map: map,
    title: 'Canyonlands National Park'
  });
  google.maps.event.addListener(canyonlandsMarker, 'click', function(){
    $(contentCanyonlands).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var contentCapitolReef = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/capitol_reef.jpg" alt="capitol reef">'+
  '<h2 class="modal-title">Capitol Reef National Park</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>Gifford Homestead, Goosenecks Overlook, Fruita Schoolhouse, Pioneer Register, Upper Muley Twist Canyon Trail, Petroglyphs, Frying Pan Trail, Ferns Nipple, Slickrock Divide, Pectols Pyramid, and plenty more!</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/care/index.htm">www.nps.gov/care/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="Capitol Reef">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var capitolReefMarker = new google.maps.Marker({
    position: {lat: 38.2, lng: -111.17},
    map: map,
    title: 'Capitol Reef National Park'
  });
  google.maps.event.addListener(capitolReefMarker, 'click', function(){
    $(contentCapitolReef).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var contentCarlsbad = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/carlsbad.jpg" alt="carlsbad">'+
  '<h2 class="modal-title">Carlsbad Caverns National Park</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>Amphitheatre, Slaughter Canyon Cave, Rattlesnake Canyon Trailhead, Natural Entrance Trail, Lechuguilla Cave, Big Room Trail, King&#39;s Palace, Lion&#39;s Tail, Green Lake, Bottomless Pit, and plenty more!</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/cave/index.htm">www.nps.gov/cave/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="Carlsbad Caverns">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var carlsbadMarker = new google.maps.Marker({
    position: {lat: 32.17, lng: -104.44},
    map: map,
    title: 'Carlsbad Caverns National Park'
  });
  google.maps.event.addListener(carlsbadMarker, 'click', function(){
    $(contentCarlsbad).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var contentChannelIslands = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/channel_islands.jpg" alt="channel islands">'+
  '<h2 class="modal-title">Channel Islands National Park</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>Anacapa Island, Scorpion Ranch, Santa Cruz Island, Cavern Point, Inspiration Point, National Marine Sanctuary, Smugglers Cove, Albert Anchorage, Devils Peak, Painted Cave, and plenty more!</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/chis/index.htm">www.nps.gov/chis/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="Channel Islands">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var channelIslandsMarker = new google.maps.Marker({
    position: {lat: 34.01, lng: -119.42},
    map: map,
    title: 'Channel Islands National Park'
  });
  google.maps.event.addListener(channelIslandsMarker, 'click', function(){
    $(contentChannelIslands).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var contentCongaree = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/congaree.jpg" alt="congaree">'+
  '<h2 class="modal-title">Congaree National Park</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>Congaree Vistors&#39; Center, Broadwalk Loop Trail, Bates Ferry Trail, Kingsnake Trail, River Trail, Oakridge Trail, Cedar Creek, Bluff Trail, Sims Trail, Weston Lake Loop Trail, and plenty more!</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/cong/index.htm">www.nps.gov/cong/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="Congaree">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var congareeMarker = new google.maps.Marker({
    position: {lat: 33.78, lng: -80.78},
    map: map,
    title: 'Congaree National Park'
  });
  google.maps.event.addListener(congareeMarker, 'click', function(){
    $(contentCongaree).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var contentCraterLake = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/crater_lake.jpg" alt="crater lake">'+
  '<h2 class="modal-title">Crater Lake National Park</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>Crater Lake, Phantom Ship Overlook, Mount Mazama, Cleetwood Cove, Watchman Overlook, Cloudcap Overlook, Castle Crest Wildflower Garden, Discovery Point, Mount Scott, Llao Rock, and plenty more!</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/crla/index.htm">www.nps.gov/crla/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="Crater Lake">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var craterLakeMarker = new google.maps.Marker({
    position: {lat: 42.94, lng: -122.1},
    map: map,
    title: 'Crater Lake National Park'
  });
  google.maps.event.addListener(craterLakeMarker, 'click', function(){
    $(contentCraterLake).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var contentCuyahoga = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/cuyahoga.jpg" alt="cuyahoga valley">'+
  '<h2 class="modal-title">Cuyahoga Valley National Park</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>Brandywine Falls, Cuyahoga River, Blue Hen Falls, Great Falls of Tinkers Creek, Beaver Marsh Boardwalk View, Ledges Trailhead, Ledges Overlook, Buttermilk Falls, Bridal Veil Falls, Twin Sisters Falls, and plenty more!</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/cuva/index.htm">www.nps.gov/cuva/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="Cuyahoga Valley">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var cuyahogaMarker = new google.maps.Marker({
    position: {lat: 41.24, lng: -81.55},
    map: map,
    title: 'Cuyahoga Valley National Park'
  });
  google.maps.event.addListener(cuyahogaMarker, 'click', function(){
    $(contentCuyahoga).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var contentDeathValley = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/death_valley.jpg" alt="death valley">'+
  '<h2 class="modal-title">Death Valley National Park</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>Zabriskie Point, Dante&#39;s View, Ubehebe Crater, Titus Canyon, Badwater Basin, Darwin Falls, Mesquite Flat Sand Dunes, Mosaic Canyon Trail, Salt Creek Intrepretive Trail, Aguereberry Point, and plenty more!</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/deva/index.htm">www.nps.gov/deva/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="Death Valley">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var deathValleyMarker = new google.maps.Marker({
    position: {lat: 36.24, lng: -116.82},
    map: map,
    title: 'Death Valley National Park'
  });
  google.maps.event.addListener(deathValleyMarker, 'click', function(){
    $(contentDeathValley).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var contentDenali = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/denali.jpg" alt="denali">'+
  '<h2 class="modal-title">Denali National Park and Preserve</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>Denali, Wonder Lake, Denali State Park, Polychrome Overlook, Stony Hill Scenic Overlook, Sable Pass, Savage River Loop, West Buttress, Ruth Glacier, Reflection Pond, and plenty more!</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/dena/index.htm">www.nps.gov/dena/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="Denali">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var denaliMarker = new google.maps.Marker({
    position: {lat: 63.33, lng: -150.5},
    map: map2,
    title: 'Denali National Park and Preserve'
  });
  google.maps.event.addListener(denaliMarker, 'click', function(){
    $(contentDenali).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var contentDryTortugas = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/dry_tortugas.jpeg" alt="dry tortugas">'+
  '<h2 class="modal-title">Dry Tortugas National Park</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>Garden Key, Bush Key, Loggerhead Key, South Coaling Dock Ruins, North Coaling Dock Ruins, Shot Furnace, Fort Jefferson Boat Pier, Tortugas Banks, Dingghy Beach, North Swim Beach, and plenty more!</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/drto/index.htm">www.nps.gov/drto/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="Dry Tortugas">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var dryTortugasMarker = new google.maps.Marker({
    position: {lat: 24.63, lng: -82.87},
    map: map,
    title: 'Dry Tortugas National Park'
  });
  google.maps.event.addListener(dryTortugasMarker, 'click', function(){
    $(contentDryTortugas).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var contentEverglades = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/everglades.jpg" alt="everglades">'+
  '<h2 class="modal-title">Everglades National Park</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>Anhinga Trail, Shark Valley, Pa-hay-okee Trail, Mahogany Hammock, Gumbo Limbo Trail, West Lake Trail, Nine Mile Pond Canoe Trail, Long Pine Key, Eco Pond, Alligator Boat Tours, and plenty more!</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/ever/index.htm">www.nps.gov/ever/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="Everglades">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var evergladesMarker = new google.maps.Marker({
    position: {lat: 25.32, lng: -80.93},
    map: map,
    title: 'Everglades National Park'
  });
  google.maps.event.addListener(evergladesMarker, 'click', function(){
    $(contentEverglades).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var contentGatesArctic = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/gates_arctic.jpg" alt="gates arctic">'+
  '<h2 class="modal-title">Gates of the Artic National Park and Preserve</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>Arrigetch Peaks, Mount Igikpak, Tinayguk River, Walker Lake, Kobuk National Preserve, Endicott Mountains, Alatna River, Noatak River, John River, Koyukuk River, and plenty more!</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/gaar/index.htm">www.nps.gov/gaar/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="Gates of the Arctic">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var gatesArcticMarker = new google.maps.Marker({
    position: {lat: 67.78, lng: -153.3},
    map: map2,
    title: 'Gates of the Artic National Park and Preserve'
  });
  google.maps.event.addListener(gatesArcticMarker, 'click', function(){
    $(contentGatesArctic).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var contentGlacier = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/glacier.jpg" alt="glacier">'+
  '<h2 class="modal-title">Glacier National Park</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>Highline Trail, Swiftcurrent Lake, Hidden Lake, Grinnell Glacier, Ptarmigan Tunnel, Iceberg Lake, Avalanche Lake, St Mary Fallls, Cracker Lake, Virginia Falls, and plenty more!</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/glac/index.htm">www.nps.gov/glac/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="Glacier">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var glacierMarker = new google.maps.Marker({
    position: {lat: 48.8, lng: -114},
    map: map,
    title: 'Glacier National Park'
  });
  google.maps.event.addListener(glacierMarker, 'click', function(){
    $(contentGlacier).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var contentGlacierBay = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/glacier_bay.jpg" alt="glacier bay">'+
  '<h2 class="modal-title">Glacier Bay National Park and Preserve</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>Margerie Glacier, Glacier Bay, Tarr Inlet, Mount Fairweather, John Hopkins Glacier, Muir Glacier, Lamplugh Glacier, Mount Crillon, Brady Glacier, Riggs Glacier, and plenty more!</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/glba/index.htm">www.nps.gov/glba/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="Glacier Bay">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var glacierBayMarker = new google.maps.Marker({
    position: {lat: 58.5, lng: -137},
    map: map2,
    title: 'Glacier Bay National Park and Preserve'
  });
  google.maps.event.addListener(glacierBayMarker, 'click', function(){
    $(contentGlacierBay).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var contentGrandCanyon = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/grand_canyon.jpeg" alt="grand canyon">'+
  '<h2 class="modal-title">Grand Canyon National Park</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>Havasu Falls, Grand Canyon Skywalk, Mather Point, South Kaibab Trail, Desert View Watchtower, Toroweap Overlook, Yavapai Point, Plateau Point Trail, South Rim Trail, Hopi Point, and plenty more!</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/grca/index.htm">www.nps.gov/grca/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="Grand Canyon">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var grandCanyonMarker = new google.maps.Marker({
    position: {lat: 36.06, lng: -112.14},
    map: map,
    title: 'Grand Canyon National Park'
  });
  google.maps.event.addListener(grandCanyonMarker, 'click', function(){
    $(contentGrandCanyon).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var contentGrandTeton = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/grand_teton.jpg" alt="grand teton">'+
  '<h2 class="modal-title">Grand Teton National Park</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>Jackson Lake, Jenny Lake, Grand Teton, Hidden Falls, Cascade Canyon Trail, Lake Solitude, Snake River Overlook, Schwabachers Landing, Taggart Lake, Bradley Lake, and plenty more!</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/grte/index.htm">www.nps.gov/grte/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="Grand Teton">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var grandTetonMarker = new google.maps.Marker({
    position: {lat: 43.73, lng: -110.8},
    map: map,
    title: 'Grand Teton National Park'
  });
  google.maps.event.addListener(grandTetonMarker, 'click', function(){
    $(contentGrandTeton).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var contentGreatBasin = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/great_basin.jpg" alt="great basin">'+
  '<h2 class="modal-title">Great Basin National Park</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>Lehman Cave, Prometheus Tree Stump, Mather Overlook, Wheeler Peak Glacier, Lexington Arch, Island Forest Trail, Mountain View Nature Trail, Teresa Lake, Bristlecone Pine Trail, Stargazing, and plenty more!</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/grba/index.htm">www.nps.gov/grba/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="Great Basin">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var greatBasinMarker = new google.maps.Marker({
    position: {lat: 38.98, lng: -114.3},
    map: map,
    title: 'Great Basin National Park'
  });
  google.maps.event.addListener(greatBasinMarker, 'click', function(){
    $(contentGreatBasin).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var contentGreatSandDunes = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/sand_dunes.jpg" alt="great sand dunes">'+
  '<h2 class="modal-title">Great Sand Dunes National Park and Preserve</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>Zapata Falls, Mosca Pass, Montville Nature Trail, Tijeras Peak, Mount Zwischen, Medano Creek, Sand Ramp Trail, Medano Lake, Mount Herard, Music Pass, and plenty more!</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/grsa/index.htm">www.nps.gov/grsa/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="Great Sand Dunes">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var greatSandDunesMarker = new google.maps.Marker({
    position: {lat: 37.73, lng: -105.51},
    map: map,
    title: 'Great Sand Dunes National Park and Preserve'
  });
  google.maps.event.addListener(greatSandDunesMarker, 'click', function(){
    $(contentGreatSandDunes).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var contentGreatSmoky = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/great_smoky.jpg" alt="great smoky">'+
  '<h2 class="modal-title">Great Smoky National Park</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>Cades Cove, Clingmans Dome, Ramsey Cascades, Roaring Fork, Laurel Falls Trail, Mingo Falls, Alum Cave Trail, Soco Falls, The Sinks, Meigs Falls, and plenty more!</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/grsm/index.htm">www.nps.gov/grsm/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="Great Smoky">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var greatSmokyMarker = new google.maps.Marker({
    position: {lat: 35.68, lng: -83.53},
    map: map,
    title: 'Great Smoky Mountains National Park'
  });
  google.maps.event.addListener(greatSmokyMarker, 'click', function(){
    $(contentGreatSmoky).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var contentGuadalupeMtns = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/guadalupe_mtns.jpg" alt="guadalupe mountains">'+
  '<h2 class="modal-title">Guadalupe Mountains National Park</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>Guadalupe Peak, McKittrick Canyon, Devil&#39;s Hall Trail, El Capitan, McKittrick Canyon Trailhead, Hunter Peak, Salt Basin Overlook, Smith Spring Loop, Manzanita Spring, Dog Canyon, and plenty more!</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/gumo/index.htm">www.nps.gov/gumo/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="Guadalupe Mountains">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var guadalupeMtnsMarker = new google.maps.Marker({
    position: {lat: 31.92, lng: -104.87},
    map: map,
    title: 'Guadalupe Mountains National Park'
  });
  google.maps.event.addListener(guadalupeMtnsMarker, 'click', function(){
    $(contentGuadalupeMtns).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var contentHaleakala = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/haleakala.jpg" alt="haleakala">'+
  '<h2 class="modal-title">Haleakal&#257; National Park</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>Haleakal&#257;, Seven Sacred Pools at Ohe&#39;o, Ohe&#39;o Gulch, Makahiku Falls, Waimoku Falls, Kalahaku Overlook, Leleiwi Overlook, Magnetic Peak, Hanakauhi, Haupa&#39;akea Peak, and plenty more!</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/hale/index.htm">www.nps.gov/hale/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="Haleakala">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var haleakalaMarker = new google.maps.Marker({
    position: {lat: 20.72, lng: -156.17},
    map: map3,
    title: 'Haleakala National Park'
  });
  google.maps.event.addListener(haleakalaMarker, 'click', function(){
    $(contentHaleakala).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var contentHawaiiVolcanoes = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/hawaii_volcanoes.jpg" alt="hawaii volcanoes">'+
  '<h2 class="modal-title">Hawai&#39;i Volcanoes National Park</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>K&#299;lauea, Hawaiian Volcano Observatory, Thurston Lava Tube, Pu&#39;u&#39;&#332;&#39;&#333;, Pu&#39;u Loa Petroglyphs, Mauna Ulu, Steam Vents, Kealakomo, Napau Trail, Lava Taking Back The Road, and plenty more!</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/havo/index.htm">www.nps.gov/havo/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="Hawaii Volcanoes">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var hawaiiVolcanoesMarker = new google.maps.Marker({
    position: {lat: 19.38, lng: -155.2},
    map: map3,
    title: 'Hawaii Volcanoes National Park'
  });
  google.maps.event.addListener(hawaiiVolcanoesMarker, 'click', function(){
    $(contentHawaiiVolcanoes).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var contentHotSprings = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/hot_springs.jpg" alt="hot springs">'+
  '<h2 class="modal-title">Hot Springs National Park</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>Hot Springs Mountain, Goat Rock Trail, Fordyce Bathhouse, Bathhouse Row, Lake Ouachita, Grand Promenade, Sunset Trail, and Hot Springs Haunted Tours.</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/hosp/index.htm">www.nps.gov/hosp/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="Hot Springs">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var hotSpringsMarker = new google.maps.Marker({
    position: {lat: 34.51, lng: -93.05},
    map: map,
    title:'Hot Springs National Park'
  });
  google.maps.event.addListener(hotSpringsMarker, 'click', function(){
    $(contentHotSprings).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var contentIsleRoyale = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/isle_royale.jpg" alt="isle royale">'+
  '<h2 class="modal-title">Isle Royale National Park</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>McCargoe Cove, Rock Harbor, Lookout Louise, Greenstone Ridge Trail, Scoville Point, Siskiwit Lake, Passage Island, Mount Ojibway, Huginnin Cove, Malone Bay, and plenty more!</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/isro/index.htm">www.nps.gov/isro/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="Isle Royale">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var isleRoyaleMarker = new google.maps.Marker({
    position: {lat: 48.1, lng: -88.55},
    map: map,
    title: 'Isle Royale National Park'
  });
  google.maps.event.addListener(isleRoyaleMarker, 'click', function(){
    $(contentIsleRoyale).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var contentJoshuaTree = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/joshua_tree.jpeg" alt="joshua tree">'+
  '<h2 class="modal-title">Joshua Tree National Park</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>Keys View, Barker Dam, Lost Horse Mine, Cottonwood Spring, Arch Rock, Hidden Valley Nature Trail, Skull Rock Nature Trail, Hall of Horrors, Wall Street Mill, Split Rock Loop, and plenty more!</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/jotr/index.htm">www.nps.gov/jotr/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="Joshua Tree">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var joshuaTreeMarker = new google.maps.Marker({
    position: {lat: 33.79, lng: -115.9},
    map: map,
    title: 'Joshua Tree National Park'
  });
  google.maps.event.addListener(joshuaTreeMarker, 'click', function(){
    $(contentJoshuaTree).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var contentKatmai = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/katmai.jpg" alt="katmai">'+
  '<h2 class="modal-title">Katmai National Park and Preserve</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>Cook Inlet, Alagnak Wild River, Brooks Camp, Mount Katmai, Mount Griggs, Mount Kaguyak, Trident Volcano, Mount Denison, Valley of Ten Thousand Smokes, Savonoski Loop, and plenty more!</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/katm/index.htm">www.nps.gov/katm/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="Katmai">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var katmaiMarker = new google.maps.Marker({
    position: {lat: 58.5, lng: -155},
    map: map2,
    title: 'Katmai National Park and Preserve'
  });
  google.maps.event.addListener(katmaiMarker, 'click', function(){
    $(contentKatmai).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var contentKenaiFjords = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/kenai_fjords.jpg" alt="kenai fjords">'+
  '<h2 class="modal-title">Kenai Fjords National Park</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>Exit Glacier, Harding Icefield Trail, Nuka Bay Mining District, Pederson Glacier, Six Mile Creek, Clam Gulch, and plenty more!</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/kefj/index.htm">www.nps.gov/kefj/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="Kenai Fjords">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var kenaiFjordsMarker = new google.maps.Marker({
    position: {lat: 59.92, lng: -149.65},
    map: map2,
    title: 'Kenai Fjords National Park'
  });
  google.maps.event.addListener(kenaiFjordsMarker, 'click', function(){
    $(contentKenaiFjords).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var contentKingsCanyon = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/kings_canyon.jpg" alt="kings canyon">'+
  '<h2 class="modal-title">Kings Canyon National Park</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>Rae Lakes, Kearsarge Pass, The General Grant Tree, Mist Falls, Copper Creek Trailhead, Roaring River Falls, Mount Spencer, Charlotte Dome, Mount Goddard, Jennie Lakes Wilderness, and plenty more!</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/seki/index.htm">www.nps.gov/seki/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="Kings Canyon">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var kingsCanyonMarker = new google.maps.Marker({
    position: {lat: 36.8, lng: -118.55},
    map: map,
    title: 'Kings Canyon National Park'
  });
  google.maps.event.addListener(kingsCanyonMarker, 'click', function(){
    $(contentKingsCanyon).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var contentKobukValley = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/kobuk_valley.jpg" alt="kobuk valley">'+
  '<h2 class="modal-title">Kobuk Valley National Park</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>Arctic Sand Dunes, Kobuk River, Ahnewetut Creek, Baird Mountains, and plenty of unexplored land!</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/kova/index.htm">www.nps.gov/kova/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="Kobuk Valley">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var kobukValleyMarker = new google.maps.Marker({
    position: {lat: 67.55, lng: -159.28},
    map: map2,
    title: 'Kobuk Valley National Park'
  });
  google.maps.event.addListener(kobukValleyMarker, 'click', function(){
    $(contentKobukValley).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var contentLakeClark = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/lake_clark.jpg" alt="lake clark">'+
  '<h2 class="modal-title">Lake Clark National Park and Preserve</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>Six Mile Lake, Turquoise Lake, Chinitna Bay, Crescent Lake, Silver Salmon Creek, Neacola Mountains, Redoubt Volcano, Hardenburg Bay, Kontrashibuna Lake, Red Glacier, and plenty more!</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/lacl/index.htm">www.nps.gov/lacl/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="Lake Clark">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var lakeClarkMarker = new google.maps.Marker({
    position: {lat: 60.97, lng: -153.42},
    map: map2,
    title: 'Lake Clark National Park and Preserve'
  });
  google.maps.event.addListener(lakeClarkMarker, 'click', function(){
    $(contentLakeClark).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var contentLassenVolcanic = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/lassen_volcano.jpg" alt="lassen volcano">'+
  '<h2 class="modal-title">Lassen Volcanic National Park</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>Lassen Peak, Bumpass Hell, Kings Creek Falls, Painted Dunes, Bumpass Mountain, Terminal Geyser, Chaos Crags, Manzanita Lake, Juniper Lake, Boiling Springs Lake, and plenty more!</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/lavo/index.htm">www.nps.gov/lavo/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="Lassen Volcano">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var lassenVolcanicMarker = new google.maps.Marker({
    position: {lat: 40.49, lng: -121.51},
    map: map,
    title: 'Lassen Volcanic National Park'
  });
  google.maps.event.addListener(lassenVolcanicMarker, 'click', function(){
    $(contentLassenVolcanic).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var contentMammothCave = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/mammoth_cave.jpg" alt="mammoth cave">'+
  '<h2 class="modal-title">Mammoth Cave National Park</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>Great Onyx Cave, Fat Man&#39;s Misery, Wind Cave, Tall Man&#39s Misery, Cedar Sink Trail, Green River, Grand Avenue Tour, Gothic Avenue Tour, Echo River, Trog Tour, and plenty more!</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/maca/index.htm">www.nps.gov/maca/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="Mammoth Cave">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var mammothCaveMarker = new google.maps.Marker({
    position: {lat: 37.18, lng: -86.1},
    map: map,
    title: 'Mammoth Cave National Park'
  });
  google.maps.event.addListener(mammothCaveMarker, 'click', function(){
    $(contentMammothCave).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var contentMesaVerde = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/mesa_verde.jpg" alt="mesa verde">'+
  '<h2 class="modal-title">Mesa Verde National Park</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>Cliff Palace, Balcony House, Spruce Tree House, Sun Point View, Petroglyph Point Trail, Sun Temple, Long House, Square Tower House, Step House, Navajo Canyon View, and plenty more!</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/meve/index.htm">www.nps.gov/meve/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="Mesa Verde">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var mesaVerdeMarker = new google.maps.Marker({
    position: {lat: 37.18, lng: -108.49},
    map: map,
    title: 'Mesa Verde National Park'
  });
  google.maps.event.addListener(mesaVerdeMarker, 'click', function(){
    $(contentMesaVerde).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var contentMountRainier = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/mount_rainier.jpg" alt="mount rainier">'+
  '<h2 class="modal-title">Mount Rainier National Park</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>Mount Rainier, Camp Muir, Reflection Lake, Grove of the Patriarchs Trail, Narada Falls, Tolmie Peak, Tipsoo Lake, Myrtle Falls, Skyline Trail, Christine Falls, and plenty more!</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/mora/index.htm">www.nps.gov/mora/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="Mount Rainier">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var mountRainierMarker = new google.maps.Marker({
    position: {lat: 46.85, lng: -121.75},
    map: map,
    title: 'Mount Rainier National Park'
  });
  google.maps.event.addListener(mountRainierMarker, 'click', function(){
    $(contentMountRainier).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var contentNorthCascades = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/north_cascades.jpg" alt="north cascades">'+
  '<h2 class="modal-title">North Cascades National Park</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>Ladder Creek Falls, Gorge Overlook Trail, Diablo Lake, Hidden Lake Trail, Ross Lake, Sahale Glacier, Blue Lake Trail, Hannegan Pass, Cutthroat Pass, Trappers Peak, and plenty more!</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/noca/index.htm">www.nps.gov/noca/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="North Cascades">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var northCascadesMarker = new google.maps.Marker({
    position: {lat: 48.7, lng: -121.2},
    map: map,
    title:'North Cascades National Park'
  });
  google.maps.event.addListener(northCascadesMarker, 'click', function(){
    $(contentNorthCascades).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var contentOlympic = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/olympic.jpg" alt="olympic">'+
  '<h2 class="modal-title">Olympic National Park</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>Hoh Rainforest, Hurricane Ridge, Marymere Falls, Lake Crescent, Hole-in-the-Wall, Hurricane Ridge, Grand Pass, Tree Root Cave, Sol Duc River, Ruby Beach, and plenty more!</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/olym/index.htm">www.nps.gov/olym/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="Olympic">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var olympicMarker = new google.maps.Marker({
    position: {lat: 47.97, lng: -123.5},
    map: map,
    title: 'Olympic National Park'
  });
  google.maps.event.addListener(olympicMarker, 'click', function(){
    $(contentOlympic).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var contentPetrifiedForest = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/petrified_forest.jpg" alt="petrified forest">'+
  '<h2 class="modal-title">Petrified Forest National Park</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>Jasper Forest, Ice Cream Rocks, Newspaper Rock, Agate Bridge, Blue Mesa Trail, The Tepees, Puerco Pueblo, Whipple Point, Nizhoni Point, Kachina Point, and plenty more!</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/pefo/index.htm">www.nps.gov/pefo/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="Petrified Forest">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var petrifiedForestMarker = new google.maps.Marker({
    position: {lat: 35.07, lng: -109.78},
    map: map,
    title: 'Petrified Forest National Park'
  });
  google.maps.event.addListener(petrifiedForestMarker, 'click', function(){
    $(contentPetrifiedForest).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var contentPinnacles = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/pinnacles.jpg" alt="pinnacles">'+
  '<h2 class="modal-title">Pinnacles National Park</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>Bear Gulch Caves, Balconies Cliff Trails, Rim Trail Loop, High Peaks Loop, South Wilderness Trail, Chalone Peak Trail, Peaks View, Juniper Canyon Loop, North Wilderness Trail Loop, Machete Ridge, and plenty more!</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/pinn/index.htm">www.nps.gov/pinn/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="Pinnacles">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var pinnaclesMarker = new google.maps.Marker({
    position: {lat: 36.48, lng: -121.16},
    map: map,
    title: 'Pinnacles National Park'
  });
  google.maps.event.addListener(pinnaclesMarker, 'click', function(){
    $(contentPinnacles).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var contentRedwood = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/redwood.jpg" alt="redwood">'+
  '<h2 class="modal-title">Redwood National and State Parks</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>Trees of Mystery, Fern Canyon, Stout Grove Trail, Gold Bluffs Beach, Bald Hills, Howland Hills Road, Enderts Beach Road, Newton B. Drury Scenic Parkway, Davison Road, Cal-Barrel Road, and plenty more!</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/redw/index.htm">www.nps.gov/redw/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="Redwood">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var redwoodMarker = new google.maps.Marker({
    position: {lat: 41.3, lng: -124},
    map: map,
    title: 'Redwood National and State Parks'
  });
  google.maps.event.addListener(redwoodMarker, 'click', function(){
    $(contentRedwood).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var contentRockyMtn = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/rocky_mtn.jpg" alt="rocky mountain">'+
  '<h2 class="modal-title">Rocky Mountain National Park</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>Bear Lake, Dream Lake, Rainbow Curve Overlook, Alberta Falls, Emerald Lake, Sprague Lake, Cub Lake Trail, Sky Pond, Longs Peak, Calypso Cascades, and plenty more!</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/romo/index.htm">www.nps.gov/romo/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="Rocky Mountain">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var rockyMtnMarker = new google.maps.Marker({
    position: {lat: 40.4, lng: -105.58},
    map: map,
    title: 'Rocky Mountain National Park'
  });
  google.maps.event.addListener(rockyMtnMarker, 'click', function(){
    $(contentRockyMtn).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var contentSaguaro = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/saguaro.jpg" alt="saguaro">'+
  '<h2 class="modal-title">Saguaro National Park</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>Cactus Forest Drive, Signal Hill, Cactus Garden Trail, King Canyon Trail, Gate Pass, Douglas Spring Trail, Wasson Peak, Mica View, Ernie&#39;s Falls, Tanque Verde Falls, and plenty more!</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/sagu/index.htm">www.nps.gov/sagu/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="Saguaro">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var saguaroMarker = new google.maps.Marker({
    position: {lat: 32.25, lng: -110.5},
    map: map,
    title: 'Saguaro National Park'
  });
  google.maps.event.addListener(saguaroMarker, 'click', function(){
    $(contentSaguaro).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var contentSequoia = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/sequoia.jpeg" alt="sequoia">'+
  '<h2 class="modal-title">Sequoia National Park</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>General Sherman, Mount Whtiney, Moro Rock, Crystal Cave, Giant Forest, Forester Pass, Mount Langley, Tunnel Log, President Tree, Bear Hill Trail, and plenty more!</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/seki/index.htm">www.nps.gov/seki/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="Sequoia">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var sequoiaMarker = new google.maps.Marker({
    position: {lat: 36.43, lng: -118.68},
    map: map,
    title: 'Sequoia National Park'
  });
  google.maps.event.addListener(sequoiaMarker, 'click', function(){
    $(contentSequoia).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var contentShenandoah = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/shenandoah.jpg" alt="shenandoah">'+
  '<h2 class="modal-title">Shenandoah National Park</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>Appalachian Trail, Old Rag Mountian, Hawksbill Mountain, Stony Man Mountain, Dark Hollow Falls, Bearfence Mountain, Thornton Gap, Overall Run Falls, Hogback Overlook, Rose River Falls, and plenty more!</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/shen/index.htm">www.nps.gov/shen/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="Shenandoah">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var shenandoahMarker = new google.maps.Marker({
    position: {lat: 38.53, lng: -78.35},
    map: map,
    title: 'Shenandoah National Park'
  });
  google.maps.event.addListener(shenandoahMarker, 'click', function(){
    $(contentShenandoah).modal('toggle');
    setTimeout(favorite, 1000);
  });


  var contentTheodoreRoosevelt = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/theodore_roosevelt.jpg" alt="theodore roosevelt park">'+
  '<h2 class="modal-title">Theodore Roosevelt National Park</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>Skyline Vista, Medora Overlook, Scoria Point Overlook, Badlands Overlook, Buck Hill, Maltese Cross Cabin, Boicourt Overlook Trail, Painted Canyon Nature Trail, Ridgeline Trail, Oxbow Overlook, and plenty more!</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/thro/index.htm">www.nps.gov/thro/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="Theodore Roosevelt">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var theodoreRooseveltMarker = new google.maps.Marker({
    position: {lat: 46.97, lng: -103.45},
    map: map,
    title: 'Theodore Roosevelt National Park'
  });
  google.maps.event.addListener(theodoreRooseveltMarker, 'click', function(){
    $(contentTheodoreRoosevelt).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var contentVirginIslands = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/virgin_islands.jpg" alt="virgin islands">'+
  '<h2 class="modal-title">Virgin Islands National Park</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>Trunk Bay, Honeymoon Beach, Annaberg Sugar Plantation, Hawksnest Beach, Cinnamon Bay, Gibney Beach, Petroglyphs, Coral Reef Underwater Park Trail, Little Lameshur Bay, Bordeaux Mountain, and plenty more!</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/viis/index.htm">www.nps.gov/viis/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="Virgin Islands">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var virginIslandsMarker = new google.maps.Marker({
    position: {lat: 18.33, lng: -64.73},
    map: map,
    title: 'Virgin Islands National Park'
  });
  google.maps.event.addListener(virginIslandsMarker, 'click', function(){
    $(contentVirginIslands).modal('toggle');
    setTimeout(favorite, 1000);
  });


  var contentVoyageurs = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/voyageurs.jpg" alt="voyageurs">'+
  '<h2 class="modal-title">Voyageurs National Park</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>Ash River, Rainy Lake, Kabetogama Peninsula, Ellsworth Rock Gardens, Crane Lake, Locator Lake Trail, Namakan Island, Echo Bay Trail, Blind Ash Bay Trail, Ethno-botanical Garden Trail, and plenty more!</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/voya/index.htm">www.nps.gov/voya/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="Voyageurs">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var voyageursMarker = new google.maps.Marker({
    position: {lat: 48.5, lng: -92.88},
    map: map,
    title: 'Voyageurs National Park'
  });
  google.maps.event.addListener(voyageursMarker, 'click', function(){
    $(contentVoyageurs).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var contentWindCave = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/wind_cave.jpg" alt="wind cave">'+
  '<h2 class="modal-title">Wind Cave National Park</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>Wind Cave, Rankin Ridge, Wind Cave Canyon, Centennial Trail, Cold Brook Canyon, Boland Ridge, East Bison Flats, Highland Creek, Sanctuary Trail, and Lookout Point.</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/wica/index.htm">www.nps.gov/wica/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="Wind Cave">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var windCaveMarker = new google.maps.Marker({
    position: {lat: 43.57, lng: -103.48},
    map: map,
    title: 'Wind Cave National Park'
  });
  google.maps.event.addListener(windCaveMarker, 'click', function(){
    $(contentWindCave).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var contentWrangell_stElias = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/kennecott.jpg" alt="kennecott">'+
  '<h2 class="modal-title">Wrangell-St. Elias National Park and Preserve</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>Kennecott Mines, Hubbard Glacier, Mount Blackburn, Mount Wrangell, Regal Mountain, Mount Bona, University Peak, Mount Bear, Nabesna Glacier, Atna Peaks, and plenty more!</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/wrst/index.htm">www.nps.gov/wrst/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="Wrangell-St. Elias">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var wrangell_stEliasMarker = new google.maps.Marker({
    position: {lat: 61, lng: -142},
    map: map2,
    title: 'Wrangell-St. Elias National Park and Preserve'
  });
  google.maps.event.addListener(wrangell_stEliasMarker, 'click', function(){
    $(contentWrangell_stElias).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var contentYellowstone = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/yellowstone.jpg" alt="yellowstone">'+
  '<h2 class="modal-title">Yellowstone National Park</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>Old Faithful, Mammoth Hot Springs, Grand Prismatic Spring, Grand Canyon of the Yellowstone, Morning Glory Pool, Upper Yellowstone Falls, Lamar Valley, Tower Fall, Norris Geyser Basin, Mount Washburn, and plenty more!</p>'+
  '<p>Find out more here: <a href="https://www.yellowstonepark.com/">www.yellowstonepark.com</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="Yellowstone">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var yellowstoneMarker = new google.maps.Marker({
    position: {lat: 44.6, lng: -110.5},
    map: map,
    title: 'Yellowstone National Park'
  });
  google.maps.event.addListener(yellowstoneMarker, 'click', function(){
    $(contentYellowstone).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var contentYosemite = '<div id="myModal" class="modal fade" role="dialog">'+'<div class="modal-dialog">'+
  '<div class="modal-content">'+'<div class="modal-header">'+'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
  '<img class="img-responsive" src="/images/yosemite.jpg" alt="yosemite">'+
  '<h2 class="modal-title">Yosemite National Park</h2>'+
  '<div class="modal-body">'+'<h4><b>Top features: </b></h4>'+
  '<p>Half Dome, Glacier Point, Yosemite Falls, Tunnel View, Tuolumne Meadows, Mist Trail, Bridalveil Fall, Hetch Hetchy, El Capitan, Taft Point, and plenty more!</p>'+
  '<p>Find out more here: <a href="https://www.nps.gov/yose/index.htm">www.nps.gov/yose/</a></p>'+
  '</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-primary fav" data-title="Yosemite">Favorite This Place</button>'+
  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
  '</div>'+'</div>'+'</div>'+'</div>';
  var yosemiteMarker = new google.maps.Marker({
    position: {lat: 37.83, lng: -119.5},
    map: map,
    title: 'Yosemite National Park'
  });
  google.maps.event.addListener(yosemiteMarker, 'click', function(){
    $(contentYosemite).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var contentZion =
  `<div id="myModal" class="modal fade" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <img class="img-responsive" src="/images/zion.jpg" alt="zion">
          <h2 class="modal-title">Zion National Park</h2>
          </div>
        <div class="modal-body">
          <h4><b>Top features: </b></h4>
          <p>The Narrows, Angel&#39;s Landing, Zion Canyon, Mount Carmel Highway, Kolob Canyons,
           Emerald Pools, Weeping Rock, Riverside Walk, Kanarraville Falls, The Subway, and plenty more!</p>
          <p>Find out more here: <a href="https://www.zionnationalpark.com">www.zionnationalpark.com</a></p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary fav" data-title="Zion National Park" data-content=contentZion>Favorite This Place</button>
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>`;
  var zionMarker = new google.maps.Marker({
    position: {lat: 37.3, lng: -113.05},
    map: map,
    title: 'Zion National Park'
  });
  google.maps.event.addListener(zionMarker, 'click', function(){
    $(contentZion).modal('toggle');
    setTimeout(favorite, 1000);
  });

  var parks = {
    'Acadia National Park': contentAcadia,
    'National Park of American Samoa': contentAmericanSamoa,
    'Arches National Park': contentArches,
    'Badlands National Park': contentBadlands,
    'Big Bend National Park': contentBigBend,
    'Biscayne National Park': contentBiscayne,
    'Black Canyon of the Gunnison National Park': contentBlackCanyon,
    'Bryce Canyon National Park': contentBryceCanyon,
    'Canyonlands National Park': contentCanyonlands,
    'Capitol Reef National Park': contentCapitolReef,
    'Carlsbad Caverns National Park': contentCarlsbad,
    'Channel Islands National Park': contentChannelIslands,
    'Congaree National Park': contentCongaree,
    'Crater Lake National Park': contentCraterLake,
    'Cuyahoga Valley National Park': contentCuyahoga,
    'Death Valley National Park': contentDeathValley,
    'Denali National Park and Preserve': contentDenali,
    'Dry Tortugas National Park': contentDryTortugas,
    'Everglades National Park': contentEverglades,
    'Gates of the Artic National Park and Preserve': contentGatesArctic,
    'Glacier National Park': contentGlacier,
    'Glacier Bay National Park and Preserve': contentGlacierBay,
    'Grand Canyon National Park': contentGrandCanyon,
    'Grand Teton National Park': contentGrandTeton,
    'Great Basin National Park': contentGreatBasin,
    'Great Sand Dunes National Park and Preserve': contentGreatSandDunes,
    'Great Smoky National Park': contentGreatSmoky,
    'Guadalupe Mountains National Park': contentGuadalupeMtns,
    'Haleakala National Park': contentHaleakala,
    'Hawaii Volcanoes National Park': contentHawaiiVolcanoes,
    'Hot Springs National Park': contentHotSprings,
    'Isle Royale National Park': contentIsleRoyale,
    'Joshua Tree National Park': contentJoshuaTree,
    'Katmai National Park and Preserve': contentKatmai,
    'Kenai Fjords National Park': contentKenaiFjords,
    'Kings Canyon National Park': contentKingsCanyon,
    'Kobuk Valley National Park': contentKobukValley,
    'Lake Clark National Park and Preserve': contentLakeClark,
    'Lassen Volanic': contentLassenVolcanic,
    'Mammoth Cave': contentMammothCave,
    'Mesa Verde': contentMesaVerde,
    'Mount Rainier': contentMountRainier,
    'North Cascades': contentNorthCascades,
    'Olympic National Park': contentOlympic,
    'Petrified Forest National Park': contentPetrifiedForest,
    'Pinnacles National Park': contentPinnacles,
    'Redwood National and State Parks': contentRedwood,
    'Rocky Mountain National Park': contentRockyMtn,
    'Saguaro National Park': contentSaguaro,
    'Sequoia National Park': contentSequoia,
    'Shenandoah National Park': contentShenandoah,
    'Theodore Roosevelt National Park': contentTheodoreRoosevelt,
    'Virgin Islands National Park': contentVirginIslands,
    'Voyageurs National Park': contentVoyageurs,
    'Wind Cave National Park': contentWindCave,
    'Wrangell-St. Elias National Park and Preserve':contentWrangell_stElias,
    'Yellowstone National Park': contentYellowstone,
    'Yosemite National Park': contentYosemite,
    'Zion National Park': contentZion
  }

  for (key in parks){
    $('#park').append('<option>'+ key + '</option>');
  };

  $('#park').change(function(){
    var $option = $('#park option:selected');
    var optionText = $option.text();
    $(parks[optionText]).modal('toggle');
    setTimeout(favorite, 1000);
  });

  function favorite() {
    $('.fav').click(function(){
      var title = $(this).attr('data-title');
      $(this).text('Favorited');
      $('#favorite').append('<option>' + title + '</option>');
    })
    $('#favorite').change(function(){
      var $fav = $('#favorite option:selected');
      var content = $(this).prop('data-content');
      var favText = $fav.text()
      console.log(content)
      $(content).modal('toggle');
    })
  }

}
