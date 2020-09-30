let friendshipPoints = 0
let friendshipLevel = 0
let dayCount = ""
let photoChance = 0 // is this needed?

let images = document.getElementById("scenario-photo")
let text = document.getElementById("scenario-text")
let buttonBox = document.getElementById("button-space")

let statsDay = document.getElementById("day")
let statsFriendshipLvl = document.getElementById("friendship")
let restart = document.getElementById("restart")


// TO LOOP OVER AN OBJECT

// object for all scenarios
let scenario = {
  // introductory scenario to say hi (zero)
  zero: {
    image: "#.jpg",
    text: "Isabelle is making a morning accouncement! She says your island is welcoming its newest neighbor, Marshal! Please make every effort so that he feels right at home.",
    button: [["Go say hi!", "nextScenario(scenario.one)"]]
  },
  // scenario one
  one: {
    image: "#.jpg",
    text: "After introducing yourself, Marshal asks you what is your favoite thing to do on the island?",
    button: [["Fishing!", "happyResponse(happy.one)"],["Shopping at Able Sisters!", "happyResponse(happy.one)"],["Singing in the plaza with K.K. Slider!","happyResponse(happy.one)"], ["Figure out your hobby yourself!", "sadResponse(sad.one)"]]
  },
  // scenario two
  two: {
    image: "#",
    text: "You are at Nook's Cranny and see they are selling a brand new espresso machine! Didn't Marshal tell you earlier that he has been needing one? You're not sure now... what do you do?",
    button: [["Buy it for him!", "happyResponse(happy.two)"], ["Don't remember what he said...", "sadResponse(sad.two)"]]
  },
  // scenario three
  three: {
    image: "#",
    text: "Isabelle once told you her favorite way to welcome a new neighbor is by giving the island's native fruit. Hm, has Marshal tried the local oranges?",
    button: [["Give Marshal an orange basket", "happyResponse(happy.three)"],["He can go pick some himself", "sadResponse(sad.three)"]]
  },
  // scenario four
  four: {
    image: "#",
    text: "Marshal heard that it is currently salmon season at the island! He has been trying to catch one but has had no luck. He asks if you can go catch him one.",
    button: [["Let me get my fishing rod!", "happyResponse(happy.four)"],["Nah but you can have this sea bass lol", "sadResponse(sad.four)"]]
  },
  // scenario five
  five: {
    image: "#",
    text: "Marshal found a house plant while unpacking but there is just no space in his house for it! Will you keep it and take care of it?",
    button: [["There's a perfect spot at my place!", "happyResponse(happy.five)"],["Well I don't have space either", "sadResponse(sad.five)"]]
  },
  // scenario six
  six: {
    image: "#",
    text: "It's Saturday which means K.K. Slider is here! Did anyone make sure Marshal knows to go to the plaza at 6 PM for the show?",
    button: [["Invite him to go with you!", "happyResponse(happy.six)"],["He'll come on his own, right?", "sadResponse(sad.six)"]]
  },
  // scenario seven
  seven: {
    image: "#",
    text: "It has been a week since Marshal moved to the island. For making him feel welcome, he wants to give you a present. You accept it and say...",
    button: [["Anything for your new favorite friend!", "happyResponse(happy.seven)"],["As expected. It was mostly my effort after all.", "sadResponse(sad.seven)"]]
  },
  // scenario eight
  eight: {
    image: "#",
    text: "Marshal wants to get to know you better! What kind of music do you listen to?",
    button: [["Anything on the radio!", "happyResponse(happy.eight)"],["Classic hits", "happyResponse(happy.eight)"],["Whatever I can dance to!", "happyResponse(happy.eight)"],["Eh, you probably never heard of it","sadResponse(sad.eight)"]]
  },
  // scenario nine
  nine: {
    image: "#",
    text: "It's Marshal's birthday! You are thinking of something special to do...",
    button: [["Gather the other villagers and make a plan", "happyResponse(happy.nine)"],["Throw a party!", "happyResponse(happy.nine)"], ["Never mind, I have too much going on", "sadResponse(sad.nine)"]]
  },
  // scenario ten
  ten: {
    image: "#",
    text: "Oh no! Marshal had too much cake for his birthday and now he feels sick! What do you do?",
    button: [["Nothing! That's his fault!", "sadResponse(sad.ten)"],["Medicine delivery!", "happyResponse(happy.ten)"]]
  },
  // scenario eleven
  eleven: {
    image: "#",
    text: "While shopping at Able Sisters, you notice an outfit displayed at the front. It definitely looks like something Marshal would wear...",
    button: [["You're not sure so... don't buy it", "sadResponse(sad.eleven)"],["You're not sure but he might like it! Let's see!", "happyResponse(happy.eleven)"]]
  },
  // scenario twelve
  twelve: {
    image: "#",
    text: "While tidying up, Marshal wants to know if you have any ideas to make his house look nicer. What suggestions do you have?",
    button: [["Plant flowers outside", "happyResponse(happy.twelve)"],["Find a cool poster", "happyResponse(happy.twelve)"], ["New wallpaper?", "happyResponse(happy.twelve)"], ["No idea!", "sadResponse(sad.twelve)"]]
  },
  // scenario thirteen
  thirteen: {
    image: "#",
    text: "Marshal tells you that he has been thinking about what life would be like on another island or another city. What do you tell him?",
    button: [["You can move and find out?", "sadResponse(sad.thirteen)"],["If you go, we'll definitely miss you on the island!", "happyResponse(happy.thirteen)"]]
  },
  // scenario fourteen
  fourteen: {
    image: "#",
    text: "You check your mailbox and find a letter from Marshal, explaining how he is glad he made the choice to move to the island since he got to meet people like you. He hopes you both can keep in touch in person and as penpals.",
    button: [["Write back and tell him how much he means to you", "happyResponse(happy.fourteen)"],["Keep the letter but you forgot to write back...", "sadResponse(sad.fourteen)"]]
  },
  // scenario fifteen
  fifteen: {
    image: "#",
    text: "It has been two weeks since Marshal moved to your island. You find him standing at the pier watching the sunset. Seems like a good time to tell him what's on your mind...",
    button: [["I'm so happy you moved here. I hope we can stay friends forever!", "endScenario(ending.photoWin)"],["It's cool you moved here but...", "endScenario(ending.bye)"]]
  },
}

// remember to call the function to go to scenario zero

// object for all happy responses

let happy = {
  // happy response 1 -- button goes to scenario 2
  one: {
    image: "#.jpg",
    text: "Oh! What an interesting hobby! I should try it sometime. I hope we can do that together!",
    button: [["Continue", "nextScenario(scenario.two)"]]
  },
  // happy response 2 -- button goes to scenario 3
  two: {
    image: "#",
    text: "You are at Nook's Cranny and see they are selling a brand new espresso machine! Didn't Marshal tell you earlier that he has been needing one? You're not sure now... what do you do?",
    button: [["Continue", "nextScenario(scenario.three)"]]
  },
  // happy response 3 -- button goes to scenario 4
  three: {
    image: "#",
    text: "Isabelle once told you her favorite way to welcome a new neighbor is by giving the island's native fruit. Hm, has Marshal tried the local oranges?",
    button: [["Continue", "nextScenario(scenario.four)"]]
  },
  // happy response 4 -- button goes to scenario 5
  four: {
    image: "#",
    text: "Marshal heard that it is currently salmon season at the island! He has been trying to catch one but has had no luck. He asks if you can go catch him one.",
    button: [["Continue", "nextScenario(scenario.five)"]]
  },
  // happy response 5 -- button goes to scenario 6
  five: {
    image: "#",
    text: "Marshal found a house plant while unpacking but there is just no space in his house for it! Will you keep it and take care of it?",
    button: [["Continue", "nextScenario(scenario.six)"]]
  },
  // happy response 6 -- button goes to scenario 7
  six: {
    image: "#",
    text: "It's Saturday which means K.K. Slider is here! Did anyone make sure Marshal knows to go to the plaza at 6 PM for the show?",
    button: [["Continue", "nextScenario(scenario.seven)"]]
  },
  // happy response 7 -- button goes to scenario 8
  seven: {
    image: "#",
    text: "It has been a week since Marshal moved to the island. For making him feel welcome, he wants to give you a present. What do you say?",
    button: [["Continue", "nextScenario(scenario.eight)"]]
  },
  // happy response 8 -- button goes to scenario 9
  eight: {
    image: "#",
    text: "Marshal wants to get to know you better! What kind of music do you listen to?",
    button: [["Continue", "nextScenario(scenario.nine)"]]
  },
  // happy response 9 -- button goes to scenario 10
  nine: {
    image: "#",
    text: "It's Marshal's birthday! You are thinking of something special to do...",
    button: [["Continue", "nextScenario(scenario.ten)"]]
  },
  // happy response 10 -- button goes to scenario 11
  ten: {
    image: "#",
    text: "Oh no! Marshal had too much cake for his birthday and now he feels sick! What do you do?",
    button: [["Continue", "nextScenario(scenario.eleven)"]]
  },
  // happy response 11 -- button goes to scenario 12
  eleven: {
    image: "#",
    text: "While shopping at Able Sisters, you notice an outfit displayed at the front. It definitely looks like something Marshal would wear...",
    button: [["Continue", "nextScenario(scenario.twelve)"]]
  },
  // happy response 12 -- button goes to scenario 13
  twelve: {
    image: "#",
    text: "While tidying up, Marshal wants to know if you have any ideas to make his house look nicer. What suggestions do you have?",
    button: [["Continue", "nextScenario(scenario.thirteen)"]]
  },
  // happy response 13 -- button goes to scenario 14
  thirteen: {
    image: "#",
    text: "Marshal tells you that he has been thinking about what life would be like on another island or another city. What do you tell him?",
    button: [["Continue", "nextScenario(scenario.fourteen)"]]
  },
  // happy response 14 -- button goes to scenario 15
  fourteen: {
    image: "#",
    text: "You check your mailbox and find a letter from Marshal, explaining how he is glad he made the choice to move to the island since he got to meet people like you. He hopes you both can keep in touch in person and as penpals.",
    button: [["Continue", "nextScenario(scenario.fifteen)"]]
  },
}

// object for all sad responses

let sad = {
  // sad response 1 -- button goes to scenario 2
  one: {
    image: "#.jpg",
    text: "After introducing yourself, Marshal asks you what is your favoite thing to do on the island?",
    button: [["Continue", "nextScenario(scenario.two)"]]
  },
  // sad response 2 -- button goes to scenario 3
  two: {
    image: "#",
    text: "You are at Nook's Cranny and see they are selling a brand new espresso machine! Didn't Marshal tell you earlier that he has been needing one? You're not sure now... what do you do?",
    button: [["Continue", "nextScenario(scenario.three)"]]
  },
  // sad response 3 -- button goes to scenario 4
  three: {
    image: "#",
    text: "Isabelle once told you her favorite way to welcome a new neighbor is by giving the island's native fruit. Hm, has Marshal tried the local oranges?",
    button: [["Continue", "nextScenario(scenario.four)"]]
  },
  // sad response 4 -- button goes to scenario 5
  four: {
    image: "#",
    text: "Marshal heard that it is currently salmon season at the island! He has been trying to catch one but has had no luck. He asks if you can go catch him one.",
    button: [["Continue", "nextScenario(scenario.five)"]]
  },
  // sad response 5 -- button goes to scenario 6
  five: {
    image: "#",
    text: "Marshal found a house plant while unpacking but there is just no space in his house for it! Will you keep it and take care of it?",
    button: [["Continue", "nextScenario(scenario.six)"]]
  },
  // sad response 6 -- button goes to scenario 7
  six: {
    image: "#",
    text: "It's Saturday which means K.K. Slider is here! Did anyone make sure Marshal knows to go to the plaza at 6 PM for the show?",
    button: [["Continue", "nextScenario(scenario.seven)"]]
  },
  // sad response 7 -- button goes to scenario 8
  seven: {
    image: "#",
    text: "It has been a week since Marshal moved to the island. For making him feel welcome, he wants to give you a present. What do you say?",
    button: [["Continue", "nextScenario(scenario.eight)"]]
  },
  // sad response 8 -- button goes to scenario 9
  eight: {
    image: "#",
    text: "Marshal wants to get to know you better! What kind of music do you listen to?",
    button: [["Continue", "nextScenario(scenario.nine)"]]
  },
  // sad response 9 -- button goes to scenario 10
  nine: {
    image: "#",
    text: "It's Marshal's birthday! You are thinking of something special to do...",
    button: [["Continue", "nextScenario(scenario.ten)"]]
  },
  // sad response 10 -- button goes to scenario 11
  ten: {
    image: "#",
    text: "Oh no! Marshal had too much cake for his birthday and now he feels sick! What do you do?",
    button: [["Continue", "nextScenario(scenario.eleven)"]]
  },
  // sad response 11 -- button goes to scenario 12
  eleven: {
    image: "#",
    text: "While shopping at Able Sisters, you notice an outfit displayed at the front. It definitely looks like something Marshal would wear...",
    button: [["Continue", "nextScenario(scenario.twelve)"]]
  },
  // sad response 12 -- button goes to scenario 13
  twelve: {
    image: "#",
    text: "While tidying up, Marshal wants to know if you have any ideas to make his house look nicer. What suggestions do you have?",
    button: [["Continue", "nextScenario(scenario.thirteen)"]]
  },
  // sad response 13 -- button goes to scenario 14
  thirteen: {
    image: "#",
    text: "Marshal tells you that he has been thinking about what life would be like on another island or another city. What do you tell him?",
    button: [["Continue", "nextScenario(scenario.fourteen)"]]
  },
  // sad response 14 -- button goes to scenario 15
  fourteen: {
    image: "#",
    text: "You check your mailbox and find a letter from Marshal, explaining how he is glad he made the choice to move to the island since he got to meet people like you. He hopes you both can keep in touch in person and as penpals.",
    button: [["Continue", "nextScenario(scenario.fifteen)"]]
  },
}

// object for end scenarios

let ending = {
  photoEarly: {
    image: "#",
    text: "It seems Marshal has taken a liking to you already! He decided to come by your house with a present. When you open it, it is a framed photo of himself. He tells you he hopes you both can be best friends forever!"
  },
  photoWin: {
    image: "#",
    text: "Marshal has loved his island life even though it's not been long since he moved. He tells you this is largely because you made him feel so welcome. He truly values the friendship you two have built. He gives you a framed photo of himself, hoping it means you both can be best friends forever!"
  },
  bye: {
    image: "#",
    text: "Marshal likes his life on the island. He is friends with the other villagers, though he cannot help but think you do not want him there especially since you are the island's resident representative. He thinks it over and eventually moves to another island. Look what you have done, you meanie!"
  }
}

// GAME LOGIC 

// percent chance of something happening
let d = Math.random()

if (d < 0.5) {
  // 50% chance of something happening here
} else if (d < 0.7) {
  // 20% chance of something happening here
} else {
  // 30% chance of something happening here
}

// chance by friendship points or level

if (friendship >= 200) {
  if (d < 0.9) {
    photoWin()
  }
}

// FUNCTIONS

let changeText = function(words) {
  text.innerHTML = words
}

let changeImage = function(img) {
  images.style.backgroundImage = "url(" + img + ")"
}

// this does not necessarily have to have the same number of buttons. it is put in an array within the object.
let changeButtons = function(buttonList) {
  buttonBox.innerHTML = "" 
  for (let i = 0; i < buttonList.length; i++) {
    buttonBox.innerHTML += "<button onClick="+buttonList[i][1]+">" + buttonList[i][0] + "</button>"
  }
}

let startGame = function() {
  nextScenario(scenario.zero)
  dayCount++
  statsDay.innerHTML = "day: " + dayCount
  statsFriendshipLvl.innerHTML = "friendship level: " + friendshipLevel
  restart.innerHTML = "restart"
}

// function to advance to the next scenario -- might need to alter this for happy/sad

let nextScenario = function(scenario) {
  changeImage(scenario.image)
  changeText(scenario.text)
  changeButtons(scenario.button)
}
  
  // this function is pulling from the scenario object, which within each "scenario" has more objects such as the image, text, button, etc.
  // so changeImage(s.image) is basically a function that changes the background image style for whatever is in the scenario's object

  // need two more functions for going to the happy or sad response based on which button is clicked in the scenario

      // happy response
      let happyResponse = function(scenario) {
        friendshipPoints =+ 25
        changeImage(scenario.image)
        changeText(scenario.text)
        changeButtons(scenario.button)
      };

      // sad response
      let sadResponse = function(scenario) {
        friendshipPoints =- 10
        changeImage(scenario.image)
        changeText(scenario.text)
        changeButtons(scenario.button)
      };

      // win by obtaining photo by chance
      let earlyPhoto = function(ending) {
        changeImage(ending.photoEarly.image)
        changeText(ending.photoEarly.text)
        changeButtons(ending.button)
      }

      let endScenario = function(ending) {
        changeImage(ending.image)
        changeText(ending.text)
        changeButtons(ending.button)
      }

      // let winPhoto = function(ending) {
      //   changeImage(ending.photoWin.image)
      //   changeText(ending.photoWin.text)
      // }

      // let byeMarshal = function(ending) {
      //   changeImage(ending.bye.image)
      //   changeText(ending.bye.text)
      // }