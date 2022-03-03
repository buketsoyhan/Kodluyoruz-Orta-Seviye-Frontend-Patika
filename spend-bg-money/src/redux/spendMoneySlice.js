import { createSlice } from "@reduxjs/toolkit";
import ProductList from "../products.json";

const data = ProductList.products;

export const spendMoneySlice = createSlice({
  name: "products",
  initialState: {
    items: data,
    buyList: [],
    totalMoney: 100000000000,
    spendMoney: 0,
  },
  reducers: {
    buyProduct: (state, action) => {
      const product = action.payload;
      
      state.buyList = state.buyList.find((item) => item.id === product.id)
        ? state.buyList.map((item) =>
            item.id === product.id
              ? {
                  ...item,
                  count:
                    state.totalMoney >= Number(product.productPrice)
                      ? Number(item.count) + 1
                      : Number(item.count),
                }
              : item
          )
        : [...state.buyList, { ...product, count: 1 }];

      state.items = state.items.find((item) => item.id === product.id)
        ? state.items.map((item) =>
            item.id === product.id
              ? {
                  ...item,
                  count:
                    state.totalMoney >= Number(product.productPrice)
                      ? Number(item.count) + 1
                      : Number(item.count),
                }
              : item
          )
        : [...state.items];

      state.totalMoney =
        state.totalMoney >= Number(product.productPrice)
          ? state.totalMoney - Number(product.productPrice) * 1
          : state.totalMoney;
      state.spendMoney = 100000000000 - state.totalMoney;
    },
    sellProduct: (state, action) => {
      const product = action.payload;
      //satılanlar listesi
      state.buyList = state.buyList.map((item) =>
        item.id === product.id ? { ...item, count: item.count - 1 } : item
      );
      state.buyList = state.buyList.filter((item) => item.count !== 0);
      //satılan ürün adedi
      state.items = state.items.find((item) => item.id === product.id)
        ? state.items.map((item) =>
            item.id === product.id
              ? {
                  ...item,
                  count: Number(item.count) > 0 ? Number(item.count) - 1 : 0,
                }
              : item
          )
        : [...state.items];

      //toplam para hesabı
      state.totalMoney =
        state.totalMoney < 99999999999
          ? state.totalMoney +
            Number(product.productPrice) * (product.count > 0 ? 1 : 0)
          : state.totalMoney;
      state.spendMoney = 100000000000 - state.totalMoney;
    },
  },
  extraReducers: {},
});
export const { buyProduct, sellProduct } = spendMoneySlice.actions;
export default spendMoneySlice.reducer;
