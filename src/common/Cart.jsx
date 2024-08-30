import React, { useState } from "react";

function Cart({ cartStutus, setCartstutus,cartItems, setCartitems }) {
  
  let items=cartItems.map((v,i)=>{
    return(
      <Allcart key={i} cartdata={v} cartItems={cartItems} setCartitems={setCartitems}/>
    )
  })
  let deleteallitem=()=>{
    setCartitems([]);
    
  }
  return (
    <div className="relative">
      <div
        className={`bgtransf w-full h-[100vh] z-[1] fixed ${
          cartStutus ? "" : "hidden"
        }`}
      ></div>
      <div
        className={`fixed bg-white w-full md:w-[40%] h-[100vh] z-[1] ${
          cartStutus ? "right-0" : "right-[-100%]"
        }  top-0 duration-500 overflow-y-auto`}
      >
        <div>
          <button onClick={() => setCartstutus(!cartStutus)}>
            <span className="text-5xl p-3">&times;</span>
          </button>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-center mb-2 font-serif font-semibold text-2xl ">
            Your Cart
          </h1>
{/*  */}  {items}
          <button className="bg-yellow-400 mt-14 p-2 w-[30%] mb-3 rounded-md" onClick={()=>deleteallitem()}>Clear All</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
function Allcart({cartdata,cartItems,setCartitems})
{
  let increaseProduct=()=>{
    let newIt=[...cartItems]
    for(let i=0;i<newIt.length;i++)
      {
        
        if(newIt[i].id===cartdata.id && newIt[i].count>=1)
          {
            if(newIt[i].oldprice==0) newIt[i].oldprice=newIt[i].price;
            
            newIt[i].count+=1;
            newIt[i].price+=newIt[i].oldprice;
          }
      }
     setCartitems(newIt);
  }
  let decreaseProduct=()=>{
    let newIt=[...cartItems]
    for(let i=0;i<newIt.length;i++)
      {
        
        if(newIt[i].id===cartdata.id && newIt[i].count>1)
          {
            if(newIt[i].oldprice==0) newIt[i].oldprice=newIt[i].price;
            
            newIt[i].count-=1;
            newIt[i].price-=newIt[i].oldprice;
          }
      }
     setCartitems(newIt);
  }
  let Delteitem=()=>{
    let newitem=cartItems.filter((v,i)=>v.id!=cartdata.id);
    setCartitems(newitem);
  }

  return(
  <div className="grid grid-cols-3 justify-center items-center gap-16 ml-2 mb-2">
  <img
    src={cartdata.thumbnail}
    alt=""
  />
  <div className="ml-7">
    <h2 className="font-semibold">{cartdata.title}</h2>
    <p>{cartdata.price} $</p>
    <p className="text-red-500 cursor-pointer" onClick={()=>Delteitem()}>remove</p>
  </div>
  <div>
    <p><span className="text-2xl" onClick={()=>decreaseProduct()}>-</span> <span className="text-2xl">{cartdata.count}</span> <span className="text-2xl" onClick={()=>increaseProduct()}>+</span></p>
  </div>
</div>
  )
}