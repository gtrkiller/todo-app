import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "./Login";
import { Profile } from "./Profile";

const App = () => {
  const [currentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
        {isAuthenticated ? (
          <>
            <Profile />
          </>
        ) : (
          <LoginButton />
        )}
    </div>
  );
};

export default App;
