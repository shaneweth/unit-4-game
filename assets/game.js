
$(document).ready(function() {


var tarMin = 19;
var tarMax = 120;
var targetNumber = Math.floor(Math.random() * (tarMax - tarMin + 1) + tarMin); // change this to Random number

var pointStore = 0; // variable to store points

var winTrack = 0;
var lossTrack = 0;


$(".targetNumber").text(targetNumber);

// What are the constants of the game. 
// 4 Trees
// 
var treeArr = [
    "images/ApTree.jpg",
    // "images/Botanical-Fruit-Plums-Italian-2-780x964.jpg",
    // "images/cherry-blossom-botanical-illustration.jpg",
    // "images/Dovyalis_caffra_botanical_illustration.jpg",
];

for (var i = 0; i < 4; i++) {
    var tree = $("<img>"); 

    tree.attr("src", treeArr[i]);

    tree.attr("data-points", Math.floor(Math.random() * 12) + 1); 

    tree.addClass("tree");

    $(".quarter-circle-1").append(tree);

}
for (var i = 0; i < 4; i++) {
    var tree = $("<img>"); 

    tree.attr("src", treeArr[i]);

    tree.attr("data-points", Math.floor(Math.random() * 12) + 1); 

    tree.addClass("tree");

    $(".quarter-circle-2").append(tree);

}
for (var i = 0; i < 4; i++) {
    var tree = $("<img>"); 

    tree.attr("src", treeArr[i]);

    tree.attr("data-points", Math.floor(Math.random() * 12) + 1); 

    tree.addClass("tree");

    $(".quarter-circle-3").append(tree);

}
for (var i = 0; i < 4; i++) {
    var tree = $("<img>"); 

    tree.attr("src", treeArr[i]);

    tree.attr("data-points", Math.floor(Math.random() * 12) + 1); 

    tree.addClass("tree");

    $(".quarter-circle-4").append(tree);

}

$(".tree").on("click", function () {
    var planetValue = ($(this).attr("data-points"));

    pointStore += parseInt(treeVal);

    $("#points-store").text("This is the  " + pointStore + " pointStore.")



    // change alert to print to page and add new win to ("#win-tracker")
    if (pointStore === targetNumber) {
        // alert("winner");
        winTrack++;
        $("#win-tracker").text("You've won " + winTrack + " Baskets...")
        pointStore = 0;
    }
    else if (pointStore > targetNumber) {
        // alert("loser");
        lossTrack++;
        $("#loss-tracker").text("You've lost " + lossTrack + " Baskets...")
        pointStore = 0;
    }

});

})
