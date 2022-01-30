import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeActiveColor } from '../redux/todos/todosSlice'

const Color = () => {
    const dispatch = useDispatch()
    const colors = useSelector(state => state.todos.colors)
    const activeColor = useSelector(state => state.todos.activeColor)

    return (
        <div style={{ display: 'flex' }}>
            {colors.map((value, item) => (
                <div
                    key={item}
                    style={{ cursor: 'pointer', backgroundColor: value.colorCode, width: 25, height: 25, borderRadius: '50%', marginLeft: 10 }}
                    onClick={() => dispatch(changeActiveColor(value.colorCode))}
                >{activeColor == value.colorCode ? <div style={{ marginTop: 5 }}>&#10004;</div> : null}</div>
            ))}
        </div>
    )
}

export default Color