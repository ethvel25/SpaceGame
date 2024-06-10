// Initialize variables
var bg1 = { x: 0, y: 0, w: 320, h: 450, s: 2, img: "bg1" };
var bg2 = { x: -320, y: 0, w: 320, h: 450, s: 2, img: "bg2" };
var a1 = { x: randomNumber(10, 290), y: -50, w: 50, h: 50, s: randomNumber(2, 10), img: "a1" };
var a2 = { x: randomNumber(10, 290), y: -70, w: 70, h: 100, s: randomNumber(2, 10), img: "a2" };
var a3 = { x: randomNumber(10, 290), y: -50, w: 50, h: 50, s: randomNumber(2, 10), img: "a3" };
var rocket = { x: 140, y: 300, w: 40, h: 150, s: 2, img: "rocket" };
var score = 0;
var maxScore = 100;

drawBackground();
timedLoop(100, scrollBg);
makeAsteroid();
makeRocket();
timedLoop(100, moveAsteroid);

function drawBackground() {
  image("bg1", "assets/6062b.png");
  image("bg2", "assets/6062a.png");

  setProperty("bg1", "fit", "cover");
  setProperty("bg2", "fit", "cover");
}
function startOver(obj) {
  // Reset the position of the object when it reaches the bottom
  obj.y = randomNumber(-50, -20);
  obj.x = randomNumber(10, 290);
  setPosition(obj.img, obj.x, obj.y, obj.w, obj.h);
}
function scrollBg() {
  bg1.x += bg1.s;
  bg2.x += bg2.s;
  setPosition("bg1", bg1.x, bg1.y, bg1.w, bg1.h);
  setPosition("bg2", bg2.x, bg2.y, bg2.w, bg2.h);
  if (bg1.x > 320) {
    bg1.x = -319;
  }
  if (bg2.x > 320) {
    bg2.x = -319;
  }
}

function makeAsteroid() {
  image("a1", "assets/rock.png");
  image("a2", "assets/meteor.png");
  image("a3", "assets/meteor2.png");

  setPosition("a1", a1.x, a1.y, a1.w, a1.h);
  setPosition("a2", a2.x, a2.y, a2.w, a2.h);
  setPosition("a3", a3.x, a3.y, a3.w, a3.h);
}

function makeRocket() {
  image("rocket", "assets/rocket.gif");
  setPosition("rocket", rocket.x, rocket.y, rocket.w, rocket.h);
  setText("score", "Score: 0"); // Initialize the score element
}

function moveAsteroid() {
  a1.y = a1.y + a1.s;
  a2.y = a2.y + a2.s;
  a3.y = a3.y + a3.s;
  if (a1.y > 450) {
    a1.y = -50;
    a1.x = randomNumber(10, 290);
    a1.s = randomNumber(2, 10);
  }
  if (a2.y > 450) {
    a2.y = -70;
    a2.x = randomNumber(10, 290);
    a2.s = randomNumber(2, 10);
  }
  if (a3.y > 450) {
    a3.y = -50;
    a3.x = randomNumber(10, 290);
    a3.s = randomNumber(2, 10);
  }
  setPosition("a1", a1.x, a1.y, a1.w, a1.h);
  setPosition("a2", a2.x, a2.y, a2.w, a2.h);
  setPosition("a3", a3.x, a3.y, a3.w, a3.h);

  checkCollision(a1, rocket);
  checkCollision(a2, rocket);
  checkCollision(a3, rocket);
}

function checkCollision(obj1, obj2) {
  var x0v = Math.max(0, Math.min(obj1.x + obj1.w, obj2.x + obj2.w) - Math.max(obj1.x, obj2.x));
  var y0v = Math.max(0, Math.min(obj1.y + obj1.h, obj2.y + obj2.h) - Math.max(obj1.y, obj2.y));
  if (x0v > 0 && y0v > 0) {
    startOver(obj1);
    score = score + 2;
    setText("score", "Score: " + score);
    if (score > maxScore) {
      stopTimedLoop();
    }
  }
}
function updateScreen() {
  setText("scoreLabel", "Score: " + score); //
}


function startOver(obj) {
  obj.y = randomNumber(-50, -20);
  obj.x = randomNumber(10, 300);
  setPosition(obj.img, obj.x, obj.y, obj.w, obj.h);
} 

onEvent("screen1", "keydown", function (event) {
  if (event.key == "Left") {
    rocket.x -= rocket.s;
  }
  if (event.key == "Right") {
    rocket.x += rocket.s;
  }
  if (event.key == "Up") {
    rocket.y -= rocket.s;
  }
  if (event.key == "Down") {
    rocket.y += rocket.s;
  }
  setPosition("rocket", rocket.x, rocket.y, rocket.w, rocket.h);
});
