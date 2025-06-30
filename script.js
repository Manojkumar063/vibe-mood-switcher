const moods = [
  { text: "Chill 😌", color: "#a3d5ff" },
  { text: "Dark 🌑", color: "#1a1a1a" },
  { text: "Hype 🔥", color: "#ff5e57" },
  { text: "Zen 🌿", color: "#d3f9d8" },
  { text: "Focus 🎧", color: "#272643" },
];

let currentMood = 0;

function changeMood() {
  currentMood = (currentMood + 1) % moods.length;
  const mood = moods[currentMood];

  document.body.style.backgroundColor = mood.color;
  document.getElementById("vibeText").innerText = `Current Mood: ${mood.text}`;
}


