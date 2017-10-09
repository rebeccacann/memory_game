// Desktop version
/* Unit 9: function that will store all steps related to selecting, or flipping over, a card. 
When the user flips a card over, you'll want to add that card to the array of cards that are in play. If the user has flipped over two cards, you'll want to check for a match.
Second, you'll create a function to group together the logic to check to see if the two cards that the user has flipped over match each other. 
provide feedback to the user letting them know if the two cards match, or if they should try again.

Unit 10: create object for each card that will store that card's name, the suit, 
and a path to where the image for that card is stored in our project. 
Then update any code from the last assignment that was accessing values from the cards array so that we are accessing values from that specific card object*/
console.log("Up and running!");

var cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"
    } 
];
var cardsInPlay = [];

var checkForMatch = function() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
    } else {
        alert("Sorry, try again");
    }
}

var flipCard = function(cardId) {
    console.log("User flipped " + cards[cardId].rank);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
    cardsInPlay.push(cards[cardId].rank);
    if (cardsInPlay.length === 2) {
        checkForMatch();
    }
 }

 flipCard(0)
 flipCard(2)



 
