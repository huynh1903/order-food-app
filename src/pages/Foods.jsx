import Banner from "../components/UI/Banner";
import title from "../utils/title";
import { IoMdSearch } from "react-icons/io";
import { products } from "../assets/data";
import Card from "../components/UI/Card";
import { useEffect, useState } from "react";

const FoodsPage = () => {
  title("Foods");
  const [selectProducts, setSelectProducts] = useState(products);
  const [inputValue, setInputValue] = useState("");
  const [sortRule, setSortRule] = useState("default");

  const handleInputChange = (event) => {
    event.preventDefault();
    setInputValue(event.target.value);
  };

  useEffect(
    () =>
      setSelectProducts(
        products.filter((product) =>
          product.name.toLowerCase().includes(inputValue)
        )
      ),
    [inputValue]
  );

  let renderProudcts;
  switch (sortRule) {
    case "az":
      renderProudcts = selectProducts.sort((prev, next) => {
        return prev.name.localeCompare(next.name);
      });
      break;
    case "hightPrice":
      renderProudcts = selectProducts.sort((prev, next) => {
        return next.price - prev.price;
      });
      break;
    case "lowPrice":
      renderProudcts = selectProducts.sort((prev, next) => {
        return prev.price - next.price;
      });
      break;

    default:
      renderProudcts = selectProducts;
      break;
  }

  return (
    <>
      <Banner name="All Foods" />
      <section className="mt-8 flex justify-center">
        <div className="py-6 w-11/12 ">
          <div className="flex justify-between items-center">
            <div className="relative">
              <input
                className="w-full px-3 py-2 text-slate-700 border-[1px] border-slate-400 rounded focus-visible:outline-none"
                type="text"
                onChange={(event) => handleInputChange(event)}
                value={inputValue}
                placeholder="Find your food here ..."
              />
              <IoMdSearch className="absolute top-3 right-3 text-slate-700 text-lg" />
            </div>

            <select
              name="sort"
              onChange={(event) => {
                setSortRule(event.target.value);
              }}
              className="px-3 py-2 border-[1px] rounded border-slate-400 focus-visible:outline-none text-slate-700"
            >
              <option value="default">Default</option>
              <option value="az">A - Z</option>
              <option value="hightPrice">Hight price</option>
              <option value="lowPrice">Low price</option>
            </select>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 lg:gap-7">
            {renderProudcts.map((product) => (
              <Card key={product.id} product={product} link={product.id}/>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FoodsPage;
