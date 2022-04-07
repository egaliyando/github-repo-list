import React from 'react';

function List({ repos }) {
  return (
    <ul style={{ height: '50rem' }} className="overflow-y-scroll">
      {repos.length
        ? repos.map((item) => {
            return (
              <a key={item.id} target="_blank" href={item.clone_url} rel="noreferrer">
                <div className="pt-5">
                  <li className="border-t pt-5 border-slate-300 text-blue-500 font-semibold">{item.name}</li>
                  <div className="flex items-center mt-2">
                    <span className={`text-sm text-orange-500 font-semibold ${item?.language && 'mr-3'}`}>{item?.language}</span>
                    <span className="text-sm bg-white border border-slate-400 text-slate-500 rounded-full py-1 px-3">
                      {item?.visibility}
                    </span>
                  </div>
                </div>
              </a>
            );
          })
        : 'Not Found'}
    </ul>
  );
}

export default List;
