import React from 'react';

const Greet = (props) => {
  console.log('🚀 ~ file: greet.js:4 ~ Greet ~ props:', props);
  return (
    <div>
      <h1>
        Greet {props.name} aka {props.heroName}
      </h1>
      {props.children}
    </div>
  );
};

export default Greet;
