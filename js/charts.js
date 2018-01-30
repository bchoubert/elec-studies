
$(function () {
    $('.min-chart#chart-nuclear').easyPieChart({
        barColor: "#FFC870",
        onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });
    $('.min-chart#chart-hydro').easyPieChart({
        barColor: "#D50000",
        onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });
    $('.min-chart#chart-gas').easyPieChart({
        barColor: "#0091EA",
        onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });
    $('.min-chart#chart-wind').easyPieChart({
        barColor: "#304FFE",
        onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });
    $('.min-chart#chart-coal').easyPieChart({
        barColor: "#FF6D00",
        onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });
    $('.min-chart#chart-bio').easyPieChart({
        barColor: "#00C853",
        onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });
    $('.min-chart#chart-solar').easyPieChart({
        barColor: "#FFD600",
        onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });
    $('.min-chart#chart-fioul').easyPieChart({
        barColor: "#6200EA",
        onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });
});