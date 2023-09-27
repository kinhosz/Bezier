function delPoint() {
    if(currentPointOnCurve != -1) {
        bezierCurves[currentCurve].splice(currentPointOnCurve, 1);
        currentPointOnCurve = -1;
    }

    isWaitAddPoint = false;
}