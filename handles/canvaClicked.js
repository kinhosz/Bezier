function canvaClicked() {
    if(isWaitAddPoint) {
        addNewPointOnCurve(mouseX, mouseY);
    }
    else {
        identifyPoint(mouseX, mouseY);
    }
}
