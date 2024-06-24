import { Check } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Profile = () => {
  return (
    <div className="card max-w-sm mx-auto">
      <div className="card-body">
        <h3 className="card-title">Edit profile</h3>
        <div className="py-4 space-y-2">
          <div className="flex items-center justify-center">
            <div className="avatar">
              <div className="w-28 bg-base-300 rounded-full">
                <Image
                  src={'https://dummyjson.com/icon/iqbalfarhan/150'}
                  alt="df"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>
          <input placeholder="Full name" />
          <input placeholder="Email address" />
          <input placeholder="Password" />
        </div>
        <div className="card-actions">
          <button className="btn btn-primary">
            <Check className="size-5" />
            <span>Simpan</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
