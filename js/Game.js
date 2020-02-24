/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */






class Game{
  constructor(missed,phrases,activePhrase){

    this.missed=0;
    this.phrases=["Do you want me", "I would walk","Here we are now", "Shake it off","Live as one"];
    this.activePhrase="";
    this.getRandomPhrase= function(){
          return this.phrases[Math.floor(Math.random() * 5)]
    };
    this.activePhrase=this.getRandomPhrase();}

    //start Game Code
    startGame(activePhrase){

          var  missed=0;
          const overLay=document.querySelector('#overlay');
          overLay.style.display="none";
          const dphrase = new Phrase(this.activePhrase);
          dphrase.addPhraseToDisplay();
          //Rest board back to normal for secondary runs
          this.hearts=[];
          this.hearts= document.querySelectorAll('img');
          this.i=0;
          for ( this.i=0; this.i< this.hearts.length;this.i++){
                 this.hearts[this.i].src="images/liveHeart.png";
               };
          this.parameter=phrase.activePhrase;
          for (this.i = 0; this.i < alphabet.length; this.i++) {
            alphabet[this.i].removeAttribute('disabled');
            alphabet[this.i].className -='chosen';
            alphabet[this.i].className -='lose';
            alphabet[this.i].className ='key';
          }


        }
    //Gaem Cod to handle interactions with keyboard
    handleInteraction(reason,activePhrase){
      console.log(1);
          this.missed= document.querySelectorAll('.lose').length;
          const dphrase = new Phrase(this.activePhrase);
          this.checkForWin=function(){
                  const marked= document.querySelectorAll('.letter');
                  const list_letters=document.querySelectorAll('.show');
                  if(list_letters.length === marked.length) {
                      this.gameOver('win');
                      console.log("win");
                              }
                  if (this.missed>=5){
                      this.gameOver('loss');
                  }
                            }

    //Function to bring back overlay and game over message
        this.gameOver=function(reason){
                                        const overLay=document.querySelector('#overlay');
                                        overLay.style.display="none";

                                        const overText=document.querySelector('h2');
                                        this.reason=reason;
                                        if (reason=="loss"){
                                        overText.innerHTML="You Lost";
                                        overLay.style.display='flex';
                                        overLay.style.backgroundColor = "black";}
                                        else {
                                          overLay.style.display='flex';
                                          overLay.style.backgroundColor = "green";
                                          overText.innerHTML="You Won";
                                        }

                                    }
              //Adds misses and removes hearts
          this.removeLife=function(reason){
                        this.alpha.className += " lose";
                          this.alpha.setAttribute("disabled", "");
                            const hearts= document.querySelectorAll('img');
                            this.missed+=1;
                            if (this.missed<5){
                            hearts[(this.missed-1)].src="images/lostHeart.png";

                          }}

                  this.result=dphrase.checkLetter(reason);
                  this.alpha = reason;

                  //disables and add colors to properly selected letters
                  if (this.result!=""){
                      this.alpha.className += " chosen";
                      this.alpha.setAttribute("disabled", "");

                  }
                  else {
                      this.removeLife();
                  }
                this.checkForWin();
                }
              }
