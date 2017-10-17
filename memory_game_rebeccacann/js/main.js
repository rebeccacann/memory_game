// GitHub version #2
/* Unit 9: function that will store all steps related to selecting, or flipping over, a card. 
When the user flips a card over, you'll want to add that card to the array of cards that are in play. If the user has flipped over two cards, you'll want to check for a match.
Second, you'll create a function to group together the logic to check to see if the two cards that the user has flipped over match each other. 
provide feedback to the user letting them know if the two cards match, or if they should try again.

Unit 10: create object for each card that will store that card's name, the suit, 
and a path to where the image for that card is stored in our project. 
Then update any code from the last assignment that was accessing values from the cards array so that we are accessing values from that specific card object

Unit 11: we'll be adding cards to the board with JavaScript instead of placing them in our HTML file.
This will make our game more scalable and would also allow us to eventually add functionality that would randomize the cards before they get added to the page, so that they would appear in a different order each time.
It will also allow us to practice creating elements and appending them to the DOM.*/

console.log("Up and running!");

var cards = [
    {rank: "queen",  // each of the 4 objects, within {}, in this array for each card
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"},
    {rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"},
    {rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"},
    {rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"} 
];
var cardsInPlay = [];

var checkForMatch = function() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
    } else {
        alert("Sorry, try again");
    }
}

var flipCard = function() {
    var cardId = this.getAttribute('data-id');
    console.log("User flipped " + cards[cardId].rank);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
    cardsInPlay.push(cards[cardId].rank); // unit 10: pushes the name of the card, king or queen, to the cardsInPlay array.
    if (cardsInPlay.length === 2) {
        checkForMatch();
    }
 }

 var createBoard = function() {
     for (var i = 0; i < cards.length; i ++) { // loops through cards array
        var cardElement = document.createElement("img");

     }
 }

 flipCard(0)
 flipCard(2)



 
