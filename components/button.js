function Button(text, handle) {
    let btn = createButton(text);
    btn.size(100, 60);
    btn.mousePressed(handle);

    return buttonStyle(btn);
}

function buttonStyle(btn) {
    btn.style('font-size', '18px');
    btn.style('background-color', '#ff0095');
    btn.style('color', 'white');
    btn.style('border-radius', '15px');
    btn.style('font-family', "'Trebuchet MS', sans-serif");
    btn.style('text-shadow', '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black');
    btn.style('box-shadow', '2px 2px #888888');
    btn.style('margin', '5px');

    return btn;
}
