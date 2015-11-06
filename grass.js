var grass = {
    mat: [],
    init: function(ctx) {
      noise.seed(Math.random());
      console.log("Init grass");
      for (var i = 0; i < 50; i++) {
        for (var j = 0; j < 50; j++) {
          if (!this.mat[i]) this.mat[i] = [];
          var grassSize = Math.abs(noise.perlin2(i / 20, j / 20));//Math.floor((Math.random() * 10) + 1);
          //console.log("mat[" + i + "][" + j + "]: " + grassSize);
          this.mat[i][j] = grassSize.toFixed(1);
        }
      }
    },
    draw: function(ctx) {

      //ctx.fillStyle = "rgb(255, 255, 255)";
      //ctx.fillRect(0, 0, 500, 500);
      for (var i = 0; i < 50; i++) {
        for (var j = 0; j < 50; j++) {
          ctx.fillStyle = "rgba(0, 100, 0, "+(this.mat[i][j] * 1)+")";
          var size = 10;
          var x = i * size;
          var y = j * size;
          //console.log("x: " + x + " y: " + y + " = " + (this.mat[i][j] * 1));
          ctx.fillRect(x, y, size, size);
        }
      }
    }
};
