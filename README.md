<div style="text-align:center"><img src="client/src/images/ai.png" width="200" height="200"/></div>

## GGC Raspberry PI Projector
Here at GGC, we have a lab designed for students who want to achieve greatness with technology. It is known as the DM Lab.
In that lab there are tons of things to create and expriment with. We chose to create a projector using a PI. With this, faculty, students, etc. could
upload their own images and have it projected for others in the DM Lab to see.

## Team Members :smiley:
1. **_Michael Murillo_** - [@murillomichael](https://github.com/murillomichael) <br>
2. **_Matthew Rosario_** - [@mrosario123](https://github.com/mrosario123) <br>
3. **_Jordan Harrison_** - [@SodaPopSuperStar](https://github.com/jharrison5@ggc.edu)<br>
4. **_Jerry Chambers_** - [@Jub7](https://github.com/Jub7)<br>

## Running this application on your local machine
1. Clone this github repository onto your local machine <br>
2. Create a MongoDB database and connect it to the application. Follow this [tutorial.](https://www.youtube.com/watch?v=6utzRKiBZt0)  <br> There is also a .env.example in the **'server'** folder to illustrate how your .env file should look
3. On your IDE, open two separate terminals and for each one navigate to the **'client'** and **'server'** folders. <br>
   <img width="1162" alt="Terminal Screenshot" src="https://user-images.githubusercontent.com/54247576/164936528-b75b930d-2110-4daa-a7bd-367a6711bfc0.png">
3. Run the command **'npm i && npm start'** on both terminals. <br>
4. On your browser **localhost:3000** should open and display the webpage

## Running the PI code
1. In order to run the PI code, you must have pygame installed. [Installation](https://www.pygame.org/wiki/GettingStarted) <br>
2. It is a command line application. To run it, type the following command, specifying the directory where the images are located. <br>
```python project.py [directory]```
