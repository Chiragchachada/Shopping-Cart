import React from "react";
import { Link } from "react-router-dom";
    


export default function Header(props){
    return(
        
     <div className=" bg-blue-500 flex  header p-4 text-white text-3xl">
         <div className="w-full flex">
             
            <div className="w-full  text-center ">
                
                <span><Link className="main-link" to="/">Shopping Cart</Link></span>
                
                </div>
            
            <div className="flex text-xl ">
                <Link className="nav-link" to="/Cart">
            <span ite className="material-icons  p-2 w-full float-right -10" >shopping_cart</span>
            </Link>
            <span>{props.cart.length}</span>
            </div>
            
           
        </div>
            
   
         
     </div>
            
        
    )
}