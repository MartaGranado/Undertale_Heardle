const songs = [
    "toby fox - UNDERTALE Soundtrack - 01 Once Upon a Time.mp3",
    "toby fox - UNDERTALE Soundtrack - 02 Start Menu.mp3",
    "toby fox - UNDERTALE Soundtrack - 03 Your Best Friend.mp3",
    "toby fox - UNDERTALE Soundtrack - 04 Fallen Down.mp3",
    "toby fox - UNDERTALE Soundtrack - 05 Ruins.mp3",
    "toby fox - UNDERTALE Soundtrack - 06 Uwa!! So Temperate.mp3",
    "toby fox - UNDERTALE Soundtrack - 07 Anticipation",
    "toby fox - UNDERTALE Soundtrack - 08 Unnecessary Tension.mp3",
    "toby fox - UNDERTALE Soundtrack - 09 Enemy Approaching.mp3",
    "toby fox - UNDERTALE Soundtrack - 10 Ghost Fight.mp3",
    "toby fox - UNDERTALE Soundtrack - 11 Determination.mp3",
    "toby fox - UNDERTALE Soundtrack - 12 Home.mp3",
    "toby fox - UNDERTALE Soundtrack - 13 Home (Music Box).mp3",
    "toby fox - UNDERTALE Soundtrack - 14 Heartache.mp3",
    "toby fox - UNDERTALE Soundtrack - 15 sans..mp3",
    "toby fox - UNDERTALE Soundtrack - 16 Nyeh Heh Heh!.mp3",
    "toby fox - UNDERTALE Soundtrack - 17 Snowy.mp3",
    "toby fox - UNDERTALE Soundtrack - 18 Uwa!! So Holiday.mp3",
    "toby fox - UNDERTALE Soundtrack - 19 Dogbass.mp3",
    "toby fox - UNDERTALE Soundtrack - 20 Mysterious Place.mp3",
    "toby fox - UNDERTALE Soundtrack - 21 Dogsong.mp3",
    "toby fox - UNDERTALE Soundtrack - 22 Snowdin Town.mp3",
    "toby fox - UNDERTALE Soundtrack - 23 Shop.mp3",
    "toby fox - UNDERTALE Soundtrack - 24 Bonetrousle.mp3",
    "toby fox - UNDERTALE Soundtrack - 25 Dating Start!.mp3",
    "toby fox - UNDERTALE Soundtrack - 26 Dating Tense!.mp3",
    "toby fox - UNDERTALE Soundtrack - 27 Dating Fight!.mp3",
    "toby fox - UNDERTALE Soundtrack - 28 Premonition.mp3",
    "toby fox - UNDERTALE Soundtrack - 29 Danger Mystery.mp3",
    "toby fox - UNDERTALE Soundtrack - 30 Undyne.mp3",
    "toby fox - UNDERTALE Soundtrack - 31 Waterfall.mp3",
    "toby fox - UNDERTALE Soundtrack - 32 Run!.mp3",
    "toby fox - UNDERTALE Soundtrack - 33 Quiet Water.mp3",
    "toby fox - UNDERTALE Soundtrack - 34 Memory.mp3",
    "toby fox - UNDERTALE Soundtrack - 35 Bird That Carries You Over A Disproportionately Small Gap.mp3",
    "toby fox - UNDERTALE Soundtrack - 36 Dummy!.mp3",
    "toby fox - UNDERTALE Soundtrack - 37 Pathetic House.mp3",
    "toby fox - UNDERTALE Soundtrack - 38 Spooktune.mp3",
    "toby fox - UNDERTALE Soundtrack - 39 Spookwave.mp3",
    "toby fox - UNDERTALE Soundtrack - 40 Ghouliday.mp3",
    "toby fox - UNDERTALE Soundtrack - 41 Chill.mp3",
    "toby fox - UNDERTALE Soundtrack - 42 Thundersnail.mp3",
    "toby fox - UNDERTALE Soundtrack - 43 Temmie Village.mp3",
    "toby fox - UNDERTALE Soundtrack - 44 Tem Shop.mp3",
    "toby fox - UNDERTALE Soundtrack - 45 NGAHHH!!.mp3",
    "toby fox - UNDERTALE Soundtrack - 46 Spear of Justice.mp3",
    "toby fox - UNDERTALE Soundtrack - 47 Oooh.mp3",
    "toby fox - UNDERTALE Soundtrack - 48 Alphys.mp3",
    "toby fox - UNDERTALE Soundtrack - 49 It's Showtime!.mp3",
    "toby fox - UNDERTALE Soundtrack - 50 Metal Crusher.mp3",
    "toby fox - UNDERTALE Soundtrack - 51 Another Medium.mp3",
    "toby fox - UNDERTALE Soundtrack - 52 Uwa!! So HEATS!!.mp3",
    "toby fox - UNDERTALE Soundtrack - 53 Stronger Monsters.mp3",
    "toby fox - UNDERTALE Soundtrack - 54 Hotel.mp3",
    "toby fox - UNDERTALE Soundtrack - 55 Can You Really Call This A Hotel, I Didn't Receive A Mint On My Pillow Or Anything.mp3",
    "toby fox - UNDERTALE Soundtrack - 56 Confession.mp3",
    "toby fox - UNDERTALE Soundtrack - 57 Live Report.mp3",
    "toby fox - UNDERTALE Soundtrack - 58 Death Report.mp3",
    "toby fox - UNDERTALE Soundtrack - 59 Spider Dance.mp3",
    "toby fox - UNDERTALE Soundtrack - 60 Wrong Enemy !-.mp3",
    "toby fox - UNDERTALE Soundtrack - 61 Oh! One True Love.mp3",
    "toby fox - UNDERTALE Soundtrack - 62 Oh! Dungeon.mp3",
    "toby fox - UNDERTALE Soundtrack - 63 It's Raining Somewhere Else.mp3",
    "toby fox - UNDERTALE Soundtrack - 64 CORE Approach.mp3",
    "toby fox - UNDERTALE Soundtrack - 65 CORE.mp3",
    "toby fox - UNDERTALE Soundtrack - 66 Last Episode!.mp3",
    "toby fox - UNDERTALE Soundtrack - 67 Oh My....mp3",
    "toby fox - UNDERTALE Soundtrack - 68 Death by Glamour.mp3",
    "toby fox - UNDERTALE Soundtrack - 69 For the Fans.mp3",
    "toby fox - UNDERTALE Soundtrack - 70 Long Elevator.mp3",
    "toby fox - UNDERTALE Soundtrack - 71 Undertale.mp3",
    "toby fox - UNDERTALE Soundtrack - 72 Song That Might Play When You Fight Sans.mp3",
    "toby fox - UNDERTALE Soundtrack - 73 The Choice.mp3",
    "toby fox - UNDERTALE Soundtrack - 74 Small Shock.mp3",
    "toby fox - UNDERTALE Soundtrack - 75 Barrier.mp3",
    "toby fox - UNDERTALE Soundtrack - 76 Bergentrückung.mp3",
    "toby fox - UNDERTALE Soundtrack - 77 ASGORE.mp3",
    "toby fox - UNDERTALE Soundtrack - 78 You Idiot.mp3",
    "toby fox - UNDERTALE Soundtrack - 79 Your Best Nightmare.mp3",
    "toby fox - UNDERTALE Soundtrack - 80 Finale.mp3",
    "toby fox - UNDERTALE Soundtrack - 81 An Ending.mp3",
    "toby fox - UNDERTALE Soundtrack - 82 She's Playing Piano.mp3",
    "toby fox - UNDERTALE Soundtrack - 83 Here We Are.mp3",
    "toby fox - UNDERTALE Soundtrack - 84 Amalgam.mp3",
    "toby fox - UNDERTALE Soundtrack - 85 Fallen Down (Reprise).mp3",
    "toby fox - UNDERTALE Soundtrack - 86 Don't Give Up.mp3",
    "toby fox - UNDERTALE Soundtrack - 87 Hopes and Dreams.mp3",
    "toby fox - UNDERTALE Soundtrack - 88 Burn in Despair!.mp3",
    "toby fox - UNDERTALE Soundtrack - 89 SAVE the World.mp3",
    "toby fox - UNDERTALE Soundtrack - 90 His Theme.mp3",
    "toby fox - UNDERTALE Soundtrack - 91 Final Power.mp3",
    "toby fox - UNDERTALE Soundtrack - 92 Reunited.mp3",
    "toby fox - UNDERTALE Soundtrack - 93 Menu (Full).mp3",
    "toby fox - UNDERTALE Soundtrack - 94 Respitet.mp3",
    "toby fox - UNDERTALE Soundtrack - 95 Bring It In, Guys!.mp3",
    "toby fox - UNDERTALE Soundtrack - 96 Last Goodbye.mp3",
    "toby fox - UNDERTALE Soundtrack - 97 But the Earth Refused to Die.mp3",
    "toby fox - UNDERTALE Soundtrack - 98 Battle Against a True Hero.mp3",
    "toby fox - UNDERTALE Soundtrack - 99 Power of -NEO-.mp3",
    "toby fox - UNDERTALE Soundtrack - 100 MEGALOVANIA.mp3",
    "toby fox - UNDERTALE Soundtrack - 101 Good Night.mp3"
];

const audio = document.getElementById("audio");
const playBtn = document.getElementById("play-btn");
const replayBtn = document.getElementById("replay-btn");
const skipBtn = document.getElementById("skip-btn");
const guessForm = document.getElementById("guess-form");
const guessInput = document.getElementById("guess-input");
const guessList = document.getElementById("guess-list");
const guessesDiv = document.getElementById("guesses");
const resultDiv = document.getElementById("result");

let currentSong = songs[Math.floor(Math.random() * songs.length)];
let songName = extractSongName(currentSong);
let currentSeconds = 1;
let attempts = 0;
let maxAttempts = 5;
let revealed = false;

function extractSongName(filename) {
  const parts = filename.split(" - ");
  const lastPart = parts[parts.length - 1];
  return lastPart.replace(/^\d+\s*/, "").replace(/\.mp3$/, "");
}

const autocompleteList = document.getElementById("autocomplete-list");

function loadOptions() {
  guessInput.addEventListener("input", () => {
    const value = guessInput.value.toLowerCase();
    autocompleteList.innerHTML = "";

    const filtered = songs
      .map(extractSongName)
      .filter(name => 
        name.toLowerCase().startsWith(value) && !guessedSongs.has(name)
      );

    filtered.forEach(name => {
      const optionDiv = document.createElement("div");
      optionDiv.textContent = name;
      optionDiv.addEventListener("click", () => {
        guessInput.value = name;
        autocompleteList.innerHTML = "";
      });
      autocompleteList.appendChild(optionDiv);
    });
  });

  guessInput.addEventListener("focus", () => {
    autocompleteList.innerHTML = "";

    const value = guessInput.value.trim().toLowerCase();
    const allNames = songs
      .map(extractSongName)
      .filter(name => !guessedSongs.has(name) &&
        (!value || name.toLowerCase().startsWith(value)));

    allNames.forEach(name => {
      const optionDiv = document.createElement("div");
      optionDiv.textContent = name;
      optionDiv.addEventListener("click", () => {
        guessInput.value = name;
        autocompleteList.innerHTML = "";
      });
      autocompleteList.appendChild(optionDiv);
    });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".autocomplete-container")) {
      autocompleteList.innerHTML = "";
    }
  });
}

function playClip(seconds) {
  audio.src = `songs/${currentSong}`;
  audio.currentTime = 0;
  audio.play();

  setTimeout(() => {
    audio.pause();
  }, seconds * 1000);
}

playBtn.addEventListener("click", () => {
  if (!revealed) playClip(currentSeconds);
});

replayBtn.addEventListener("click", () => {
  if (!revealed) playClip(currentSeconds);
});

const guessedSongs = new Set();

guessForm.addEventListener("submit", e => {
  e.preventDefault();
  if (revealed) return;

  const guess = guessInput.value.trim();
  if (!guess || guessedSongs.has(guess)) {
    guessInput.value = "";
    return;
  }

  guessedSongs.add(guess);

  const guessItem = document.createElement("div");
  guessItem.textContent = guess;

  if (guess === songName) {
    guessItem.className = "correct";
    guessesDiv.appendChild(guessItem);
    resultDiv.innerHTML = `✅ Correct! The song was <strong>${songName}</strong>. Playing full song...`;
    audio.src = `songs/${currentSong}`;
    audio.play();
    revealed = true;
  } else {
    guessItem.className = "incorrect";
    guessItem.textContent += " ✗";
    guessesDiv.appendChild(guessItem);
    attempts++;
    currentSeconds++;
    if (attempts >= maxAttempts) {
      resultDiv.innerHTML = `❌ Out of tries! The song was <strong>${songName}</strong>.`;
      audio.src = `songs/${currentSong}`;
      audio.play();
      revealed = true;
    }
  }

  guessInput.value = "";
  autocompleteList.innerHTML = "";
});


skipBtn.addEventListener("click", () => {
  if (revealed) return;
  attempts++;
  currentSeconds++;
  const skipNote = document.createElement("div");
  skipNote.textContent = "⏩ Skipped";
  guessesDiv.appendChild(skipNote);
  if (attempts >= maxAttempts) {
    resultDiv.innerHTML = `❌ Out of tries! The song was <strong>${songName}</strong>.`;
    audio.src = `songs/${currentSong}`;
    audio.play();
    revealed = true;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  loadOptions();
});

// loadOptions();
