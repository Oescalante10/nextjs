import { forceRealTime } from "../helpers/realTime";

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            /* path: "https://qieroapp.pythonanywhere.com/api/v1", */
            /* path: "https://cristobalm.pythonanywhere.com/api/v1", */
            /* path: "http://localhost:5000/api/v1", */
            path: "https://qieroapp.rj.r.appspot.com/api/v1",
            page: '/modulos',
            //Authentication Variables
            currentUser:{
                user: {
                    _id: 11,
                    email_address: "sacm1046@gmail.com",
                    local: {
                        _id: 3,
                        name: "Streat Burger"
                    },
                    name: "Sebastián",
                    role: {
                        _id: 5,
                        name: "ClientOwner"
                    }
                }
            },
            email: '',
            password: '',
            //Order Variables
            orders: [],
            currentOrder: {},
            //Menu Variables
            menus: [],
            //Product Variables
            products: [],
            productTypes: [],
            productStatuses: [],
            preparationAreas: [],
            //Local Variables
            locals: [],
            zones: [],
            tables: [],
            //Aggregate Variables
            aggregates: [],
            aggregateTypes: [],
            //Preparation Variables
            preparations: [],
            preparationTypes: [],
            //Ui
            loading: true,
            danger: '#EB6776',
            success: '#80AE3D',
            alert: '#DB9A29',
            secondary: '#9A999E'

        },
        actions: {
            controlLoading: (condition, asdasd) => {
                setStore({
                    loading: condition,
                    asdasd: asdasd
                })
            },
            handleChange: ({ target: { name, value } }) => {
                setStore({
                    [name]: value
                })
            },
            //Authentication Functions
            postLogin: async (history) => {
                const store = getStore();
                const res = await fetch(`${store.path}/login`, {
                    method: 'POST',
                    headers: {
                        'content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email_address: store.email,
                        password: store.password
                    })
                });
                const data = await res.json();
                if (data.error) {
                    alert(data.error)
                } else {
                    setStore({
                        currentUser: data,
                        email: null,
                        password: null
                    })
                    sessionStorage.setItem('currentUser', JSON.stringify(data))
                }
            },
            postForgetPasswordEmail: async (history) => {
                const store = getStore();
                const res = await fetch(`${store.path}/forget-password`, {
                    method: 'POST',
                    headers: {
                        'content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: store.email
                    })
                });
                const data = await res.json();
                console.log(data)
                if (data.error) {

                } else {
                    history.push('/login')
                    setStore({ email: null })
                }
            },
            postForgetPasswordConfirm: async (history, token) => {
                const store = getStore();
                const res = await fetch(`${store.path}/forget-password-confirm/${token}`, {
                    method: 'POST',
                    headers: {
                        'content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        password: store.password
                    })
                });
                const data = await res.json();
                console.log(data)
                if (data.error) {

                } else {
                    setStore({ password: null })
                    history.push('/login')
                }
            },
            logout: () => {
                setStore({
                    currentUser: {}
                })
                sessionStorage.removeItem('currentUser')
            },
            isAuthenticated: () => {
                sessionStorage.getItem('currentUser') &&
                    setStore({ currentUser: JSON.parse(sessionStorage.getItem('currentUser')) })
            },
            handlePage: (route) => {
                setStore({
                    page: route
                })
                sessionStorage.setItem('page', route)
            },
            isPage: () => {
                sessionStorage.getItem('page') &&
                    setStore({ page: sessionStorage.getItem('page') })
            },
            //Order Functions
            getOrdersByLocal: async () => {
                getActions().controlLoading(true)
                const store = getStore();
                const res = await fetch(`${store.path}/orders/local/${store.currentUser.user.local._id}/client`)
                const data = await res.json()
                if (data.error) {

                } else {
                    setStore({
                        orders: data
                    })
                    getActions().controlLoading(false)
                }
            },
            setCurrentOrder: order => {
                    setStore({
                        currentOrder: order
                    })
            },
            putOrderProductStatus: async (status, id)=>{
                const store = getStore();
                const res = await fetch(`${store.path}/order-product/${id}`, {
                    method: 'PUT',
                    headers: {
                        'content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        order_product_status_id: status,
                    })
                })
                const data = await res.json()
                if (data.error) {
                    alert(data.error)
                } else {
                    getActions().getOrder(id)
                    forceRealTime('orders', 'z0IviwnsHcHjS5CxfZsZ', { order_status: `${id}${status}` })
                }
            },
            postOrderStatus: async (status, id) => {
                const store = getStore();
                const res = await fetch(`${store.path}/order-statuses`, {
                    method: 'POST',
                    headers: {
                        'content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        order_status_type_id: status,
                        order_id: id
                    })
                })
                const data = await res.json()
                if (data.error) {
                    alert(data.error)
                } else {
                    getActions().getOrdersByLocal()
                    forceRealTime('orders', 'z0IviwnsHcHjS5CxfZsZ', { post_order_status_list: `${id}${status}` })
                }
            },
            //Menu Functions
            getMenuByLocal: async () => {
                getActions().controlLoading(true)
                const store = getStore();
                const res = await fetch(`${store.path}/menus/local/${store.currentUser.user.local._id}/client`)
                const data = await res.json()
                if (data.error) {

                } else {
                    setStore({
                        menus: data
                    })
                    getActions().controlLoading(false)
                }
            },
            //Product Functions
            getProductByMenu: async (menu_id) => {
                getActions().controlLoading(true)
                const store = getStore();
                const res = await fetch(`${store.path}/products/menu/${menu_id}/client`)
                const data = await res.json()
                if (data.error) {

                } else {
                    setStore({ products: data })
                    getActions().controlLoading(false)
                }
            },
            getProductTypes: async () => {
                getActions().controlLoading(true)
                const store = getStore();
                const res = await fetch(`${store.path}/product-types/client`)
                const data = await res.json()
                if (data.error) {

                } else {
                    setStore({ productTypes: data })
                    getActions().controlLoading(false)
                }
            },
            getProductStatuses: async () => {
                getActions().controlLoading(true)
                const store = getStore();
                const res = await fetch(`${store.path}/product-statuses/client`)
                const data = await res.json()
                if (data.error) {

                } else {
                    setStore({ productStatuses: data })
                    getActions().controlLoading(false)
                }
            },
            getPreparationAreas: async () => {
                getActions().controlLoading(true)
                const store = getStore();
                const res = await fetch(`${store.path}/preparation-areas/client`)
                const data = await res.json()
                if (data.error) {

                } else {
                    setStore({ preparationAreas: data })
                    getActions().controlLoading(false)
                }
            },
            //Aggregate Functions
            getAggregateTypes: async () => {
                getActions().controlLoading(true)
                const store = getStore();
                const res = await fetch(`${store.path}/aggregate-types/client`)
                const data = await res.json()
                if (data.error) {

                } else {
                    setStore({ aggregateTypes: data })
                    getActions().controlLoading(false)
                }
            },
            getAggregates: async () => {
                getActions().controlLoading(true)
                const store = getStore();
                const res = await fetch(`${store.path}/aggregates/client`)
                const data = await res.json()
                if (data.error) {

                } else {
                    setStore({ aggregates: data })
                    getActions().controlLoading(false)
                }
            },
            //Preparation Functions
            getPreparationType: async () => {
                getActions().controlLoading(true)
                const store = getStore();
                const res = await fetch(`${store.path}/preparation-types/client`)
                const data = await res.json()
                if (data.error) {

                } else {
                    setStore({ preparationTypes: data })
                    getActions().controlLoading(false)
                }
            },
            getPreparations: async () => {
                getActions().controlLoading(true)
                const store = getStore();
                const res = await fetch(`${store.path}/preparations/client`)
                const data = await res.json()
                if (data.error) {

                } else {
                    setStore({ preparations: data })
                    getActions().controlLoading(false)
                }
            },
        }
    }
}
export default getState;