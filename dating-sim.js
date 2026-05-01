// ===== STORY DATA =====
const story = {
  start: {
    name: "Mussolini",
    image: "../images/mussolini.png",
    text: "Hey... fancy meeting you here, comrade.",
    choices: [
      { text: "Hello comrade", next: "hi" },
      { text: "Pretend you didn't see him", next: "mysterious" }
    ]
  },

  hi: {
    name: "Mussolini",
    image: "../images/mjussolini.png",
    text: "Nice day for fascism, huh? : )",
    choices: [
      { text: "Tell him how sexy you find public executions", next: "compliment" },
      { text: "Ask him why he isn't giving a spirited speech right now", next: "ask" }
    ]
  },

  mysterious: {
    name: "Mussolini",
    image: "../images/mussolini.png",
    text: "Um. We literaLLY made eye contact.",
    choices: [
      { text: "Keep pretending not to see him", next: "weird" },
      { text: "Oh sorry, I thought you were a bald homeless man", next: "hi" }
    ]
  },

  compliment: {
    name: "Mussolini",
    image: "../images/mussolini.png",
    text: "O-Oh... Is that so? (he starts to blush)",
    choices: [
      { text: "Ask him to go on a walk in the Italian countryside", next: "goodEnd" }
    ]
  },

  ask: {
    name: "Mussolini",
    image: "../images/mussolini.png",
    text: "Why are you asking so many questions? Building a file on me? Collecting data to feed my enemies?!",
    choices: [
      { text: "Turn in your own mother for clemency", next: "goodEnd" },
      { text: "I'll watch your body hang from the piazza some day, you bastard", next: "badEnd" }
    ]
  },

  weird: {
    name: "Mussolini",
    image: "../images/mussolini.png",
    text: "Well, time to go execute some pedestrians, I guess.",
    choices: [
      { text: "Restart", next: "start" }
    ]
  },

  goodEnd: {
    name: "Mussolini",
    image: "../images/mussolini.png",
    text: "You stroll the Italian countryside until you are captured and hung by the partisans",
    choices: [
      { text: "Play again", next: "start" }
    ]
  },

  badEnd: {
    name: "Mussolini",
    image: "../images/mussolini.png",
    text: "You are hung from the Piazza and die like a dog",
    choices: [
      { text: "Try again", next: "start" }
    ]
  }
};

// ===== DISPLAY FUNCTION =====
function showScene(sceneName) {
  const scene = story[sceneName];

  // Update character
  document.getElementById("character-name").textContent = scene.name;
  document.getElementById("character-img").src = scene.image;

  // Update dialogue
  document.getElementById("dialogue").textContent = scene.text;

  // Clear old choices
  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  // Add new choices
  scene.choices.forEach(choice => {
    const button = document.createElement("button");
    button.textContent = choice.text;

    button.onclick = () => {
      showScene(choice.next);
    };

    choicesDiv.appendChild(button);
  });
}

// ===== START GAME =====
showScene("start");
