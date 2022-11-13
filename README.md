# etch-a-sketch
My take on the desktop 'etch-a-sketch' project idea from The Odin Project.
It's the first public version - there might be some changes in the future.


## Options:
1. Switch between normal and rainbow pen options.
2. Pick color: Choose custom pen color.
3. Eraser: the same mechanism as drawing pen, but it "draws" with current background color.
4. Grid: Switch the grid look on/off. 
5. Background: Choose custom background color.
______________________________
6. Clear: Sets the whole board back to current background color.

## Slider: 
Pick the grid size. Smallest option is 8x8 and it goes up to 96x96. Steps are a multiple of 8.

## Tech:
HTML, SCSS and JavaScript

## Some thoughts:
I decided to go through The Odin Project's 'Foundations' instead of jumping straight into 'Full Stack JavaScript path' to make sure I'm starting with an even knowledge base. 

I found certain parts more challenging than others. The biggest problem for me was writing functions and events in a way that would make them work together AND seperately. Once I started to break big functions into smaller ones it became much easier to figure out what to use when. Creating a seprate variable for checking if the mouse is down or up was a game changer as well. 
Another problem that I was stuck on for a hot minute was turning the grid on and off. It took a break and a nap for me to figure out that adding and removing border from EVERY single square individually wasn't the best performance choice. I fixed it with a simple class .toggle on the parent element.

This project forced me out of my comfort zone when it comes to using SCSS as well. I only used it in a project once before, so it was a very much needed refresher. I got some tips from Kevin Powell's ["Getting started with Sass"](https://www.youtube.com/playlist?list=PL4-IK0AVhVjMYRhK9vRPatSlb-9r0aKgh) YT series that helped immensely. 

