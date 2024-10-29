import React, { useState, useEffect } from 'react';
import './CodepastsIntro.css';

const CodepastsIntro = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  const handleClick = () => {
    setClicked(true);

    // Scroll or navigate to a specific section
    const section = document.getElementById('target-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`container ${isVisible ? 'visible' : ''} ${clicked ? 'clicked' : ''}`}
      onClick={handleClick}
    >
      <h1 className="heading">INTRODUCING CODEPASTS</h1>
      <p className="description">
      From Brainwaves to Bytewaves – Codepasts: Where Ideas Are Just the Beginning!
      </p>
    </div>
  );
};

export default CodepastsIntro;
