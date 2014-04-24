var canvas = document.getElementById("renderCanvas")
var engine = new BABYLON.Engine(canvas, true)
var scene = new BABYLON.Scene(engine)
scene.clearColor = new BABYLON.Color4(0,0,0,0.0000000000000001)
var camera = new BABYLON.FreeCamera("Camera", new BABYLON.Vector3(0, 0, -10), scene)

var particleSystem = new BABYLON.ParticleSystem("particles", 4000, scene);
particleSystem.particleTexture = new BABYLON.Texture("flare.png", scene);
particleSystem.minAngularSpeed = -0.5;
particleSystem.maxAngularSpeed = 0.5;
particleSystem.minSize = 0.1;
particleSystem.maxSize = 0.2;
particleSystem.minLifeTime = 0.5;
particleSystem.maxLifeTime = 2.0;
particleSystem.minEmitPower = 1;
particleSystem.maxEmitPower = 2;
particleSystem.emitter = new BABYLON.Vector3(0, 0, 0);
particleSystem.emitRate = 1000;
particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
particleSystem.minEmitBox = new BABYLON.Vector3(0, 0, 0)
particleSystem.maxEmitBox = new BABYLON.Vector3(0, 0, 0)
particleSystem.direction1 = new BABYLON.Vector3(-1, -1, -1);
particleSystem.direction2 = new BABYLON.Vector3(1, 1, 1);
particleSystem.color1 = new BABYLON.Color4(1, 0, 0, 1);
particleSystem.color2 = new BABYLON.Color4(0, 1, 1, 1);
particleSystem.gravity = new BABYLON.Vector3(0, -10, 0);
particleSystem.disposeOnStop = true;
particleSystem.targetStopDuration = 0;
particleSystem.start();

scene.beforeRender = function() {
  var position = new BABYLON.Vector3(Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5)

  particleSystem.minEmitBox = position
  particleSystem.maxEmitBox = position
}

var renderLoop = function () {
  scene.render()
}
engine.runRenderLoop(renderLoop)

window.addEventListener("resize", function () {
  engine.resize()
})