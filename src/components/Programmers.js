/*
PROGRAMMERS Instructions

Watch this short video:
https://tk-assets.lambdaschool.com/1ea6e6a2-2ef1-45de-bcab-b99a8f775870_programmers.gif

This component keeps track of a list of pioneers in the field of programming on the one hand,
and the id of the currently celebrated programmer on the other. That's two slices of state!
We can only feature one awesome programmer at a time.

Find comments below to help you along.
*/

import React, { useState } from "react";

// Use this variable ONLY to initialize a slice of state!
// There is something in the JSX right now breaking this rule.
const listOfAwesome = [
  { id: "1", name: "Ada Lovelace" },
  { id: "2", name: "Grace Hopper" },
  { id: "3", name: "Evelyn Boyd Granville" },
  { id: "4", name: "Mary Kenneth Keller" },
  { id: "5", name: "Frances Allen" },
  { id: "6", name: "Carol Shaw" },
];

export default function Programmers() {
  // We'll have to use the state hook twice, as we need two slices of state.
  // The programmers on the one hand, and the id of the featured programmer on the other.

  const getNameOfFeatured = () => {
    // This is not an event handler but a helper function. See its usage below.
    // It's going to need information from both slices of state!
    // Using the currently celebrated id, find inside the programmers slice of state
    // the _name_ of the currently celebrated programmer, and return it.
  };

  const style = {
    fontSize: "1.5em",
    marginTop: "0.5em",
    color: "royalblue", // 🤔

  };

  return (
    <div className="widget-programmers container">
      <h2>Programmers</h2>
      <div className="programmers">
        
        {/* Nasty bug! We should map over a slice of state, instead of 'listOfAwesome'.
          We might say: "it works, though!" But if the list of programmers is not state,
          we could never add or edit programmers in the future. The list would be a static thing. ;)" */}
      </div>
      <div>
        {/* // Ternaries are fantastic to render "one thing or the other" depending
        on the "truthiness" of something. // Pseudo-code: if the currently
        featured id is truthy render div 1, otherwise render div 2. Fix! */}
      </div>
    </div>
  );
}
