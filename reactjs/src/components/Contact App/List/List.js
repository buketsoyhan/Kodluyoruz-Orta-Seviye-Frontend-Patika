import React, {useState} from 'react'

function List({ contacts }) {
  const [filterText, setFilterText]=useState("")

  const filtered = contacts.filter((item)=>{
    return Object.keys(item).some((key)=>
      item[key]
      .toString()
      .toLowerCase()
      .includes(filterText.toLowerCase())
    )
  })
  return (
    <div >
      <input placeholder='Filter Contact' value={filterText} onChange={(e)=>setFilterText(e.target.value)} />
      <ul>
        {filtered.map((contact, idx) =>
          <li key={idx}>{contact.fullname}</li>
        )}
      </ul>
    </div>
  )
}

export default List