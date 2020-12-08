export function displayAdminProducts(adminProducts) {

    const productContainer = document.querySelector(".admin-products--container");

    if (adminProducts.length === 0) {
        productContainer.innerHTML = `<p>There are no products on your page.</p>`
    } else {
        adminProducts.forEach((item) => {
            productContainer.innerHTML += `<div class="admin-product--container">
                                                <div class="product-image">
                                                    <img src="${item.image_url}">
                                                </div>
                                                <div class="product-title">
                                                   <a class="admin-details--link" href="details.html?id=${item.id}">
                                                    <h4>${item.title}</h4>
                                                   </a>
                                                </div>
                                                <div class="edit-product-link">
                                                    <a href="editProduct.html?id=${item.id}">Edit</a>
                                                </div>
                                                <div class="delete-product">
                                                    <div class="delete-product--button">
                                                        <p>Delete</p>
                                                        <i class="fas fa-times"></i>
                                                    </div>
                                                </div>
                                            </div>`
        });
    }

}