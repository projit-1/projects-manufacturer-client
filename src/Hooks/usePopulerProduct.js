import { useEffect, useState } from 'react'
const usePopulerProduct = () => {
    const [pproduct, setPproduct] = useState([]);
    useEffect(() => {
        fetch('populerproduct.json')
            .then(res => res.json())
            .then(data => setPproduct(data))
    }, [])
    return [pproduct, setPproduct];
}
export default usePopulerProduct;