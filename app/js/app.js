(function () {
  var socket = io.connect('http://localhost:8181');
  socket.on('news', function (data) {
      console.log(data);
      socket.emit('my other event', { my: 'data' });
  });
})();
(function () {
    var paper = Snap('#earth');
    var earth = paper.image(
        'assets/earth.jpg',
        0,
        0,
        paper.node.clientWidth,
        paper.node.clientHeight
    );

    var centerX = paper.node.clientWidth / 2 * 1.03;
    var centerY = paper.node.clientHeight / 2 * 0.95;

    var gap = 1;
    var STEPS_PER_ROTATION = (paper.node.clientHeight*0.3); // increasing this makes the curve smoother

    var increment = 2 * Math.PI / STEPS_PER_ROTATION;
    var theta = increment;

    var circles = [];
    while( theta < (paper.node.clientHeight*0.13) * Math.PI) {
       var newX = centerX + theta * Math.cos(theta) * gap;
       var newY = centerY + theta * Math.sin(theta) * gap;

       circles.push(paper.circle(newX, newY, 4, 4)
           .attr({
               fill: 'white',
               'fill-opacity': 0.2
           })
           .click(function () {
              this.attr({
                fill: '#' + Math.floor(Math.random() * 16777215).toString(16),
                'fill-opacity': 1
              });
           }));

       theta = theta + increment;
    }

    var t = 0;

    circles.forEach(function (circle) {
      setTimeout(function () {
          //console.log(circle.attr('cx'));
          circle.attr({
              fill: 'blue',
              'fill-opacity': 0.25
          });
      }, t);
      t += 2;
    });

})();
