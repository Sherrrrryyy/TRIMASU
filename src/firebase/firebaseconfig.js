import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyDwT_VmNjvcg9I0_AP1dZfIFIvxDoFGDHs",
    authDomain: "my-project-class-53.firebaseapp.com",
    projectId: "my-project-class-53",
    storageBucket: "my-project-class-53.firebasestorage.app",
    messagingSenderId: "675969382798",
    appId: "1:675969382798:web:ec5800d51e3425f36b0cdf"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {
    app,
    db,
    collection,
    addDoc
    

}