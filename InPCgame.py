import tkinter as tk
from tkinter import ttk, messagebox
import os
import random
from pydub import AudioSegment
from pydub.playback import play
import threading

SONG_FOLDER = "songs"
MAX_ATTEMPTS = 5

class HeardleGame:
    def __init__(self, root):
        self.root = root
        self.root.title("Undertale Heardle")

        self.song_list = [f for f in os.listdir(SONG_FOLDER) if f.endswith(".mp3")]
        self.song_map = {f: self.extract_song_title(f) for f in self.song_list}
        self.selected_song = random.choice(self.song_list)
        self.song_title = self.song_map[self.selected_song]
        self.song_path = os.path.join(SONG_FOLDER, self.selected_song)
        self.full_song = AudioSegment.from_mp3(self.song_path)

        self.attempt = 0
        self.listened_duration = 0
        self.guesses = []
        self.guessed_correctly = False

        self.setup_gui()

    def extract_song_title(self, filename):
        # Format: "toby fox - UNDERTALE Soundtrack - 77 ASGORE.mp3"
        title_part = filename.split(" - ")[-1]  # "77 ASGORE.mp3"
        title = os.path.splitext(title_part)[0]  # Remove .mp3
        return title.split(" ", 1)[-1]  # Remove number prefix

    def setup_gui(self):
        self.frame = ttk.Frame(self.root, padding=20)
        self.frame.grid()

        self.status_label = ttk.Label(self.frame, text="🎵 Guess the Undertale song!")
        self.status_label.grid(column=0, row=0, columnspan=2, pady=10)

        self.dropdown_var = tk.StringVar()
        self.dropdown = ttk.Combobox(self.frame, textvariable=self.dropdown_var, state="readonly")
        self.dropdown['values'] = sorted(set(self.song_map.values()))
        self.dropdown.grid(column=0, row=1, padx=5, pady=5)

        self.guess_button = ttk.Button(self.frame, text="Guess", command=self.make_guess)
        self.guess_button.grid(column=1, row=1, padx=5, pady=5)

        self.skip_button = ttk.Button(self.frame, text="Skip", command=self.skip)
        self.skip_button.grid(column=0, row=2, columnspan=2, pady=5)

        self.guess_frame = ttk.Frame(self.frame)
        self.guess_frame.grid(column=0, row=3, columnspan=2, pady=10)

    def play_audio(self, duration):
        def audio_thread():
            segment = self.full_song[:duration * 1000]
            play(segment)
        threading.Thread(target=audio_thread).start()

    def update_guesses(self):
        for widget in self.guess_frame.winfo_children():
            widget.destroy()
        for guess, correct in self.guesses:
            symbol = "✅" if correct else "❌"
            label = ttk.Label(self.guess_frame, text=f"{guess} {symbol}")
            label.pack()

    def make_guess(self):
        if self.guessed_correctly or self.attempt >= MAX_ATTEMPTS:
            return

        guess = self.dropdown_var.get()
        if not guess:
            messagebox.showwarning("Warning", "Please select a song to guess.")
            return

        self.attempt += 1
        self.listened_duration += self.attempt
        self.play_audio(self.listened_duration)

        if guess.lower() == self.song_title.lower():
            self.guessed_correctly = True
            self.guesses.append((guess, True))
            self.update_guesses()
            self.status_label.config(text=f"🎉 Correct! It was '{self.song_title}'.")
            self.play_audio(int(self.full_song.duration_seconds))
            self.guess_button.config(state='disabled')
            self.skip_button.config(state='disabled')
        else:
            self.guesses.append((guess, False))
            self.update_guesses()
            if self.attempt >= MAX_ATTEMPTS:
                self.status_label.config(text=f"❌ Out of attempts. It was '{self.song_title}'.")
                self.play_audio(int(self.full_song.duration_seconds))
                self.guess_button.config(state='disabled')
                self.skip_button.config(state='disabled')

    def skip(self):
        if self.guessed_correctly or self.attempt >= MAX_ATTEMPTS:
            return

        self.attempt += 1
        self.listened_duration += self.attempt
        self.play_audio(self.listened_duration)

        if self.attempt >= MAX_ATTEMPTS:
            self.status_label.config(text=f"❌ Out of attempts. It was '{self.song_title}'.")
            self.play_audio(int(self.full_song.duration_seconds))
            self.guess_button.config(state='disabled')
            self.skip_button.config(state='disabled')

if __name__ == "__main__":
    root = tk.Tk()
    game = HeardleGame(root)
    root.mainloop()
