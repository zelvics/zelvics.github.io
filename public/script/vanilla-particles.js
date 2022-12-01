document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("particles");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  /**
   * creating particle class
   */
  class Particle {
    constructor(x, y, dirX, dirY, size, color) {
      this.x = x;
      this.y = y;
      this.dirX = dirX;
      this.dirY = dirY;
      this.size = size;
      this.color = color;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
      ctx.fillStyle =
        document.documentElement.style.getPropertyValue("--toggle-color");
      ctx.fill();
    }

    update() {
      if (this.x > canvas.width || this.x < 0) {
        this.dirX = -this.dirX;
      }
      if (this.y > canvas.width || this.y < 0) {
        this.dirY = -this.dirY;
      }
      this.x += this.dirX;
      this.y += this.dirY;
      this.draw();
    }
  }

  function init() {
    particlesArray = [];
    let numberOfParticles = (canvas.height * canvas.width) / 12000;
    if (innerWidth >= 3840 && innerHeight >= 2160) {
      numberOfParticles = (canvas.height * canvas.width) / 29000;
    }
    for (let i = 0; i < numberOfParticles; i++) {
      let size = Math.random() * 5 + 1;
      let x = Math.random() * (innerWidth - size * 2 - size * 2) + size * 2;
      let y = Math.random() * (innerHeight - size * 2 - size * 2) + size * 2;
      let dirX = Math.random() * 2 - 1;
      let dirY = Math.random() * 2 - 1;
      let color =
        document.documentElement.style.getPropertyValue("--toggle-color");

      particlesArray.push(new Particle(x, y, dirX, dirY, size, color));
    }
  }
  function connect() {
    for (let a = 0; a < particlesArray.length; a++) {
      for (let b = a; b < particlesArray.length; b++) {
        let distance =
          (particlesArray[a].x - particlesArray[b].x) *
            (particlesArray[a].x - particlesArray[b].x) +
          (particlesArray[a].y - particlesArray[b].y) *
            (particlesArray[a].y - particlesArray[b].y);
        if (distance < (canvas.width / 9) * (canvas.height / 9)) {
          ctx.strokeStyle =
            document.documentElement.style.getPropertyValue("--toggle-color");
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
          ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
          ctx.stroke();
        }
      }
    }
  }
  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < particlesArray.length; i++) {
      particlesArray[i].update();
    }
    connect();
  }

  window.addEventListener("resize", function () {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    init();
  });
  init();
  animate();
});
