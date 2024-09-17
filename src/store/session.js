import React, { useState, useEffect } from 'react';

export const useSession = () => {
  const [session, setSession] = useState(null);


  
  useEffect(() => {
    // Check if a session token exists in local storage
    const sessionToken = localStorage.getItem('sessionToken');
    if (sessionToken) {
      setSession(sessionToken);
    }
  }, []);

  const createSession = (token) => {
    localStorage.setItem('sessionToken', token);
    setSession(token);
  };

  const destroySession = () => {
    localStorage.removeItem('sessionToken');
    setSession(null);
  };



  return {
    session,
    createSession,
    destroySession,
  };
};

