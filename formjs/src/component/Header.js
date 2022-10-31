import React, {memo} from 'react'

function Header({number,data , increment}) {
    console.log("Header compo rerender");
  return (
    <div>Header - {number}
    
    <br/>

    <button onClick={increment}>Click</button>
    </div>
  )
}

export default memo(Header)