function lines() {
    if (!isPolygonsHiden) {

        for(let i=0; i<bezierCurves.length; i++) {
            for(let j=1; j<bezierCurves[i].length; j++) {
                if(i == currentCurve) {
                    stroke("yellow");
                }
                else{
                    stroke("blue");
                }

                strokeWeight(5);

                line(bezierCurves[i][j-1].x, bezierCurves[i][j-1].y, bezierCurves[i][j].x, bezierCurves[i][j].y);
            }
        }
    }
}