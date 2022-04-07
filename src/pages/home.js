import axios from 'axios';
import React, { useState } from 'react';
import Button from '../components/Button';
import List from '../components/List';
import SearchBar from '../components/SearchBar';

function Home() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState('not_found');
  const [isLoading, setIsLoading] = useState(false);
  const [keyword, setKeyword] = useState('');

  const fetchUser = async () => {
    try {
      const users = await axios.get(`https://api.github.com/users/${keyword}`);
      setStatus('found');
      setUser(users.data);
      setIsLoading(false);
    } catch (error) {
      if (error.response.status === 404) {
        setStatus('not_found');
        setIsLoading(false);
      } else {
        setStatus('found');
      }
    }
  };

  const fetchRepo = async () => {
    setIsLoading(true);
    try {
      fetchUser();
      const repos = await axios.get(`https://api.github.com/users/${keyword}/repos`);
      setStatus('found');
      setIsLoading(false);
      setData(repos.data);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="p-5">
        <p className="h-3 mb-7 font-semibold">
          Github Repository List - <span className="h-3 text-slate-500">Github API</span>
        </p>
        <div className="flex items-center">
          <SearchBar
            onPress={(e) => {
              if (e.key === 'Enter') fetchRepo();
            }}
            onSearch={(e) => setKeyword(e.target.value)}
            value={keyword}
          />
          <Button action={fetchRepo}>Search</Button>
        </div>
        {isLoading ? (
          <div className="grid grid-cols-1 text-center p-10 font-semibold text-slate-400">Loading..</div>
        ) : status !== 'not_found' ? (
          <div className="lg:grid lg:grid-cols-3  gap-5 mt-5">
            <div className="p-3 bg-white shadow-lg rounded-lg h-36 mt-5 flex items-center">
              <img className="rounded-full w-20 h-20" src={user?.avatar_url} alt={user?.avatar_url} />
              <div className="ml-3">
                <p className="text-lg">{user?.name}</p>
                <p className="text-md text-slate-600">{user?.bio}</p>
                <p className="text-sm font-semibold">{user?.location}</p>
              </div>
            </div>
            <div className="col-span-2 bg-white shadow-lg rounded-lg px-3">
              {' '}
              <List repos={data} />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 text-center p-10 font-semibold text-slate-400">Not Found</div>
        )}
      </div>
    </div>
  );
}

export default Home;
