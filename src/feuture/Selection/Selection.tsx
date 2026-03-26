import styles from './Selection.module.css'
import cn from 'classnames'
import type {ISelectionItem} from "./types.js";

interface ISelection {
    value: number,
    values: ISelectionItem[],
    toggleSelection: (slug: number) => void
}

const Selection = ({ value, values, toggleSelection }: ISelection) => {
	return (
		<div className={styles.Selection}>
			{values &&
				values.map((item: ISelectionItem, index: number) => (
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
