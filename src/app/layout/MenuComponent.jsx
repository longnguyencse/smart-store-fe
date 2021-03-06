import React from 'react';

import { Menu, Icon, Layout } from 'antd';
import * as lang from '../../lang/lang-vi';

import { Link } from 'react-router-dom';

import OrderSvg from './asset/order.svg';
import DiscountSvg from './asset/discount.svg';
import SupplierProductPackageSvg from './asset/supplier-product-package.svg';
import SupplierSvg from './asset/supplier.svg';
import ProductSvg from './asset/product.svg';
import PackageSpecificationSvg from './asset/package-specification.svg';
import AddressSvg from './asset/address.svg';

const { SubMenu } = Menu;
const { Sider } = Layout;

export default class MenuComponent extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

    render() {
        return (
            <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                <div className="logo" />
                <Menu
                    mode="inline"
                    theme="dark"
                >
                    <Menu.Item key="order">
                        <Icon component={OrderSvg} />
                        <span>{lang.ORDER_MENU}</span>
                    </Menu.Item>

                    <Menu.Item key="discount">
                        <Icon component={DiscountSvg} />
                        <span>{lang.DISCOUNT_MENU}</span>
                    </Menu.Item>

                    <Menu.Item key="supplier-product-package">
                        <Icon component={SupplierProductPackageSvg} />
                        <span>{lang.SUPPLIER_PRODUCT_PACKAGE_MENU}</span>
                    </Menu.Item>

                    <Menu.Item key="supplier">
                        <Icon component={SupplierSvg} />
                        <span>{lang.SUPPLIER_MENU}</span>
                    </Menu.Item>

                    <SubMenu
                        key="product"
                        title={
                            <span>
                                <Icon component={ProductSvg} />
                                <span>{lang.PRODUCT_ALL_MENU}</span>
                            </span>
                        }
                    >
                        <Menu.Item key="product-category">
                            <Link to="/">{lang.CATEGORY_MENU}</Link>
                        </Menu.Item>
                        <Menu.Item key="product-class">
                            <Link to="/">{lang.CLASS_MENU}</Link>
                        </Menu.Item>
                        <Menu.Item key="product-group">
                            <Link to="/">{lang.GROUP_MENU}</Link>
                        </Menu.Item>
                        <Menu.Item key="product-product">
                            <Link to="/">{lang.PRODUCT_MENU}</Link>
                        </Menu.Item>
                    </SubMenu>

                    <Menu.Item key="package-specification">
                        <Icon component={PackageSpecificationSvg} />
                        <span>
                            <Link to="/Package-Specification">{lang.PACKAGE_SPECIFICATION_MENU}</Link>
                        </span>
                    </Menu.Item>

                    <Menu.Item key="package-specification-2">
                        <Icon component={PackageSpecificationSvg} />
                        <span>
                            <Link to="/package-specification-2">Quy cách 2</Link>
                        </span>
                    </Menu.Item>

                    <Menu.Item key="address">
                        <Icon component={AddressSvg} />
                        <span>{lang.ADDRESS_MENU}</span>
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    }
}