import React, { useEffect, useState } from "react";
import CartTotals from "../components/CartTotals";
import Categories from "../components/categories/Categories";
import Products from "../components/products/Products";
import Header from "../components/Header";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/categories/get-all");
        const data = await res.json();
        data &&
          setCategories(
            data.map((item) => {
              return { ...item, value: item?.title };
            })
          );
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products/get-all");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, []);

  return (
    <>
      <Header />
      <div className="home px-6 flex md:flex-row flex-col justify-between gap-10 md:pb-0 pb-24 h-screen">
        <div className="categories  overflow-auto max-h-[calc(100vh112px)] md:pb-20 md:mb-10 min-h-[180px]">
          <Categories
            categories={categories}
            setCategories={setCategories}
            setFiltered={setFiltered}
            products={products}
          />
        </div>
        <div className="products flex-[8] overflow-y-auto max-h-[calc(100vh_-_112px)] pb-10 min-h-[500px]">
          <Products
            categories={categories}
            filtered={filtered}
            products={products}
            setProducts={setProducts}
          />
        </div>
        <div className="car-wrapper  min-w-[300px] md:-mr-[24px] md:-mt-[24px] border">
          <CartTotals />
        </div>
      </div>
    </>
  );
};

export default Home;
