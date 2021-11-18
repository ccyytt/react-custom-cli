
import { Avatar } from '@arco-design/web-react'
import './index.scss';
export default () => {
    return <div className="layout-header flex">
        <div className="flex-grow-0">自定义路由</div>
        <div className="flex-grow-1"></div>
        <div className="flex-grow-0 mr-sm">
            <Avatar className='bg-green cur-pointer' style={{ transform: 'translate(0, -2px)' }}>admin</Avatar>
        </div>
    </div>
}