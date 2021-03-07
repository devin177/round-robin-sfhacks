# Round Robin

## Inspiration
I was inspired to build this bot by the lack of conversation my classrooms online have been having. 
## What it does
This bot encourages friendly conversation between peers in a work or classroom environment to inspire new ideas and innovations. To do so it automatically matches users to partners for the week to talk together.
## How we built it
The backend of this application was build using Node.js. The server that is listening for changes in the Discord server is an Express server hosted on Repl.it, and the Postgresql database is hosted on Google Cloud SQL. Since the front end is just Discord, it also works on mobile devices.
## Challenges we ran into
Some challenges I ran into were database related in terms of chaining multiple promises. Some things required information from other tables such as a the partner matching process needing the discord user's id.
## Accomplishments that we're proud of
I am proud of learning how to use the Google Cloud SQL API, as well as learning how Discord bots are implemented.
## What we learned
I learned a lot about SQL databases and how to chain queries to them.
## What's next for Round Robin
I'd like to explore automation of this process, as well as implementing functionality for larger groups. In addition, I'd like to have permanent uptime on the Discord Bot/server listening for requests. Lastly, I'd like to expand this idea to other platforms such as Slack or Facebook groups as well.
