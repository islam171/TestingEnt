import styles from "../Quiz/Quiz.module.scss";

const QuizNotStarted = ({startQuiz}: {startQuiz: () => void}) => {
    return <div className={styles.wrapper}>
        <button onClick={() => startQuiz()}>Начать тестирование</button>
    </div>
}

export default QuizNotStarted;