const BASE_URL = 'https://dummyjson.com'

const getAllProducts = async ({ limit = 30, skip = 0 }) => {
    try {
        const productsUrl = `${BASE_URL}/products`;
        const response = await fetch(productsUrl);
        const data = await response.json();
        return data.products
    } catch (error) {
        console.error(error)
        return []
    }
}

const getProductWithId = async (productId) => {
    try {
        const productUrl = `${BASE_URL}/products/${productId}`;
        const response = await fetch(productUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
        return null;
    }
}


export { getAllProducts, getProductWithId}