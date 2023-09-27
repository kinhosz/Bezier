function Navbar(parent) {
    var navbar = createDiv();
    
    navbar.child(Button("New", newBezier));
    navbar.child(Button("Delete", deleteBezier));
    navbar.child(Button("Next", nextBezier));
    navbar.child(Button("Add Point", addPoint));
    navbar.child(Button("del Point", delPoint));
    navbar.child(TextInput("Availables:", availableInput));

    navbar.style('display', 'flex');
    navbar.style('flex-direction', 'row');
    navbar.style('margin-left', 'auto');
    navbar.style('margin-right', 'auto');

    navbar.child(Checkboxes());

    parent.child(navbar);

    return navbar;
}
