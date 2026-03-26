import {useQuiz} from "../../hooks/useQuiz.js";

import type {IQuestion} from "../../models/questions.js";
import type {IPeriod} from "../../models/types.js";
import Quiz from "../../Quiz/ui/Quiz/Quiz.js";


interface IQuizPageProps {
    periods: IPeriod[];
    questionsData: IQuestion[]
}

const QuizPage = ({periods, questionsData}: IQuizPageProps) => {
	const {
		variable,
		actions
	} = useQuiz(questionsData)
	return <div>
		<Quiz
			actions={actions}
			periods={periods}
            variable={variable}
		/>
	</div>
}

export default QuizPage