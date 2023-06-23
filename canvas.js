// window.onload= function(){
    const canvas = document.querySelector("#canvas");
const canvastype = canvas.getContext("2d");
//console.log(ctx);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener("resize", (e) => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

class Element {
  constructor() {
    this.x = Math.random() * canvas.width + 1;
    this.y = 0;
    this.size = Math.random() * 15 +1;
    this.alpha = 0.8;
    this.color =
      "hsla(" + Math.random() * 360 + 1 + ",100%, 50%," + this.alpha + ")";

    this.vx = Math.random() * 5 - 1;
    this.vy = 5;
    this.gravity = 0.2;
    this.damping = 1;
    this.traction = 0.2;
  }
  update() {
    if (this.x + this.size >= canvas.width) {
      this.vx = -this.vx * this.damping;
      this.x = canvas.width - this.size;
    } else if (this.x - this.size <= 0) {
      this.vx = -this.vx * this.damping;
      this.x = this.size;
    }
    if (this.y + this.size >= canvas.height) {
      this.vy = -this.vy * this.damping;
      this.y = canvas.height - this.size;
      // traction here
      this.vx *= this.traction;
    } else if (this.y - this.size <= 0) {
      this.vy = -this.vy * this.damping;
      this.y = this.size;
    }

    this.vy += this.gravity; 

    this.x += this.vx;
    this.y += this.vy;
    if (this.size > 5) {
      this.size -= 0.002;
    } else {
      this.exit = true;
    }
  }
  drow() {
    canvastype.beginPath();
    canvastype.fillStyle = this.color;
    canvastype.arc(this.x, this.y, this.size, 0, 5 * Math.PI);
    canvastype.fill();
  }
}

const elements = [];
let fream = 0;

function handleCircle() {
  // console.log(elements.length);
  for (let i = 0; i < elements.length; i++) {
    elements[i].update();
    elements[i].drow();
  }

  for (let i = 0; i < elements.length; i++) {
    if (elements[i].exit) {
      elements.splice(i, 3);
      continue;
    }
  }
  if (fream % 30 == 0) {
    elements.push(new Element());
  }
  // console.log(elm);
}
function animation() {
  canvastype.clearRect(0, 0, canvas.width, canvas.height);
  fream++;
  handleCircle();
  window.requestAnimationFrame(animation);
}
animation();

// }