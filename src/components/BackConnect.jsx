import React, { useState, useEffect } from 'react';

const BackConnect = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  return (
    <>
      <div>{data.name}</div>
      <div>{data.age}</div>
    </>
  );
};

export default BackConnect;