import React from 'react';

function List({ repos }) {
  return (
    <ul>
      {repos.length
        ? repos.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })
        : 'Not Found'}
    </ul>
  );
}

export default List;
