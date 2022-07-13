import React,{useEffect} from 'react'
import { useAppContext } from "../../context/context"


// NavBar Component
function Header() {
    const {state, dispatch } = useAppContext()
  
    useEffect(() => {
        dispatch({type:"light"})
    },[]);
    return (
        <>
          {/* Arka Plan ve Yazı rengini Contextden gelen bilgilere göre değitirildi */}
            <nav className={`navbar ${state.style.headerbg} `}>
                <div className="container-fluid ">
                    <a
                        className={`navbar-brand ${state.style.color}`}
                        href="https://github.com/Soykangrlr"
                        target="_blank"
                    >
                        <i className="fa-brands fa-github"></i>
                        <span > SoykanGrlr</span>
                    </a>
                    <div className="d-flex mode-select">
                      {/* Buttonlar sayrsinde Context'e Dark ve Light Bilgileri göderildi */}
                    <button onClick={()=>dispatch({type:"dark"})} className={state.title==="Light Mode"? "btn btn-outline-dark" :"btn btn-outline-dark show" } ><i class="fa-solid fa-moon"></i></button>
                    <button onClick={()=>dispatch({type:"light"})} className={state.title==="Dark Mode"? "btn btn-outline-light" :"btn btn-outline-light show" } ><i class="fa-regular fa-lightbulb"></i></button>
                    <span className={` ${state.style.color}`}>{state.title}</span>   
                </div>
                </div>
               
            </nav>
        </>
    );
}
export default Header;
