let daytime = $(".daytime");


// TODO I'd like to put this into a loop so that it updates the time every second

let timeUpdate = setInterval(update, 1000);

function update() {
    daytime.text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
}

// TODO 

