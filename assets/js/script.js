let daytime = $(".daytime");



// this displays and updates the time for the user every second
let timeUpdate = setInterval(update, 1000);
function update() {
    daytime.text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
};

// on click function to store textarea input when save button clicked 
$(".btn").click(function() {
    // picks out textarea content specific to button clicked
    let input = $(this).parent().siblings(".input").text();
    // this will be used for creating the storage key specific to the appropriate textarea
    let key = $(this).parent().parent().attr("id");

    // saves textarea content with a key specific to that textarea
    localStorage.setItem(key, input);
});

// on click function to delete textarea from local storage and textarea when delete button clicked 
$(".delete").click(function() {
    let input = $(this).parent().siblings(".input").text("");
    let key = $(this).parent().parent().attr("id");
    localStorage.setItem(key, input);
})

// displays locally stored textarea input if any is available 
for (let i=9; i<18; i++) {
    if (localStorage.getItem(i) == "[object Object]") {
        $("#" + i + " .input").text("");
    } else {
        $("#" + i + " .input").text(localStorage.getItem(i));
    };
}; 

// TODO: create function that checks time and sets classes of divs appropriately 
//* setInterval to make sure this function runs every minute or so
function timeClass() {
    let currentHour = moment().hours();

    // console.log($(".time"));

    let time = $(".time"); 
    

    // TODO: foreach loops with parseInt() stuff 
    // TODO: change IDs to numbers rather than words (e.g., "11" instead of eleven)

    // TODO: it would be cool to add a delete button 
}

timeClass();