import styles from './Selection.module.css'
import cn from 'classnames'

const Selection = ({ value, values, toggleSelection }) => {
	return (
		<div className={styles.Selection}>
			{values &&
				values.map((item, index) => (
					<div
						key={`${item.name}${index}`}
						className={cn(
							styles.item,
							value === item.slug ? styles.active : ''
						)}
						onClick={() => toggleSelection(item.slug)}
					>
						{item.name}
					</div>
				))}
		</div>
	)
}

export default Selection
