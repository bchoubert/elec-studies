var getColorFromKv = function(kv) {
    if(isNaN(kv) || kv == null) {
        return "red";
    }
    if(kv > 230 ) {
        return "#1976d2";
    }
    return "#64b5f6";
};
var changeNetworkLayer = function(type) {
    if(type == "mid") {
        networkMap.removeLayer(networkLayers.high);
        networkLayers.mid.addTo(networkMap);
        return;
    }
    if(type == "high") {
        networkMap.removeLayer(networkLayers.mid);
        networkLayers.high.addTo(networkMap);
    }
};
var networkMap = null;
var networkLayers = {
    "high": new L.LayerGroup(),
    "mid": new L.LayerGroup()
};

(function() {

    networkMap = L.map("map-network").setView([47.5, 2.3], 5);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(networkMap);

    $(paths0).each(function() {

        var popup = "<div class='popup-content'><h4>"+this.code+"</h4>";

        if(this.label != null) {
            popup += "Label : "+this.label;
        }
        if(this.kv != null) {
            popup += "<br/>Puissance : "+this.kv+"kV";
        } else {
            popup += "<br/>Puissance inconnue";
        }
        popup += "</div>";

        if(this.kv != null) {
            if(this.kv > 230) {
                L.polyline(this.points, {color: getColorFromKv(this.kv)}).addTo(networkLayers.high)
                    .bindPopup(popup);
            } else {
                L.polyline(this.points, {color: getColorFromKv(this.kv)}).addTo(networkLayers.mid)
                    .bindPopup(popup);
            }
        }

        networkLayers.high.addTo(networkMap);
    });

    $("#map-network .leaflet-control-zoom.leaflet-bar.leaflet-control").append(
        "<a class='leaflet-control-center' href='#' title='Center' role='button' aria-label='Center' data-mapid='map-network'><i class='fa fa-expand-wide'></i></a>");


    $(".map-path").on("click", "a.leaflet-control-center", function(e) {
        networkMap.setView([47.5, 2.3], 5);
        e.preventDefault();
    });

    $("input[name=groupElec]").change(function(){
        changeNetworkLayer($(this).data("type"));
    });
})();