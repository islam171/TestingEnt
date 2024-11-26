import styles from "./Home.module.scss"
import {useQuiz} from "../../hooks/useQuiz.js";
import {questionsData} from "../../data/questionDataNew.js";
import Quiz from '../../Quiz/ui/Quiz/Quiz.jsx'

const Home = () => {
	
	
	const {
		variable, actions
	} = useQuiz(questionsData)
	
	
	const periods = [{name: "Древний мир", slug: 1}, {name: "Средневековье", slug: 2}, {
		name: "Новое время", slug: 3
	}, {name: "Новейшая время", slug: 4}]
	
	return <div className={styles.Home}>
		
		<Quiz
			actions={actions}
			variable={variable}
		periods={periods}/>
	</div>
}

export default Home