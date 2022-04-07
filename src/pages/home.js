import axios from 'axios';
import React, { useState } from 'react';
import Button from '../components/Button';
import List from '../components/List';
import SearchBar from '../components/SearchBar';

function Home() {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [keyword, setKeyword] = useState('');

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const users = await axios.get(`https://api.github.com/users/${keyword}`);
      const repos = await axios.get(`https://api.github.com/users/${keyword}/repos`);
      console.log(users);
      console.log(repos);
      setIsLoading(false);
      setData(repos.data);
    } catch (error) {
      if (error.response.status === 404) {
        setStatus('not_found');
        setIsLoading(false);
      }
    }
  };
  console.log(status);

  return (
    <div>
      <div>
        <div className="flex items-center">
          <SearchBar onSearch={(e) => setKeyword(e.target.value)} value={keyword} />
          <Button action={fetchData}>Search</Button>
        </div>
        {isLoading ? 'Loading' : <List repos={data} />}
      </div>
    </div>
  );
}

export default Home;
