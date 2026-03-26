import styles from "./QuizCard.module.scss"
import cn from "classnames";
import type {IQuestion} from "../../../models/questions.js";


interface IQuizCard {
    currentQuestion: IQuestion;
    flipCard: () => void;
    isShowAnswer: boolean;
    isTurnQuestion: boolean
}

const QuizCard = ({currentQuestion, flipCard, isShowAnswer, isTurnQuestion}: IQuizCard) => {
    return <div className={styles.QuizCard} onClick={() => flipCard()}>
        <div className={cn(styles.QuizCard__side, styles.front, isShowAnswer && styles.active)}>
            <p >{isTurnQuestion ? currentQuestion.question : currentQuestion.answer}</p>
        </div>
        <div className={cn(styles.QuizCard__side, styles.back, isShowAnswer && styles.active)}>
            <p >{isTurnQuestion ? currentQuestion.answer : currentQuestion.question}</p>
        </div>
    </div>
}

export default QuizCard