import styles from "./ProgressBar.module.scss"

const ProgressBar = ({progress}) => {
    return <div className={styles.ProgressBar}>
        <div className={styles.ProgressLine} style={{"width": `${progress}%`}}></div>
    </div>
}

export default ProgressBar