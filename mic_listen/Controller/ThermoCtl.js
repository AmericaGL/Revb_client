var Thermometer = require('../Model/Thermometer');
var TextToSpeech = require('../Controller/TextToSpeech');
var BluezSpeaker = require('../Model/BluezSpeaker');

var interval = null;

function run () {
    if (interval !== null) {
        if(Thermometer.isAbove(30)) {
            BluezSpeaker.playFile(TextToSpeech.speechToFile("It's getting a bit hot in here"));
        }
    } else {
        interval = setInterval(run, 1000);
    }
}