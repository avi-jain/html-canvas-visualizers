var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
// define audio context
// Webkit/blink browsers need prefix, Safari won't work without window.
var audio = document.getElementById('mySong');
audio.crossOrigin = "Anonymous";
audio.controls = true;

var analyser = audioCtx.createAnalyser();

source = audioCtx.createMediaElementSource(audio);
source.connect(analyser);
source.connect(audioCtx.destination);

// analyser.fftSize = 2048;
analyser.fftSize = 4096;
var bufferLength = analyser.frequencyBinCount;
console.log(bufferLength);
var dataArray = new Uint8Array(bufferLength);

var canvas = document.getElementById('visualizer1');
var canvasCtx = canvas.getContext("2d");
WIDTH = canvas.width; // Same for all
HEIGHT = canvas.height;
// canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

function draw() {
      drawVisual = requestAnimationFrame(draw);

      analyser.getByteFrequencyData(dataArray);// fill the Uint8Array with data returned from getByteTimeDomainData()
      canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
      // canvasCtx.fillStyle = 'rgb(0, 0, 0)';
      // canvasCtx.fillRect(0, 0, WIDTH, HEIGHT); removed black bg,made it transparent
      // canvasCtx.globalAlpha=0.2; changes transpareny of bars, not canvas itself
      var barWidth = (WIDTH / bufferLength);
      var barHeight;
      var x = 0;
      for(var i = 0; i < bufferLength; i++) {
        barHeight = (dataArray[i]/2)*2;
        

        // canvasCtx.fillStyle = 'rgb(' + (barHeight+100) + ',50,50)';
        canvasCtx.fillStyle = 'rgba(248,248,255,' + 1.0 + ')';
        //Consider shifting to lines and using lineCap for rounded edges.
        canvasCtx.fillRect(x,HEIGHT/2-barHeight/2,barWidth,barHeight); 
        //modified mdn example for mirrored effect
        // canvasCtx.fillRect(x,-barHeight/2,barWidth,barHeight); //repetitive

        // x += barWidth +1;
        x += 1;
      }
    };

draw();

// //Second 
// var canvas2 = document.getElementById('visualizer2');
// var canvas2Ctx = canvas2.getContext("2d");


// function draw() {
//       drawVisual = requestAnimationFrame(draw);

//       analyser.getByteFrequencyData(dataArray);// fill the Uint8Array with data returned from getByteTimeDomainData()
//       canvas2Ctx.clearRect(0, 0, WIDTH, HEIGHT);
//       var barWidth = (WIDTH / bufferLength);
//       var barHeight;
//       var x = 0;
//       for(var i = 0; i < bufferLength; i++) {
//         barHeight = (dataArray[i]/2)*2;

//         canvas2Ctx.fillStyle = 'rgba(248,248,255,' + 1.0 + ')';
//         canvas2Ctx.fillRect(x,HEIGHT/2-barHeight/2,barWidth,barHeight); //modified mdn example for mirrored effect

//         x += 1;
//       }
//     };

// draw();

// //Third
// var canvas3 = document.getElementById('visualizer3');
// var canvas3Ctx = canvas3.getContext("2d");


// function draw() {
//       drawVisual = requestAnimationFrame(draw);

//       analyser.getByteFrequencyData(dataArray);// fill the Uint8Array with data returned from getByteTimeDomainData()
//       canvas3Ctx.clearRect(0, 0, WIDTH, HEIGHT);
//       var barHeight;
//       var x = 0;
//       for(var i = 0; i < bufferLength; i++) {
//         barHeight = (dataArray[i]/2)*2;

//         canvas3Ctx.fillStyle = 'rgba(248,248,255,' + 1.0 + ')';
//         canvas3Ctx.fillRect(x,HEIGHT/2-barHeight/2,barWidth,barHeight); //modified mdn example for mirrored effect

//         x += 1;
//       }
//     };

// draw();

// //Fourth
// var canvas4 = document.getElementById('visualizer4');
// var canvas4Ctx = canvas4.getContext("2d");


// function draw() {
//       drawVisual = requestAnimationFrame(draw);

//       analyser.getByteFrequencyData(dataArray);// fill the Uint8Array with data returned from getByteTimeDomainData()
//       canvas4Ctx.clearRect(0, 0, WIDTH, HEIGHT);
//       var barWidth = (WIDTH / bufferLength);
//       var barHeight;
//       var x = 0;
//       for(var i = 0; i < bufferLength; i++) {
//         barHeight = (dataArray[i]/2)*2;

//         canvas4Ctx.fillStyle = 'rgba(248,248,255,' + 1.0 + ')';

//         canvas4Ctx.fillRect(x,HEIGHT/2-barHeight/2,barWidth,barHeight); 
//         x += 1;
//       }
//     };

// draw();