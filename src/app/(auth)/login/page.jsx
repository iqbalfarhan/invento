'use client';
import { LogIn } from 'lucide-react';
import React from 'react';

const Login = () => {
  return (
    <div className="card max-w-sm">
      <form className="card-body">
        <h3 className="card-title">ini halaman login</h3>
        <div className="py-4 space-y-2">
          <input type="text" className="input" placeholder="email address" />
          <input type="password" className="input" placeholder="password" />
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
