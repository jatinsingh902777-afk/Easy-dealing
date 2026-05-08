// Updated app with Firebase Firestore integration
// Features:
// - Firebase Firestore saves submitted properties in 'properties' collection
// - Fetch and display saved properties
// - Property submit form saves data to Firestore
// - Property listing fetches from Firestore
// - Authentication ready (Email/Password)
// - Image URL support

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function saveProperty(propertyData) {
  try {
    const docRef = await addDoc(collection(db, 'properties'), propertyData);
    return docRef.id;
  } catch (error) {
    console.error('Error saving property:', error);
  }
}

export async function getProperties() {
  const querySnapshot = await getDocs(collection(db, 'properties'));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export { db, collection, addDoc, getDocs };
