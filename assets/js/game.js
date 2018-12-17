let playerArr = [];
// function to hide login screen and show game. Needs to be in its own js file

$("#login").on('click', function(){
    const name = $("#name").val();
    
    if(name !== "" && name.length >= 2 && name.length <= 15){
        $(".navbar").hide();
        $(".container").hide();
        playerArr.push(name);
        console.log(playerArr);
        canvas.show();
    } else {
        alert("You can't be nameless.");
    }
})


// Create a new scene
let gameScene = new Phaser.Scene('Game');

// Configuration
let config = {
    type: Phaser.AUTO,
    width: 5760,
    height: 3240,
    scene: {
        gameScene,
        preload: preload,
        create: create
    }
}

gameScene.preload = function(){
    // image load
    this.load.image('ship1', 'assets/images/AlienShip_537x640.png')
    this.load.image('ship2', 'assets/images/blankrocket_366x640.png')
    this.load.image('ship3', 'assets/images/gradientrocket_640x580.png')
    this.load.image('ship4', 'assets/images/grayrocket_434x640.png')
    this.load.image('ship5', 'assets/images/redrocket_323x640.png')
    this.load.image('ship6', 'assets/images/UFO_640x320.png')
}

 gameScene.create = function(){

    this.ship1 = this.add.sprite(100, 100, 'ship1');
    this.ship1.setScale(0.05);

}

let game = new Phaser.Game(config);