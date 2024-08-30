import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./common/Nav";
import Body from "./common/Body";
import Cart from "./common/Cart";

function App() {
  let [catStustus, setCatstutus] = useState(false);
  let [finalProduct, setFinaproduct] = useState([]);
  let [cartCount, setCartcount] = useState(0);
  let [cartStutus, setCartstutus] = useState(false);
  let [cartItems, setCartitems] = useState([]);

  return (
    <>
      <Nav
        catStustus={catStustus}
        setCatstutus={setCatstutus}
        finalProduct={finalProduct}
        setFinaproduct={setFinaproduct}
        cartCount={cartCount}
        setCartcount={setCartcount}
        cartStutus={cartStutus}
        setCartstutus={setCartstutus}
        cartItems={cartItems}
        setCartitems={setCartitems}
      />
      <Cart
        cartStutus={cartStutus}
        setCartstutus={setCartstutus}
        cartItems={cartItems}
        setCartitems={setCartitems}
      />
      <Body
        catStustus={catStustus}
        setCatstutus={setCatstutus}
        finalProduct={finalProduct}
        setFinaproduct={setFinaproduct}
        cartCount={cartCount}
        setCartcount={setCartcount}
        cartItems={cartItems}
        setCartitems={setCartitems}
      />
    </>
  );
}

export default App;
