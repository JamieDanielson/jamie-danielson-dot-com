---
title: "My First MERN Tutorial"
date: "2020-05-10"
---

## My First MERN Tutorial - The Good, The Bad, The Ugly

I went through the tutorial provided from Beau Carnes of freeCodeCamp.  The tutorial starts with a headline "Building Web Apps with the MERN Stack: with MongoDB Atlas and Google Cloud Platform". I thought I may have picked the wrong one because I had no idea what Atlas was or why we were using Google Cloud Platform. So much to learn, young grasshopper.

I originally intended to lay out the good, bad, and ugly, but to be honest, it really wasn't that bad, and it seems too discouraging. So I've changed my mind and decided to lay out a few things I learned and can take away for the next project.

### The Good

The first thing I learned during this is the beauty of abstraction. I realized there are so many things involved yet so many things I also didn't have to worry about. When you `create-react-app` it has the boilerplate code for you. This is similar to the convenience of the HTML boilerplate I've used previously, so I see these are godsends. Beau walked us through signing up for MongoDB Atlas and hooking it up through Google Cloud Platform, which I didn't have to understand as long as I followed the steps.

One fantastic note about boilerplates is it takes a lot of the guesswork out of setting up a structure or folder hierarchy. The backend is already in there and separated from the rest, and there are even comments and links to additional information.

Thankfully there were not many packages to be installed; this was helpful because the first time I tried following a React tutorial, there were so many packages to install I got overwhelmed. In general I was overwhelmed the first time because I realized how little I knew and how critical it was for me to gain a better knowledge foundation before moving into this space. I had barely taken enough JavaScript courses, let alone read through any kind of React code. So before I started this one, I made sure to start a React course on Codecademy, but even that didn't happen until many more hours of javascript30 with Wes Bos, JavaScript learning from freeCodeCamp, and various exercises and learnings.

One thing that drew me to this tutorial in particular was that the app being created was something I could see myself actually using, or at least some variant of it. It was an exercise tracker. I've learned that I have trouble following along if the material does not feel relevant.

### The Not as Good

I split the tutorial over 2 days to allow myself a break and also to see if any knowledge could sink in overnight and by morning I would be a React ninja. I started up the second day with an `npm start` and was feeling pretty good about myself as I could see my app pop open on my browser. When we tested adding a user, I could see it in my console where I logged it, which was encouraging. But when we added the code to actually update the database, I got an error. Uh oh. It took an embarrassingly long time to figure out. Did I have something wrong with my setup? What changed? It was working yesterday!

I found the troubleshooting guide for MongoDB and went through every step. One seemed especially promising - it noted that any special characters in the password should be updated to ASCII characters (e.g. `@` sign should be `%40`).  I updated that and still no luck. Next I realized I could test the call to the db outside the app, which would tell me more about the connection. When I opened Insomnia and tried a `get` for users, I received a connection error. Eek, worse than I thought.

After more searching and reluctantly asking my boyfriend to take a look, I realized the obvious. I started the front end... but never the db server. Facepalm. I opened a new terminal window, navigated to the backend directory and typed `nodemon server`. BAM, problem solved.

### Main Takeaways

* MERN stands for MongoDB, Express, React, Node
* Use Mongoose with MongoDB to help with schema, validation, and relationships
* Use Bootstrap for quick and dirty CSS that you don't have to think about
* Always start your db server!

Closing thoughts: That was amazing and I want to do more.
