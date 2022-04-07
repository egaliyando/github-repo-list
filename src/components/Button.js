import React from 'react';

function Button({ children, action }) {
  return (
    <button onClick={action} className="bg-slate-800 text-white p-3 rounded-md ml-3">
      {children}
    </button>
  );
}

export default Button;
