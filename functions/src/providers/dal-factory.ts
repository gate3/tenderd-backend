import IDalProvider from "./idal-provider";
import DalProvider from "./dal-provider";

import firebaseInstance from '../config/firebase-config';


export default ():IDalProvider => {
    return new DalProvider(firebaseInstance.firestore())
}
