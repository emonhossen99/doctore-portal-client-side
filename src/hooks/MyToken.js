import { useEffect } from "react";
import { useState } from "react";

const useToken = user => {
    const [token, setToken] = useState('');

    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = { email: email }
        if (email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('inside in data', data)
                })
        }
    }, [user])
    return [token]
}
export default useToken;