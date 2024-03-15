import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import Singleproduct from "./Singleproduct";

function App() {
  const [products, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("public/fakeData.json")
      .then((response) => response.json())
      .then((json) => setProduct(json));
  }, []);

  const handleCardButton = (p) => {
    // console.log(p);
    const isExit = cart.find(item=> item.id == p.id);
    if (!isExit) {
      setCart([...cart ,p]);
      
    }else{
      alert("Already Booking Card")
    }
    
  };

  const handleDelete =(id)=>{
    const newBtn = cart.filter(item => item.id !=id)
    setCart(newBtn)
   
  }
  console.log(cart);
  return (
    <>
      <div className="flex justify-around mt-8">
        <div>
          {products.map((pd) => (
            <Singleproduct
              product={pd}
              handleCardButton={handleCardButton}
            ></Singleproduct>
          ))}
        </div>
        <div className="w-80 shadow-2xl bg-white p-4">
          <h1 className="text-3xl font-bold">this is cart</h1>
          <div className="flex justify-around">
            <h1 className="text-2xl font-bold">name</h1>
            <h1 className="text-2xl font-bold">price</h1>
          </div>
          <div >
            {cart.map((item,index) => (
              <div className="flex justify-around  mt-4" >
                <p className="text-2xl font-bold">{index +1}</p>
                <h1 className="text-2xl font-bold">{item.category.slice(0,10)}</h1>
                <h1 className="text-2xl font-bold">{item.price}</h1>
                <button onClick={()=>handleDelete(item.id)} className="bg-gray-200  shadow-xl p-3 hover:bg-slate-400 ">Delete</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
