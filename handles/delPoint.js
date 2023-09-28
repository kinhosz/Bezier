function delPoint() {
    if(currentPointOnCurve != -1 && !isPointsHiden) {
        bezierCurves[currentCurve].splice(currentPointOnCurve, 1);
        currentPointOnCurve = -1;
    }

    isWaitAddPoint = false;
}