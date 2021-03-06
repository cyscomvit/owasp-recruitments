

import initFirebase from "./Init";
import { getFirestore  , getDocs, collection} from "firebase/firestore";


const app = initFirebase();
const db = getFirestore(app);

const getAllDocs = async () => {
    
   //loop through collection users
   try{
    const querySnapshot = await getDocs(collection(db,"users"));
    const allDocs = [];
     querySnapshot.forEach(doc => {
         allDocs.push(doc.id);
     }
     );
     return allDocs;
   }
    catch(error){
        return {
            error : "Not Found"
        }
    }
}

export default getAllDocs;