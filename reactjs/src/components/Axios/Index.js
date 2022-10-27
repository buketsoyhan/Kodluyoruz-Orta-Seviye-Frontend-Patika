import axios from 'axios';
import React, { useEffect, useState } from 'react'
function Index() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        console.log("Mounting");
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.data)
            .then((data) => setUsers(data))
    }, [])
    return (
        <div>
            {
                users.map((user) => (
                    <div key={user.id}>{user.name}</div>
                ))
            }
        </div>
    )
}

export default Index