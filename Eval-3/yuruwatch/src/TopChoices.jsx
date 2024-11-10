// TopChoices.jsx
import React from 'react';

function TopChoices() {
  return (
    <section className="editor">
      <h1>Editor's Top Choices</h1>
      <div className="scroll">
        <h1>#1</h1>
        <div>
          <a href="code_preview.html">
            <img src="./slider9.jpg" alt="Spy X Family" />
          </a>
          <div className="img-over">
            <h4>Spy X Family</h4>
            <p>Generes: Action, Spy comedy</p>
            <p>First episode date: 9 April 2022</p>
            <div className="qqc"><a href="#">Watch Now</a></div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default TopChoices;
