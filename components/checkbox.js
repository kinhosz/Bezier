function Checkbox(label, handle) {
    var box = createCheckbox(label, false);
    box.changed(handle);

    return checkboxStyle(box);
}

function checkboxStyle(el) {
    el.style('font-size', '18px');
    el.style('color', 'white');
    el.style('font-family', "'Trebuchet MS', sans-serif");
    el.style('text-shadow', '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black');
    el.style('margin', '2px');

    return el;
}
