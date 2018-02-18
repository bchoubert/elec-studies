
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
    "chart-consommation": {
        type: 'doughnut',
        data: {
            labels:["<i class='icon-o_network'></i>Red","Blue","Yellow"],
            datasets:[
                {"label":"My First Dataset","data":[300,50,100],"backgroundColor":["rgb(255, 99, 132)","rgb(54, 162, 235)","rgb(255, 205, 86)"]}
            ]
        },
        options: {
            
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