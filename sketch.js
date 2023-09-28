function setup() {
    var body = Body();
    Navbar(body);
    Board(body);
}

function draw() {
    background(220);
    lines();
    points();
    curves();
}
