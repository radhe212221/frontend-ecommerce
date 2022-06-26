import React, { useContext } from "react";
import Product from './Product'
import { AppContext } from "../index";
export default function Home() {
  const { state, setState } = useContext(AppContext);
  const { cart, filters, tags, products, tagname, col, order, search } = state;

  const handleChange = (e) => {
    let search = e.target.value;
    setState({ ...state, search });
  };

  const handleTagClick = (str) => {
    setState({ ...state, tagname: str });
  };

  const handleSort = (_col, _order) => {
    setState({ ...state, col: _col, order: _order });
  };

  const _products=products
                      // .filter(x=>x?.tags?.startsWith(tagname))
                      // .filter(x=>Object.values(x).includes(search))

  return (
    <div>
      <h1>home page</h1>
      <input value={search} placeholder="search" onChange={handleChange} />
      {tags?.map((x) => (
        <button onClick={() => handleTagClick(x.t)} key={x.t}>
          {x.t} - {x.c}
        </button>
      ))}
      {filters?.map((x) => (
        <button onClick={() => handleSort(x, !order)} key={x}>
          {x}
        </button>
      ))}
      <br/>
      {_products?.map((x) => (
        <Product key={x.id} data={x} />
      ))}
    </div>
  );
}
