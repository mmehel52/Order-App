import CartTotals from "./components/CartTotals";
import Categories from "./components/Categories";
import Header from "./components/Header";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Header />
      <div className="home px-6 flex justify-between gap-10">
        <div className="categories  overflow-auto max-h-[calc(100vh-_-112px)] pb-6">
          <Categories />
        </div>
        <div className="products flex-[8]">
          <Products />
        </div>
        <div className="car-wrapper min-w-[300px] md:-mr-[24px] md:-mt-[24px] border">
          <CartTotals />
        </div>
      </div>
    </>
  );
}

export default App;
