var path = '.';
var spawn = require('child_process').spawn;
var fs = require('fs');

//Execute the script for Speech to Text from the wav or opus file to the output.json (response from Bluemix) and output2.json (transcript)
function speechToText() {
    console.log('Speech To Text');
 var deploySh = spawn('sh', [ path + 'StT.sh' ]);
 deploySh.stdout.pipe(process.stdout);
 var content = fs.readFileSync("./output.json");
 var jsonContent = JSON.parse(content);
 var transcript = jsonContent.results[0].alternatives[0].transcript
 transcript = '{\"text\":\"'+transcript+'\"}';
 fs.writeFileSync("./output2.json",transcript);
 if (transcript.indexOf("temperature") > -1){
   console.log("temperature call");
 }
 else if(transcript.indexOf("weather")){
     console.log("weather call");
     var url = "api.openweathermap.org/data/2.5/forecast/city?id=2759794&APPID=afa11ba62965be743fda865d270f636a";
     
     //TODO parse the json of the url :simple_smile:
     request({
         url: url,
         json: true
     }, function (error, response, body) {
         //if (!error && response.statusCode === 200) {
             console.log(body) // Print the json response
             console.log(response) 
         //}
     });
 }
}

//Execute Text to Speech from the output2.json to the TtS.wav
function textToSpeech () {
    console.log('tts');
 var deploySh = spawn('sh', [ path + 'TtS.sh' ]);
 deploySh.stdout.pipe(process.stdout);
}

exports.stt = speechToText;
exports.tts = textToSpeech;