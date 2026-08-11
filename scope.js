var lang = "JavaScript";

function testScope() {
    var lang = "Python";
    console.log("Inside function: " + lang);
}

testScope();
console.log("Outside function: " + lang);

var lang1 = "JavaScript";

function testScope1(topic) {
    lang1 = topic;
    console.log("Inside function: " + lang1);
}

testScope1("Python");
console.log("Outside function: " + lang1);