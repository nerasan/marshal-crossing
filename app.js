let friendshipPoints = 0
let friendshipLevel = 0
let dayCount = 0

let images = document.getElementById("scenario-photo")
let text = document.getElementById("scenario-text")
let buttonBox = document.getElementById("button-space")

let statsDay = document.getElementById("day")
let statsFriendshipPoints = document.getElementById("friendship-points")
let statsFriendshipLvl = document.getElementById("friendship-level")
let restart = document.getElementById("restart")

// TO LOOP OVER AN OBJECT

// object for all scenarios
let scenario = {
  // introductory scenario to say hi (zero)
  zero: {
    image: "/pics/scenario-zero.png", // png
    text: "Isabelle is making a morning announcement! She says your island is welcoming its newest neighbor, Marshal! Please make every effort so that he feels right at home.",
    button: [["Go say hi!", "nextScenario(scenario.one)"]]
  },
  // scenario one
  one: {
    image: "/pics/scenario-one.jpg",
    text: "After introducing yourself, Marshal asks you what is your favorite thing to do on the island?",
    button: [["Fishing!", "happyResponse(happy.one)"],["Shopping at Able Sisters!", "happyResponse(happy.one)"],["Singing in the plaza with K.K. Slider!","happyResponse(happy.one)"], ["Figure out your hobby yourself!", "sadResponse(sad.one)"]]
  },
  // scenario two
  two: {
    image: "/pics/scenario-two.jpg",
    text: "You are at Nook's Cranny and see they are selling a brand new espresso machine! Didn't Marshal tell you earlier that he has been needing one? You're not sure now... what do you do?",
    button: [["Buy it for him!", "happyResponse(happy.two)"], ["Don't remember what he said...", "sadResponse(sad.two)"]]
  },
  // scenario three
  three: {
    image: "/pics/scenario-three.jpg",
    text: "Isabelle once told you her favorite way to welcome a new neighbor is by giving the island's native fruit. Hm, has Marshal tried the local oranges?",
    button: [["Give Marshal an orange basket", "happyResponse(happy.three)"],["He can go pick some himself", "sadResponse(sad.three)"]]
  },
  // scenario four
  four: {
    image: "/pics/scenario-four.png", // png
    text: "Marshal heard that it is currently goldfish season at the island! He has been trying to catch one but has had no luck. He asks if you can go catch him one.",
    button: [["Let me get my fishing rod!", "happyResponse(happy.four)"],["Nah but you can have this sea bass lol", "sadResponse(sad.four)"]]
  },
  // scenario five
  five: {
    image: "/pics/scenario-five.jpg",
    text: "Marshal found a house plant while unpacking but there is just no space in his house for it! Will you keep it and take care of it?",
    button: [["There's a perfect spot at my place!", "happyResponse(happy.five)"],["Well I don't have space either", "sadResponse(sad.five)"]]
  },
  // scenario six
  six: {
    image: "/pics/scenario-six.jpg",
    text: "It's Saturday which means K.K. Slider is here! Did anyone make sure Marshal knows to go to the plaza at 6 PM for the concert?",
    button: [["Invite him to go with you!", "happyResponse(happy.six)"],["He'll come on his own, right?", "sadResponse(sad.six)"]]
  },
  // scenario seven
  seven: { 
    image: "/pics/scenario-seven.png", // png
    text: "It has been a week since Marshal moved to the island. For making him feel welcome, he wants to give you a present. You accept it and say...",
    button: [["Anything for my new favorite friend!", "happyResponse(happy.seven)"],["As expected. It was mostly my effort after all.", "sadResponse(sad.seven)"]]
  },
  // scenario eight
  eight: {
    image: "/pics/scenario-eight.png", // png
    text: "Marshal wants to get to know you better! What kind of music do you listen to?",
    button: [["Anything by K.K. Slider", "happyResponse(happy.eight)"],["Classic hits", "happyResponse(happy.eight)"],["Whatever I can dance to!", "happyResponse(happy.eight)"],["Eh, you probably never heard of it","sadResponse(sad.eight)"]]
  },
  // scenario nine
  nine: {
    image: "/pics/scenario-nine.png", // png
    text: "It's Marshal's birthday! You are thinking of something special to do...",
    button: [["Gather the other villagers and make a plan", "happyResponse(happy.nine)"],["Throw a party!", "happyResponse(happy.nine)"], ["Never mind, I have too much going on", "sadResponse(sad.nine)"]]
  },
  // scenario ten
  ten: {
    image: "/pics/scenario-ten.png", // png
    text: "Oh no! Marshal had too much cake for his birthday and now he feels sick! What do you do?",
    button: [["Nothing! That's his fault!", "sadResponse(sad.ten)"],["Medicine delivery!", "happyResponse(happy.ten)"]]
  },
  // scenario eleven
  eleven: {
    image: "/pics/scenario-eleven.png", // png
    text: "While shopping at Able Sisters, you notice a flashy fedora displayed at the front. It definitely looks like something Marshal would wear... did he say once that he loves fun hats?",
    button: [["You're not sure so... don't buy it", "sadResponse(sad.eleven)"],["You're not sure but he might like it! Let's see!", "happyResponse(happy.eleven)"]]
  },
  // scenario twelve
  twelve: {
    image: "/pics/scenario-twelve.jpg",
    text: "While tidying up, Marshal wants to know if you have any ideas to make his house look nicer. What suggestions do you have?",
    button: [["Plant flowers outside", "happyResponse(happy.twelve)"],["Find a cool poster", "happyResponse(happy.twelve)"], ["New wallpaper?", "happyResponse(happy.twelve)"], ["No idea!", "sadResponse(sad.twelve)"]]
  },
  // scenario thirteen
  thirteen: {
    image: "/pics/scenario-thirteen.jpg",
    text: "Marshal tells you that he has been thinking about what life would be like on another island or another city. What do you tell him?",
    button: [["You can move and find out?", "sadResponse(sad.thirteen)"],["If you go, we'll definitely miss you on the island!", "happyResponse(happy.thirteen)"]]
  },
  // scenario fourteen
  fourteen: {
    image: "/pics/scenario-fourteen.jpg",
    text: "You check your mailbox and find a letter from Marshal, explaining how he is glad he made the choice to move to the island since he got to meet people like you. He hopes you both can keep in touch in person and as penpals.",
    button: [["Write back and tell him how much he means to you", "happyResponse(happy.fourteen)"],["Keep the letter but you forgot to write back...", "sadResponse(sad.fourteen)"]]
  },
  // scenario fifteen
  fifteen: {
    image: "/pics/scenario-fifteen.jpg",
    text: "It has been two weeks since Marshal moved to your island. You find him taking a walk at night, deep in thought. Seems like a good time to tell him what's on your mind...",
    button: [["I hope we can stay friends forever!", "endScenario(ending.photoWin)"],["It's cool you moved here but...", "endScenario(ending.bye)"]]
  },
}

// remember to call the function to go to scenario zero

// object for all happy responses

let happy = {
  // happy response 1 -- button goes to scenario 2
  one: {
    image: "/pics/happy.jpg",
    text: "Oh! What an interesting hobby! I should try it sometime. I hope we can do that together!",
    button: [["Continue", "nextScenario(scenario.two)"]]
  },
  // happy response 2 -- button goes to scenario 3
  two: {
    image: "/pics/happy.jpg",
    text: "Marshal is so happy you remembered! He tells you that once it is set up, you are welcome to stop by Cafe du Marshal for a cup.",
    button: [["Continue", "nextScenario(scenario.three)"]]
  },
  // happy response 3 -- button goes to scenario 4
  three: {
    image: "/pics/happy.jpg",
    text: "Marshal's eyes widen as he sees the orange basket. He can't believe you handpicked these for him! These are some of the best locally grown oranges he has ever tasted.",
    button: [["Continue", "nextScenario(scenario.four)"]]
  },
  // happy response 4 -- button goes to scenario 5
  four: {
    image: "/pics/happy.jpg",
    text: "You return moments later with a beautiful goldfish for Marshal. He is so happy because he can finally have his own pet goldfish! He names it Orange as he thinks of the orange basket you gave him yesterday.",
    button: [["Continue", "nextScenario(scenario.five)"]]
  },
  // happy response 5 -- button goes to scenario 6
  five: {
    image: "/pics/happy.jpg",
    text: "You set up the plant near your kitchen area. Whenever Marshal comes by to say hi, he always checks on how his plant is thriving at your house.",
    button: [["Continue", "nextScenario(scenario.six)"]]
  },
  // happy response 6 -- button goes to scenario 7
  six: {
    image: "/pics/happy.jpg",
    text: "You knock on Marshal's door and invite him to the K.K. Slider concert that night. He is glad you checked because he almost forgot it was happening! He spends the entire evening getting to know you and every villager on the island.",
    button: [["Continue", "nextScenario(scenario.seven)"]]
  },
  // happy response 7 -- button goes to scenario 8
  seven: {
    image: "/pics/happy.jpg",
    text: "You tell him that it is no problem and you would do anything to make your new favorite friend feel welcome! He smiles at your words and thinks to himself that moving to this island was a good decision.",
    button: [["Continue", "nextScenario(scenario.eight)"]]
  },
  // happy response 8 -- button goes to scenario 9
  eight: {
    image: "/pics/happy.jpg",
    text: "What a coincidence! That is Marshal's type of music too! He is excited that you both can share songs to each other.",
    button: [["Continue", "nextScenario(scenario.nine)"]]
  },
  // happy response 9 -- button goes to scenario 10
  nine: {
    image: "/pics/happy.jpg",
    text: "You round up the other villagers and plan to throw him a party tonight. Everyone helps to gather the party supplies, decorate your house, and bake a cake. When you invite Marshal to hang out that night, he was shocked that everyone was there to celebrate! What a surprise!",
    button: [["Continue", "nextScenario(scenario.ten)"]]
  },
  // happy response 10 -- button goes to scenario 11
  ten: {
    image: "/pics/happy-ten.jpg",
    text: "You run to Nook's Cranny and buy some medicine asap! You rush to his house to give him the medicine and make sure he gets rest for the day. Who knew that too much cake can hurt you?",
    button: [["Continue", "nextScenario(scenario.eleven)"]]
  },
  // happy response 11 -- button goes to scenario 12
  eleven: {
    image: "/pics/happy.jpg",
    text: "Good call! Marshal definitely loves collecting fun hats! He puts on the fedora you bought him and struts around the island wearing it for the rest of the day.",
    button: [["Continue", "nextScenario(scenario.twelve)"]]
  },
  // happy response 12 -- button goes to scenario 13
  twelve: {
    image: "/pics/happy.jpg",
    text: "That's an interesting suggestion... he spends the day trying to implement your idea to his house. Marshal knows you have exquisite taste when it comes to home decor and takes your suggestion seriously!",
    button: [["Continue", "nextScenario(scenario.thirteen)"]]
  },
  // happy response 13 -- button goes to scenario 14
  thirteen: {
    image: "/pics/happy.jpg",
    text: "You tell him that he should follow his heart, but if he chooses to move, you and everyone on the island will surely miss him! Marshal is warmed by your words and tells you not to worry, he enjoys life here and hopes he can stay to make more memories!",
    button: [["Continue", "nextScenario(scenario.fourteen)"]]
  },
  // happy response 14 -- button goes to scenario 15
  fourteen: {
    image: "/pics/happy.jpg",
    text: "You mail a letter back telling him how you would love to keep in touch! Marshal feels extra special to receive a handwritten letter from the first friend he made on the island.",
    button: [["Continue", "nextScenario(scenario.fifteen)"]]
  },
}

// object for all sad responses

let sad = {
  // sad response 1 -- button goes to scenario 2
  one: {
    image: "/pics/sad.jpg",
    text: "Marshal is taken aback by your response, but he smiles and tells you he intends to figure out what he likes to do here. He just wanted to get some ideas since it's his first day, sulky!",
    button: [["Continue", "nextScenario(scenario.two)"]]
  },
  // sad response 2 -- button goes to scenario 3
  two: {
    image: "/pics/sad.jpg",
    text: "At that moment, Marshal walks in Nook's Cranny to see that the espresso machine is already sold out! He sulks out the store but notices that you were near the section. Surely, you saw the machine and remembered that he wanted one, right?",
    button: [["Continue", "nextScenario(scenario.three)"]]
  },
  // sad response 3 -- button goes to scenario 4
  three: {
    image: "/pics/sad.jpg",
    text: "You notice Marshal trying to grab an orange from a tree. He decides to shake the tree hoping the orange would fall off, but instead a wasp nest drops next to him! Wasps are now chasing him and he runs towards his house to escape them. Oh no!",
    button: [["Continue", "nextScenario(scenario.four)"]]
  },
  // sad response 4 -- button goes to scenario 5
  four: {
    image: "/pics/sad.jpg",
    text: "A sea bass?! It's only day 4 and even Marshal knows those are the most common fish you can catch. He already has 10 piled up!",
    button: [["Continue", "nextScenario(scenario.five)"]]
  },
  // sad response 5 -- button goes to scenario 6
  five: {
    image: "/pics/sad.jpg",
    text: "That's okay. Marshal can keep the plant in his house even though his place feels cluttered. He finds it odd that you did not want the plant, considering it matches your kitchen decoration a lot...",
    button: [["Continue", "nextScenario(scenario.six)"]]
  },
  // sad response 6 -- button goes to scenario 7
  six: {
    image: "/pics/sad.jpg",
    text: "Marshal misses the concert and sees everybody talking about it later that night. He can't believe he missed K.K. Slider on his first weekend here! He thought it would be a good night to get to know you and the other villagers better... guess not.",
    button: [["Continue", "nextScenario(scenario.seven)"]]
  },
  // sad response 7 -- button goes to scenario 8
  seven: {
    image: "/pics/sad.jpg",
    text: "Well, Marshal just wanted to give you a present to be a nice neighbor. Although he has been feeling like you and him are not getting along too well so far... this is all in his head, right?",
    button: [["Continue", "nextScenario(scenario.eight)"]]
  },
  // sad response 8 -- button goes to scenario 9
  eight: {
    image: "/pics/sad.jpg",
    text: "Upon your response, Marshal becomes more reluctant about your friendship. He is not sure why you are being so closed off when he is just trying to be friendly! He hopes your attitude is just due to a bad mood.",
    button: [["Continue", "nextScenario(scenario.nine)"]]
  },
  // sad response 9 -- button goes to scenario 10
  nine: {
    image: "/pics/sad.jpg",
    text: "Later that night, the villagers find out it is Marshal's birthday but are shocked that you did not plan a party for him. As the island's resident representative, you typically threw birthday parties for the villagers... weird that you forgot Marshal's?",
    button: [["Continue", "nextScenario(scenario.ten)"]]
  },
  // sad response 10 -- button goes to scenario 11
  ten: {
    image: "/pics/sad.jpg",
    text: "Marshal feels sick the whole day and stays inside. The other villagers notice Marshal is missing and bring medicine to him. They wonder if you knew Marshal was sick... they convince him you were just busy and did not notice.",
    button: [["Continue", "nextScenario(scenario.eleven)"]]
  },
  // sad response 11 -- button goes to scenario 12
  eleven: {
    image: "/pics/sad.jpg",
    text: "You decide not to buy it since you were not sure. He is a little upset because he remembers telling you how much he loves fun hats. He cheers up a little because another villager bought him one, but he can't help wonder if you pay attention whenever you both talk.",
    button: [["Continue", "nextScenario(scenario.twelve)"]]
  },
  // sad response 12 -- button goes to scenario 13
  twelve: {
    image: "/pics/sad.jpg",
    text: "Marshal was told that you are an expert in home decor and have helped all the residents on the island. He wonders why you don't have any suggestions for him.",
    button: [["Continue", "nextScenario(scenario.thirteen)"]]
  },
  // sad response 13 -- button goes to scenario 14
  thirteen: {
    image: "/pics/sad.jpg",
    text: "Marshal feels sad that you don't seem to be a little upset at the idea of him moving out. He tells you he is still unsure because he would love to experience the island life a little longer.",
    button: [["Continue", "nextScenario(scenario.fourteen)"]]
  },
  // sad response 14 -- button goes to scenario 15
  fourteen: {
    image: "/pics/sad.jpg",
    text: "Later that day, he asks if you ever received a letter he mailed a couple days ago. You admit you did, but forgot to write back. He says it is okay! He knows you are one busy resident representative and it is not everyone's cup of tea to write letters.",
    button: [["Continue", "nextScenario(scenario.fifteen)"]]
  },
}

// object for end scenarios

let ending = {
  photoEarly: {
    image: "/pics/ending-photo.png", // png
    text: "It seems Marshal has taken a liking to you already! He decided to come by your house with a present. When you open it, it is a framed photo of himself. He tells you he hopes you both can be best friends forever!",
    button: [["You got Marshal's photo early! You win!","creditsScreenEarly()"]]
  },
  photoWin: {
    image: "/pics/ending-photo.png", // png
    text: "Although it's not been long since he moved, Marshal loves his island life so far. He tells you this is mostly because you made him feel so welcome. He values your friendship so much that he gives you a framed photo of himself, hoping it means you both can be best friends forever!",
    button: [["You got Marshal's photo! You win!","creditsScreen()"]]
  },
  bye: {
    image: "/pics/ending-move.jpg",
    text: "Marshal takes some time to reflect on the memories he made on the island so far. Although he is friends with the other villagers, he has a feeling you do not want him there. He eventually moves to another island. Look what you have done, you meanie!",
    button: [["You made him move away! How heartless!","creditsScreenLose()"]]
  },
  creditsHappy: {
    image: "/pics/ily.png", // png
    text: "Aww, look! Marshal has something to say to you!",
  },
  creditsSad: {
    image: "/pics/sad-ending.jpg",
    text: "The other villagers on your island feel like something is missing now that Marshal moved away. How could you be so heartless?"
  }
}

// Maybe add a "Thank you for playing" screen after every ending.

// percent chance of something happening
let photoChance = 0
let randomChance = function() {
  photoChance = Math.floor(Math.random() * 100)
}

// if (d < 0.5) {
//   // 50% chance of something happening here
// } else if (d < 0.7) {
//   // 20% chance of something happening here
// } else {
//   // 30% chance of something happening here
// }

// chance by friendship points or level

// if (friendship >= 200) {
//   if (d < 0.9) {
//     photoWin()
//   }
// }

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
  statsDay.innerText = "day: " + dayCount
  statsFriendshipPoints.innerText = "friendship points: " + friendshipPoints
  statsFriendshipLvl.innerText = "friendship level: " + friendshipLevel
  restart.innerHTML = "restart"
  restart.addEventListener("click", restartGame)
  nextScenario(scenario.zero)
}

let restartGame = function() {
  location.reload()
}

let dayPass = function() {
  dayCount += 1
}

// GAME LOGIC 

// to do a PERCENT CHANCE of winning early, that needs to go in nextScenario because then the chance of this happening will happen after hitting the continue button

let nextScenario = function(scenario) {
  console.log(dayCount)
  // if day 15 then cannot go to photoearly
  if (dayCount >= 15) {
    scenarioUpdate(scenario)
  } else {
      // if friendship level is at 6 (max) then there is a 90% chance of winning early
      if (friendshipLevel === 6) {
        console.log(friendshipLevel)
        randomChance()
        if (photoChance < 20) { // 20% chance
          endScenario(ending.photoEarly)
        } else {
          scenarioUpdate(scenario) // the rest of the code already written in nextScenario - but is this necessary?
        }
      } else if (friendshipLevel === 5) {
        randomChance()
        if (photoChance < 16) { // 16% chance
          endScenario(ending.photoEarly)
        } else {
          scenarioUpdate(scenario)
        }
      } else if (friendshipLevel === 4) {
        randomChance()
        if (photoChance < 12) { // 12% chance
          endScenario(ending.photoEarly)
        } else {
          scenarioUpdate(scenario)
        }
      } else if (friendshipLevel === 3) {
        randomChance()
        if (photoChance < 8) { // 8% chance
          endScenario(ending.photoEarly)
        } else {
          scenarioUpdate(scenario)
        }
      } else if (friendshipLevel === 2) { 
        randomChance()
        if (photoChance < 4) { // 4% chance
          endScenario(ending.photoEarly)
        } else {
          scenarioUpdate(scenario)
        }
      } else if (friendshipLevel < 2) {
        scenarioUpdate(scenario)
      }
    }

  }

let scenarioUpdate = function(scenario) {
  changeImage(scenario.image)
  changeText(scenario.text)
  changeButtons(scenario.button)
  statsDay.innerText = "day: " + dayCount
  statsFriendshipPoints.innerText = "friendship points: " + friendshipPoints
  statsFriendshipLvl.innerText = "friendship level: " + friendshipLevel
  dayCount += 1
  console.log("friendship level: " + friendshipLevel)
  console.log("chance of earning photo: " + photoChance)
}
  
  // this function is pulling from the scenario object, which within each "scenario" has more objects such as the image, text, button, etc.
  // so changeImage(s.image) is basically a function that changes the background image style for whatever is in the scenario's object

  // need two more functions for going to the happy or sad response based on which button is clicked in the scenario

      // happy response
      let happyResponse = function(scenario) {
        friendshipPoints += 25
        if (friendshipPoints >= 200) {
          friendshipLevel = 6
        } else if (friendshipPoints > 150) {
          friendshipLevel = 5
        } else if (friendshipPoints > 100) {
          friendshipLevel = 4
        } else if (friendshipPoints > 60) {
          friendshipLevel = 3
        } else if (friendshipPoints > 30) {
          friendshipLevel = 2
        } else if (friendshipPoints > 0) {
          friendshipLevel = 1
        }
        changeImage(scenario.image)
        changeText(scenario.text)
        changeButtons(scenario.button)
        statsFriendshipPoints.innerText = "friendship points: " + friendshipPoints
        statsFriendshipLvl.innerText = "friendship level: " + friendshipLevel
      };

      // sad response
      let sadResponse = function(scenario) {
        friendshipPoints -= 10
        if (friendshipPoints >= 200) {
          friendshipLevel = 6
        } else if (friendshipPoints > 150) {
          friendshipLevel = 5
        } else if (friendshipPoints > 100) {
          friendshipLevel = 4
        } else if (friendshipPoints > 60) {
          friendshipLevel = 3
        } else if (friendshipPoints > 30) {
          friendshipLevel = 2
        } else if (friendshipPoints > 0) {
          friendshipLevel = 1
        }
        changeImage(scenario.image)
        changeText(scenario.text)
        changeButtons(scenario.button)
        statsFriendshipPoints.innerText = "friendship points: " + friendshipPoints
        statsFriendshipLvl.innerText = "friendship level: " + friendshipLevel
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

      // credits scene and showing score
      let creditsScreenEarly = function() {
        changeImage(ending.creditsHappy.image)
        changeText(ending.creditsHappy.text)
        let endbutton = document.querySelector("button")
        endbutton.remove()
        let lastDay = dayCount - 1
        buttonBox.innerText = "You earned Marshal's photo after " + lastDay + " days! It must have been your winning personality that made Marshal trust you so quickly. Thank you for playing Marshal Crossing!"
      }

      let creditsScreen = function() {
        changeImage(ending.creditsHappy.image)
        changeText(ending.creditsHappy.text)
        let endbutton = document.querySelector("button")
        endbutton.remove()
        let lastDay = dayCount - 1
        buttonBox.innerText = "You earned Marshal's photo after " + lastDay + " days! Marshal is so grateful for a genuine friendship like yours. Thank you for playing Marshal Crossing!"
      }

      let creditsScreenLose = function() {
        changeImage(ending.creditsSad.image)
        changeText(ending.creditsSad.text)
        let endbutton = document.querySelector("button")
        endbutton.remove()
        let lastDay = dayCount - 1
        buttonBox.innerText = "Even though making Marshal sad can never be forgiven, we thank you for playing Marshal Crossing!"
      }

      // let winPhoto = function(ending) {
      //   changeImage(ending.photoWin.image)
      //   changeText(ending.photoWin.text)
      // }

      // let byeMarshal = function(ending) {
      //   changeImage(ending.bye.image)
      //   changeText(ending.bye.text)
      // }

      // += is adding
      // MVP is building the win condition
      // minimum viable product