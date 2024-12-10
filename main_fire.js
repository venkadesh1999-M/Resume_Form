  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import { getDatabase,ref,set,get,child } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCixAsqF-OnKJfhlMB-2OMBWxyVL5mYZaU",
    authDomain: "resume-project-b1255.firebaseapp.com",
    projectId: "resume-project-b1255",
    storageBucket: "resume-project-b1255.firebasestorage.app",
    messagingSenderId: "310749836829",
    appId: "1:310749836829:web:e830f1650d6cc746f7f8f4"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

//   get ref to database services

const db = getDatabase(app);

document.getElementById("submit").addEventListener("click",function(e){
    set(ref(db,'user/' + document.getElementById("name").value),
    {
        fullname : document.getElementById("name").value,
        email : document.getElementById("email").value,
        Dob:  document.getElementById("dob").value
    });
    alert("Login Successfull !")
})
