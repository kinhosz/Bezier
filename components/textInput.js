function TextInput(innerText, handle) {
    var divInput = createDiv();

    var lbl = createDiv(innerText);
    divInput.child(lbl);
    lblStyle(lbl);

    var inpTxt = createInput(10);
    inpTxt.size(100);
    inpTxt.input(handle);
    divInputStyle(inpTxt);

    divInput.child(inpTxt);
    divInput.style('display', 'flex');
    divInput.style('flex-direction', 'column');

    return divInput;
}

function lblStyle(el) {
    el.style('text-align', 'center');
    el.style('margin', '5px');
    el.style('font-size', '18px');
    el.style('color', 'white');
    el.style('font-family', "'Trebuchet MS', sans-serif");
    el.style('text-shadow', '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black');
    el.style('margin', '5px');
}

function divInputStyle(div) {
    div.style('font-size', '18px');
    div.style('background-color', '#ff0095');
    div.style('color', 'white');
    div.style('border-radius', '15px');
    div.style('font-family', "'Trebuchet MS', sans-serif");
    div.style('text-shadow', '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black');
    div.style('box-shadow', '2px 2px #888888');
    div.style('display', 'flex');
    div.style('flex-direction', 'column');
    div.style('margin', '5px');
    div.style('text-align', 'center');

    return div;
}

