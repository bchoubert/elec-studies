
var graphs = {
    "chart-production": {
        type: "horizontalBar",
        data: {
            labels: [""],
            datasets: [{
                label: 'Nucleaire',
                backgroundColor: "#FFC870",
                data: [72]
            }, {
                label: 'Hydraulique',
                backgroundColor: "#D50000",
                data: [12]
            }, {
                label: 'Gaz',
                backgroundColor: "#0091EA",
                data: [7]
            }, {
                label: 'Eolien',
                backgroundColor: "#304FFE",
                data: [4]
            }, {
                label: 'Bio',
                backgroundColor: "#00C853",
                data: [2]
            }, {
                label: 'Solaire',
                backgroundColor: "#FFD600",
                data: [2]
            }, {
                label: 'Charbon',
                backgroundColor: "#FF6D00",
                data: [1]
            }]
        },
        options: {
            tooltips: {
                yAlign: 'bottom'
            },
            responsive: true,
            scales: {
                xAxes: [{stacked: true}],
                yAxes: [{stacked: true}]
            }
        },
        chart: null
    },
    "chart-consommation-by-theme": {
        type: 'doughnut',
        data: {
            labels: [
                "Agriculture et industrie agroalimentaire",
                "Energies et combustibles minéraux solides",
                "Chimie et parachimie",
                "Construction automobile",
                "Métallurgie et mécanique",
                "Minéraux et matériaux",
                "Papier, carton",
                "Sidérurgie",
                "Autres industries",
                "Transports et télécommunications",
                "Tertiaire",
                "Particuliers",
                "Autres professionnels"
            ],
            datasets:[
                {
                    "label":"Consommation",
                    "data":[23, 11, 20, 5, 24, 9, 7, 12, 15, 15, 90, 168, 48],
                    "backgroundColor":[
                        "rgb(63, 81, 181)",
                        "rgb(54, 162, 235)",
                        "rgb(0, 151, 167)",
                        "rgb(0, 200, 81)",
                        "rgb(0, 126, 51)",
                        "rgb(255, 205, 86)",
                        "rgb(251, 140, 0)",
                        "rgb(244, 81, 30)",
                        "rgb(255, 68, 68)",
                        "rgb(204, 0, 0)",
                        "rgb(186, 104, 200)",
                        "rgb(153, 51, 204)",
                        "rgb(89, 105, 141)"
                    ]
                }
            ]
        },
        options: {
            legend: {
                display: false
            }
        }
    },
    "chart-consommation-by-year": {
        type: 'line',
        data: {
            labels: ["1-15", "2-15", "3-15", "4-15", "5-15", "6-15", "7-15", "8-15", "9-15", "10-15", "11-15", "12-15",
                "1-16", "2-16", "3-16", "4-16", "5-16", "6-16", "7-16", "8-16", "9-16", "10-16", "11-16", "12-16",
                "1-17", "2-17", "3-17", "4-17", "5-17", "6-17", "7-17", "8-17", "9-17", "10-17", "11-17", "12-17"],
            datasets:[
                {
                    label: "Consommation",
                    data: [52537, 48676, 45740, 36899, 33928, 33257, 34913, 31603, 33522, 39171, 41085, 44727, 
                        50161, 46440, 47270, 39102, 34747, 32852, 33719, 32133, 33246, 38591, 44294, 50671, 
                        57434, 43923, 42734, 36670, 35049, 33396, 33906, 32125, 33654, 36625, 44920, 51549],
                    fill: false,
                    borderColor: "rgb(0,166,217)",
                    lineTension :0.1
                }
            ]
        },
        options: {
            legend: {
                display: false
            }
        }
    }
};

var registerMinCharts = function() {
    $(".min-chart").each(function() {
        $(this).easyPieChart({
            barColor: $(this).data("color"),
            onStep: function (from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
    });
}

$(function () {
    registerMinCharts();

    $(".chart").each(function() {
        var ctx = $(this)[0].getContext('2d');
        var properties = graphs[$(this).attr("id")];

        graphs[$(this).attr("id")].chart = new Chart(ctx, {
            type: properties.type,
            data: properties.data,
            options: properties.options
        });
    });
});