import React,{ useState } from 'react'
import './App.css'
import Header from './components/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import data from './components/Shoppingdata'
import Shop from './components/Section'
import Cart from './components/Cart'
function App() {


  const [products] = useState(data); 
  const [cart , setCart] = useState([]);

  const addToCart = (product)=> {
    setCart([...cart, product]);
  };


  const removeFromCart = ((productToRemove)=>{
     setCart(cart.filter((product) => product !== productToRemove))
   })

  
   

  return (
    <div className="App">

<Router>
  
          <Header cart={cart} />
          <Switch>
           
          <Route exact path="/" render={()=>(
              <Shop products={products} addToCart={addToCart}/>
            )} />

            

            <Route path="/Cart" render={()=> <Cart   cart={cart} removeFromCart={removeFromCart}/>}/>  
          
          </Switch>
        </Router>
      
      </div>

      




  )
}

export default App
