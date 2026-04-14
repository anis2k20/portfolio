<template>
  <canvas
    ref="canvas"
    class="pointer-events-none fixed top-0 left-0 z-50"
  ></canvas>
</template>

<script setup>
import { onMounted, ref } from "vue";

const canvas = ref(null);

onMounted(() => {
  if (!canvas.value) return;

  const context = canvas.value.getContext("2d");
  let width = (canvas.value.width = window.innerWidth);
  let height = (canvas.value.height = window.innerHeight);
  const particles = [];
  let mouseX = 0;
  let mouseY = 0;
  const total = 20;
  const followSpeed = 0.2;
  const size = 20;

  let rAF;

  const requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;

  const cancelAnimationFrame =
    window.cancelAnimationFrame || window.mozCancelAnimationFrame;

  document.body.addEventListener("mousemove", function (event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
  });

  window.addEventListener("resize", function () {
    width = canvas.value.width = window.innerWidth;
    height = canvas.value.height = window.innerHeight;
  });

  class Particle {
    constructor(index) {
      this.initialize(index);
    }

    initialize(index) {
      this.x = -50;
      this.y = height;
      this.id = index + 1;
      this.angleX = Math.PI * 2 * Math.random();
      this.angleY = Math.PI * 2 * Math.random();
      this.speedX = 0.03 * Math.random() + 0.03;
      this.speedY = 0.03 * Math.random() + 0.03;
      this.radius = 150;
    }

    update() {
      let aim, dx, dy, scale, angle;

      if (this.id > 1) {
        aim = particles[this.id - 1 - 1];
        dx = aim.x - this.x;
        dy = aim.y - this.y;

        this.x += dx * followSpeed;
        this.y += dy * followSpeed;
      } else {
        if (mouseX === 0 && mouseY === 0) {
          dx = width / 2 + Math.cos(this.angleX) * this.radius - this.x;
          dy = height / 2 + Math.sin(this.angleY) * this.radius - this.y;

          this.x = width / 2 + Math.cos(this.angleX) * this.radius;
          this.y = height / 2 + Math.sin(this.angleY) * this.radius;

          this.angleX += this.speedX;
          this.angleY += this.speedY;
        } else {
          dx = mouseX - this.x;
          dy = mouseY - this.y;

          this.x += dx * followSpeed;
          this.y += dy * followSpeed;
        }
      }

      angle = Math.atan2(dy, dx);
      scale = Math.cos((Math.PI / 2) * (this.id / total));

      context.save();
      context.translate(this.x, this.y);
      context.rotate(angle);
      context.scale(scale, scale);

      //   context.beginPath()
      //   context.moveTo(-size / 2 * 1.732, -size / 2)
      //   context.lineTo(0, 0)
      //   context.lineTo(-size / 2 * 1.732, size / 2)
      //   context.lineTo(-size / 2 * 1.2, 0)
      //   context.fillStyle = '#2857fc'
      //   context.fill()
      context.beginPath();
      context.arc(0, 0, size / 4, 0, Math.PI * 2);
      context.fillStyle = "#2857fc";
      context.fill();

      context.restore();
    }
  }

  function init() {
    cancelAnimationFrame(rAF);

    particles.length = 0;

    for (let i = 0; i < total; i += 1) {
      particles.push(new Particle(i));
    }

    draw();
  }

  function draw() {
    context.clearRect(0, 0, width, height);

    for (let i = 0; i < total; i += 1) {
      particles[i].update();
    }

    rAF = requestAnimationFrame(draw);
  }

  init();
});
</script>
