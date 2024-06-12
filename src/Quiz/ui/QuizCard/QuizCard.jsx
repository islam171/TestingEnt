import styles from "./QuizCard.module.scss"
import cn from "classnames";

const QuizCard = ({currentQuestion, setIsShowAnswer, isShowAnswer}) => {
    return <div className={styles.QuizCard} onClick={() => setIsShowAnswer(prev => !prev)}>
        <div className={cn(styles.QuizCard__side, styles.front, isShowAnswer && styles.active)}>
            <p >{currentQuestion.questions}</p>
        </div>
        <div className={cn(styles.QuizCard__side, styles.back, isShowAnswer && styles.active)}>
            <p >{currentQuestion.answer}</p>
        </div>
    </div>
}

export default QuizCard