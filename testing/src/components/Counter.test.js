import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Counter from "./Counter"

test("increase btn", ()=>{
    render(<Counter/>)

    const increaseBtn = screen.getByText("Inrement")

    userEvent.click(increaseBtn)
})


