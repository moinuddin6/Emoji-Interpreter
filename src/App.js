import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "Sad",
  "🥡": "takeout-box",
  "❤️": "Love",
  "🐴": "Horse",
  "🍎": "Apple",
  "🍇": "Grapes",
  "😑": "annoyance",
  "⚽": "Football",
};

var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }

    //  console.log(meaning);
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    console.log(emoji);
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>
        <span style={{ color: "#815CB3" }}>Emoji-Interpreter</span>
      </h1>
      <input onChange={emojiInputHandler} />
      <h2>
        <span style={{ color: "red" }}> Meaning</span> {meaning}{" "}
      </h2>

      <h3>
        <span style={{ color: "purple" }}>Emojis</span> We Know{" "}
      </h3>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.3rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

/**
 * things to notice
 * class --> className
 * style --> takes an object {{}} instead of string ""
 *
 * VISER --, View -> Interact -> State in Event handler
 * -> Render(putting something on the screen)
 */
