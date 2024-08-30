import React, { useState } from "react";
import axios from "axios";
import mylogo from "../images/logo-color.png";

function Nav({
  catStustus,
  setCatstutus,
  finalProduct,
  setFinaproduct,
  cartStutus,
  setCartstutus,
  cartItems,
  setCartitems,
}) {
  let [menu, setMenu] = useState(false);
  let [searchStr, setStr] = useState("");
  let searchHandle = () => {
    axios
      .get(`https://dummyjson.com/products/search?q=${searchStr}`)
      .then((prores) => prores.data)
      .then((finalpro) => {
        setFinaproduct(finalpro.products);
      });
  };
  return (
    <>
      <div>
        <div className="bg-[#eef3f7] border-b-2 w-full h-[80px] flex justify-center items-center font-mono z-[1] fixed">
          <nav className="flex">
            <img
              src={mylogo}
              className=" absolute h-[70x] w-[90px] top-[-8px] mr-16  md:h-[200px] ml-0 md:w-[300px] md:mr-14 left-0 md:top-[-60px] overflow-x-auto"
              alt=""
            />
            <div className="relative mr-6">
              <input
                type="text"
                name=""
                id=""
                onChange={(e) => setStr(e.target.value)}
                value={searchStr}
                className="bg-white border-[2px] border-[#bbbdc0] w-[200px] md:w-[400px] h-[30px]  italic rounded-full "
              />
              <button className="bg-white h-[25px] w-[20px] absolute top-[1.5px] right-[15px] ]">
                <img
                  className="h-[20px] w-[20px]"
                  src="https://img.icons8.com/?size=100&id=132&format=png&color=000000"
                  alt=""
                  onClick={searchHandle}
                />
              </button>
            </div>
            <div className=" ">
              <div
                className={`bgtransf w-[100vh] h-[100vh] left-0 top-20 fixed ${
                  menu ? "" : "hidden"
                }`}
              ></div>
              <ul
                className={`bg-yellow-500 absolute cursor-pointer  ${
                  menu ? "right-[0px]" : "right-[-100%] hidden"
                } w-[40%] h-[100vh] text-center p-5  top-20  md:p-0 md:flex md:gap-5 md:w-auto md:h-auto md:absolute md:top-auto md:right-5 md:bg-[#eef3f7] duration-500 `}
              >
                <li
                  className="relative md:block hidden"
                  onClick={() => setCartstutus(!cartStutus)}
                >
                  Cart
                  <span
                    className={`md:absolute  md:right-[-17px] md:top-[-15px] md:bg-red-600  md:h-[25px] md:w-[25px] md:rounded-full ${
                      cartItems.length > 0 ? "" : "hidden"
                    }`}
                  >
                    {cartItems.length}
                  </span>
                </li>
                <li>Orders</li>
                <li>Sign in</li>
                <li
                  className="md:hidden"
                  onClick={() => {
                    setCatstutus(!catStustus), setMenu(!menu);
                  }}
                >
                  Catagory
                </li>
                <li>Singn up</li>
              </ul>
              <ul className="md:hidden absolute right-10 ">
                <li
                  className="relative"
                  onClick={() => setCartstutus(!cartStutus)}
                >
                  Cart
                  <span
                    className={`absolute  right-[-10px] text-center top-[-10px] bg-red-600  h-[20px] w-[20px] rounded-full ${
                      cartItems.length > 0 ? "" : "hidden"
                    }`}
                  >
                    {cartItems.length}
                  </span>
                </li>
                {/* <li>cart</li> */}
              </ul>
              <button
                onClick={() => setMenu(!menu)}
                className="absolute right-2 md:hidden"
              >
                {menu ? (
                  <span className="text-xl">&times;</span>
                ) : (
                  <span>&#9776;</span>
                )}
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Nav;
