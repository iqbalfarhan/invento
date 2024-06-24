'use client';

import { useFormik } from 'formik';
import { LogIn } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (value) => {
      console.log(value);
    },
  });

  return (
    <div className="card max-w-sm">
      <form className="card-body" onSubmit={formik.handleSubmit}>
        <h3 className="card-title">ini halaman login</h3>
        <div className="py-4 space-y-2">
          <input
            type="text"
            placeholder="email address"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="card-actions">
          <button className="btn btn-primary">
            <LogIn className="size-5" />
            <span>Masuk</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
