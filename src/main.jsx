import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Layout from './Layout/Layout.jsx'
import QuizPage from './pages/QuizPage/QuizPage.jsx'
import {periodsPsychology, questionsPsychology} from './data/Psychology.js'
import {periodsPhiziologia, questionsPhiziologia} from './data/Fiziologia.js'
import {periodsCultorologia, questionsCultorologia} from './data/Cultorologia.js'
import {periodsEnglish, questionsEnglish} from './data/englishData.js'
import {periodsHistory, questionsHistory} from './data/questionDataNew.js'

const router = createBrowserRouter(createRoutesFromElements(
	<Route path={"/"} element={<Layout/>}>
		<Route path={'/'} element={<QuizPage periods={periodsHistory} questionsData={questionsHistory}/>}/>
		<Route path={'/english'} element={<QuizPage periods={periodsEnglish} questionsData={questionsEnglish}/>}/>
		<Route path={'/psychology'} element={<QuizPage periods={periodsPsychology} questionsData={questionsPsychology}/>}/>
		<Route path={'/clutorologia'} element={<QuizPage periods={periodsCultorologia} questionsData={questionsCultorologia}/>}/>
		<Route path={'/physiology'} element={<QuizPage periods={periodsPhiziologia} questionsData={questionsPhiziologia}/>}/>
	</Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
	<div className={"wrapper"}>
			<RouterProvider router={router}/>
			<div className={"auto"}></div>
			<div className={"ErrorBounder"}>Если на сайте будут найдены опечатки или системные сбои, то пересылайте фото и объяснение на эту почту: Shakaev.2020@mail.ru
			</div>
	</div>
)
