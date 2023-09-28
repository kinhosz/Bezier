function deCasteljau(pts, u) {
    const Q = [];

    for(let i=0; i<pts.length; i++) {
        Q.push({
            x: pts[i].x,
            y: pts[i].y
        });
    }

    for(let k=0; k<pts.length - 1; k++) {
        for(let i=1; i<pts.length - k; i++) {
            Q[i-1].x = Q[i-1].x * (1.0 - u) + Q[i].x * u;
            Q[i-1].y = Q[i-1].y * (1.0 - u) + Q[i].y * u;            
        }
    }

    return Q[0];
}
