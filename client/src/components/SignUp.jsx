import React, { useState, useReducer } from 'react';

const SignUp = (props) => {
  // Add and initialize state for your form. Your state should include username, password, passwordConfirm, and valid properties.
  const iState = {
    username: '',
    password: '',
    passwordConfirm: '',
    valid: false,
    displayedMessage: '',
    passwordLength: false
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'username':
        return { ...state, username: action.payload };

      case 'password':
        return { ...state, password: action.payload };

      case 'passwordConfirm':
        return { ...state, passwordConfirm: action.payload };

      // case 'password_length':
      //   return password.value.length > 7
      //     ? {
      //         ...state,
      //         passwordLength: true,
      //         displayedMessage: 'Password meets requirements.'
      //       }
      //     : {
      //         ...state,
      //         passwordLength: false,
      //         type: 'valid',
      //         displayedMessage: 'Password must be 7 characters'
      //       };

    //   case 'valid':
    //     return password.value === passwordConfirm.value
    //       ? {
    //           ...state,
    //           valid: true,
    //           displayedMessage: 'You are signed in.'
    //         }
    //       : {
    //           ...state,
    //           valid: false,
    //           displayedMessage: 'Your passwords do not match.'
    //         };

      case 'clear_message':
        return {
          ...state,
          username: '',
          password: '',
          passwordConfirm: '',
          valid: false,
          displayedMessage: ''
        };

      default:
        return state;
    }
  };

  // function validPassword() {
  //   dispatch({ type: 'valid' });
  // }

  const [state, dispatch] = useReducer(reducer, iState);

  const submitMessage = (e) => {
    e.preventDefault();
    dispatch({ type: 'valid' });
  };

  const clearMessage = (e) => {
    // e.preventDefault();
    dispatch({ type: 'clear_message' });
  };

  return (
    <div className="SignUp_container">
        

      {/*Add a method for handling each input's onChange event.*/}

      <form onSubmit={submitMessage}>

      <h1>Let's get to know each other</h1>
        {/*USERNAME INPUT*/}
        <input
        className=""
          type="text"
          placeholder="Username"
          id="username"
          value={state.username}
          onChange={(e) =>
            dispatch({ type: 'username', payload: e.target.value })
          }
        />
        <label htmlFor="username">Username</label>

        {/*PASSWORD INPUT*/}
        <input
         className="signUpForm"
          type="password"
          placeholder="Password"
          id="password"
          value={state.password}
          onChange={(e) =>
            dispatch({
              type: 'password',
              payload: e.target.value
            })
          }
        />
        <label htmlFor="password">Password</label>

        {/* CONFIRM PASSWORD INPUT */}
        <input
         className="signUpForm"
          type="password"
          placeholder="Confirm password"
          id="passwordConfirm"
          value={state.passwordConfirm}
          onChange={(e) =>
            dispatch({
              type: 'passwordConfirm',
              payload: e.target.value
            })
          }
        />
        <label htmlFor="passwordConfirm">Confirm password</label>

        {/*SUBMIT BUTTON & PW MUST MATCH MSG */}
        <button type="submit">Sign Up</button>
        <button className="cancel" type="button" onClick={clearMessage}>
          Cancel
        </button>
        <p>{state.displayedMessage}</p>
      </form>
    </div>
  );
};

export default SignUp;
