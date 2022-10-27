import React, { useEffect, useState } from 'react'

const initialFormValues = { fullname: "", phone: "" }

function Form({ setContacts, contacts }) {
    const [form, setForm] = useState(initialFormValues)

    useEffect(() => {
        setForm(initialFormValues)
    }, [contacts])

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (form.fullname === "" || form.phone === "")
            return -1;
        setContacts([...contacts, form])
        console.log(form);
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <input
                        onChange={onChangeInput}
                        value={form.fullname}
                        name='fullname'
                        placeholder='fullname' />
                </div>
                <div>
                    <input
                        onChange={onChangeInput}
                        value={form.phone}
                        name='phone'
                        placeholder='phone' />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form