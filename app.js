const adventurer = {
    name: "Timothy",
    hitpoints: 10,
    belongings: ["sword", "potion", "Tums"]
}

// iterate over an array within an object
for (let i=0; i < adventurer.belongings.length; i++) {
    console.log(adventurer.belongings[i]);
}

// you can also loop over an object

// object for all scenarios
// object for all happy responses
// object for all sad responses
scenario = {}
var scenario = {
  one: {
    image: "http://s9.postimg.org/eceo9mp73/5860028206_d66810105f_b.jpg", //dog
    text: "You have finally decided to take your dog out for a walk. You smile and pat your trusty companion's head. What the dog's name?\n",
  },
  two: {
    image: "http://s9.postimg.org/9p8m7v1u7/6899639786_d517c4cce3_z.jpg", //house
    text: "Your dog yanks at the leash. You hear dogs barking and see an old abandoned house. Strangely, the door is wide open. What do you want to do?",
    buttons: [["Turn and run", "advanceTo(scenario.three)"],["Enter The House", "advanceTo(scenario.four)"]]
  },
  three: {
    image: "http://s4.postimg.org/t1g20apst/261819008_d4316c1bdf_o.jpg",
    text: "A wild gang of rabid dogs are gaining on you. Against your better judgement you enter the creepy house for saftey. Your dog is whincing and may be injured.",
    buttons: [["continue", "advanceTo(scenario.four)"]]
  },
  },

advanceTo(scenario.one)

// example functions

var changeText = function(words) {
    text.innerHTML = words.replace("Your dog", yerdog);
  };
  
  var changeImage = function(img) {
    images.style.backgroundImage = "url(" + img + ")";
  };
  
  var changeButtons = function(buttonList) {
    buttonBox.innerHTML = "";
    for (var i = 0; i < buttonList.length; i++) {
      buttonBox.innerHTML += "<button onClick="+buttonList[i][1]+">" + buttonList[i][0] + "</button>";
    };
  };
  
  // this is pulling from the scenario object, which within each "scenario" has more objects such as the image, text, button, etc.

  // does not necessarily have to consistently have the same number of buttons -- it is put in an array (the button and the function it calls)
  var advanceTo = function(s) {
    changeImage(s.image)
    changeText(s.text)
    changeButtons(s.buttons)
  };

  // so changeImage(s.image) is basically a function that changes the background image style for whatever is in the scenario's object

  // basically mine will look someting like this

  // scenarios 0-15
    neutralscenario = {}
    let neutralscenario = {
    zero: {
        image: "http://s9.postimg.org/eceo9mp73/5860028206_d66810105f_b.jpg", //dog
        text: "You have finally decided to take your dog out for a walk. You smile and pat your trusty companion's head. What the dog's name?\n",
    },
    one: {
        image: "http://s9.postimg.org/9p8m7v1u7/6899639786_d517c4cce3_z.jpg", //house
        text: "Your dog yanks at the leash. You hear dogs barking and see an old abandoned house. Strangely, the door is wide open. What do you want to do?",
        buttons: [["Turn and run", "advanceTo(scenario.three)"],["Enter The House", "advanceTo(scenario.four)"]]
    },

    // happy responses 1-14 (less one bc last is the end scenarios)
    happyresponse = {}
    let happyresponse = {
    zero: {
        image: "http://s9.postimg.org/eceo9mp73/5860028206_d66810105f_b.jpg", //dog
        text: "You have finally decided to take your dog out for a walk. You smile and pat your trusty companion's head. What the dog's name?\n",
    },
    one: {
        image: "http://s9.postimg.org/9p8m7v1u7/6899639786_d517c4cce3_z.jpg", //house
        text: "Your dog yanks at the leash. You hear dogs barking and see an old abandoned house. Strangely, the door is wide open. What do you want to do?",
        buttons: [["Turn and run", "advanceTo(scenario.three)"],["Enter The House", "advanceTo(scenario.four)"]]
    },

    // sad responses 1-14 (less one bc last is the end scenarios)
    sadresponse = {}
    let sadresponse = {
    zero: {
        image: "http://s9.postimg.org/eceo9mp73/5860028206_d66810105f_b.jpg", //dog
        text: "You have finally decided to take your dog out for a walk. You smile and pat your trusty companion's head. What the dog's name?\n",
    },
    one: {
        image: "http://s9.postimg.org/9p8m7v1u7/6899639786_d517c4cce3_z.jpg", //house
        text: "Your dog yanks at the leash. You hear dogs barking and see an old abandoned house. Strangely, the door is wide open. What do you want to do?",
        buttons: [["Turn and run", "advanceTo(scenario.three)"],["Enter The House", "advanceTo(scenario.four)"]]
    },

    // end scenarios one or two (photo or move)
    endScenario = {}
    let endScenario = {
    photo: {
        image: "http://s9.postimg.org/eceo9mp73/5860028206_d66810105f_b.jpg", //dog
        text: "You have finally decided to take your dog out for a walk. You smile and pat your trusty companion's head. What the dog's name?\n",
    },
    bye: {
        image: "http://s9.postimg.org/9p8m7v1u7/6899639786_d517c4cce3_z.jpg", //house
        text: "Your dog yanks at the leash. You hear dogs barking and see an old abandoned house. Strangely, the door is wide open. What do you want to do?",
        buttons: [["Turn and run", "advanceTo(scenario.three)"],["Enter The House", "advanceTo(scenario.four)"]]
    },

    // advance to next scenario
    var nextScenario = function(s) {
        changeImage(s.image)
        changeText(s.text)
        changeButtons(s.buttons)
      };

      // happy response
      var happyScenario = function(s) {
        friendship =+ 25
        changeImage(s.image)
        changeText(s.text)
        changeButtons(s.buttons)
      };

      // sad response
      var sadResponse = function(s) {
        friendship =- 10
        changeImage(s.image)
        changeText(s.text)
        changeButtons(s.buttons)
      };
