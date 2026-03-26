import styles from "./QuizWrapper.module.scss"
import * as React from "react";


interface QuizWrapperProps {
    children?: React.ReactNode
}

const QuizWrapper = ({children}: QuizWrapperProps) => {
    return <div className={styles.QuizWrapper}>
        {children}
    </div>
}

export default QuizWrapper