const initialState = {
    locations: [
        [1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1],
        [1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1],
        [1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1],
        [1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1],
        [1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1],
        [1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1],
        [1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1],
        [1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1],
        [1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ]
};
function getVisibleMap(position, locations) {
    const radius = 1;

    let [pX, pY] = position.split('_');
    pX = parseInt(pX);
    pY = parseInt(pY);
    let pXStart = pX - radius;
    pXStart = pXStart > 0 ? pXStart : 0;
    let pXStop = pX + radius;
    pXStop = pXStop < locations[0].length - 1 ? pXStop : locations[0].length - 1;
    let pYStart = pY - radius;
    pYStart = pYStart > 0 ? pYStart : 0;
    let pYStop = pY + radius;
    pYStop = pYStop < locations.length - 1 ? pYStop : locations.length - 1;
    let map = [];
    for (let y = pYStart; y <= pYStop; y++) {
        let row = [];
        for (let x = pXStart; x <= pXStop; x++) {
            row.push({
                type: locations[y][x],
                position: `${x}_${y}`
            });
        }
        map.push(row);
    }

    return map;
}
export default Map = function (state = initialState, action) {
    switch (action.type) {
        case 'SET_STATE':
            return {
                locations: state.locations,
                position: '1_0',
                map: getVisibleMap('1_0', state.locations)
            };
        case 'MOVE_ON_MAP':
            let position = action.position;
            let map = state.map;
            let [pX, pY] = state.position.split('_');
            let [mX, mY] = position.split('_');
            pX = parseInt(pX);
            pY = parseInt(pY);
            mX = parseInt(mX);
            mY = parseInt(mY);
            if (Math.abs(mX - pX) + Math.abs(mY - pY) != 1){
                position = state.position;
            }else{
                map = getVisibleMap(position, state.locations);
            }
            return {
                locations: state.locations,
                position,
                map
            };
        default:
            return state;
    }
};