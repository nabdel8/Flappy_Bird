//initialize phaser engine. create a 400x490px game!//

var game = new Phaser.Game(400,490, Phaser.AUTO, 'gameDiv')

//Create our 'main' state that will contain the game//
//this is the body itself//
//it should conatain all code related to the game itself//

var mainState = {

  preload: function() {
    //this function will execute at the beginning 
    //which is where we'll load our assets for the game
    
    //set the background color of the game
    game.stage.backgroundColor = "#71c5cf";
},

  create: function () {
  //this function is called right after preload function
  //this is where we set up the game assets from earlier
},
update: function (){
  //this function runs 60 times per second
  
},
};

//add and start the 'mainState' to start the game
game.state.add('main', mainState);
game.state.start('main');
