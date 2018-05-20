var step1 = [];
var step2 = [];
var step3 = [];
var step4 = [];
var step5 = [];
var step6 = [];
var step7 = [];


var xhr = new XMLHttpRequest();

xhr.open('GET', './assets/javascripts/baby-steps.json', true);

xhr.onload = function() {
    if(xhr.status === 200) {
        response = JSON.parse(xhr.responseText);
        //use function
        var friends = response.friends;
        console.log(friends);
        console.log(friends.length);

        //sort friends into arrays for each step
        friends.forEach( function (person)
            {
                if (person.babyStep == 1){
                    step1.push(person);
                } else if (person.babyStep == 2){
                    step2.push(person);
                } else if (person.babyStep == 3){
                    step3.push(person);
                } else if (person.babyStep == 4){
                    step4.push(person);
                } else if (person.babyStep == 5){
                    step5.push(person);
                } else if (person.babyStep == 6){
                    step6.push(person);
                } else {
                    step7.push(person);
                };

            });

            function compare(a,b) {
                    a.lastName > b.lastName ? comparison = true:comparison = false;
                    return comparison;
                  }

            function insertMessage(stepNumber, message){
                  var stepContainer = document.getElementById('step-container');
                  var dataMessage = stepContainer.getElementsByTagName("span");
                  dataMessage[stepNumber-1].outerHTML = message;
                }


            var steps = [step1,step2,step3,step4,step5,step6,step7];

            var message = "";
            //build and insert json friend messages
            steps.forEach(function(step){
              //sort last names in ascending order
              step.sort(compare);

              if (step.length>=3){
                  //only show first 2 names, so others will be 2 less than the total friend length
                  var others = step.length - 2;
                  message = "<span><a class='links' href='#'>" + step[0].firstName + " " + step[0].lastName + ", " + step[1].firstName + " " + step[1].lastName;
                  message += "</a> and " + others + " other friends are also in Baby Step " + step[0].babyStep + "</span>";
              } else if (step.length == 2){
                  message = "<span><a class='links' href='#'>" + step[0].firstName + " " + step[0].lastName + ", " + step[1].firstName + " " + step[1].lastName;
                  message += "</a> are also in Baby Step " + step[0].babyStep + "</span>";

              } else if (step.length == 1){
                  var others = step.length - 2;
                  message = "<span><a class='links' href='#'>" + step[0].firstName + " " + step[0].lastName;
                  message += "</a> is also in Baby Step " + step[0].babyStep + "</span>";
              }else{
                  console.log("No message to be shown for this Baby Step");
                  message = "<span></span>";
              };

              //step 1 has undefined babystep value as it's empty so need to check
              if (step[0]){
                  insertMessage(step[0].babyStep, message);
              } else {
                  insertMessage(1 , message);
              }

            })

    }
};

xhr.send(null);
