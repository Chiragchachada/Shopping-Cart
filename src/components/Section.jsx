import React from "react";
export default function Shop(props){

  

      
    function RenderProduct(){
        return props.products.map((product, index)=>{
return (

    <div className="p-4  m-4" >

       <div className="card border-2  rounded  shadow-2xl p-2 w-72 " key={index}>
        <img  src={product.imgSrc} className="card-img-top h-80 w-72 bg-gray-400" alt="..."/>
        <div className="card-body text-left	">
          <h5 className="card-title mt-4 font-semibold text-2xl"> {product.title}</h5>
          <p className="card-text mt-4 h-20 ">{product.desc}</p>
          <div className="flex">
          <p className="mt-4">Price:{product.offerprice}</p>
          <p className="line-through mt-4 ml-3 text-sm text-gray-400 pt-1">Rs.{product.price}</p>
          </div>
        </div>
        <div className="text-white flex justify-center text-semibold">
        <button className="border-2  item-center bg-blue-500 text-xl m-4 py-2 px-4" onClick={()=>props.addToCart(product)} >Add to Cart</button>

        </div>
      </div>
        </div>)
        }
       )
        }
    

    return(
        <div className="grid grid-cols-3  gap-8">
         <RenderProduct />
        </div>
    )
}