import firebaseAdminInstance, {firebaseSdk} from '../config/firebase-config';
import IAuthProvider from "./iauth-provider";
import AuthProvider from "./auth-provider";


export default ():IAuthProvider => {
    return new AuthProvider(firebaseAdminInstance.auth(), firebaseSdk.auth())
}
