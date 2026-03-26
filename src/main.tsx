import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Layout from './Layout/Layout.js'
import QuizPage from './pages/QuizPage/QuizPage.js'
import {periodsPsychology, questionsPsychology} from './data/Psychology.js'
import {periodsPhiziologia, questionsPhilosophy} from './data/Philosophy.js'
import {periodsCultorologia, questionsCultorologia} from './data/Cultorologia.js'
import {periodsEnglish, questionsEnglish} from './data/englishData.js'
import {periodsHistory, questionsHistory} from './data/questionDataNew.js'

const router = createBrowserRouter(createRoutesFromElements(
	<Route path={"/"} element={<Layout/>}>
		<Route path={'/'} element={<QuizPage periods={periodsHistory} questionsData={questionsHistory}/>}/>
		<Route path={'/english'} element={<QuizPage periods={periodsEnglish} questionsData={questionsEnglish}/>}/>
		<Route path={'/psychology'} element={<QuizPage periods={periodsPsychology} questionsData={questionsPsychology}/>}/>
		<Route path={'/clutorologia'} element={<QuizPage periods={periodsCultorologia} questionsData={questionsCultorologia}/>}/>
		<Route path={'/physiology'} element={<QuizPage periods={periodsPhiziologia} questionsData={questionsPhilosophy}/>}/>
	</Route>
))

const rootElement = document.getElementById('root');
if (!rootElement) {
    throw new Error('Root element not found');
}


ReactDOM.createRoot(rootElement).render(
	<div className={"wrapper"}>
			<RouterProvider router={router}/>
			<div className={"auto"}></div>
	</div>
)
