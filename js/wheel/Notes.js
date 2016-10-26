/**
 * Created by diakabanab on 10/23/2016.
 */
define(["teoria", "chord/Positions"], function(teoria, Positions) {
    var notes = {
        major: {},
        minor: {}
    };

    // initializes major and minor notes
    for (var i = 0; i < Positions.majorOrder.length; i++) {
        var key = Positions.majorOrder[i];
        var major = teoria.note(key + "3").chord("major");
        var minor = teoria.note(key + "3").chord("minor");
        notes.major[key] = [];
        notes.minor[key] = [];
        var octaves = 3;
        for (var o = 0; o < octaves; o++) {
            var majorNotes = major.notes();
            var minorNotes = minor.notes();
            for (var j = 0; j < majorNotes.length; j++) {
                notes.major[key].push(majorNotes[j].midi());
                notes.minor[key].push(minorNotes[j].midi());
            }
            major.transpose(teoria.interval("P8"));
            minor.transpose(teoria.interval("P8"));
        }
    }

    return notes;
});