import ViewHome from "../views/ViewHome"
import ViewAbout from "../views/ViewAbout"
import ViewStocks from "../views/ViewStocks"
import ViewAccount from "../views/ViewAccount"
import ViewDepot from "../views/ViewDepot"

const routes = [
    {
        path: '/',
        name: 'Home',
        component: ViewHome,
        icon: 'pi pi-home'
    },
    {
        path: '/about',
        name: 'About',
        component: ViewAbout,
        icon: 'pi pi-id-card'
    },
    {
        path: '/stocks',
        name: 'Stocks',
        component: ViewStocks,
        icon: 'pi pi-chart-line'
    },
    {
        path: '/depot',
        name: 'Depot',
        component: ViewDepot,
        icon: 'pi pi-wallet'
    },
    {
        path: '/account',
        name: 'Account',
        component: ViewAccount,
        icon: 'pi pi-cog'
    },
]

export default routes