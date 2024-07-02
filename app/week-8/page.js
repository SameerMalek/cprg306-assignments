"use client";
import React, { useState } from 'react';
import { useUserAuth } from './_utils/auth-context';

const UserProfile = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSignIn = async () => {
    setLoading(true);
    setError(null);
    try {
      await gitHubSignIn();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    setLoading(true);
    setError(null);
    try {
      await firebaseSignOut();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-black">Welcome!</h1>
        {user ? (
          <>
            <p className="text-lg text-black">
              {user.displayName} ({user.email})
            </p>
            <a
              href="/week-8/shopping-list"
              className="text-blue-500 hover:text-blue-700 transition duration-300"
            >
              Continue Shopping...
            </a>
            <button
              onClick={handleSignOut}
              className="mt-4 w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
              disabled={loading}
            >
              {loading ? 'Signing Out...' : 'Sign Out'}
            </button>
          </>
        ) : (
          <>
            <p className="text-lg mb-4 text-black">Please sign in with GitHub.</p>
            <button
              onClick={handleSignIn}
              className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
              disabled={loading}
            >
              {loading ? 'Signing In...' : 'Sign In with GitHub'}
            </button>
          </>
        )}
        {error && <p className="mt-4 text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default UserProfile;
