export default{
    path:'/cinema',
    component:()=> import('@/views/Cinema'),
    children : [
        {
            path : 'brand',
            component : () => import('@/components/Brand')
        },
        {
            path : 'ciList',
            component : () => import('@/components/CiList')
        },
        {
            path : 'characteristic',
            component : () => import('@/components/Characteristic')
        },
        {
            path : '/cinema',
            component : () => import('@/components/CiList')
        }
    ]
    
}