var maps = {
    "map-nuclear": {
        attributes: {
            css: {
                height: "40em"
            },
            view: [47.5, 2.3],
            zoom: 5
        },
        markers: dataNuclear,
        icon: L.AwesomeMarkers.icon({icon: 'o_nuclear', markerColor: 'beige', prefix: 'icon'})
    },
    "map-hydro": {
        attributes: {
            css: {
                height: "40em"
            },
            view: [47.5, 2.3],
            zoom: 5
        },
        markers: dataHydro,
        icon: L.AwesomeMarkers.icon({icon: 'o_hydro', markerColor: 'darkred', prefix: 'icon'})
    }
};

(function() {
    $(".map").each(function() {
        var properties = maps[$(this).attr("id")];
        $(this).css(properties.attributes.css);

        var map = L.map($(this).attr("id"), { zoomControl:false }).setView(properties.attributes.view, properties.attributes.zoom);
        map.touchZoom.disable();
        map.doubleClickZoom.disable();
        map.scrollWheelZoom.disable();
        map.boxZoom.disable();
        map.keyboard.disable();

        console.log(properties.markers.length)

        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        $(properties.markers).each(function(){
            L.marker(this.coords, {icon: properties.icon}).addTo(map)
                .bindPopup("<h4>"+this.title+"</h4>"+this.html);
        });
    });
})();