import { useEffect, useState } from 'react';
import { Menu } from '@arco-design/web-react';
import { useLocation, Link } from 'react-router-dom';

import router from 'router'
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
function combine(pathArr: string[], lth: number) {
    let newArr = '';
    for (let i = 0; i < lth; i++) {
        newArr = newArr + '/' + pathArr[i];
    }
    return newArr;
}
export default () => {
    const location = useLocation()
    const [openKeys, setOpenKeys] = useState<string[]>([])
    const [selectKeys, setSelectKeys] = useState<string[]>([])
    useEffect(() => {
        getOpenKey(location.pathname)
    }, [location.pathname])
    const getOpenKey = (path: string) => {
        const lastIdx = path.lastIndexOf('/');
        const oldStr = path[0] === '/' ? path.slice(1, lastIdx) : path.slice(0, lastIdx);
        const pathArr = oldStr.split('/');
        const keys = [];
        for (let i = 1; i <= pathArr.length; i++) {
            keys.push(combine(pathArr, i));
        }
        setOpenKeys(keys);
    }
    const handleOpenChange = (key: string, event: any, keyPath: string[]) => {
        setOpenKeys(keyPath);
    }
    // const handleSelectChange = (key: string, event: any, keyPath: string[]) => {
    //     setSelectKeys([location.pathname])
    // }
    return (<Menu selectedKeys={[location.pathname]} openKeys={openKeys} onClickSubMenu={handleOpenChange}>
        {router.map(v => {
            if (v.routes.length) {
                return <SubMenu key={v.path} title={v.title}>
                    {v.routes.map(vc => {
                        return <Link to={vc.path} key={vc.path}><MenuItem key={vc.path}>
                            {vc.title}
                        </MenuItem>
                        </Link>
                    })}
                </SubMenu>
            }
            return <Link to={v.path} key={v.path}><MenuItem key={v.path} >
                {v.title}
            </MenuItem>
            </Link>
        })}
    </Menu>)
}