function Board(parent) {
    var board = createDiv();
    board.child(createCanvas(1200, 600));
    parent.child(board);

    board.style('margin-left', 'auto');
    board.style('margin-right', 'auto');
    board.style('margin-top', '20px');

    return board;
}