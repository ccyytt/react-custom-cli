
import { Button } from '@arco-design/web-react'

import { setToken } from 'utils/token'

import './index.scss'
export default () => {
    const handleLogin = () => {
        setToken('login', '1')
    }
    return <div className='login'>
        <Button type='primary' shape='round' className='login-btn' onClick={handleLogin}>登录</Button>
    </div>
}