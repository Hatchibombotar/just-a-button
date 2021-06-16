// Welcome to the button, I would not suggest looking through this. It's not good code.
console.log("%cThis is just a button, go away.", "color: red; font-size: 30px")
var thing = 0
if (parseInt(localStorage.getItem("clicks")) != NaN) {
thing = parseInt(localStorage.getItem("clicks"))
}
document.getElementById("button_text").innerHTML = thing

the_button = document.getElementById("the_button_obviously")

function up() {
    playSound("./assets/click.mp3")
    thing += 1
    document.getElementById("button_text").innerHTML = thing
    localStorage.setItem("clicks", thing)
    if (5 == 1) {
    } else if (thing == 9999) {
        subtitle("cheater.")
    } else if (thing == 1005) {
        subtitle("")
    } else if (thing == 1000) {
        subtitle("1000? Thats some dedication")
    } else if (thing == 500) {
        subtitle("500? huh")
    } else if (thing == 300) {
        subtitle("JUST BECAUSE I SAID YOU COULD DOESNT MEAN YOU SHOULD")
    } else if (thing == 260) {
        subtitle("You can now click to your hearts content.")
    } else if (thing == 253) {
        subtitle("Created by Hatchibombotar.")
    } else if (thing == 250) {
        subtitle("This is just a button.")
    } else if (thing == 245) {
        subtitle("Thanks for playing")
    } else if (thing == 240) {
        subtitle("ran out of things to say...")
        document.getElementById("subtitle").style.fontSize = ""
    } else if (thing == 238) {
        subtitle("Again??!???!???")
        document.getElementById("subtitle").style.fontSize = "50px"
    } else if (thing == 238) {
        subtitle("Again??!??!?")
        document.getElementById("subtitle").style.fontSize = "40px"
    } else if (thing == 237) {
        subtitle("Again?!??!?")
        document.getElementById("subtitle").style.fontSize = "30px"
    } else if (thing == 236) {
        subtitle("Again?!?!?")
        document.getElementById("subtitle").style.fontSize = "24px"
    } else if (thing == 235) {
        subtitle("Again?!?!")
        document.getElementById("subtitle").style.fontSize = "20px"
    } else if (thing == 234) {
        subtitle("Again!??")
        document.getElementById("subtitle").style.fontSize = "18px"
    } else if (thing == 233) {
        subtitle("Again!?")
        document.getElementById("subtitle").style.fontSize = "16px"
    } else if (thing == 232) {
        subtitle("Again!")
        document.getElementById("subtitle").style.fontSize = "14px"
    } else if (thing == 231) {
        subtitle("Again")
        document.getElementById("subtitle").style.fontSize = "12px"
    } else if (thing == 230) {
        subtitle("Again")
        document.getElementById("subtitle").style.fontSize = "10px"
    } else if (thing == 225) {
        subtitle("What have I done to deserve this?")
    } else if (thing == 218) {
        subtitle("People to see?")
    } else if (thing == 215) {
        subtitle("Places to go?")
    } else if (thing == 211) {
        subtitle("Have a life?")
    } else if (thing == 210) {
        subtitle("Do you not...")
    } else if (thing == 206) {
        subtitle("And Again.")
    } else if (thing == 205) {
        subtitle("And Again")
    } else if (thing == 204) {
        subtitle("Again")
    } else if (thing == 203) {
        subtitle("You continue")
    } else if (thing == 202) {
        subtitle("And yet...")
    } else if (thing == 201) {
        subtitle("200 times of pain and suffering")
    } else if (thing == 200) {
        subtitle("200 times.")
    } else if (thing == 192) {
        subtitle("still here?")
        the_button.classList.remove("rick")
    } else if (thing == 190) {
        subtitle("Never gonna give you up")
        the_button.classList.add("rick")
        playSound("./assets/rick.mp3")
    } else if (thing == 180) {
        subtitle("Wait...")
    } else if (thing == 175) {
        subtitle("Im just going to give up.")
    } else if (thing == 170) {
        subtitle("please")
        the_button.classList.remove("rainbow")
    } else if (thing == 162) {
        the_button.classList.add("rainbow")
    } else if (thing == 160) {
        subtitle("If I go rainbow?")
    } else if (thing == 145) {
        subtitle("No?")
        the_button.style.width = "200px"
        the_button.style.height = "200px"
    } else if (thing == 140) {
        subtitle("Squash")
        the_button.style.width = "200px"
        the_button.style.height = "100px"
    } else if (thing == 135) {
        subtitle("Squish")
        the_button.style.width = "100px"
    } else if (thing == 130) {
        subtitle("What if I change shape?")
    } else if (thing == 117) {
        subtitle("please just go.")
    } else if (thing == 116) {
        subtitle("1...")
    } else if (thing == 115) {
        subtitle("1")
    } else if (thing == 114) {
        subtitle("2")
    } else if (thing == 113) {
        subtitle("3")
    } else if (thing == 112) {
        subtitle("4")
    } else if (thing == 111) {
        subtitle("5")
    } else if (thing == 100) {
        subtitle("I'm going to give you 5 seconds to leave.")
    } else if (thing == 90) {
        subtitle("Why?")
    } else if (thing == 70) {
        subtitle("Stop.")
    } else if (thing == 50) {
        subtitle("There's nothing here, just go, do something more worth your time")
    } else if (thing == 30) {
        subtitle("Seriously, what are you still doing here?")
    } else if (thing == 10) {
        subtitle("Just a button. You can stop clicking now.")
    } else {
    }
}
function reset() {
    thing = 0
    up()
}
function playSound(url) {
    var audio = new Audio(url);
    audio.play();
}

function subtitle(message) {
    document.getElementById("subtitle").innerHTML = message
    playSound("./assets/subtitle.mp3")
}