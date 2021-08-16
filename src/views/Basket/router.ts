import Basket from "./Basket";

export const routes = [
    {
        path: '/basket',
        exact: true,
        component: Basket,
        blockingUpdate: false,
    },
];
