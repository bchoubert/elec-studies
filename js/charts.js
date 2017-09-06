var datas = {
    "electricity-production-repartition": [
        {
            value: 88,
            color: "#FFC870",
            highlight: "#FFC870",
            label: "Nucléaire"
        },
        {
            value: 10.9,
            color: "#d50000",
            highlight: "#d50000",
            label: "Hydraulique"
        },
        {
            value: 4.6,
            color: "#0091ea",
            highlight: "#0091ea",
            label: "Gaz"
        },
        {
            value: 4.4,
            color: "#304ffe",
            highlight: "#304ffe",
            label: "Eolien"
        },
        {
            value: 1.8,
            color: "#ff6d00",
            highlight: "#ff6d00",
            label: "Charbon"
        },
        {
            value: 1.7,
            color: "#00c853",
            highlight: "#00c853",
            label: "BioEnergies"
        },
        {
            value: 1.5,
            color: "#6200ea",
            highlight: "#6200ea",
            label: "Solaire"
        },
        {
            value: 0.5,
            color:"#ffd600",
            highlight: "#ffd600",
            label: "Fioul"
        }        
    ],
    "electricity-consumption": {
        labels: ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],
        datasets: 
        [
            {
                label: "Consommation",
                fillColor: "rgba(0,153,204,0)",
                strokeColor: "rgba(0,153,204,1)",
                pointColor: "rgba(0,153,204,1)",
                data: [104474812,96789038,91043796,73362444,67464916,66102431,69323709,62691254,66633216,77838862,81691874,88889267]
            },
            {
                label: "Production Nucléaire",
                fillColor: "rgba(255,200,112,0)",
                strokeColor: "rgba(255,200,112,1)",
                pointColor: "rgba(255,200,112,1)",
                data: [87536362,74945335,73885773,62314387,60596756,61373876,66486369,63931776,61228222,68826328,71282581,80500930]
            },
            {
                label: "Production Hydraulique",
                fillColor: "rgba(213,0,0,0)",
                strokeColor: "rgba(213,0,0,1)",
                pointColor: "rgba(213,0,0,1)",
                data: [11028229,11652729,11531981,10307807,11428965,9949273,6983404,5794727,6025161,6816544,5975326,5765514]
            },
            {
                label: "Production Centrales à Gaz",
                fillColor: "rgba(0,145,234,0)",
                strokeColor: "rgba(0,145,234,1)",
                pointColor: "rgba(0,145,234,1)",
                data: [6133659,6673387,5276061,1888098,969144,898560,1702112,862474,2180784,4730882,6852943,6019020]
            },
            {
                label: "Production Eoliennes",
                fillColor: "rgba(48,79,254,0)",
                strokeColor: "rgba(48,79,254,1)",
                pointColor: "rgba(48,79,254,1)",
                data: [4590541,3814604,4019579,2906826,3157503,2508602,2795005,2250080,3340872,2576574,5082748,5145602]
            },
            {
                label: "Production Centrales à Charbon",
                fillColor: "rgba(255,109,0,0)",
                strokeColor: "rgba(255,109,0,1)",
                pointColor: "rgba(255,109,0,1)",
                data: [3232540,3408631,2203628,1095114,68930,111261,452183,312600,1192007,2009057,1591239,1542689]
            },
            {
                label: "Production Bio Energies",
                fillColor: "rgba(0,200,83,0)",
                strokeColor: "rgba(0,200,83,1)",
                pointColor: "rgba(0,200,83,1)",
                data: [1385204,1270947,1394227,1169180,1275068,1198787,1305204,1331072,1281991,1244989,1451979,1523978]
            },
            {
                label: "Production Solaire",
                fillColor: "rgba(98,0,234,0)",
                strokeColor: "rgba(98,0,234,1)",
                pointColor: "rgba(98,0,234,1)",
                data: [487565,702253,1053372,1536622,1657133,1870608,1851810,1666174,1406279,1006164,737918,596769]
            },
            {
                label: "Production Centrales au Fioul",
                fillColor: "rgba(255,214,0,0)",
                strokeColor: "rgba(255,214,0,1)",
                pointColor: "rgba(255,214,0,1)",
                data: [508256,500489,472770,384015,350463,360660,370641,322555,350506,473005,685163,529776]
            }
        ]
    }
};


(function () { 
    Chart.defaults.global.title = {
        display: true
    };
    
    var options = {
        "Doughnut": function(data){
            return {
                responsive: true,
                segmentShowStroke: false,
                animateRotate: true,
                animateScale: false,
                percentageInnerCutout: 50,
                tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>%",
                legendTemplate : '<ul class="chart-legend">'
                    +'<% for (var i=0; i<datas["'+data+'"].length; i++) { %>'
                        +'<li>'
                        +'<span class="square" style="background-color:<%=datas["'+data+'"][i].color%>"></span>'
                        +'<% if (datas["'+data+'"][i].label) { %><span><%= datas["'+data+'"][i].label %> (<%= datas["'+data+'"][i].value %>%)<% } %></span>'
                    +'</li>'
                    +'<% } %>'
                +'</ul>'
            }
        },
        "Line": function(data){
            return {
                responsive: true,
                tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>%",
                legendTemplate : '<ul class="chart-legend">'
                    +'<% for (var i=0; i<datas["'+data+'"].datasets.length; i++) { %>'
                        +'<li>'
                        +'<span class="square" style="background-color:<%=datas["'+data+'"]["datasets"][i].strokeColor%>"></span>'
                        +'<% if (datas["'+data+'"]["datasets"][i].label) { %><span><%= datas["'+data+'"]["datasets"][i].label %><% } %></span>'
                    +'</li>'
                    +'<% } %>'
                +'</ul>',
                scaleOverride : true,
                scaleSteps : 11,
                scaleStepWidth : 10000000,
                scaleStartValue : 0 
            }
        }
    };

    $(".chartjs").each(function(){
        
        var ctx = $(this).get(0).getContext('2d');
        console.log(datas[$(this).data("data")])
        var chart = new Chart(ctx)[$(this).data("type")](datas[$(this).data("data")], options[$(this).data("type")]($(this).data("data")));
        document.getElementById($(this).data("legend")).innerHTML += chart.generateLegend();
    });


})();

     
