'use client';
import React, { useEffect, useState } from 'react';

const Barang = () => {
  const [data, setData] = useState([]);
  async function fetchData() {
    await fetch('http://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => setData(data.products));
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
              <td>Title</td>
              <td>Category</td>
              <td>Price</td>
              <td>Rating</td>
              <td>Stok</td>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((product, i) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.title}</td>
                  <td>{product.category}</td>
                  <td>{product.price}</td>
                  <td>{product.rating}</td>
                  <td>{product.stock}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Barang;
