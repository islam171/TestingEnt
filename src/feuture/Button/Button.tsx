import styles from "./Button.module.scss"
import cn from 'classnames'
import * as React from "react";

interface IButton{
    children?: React.ReactNode,
    active: boolean,
    onClick?: () => void
}

const Button = ({children, active, onClick}: IButton) => {
	return <button onClick={onClick} className={cn(styles.button, active && styles.active)} >
		{children}
	</button>
}

export default Button