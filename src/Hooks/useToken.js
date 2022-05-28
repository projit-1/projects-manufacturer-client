import { useEffect, useState } from "react"

const useToken = user => {
    const [token, settoken] = useState(' ');
    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = { email: email };
        if (email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'applicatin/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('data inside', data);
                })
        }
    }, [user])
    return [token];
}
export default useToken;