import { auth } from './firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';

export const doCreateUserWithEmailAndPassword = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
}

export const doPasswordReset = async (email) => {
    return sendPasswordResetEmail(auth, email);
}

export const doPasswordChange = async (password) => {
    return updatePassword(auth.currentUser, password);
}

export const doSendEmailVerification = () => {
    return sendEmailVerification(auth.currentUser, { 
        url: `${window.location.origin}/home`,
    });
}

export const sendPasswordResetEmail = (email) => {
    return sendPasswordResetEmail(auth, email);
}

export const updatePassword = (password) => {
    return updatePassword(auth.currentUser, password);
}
