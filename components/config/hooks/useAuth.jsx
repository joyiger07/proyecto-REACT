import { auth } from 'firebase/auth';
import { 
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signOut 
} from 'firebase/auth';



export default function useAuth() {
    
   async function login({user, password}) {
        return await signInWithEmailAndPassword(auth, user, password)
    }

   async function loginWithGoogle() {
    
        return await signInWithPopup(auth, new GoogleAuthProvider())
    }

   async function register(user, password) {
        return await createUserWithEmailAndPassword(auth, user, password)
    }

   async function logout() {
        return await signOut(auth)
    }

    function getUserInfo() {
        return auth.currentUser
    }
    return { login, loginWithGoogle, register, logout, getUserInfo }
    
}
