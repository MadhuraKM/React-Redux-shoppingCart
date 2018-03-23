const BASE_URL = "http://localhost:8282";

class ProductsApi {
    static getProductsList() {
        const url = `${BASE_URL}/src/app/data/products.json`;
        return fetch(url)
            .then(response => response.json())
            .catch(err => console.log(err));
    }
}

export default ProductsApi; 