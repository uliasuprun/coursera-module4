var allNames = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

var helloSpeaker = 'Hello ';
var byeSpeaker = 'Good Bye ';

allNames.forEach(function nameSep(entry) {
        if (entry[0].toUpperCase() === 'J') {
        console.log(byeSpeaker + entry);
    } else {
        console.log(helloSpeaker + entry);
    }
});






