var PIXI = require('pixi.js');

var renderer = new PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.view);

var stage = new PIXI.Stage;

var mimeTexture = PIXI.Texture.fromImage('mr_mime.svg');

var mime = new PIXI.Sprite(mimeTexture);

// set control point to center of sprite
mime.anchor.x = 0.5;
mime.anchor.y = 0.5;

mime.position.x = window.innerWidth / 2;
mime.position.y = window.innerHeight / 2;

stage.addChild(mime);

var rendererResize = function () {
  var width = window.innerWidth,
      height = window.innerHeight;
  console.log("resizing to "+width+" "+height);
  renderer.resize(width, height);
  renderer.view.height = height;
  renderer.view.width = width;

  /**
   * iOS likes to scroll when rotating - fix that 
   */
  window.scrollTo(0, 0);
};
rendererResize();

window.addEventListener('resize', rendererResize);
window.addEventListener('deviceOrientation', rendererResize);

function draw() {
  renderer.render(stage);
  requestAnimationFrame(draw);
}

draw();