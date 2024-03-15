

const Singleproduct = ({product,handleCardButton}) => {
    const {price,description,image,category} = product;
    return (
        <div>
           <div  className="w-72 text-center border-4 p-4 mb-6">
         <img
            className="w-28 mx-auto"
            src={image}
            alt=""
          />
          <h1 className="text-2xl font-bold mb-4">{category}</h1>
          <p className="mb-4">
           {description}
          </p>
          <div className="flex justify-around items-center">
            <h4>{price}$</h4>
            <button onClick={(e)=> handleCardButton(product)} className="bg-gray-200 shadow-xl p-3 hover:bg-slate-400 rounded-2xl">
              Add Cart
            </button>
          </div>
         </div>
            
        </div>
    );
};

export default Singleproduct;