import Details from "./Details";

export const routes = [
    {
        path: '/detail',
        exact: true,
        component: Details,
        blockingUpdate: false,
    },
    {
        path: '/detail/:productId',
        exact: true,
        component: Details,
        blockingUpdate: false,
    },
];
