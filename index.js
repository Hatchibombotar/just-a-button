var spamCount = 5
function spam() {
    if (spamCount) {
        console.log("This is just a button, go away.")
        spamCount -=1
        spam()
    }
}
spam()

var thing = 0
function up() {
    thing += 1
    document.getElementById("button_text").innerHTML = thing
}