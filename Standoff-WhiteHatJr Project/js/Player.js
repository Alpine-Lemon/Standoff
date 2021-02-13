class Player {
  constructor(){
   player(x,y,50,20);
    
    
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(name){
    var playerIndex = "player" + playerCount;
    database.ref(playerIndex).set({
      name:name 
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
  

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    
    

    player1a = createSprite(100,200);
    player1a.addImage("Player1",player1apng);
    player2a = createSprite(300,200);
    player2a.addImage("Player2",player2apng);
    player3a = createSprite(500,200);
    player3a.addImage("Player3",player3apng);
    player4a = createSprite(700,200);
    player4a.addImage("Player4",player4apng);
    player5a = createSprite(700,200);
    player5a.addImage("Player5",player5apng);
    playera = [player1a, player2a, player3a, player4a, player5a];

    player1b = createSprite(100,200);
    player1b.addImage("Player6",player1bpng);
    player2b = createSprite(300,200);
    player2b.addImage("Player7",player2bpng);
    player3b = createSprite(500,200);
    player3b.addImage("Player8",player3bpng);
    player4a = createSprite(700,200);
    player4b.addImage("Player9",player4bpng);
    player5b = createSprite(700,200);
    player5b.addImage("Player10",player5bpng);
    playerb = [player1b, player2b, player3b, player4b, player5b];
  }
  
}

