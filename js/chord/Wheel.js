/**
 * Created by diakabanab on 11/5/2016.
 */
define(["jquery", "wheel/Colors", "chord.sass", "chord/Positions", "tinycolor2"],
    function($, Colors, chordStyle, Positions, TinyColor) {

        /**
         * Draws chord wheel
         */
        var Wheel = function(container) {
            this.canvas = $("<canvas>", {
                id : "Canvas"
            }).appendTo(container);

            // width and height of the wheel
            this.radius = this.canvas.width();
            this.center = this.canvas.width();
            this.innerRadius = 0.66 * this.radius;

            // notes and keys
            this.currentLetter = "C";
            this.currentKey = "major";

            // context
            this.context = this.canvas.get(0).getContext("2d");
            this.resize();
            $(window).on("resize", this.resize.bind(this));
        };

        var minorColors = {};

        for (var key in Colors) {
            var color = TinyColor(Colors[key]);
            color.darken(10);
            minorColors[key] = color.toRgbString();
        }

        Wheel.prototype.resize = function() {
            this.radius = Math.min(this.canvas.width(), this.canvas.height());
            this.center = this.radius;
            this.context.canvas.width = this.canvas.width() * 2;
            this.context.canvas.height = this.canvas.height() * 2;
            this.innerRadius = 0.66 * this.radius;
        };

    }
));
