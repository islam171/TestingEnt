import Header from './Header/Header.js'
import {Outlet} from 'react-router-dom'

const Layout = () => {
	return <div>
		<Header/>
		<Outlet/>
	</div>
}

export default Layout