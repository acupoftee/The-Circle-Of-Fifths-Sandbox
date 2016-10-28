/**
 * Created by diakabanab on 10/26/2016.
 */
define(["jquery", "chord/Positions"], function($, Positions) {
    var Interface = function(container) {
        this.element = $("<div>", {
            "id": "Interaction"
        }).appendTo(container);

        this.element.on("mousedown", this.mouseup.bind(this));
        this.element.on("touchstart", this.click.bind(this));
        this.element.on("touchend", this.mouseup.bind(this));
        this.element.on("mouseup", this.mouseup.bind(this));

        this.onstart = function(){};
        this.onend = function(){};
    };

    /**
     * Gets the chord at its given position
     */
    Interface.prototype.getChord = function(x, y) {
        var twoPi = Math.PI * 2;
        var width = this.element.width;
        var height = this.element.height;
        x = ((x - width / 2) / width) * 2;
        y = ((y - height / 2) / height) * 2;
        var theta = Math.atan2(y, x);
        var radius = Math.sqrt(x*x + y*y);

        var i = 0;
        for (var letter in Positions.major) {
            var coordinate = Positions.major[letter];
            if (theta > coordinate.startAngle && theta < coordinate.endAngle) {
                break;
            } else if (theta + twoPu > coordinate.startAngle && theta + twoPi < coordinate.endAngle) {
                break;
            }
            i++;
        }
        if (radius < Positions.innerRadius) {
            return [Positions.minorOrder[i], "minor"];
        } else {
            return [Positions.majorOrder[i], "major"];
        }
    };
});