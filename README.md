# Project Overview

I will be creating an app that finds and lists Free-to-Play games. The list will be comprised of different genres, sorted, and offer information about the free games.

## Project Links

- [https://github.com/youngjerald239/Project_2.git]()
- [https://epic-blackwell-90b00a.netlify.app/]()

## Project Description

Free Games app is easy and simple to use. Just search for the free games by genre, type, platform, and sorted. The app finds all free games, for all gaming systems.

## API

https://www.freetogame.com/api/games

Free-to-play games database powered by FreeToGame.com! FreeToGame is a gaming platform that provides access to the best free-to-play games and MMO Games while rewarding gamers with perks.


```
{data: {const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://free-to-play-games-database.p.rapidapi.com/api/game?id=452",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "238791b430mshf27f36440d2bc07p120426jsnb81344321f54",
		"x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});} }
```


## Wireframes

- [https://res.cloudinary.com/dbgpqig0z/image/upload/v1619800333/Screenshot_59_urkwus.png]()
- [https://docs.google.com/document/d/15W4db8hTqMREPdtFj7Jf9pGkGvWc57hbiV0t-FaS7jg/edit?usp=sharing]()


#### MVP:
- Find and use external api 
- Render data on page 
- Allow user to add to favorite games list.
- Static nav bar
- Add a search button in the navbar
- Style the app

#### PostMVP:

- Add localStorage or firebase for storage
- Add a sign up form on a new page
- Add "My Games" router page
- Add customer profile router page
- Add Forum page

## Components

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include in the nav | 
| Footer | This will render the Footer include page info and seperate navbar | 
| Cards | This will render the game data in a list of style cards| 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| hrs | hrs |
| Working with API | H | 4hrs| hrs | hrs |
| Adding Nav-bar | H | 1hr| hrs | hrs |
| Adding Nav-bar router| H | 4hrs| hrs | hrs |
| Adding search button| H | 3hrs| hrs | hrs |
| Function to search by id| H | 4hrs| hrs | hrs |
| creating components| H | 3hrs| hrs | hrs |
| Styling Cards| H | 2hrs| hrs | hrs |
| Total | H | 24hrs| hrs | hrs |

## Additional Libraries
React:

Axios:

Bootsrap:Used to create the nav bar, cards, and effects

## Code Snippet

```

```