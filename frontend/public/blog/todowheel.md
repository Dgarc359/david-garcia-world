# Todowheel

Todowheel is an API server I have written in go. It's purpose is
to give people the ability to have a list of todos, and then
'spin the wheel' to pick a random todo to complete. Clients are able
to specify the maximum and minimum length of time a todo can take.
The API is spun up as a docker container on port 3000 and exposes
some simple routes to accommodate the basic use case.

I have some experience creating APIs, but I haven't given a good
stab at learning go. This project was a great opportunity for me
to dip my toes into the language.
My goal was also to reach an MVP status as quick as was reasonable while juggling work and life.
I wanted to get a baseline for how long it would take me to build a simple API in a language I haven't tried before.
I'd like to run more experiments like this in the future.
My eventual goal is to have a quicker turnaround time on my MVPs.
The biggest curse of having such a long list of side-projects
to work on is finding enough time to bring one to a reasonable
close. This project marks the beginning of my journey to
improve that!

**Key technical features**
* Simple API server
* Written in Go
* Dockerized
* Sqlite3 backend DB


**Key findings**
It was hard to initially scope this project, as I wasn't exactly
sure how the initial implementation was going to look like in go.


I approached this project with the intention of finishing it quickly, but I failed to factor in some learning time for the go language.


**Random thoughts**
I like go! I like the way structs are implemented. One cool feature that I found myself really liking was
method receivers. Basically, it lets you attach a function to a struct. I can see this being a really cool feature for extending
other people's code.


This is my first blog post ever! I hope to look back on this one day and see how far I've gone. Until next time!
