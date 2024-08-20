import styles from "../Quiz/Quiz.module.scss";

const QuizFinishPage = ({startQuiz}) => {
    return <div className={styles.Quiz__over}>
        <p>Тестирование окончено</p>
        <button onClick={() => startQuiz()}>Начать занова</button>
    </div>
}

export default QuizFinishPage