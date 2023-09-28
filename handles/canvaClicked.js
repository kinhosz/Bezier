function canvaClicked() {
    if(isWaitAddPoint) {
        addNewPointOnCurve(mouseX, mouseY);
    }
    else if(isMovePoint) {
        updatePoint(mouseX, mouseY);
    }
    else {
        identifyPoint(mouseX, mouseY);
    }
}
