import {NavLink} from 'react-router-dom'
import styles from "./Header.module.scss"
import cn from 'classnames'


const Header = () => {
	return <div className={styles.Header}>
		<NavLink to={"/english"} className={cn(({isActive}) => isActive ? styles.active : "", styles.button )}>English</NavLink>
		<NavLink to={"/"} className={cn(({isActive}) => isActive ? styles.active : "", styles.button )}>История Казахстана</NavLink>
	</div>
}

export default Header