import React, { useEffect, useState } from 'react'
import Form from './Form/Form'
import List from './List/List'

function Contact() {
  const [contacts, setContacts] = useState([
    {
      fullname: "buket", phone: "541"
    },
    {
      fullname: "batu", phone: "567"
    },
    {
      fullname: "berrin", phone: "963"
    }
  ])

  useEffect(() => {
    console.log(contacts);
  }, [contacts])
  return (
    <div>
      <List contacts={contacts} />
      <Form setContacts={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contact