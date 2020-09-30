# Project 1: Marshal Crossing

Text-based scenario game to increase your friendship level (by earning friendship points) with your villager, Marshal! How many days will it take for Marshal to deem you bff-worthy and give you his framed photo?

## SUMMARY OF GAME

Marshal is the newest villager on your island. You will be presented a new scenario every day and have 2-4 options on how you would respond. Based on your choice, your friendship level with Marshal will either increase or decrease. As your friendship level increases, Marshal will begin trusting you more as a friend. You want him to deem you bff-worthy and give you his framed photo! Once he gives you his photo, you win the game (and his heart)!

The chances of earning the photo is much higher when your friendship level is at the max level, but it is possible Marshal trusts you even before that! How many days did it take for Marshal to consider you his best friend?

Levels of friendship based on points & the chance of Marshal giving you his photo.
1. 0-29 points -- 0% -- 0-25
2. 30-59 points -- 10% -- 25-50
3. 60-99 points -- 30% -- 50-75-100
4. 100-149 points -- 50% -- 100-125-150
5. 150-199 points -- 70% -- 150-175-200
6. 200+ points -- 90% -- 200-225-250-275-300-325-350-375 (MAX)

At level 6, you have a very high chance to earn their picture, but there is always the slight chance you earn his trust early!

Other non-goal features:
• Footer to show: friendship level, number of days since becoming his friend
• Restart function
• Picture of Marshal in the screen becomes happier every time friendship level increases
• Smiling Marshal when the friendship points increase after picking an option
• Sad Marshal when the friendship points decrease after picking an option

## VARIABLES TO DECLARE

friendship points
friendship level
day count
objects for all scenarios types

## SCENARIOS 0-15

0. introductory say hi
1. what is your favorite thing to do on the island?
2. you are at nook's cranny and see they are selling a brand new espresso machine! didn't marshal tell you yesterday that he's been needing one? what do you do...
3. isabelle tells you one of her favorite ways to welcome a new neighbor is by giving the island's native fruit. hm, has marshal tried the local oranges?
4. marshal heard that it is currently salmon season at the island! can you go catch him one? yes or nah just give a seabass lmao
5. marshal tells you he found a plant while unpacking but there is just no space in his house to put it. will you keep it?
6. it's saturday which means k.k. slider is here! did anyone make sure marshal knows to go to the plaza? invite him or nah
7. marshal wants to give you a present after a week he's moved in! do you accept it?
8. marshal wants to get to know you better. what kind of music do you listen to? pop, dance, anything really, none of your business
9. it is marshal's birthday! you think of something special to do... what do you do?
10. marshal had too much cake for his birthday and now he feels sick. what do you do?
11. you notice an outfit displayed at able sisters shop. it looks like something marshal would want! what do you do?
12. marshal asks you if you have any ideas to make his house look nicer. what are your suggestions?
13. marshal has been thinking about what life would be like on another island or another city. what do you tell him?
14. you receive a letter in the mail from marshal. what do you do? write back or ignore it
15. it's been two weeks since marshal moved to your island. you find him standing at the pier watching the sunset. seems like a good time to tell him what's on your mind... "i'm glad you moved here!"

end scenario - BFF! - you know marshal has taken a liking to you already. he decided to come by with a present and a photo of himself so you guys can be best friends forever!

end scenario - NO - marshal likes his life on the island. he is friends with the other villagers but he can't help think that you don't want him there, espcially since you are the island's resident rep. what does it say when the resident rep is not friendly to him? he thinks it over and eventually moves to another island. look what you have done, you meanie!

## FUNCTIONS

6 Math.random functions for the % chance for each friendship level 
Number of functions that begins the next scenario
- Scenario 0 > startFriendship() > Scenario 1 > happyOne OR sadOne > Scenario 2 > happyTwo OR sadTwo > Scenario 3 > etc...

happyOne() will have friendship =+25 and then scenarioTwo
sadOne() will have friendship =-10 and then scenarioTwo

increaseFriendship to =+25
decreaseFriendship to =-10

After all scenarios are complete, he will definitely give you his photo. But your goal is to earn his trust early!

If at last scenario, your friendship points are under 200, Marshal gets sad and moves away. You lose!

## GAME LOGIC

Objects for each scenario and response.
Arrays for the options that increase friendship? --> these go into buttons
Arrays for the options that decrease friendship? --> these go into buttons

## SITE LAYOUT / UI

Logo at the top - Marshal Crossing (or whatever the title will be) -- this can go away once you start the game
Box in the middle of screen
Picture of Marshal will change based on scenario
Items at the bottom such as friendship level, current day, friendship tier "new, good, best, BFF"
Footer under the box - made by sal!#0099 - visit my ko-fi!
Based on datamined data from XXXXXX
Link to Animal Crossing New Horizons

## Resources

Object-ception
https://tmdarneille.gitbook.io/seirfx/javascript/objects/object-ception

HTML Text Adventure Article
http://fremontcoderdojo.com/2015/01/08/html-text-adventure-game/

### notes and thought process

if every increase in friendship is 25 points, then it will take a minimum of 8 correct scenarios to get to max friendship level

we want to have more scenarios after reaching max level so that it is not always a guarantee of photo yet -- approx 12

after 15 scenarios -- marshal will definitely give the photo

extra mile:
have input for the user to enter their name
have input for the user to name their island
var username = name
var island = islandname

### CODE FOR SCENARIO OBJECT
```
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
    button: [["Buy it for him!", "happyResponse(happy.two)"], ["Don't remember what he said..."], "sadResponse(sad.two)"]
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
    button: [["I'm so happy you moved here. I hope we can stay friends forever!", "photoWin()"],["It's cool you moved here but...", "byeMarshal()"]]
  },
}
```