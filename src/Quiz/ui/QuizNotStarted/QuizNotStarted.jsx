import styles from "../Quiz/Quiz.module.scss";

const QuizNotStarted = ({startQuiz}) => {
    return <div className={styles.wrapper}>
        <button onClick={() => startQuiz()}>Начать тестирование</button>
    </div>
}

export default QuizNotStarted;