import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Api = () => {
  const [api, setApi] = useState([]);

  const fetchApi = async () => {
    const response = await axios.get('/items');
    setApi(response.data)
  }

  useEffect(() => {
    fetchApi();
  }, [])

  useEffect(() => {
    console.log(api)
  }, [api])

  return (
    <section>
      <h1>Tesing API connection</h1>
    </section>
  );
};

export default Api;