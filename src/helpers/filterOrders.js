export const filterOrdersByOrderProductStatusByProductType = (list, product_type) => {
    const first = list.filter(({ order_product }) =>
        order_product.filter(({ order_product_status }) =>
            order_product_status._id !== 3
        ).length !== 0
    )
    const second = first.filter(({ order_product }) =>
        order_product.filter(({ product }) =>
            product.product_type._id === product_type
        ).length !== order_product.length
    )
    return second
}