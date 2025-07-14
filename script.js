window.addEventListener("load", () => {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;


  class Particle{
    constructor(){

    }draw(){

    }update(){

    }
  }

  class Effect{
    constructor(context, canvasWidth, canvasHeight){
        this.context = context;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.textX = canvasWidth / 2;
        this.textY = canvasHeight / 2;
    }wrapText(text){
        this.context.fillText(text, this.textX, this.textY);
    }
    convertTextToParticles(text){

    }
    render(){

    }
  }

  const effect = new Effect(ctx, canvas.width, canvas.height);

//   ctx.lineWidth = 3;
//   ctx.strokeStyle = "red";
//   ctx.beginPath();
//   ctx.moveTo(canvas.width / 2, 0);
//   ctx.lineTo(canvas.width / 2, canvas.height);
//   ctx.stroke();

//   const textX = canvas.width / 2;
//   const textY = canvas.height / 2;

//   const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
//   gradient.addColorStop(0.3, "orangered");
//     gradient.addColorStop(0.5, "yellow");
//   gradient.addColorStop(0.7, "orangered");
//   ctx.fillStyle = gradient;
//   ctx.strokeStyle = "orangered";
//   ctx.font = "180px Arial";
//   ctx.textAlign = "center";

//   const maxTextWidth = canvas.width* 0.5;
//   const lineHeight = 80;

//   function wrapText(text) {
//     let linesArray = [];
//     let lineCounter = 0;
//     let line = "";
//     let words = text.split(" ");
//     for (let i = 0; i < words.length; i++) {
//       let textLine = line + words[i] + " ";
//       if(ctx.measureText(textLine).width > maxTextWidth) {
//         line = words[i] + " ";
//         lineCounter++;
//       }else{
//         line = textLine;
//       }
//       linesArray[lineCounter] = line;
//     //   ctx.fillText(textLine, textX, textY + i * 70);
//     }
//     let textHeight = lineHeight * lineCounter;
//     let textY = (canvas.height - textHeight) / 2;
//     linesArray.forEach((el, index) => {
//         ctx.fillText(el, canvas.width / 2, textY + (index * lineHeight));
//     })
//   }
//   wrapText("HELLO");
});
