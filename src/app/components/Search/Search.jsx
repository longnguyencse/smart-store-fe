import React from "react"

import { Input } from "antd";
const { Search } = Input;

const search = ( props ) => (
            <Search
                placeholder="Nhập thông tin tìm kiếm"
                enterButton="Tìm kiếm"
                onSearch={props.onSearch}
            />
);

export default search;