import ReactDOM from 'react-dom/client'
import './index.css'
import Home from "./pages/Home/Home.jsx";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import English from "./pages/English/English.jsx";
import Layout from './Layout/Layout.jsx'

const router = createBrowserRouter(createRoutesFromElements(
	<Route path={"/"} element={<Layout/>}>
		<Route path={'/'} element={<Home/>}/>
		<Route path={'/english'} element={<English/>}/>
	</Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
	<div className={"wrapper"}>
			<RouterProvider router={router}/>
	</div>
)
