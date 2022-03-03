import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Money from "../Money";
import { buyProduct, sellProduct } from "../../redux/spendMoneySlice";
import "./style.css";
function Products() {
  const items = useSelector((state) => state.product.items);
  // const buyList = useSelector((state) => state.products.buyList);
  const totalMoney = useSelector((state) => state.products.totalMoney);

  const dispatch = useDispatch();
  const handleClickBuy = (product) => {
    dispatch(buyProduct(product));
  };
  const handleClickSell = (product) => {
    dispatch(sellProduct(product));
  };

  return (
    <div>
      <Money />
      <div className="contentBox">
        {items.map((item) => (
          <div key={item.id} className="content">
            <div className="productInfo">
              <img
                src={item.image}
                alt={item.productName}
                className="productImage"
              ></img>
              <div className="productName">{item.productName}</div>
              <div className="prductPrice">${item.productPrice}</div>
            </div>

            <div className="sellorBuy">
              <button className={item.count > 0 ? "sellRed" : "sellbutton"} onClick={() => handleClickSell(item)}>Sell</button>
              <input
                type="number"
                className="inputNumber"
                value={item.count}
                onChange={() => {}}
              ></input>
              <button className={Money < item.productPrice ? "buyWhite" : "buyButton"} onClick={() => handleClickBuy(item)}>Buy</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
