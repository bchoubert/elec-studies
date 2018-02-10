


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
});