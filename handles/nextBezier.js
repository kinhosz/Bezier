function nextBezier() {
    currentPointOnCurve = -1;
    if(bezierCurves.length != 0) {
        currentCurve++;
        currentCurve %= bezierCurves.length;
    }
    isWaitAddPoint = false;
    isMovePoint = false;
}
