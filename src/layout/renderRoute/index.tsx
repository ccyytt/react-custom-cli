import { useState, useCallback, useEffect, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import router, { RouterFace } from 'router'
export default () => {
    const [r, setR] = useState<React.ReactNode[] | []>([])
    const flattenRoute = () => {
        const route: RouterFace[] = [];
        function flattenArr(arr: RouterFace[]) {
            arr.forEach(item => {
                route.push(item);
                item.routes?.length && flattenArr(item.routes);
            })
            return route;
        }
        flattenArr(router)
        return route
    }
    const getRoute = useCallback(() => {
        return flattenRoute()
    }, [router])
    useEffect(() => {
        setR(getRoute().map((v: RouterFace) => {
            return <Route path={v.path} key={v.path} element={v.redirect ? <Navigate to={v.redirect} /> : <v.component />}></Route>
        }))
    }, [getRoute])
    return <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            {r}
        </Routes>
    </Suspense>
}