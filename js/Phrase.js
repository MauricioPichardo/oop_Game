/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * activePhrase.js */

 // Total Missed Guesses




class Phrase{
    constructor(phrase,letter){
    this.letter="y";
    this.phrase= phrase.toLowerCase();
    this.quote="";
    this.letter=letter;
    this.showMatchedLetter=function(parm){
           for (this.i= 0; this.i < this.list.length; this.i++){
               if ( this.list[this.i].textContent.toLowerCase() === this.parm) {
                   this.list[this.i].className += " show";
                   this.match = this.list[this.i].textContent;

           }

}
       }


    }

//Adds Active Phrase to Dispaly on Game
    addPhraseToDisplay(phrase){
        for (this.i=0; this.i < this.phrase.length; this.i++) {
            if ( this.phrase[this.i]=== " ") {
                this.quote += "<li class='space'>" + this.phrase[this.i] +"</li>";}
            else {
                this.quote += "<li class='letter'>" + this.phrase[this.i] + "</li>";
                };
            };
      quote_holder.innerHTML= '<ul>'+this.quote+'</ul>';}

  //Checks to see if a particular letter is in the phrase
    checkLetter(letter) {
           this.match= "";

              this.parm= letter.textContent;
              this.list = document.querySelectorAll('.letter');
              this.showMatchedLetter(this.parm);
              return this.match
              }

          };
