import { useEffect } from "react";
import { useSelector } from "react-redux";
import AppRouter from "./AppRouter/AppRouter";

function App() {
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
