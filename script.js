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