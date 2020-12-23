class Game{
    constructor() {

    }
    getState() {
        var getStateref=database.ref("gameState");
        getStateref.on("value",function (data) {gS=data.val();})
    }
    updateState(state) {
        database.ref("/").update({gameState:state});
    }
    start() {
        if (gS===0) {
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
            
        }
    }
}