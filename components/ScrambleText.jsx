"use client";

import { useEffect, useState, useRef } from "react";

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function ScrambleText({ text, className = "" }) {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef(null);

  useEffect(() => {
    // Start with fully scrambled text
    setDisplayText(
      text.split("").map(char => char === " " ? " " : CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)]).join("")
    );
    
    let iteration = 0;
    
    intervalRef.current = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            if (letter === " ") return " ";
            return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
        setDisplayText(text);
      }

      iteration += 1 / 3;
    }, 30);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text]);

  return <span className={className}>{displayText}</span>;
}
