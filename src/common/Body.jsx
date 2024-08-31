import React, { useEffect, useState } from "react";
import Category from "./Category";
import axios from "axios";

function Body({catStustus,setCatstutus,finalProduct,setFinaproduct,cartCount,setCartcount,cartItems,setCartitems}) {
  let [finalcatagory, setFinalcatagory] = useState([]);
  
  let [catName,setCatname]=useState('')

 
  let catagory = () => {
    axios
      .get("https://dummyjson.com/products/category-list")
      .then((res) => res.data)
      .then((finalres) => setFinalcatagory(finalres));
  }
  let getproduct=()=>{
    axios.get('https://dummyjson.com/products')
    .then((prores)=>prores.data)
    .then((finalpro)=>{
      setFinaproduct(finalpro.products)
    })
  }
  let pitem=finalProduct.map((v,i)=>{
    return(
      <Productitem key={i} pdata={v} setCartcount={setCartcount} cartCount={cartCount} cartItems={cartItems} setCartitems={setCartitems} />
    )
  })
  useEffect(() => {
    catagory();
    getproduct();
   
  }, []);
  useEffect(()=>{
    if(catName!='')
      {
        axios.get(`https://dummyjson.com/products/category/${catName}`)
        .then((prores)=>prores.data)
        .then((finalpro)=>{
          setFinaproduct(finalpro.products)
        })
      }
  },[catName])

  return (
    <div className="bg-[#eef3f7] h-full py-5 font-serif">
      <div className="w-[95%] mx-auto">
        <h1 className="text-center text-[40px] mb-[30px]">Our Products</h1>
        <div className="md:grid md:grid-cols-[30%_auto] md:gap-[30px]">
          <div className={`${catStustus ? "": "hidden"} md:block `}>
            <Category finalcatagory={finalcatagory} setCatname={setCatname} catStustus={catStustus} setCatstutus={setCatstutus}/>
          </div>
          <div className={`${catStustus ? "hidden" : ''}  mx-[20px] md:mx-0 grid grid-cols-2 gap-2 md:grid md:grid-cols-3 md:gap-3 md:mt-9 relative`}>
            {finalProduct.length>=1 ? pitem : <h1 className="absolute top-[250px] left-[35%] md:top-[30%] md:left-[50%]">NO Data Found</h1>}
             

            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
function Productitem({pdata,setCartcount,cartCount,cartItems,setCartitems})
{
  let addtoCart=()=>{
    if (!cartItems.some(item => item.id === pdata.id)) {
      let count=1;
      let oldprice=0;
      let updata={...pdata,count,oldprice}
      let newCartit=[...cartItems,updata];
      setCartitems(newCartit)
    }
    else {
        alert("Already added in Cart")
    }
    

  
    console.log(cartItems);
    
  }

  return(
    <div className="shadow-lg hover:shadow-2xl bg-white h-96   md:h-80 text-center overflow-hidden rounded-sm">
    <img
      className="h-[180px] w-[100%]"
      src={`${pdata.thumbnail}`}
      alt=""
    />
    <h3 className="font-serif text-xl h-9 overflow-hidden p-1">{pdata.title}</h3>
    <p>{pdata.price} $</p>
    <div className="flex flex-col md:flex-row w-[60%] mx-auto gap-2 md:space-x-4 mt-7  md:mt-5 ">
      <button onClick={()=>{setCartcount(cartCount+1);addtoCart()}} className="border-[1px] bg-yellow-600 w-full h-10 md:w-20 p-1 text-sm font-semibold inline-block md:whitespace-nowrap rounded-md">
        Add cart
      </button>
      <button className="border-[1px] bg-yellow-600 h-10 w-full md:w-20 p-1 text-sm font-semibold rounded-md">
        Buy
      </button>
    </div>
  </div>
  )
}