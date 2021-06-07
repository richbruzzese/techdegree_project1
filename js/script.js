/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
Array of objects to store quotes. Properties to store quote, source, along with  citation and year(where applicable)
***/
let quotes=[{
  quote:'The journey of a thousand miles begins with one step.',
  source:'Lao Tzu',
  citation:'Dao De Jing',
},
{
  quote:'That which does not kill us makes us stronger',
  source:'Friedrich Nietzsche',
  citation:'Twilight of the Idols',
  year:'1888'
},{
  quote:'Life is what happens when you’re busy making other plans.',
  source:'John Lennon',
  citation:'Beautiful Boy',
  year: 1981
},{
  quote:'The greatest glory in living lies not in never falling, but in rising every time we fall.',
  source:'Nelson Mandela',
},{
  quote:'The way to get started is to quit talking and begin doing',
  source:'Walt Disney'
},{
  quote:'Don\'t judge each day by the harvest you reap but by the seeds that you plant.',
  source:'Robert Louis Stevenson',
},
{
  quote:'"Tell me and I forget. Teach me and I remember. Involve me and I learn.',
  source:'Benjamin Franklin',
},
{
  quote:'It is during our darkest moments that we must focus to see the light.',
  source:'Aristotle',
},
{
  quote:'Whoever is happy will make others happy too.',
  source:'Anne Frank',
},
{
  quote:'Life is either a daring adventure or nothing at all.',
  source:'Hellen Keller',
},
{
  quote:'You only live once, but if you do it right, once is enough.',
  source:'Mae West',
},
{
  quote:'Some infinities are greater than others',
  source:'John Green',
  citation: 'The Fault in Our Stars',
  year: 2012
},
{
  quote:'Grief doesn\'t change you, it reveals you',
  source:'John Green',
},
{
  quote:'A short pencil is better than a long memory',
  source:'Unknown',
},
{
  quote:'Count your blessing, and not your problems',
  source:'Unkown',
},
{
  quote:'A reader lives a thousand lives before he dies. The man who never reads only lives once',
  source:'George R R Martin',
},
{
  quote:'Anything is possible. Anything can be',
  source:'Shel Silverstein',
},
{
  quote:'When you look at someone through rose-colored glasses, all the red flags just look like flags',
  source:'Wanda Pierce',
  citation: 'Bojack Horseman',
  year: 2015
},

]


/***
 * `getRandomQuote` function
***/
function getRandomQuote (){
  let randomNumber = Math.floor(Math.random() * quotes.length )
  let randomQuote = quotes[randomNumber]
  return randomQuote
}
console.log(getRandomQuote());



/***
 * `printQuote` function
***/


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);