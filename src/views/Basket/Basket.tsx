import React, {FunctionComponent} from "react";
import { Button, Drawer, Typography, Skeleton, List, Checkbox, PageHeader } from 'antd';
import styles from './Basket-styles.module.less'
import {getWindowSize} from "../../utils/layoutUtils";


const {Title} = Typography
enum drawerSizes {
    small = '100%',
    middle = '50%',
    large = '33%',
}

interface IBasket {
    basketVisible: boolean
    setBasketVisible: React.Dispatch<React.SetStateAction<boolean>>;

}

const Basket: FunctionComponent<IBasket> = ({basketVisible= false, setBasketVisible}) => {
    return(
        <Drawer placement={"right"} visible={basketVisible} onClose={() => setBasketVisible(false)} className={styles.basketDrawer} width={drawerSizes[getWindowSize()]}>
            <PageHeader title={<Title level={3}>Koszyk</Title>}/>
            123

        </Drawer>
    )
}

export default Basket;