import styles from "./Button.module.scss"
import cn from 'classnames'

const Button = ({children, active, onClick}) => {
	return <button onClick={onClick} className={cn(styles.button, active && styles.active)}>
		{children}
	</button>
}

export default Button