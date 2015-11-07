var crawlers = {
    size: 10,
    list: [],
    init: function(areaWidth, areaHeigh, amount) {
      for (var i = 0; i < amount; i++) {
        this.list[i] = {
          name: "c" + i,
          x: Math.floor(Math.random() * areaWidth),
          y: Math.floor(Math.random() * areaHeigh),
          health: 3,
          alive: true
        };
      }
    },
    draw: function(ctx) {
      for (var i = 0; i < this.list.length; i++) {
        if (this.list[i].alive)  {
          ctx.fillStyle = "rgba(255, 0, 0, " + (this.list[i].health * 0.1) + ")";
        } else {
          ctx.fillStyle = "rgb(0, 0, 0)";
        }
        ctx.fillRect(this.list[i].x * this.size, this.list[i].y * this.size, this.size, this.size);
        //console.log("x: " + (this.list[i].x* this.size) + " y: " + (this.list[i].y* this.size));
      }
    },
    action: function(mat) {
      var deadList = [];
      for (var i = 0; i < this.list.length; i++) {
        if (!this.list[i].alive) {
          continue;
        }
        //console.log("grass[" + this.list[i].x + "][" + this.list[i].y + "]:" + mat[this.list[i].x][this.list[i].y]);
        //console.log(this.list[i].name + ": " + this.list[i].health);
        if (mat[this.list[i].x][this.list[i].y] > 0) {
          //console.log("Eating grass...");
          mat[this.list[i].x][this.list[i].y] = mat[this.list[i].x][this.list[i].y] - 0.1;
          if (this.list[i].health < 10) {
            this.list[i].health = this.list[i].health + 0.1;
          }
        } else {
          this.list[i].health = this.list[i].health - 0.01;
          if (this.list[i].health < 2) {
            this.list[i].alive = false;
            console.log(this.list[i].name + " is dead!");
            //deadList.push(i);
          }
          var superior = {x: -1, y: -1, value: 0};
          for (var a = -1; a <= 1; a++) {
            for (var b = -1; b <= 1; b++) {
              var x = this.list[i].x + a;
              var y = this.list[i].y + b;
              //console.log("Looking for a better place... x: " + x + " y: " + y);
              if (x >= 0 && x < 50 && y >= 0 && y < 50) {
                if (mat[x][y] > superior.value) {
                  superior.value = mat[x][y];
                  superior.x = x;
                  superior.y = y;
                }
              }
            }
          }

          while(superior.x < 0 || superior.x > 49 || superior.y < 0 || superior.y > 49) {
            superior.x = this.list[i].x + ([-1,0,1][Math.random()*3|0]);
            superior.y = this.list[i].y + ([-1,0,1][Math.random()*3|0]);
          }
          this.list[i].x = superior.x;
          this.list[i].y = superior.y;
          //console.log("Moving to x: " + superior.x + " y: " + superior.y);
        }
      }

      if (deadList.length > 0) {
        for (var i = 0; i < deadList.length; i++) {
          this.list.splice(deadList[i], 1);
        }
      }
    }
};
