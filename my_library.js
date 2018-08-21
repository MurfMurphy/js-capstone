$(document).ready(function(){ 

    var wins = 0
    var losses = 0
    //starting val for wins/losses (save to cookie if time?)

    var attempts = 10
    var gameover = false
    //gameover state and attempts start

    if (attempts == 0){
        gameover == true
        //when attempts run out set gameover state on
    }
    if (gameover == true){
        alert('YOU LOSE, YOU GET NOTHING, GOOD DAY SIR')
        var losses = losses + 1;
        $('#losses').html(losses.val());
        var gameover = false;
        var attempts = 10;
        //reset the game and declare the persons loss
    }


function GameStart(){
    this.words = [];
    this.playerInput = ""
    this.chosenWord;
    this.answerArray=[];

    this.addWords = function(word_instance){
        this.words.push(word_instance);
    }
    //to put the words/hints into array

    this.chooseWord = function(){
        this.chosenWord = this.words[Math.floor(this.words.length * Math.random())]
        console.log(this.chosenWord.word, this.chosenWord.hint)
    //choose a word/hint combo, store them in chosenWord.word/hint
    }
    $('#letterGuess').on('change', function(e){
        this.playerInput = e.target.value;
        console.log(playerInput)
    });
    //store the player input into the var
    for(var i = 0; i<this.chosenWord.length; i++){
        answerArray[i] = "_";
    }
    blankAnswer = answerArray.join("");
    $("#wordBoard").append(blankAnswer);
    //should produce a line of _'s the word length

    


}


function Word(word, hint){
    this.word = word;
    this.hint = hint;
    //word class
}


var word1 = new Word('RACECAR', 'Palindrome');
    word2 = new Word('JAVASCRIPT', 'Scary');
    word3 = new Word('BATMAN', 'Hates jokes');
    word4 = new Word('MASTODON', 'Heavy elephant');
    word5 = new Word('ILLEGAL', 'Sick Bird of Prey');
    word6 = new Word('ZEUS', 'A Shocking Dude');
    word7 = new Word('FREDDY', 'Worse than Jason');
    word8 = new Word('SYZYGY', 'Give up');
    word9 = new Word('NONEXISTANT', 'My will to live');

var game = new GameStart();


game.addWords(word1);
game.addWords(word2);
game.addWords(word3);
game.addWords(word4);
game.addWords(word5);
game.addWords(word6);
game.addWords(word7);
game.addWords(word8);
game.addWords(word9);
game.chooseWord();


GameStart();


})