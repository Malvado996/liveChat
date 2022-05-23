import React, { useEffect, useRef, useState } from 'react';
import './App.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
    // your config
    apiKey: "AIzaSyAT32sFduFMe1xBFWjxKj7TsM1cHOrxAkc",
    authDomain: "rowdymoto-db7c1.firebaseapp.com",
    projectId: "rowdymoto-db7c1",
    storageBucket: "rowdymoto-db7c1.appspot.com",
    messagingSenderId: "995766182368",
    appId: "1:995766182368:web:0ef8476d52a0d6be0e0b85",
    measurementId: "G-FCW2SV291F"
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      
      <header>
        <h1>⚛️🔥💬</h1>
        <h2>rowdymoto</h2>
        
      </header>

      <section>

        {user ? <ChatRoom /> : <SignIn />}

      </section>

    </div>
  );
}

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <button onClick={ signInWithGoogle }>sign in with google</button>
  )
}

function SignOut() {
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>sign out</button>
  )
}

function ChatRoom() {
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, {idField: 'id'});

  const [formValue, setFormValue] = useState('');

  const sendMessage = async(e) => {

    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    });

    setFormValue('')
  }

  const dummy = useRef();

  useEffect(() => {
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages])

  return (
    <>
      <div>
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
        <span ref={dummy}></span>
      </div>

      <form onSubmit={sendMessage}>

        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} />

        <button type='submit' >submit</button>
      </form>

      
    </>
  )
}

function ChatMessage(props) {

  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL} alt="" />
      <p>{ text }</p>
    </div>
  )

}

export default App;