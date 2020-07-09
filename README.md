# 3.2 Node.Js: Foundations

## Setup

1. Open a terminal window and type `yarn install`
2. Start up the server by typing `yarn dev`

## Stuck?

🚨 In this workshop it is best **NOT** look at the solutions. If you get stuck, see a TC.

## Workshop

⚠️ Before you start the exercises, **you will have to fix the server**, I think. Somehow, things got a little messed up and it won't run until the bugs are squashed.

<img src='https://media3.giphy.com/media/BxWTWalKTUAdq/giphy.gif' />

---

## Exercise 1 - Top 50 Songs (not from this year, or even last year)

### 1.1

Take a look at the `/data/top50.js`. It contain data on the top 50 songs streamed on Spotify.

We want to render this on our website.

In order to do this, you will need to

- create a file called `top50.ejs` in `views/pages/`.
- add in the `header` and `footer` partials. (look over these files and see what they contain).
- create a `get` endpoint for the following path: `/top50`.
- the function called at this enpoint to use `res.render()`. (you can write your function directly inside of `server.js`)
- pass the title to the page: "Top 50 Songs Streamed on Spotify" via the render method.
- It would be good if our title was where the word "Workshop" is at the moment, as well as in the `<head>` of the page as a `<title>`.
- Pass those values to the partials via the render method.

Once you've completed 1.1, you should have something like this.

![](__lecture/assets/top50_1.1.png)
//done

### 1.2

Time to add some data to the page.

- We are requiring the `top50` file at the top of `server.js`. You have access to the file in there.
- Pass the array to the `top50.ejs`.
- Render the list on the page (only the rank and title for now).
- This data is a list. Make sure to use the proper HTML tags. 🙏

Once you've completed 1.1 and 1.2, you should have something like this.

![](__lecture/assets/top50_1.2.png)

//done

### 1.3

It is better practice to split our code into _partials_ that have only one job to do.

- Move the rendering of the `<li>` for the song to its own file in `/views/partials` call it `song.ejs`.
- Once you've done that, you can add more song data to the page. Add the rest of the data provided. (`rank`, `title`, `artist`, `streams`, `publicationDate`).

![](__lecture/assets/top50_1.3.png)

//done

### 1.4

Time to style the `<li>`s to be a little more readable / presentable.

- we have upgraded to `scss`, from `css`.
- Look inside the `scss` folder. There is already a `_song.scss` file in there. It is being imported into `styles.scss` and then compiled into the `public/css/styles.css`. \*\*Do not modify anything `public`.
- Write your css in `_song.scss`. Save and reload the page sporadically to check on your progress. You should have something like this below.

![](__lecture/assets/top50_1.4.png)

### 1.5 (Hard - Stretch)

- Create a new endpoint `/top50/popular-artist`
- create a function that will render the songs of the most popular artist on the list.
- pass only those songs to the `ejs` page.
- reuse the song partial to render the songs.

![](__lecture/assets/top50_1.5.png)

### 1.6

It would be great if each song could have its own page. How do you feel about creating 50 endpoints in `server.js`?

You would start with `/top50/song/1` and end with `top50/song/50`...

No! We ain't doing that, but I would still like to be able to access each individual song that way...

- Create one endpoint using a url parameter in your endpoint
- Page title should be "Song #"
- Create a box like in the screenshot below.
- Use `_song-page.scss` for your styling.

![](__lecture/assets/top50_1.6.png)

### 1.7

Try navigating to a url for a song that is ranked above 50, below 1. What happens? Our server borks and can't serve a page that doesn't exist.

- fix that.

Once fixed, it should show us the 404 page instead of breaking.

![](__lecture/assets/top50_1.7.png)

### 1.8

- Add arrows, buttons, or anything you like to the individual song pages that enable user to quickly navigate the list. e.g. If I am on song rank #22, clicking 'next' will take me to song rank #23, etc.

---

<center>🟡 - Minimally complete workshop (75%) - 🟡</center>

---

## Exercise 2

Take a look at `data/books.js`. There is a list of books in there. Using this list, add the following functionality to the server:

- There is a page where I can view ALL of the books.
- I am able to provide the id of a book to view its details (web page)
  - This page should include all of the information on the book
  - be presented in a legible way (include the cover as well)
- I am able to get a list of books by their type.
  - Provide the title, author and smaller version cover
  - It should look more like a list.
  - No need to add the description.

**Don't forget to import the books array into `server.js`. Look at how top50 was `required`.**

---

<center>🟢 - Complete workshop (100%) - 🟢</center>

---

## Exercise 3

Outside of this project, somewhere else on your computer,

- create a folder
- open it with VS Code
- and setup your very own server.

Look at yesterday's notes if you are not sure.

Also feel free to look at the servers you worked with yesterday and today.

Once you have a working server,

- create some endpoints just to confirm that it's actually up and running.
