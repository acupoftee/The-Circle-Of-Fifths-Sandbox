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


})