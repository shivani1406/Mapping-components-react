import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia.js";

function createCard(contact) {
  return (
    <Entry
      // id={contact.id}
      key={contact.id}
      emoji={contact.emoji}
      name={contact.name}
      meaning={contact.meaning}
      // email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;
