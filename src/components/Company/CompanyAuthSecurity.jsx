import {useEffect} from 'react'
import { signOut,onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from 'react-router-dom';

const CompanyAuthSecurity = () => {
    const navigate = useNavigate();
    useEffect(() => {
    
        onAuthStateChanged(auth, (user) => {
          if (user) {
            if(user.email.includes("@iitism.ac.in")){
                signOut(auth).then(() => {
                    navigate('/');
                    alert("Do not Use IIT ISM mail in Company Profile");
                  }).catch((error) => {
                    // An error happened.
                  });
            }
            
          }
        });
      
      }, [])
}

export default CompanyAuthSecurity;