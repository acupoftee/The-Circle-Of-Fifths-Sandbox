/**
 * Created by diakabanab on 10/29/2016.
 */
define(["jquery", "chord/Positions"], function($, Positions) {
    var Letters = function(container) {
        this.element = $("div", {
            "id": "Letters"
        }).appendTo(container);

        this.resize();
        $(window).resize(this.resize.bind(this));
    };

    Letters.prototype.resize = function() {
        this.element.html("");
        var size = Math.min(this.element.width(), this.element.height());
        this.center = {
            x: this.element.width() / 2,
            y: this.element.height() / 2
        };

        var letterCoordinates, shownLetter, letter;
        for (var majorLetter in Positions.major) {
            letterCoordinates = Positions.major[majorLetter].center;
            shownLetter = majorLetter.replace("#","<span>#</span>");
            letter = $("<div>", {
                "class": "Letter Major",
                "html": shownLetter
            }).appendTo(this.element);
            letter.css({
                "left": letterCoordinates.x * this.center.x + this.center.x,
                "top": letterCoordinates.y * this.center.y + this.center.y
            });
        }

        for (var minorLetter in Positions.minor) {
            letterCoordinates = Positions.minor[minorLetter].center;
            shownLetter = minorLetter.replace("#","<span>#</span>");
            letter = $("<div>", {
                "class": "Letter Minor",
                "html": shownLetter
            }).appendTo(this.element);
            letter.css({
                "left": letterCoordinates.x * this.center.x + this.center.x,
                "top": letterCoordinates.y * this.center.y + this.center.y
            });
        }
    };

    return Letters;
});