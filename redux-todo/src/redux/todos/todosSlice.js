import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        colors: [
            { color: 'gray', colorCode: '#c7c7bf' },
            { color: 'blue', colorCode: '#8ccce6' },
            { color: 'yellow', colorCode: '#f5f3a4' },
            { color: 'purple', colorCode: '#a88ce6' },
            { color: 'red', colorCode: '#deb4b4' },
        ],
        activeColor: '#aed581',
        textFilter: "",
        items: [

        ],
    },

    reducers: {
        addTodo: (state, action) => {
            state.items.push({
                id: nanoid(),
                title: action.payload,
                colorCode: state.activeColor
            })
        },
        changeActiveColor: (state, action) => {
            state.activeColor = action.payload
        },
        filterText: (state, action) => {
            state.textFilter = action.payload
        },
        destroy: (state, action) => {
            const id = action.payload
            const filtered = state.items.filter((item) => item.id != id)
            state.items = filtered;
        }
    }
})

export const { changeActiveColor, addTodo, filterText, destroy } = todosSlice.actions;
export default todosSlice.reducer;