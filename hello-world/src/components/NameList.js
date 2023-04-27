import React from 'react';

function NameList() {
  const names = ['Bruce', 'Clark', 'Diana', 'Bruce'];
  const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>);
  return (
    <div>
      {nameList}
      {/* <h2>{names[0]}</h2>
      <h2>{names[1]}</h2>
      <h2>{names[2]}</h2> */}
    </div>
  );
}

export default NameList;
