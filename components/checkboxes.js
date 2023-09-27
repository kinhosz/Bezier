function Checkboxes() {
    var div = createDiv();

    div.child(Checkbox("Hide points", hidePoints));
    div.child(Checkbox("Hide polygons", hidePolygons));
    div.child(Checkbox("Hide curves", hideCurves));

    div.style('display', 'flex');
    div.style('flex-direction', 'column');

    return div;
}