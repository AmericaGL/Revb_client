
//var Mic = require("./Model/Microphone");
//var Thermo = require('./Model/Thermometer');
var ListenCtl = require('./Controller/ListenCtl');
var BlueMixCtl = require('./Controller/TextToSpeech');

//function loop () {
//    console.log('T°: ' + Thermo.read());
//    if (Thermo.isAbove(30)) {
//        console.log("Hey, it's kinda hot in here !");
//    }
//}
//console.log('hello');
//ListenCtl.init();
//setInterval(ListenCtl.abc, 1000);
////setInterval(loop, 1000);

BlueMixCtl.stt();
BlueMixCtl.tts();