import {useQuiz} from "../../hooks/useQuiz.js";
import Quiz from "../../Quiz/ui/Quiz/Quiz.jsx";


const QuizPage = ({periods, questionsData}) => {
	const {
		variable,
		actions
	} = useQuiz(questionsData)
	
	return <div>
		<Quiz
			actions={actions}
			variable={variable}
			periods={periods}
		/>
	</div>
}

export default QuizPage