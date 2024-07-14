const ROUTE = {
    AUTH: '/api/v1/auth',
    LOGIN: '/login',
    REGISTER: '/register',
    CHANGE_PASSWORD: '/change',
    FORGOT_PASSWORD: '/forgot-password',
    GENERATE_ACCESSTOKEN: '/accessToken-generate',

    //Address
    ADDRESS: '/api/v1/addresses',
    GET_ADDRESS_BY_ID: '/:address_id',

    //Category
    CATEGORY: '/api/v1/categories',
    CATEGORY_BY_ID: '/:category_id',
    DELETE_CATEGORY_BY_ID: '/:category_id',
    CATEGORY_CHILD_BY_PATH_PARENT: '/children/:path',
    CATEGORY_ROOT: '/root_category',
    CATEGORY_TREE: '/tree_category',
    CHANGE_ACTIVE_CATEGORY_BY_ID: '/:category_id/active',
    CATEGORY_QUERY: '/search',

    //Category
    PROVIDER: '/api/v1/providers',
    PROVIDER_BY_ID: '/:provider_id',

    //Product
    PRODUCT: '/api/v1/products',
    PRODUCT_ADMIN: '/admin',
    PRODUCT_BY_ID: '/:product_id',
    PRODUCT_BY_ID_ATTRIBUTE_PRODUCT_ID:
        ':/product_id/attribute/:attribute_product_id',
    PRODUCT_CHANGE_STATUS: '/status/:product_id',
    PRODUCT_FILTER: '/filter',
    PRODUCT_QUERY: '/search',
    PRODUCT_QUERY_BY_CATEGORY: '/category/:category_id',

    //Product liked
    PRODUCT_LIKED: '/api/v1/productLikeds',
    PRODUCT_LIKED_USER: '/:user_id',

    //AttributeProduct
    ATTRIBUTE_PRODUCT: '/api/v1/attributeProducts',
    ATTRIBUTE_PRODUCT_BY_ID: '/:attribute_product_id',

    //User
    USER: '/api/v1/users',
    USER_BY_ID: '/:user_id',
    USER_CHANGE_ACTIVE: '/change-active/:user_id',

    //Cart
    CART: '/api/v1/carts',
    CART_BY_USER_ID: '/:user_id',
    CART_UPDATE_BY_PRODUCT_ID: '/:user_id/products/:product_id',
    // CART_UPDATE_BY_PRODUCT_ID: '/api/v1/:user_id/product/:product_id',

    //Order
    ORDER: '/api/v1/orders',
    ORDER_BY_ID: '/:order_id',
    ORDER_BY_PARAMS: '/params',
    ORDER_BY_USER_ID: '/user/:user_id',
    ORDER_BY_ID_CREATE_PAYMENT_ONLINE: '/:order_id/payment-online',

    PAYMENT: '/api/v1/payment',
    CREATE_PAYMENT: '/create-payment-url',
    GET_PAYMENT_ONLINE: '/payment-success',
}
module.exports = { ROUTE }
