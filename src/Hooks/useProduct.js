import { useEffect, useState } from 'react'
const useProduct = () => {
    const [hproducts, sethProducts] = useState([]);
    useEffect(() => {
        fetch('hproducts.json')
            .then(res => res.json())
            .then(data => sethProducts(data))
    }, [])
    return [hproducts, sethProducts];
}
export default useProduct;


