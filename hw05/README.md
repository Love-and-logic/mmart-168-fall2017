# HOMEWORK 5: MANIPULATING TWITTER DATA WITH FUNCTIONS
> * Due date: Midnight on Wednesday, 10/4 (1 week)
> * Part I: Using Github like the cool kids we are
> * Part II: Homework
> * To submit: See Part II, Step 4

## Preamble
This homework will require some googling. As a software engineer, a lot of what you'll need to do is express what you're TRYING to do, and then read code and documentation in order to achieve it. Remember: StackOverflow and Mozilla Developer Network (MDN) are your friend!

## Part I: Setting Up Your GitHub
1. Using the Terminal, navigate to your git repository: `$ cd /path/to/mmart-168-fall2017`
2. Check out the master branch: `$ git checkout master`
3. Pull the most recent changes from the upstream repository: `$ git pull --rebase upstream master`
4. Create a new branch to do Homework 5: `$ git branch homework05`
5. Checkout your new branch: `$ git checkout homework05`
6. Verify that you are now on the new branch: `$ git branch` (check that your new branch has an asterik next to it).

## PART II: Reading response
Link to article: https://blog.pragmatists.com/top-10-es6-features-by-example-80ac878794bb
Title: Top 10 ES6 Features by Example

I was reminded of my undergraduate days where my graduate friend lamented over their qualifying exams on top of the preparations of choosing a field of study. They would read one page journal entries, and developed an allergy to the word, "obviously," for some parts were not obvious to them. For example, a paragraph would take them a whole day to parse through.
This memory came to mind because I challenged myself to read through articles in JavaScript Weekly/FrontEndFocus that had
unfamiliar titles.

ES6/ECMAScript 6 is apparently a widely-known implementation in standardizing Javascript, and was developed by teams
from Netscape (throwback!). ES6 is certainly relevant to what we're learning now, along with a sneak peek of what I hope we'll learn.
There were something that cleared up confusion over some syntax, some that confused me even more, and some that I could somewhat grasp.

Overall this article motivated me to Google define unfamiliar keywords, and ponder on why helper functions were created. I think the idea is, to make language less the setup, and more intuitive. This is so that developers are able to build faster, moreso than write up code with many repetitions. Below, I've made note on some of the items I stopped at to either Google, or think about.

On the article's example 1, I found to have my understanding of var, const, and let not as solid as I would have thought. My perception
of var was that is was more "flexible" than const & let. However, terminology suggests that seeing things in terms of function scope, and block scope would deem more fruitful when conversing with other developers or those in tech. However, I don't think I have the idea
of scope at full capacity. A quick 5 minute run through on scope would be helpful! I had imagined scope to be like goggles. I have perceived function scope as a wider capacity for usage versus block.

I look forward to learning more about, or exploring template strings. This may be used for setting up automated emails or notifications!

List 8 is interesting as I'm unsure of what a shallow copy of an array is. I am guessing the copy is not stored in some address?
I'm still finding some trouble grasping the Rest feature based on the example in the article. I do not see Rest method (or call?) in the example. It looks more like a shallow copy!

I hope we run through how to use the Promise since it deals in receiving data after some period of time. It would probably be cool to use this feature for quantifying things in a set amount of time. For instance, view ratings during an entire season of Rick & Morty, or GoT.


## Part III: JavaScript Homework

### Step 1: Reverse a tweet
> Open the following 2 files in Atom:
>  
>  * hw05/part1.html
>  * hw05/scripts/part1.js

Complete the following 2 tasks:

1. Write a function called "reverseText" that takes a single string as an input. It should return that string with all characters reversed (`e.g., "Hello, world" will return "dlrow ,olleH"`).You can test this in the browser by updating the forEach function to reverse every tweet's text
> HINT: This is a common interview question to screen out javascript devs who don't understand the language's native functions. Google around - you might find a good solution for this problem.

Once you've written your reverse text function, write a comment describing how it works.

2. Now, write a function called "reverseTweet" that takes a single string as an input. If the string contains a hashtag (#), it should return the string. If it doesn't contain a hashtag, it should return the string with all characters reversed. Update the forEach function so that it reverses tweets that don't have hashtags
> HINT: Strings have a useful function called [indexOf]((https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)) that you may find useful
> HINT: You already have a reverseText function laying around...

### Step 2: Filtering Data
> Open the following 2 files in Atom:
>  
>  * hw05/part2.html
>  * hw05/scripts/part2.js

Complete the following task:

1. Create a new variable called tweetsWithHashtags
2. Call the "filter" function on the json.statuses array. The filter function returns an array, so you can assign the resulting array to the `tweetsWithHashtags` variable. Read more about filter here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
3. Write an anonymous function that checks each tweet's text, and filters out tweets that do NOT have hashtags.
4. Update the forEach function so that it runs on the new tweetsWithHashtags array

### Step 3: Submit Your Homework via GitHub + Moodle
This week, you're going to submit your homework using GitHub. To do so:

1. Just as in Step three, open your Terminal and type: `$ git status`. It should tell you which file you've changed.
2. To "commit" all of your changes, type: ` $ git commit -am 'Homework 5 updates'`
3. To "push" your change to up to your github account, type: `$ git push`
4. Finally, verify that your changes are up on GitHub by logging into your GitHub account and taking a look.
5. **Submit your homework by pasting a link to your branch into the Moodle.**
