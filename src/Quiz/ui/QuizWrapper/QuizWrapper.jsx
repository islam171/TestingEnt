import styles from "./QuizWrapper.module.scss"

const QuizWrapper = ({children}) => {
    return <div className={styles.QuizWrapper}>
        {children}
    </div>
}

export default QuizWrapper