import * as admin from 'firebase-admin';
import * as firebase from 'firebase';

export const firebaseSdk = firebase.default

export default admin.initializeApp();
