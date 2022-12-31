<style scoped>
.canvasBox {
  width: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
}
#canvas {
  height: 100%;
}
</style>

<template>
  <div
    class="canvasBox"
    :style="`
      height: ${canvasBoxHeight};
      width: ${canvasBoxWidth};`">
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
  export default {
    props: ['boxHeight', 'boxWidth'],
    data() {
      return {
        width: window.innerWidth,
        height: 490,
        seedAmount: 0,
        seeds: [],
        particles: [],
        auto: true,
      }
    },
    computed: {
      canvas() {
        return document.getElementById('canvas');
      },
      ctx() {
        if (this.canvas !== undefined) {
          return this.canvas.getContext('2d');
        }

        return null;
      },
      canvasBoxHeight() {
        return this.boxHeight || '100%';
      },
      canvasBoxWidth() {
        return this.boxWidth || '100%';
      },
    },
    methods: {
      clearCanvas() {
        if (this.ctx !== undefined) {
          this.ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
          this.ctx.fillRect(0, 0, this.width, this.height);
        }
      },
      circle(x, y, radius) {
        if (this.ctx !== undefined) {
          this.ctx.beginPath();
          this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
          this.ctx.closePath();
        }
      },
      loop() {
        if (this.ctx !== undefined) {
          this.clearCanvas();
          this.ctx.globalCompositeOperation = 'lighter';

          for (let i = 0; i < this.seeds.length; i += 1) {
            if (!this.seeds[i].dead) {
              this.seeds[i].move();
              this.seeds[i].draw();
            } else {
              this.seeds.splice(i, 1);
            }
          }

          for (let i = 0; i < this.particles.length; i += 1) {
            if (!this.particles[i].dead) {
              this.particles[i].move();
              this.particles[i].draw();
            } else {
              this.particles.splice(i, 1);
            }
          }

          if (this.auto && (this.seedAmount % 40) === 0) {
            const seed =
              this.Seed(
                this.randomInt(20, this.width - 20),
                this.height - 20,
                this.randomInt(175, 185),
                [this.randomInt(0, 359), '100%', '50%'],
              );
            this.seeds.push(seed);
          }

          this.ctx.globalCompositeOperation = 'destination-out';
          requestAnimationFrame(this.loop);
          this.seedAmount += 1;
        }
      },
      Seed(x, y, angle, color) {
        const self = this;
        const acceleration = 0.05;
        const radius = 3;
        const h = color[0];
        const s = color[1];
        const l = color[2];
        const finalColor = `hsla(${h}, ${s}, ${l}, 1)`;

        const dead = false;
        const fireSeed = {};
        let speed = 2;

        fireSeed.x = x;
        fireSeed.y = y;
        fireSeed.move = () => {
          if (fireSeed.y > self.randomInt(100, 200)) {
            speed += acceleration;
            fireSeed.x += speed * Math.sin((Math.PI / 180) * angle);
            fireSeed.y += speed * Math.cos((Math.PI / 180) * angle);
          } else if (!dead) {
            fireSeed.explode();
            fireSeed.dead = true;
          }
        };
        fireSeed.draw = () => {
          self.ctx.fillStyle = finalColor;
          self.circle(fireSeed.x, fireSeed.y, radius);
          self.ctx.fill();
        };
        fireSeed.explode = () => {
          for (let i = 0; i < 359; i += 4) {
            const particle =
              self.Firework(fireSeed.x, fireSeed.y, i + (self.randomInt(-200, 200) / 100), [h, s, l]);
            self.particles.push(particle);
          }
        };
        fireSeed.dead = dead;
        return fireSeed;
      },
      Firework(x, y, angle, color) {
        const self = this;
        const fireSeed = {};
        const angleOffset = self.randomInt(-20, 20) / 100;
        const radius = 1;
        const acceleration = -0.01;
        const gravity = 0.01;

        let opacity = 1;
        let finalColor = `hsla(${color[0]}, ${color[1]}, ${color[2]}, ${opacity})`;
        let verticalSpeed = 0;
        let speed = self.randomInt(195, 205) / 100;
        let targetAngle = angle;
        let positionX = x;
        let positionY = y;
        fireSeed.dead = false;
        fireSeed.move = () => {
          if (opacity > 0) {
            if (speed > 0) {
              speed += acceleration;
            }

            targetAngle += angleOffset;
            opacity -= 0.005;
            finalColor = `hsla(${color[0]}, ${color[1]}, ${color[2]}, ${opacity})`;
            verticalSpeed += gravity;
            positionX += speed * Math.sin((Math.PI / 180) * targetAngle);
            positionY += (speed * Math.cos((Math.PI / 180) * targetAngle)) + verticalSpeed;
          } else if (!fireSeed.dead) {
            fireSeed.dead = true;
          }
        };
        fireSeed.draw = () => {
          self.ctx.fillStyle = finalColor;
          self.circle(positionX, positionY, radius);
          self.ctx.fill();
        };

        return fireSeed;
      },
      randomInt(min, max) {
        return Math.floor((Math.random() * ((max - min) + 1)) + min);
      },
      init() {
        this.canvas.width = this.width;
        this.canvas.height = this.height;
      },
    },
    mounted() {
      const self = this;
      self.init();
      self.loop();
      window.addEventListener('click', (event) => {
        const seed = self.Seed(event.pageX, event.pageY, self.randomInt(175, 185), [self.randomInt(0, 359), '100%', '50%']);
        self.seeds.push(seed);
      });
      window.addEventListener('resize', () => {
        self.width = window.innerWidth;
        self.height = window.innerHeight;
        self.canvas.width = self.width;
        self.clearCanvas();
      });
    },
  };
</script>