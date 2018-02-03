var maps = {
    "map-nuclear": {
        attributes: {
            css: {
                
            }
        },
        markers: dataNuclear,
        icon: L.AwesomeMarkers.icon({icon: 'o_nuclear', markerColor: 'beige', prefix: 'icon'})
    },
    "map-hydro": {
        attributes: {
            css: {
                
            }
        },
        markers: dataHydro,
        icon: L.AwesomeMarkers.icon({icon: 'o_hydro', markerColor: 'darkred', prefix: 'icon'})
    },
    "map-gas": {
        attributes: {
            css: {
                
            }
        },
        markers: dataGaz,
        icon: L.AwesomeMarkers.icon({icon: 'o_gas', markerColor: 'blue', prefix: 'icon'})
    },
    "map-wind": {
        attributes: {
            css: {
                
            }
        },
        markers: dataWind,
        icon: L.AwesomeMarkers.icon({icon: 'o_eolien', markerColor: 'darkblue', prefix: 'icon'})
    },
    "map-coal": {
        attributes: {
            css: {
                
            }
        },
        markers: dataCoal,
        icon: L.AwesomeMarkers.icon({icon: 'o_charbon', markerColor: 'orange', prefix: 'icon'})
    },
    "map-bio": {
        attributes: {
            css: {
                
            }
        },
        markers: [],
        icon: L.AwesomeMarkers.icon({icon: 'o_bio', markerColor: 'green', prefix: 'icon'})
    },
    "map-solar": {
        attributes: {
            css: {
                
            }
        },
        markers: dataSolar,
        icon: L.AwesomeMarkers.icon({icon: 'o_solar', markerColor: 'black', prefix: 'icon'})
    },
};

(function() {
    $(".map").each(function() {
        var properties = maps[$(this).attr("id")];
        $(this).css(properties.attributes.css);

        var map = L.map($(this).attr("id")).setView([47.5, 2.3], 5);
        maps[$(this).attr("id")].map = map;

        map.scrollWheelZoom.disable();

        console.log($(this).attr("id")+" "+properties.markers.length)

        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        $(properties.markers).each(function(){

            if(this.img) {
                L.marker(this.coords, {icon: properties.icon}).addTo(map)
                    .bindPopup("<img class='w-100' src='"+this.img+"'/><div class='popup-content'><h4>"+this.title+"</h4>"+this.html+"</div>");
            } else {
                L.marker(this.coords, {icon: properties.icon}).addTo(map)
                    .bindPopup("<div class='popup-content'><h4>"+this.title+"</h4>"+this.html+"</div>");
            }
        });

        $("#"+$(this).attr("id")+" .leaflet-control-zoom.leaflet-bar.leaflet-control").append(
            "<a class='leaflet-control-center' href='#' title='Center' role='button' aria-label='Center' data-mapid='"+$(this).attr("id")+"'><i class='fa fa-expand-wide'></i></a>")
    });

    $(".map").on("click", "a.leaflet-control-center", function(e) {
        maps[$(this).data("mapid")].map.setView([47.5, 2.3], 5);
        e.preventDefault();
    });
})();