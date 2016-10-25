/**
 * Created by diakabanab on 10/23/2016.
 */
define(function() {
    /**
     * Maps the points of the notes on the circle
     * @param theta
     * @param radius
     * @returns {{x: number, y: number}}
     */
    function toCartesian(theta, radius) {
        return {
            x: radius * Math.cos(theta),
            y: radius * Math.sin(theta)
        };
    }

    var innerRadius = 0.66;

    var majorOrder = ["C", "G", "D", "A", "E", "B", "F#", "C#", "G#", "A#", "F"];
    var minorOrder = ["A", "E", "B", "F#", "C#", "G#", "D#", "A#", "F", "C", "G", "D"];
    var majorCoordinates = {};
    var minorCoordinates = {};

    var threshold = 0.01;

    // draws major slices first
    var arcSize = Math.PI * 2 / majorOrder.length;
    var startAngle = 0 - arcSize / 2 - Math.PI / 2;

    for (var i = 0; i < majorOrder.length; i++) {
        var coordinates = {
            startAngle : startAngle - threshold,
            endAngle : startAngle + arcSize + threshold,
            innerRadius : innerRadius,
            outerRadius : 1,
        };
        coordinates.center = toCartesian((coordinates.endAngle + coordinates.startAngle) / 2,
            (coordinates.outerRadius + coordinates.innerRadius) / 2);
        majorCoordinates[majorOrder[i]] = coordinates;
        startAngle += arcSize;
    }



})