let daytime = $(".daytime");

// this displays and updates the time for the user every second
let timeUpdate = setInterval(update, 1000);
function update() {
    daytime.text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
};

// this runs timeClass every minutes to ensure the styling matches the current time
let styleUpdate = setInterval(timeStyle, 60000);

// on click function to store text input when save button clicked 
$(".btn").click(function() {
    // picks out span content specific to button clicked
    let input = $(this).parent().siblings(".input").text();
    // this will be used for creating the storage key specific to the appropriate span
    let key = $(this).parent().parent().attr("id");

    // saves span content with a key specific to that span
    localStorage.setItem(key, input);
});

// on click function to delete span content from local storage and the span itself when delete button clicked 
$(".delete").click(function() {
    let input = $(this).parent().siblings(".input").text("");
    let key = $(this).parent().parent().attr("id");
    localStorage.setItem(key, input);
})

// displays locally stored span content if any is available 
for (let i=9; i<18; i++) {
    if (localStorage.getItem(i) == "[object Object]") {
        $("#" + i + " .input").text("");
    } else {
        $("#" + i + " .input").text(localStorage.getItem(i));
    };
}; 

// compares current time to div id and adds the time-appropriate styling to those divs 
function timeStyle() {
    let currentHour = moment().hours();

    for (let i=9; i<18; i++) {
        let timeComp = $("#" + i);
        
        if (i < currentHour) {
            // should make this class past 
            timeComp.removeClass("future");
            timeComp.removeClass("present");
            timeComp.addClass("past");
        } else if (i == currentHour) {
            // should make this class current
            timeComp.removeClass("past");
            timeComp.removeClass("future")
            timeComp.addClass("present");
        } else {
            timeComp.removeClass("past");
            timeComp.removeClass("present");
            timeComp.addClass("future");
        };
    };
     
}
// this ensures that the time-appropriate styling is correct on page load 
timeStyle();