var parkInfo = [ {
  title: 'Acadia National Park',
  id: 'Acadia',
  position: {lat: 44.35, lng: -68.21},
  map: 'usMap',
  year: '1919',
  image: '/images/acadia.jpeg',
  features: 'Cadillac Mountain, Bass Harbor Head, Thunder Hole, Jordan Pond, Sand Beach, Asticou Azalea Garden, Wild Gardens of Acadia, Bubble Rock Overlook, Blue Hill Overlook, and Gorham Mountain Trailhead',
  website: 'https://www.nps.gov/acad/index.htm'
}, {
  title: 'National Park of American Samoa',
  id: 'American_Samoa',
  position: {lat: -14.25, lng: -170.68},
  map: 'hawaiiMap',
  year: '1988',
  image: '/images/american_samoa.jpg',
  features: 'Pola Island Trail, World War 2 Heritage Trail, Lower Sauma Ridge Trail, Tuafanua Trail, Blunts Point Trail, Breakers Point Trail, Vatia Bay, Mount &#39;Alava, Si&#39;u Point Trail, and Oge Beach Trail',
  website: 'https://www.nps.gov/npsa/index.htm'
}, {
  title: 'Arches National Park',
  id: 'Arches',
  position: {lat: 38.68, lng: -109.57},
  map: 'usMap',
  year: '1971',
  image: '/images/arches.jpg',
  features: 'Delicate Arch, Landscape Arch, Corona Arch, Double Arch, Fiery Furnace, Balanced Rock, Turret Arch, North Window, Courthouse Towers, and Devil&#39;s Garden',
  website: 'https://www.nps.gov/arch/index.htm'
}, {
  title: 'Badlands National Park',
  id: 'Badlands',
  position: {lat: 43.75, lng: -102.5},
  map: 'usMap',
  year: '1978',
  image: '/images/badlands.jpg',
  features: 'Pinnacles Overlook, Big Badlands Overlook, Yellow Mounds Overlook, Saddle Pass Trailhead, Conata Basin Overlook, Panorama Point, White River Valley Overlook, Medicine Root Loop, Fossil Exhibit Trail, and Castle Trail',
  website: 'https://www.nps.gov/badl/index.htm'
}, {
  title: 'Big Bend National Park',
  id: 'Big_Bend',
  position: {lat: 29.25, lng: -103.25},
  map: 'usMap',
  year: '1944',
  image: '/images/big_bend.jpg',
  features: 'Emory Peak, Window Trail, Boquillas Canyon Trail, Santa Elena Canyon Trail, Lost Mine Trail, Sam Nail Ranch, Boot Canyon Trail, Cattail Falls, Rio Grande Village Nature Trail, and Grapevine Hills Trail',
  website: 'https://www.nps.gov/bibe/index.htm'
}, {
  title: 'Biscayne National Park',
  id: 'Biscayne',
  position: {lat: 25.65, lng: -80.08},
  map: 'usMap',
  year: '1980',
  image: '/images/biscayne.jpg',
  features: 'Boca Chita Key, Maritime Heritage Trail, Jones Family Historic District and Jones Lagoon, Elliot Key, Stiltsville, Biscayne Bay, Hurricane Creek, Adam&#39;s Key, Sands Key, and Totten Key',
  website: 'https://www.nps.gov/bisc/index.htm'
}, {
  title: 'Black Canyon of the Gunnison National Park',
  id: 'Black_Canyon',
  position: {lat: 38.57, lng: -107.72},
  map: 'usMap',
  year: '1999',
  image: '/images/black_canyon.jpg',
  features: 'Chasm View, Pulpit Rock Overlook, Tomichi Point, Cedar Point Nature Trail, Gunnison Point, Painted Wall View, Cross Fissures View, Sunset View, Kneeling Camel View, and Rim Rock Trail',
  website: 'https://www.nps.gov/blca/index.htm'
}, {
  title: 'Bryce Canyon National Park',
  id: 'Bryce_Canyon',
  position: {lat: 37.57, lng: -112.18},
  map: 'usMap',
  year: '1928',
  image: '/images/bryce_canyon.jpg',
  features: 'Sunrise Point, Mossy Cave, Peek-A-Boo Trailhead, Inspiration Point, Bryce Point, Rainbow Point, Paria View, Natural Bridge, Agua Canyon, and Fairyland Loop Trail',
  website: 'https://www.nps.gov/brca/index.htm'
}, {
  title: 'Canyonlands National Park',
  id: 'Canyonlands',
  position: {lat: 38.2, lng: -109.93},
  map: 'usMap',
  year: '1964',
  image: '/images/canyonlands.jpeg',
  features: 'Mesa Arch, False Kiva, Grand View Point, Shafer Canyon Overlook, Green River Overlook, Druid Arch, Big Spring Canyon, Buck Canyon, Confluence of Green and Colorado Rivers, and Elephant Hill',
  website: 'https://www.nps.gov/cany/index.htm'
}, {
  title: 'Capitol Reef National Park',
  id: 'Capitol_Reef',
  position: {lat: 38.2, lng: -111.17},
  map: 'usMap',
  year: '1971',
  image: '/images/capitol_reef.jpg',
  features: 'Gifford Homestead, Goosenecks Overlook, Fruita Schoolhouse, Pioneer Register, Upper Muley Twist Canyon Trail, Petroglyphs, Frying Pan Trail, Ferns Nipple, Slickrock Divide, and Pectols Pyramid',
  website: 'https://www.nps.gov/care/index.htm'
}, {
  title: 'Carlsbad Caverns National Park',
  id: 'Carlsbad_Caverns',
  position: {lat: 32.17, lng: -104.44},
  map: 'usMap',
  year: '1930',
  image: '/images/carlsbad.jpg',
  features: 'Amphitheatre, Slaughter Canyon Cave, Rattlesnake Canyon Trailhead, Natural Entrance Trail, Lechuguilla Cave, Big Room Trail, King&#39;s Palace, Lion&#39;s Tail, Green Lake, and Bottomless Pit',
  website: 'https://www.nps.gov/cave/index.htm'
}, {
  title: 'Channel Islands National Park',
  id: 'Channel_Islands',
  position: {lat: 34.01, lng: -119.42},
  map: 'usMap',
  year: '1980',
  image: '/images/channel_islands.jpg',
  features: 'Anacapa Island, Scorpion Ranch, Santa Cruz Island, Cavern Point, Inspiration Point, National Marine Sanctuary, Smugglers Cove, Albert Anchorage, Devils Peak, and Painted Cave',
  website: 'https://www.nps.gov/chis/index.htm'
}, {
  title: 'Congaree National Park',
  id: 'Congaree',
  position: {lat: 33.78, lng: -80.78},
  map: 'usMap',
  year: '2003',
  image: '/images/congaree.jpg',
  features: 'Congaree Vistors&#39; Center, Broadwalk Loop Trail, Bates Ferry Trail, Kingsnake Trail, River Trail, Oakridge Trail, Cedar Creek, Bluff Trail, Sims Trail, and Weston Lake Loop Trail',
  website: 'https://www.nps.gov/cong/index.htm'
}, {
  title: 'Crater Lake National Park',
  id: 'Crater_Lake',
  position: {lat: 42.94, lng: -122.1},
  map: 'usMap',
  year: '1902',
  image: '/images/crater_lake.jpg',
  features: 'Crater Lake, Phantom Ship Overlook, Mount Mazama, Cleetwood Cove, Watchman Overlook, Cloudcap Overlook, Castle Crest Wildflower Garden, Discovery Point, Mount Scott, and Llao Rock',
  website: 'https://www.nps.gov/crla/index.htm'
}, {
  title: 'Cuyahoga Valley National Park',
  id: 'Cuyahoga_Valley',
  position: {lat: 41.24, lng: -81.55},
  map: 'usMap',
  year: '2000',
  image: '/images/cuyahoga.jpg',
  features: 'Brandywine Falls, Cuyahoga River, Blue Hen Falls, Great Falls of Tinkers Creek, Beaver Marsh Boardwalk View, Ledges Trailhead, Ledges Overlook, Buttermilk Falls, Bridal Veil Falls, and Twin Sisters Falls',
  website: 'https://www.nps.gov/cuva/index.htm'
}, {
  title: 'Death Valley National Park',
  id: 'Death_Valley',
  position: {lat: 36.24, lng: -116.82},
  map: 'usMap',
  year: '1994',
  image: '/images/death_valley.jpg',
  features: 'Zabriskie Point, Dante&#39;s View, Ubehebe Crater, Titus Canyon, Badwater Basin, Darwin Falls, Mesquite Flat Sand Dunes, Mosaic Canyon Trail, Salt Creek Intrepretive Trail, and Aguereberry Point',
  website: 'https://www.nps.gov/deva/index.htm'
}, {
  title: 'Denali National Park and Preserve',
  id: 'Denali',
  position: {lat: 63.33, lng: -150.5},
  map: 'alaskaMap',
  year: '1917',
  image: '/images/denali.jpg',
  features: 'Denali, Wonder Lake, Denali State Park, Polychrome Overlook, Stony Hill Scenic Overlook, Sable Pass, Savage River Loop, West Buttress, Ruth Glacier, and Reflection Pond',
  website: 'https://www.nps.gov/dena/index.htm'
}, {
  title: 'Dry Tortugas National Park',
  id: 'Dry_Tortugas',
  position: {lat: 24.63, lng: -82.87},
  map: 'usMap',
  year: '1992',
  image: '/images/dry_tortugas.jpeg',
  features: 'Garden Key, Bush Key, Loggerhead Key, South Coaling Dock Ruins, North Coaling Dock Ruins, Shot Furnace, Fort Jefferson Boat Pier, Tortugas Banks, Dingghy Beach, and North Swim Beach',
  website: 'https://www.nps.gov/drto/index.htm'
}, {
  title: 'Everglades National Park',
  id: 'Everglades',
  position: {lat: 25.32, lng: -80.93},
  map: 'usMap',
  year: '1947',
  image: '/images/everglades.jpg',
  features: 'Anhinga Trail, Shark Valley, Pa-hay-okee Trail, Mahogany Hammock, Gumbo Limbo Trail, West Lake Trail, Nine Mile Pond Canoe Trail, Long Pine Key, Eco Pond, and Alligator Boat Tours',
  website: 'https://www.nps.gov/ever/index.htm'
}, {
  title: 'Gates of the Arctic National Park and Preserve',
  id: 'Gates_Arctic',
  position: {lat: 67.78, lng: -153.3},
  map: 'alaskaMap',
  year: '1980',
  image: '/images/gates_arctic.jpg',
  features: 'Arrigetch Peaks, Mount Igikpak, Tinayguk River, Walker Lake, Kobuk National Preserve, Endicott Mountains, Alatna River, Noatak River, John River, and Koyukuk River',
  website: 'https://www.nps.gov/gaar/index.htm'
}, {
  title: 'Glacier National Park',
  id: 'Glacier',
  position: {lat: 48.8, lng: -114},
  map: 'usMap',
  year: '1910',
  image: '/images/glacier.jpg',
  features: 'Highline Trail, Swiftcurrent Lake, Hidden Lake, Grinnell Glacier, Ptarmigan Tunnel, Iceberg Lake, Avalanche Lake, St Mary Fallls, Cracker Lake, and Virginia Falls',
  website: 'https://www.nps.gov/glac/index.htm'
}, {
  title: 'Glacier Bay National Park and Preserve',
  id: 'Glacier_Bay',
  position: {lat: 58.5, lng: -137},
  map: 'alaskaMap',
  year: '1980',
  image: '/images/glacier_bay.jpg',
  features: 'Margerie Glacier, Glacier Bay, Tarr Inlet, Mount Fairweather, John Hopkins Glacier, Muir Glacier, Lamplugh Glacier, Mount Crillon, Brady Glacier, and Riggs Glacier',
  website: 'https://www.nps.gov/glba/index.htm'
}, {
  title: 'Grand Canyon National Park',
  id: 'Grand_Canyon',
  position: {lat: 36.06, lng: -112.14},
  map: 'usMap',
  year: '1919',
  image: '/images/grand_canyon.jpeg',
  features: 'Havasu Falls, Grand Canyon Skywalk, Mather Point, South Kaibab Trail, Desert View Watchtower, Toroweap Overlook, Yavapai Point, Plateau Point Trail, South Rim Trail, and Hopi Point',
  website: 'https://www.nps.gov/grca/index.htm'
}, {
  title: 'Grand Teton National Park',
  id: 'Grand_Teton',
  position: {lat: 43.73, lng: -110.8},
  map: 'usMap',
  year: '1929',
  image: '/images/grand_teton.jpg',
  features: 'Jackson Lake, Jenny Lake, Grand Teton, Hidden Falls, Cascade Canyon Trail, Lake Solitude, Snake River Overlook, Schwabachers Landing, Taggart Lake, and Bradley Lake',
  website: 'https://www.nps.gov/grte/index.htm'
}, {
  title: 'Great Basin National Park',
  id: 'Great_Basin',
  position: {lat: 38.98, lng: -114.3},
  map: 'usMap',
  year: '1986',
  image: '/images/great_basin.jpg',
  features: 'Lehman Cave, Prometheus Tree Stump, Mather Overlook, Wheeler Peak Glacier, Lexington Arch, Island Forest Trail, Mountain View Nature Trail, Teresa Lake, Bristlecone Pine Trail, and Stargazing',
  website: 'https://www.nps.gov/grba/index.htm'
}, {
  title: 'Great Sand Dunes National Park and Preserve',
  id: 'Great_Sand_Dunes',
  position: {lat: 37.73, lng: -105.51},
  map: 'usMap',
  year: '2004',
  image: 'images/sand_dunes.jpg',
  features: 'Zapata Falls, Mosca Pass, Montville Nature Trail, Tijeras Peak, Mount Zwischen, Medano Creek, Sand Ramp Trail, Medano Lake, Mount Herard, and Music Pass',
  website: 'https://www.nps.gov/grsa/index.htm'
}, {
  title: 'Great Smoky National Park',
  id: 'Great_Smoky',
  position: {lat: 35.68, lng: -83.53},
  map: 'usMap',
  year: '1934',
  image: '/images/great_smoky.jpg',
  features: 'Cades Cove, Clingmans Dome, Ramsey Cascades, Roaring Fork, Laurel Falls Trail, Mingo Falls, Alum Cave Trail, Soco Falls, The Sinks, and Meigs Falls',
  website: 'https://www.nps.gov/grsm/index.htm'
}, {
  title: 'Guadalupe Mountains National Park',
  id: 'Guadalupe_Mountains',
  position: {lat: 31.92, lng: -104.87},
  map: 'usMap',
  year: '1966',
  image: '/images/guadalupe_mtns.jpg',
  features: 'Guadalupe Peak, McKittrick Canyon, Devil&#39;s Hall Trail, El Capitan, McKittrick Canyon Trailhead, Hunter Peak, Salt Basin Overlook, Smith Spring Loop, Manzanita Spring, and Dog Canyon',
  website: 'https://www.nps.gov/gumo/index.htm'
}, {
  title: 'Haleakal&#257; National Park',
  id: 'Haleakala',
  position: {lat: 20.72, lng: -156.17},
  map: 'hawaiiMap',
  year: '1916',
  image: '/images/haleakala.jpg',
  features: 'Haleakal&#257;, Seven Sacred Pools at Ohe&#39;o, Ohe&#39;o Gulch, Makahiku Falls, Waimoku Falls, Kalahaku Overlook, Leleiwi Overlook, Magnetic Peak, Hanakauhi, and Haupa&#39;akea Peak',
  website: 'https://www.nps.gov/hale/index.htm'
}, {
  title: 'Hawaii Volcanoes National Park',
  id: 'Hawaii_Volcanoes',
  position: {lat: 19.38, lng: -155.2},
  map: 'hawaiiMap',
  year: '1916',
  image: '/images/hawaii_volcanoes.jpg',
  features: 'K&#299;lauea, Hawaiian Volcano Observatory, Thurston Lava Tube, Pu&#39;u&#39;&#332;&#39;&#333;, Pu&#39;u Loa Petroglyphs, Mauna Ulu, Steam Vents, Kealakomo, Napau Trail, and Lava Taking Back The Road',
  website: 'https://www.nps.gov/havo/index.htm'
}, {
  title: 'Hot Springs National Park',
  id: 'Hot_Springs',
  position: {lat: 34.51, lng: -93.05},
  map: 'usMap',
  year: '1921',
  image: '/images/hot_springs.jpg',
  features: 'Hot Springs Mountain, Goat Rock Trail, Fordyce Bathhouse, Bathhouse Row, Lake Ouachita, Grand Promenade, Sunset Trail, and Hot Springs Haunted Tours',
  website: 'https://www.nps.gov/hosp/index.htm'
}, {
  title: 'Isle Royale National Park',
  id: 'Isle_Royale',
  position: {lat: 48.1, lng: -88.55},
  map: 'usMap',
  year: '1940',
  image: '/images/isle_royale.jpg',
  features: 'McCargoe Cove, Rock Harbor, Lookout Louise, Greenstone Ridge Trail, Scoville Point, Siskiwit Lake, Passage Island, Mount Ojibway, Huginnin Cove, and Malone Bay',
  website: 'https://www.nps.gov/isro/index.htm'
}, {
  title: 'Joshua Tree National Park',
  id: 'Joshua_Tree',
  position: {lat: 33.79, lng: -115.9},
  map: 'usMap',
  year: '1994',
  image: '/images/joshua_tree.jpeg',
  features: 'Keys View, Barker Dam, Lost Horse Mine, Cottonwood Spring, Arch Rock, Hidden Valley Nature Trail, Skull Rock Nature Trail, Hall of Horrors, Wall Street Mill, and Split Rock Loop',
  website: 'https://www.nps.gov/jotr/index.htm'
}, {
  title: 'Katmai National Park and Preserve',
  id: 'Katmai',
  position: {lat: 58.5, lng: -155},
  map: 'alaskaMap',
  year: '1980',
  image: '/images/katmai.jpg',
  features: 'Cook Inlet, Alagnak Wild River, Brooks Camp, Mount Katmai, Mount Griggs, Mount Kaguyak, Trident Volcano, Mount Denison, Valley of Ten Thousand Smokes, and Savonoski Loop',
  website: 'https://www.nps.gov/katm/index.htm'
}, {
  title: 'Kenai Fjords National Park',
  id: 'Kenai_Fjords',
  position: {lat: 59.92, lng: -149.65},
  map: 'alaskaMap',
  year: '1980',
  image: '/images/kenai_fjords.jpg',
  features: 'Exit Glacier, Harding Icefield Trail, Nuka Bay Mining District, Pederson Glacier, Six Mile Creek, and Clam Gulch',
  website: 'https://www.nps.gov/kefj/index.htm'
}, {
  title: 'Kings Canyon National Park',
  id: 'Kings_Canyon',
  position: {lat: 36.8, lng: -118.55},
  map: 'usMap',
  year: '1940',
  image: '/images/kings_canyon.jpg',
  features: 'Rae Lakes, Kearsarge Pass, The General Grant Tree, Mist Falls, Copper Creek Trailhead, Roaring River Falls, Mount Spencer, Charlotte Dome, Mount Goddard, and Jennie Lakes Wilderness',
  website: 'https://www.nps.gov/seki/index.htm'
}, {
  title: 'Kobuk Valley National Park',
  id: 'Kobuk_Valley',
  position: {lat: 67.55, lng: -159.28},
  map: 'alaskaMap',
  year: '1980',
  image: '/images/kobuk_valley.jpg',
  features: 'Arctic Sand Dunes, Kobuk River, Ahnewetut Creek, Baird Mountains, and plenty of unexplored land!',
  website: 'https://www.nps.gov/kova/index.htm'
}, {
  title: 'Lake Clark National Park and Preserve',
  id: 'Lake_Clark',
  position: {lat: 60.97, lng: -153.42},
  map: 'alaskaMap',
  year: '1980',
  image: '/images/lake_clark.jpg',
  features: 'Six Mile Lake, Turquoise Lake, Chinitna Bay, Crescent Lake, Silver Salmon Creek, Neacola Mountains, Redoubt Volcano, Hardenburg Bay, Kontrashibuna Lake, and Red Glacier',
  website: 'https://www.nps.gov/lacl/index.htm'
}, {
  title:'Lassen Volanic National Park',
  id: 'Lassen_Volcanic',
  position: {lat: 40.49, lng: -121.51},
  map: 'usMap',
  year: '1916',
  image: '/images/lassen_volcano.jpg',
  features: 'Lassen Peak, Bumpass Hell, Kings Creek Falls, Painted Dunes, Bumpass Mountain, Terminal Geyser, Chaos Crags, Manzanita Lake, Juniper Lake, and Boiling Springs Lake',
  website: 'https://www.nps.gov/lavo/index.htm'
}, {
  title: 'Mammoth Cave National Park',
  id: 'Mammoth_Cave',
  position: {lat: 37.18, lng: -86.1},
  map: 'usMap',
  year: '1941',
  image: '/images/mammoth_cave.jpg',
  features: 'Great Onyx Cave, Fat Man&#39;s Misery, Wind Cave, Tall Man&#39s Misery, Cedar Sink Trail, Green River, Grand Avenue Tour, Gothic Avenue Tour, Echo River, and Trog Tour',
  website: 'https://www.nps.gov/maca/index.htm'
}, {
  title: 'Mesa Verde National Park',
  id: 'Mesa_Verde',
  position: {lat: 37.18, lng: -108.49},
  map: 'usMap',
  year: '1906',
  image: '/images/mesa_verde.jpg',
  features: 'Cliff Palace, Balcony House, Spruce Tree House, Sun Point View, Petroglyph Point Trail, Sun Temple, Long House, Square Tower House, Step House, and Navajo Canyon View',
  website: 'https://www.nps.gov/meve/index.htm'
}, {
  title: 'Mount Rainier National Park',
  id: 'Mount_Rainier',
  position: {lat: 46.85, lng: -121.75},
  map: 'usMap',
  year: '1899',
  image: '/images/mount_rainier.jpg',
  features: 'Mount Rainier, Camp Muir, Reflection Lake, Grove of the Patriarchs Trail, Narada Falls, Tolmie Peak, Tipsoo Lake, Myrtle Falls, Skyline Trail, and Christine Falls',
  website: 'https://www.nps.gov/mora/index.htm'
}, {
  title: 'North Cascades National Park',
  id: 'North_Cascades',
  position: {lat: 48.7, lng: -121.2},
  map: 'usMap',
  year: '1968',
  image: '/images/north_cascades.jpg',
  features: 'Ladder Creek Falls, Gorge Overlook Trail, Diablo Lake, Hidden Lake Trail, Ross Lake, Sahale Glacier, Blue Lake Trail, Hannegan Pass, Cutthroat Pass, and Trappers Peak',
  website: 'https://www.nps.gov/noca/index.htm'
}, {
  title: 'Olympic National Park',
  id: 'Olympic',
  position: {lat: 47.97, lng: -123.5},
  map: 'usMap',
  year: '1938',
  image: '/images/olympic.jpg',
  features: 'Hoh Rainforest, Hurricane Ridge, Marymere Falls, Lake Crescent, Hole-in-the-Wall, Hurricane Ridge, Grand Pass, Tree Root Cave, Sol Duc River, and Ruby Beach',
  website: 'https://www.nps.gov/olym/index.htm'
}, {
  title: 'Petrified Forest National Park',
  id: 'Petrified_Forest',
  position: {lat: 35.07, lng: -109.78},
  map: 'usMap',
  year: '1962',
  image: '/images/petrified_forest.jpg',
  features: 'Jasper Forest, Ice Cream Rocks, Newspaper Rock, Agate Bridge, Blue Mesa Trail, The Tepees, Puerco Pueblo, Whipple Point, Nizhoni Point, and Kachina Point',
  website: 'https://www.nps.gov/pefo/index.htm'
}, {
  title: 'Pinnacles National Park',
  id: 'Pinnacles',
  position: {lat: 36.48, lng: -121.16},
  map: 'usMap',
  year: '2013',
  image: '/images/pinnacles.jpg',
  features: 'Bear Gulch Caves, Balconies Cliff Trails, Rim Trail Loop, High Peaks Loop, South Wilderness Trail, Chalone Peak Trail, Peaks View, Juniper Canyon Loop, North Wilderness Trail Loop, and Machete Ridge',
  website: 'https://www.nps.gov/pinn/index.htm'
}, {
  title: 'Redwood National and State Parks',
  id: 'Redwood',
  position: {lat: 41.3, lng: -124},
  map: 'usMap',
  year: '1968',
  image: '/images/redwood.jpg',
  features: 'Trees of Mystery, Fern Canyon, Stout Grove Trail, Gold Bluffs Beach, Bald Hills, Howland Hills Road, Enderts Beach Road, Newton B. Drury Scenic Parkway, Davison Road, and Cal-Barrel Road',
  website: 'https://www.nps.gov/redw/index.htm'
}, {
  title: 'Rocky Mountain National Park',
  id: 'Rocky_Mountain',
  position: {lat: 40.4, lng: -105.58},
  map: 'usMap',
  year: '1915',
  image: '/images/rocky_mtn.jpg',
  features: 'Bear Lake, Dream Lake, Rainbow Curve Overlook, Alberta Falls, Emerald Lake, Sprague Lake, Cub Lake Trail, Sky Pond, Longs Peak, and Calypso Cascades',
  website: 'https://www.nps.gov/romo/index.htm'
}, {
  title: 'Saguaro National Park',
  id: 'Saguaro',
  position: {lat: 32.25, lng: -110.5},
  map: 'usMap',
  year: '1994',
  image: '/images/saguaro.jpg',
  features: 'Cactus Forest Drive, Signal Hill, Cactus Garden Trail, King Canyon Trail, Gate Pass, Douglas Spring Trail, Wasson Peak, Mica View, Ernie&#39;s Falls, and Tanque Verde Falls',
  website: 'https://www.nps.gov/sagu/index.htm'
}, {
  title: 'Sequoia National Park',
  id: 'Sequoia',
  position: {lat: 36.43, lng: -118.68},
  map: 'usMap',
  year: '1890',
  image: '/images/sequoia.jpeg',
  features: 'General Sherman, Mount Whtiney, Moro Rock, Crystal Cave, Giant Forest, Forester Pass, Mount Langley, Tunnel Log, President Tree, and Bear Hill Trail',
  website: 'https://www.nps.gov/seki/index.htm'
}, {
  title: 'Shenandoah National Park',
  id: 'Shenandoah',
  position: {lat: 38.53, lng: -78.35},
  map: 'usMap',
  year: '1935',
  image: '/images/shenandoah.jpg',
  features: 'Appalachian Trail, Old Rag Mountian, Hawksbill Mountain, Stony Man Mountain, Dark Hollow Falls, Bearfence Mountain, Thornton Gap, Overall Run Falls, Hogback Overlook, and Rose River Falls',
  website: 'https://www.nps.gov/shen/index.htm'
}, {
  title: 'Theodore Roosevelt National Park',
  id: 'Theodore_Roosevelt',
  position: {lat: 46.97, lng: -103.45},
  map: 'usMap',
  year: '1978',
  image: '/images/theodore_roosevelt.jpg',
  features: 'Skyline Vista, Medora Overlook, Scoria Point Overlook, Badlands Overlook, Buck Hill, Maltese Cross Cabin, Boicourt Overlook Trail, Painted Canyon Nature Trail, Ridgeline Trail, and Oxbow Overlook',
  website: 'https://www.nps.gov/thro/index.htm'
}, {
  title: 'Virgin Islands National Park',
  id: 'Virgin_Islands',
  position: {lat: 18.33, lng: -64.73},
  map: 'usMap',
  year: '1956',
  image: '/images/virgin_islands.jpg',
  features: 'Trunk Bay, Honeymoon Beach, Annaberg Sugar Plantation, Hawksnest Beach, Cinnamon Bay, Gibney Beach, Petroglyphs, Coral Reef Underwater Park Trail, Little Lameshur Bay, and Bordeaux Mountain',
  website: 'https://www.nps.gov/viis/index.htm'
}, {
  title: 'Voyageurs National Park',
  id: 'Voyageurs',
  position: {lat: 48.5, lng: -92.88},
  map: 'usMap',
  year: '1971',
  image: '/images/voyageurs.jpg',
  features: 'Ash River, Rainy Lake, Kabetogama Peninsula, Ellsworth Rock Gardens, Crane Lake, Locator Lake Trail, Namakan Island, Echo Bay Trail, Blind Ash Bay Trail, and Ethno-botanical Garden Trail',
  website: 'https://www.nps.gov/voya/index.htm'
}, {
  title: 'Wind Cave National Park',
  id: 'Wind_Cave',
  position: {lat: 43.57, lng: -103.48},
  map: 'usMap',
  year: '1903',
  image: '/images/wind_cave.jpg',
  features: 'Wind Cave, Rankin Ridge, Wind Cave Canyon, Centennial Trail, Cold Brook Canyon, Boland Ridge, East Bison Flats, Highland Creek, Sanctuary Trail, and Lookout Point',
  website: 'https://www.nps.gov/wica/index.htm'
}, {
  title: 'Wrangell-St. Elias National Park and Preserve',
  id: 'Wrangell_St_Elias',
  position: {lat: 61, lng: -142},
  map: 'alaskaMap',
  year: '1980',
  image: '/images/kennecott.jpg',
  features: 'Kennecott Mines, Hubbard Glacier, Mount Blackburn, Mount Wrangell, Regal Mountain, Mount Bona, University Peak, Mount Bear, Nabesna Glacier, and Atna Peaks',
  website: 'https://www.nps.gov/wrst/index.htm'
}, {
  title: 'Yellowstone National Park',
  id: 'Yellowstone',
  position: {lat: 44.6, lng: -110.5},
  map: 'usMap',
  year: '1872',
  image: '/images/yellowstone.jpg',
  features: 'Old Faithful, Mammoth Hot Springs, Grand Prismatic Spring, Grand Canyon of the Yellowstone, Morning Glory Pool, Upper Yellowstone Falls, Lamar Valley, Tower Fall, Norris Geyser Basin, and Mount Washburn',
  website: 'https://www.yellowstonepark.com/'
}, {
  title: 'Yosemite National Park',
  id: 'Yosemite',
  position: {lat: 37.83, lng: -119.5},
  map: 'usMap',
  year: '1890',
  image: '/images/yosemite.jpg',
  features: 'Half Dome, Glacier Point, Yosemite Falls, Tunnel View, Tuolumne Meadows, Mist Trail, Bridalveil Fall, Hetch Hetchy, El Capitan, and Taft Point',
  website: 'https://www.nps.gov/yose/index.htm'
}, {
  title: 'Zion National Park',
  id: 'Zion',
  position: {lat: 37.3, lng: -113.05},
  map: 'usMap',
  year: '1919',
  image: '/images/zion.jpg',
  features: 'The Narrows, Angel&#39;s Landing, Zion Canyon, Mount Carmel Highway, Kolob Canyons, Emerald Pools, Weeping Rock, Riverside Walk, Kanarraville Falls, and The Subway',
  website: 'https://www.zionnationalpark.com'
} ];
