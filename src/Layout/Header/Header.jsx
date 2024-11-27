import {NavLink} from 'react-router-dom'
import styles from "./Header.module.scss"
import cn from 'classnames'


const Header = () => {
	return <div className={styles.Header}>
		<NavLink to={"/english"} className={({isActive}) => (isActive ? cn(styles.active, styles.button) : styles.button)}>English</NavLink>
		<NavLink to={"/"} className={({isActive}) => (isActive ? cn(styles.active, styles.button) : styles.button)}>История Казахстана</NavLink>
	</div>
}

export default Header