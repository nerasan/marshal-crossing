# Marshal Crossing

![welcome to marshal crossing!](/pics/welcome.jpg)

Animal Crossing: New Horizons is one of Nintendo's most popular game franchises, where you are the resident representative of your island and invite villagers to live there. The game allows a maximum of 10 villagers on the island, which means you have to pick your favorites from the 391 different villagers available.

Marshal Crossing is a simple mini version of ACNH and introduces you to the villager interaction aspect of the game. This game is a text-based browser game where your newest villager, Marshal, is getting accustomed to life on your island. The objective is to make Marshal feel welcome and eventually obtain his framed photo once he gains your trust. This is similar to ACNH where you can perform a multitude of tasks to essentially increase the friendship level with your villagers and obtain their framed photo.

Game Demo: [https://nerasan.github.io/marshal-crossing/](https://nerasan.github.io/marshal-crossing/)

## Technology

HTML, CSS, JavaScript

## Wireframe & Design

Only had a rough sketch, so a nice wireframe picture will be added soon!

**Color Palette**
```
#e9e4db
#4b60a0
#e3b090
#7fd8e2
#8fdfb2
```

## Game Logic

1. The start button will initiate the game.
2. The game board moves to the introductory scenario and adds the statistics and restart option at the top.
3. The game will now present scenarios to allow the player to respond by selecting a button. Depending on the response, it will lead the player to a good or bad response, resulting in an increase or decrease of friendship points.
4. Throughout the game, the friendship level will change based on friendship points. The higher the friendship level, the higher chance for Marshal to trust your friendship early and give you his framed photo.
5. At the last scenario, depending on the response from the player, Marshal will either give his framed photo or he will move away (regardless of your current friendship level).
6. The game ends when Marshal gives you his photo either early or at the end (win) or when he moves away (lose).
7. When the player wins, there is a credits screen showing the number of days it took to obtain his photo. Less is better! If the player loses, there is a special message at the credits screen. :)

**Friendship Levels and Chance to Obtain Photo**

Friendship Level | Percent Chance
------------ | -------------
0 | 0%
1 | 0%
2 | 4%
3 | 8%
4 | 12%
5 | 16%
6 (MAX) | 20%

**Pseudocode**

See raw pseudocode and unedited notes in the plan.md file.

## Goals

1. Add a variety of scenarios so that the game has a responsive feel to the player.
2. Implement the percent chance to obtain Marshal's photo early, since it is similar to ACNH where you can get lucky and get your villager's photo early once a certain friendship threshold is met.
3. Simplistic UI where the game is at the center of the page. Even within the game box, the main focus of the game is the photo and text/buttons. No unncessary statistics at the top.

## Challenges

1. The main challenge with my game was not a challenge in terms of how to write it, but the amount of time it took to actually write out every single possible scenario that can occur. It was great that I was able to sort them in separate objects for each type of scenario (main, happy, sad, and ending) as it made it easier to code the functions. This made me so much more appreciative of the text-based games I played growing up and even to this day. It must have taken a lot of time to write it all out as ideas and then write it all out again into code.
2. The next challenge was with making my code DRY. I felt like a lot of my code is repeating the same functions (i.e., with the changing of scenarios and updating the statistics at the top) but it had to be really specific because of the number of scenarios.
3. The next challenge I had was trying to implement the percent chance of earning Marshal's photo early. It required a large-ish conditional statement which I am sure could have been organized more efficiently. It didn't seem too long with just 6 friendship levels, but I know it would not be efficient if there were more. This function was not working for a long time and I tried so many workarounds, only to figure out it was because I used "=" and not "===" in the if statement. Rookie mistake that cost me an hour...
4. Another challenge was on CSS and having everything align within the game box. Eventually figured out the best method to me was using flexbox.

## Extra Mile

Here are a few things I wish I could have implemented, but I felt it would take a lot of time. It would be adding similar functions that I have already used, in order to have more "personable and responsive" features.
* Having the player input their name and name of their island in the beginning. I didn't think about adding this until towards the end of writing up my functions. It might be something I can add later.
* I used the same picture of Marshal for the happy and sad reaction scenarios, not so much because of the time it would take to add them, but because I personally did not have the appropriate screenshots for the scenes. Might be something to implement at a later time.
* Another small feature, but I wanted to add a little icon of Marshal's face next to friendship level where he smiles if it's a high level or frowns if it's a low level. Does not contribute much to game logic but would be cute!
* Wanted to learn how to implement a version of light/dark mode, but instead have it sand/water mode which will change the background from the current sand color to a blue color. Again, this is just for styling, so maybe something cool to add later!

### Other Notes & Credits

* All the images are screenshots from my Marshal in my ACNH game!
* Bubblegum K.K. will play in the background once the Start button is pressed. The audio can be muted by clicking "mute".
* Friendship data was referenced by [@yuecrossing](https://twitter.com/yuecrossing) at [yuexr.github.io/acnh/](yuexr.github.io/acnh/). Datamined credit is on their website.
* Header graphic and title icon made/edited by my friend Hoang (he did not want tagged/linked credit).
* Added my Discord tag at the footer rather than my full/personal name in case I wanted to share this publicly to my friends in the online AC community.