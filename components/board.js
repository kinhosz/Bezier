function Board(parent) {
    var board = createDiv();

    var canva = createCanvas(1200, 600);
    canva.mousePressed(canvaClicked);

    board.child(canva);
    parent.child(board);

    board.style('margin-left', 'auto');
    board.style('margin-right', 'auto');
    board.style('margin-top', '20px');

    return board;
}