import './App.css'
import {useCallback, useEffect, useMemo, useState} from "react";

function App() {
    const questionsData = [{
        id: 1,
        "questions": "Столыпенская реформа прията в...",
        "variant": ["1906 г", "1905 г", "1900 г", "1910 г"],
        "answer": 1,
    }, {
        id: 2,
        "questions": "Кто такие кулаки",
        "variant": ["Бедные и рабочие", "Зажиточные богатые кристяне"],
        "answer": 2,
    }, {
        id: 3,
        "questions": "Столыпенская реформа оброзовала Переселенческйи фонд, с целю?",
        "variant": ["Изятие земель у казаков", "Изятие земель у казаков", "Изятие земель у казаков"],
        "answer": 1,
    }, {
        id: 4,
        "questions": "Кангюи распологались на..",
        "variant": ["Южном Казакстане Сырбадье и Шаш", "На р.Талас"],
        "answer": 1,
    }, {
        id: 5, "questions": "Самый даерний курган", "variant": ["Боролдай", "Шиликты и Мэйлир"], "answer": 2,
    }, {
        id: 6,
        "questions": "Как звали китайского императора из-за которого начался кризис у гунов",
        "variant": ["Бумын", "У-ди", "Джучи", "Сыма-Цань"],
        "answer": 2,
    }, {
        id: 7,
        "questions": "Ставка трского кагганата (колыбель тюрков)",
        "variant": ["Маверонахр", "Семиречье", "Алтай", "Испинджаб"],
        "answer": 3,
    }, {
        id: 8,
        "questions": "Теретория заподнотюрского каганата",
        "variant": ["от Урала до Волги", "от Семиречье до Сырдарии", "От Иртыша до Алтая", "От Семиречье до Черного море"],
        "answer": 4,
    }, {
        id: 9,
        "questions": "Сарматы распологались",
        "variant": ["Междуречье Сырдарии и Амударии", "Восточный Казакстан", "Севереный Казакстан", "Западный казакстан междуречье Волги и Урала"],
        "answer": 4,
    }, {
        id: 10,
        "questions": "Культура на теретории Туркмении эпохи неолита",
        "variant": ["Джейтунская", "Ботайская", "Кельтеминарская", "Гиссарская"],
        "answer": 1,
    }, {
        id: 11,
        "questions": "101 г до н.э кангуюи обединились с...",
        "variant": ["Бактрицами", "Саками", "Гунами", "Ферганцами"],
        "answer": 1,
    }, {
        id: 12,
        "questions": "Руководители востания на Мангыстай в 1870",
        "variant": ["Доссан Танжиулы и Иса Тленбайулы"],
        "answer": 1,
    }, {
        id: 13, "questions": "Руководители востания на Мангыстай в 1870", "variant": ["Доссан Танжиулы"], "answer": 1,
    }]

    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    const [questions, setQuestions] = useState([])
    useEffect(() => {
        setQuestions(shuffle(questionsData))
    }, []);

    const [currentIndex, setCurrentIndex] = useState(0)
    const [selectedOption, setSelectedOption] = useState(null)
    const [status, setStatus] = useState('notStarted')
    const [isShowAnswer, setIsShowAnswer] = useState(false)
    const [isAnswer, setIsAnswer] = useState(false)

    const currentQuestion = useMemo(() => questions[currentIndex], [currentIndex, questions])

    const startQuiz = () => {
        setQuestions(shuffle(questionsData))
        setCurrentIndex(0)
        setSelectedOption(null)
        setIsAnswer(false)
        setStatus("isProcess")
    }

    const writeAnswer = () => {
        setIsShowAnswer(false)
        if (questions.length - 1 > currentIndex) {
            setCurrentIndex(prevState => prevState + 1)
        } else {
            setStatus("finished")
        }
        setSelectedOption(null)
        setIsAnswer(false)
    }

    const showAnswer = () => {
        setIsShowAnswer(true)
        setIsAnswer(true)
    }

    if (status === 'notStarted') {
        return <button onClick={() => startQuiz()}>Начать тестирование</button>
    }

    if (status === 'finished') {
        return <div>
            <p>Тестирование окончено</p>
            <button onClick={() => startQuiz()}>Начать занова</button>
        </div>
    }


    return (<>
        {status === 'isProcess' && <>
            {currentQuestion ? <div>
                <p>{currentQuestion.questions}</p>
                {currentQuestion.variant.map((variant, index) => (<div
                    style={index + 1 === currentQuestion.answer && isShowAnswer ? {backgroundColor: "#609732"} : {}}
                    onClick={() => setSelectedOption(index + 1)}>
                    <input
                        type="radio"
                        name={`${currentQuestion}`}
                        checked={index + 1 === selectedOption}
                    />
                    <label htmlFor={variant}>{index + 1}. {variant}</label><br/>
                </div>))}
                {!isAnswer && <button onClick={() => showAnswer()} disabled={!selectedOption}>Показать ответ</button>}
                {isAnswer && <button onClick={() => writeAnswer()}>Далее</button>}
            </div> : <>Loading...</>}
        </>

        }

    </>)
}

export default App
