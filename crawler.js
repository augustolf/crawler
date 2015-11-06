function Crawler(name, x, y) {
  this.name = name;
  this.x = x;
  this.y = y;
  this.life = 5;
}

var crawlers = {
  list: [],
  init: function(areaWidth, areaHeight, amount) {
    console.log("crawlers init");
    for (var i = 0; i < amount; i++) {
      var x = Math.floor(Math.random() * areaWidth);
      var y = Math.floor(Math.random() * areaHeight);
      this.list[i] = new Crawler("C"+i, x, y); // {name: "C"+i, x: x, y: y, life: 5};
    }
  },
  draw: function(ctx) {
    console.log(this.list);
    var size = 10;
    for (var i = 0; i < this.list.length; i++) {
      //console.log("c[" + x + "][" + y + "]: ");

      var cwl = this.list[i];
      //console.log(cwl);

      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fillRect(cwl.x*size, cwl.y*size, size, size);
      ctx.fillStyle = "rgba(255, 0, 0, " + (cwl.life * 0.1) + ")";
      ctx.fillRect(cwl.x*size, cwl.y*size, size, size);
    }
  }
};
