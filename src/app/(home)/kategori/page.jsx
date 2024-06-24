'use client';
import React, { useEffect, useState } from 'react';

const Kategori = () => {
  const [data, setData] = useState([]);
  async function fetchData() {
    await fetch('https://dummyjson.com/products/categories')
      .then((response) => response.json())
      .then((data) => setData(data));
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <td>ID</td>
              <td>Slug</td>
              <td>Name</td>
              <td>Url</td>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((product, i) => (
                <tr key={product.slug}>
                  <td>{i + 1}</td>
                  <td>{product.slug}</td>
                  <td>{product.name}</td>
                  <td>{product.url}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Kategori;
