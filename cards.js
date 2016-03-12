// When the user enters in text into the text area and then clicks the create button, create a new card element in the DOM. You decide the height/width of the card.
// When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually removed from the DOM.
var name = "cardID";
var num = 0;
document.getElementById("create").addEventListener("click", function(){
	var cards = "<article id='" + name + num + "'>"
	cards += "<p>" + document.getElementById("userText").value + "</p>" 
	cards += "<button id = 'deleteInput" + num + "'> Delete </button> </article>" 

document.getElementById("cardHolder").innerHTML = cards + document.getElementById("cardHolder").innerHTML;
})

document.getElementById("cardHolder").addEventListener("click", function(e){
	var delCard = e.target.id;
	if (delCard.substring(0,6) === "delete") {
        deleteCard(delCard)
    };
    function deleteCard(idOfClick) {
    var somethingNew = name + idOfClick.substring(11,idOfClick.length);
    var parentOfDeleteButton = document.getElementById(somethingNew);
    document.getElementById("cardHolder").removeChild(parentOfDeleteButton);
}
})

