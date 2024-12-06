import {NavLink} from 'react-router-dom'
import styles from "./Header.module.scss"
import cn from 'classnames'
import {subjectList} from '../../data/SubjectList.js'


const Header = () => {
	return <div className={styles.Header}>
		{subjectList.map((item) =>
			<NavLink to={item.path} className={({isActive}) => (isActive ? cn(styles.active, styles.button) : styles.button)} key={item.path+item.name}>{item.nameRus}</NavLink>
		)}
	</div>
}

export default Header