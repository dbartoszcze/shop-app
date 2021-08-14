import Details from "./Details";

export const routes = [
    {
        path: '/detail/:productId',
        exact: true,
        component: Details,
        blockingUpdate: false,
    },
];
