import React from 'react';

function Button({ children, action }) {
  return (
    <button onClick={action} className="bg-slate-800 text-white">
      {children}
    </button>
  );
}

export default Button;
