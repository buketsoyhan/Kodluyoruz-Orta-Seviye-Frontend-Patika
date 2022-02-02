import { createSlice } from "@reduxjs/toolkit"
import ProductList from "../products.json"

const data = ProductList.products;

console.log(data)




export const spendMoneySlice = createSlice({
    name: 'products',
    initialState: {
        items: data,
        buyList: [],
        totalMoney: 100000000000,
        spendMoney: 0

    },



})

export default spendMoneySlice.reducer;