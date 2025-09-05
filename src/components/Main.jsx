import React from "react";

function Main() {
  return (
    <main>
      <form>
        <input className="input-bar" aria-label="Add ingredient" placeholder="e.g. oregano" />
        <button className="input-btn">+ Add ingredient</button>
      </form>
    </main>
  );
}

export default Main;
