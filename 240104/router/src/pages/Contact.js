import React from 'react'
import { useNavigate } from 'react-router-dom';

function Contact() {
    let navigate = useNavigate();
    return (
        <div><h1>Contact</h1>
            <button onClick={()=>{
                navigate('/');
            }}>홈으로 이동</button>
        </div>
    )
}

export default Contact