import Categories from "./components/header/Categories";
import Header from "./components/header/Header";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Header />
      <div className="home px-6 flex justify-between gap-10">
        <div className="categories flex-1 overflow-auto max-h-[calc(100vh-_-112px)] pb-6">
          <Categories />
        </div>
        <div className="products flex-[8]">
          <div>
            <Products />
          </div>
        </div>
        <div>
          <div>cart totals</div>
        </div>
      </div>
    </>
  );
}

export default App;
