import {createContext, useState, useContext, useEffect} from "react";
import {registerRequest, loginRequest, verifyTokeRequest} from "../api/auth";
import Cookies from 'js-cookie';

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context) throw new Error("There is no AuthProvider");
    return context;
}; 


// eslint-disable-next-line react/prop-types
export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors,setErrors] = useState([]);
    const [loading, setLoading] = useState(true);

    const singup = async (user) => {
        try{
            const response = await registerRequest(user);
            console.log(response.data);
            setUser(response.data);
            setIsAuthenticated(true);
            console.log(response.data);
        } catch (error) {
            console.log(error.response.data);
            setErrors(error.response.data);
        }
    }; 

    const signin = async(user) =>{
        try {
            const res = await loginRequest(user);
            console.log(res);
            setIsAuthenticated(true);
            setUser(res.data);
        } catch (error) {
            if(Array.isArray(error.response.data)){
                return setErrors(error.response.data)
            }
            setErrors([error.response.data.message])
        }
    }

const logout = ()=>{
    Cookies.remove("token");
    setIsAuthenticated(false);
    setUser(null);
}

//TIMEOUT FOR ERRORS
    useEffect(()=>{
        if(errors.length > 0){
            const timer = setTimeout(()=>{
                setErrors([])
            },3000)
            return() => clearTimeout(timer);
        }
    },[errors])

    useEffect(()=>{
        async function checkLogin(){
            const cookies = Cookies.get();
            if(!cookies.token){
                setIsAuthenticated(false);
                setLoading(false);
                return setUser();
            }
                try {
                    const res = await verifyTokeRequest(cookies.token);
                    if(!res.data){
                    setIsAuthenticated(false);
                    setLoading(false);
                    return;
                    }
                    setIsAuthenticated(true);
                    setUser(res.data); 
                } catch (error) {
                    setIsAuthenticated(false);
                    setUser(null);
                    setLoading(false);
                }   
        }
        checkLogin(); 
    },[])


    
    return(
        <AuthContext.Provider value={{singup,signin,logout,loading,user,isAuthenticated,errors}}>
            {children}
        </AuthContext.Provider>
    )
}