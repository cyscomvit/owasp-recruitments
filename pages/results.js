import { useContext , useState , useEffect } from 'react'
import Results from '../components/Results';
import Login from '../components/Login';
import AppContext from '../context/state'
import styles from "../styles/home/home.module.css";
export default function ResultFunction() {
    
    const value = useContext(AppContext);
    useEffect(() => {
        value.setPageState('results');
    }, [])
   

    return (
        <div style={{ 
            background: "linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(/static/bg.jpg)", 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            minHeight: '92.5vh',
            paddingTop: '70px' }} >
         <h1 style={{textAlign: 'center', marginTop: '30px', fontSize: '3rem', marginBottom: '0em'}}>Results</h1>

        {value.state.user ? <>
        
        <Results user={value.state.user}></Results>
        </> : <Login></Login>}
        </div>
    )
}
