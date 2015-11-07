var grass = {
    height: 50,
    width: 50,
    mat: [],
    init: function(ctx) {
      noise.seed(Math.random());
      console.log("Init grass");
      for (var i = 0; i < this.width; i++) {
        for (var j = 0; j < this.height; j++) {
          if (!this.mat[i]) this.mat[i] = [];
          var grassSize = Math.abs(noise.perlin2(i / 20, j / 20));//Math.floor((Math.random() * 10) + 1);
          //console.log("mat[" + i + "][" + j + "]: " + grassSize);
          this.mat[i][j] = grassSize.toFixed(1);
        }
      }
    },
    draw: function(ctx) {
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fillRect(0, 0, 500, 500);
      for (var i = 0; i < this.width; i++) {
        for (var j = 0; j < this.height; j++) {
          ctx.fillStyle = "rgba(0, 100, 0, " + this.mat[i][j] + ")";
          var size = 10;
          var x = i * size;
          var y = j * size;
          //console.log("x: " + x + " y: " + y + " = " + this.mat[i][j]);
          ctx.fillRect(x, y, size, size);
        }
      }
    }
};
