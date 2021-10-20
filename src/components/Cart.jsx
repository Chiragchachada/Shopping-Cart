import React from "react";


export default function Cart(props){
console.log("cart", props);

function RenderCart(){
    

    return props.cart.map((product, index)=>
            <div className="h-64 mt-4 grid grid-rows-3 grid-flow-col gap-4" key={index}>    
            <div className="flex flex-row justify-between border-gray-400 shadow-lg h-52 mx-16">
            <div className="h-44 w-44 bg-gray-300 mt-4 ml-4">
            <img className="h-40 w-40 mt-2" src={product.imgSrc} alt="image"/>    
            </div>
            <div className="w-80 p-8">                  
                <h3 className="title text-red-400 font-semibold">{product.prodtitle}</h3>   
                <p className="item-desc">{product.desc}</p>  
                <p className="price font-bold">Price: Rs.{product.price}</p>
            </div> 
            <div className="py-20 pr-16">
                <button 
                className="rmvbtn bg-red-500 shadow-lg text-white py-2 px-6 shadow rounded-sm"
                onClick={()=> props.removeFromCart(product)}
                >REMOVE</button>
            </div>
            </div>

            </div>
        )
     } 
        
        






    return(
       <div>
            <div className="flex justify-center text-2xl m-2">You Have Ordered</div>
       <div className="  ">
           <RenderCart/>
         </div>
       </div>
    )
}   