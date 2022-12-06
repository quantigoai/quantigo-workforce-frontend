import React from 'react'
import {authentication} from './firebase-config';
import {FacebookAuthProvider, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';

export const GoogleLogin = () => {
  const signInWithFacebook =()=>{
    const provider = new FacebookAuthProvider();
    signInWithPopup(authentication,provider).then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err.message);
      console.log(err.credential)
    })
  }
  const signInWithGoogle =()=>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication,provider).then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err.message);
    })

  }
  return (
    <div>
      <button onClick={signInWithFacebook}> Login with facebook</button>
      <button onClick={signInWithGoogle}> Login with google</button>
    </div>
  )
}
