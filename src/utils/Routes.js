const ROUTE = {
    AUTH: '/api/v1/auth',
    LOGIN: '/api/v1/login',
    REGISTER: '/api/v1/register',
    CHANGE_PASSWORD: '/api/v1/change',
    FORGOT_PASSWORD: '/api/v1/forgot-password',
    GENERATE_ACCESSTOKEN: '/api/v1/accessToken-generate',

    //Address
    ADDRESS: '/api/v1/addresses',
    GET_ADDRESS_BY_ID: '/api/v1/:address_id',

    //Category
    CATEGORY: '/api/v1/categories',
    CATEGORY_BY_ID: '/api/v1/:category_id',
    DELETE_CATEGORY_BY_ID: '/api/v1/:category_id',
    CATEGORY_CHILD_BY_PATH_PARENT: '/api/v1/children/:path',
    CATEGORY_ROOT: '/api/v1/root_category',
    CATEGORY_TREE: '/api/v1/tree_category',
    CHANGE_ACTIVE_CATEGORY_BY_ID: '/api/v1/:category_id/active',
    CATEGORY_QUERY: '/api/v1/search',

    //Category
    PROVIDER: '/api/v1/providers',
    PROVIDER_BY_ID: '/api/v1/:provider_id',

    //Product
    PRODUCT: '/api/v1/products',
    PRODUCT_ADMIN: '/api/v1/admin',
    PRODUCT_BY_ID: '/api/v1/:product_id',
    PRODUCT_BY_ID_ATTRIBUTE_PRODUCT_ID:
        ':/product_id/attribute/:attribute_product_id',
    PRODUCT_CHANGE_STATUS: '/api/v1/status/:product_id',
    PRODUCT_FILTER: '/api/v1/filter',
    PRODUCT_QUERY: '/api/v1/search',
    PRODUCT_QUERY_BY_CATEGORY: '/api/v1/category/:category_id',

    //Product liked
    PRODUCT_LIKED: '/api/v1/productLikeds',
    PRODUCT_LIKED_USER: '/api/v1/:user_id',

    // PRODUCT_LIKED_DELETE

    //AttributeProduct
    ATTRIBUTE_PRODUCT: '/api/v1/attributeProducts',
    ATTRIBUTE_PRODUCT_BY_ID: '/api/v1/:attribute_product_id',
    ATTRIBUTE_PRODUCT_FILTER: '/api/v1/:',
    ATTRIBUTE_PRODUCT_QUERY: '/api/v1/:',

    //User
    USER: '/api/v1/users',
    USER_BY_ID: '/api/v1/:user_id',
    USER_CHANGE_ACTIVE: '/api/v1/change-active/:user_id',

    //Cart
    CART: '/api/v1/carts',
    CART_BY_USER_ID: '/api/v1/:user_id',
    CART_UPDATE_BY_PRODUCT_ID: '/api/v1/:user_id/products/:product_id',
    // CART_UPDATE_BY_PRODUCT_ID: '/api/v1/:user_id/product/:product_id',

    //Order
    ORDER: '/api/v1/orders',
    ORDER_BY_ID: '/api/v1/:order_id',
    ORDER_BY_PARAMS: '/api/v1/params',
    ORDER_BY_USER_ID: '/api/v1/user/:user_id',
    ORDER_BY_ID_CREATE_PAYMENT_ONLINE: '/api/v1/:order_id/payment-online',

    PAYMENT: '/api/v1/payment',
    CREATE_PAYMENT: '/api/v1/create-payment-url',
    GET_PAYMENT_ONLINE: '/api/v1/payment-success',
}
module.exports = { ROUTE }
