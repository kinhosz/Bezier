function points() {
    if (!isPointsHiden) {

        for(let i=0; i<bezierCurves.length; i++) {
            for(let j=0; j<bezierCurves[i].length; j++) {
                if(i == currentCurve && j == currentPointOnCurve) {
                    stroke("red");
                }
                else{
                    stroke("black");
                }

                strokeWeight(10);
                point(bezierCurves[i][j].x, bezierCurves[i][j].y);
            }
        }
    }
}
