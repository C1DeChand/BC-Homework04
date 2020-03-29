JavaScript Quiz

Okay, I'm going to write this assuming I haven't been successful.

I've spent more hours on this one than any other homework. And despite that, I couldn't get it to work.

The key bugs I've had are:
1. failing to get the buttons to properly display content.
2. failing to record proper outcomes.
3. failing to properly apply localStorage. (This one is mostly because I knew that if the others didn't work, localStorage wasn't going to be much use.)
4. Failing to get the timer to actually hit ZERO instead of the times up alert happening at 00:02.
5. Failing to correctly tally score and question count.

However:
1. I did successfully transition from one html layout for the card to others repeatedly.
2. I got the timer to function!
3. I got an array to display it's content through an innerHTML function.
4. I got the start button to work properly and trigger the timer.

Let me walk you through how this went. I started normally with the html. I used bootstrap for the layout. I edited some of the css with my own file instead of defaults to make the layout more appealing and keep my html shorter. I tried to adapt the tomato timer to suit my needs but failed. I then google-fued my way through a couple of different timer tutorials. I eventually found an idea that I liked and got a timer set up to work with minutes and seconds. I do fully admit my timer is more than necessary since I only ended up with 5 questions. After the timer, I started adding variables and connecting them to their html partners with .getElementById's. I tried several ways to change the content in my bootstrap card. I failed every attempt until Saturday. I was able to talk to John during office hours and he pointed me towards the nested array. I had previously tried the nested array but he helped me get it right this time. Unfortunately that was more or less the last thing that went right. I was unable to get it to successfully attach it's contents to the html buttons until around 10pm. I had attempted the adapt the localStorage system from the todo-list activity, but I failed and decided it wasn't worth pushing hard for a fix since the rest of the application was still so broken. 

As it stands right now: The quiz has a front page, a start button and a working countdown. It transitions through the first 3 indexes of the array and then breaking at the 4th. It will only ever display one answer from index[3] and skips index[4] for no reason I can find. It skips the "GAME OVER" page and jumps directly to the leaderboard page. The form will take input but with console.log several errors from localStorage. It also restarts the application after you enter the input to the form. I have no idea why it does this. The current time is 11:27pm. I'm going to push this and keep working until I have to upload my links at 11:59pm. Here's hoping I can fix it in the next 30 minutes.
