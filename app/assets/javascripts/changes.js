var steplist = document.getElementById("babysteps");

var steps = steplist.getElementsByTagName("div");

// add event listeners to all babysteps
for (var i = 0; i < steps.length; i++) {
    highlightStep(steps,i);
}

function highlightStep(steps,i){
    steps[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.className += "active";
        //Retrieve babystep number from a class, for example babystep-4, the 9th index would be 4
        show(this, this.id[9]);
    });
}



function show(e,i){
    var contentlist = document.getElementById("step-container");
    var content = contentlist.getElementsByClassName("step");

    var currentDisplay = document.getElementById("currentstep");
    currentDisplay.id="";
    content[i-1].id = "currentstep";
}
