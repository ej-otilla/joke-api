heading.textContent = "Joke Of The Day 😹"
joke.textContent = "Loading..."

// Joke Of The Day

fetch("https://v2.jokeapi.dev/joke/Any?safe-mode")

.then(response => response.json())
.then(data => {
    console.log(data)
    if (data.type === "single") {
        joke.textContent = data.joke;
      }
      else if (data.type === "twopart") {
        joke.textContent = data.setup + " ... " + data.delivery;
      }
});

// Jokes By Category

function getJoke(category, emoji) {
  if (category === "Pun") {
    heading.textContent = `A Random ${category} ${emoji}`;
  }
  else {
    heading.textContent = `A Random ${category} Joke ${emoji}`;
  }

  fetch(`https://v2.jokeapi.dev/joke/${category.toLowerCase()}?safe-mode`)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      if (data.type === "single") {
        joke.textContent = data.joke;
      }
      else if (data.type === "twopart") {
        joke.textContent = data.setup + " ... " + data.delivery;
      }
    })
}

christmas.addEventListener('click', function() {
  getJoke("Christmas", "🎅");
});

programming.addEventListener('click', function() {
  getJoke("Programming", "💻");
});

spooky.addEventListener('click', function() {
  getJoke("Spooky", "👻");
});

pun.addEventListener('click', function() {
  getJoke("Pun", "🤭");
});

misc.addEventListener('click', function() {
  getJoke("Miscellaneous", "🤔");
});