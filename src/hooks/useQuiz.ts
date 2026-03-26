import {useEffect, useState} from "react";
import type {IQuestion} from "../models/questions.js";
import * as events from "node:events";


export const useQuiz = (questionsData: IQuestion[]) => {

    const [status, setStatus] = useState<"notStarted" | "isProcess" | "Finished">('notStarted')
    const [isShowAnswer, setIsShowAnswer] = useState<boolean>(false)
    const [isTurnQuestion, setIsTurnQuestion] = useState<boolean>(true)
    const [period, setPeriod] = useState<number>(1)


    const [questions, setQuestions] = useState<IQuestion[]>([])
    const [countWrongAnswer, setCountWrongAnswer] = useState<number>(0);
    const currentQuestion: IQuestion | undefined = questions[0]

    let len = questionsData.length;
    const progress: number = (len - questions.length) / len * 100;


    useEffect(() => {
        let data: IQuestion[] = questionsData.filter(item => item.period === period)
        len = data.length
        setQuestions(shuffle(data))
    }, [questionsData, period]);

    useEffect(() => {
        if(status === 'Finished') return
        const handleKeyDown = (e: events) => {
            switch (e.key) {
                case ' ': {
                    e.preventDefault()
                    flipCard()
                    break
                }
                case 'ArrowRight':
                    rightAnswer()
                    break
                case 'ArrowLeft':
                    wrongAnswer()
                    break
                case 'Enter':
                    rightAnswer()
                    break
                case 'Backspace':
                    wrongAnswer()
                    break
                default:
                    return
            }
        }
        if(status === 'isProcess') {
            document.addEventListener('keydown', handleKeyDown)
        }
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [])

    function shuffle(array: IQuestion[]) : IQuestion[] {
        return array.sort(() => Math.random() - 0.5);
    }

    const startQuiz = () => {
        setStatus("isProcess")
    }

    const flipCard = () => {
        setIsTurnQuestion(prev => !prev)
    }

    const showAnswer = () => {
        setIsShowAnswer(prev => !prev)
    }

    const rightAnswer = () => {
        setQuestions(prev => prev.slice(1))
    }

    const wrongAnswer = () => {

        setQuestions((prev: IQuestion[]) => {
            if (prev.length <= 1) return prev;
            const firstQuestion = prev[0];
            if(!firstQuestion) return prev;
            return [...prev.slice(1), firstQuestion];
        });
        setCountWrongAnswer((prev: number)  => prev + 1)
    }



    const setPeriodValue = (value: number) => {
        setPeriod(value)
        setStatus('notStarted')
    }

    return {actions: {rightAnswer, wrongAnswer, startQuiz, flipCard, setPeriodValue, showAnswer}, variable: {currentQuestion, status, isShowAnswer, progress, isTurnQuestion, period, countWrongAnswer}}
}