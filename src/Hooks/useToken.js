import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState(' ');
    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = { email: email };
        if (email) {
            fetch(`https://dry-brushlands-79455.herokuapp.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'applicatin/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('data inside', data);
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken)
                })
        }
    }, [user])
    return [token];
}
export default useToken;