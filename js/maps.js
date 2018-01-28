var maps = {
    "map-nuclear": {
        attributes: {
            css: {
                height: "40em"
            }
        },
        markers: dataNuclear,
        icon: L.AwesomeMarkers.icon({icon: 'o_nuclear', markerColor: 'beige', prefix: 'icon'})
    },
    "map-hydro": {
        attributes: {
            css: {
                height: "40em"
            }
        },
        markers: dataHydro,
        icon: L.AwesomeMarkers.icon({icon: 'o_hydro', markerColor: 'darkred', prefix: 'icon'})
    }
};

(function() {
    $(".map").each(function() {
        var properties = maps[$(this).attr("id")];
        $(this).css(properties.attributes.css);

        var map = L.map($(this).attr("id")).setView([47.5, 2.3], 5);
        maps[$(this).attr("id")].map = map;

        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        $(properties.markers).each(function(){
            L.marker(this.coords, {icon: properties.icon}).addTo(map)
                .bindPopup("<h4>"+this.title+"</h4>"+this.html);
        });

        $("#"+$(this).attr("id")+" .leaflet-control-zoom.leaflet-bar.leaflet-control").append(
            "<a class='leaflet-control-center' href='#' title='Center' role='button' aria-label='Center' data-mapid='"+$(this).attr("id")+"'><i class='fa fa-expand-wide'></i></a>")
    });

    $(".map").on("click", "a.leaflet-control-center", function(e) {
        maps[$(this).data("mapid")].map.setView([47.5, 2.3], 5);
        e.preventDefault();
    });
})();