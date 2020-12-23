class Player{
    constructor() {

    }
    getCount() {
        var playerRef=database.ref("playerCount");
        playerRef.on("value", function (data) { pC=data.val();});
    }
    updateCount(count) {
        database.ref("/").update({playerCount:count});
    }
    update(playerName) {
        var playerIndex="player"+pC;
        database.ref(playerIndex).update({name:playerName});
    }
}