import { useState, useEffect } from 'react';
import paginate from './utils';
const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getProducts = async () => {
    const response = await fetch(url);
    const data = await response.json();
    // paginate(data);
    // console.log(paginate(data), 'this is usefetch reurn of paginate');
    setData(paginate(data));
    console.log(paginate(data), 'this is paginate');
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return { loading, data };
};
