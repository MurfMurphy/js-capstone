
    let attemptNum = 7;


    const wordChoices = ['RACECAR', 'JAVASCRIPT', 'BATMAN', 'MASTODON', 
    'ILLEGAL', 'ZEUS', 'FREDDY', 'SYZYGY', 'NONEXISTANT']

    const wordHints = {
        RACECAR: 'Palindrome',
        JAVASCRIPT: 'Scary',
        BATMAN: 'Hates jokes',
        MASTODON: 'Heavy elephant',
        ILLEGAL: 'Sick Bird of Prey',
        ZEUS: 'A Shocking Dude',
        FREDDY: 'Worse than Jason',
        SYZYGY: 'Give up',
        NONEXISTANT: 'My will to live'
    }

    //Pick a word
    const chosenWord = wordChoices[Math.floor(Math.random()* wordChoices.length)];

    //Put attempts in index/as well as Hint for chosen word
    document.getElementById('attempts').innerHTML = `${attemptNum} attempts remaining.`
    document.getElementById('hint').innerHTML = `${wordHints[chosenWord]}`

    //Generate _'s for board and put them to HTML

    let answerArray = [];
    for (var i = 0; i < chosenWord.length; i++) {
        answerArray[i] = '_';
    }

    window.onload = function(){
        var letters = document.getElementById("letters").children;
        for (a of letters ) {
        a.addEventListener("click", function(select){ 
            select.target.disabled = 'true';
            gameLoop(this.innerText); 
        })
        }
    }
    
    document.getElementById('wordBoard').innerHTML = answerArray.join(' ')

    let lettersToGuess = chosenWord.length;

    function gameLoop(input){

        //Game
        if (lettersToGuess > 0 ){

            let letterMatch = false;
            //Loop through guess and iterate on success
                for (let i = 0; i <chosenWord.length; i++){
                    if (chosenWord[i]=== input) {
                        letterMatch = true;
                        answerArray[i] = input;
                        lettersToGuess--;
                    }
                    if (lettersToGuess === 0){
                        alert("That's a Bingo, great job!");

                    setTimeout(function() {
                        window.location.reload()
                    },3000)
                }      
            } if (!letterMatch) {
            attemptNum--;
            document.getElementById('attempts').innerHTML = `${attemptNum} attempts remaining.`; 
            }
            if (attemptNum == 0){
            alert("YOU LOSE, YOU GET NOTHING, GOOD DAY SIR");
            setTimeout(function() {
                window.location.reload()
            },3000) 
            } 

        }
        //Post board to index
        document.getElementById('wordBoard').innerHTML = answerArray.join('');
    }

