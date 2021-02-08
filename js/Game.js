class Game {
	constructor(){
  
	}
	loading(){
		
	 playButton = createSprite(450,210,50,50)
	 playButton.addImage(loadingPng)
	 drawSprites();
	 text("loading page",400,200)
		if (mousePressedOver(playButton)) {
        gameState="instruction";
        playButton.visible=false;
	}else{
		playButton.visible=false
	}
}
	instruction(){
		text("welcome to earn to live",400,200)
	//	playButton.visible=false;
		var playButton2=createSprite(400,300,100,100)
		}
	
	play(){

	}

}