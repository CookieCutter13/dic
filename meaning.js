import React from "react";
import Synonyms from "./synonyms";

export default function Meaning (props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function(definition, index)
      {
        return (
          <div key={index}>
            <p>Definition : 
              {definition.definition}
              <br />
              <em>definition.example</em>
              <br /> Synonyms :
              <Synonyms synonyms={definition.synonyms} />
            </p>
            </div>
        );
})}
    </div>
  )
}