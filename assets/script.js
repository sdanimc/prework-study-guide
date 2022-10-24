var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics () {
    for (var x = 0; x < topics.length; x++) {
    console.log(topics[x]);
    }
}

function selectTopic() {
    if (randomTopic === 'HTML'){
    console.log("let's study html!");
} else if (randomTopic === 'CSS') {
    console.log("let's study CSS!");
} else if (randomTopic === 'Git') {
    console.log("let's study Git!");
} else if (randomTopic === 'JavaScript') {
    console.log("let's study JavaScript!");
} else {
    console.log("Please try again")
}
}
console.log('Here are topics we learned through Prework');
listTopics()
console.log('which topic should we chose?');
selectTopic()