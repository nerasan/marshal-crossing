# Project 1: Marshal Crossing

Text-based scenario game to increase your friendship level (by earning friendship points) with your villager, Marshal! How many days will it take for Marshal to deem you bff-worthy and give you his framed photo?

## SUMMARY OF GAME

Marshal is the newest villager on your island. You will be presented a new scenario every day and have 2-4 options on how you would respond. Based on your choice, your friendship level with Marshal will either increase or decrease. As your friendship level increases, Marshal will begin trusting you more as a friend. You want him to deem you bff-worthy and give you his framed photo! Once he gives you his photo, you win the game (and his heart)!

The chances of earning the photo is much higher when your friendship level is at the max level, but it is possible Marshal trusts you even before that! How many days did it take for Marshal to consider you his best friend?

Levels of friendship based on points & the chance of Marshal giving you his photo.
(percentages have been modified from the actual ACNH game)
1. 0-29 points -- 0% -- 0-25
2. 30-59 points -- 5% -- 25-50
3. 60-99 points -- 10% -- 50-75-100
4. 100-149 points -- 15% -- 100-125-150
5. 150-199 points -- 20% -- 150-175-200
6. 200+ points -- 25% -- 200-225-250-275-300-325-350-375 (MAX)

At level 6, you have a very high chance to earn their picture, but there is always the slight chance you earn his trust early!

Other non-goal features:
* Footer to show: friendship level, number of days since becoming his friend
* Restart function
* Picture of Marshal in the screen becomes happier every time friendship level increases
* Smiling Marshal when the friendship points increase after picking an option
* Sad Marshal when the friendship points decrease after picking an option

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

Math.random functions for the % chance for each friendship level 
Number of functions that begins the next scenario
- Scenario 0 > startFriendship() > Scenario 1 > happyOne OR sadOne > Scenario 2 > happyTwo OR sadTwo > Scenario 3 > etc...

happyOne() will have friendship =+25 and then scenarioTwo
sadOne() will have friendship =-10 and then scenarioTwo

increaseFriendship to =+25
decreaseFriendship to =-10

After all scenarios are complete, he will definitely give you his photo. But your goal is to earn his trust early!

This was not implemented but a thought. I felt like 
If at last scenario, your friendship points are under 200, Marshal gets sad and moves away. You lose!

## SITE LAYOUT / UI

* Logo at the top - Marshal Crossing
* Box in the middle of screen
* Picture of Marshal will change based on scenario
* Items at the top such as friendship level, current day, friendship tier
* Footer under the box - made by sal!#0099
* Based on datamined data

## Resources

Object-ception
https://tmdarneille.gitbook.io/seirfx/javascript/objects/object-ception

HTML Text Adventure Article
http://fremontcoderdojo.com/2015/01/08/html-text-adventure-game/

### notes and thought process

if every increase in friendship is 25 points, then it will take a minimum of 8 correct scenarios to get to max friendship level

we want to have more scenarios after reaching max level so that it is not always a guarantee of photo yet -- approx 12

after 15 scenarios -- marshal will definitely give the photo

### Extra Mile

chance of obtaining photo early -- really want to implement this
last screen with "thank you for playing" and pull the final stats of friendship points/level.
music for bubblegum kk.

extra mile:
have input for the user to enter their name
have input for the user to name their island
var username = name
var island = islandname

### to-do list

add pictures to scenarios
1 - DONE
2 - DONE
3 - isabelle and oranges -- DONE
4 - goldfish season -- DONE
5 - house plant -- DONE
6 - k.k. slider is here -- DONE
7 - week and give present -- DONE
8 - what type of music -- DONE
9 - marshal's birthday -- DONE
10 - too much cake
11 - flashy fedora -- change to sunflower crown -- DONE
12 - suggestions for making house nicer -- DONE
13 - thinking about life elsewhere -- DONE
14 - letter -- DONE
15 - marshal at the pier (change to taking a walk for screenshot) -- DONE

add pictures to happy -- one pic
add pictures to sad -- one pic

add pictures to endings
1 - photo! -- DONE
2 - he moves -- DONE

add music?