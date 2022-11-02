// variables
let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");
// variables of quotes and persons
const quotes = [
  {
    quote: `"When you’re going to change the world, don’t ask for permission."`,
    person: `Victor (Arcane)`,
  },
  {
    quote: `"We Lost Ourselves. Lost Our Dream. In The Pursuit Of Great, We Failed To Do Good."`,
    person: `Victor (Arcane)`,
  },
  {
    quote: `"The Gods envy us. They envy us because we're mortal, because any moment might be our last. Everything is more beautiful because we're doomed. You will never be lovelier than you are now. We will never be here again. "`,
    person: `Achilles`,
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);
  // this up here will randomize our quotes
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
