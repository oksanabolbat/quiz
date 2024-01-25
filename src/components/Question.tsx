import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import { QUESTIONS } from "../data/qustions";
import { useState } from "react";

interface Props {
    activeIndex: number;
    selectAnswerHandler: (variant: string) => void;
    skipAnswerHandler: () => void;
}

export default function Question({
    selectAnswerHandler,
    skipAnswerHandler,
    activeIndex,
}: Props) {
    console.log("active index ", activeIndex);
    const [answer, setAnswer] = useState<{
        selectedAnswer: string;
        isCorrect: null | boolean;
    }>({ selectedAnswer: "", isCorrect: null });

    let timeout = 10000;
    if (answer.selectedAnswer) {
        timeout = 1000;
    }
    if (answer.isCorrect !== null) {
        timeout = 2000;
    }
    const handleSelectAnswer = (answer: string) => {
        console.log(answer);
        setAnswer({ selectedAnswer: answer, isCorrect: null });
        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: answer === QUESTIONS[activeIndex].answers[0],
            });
            setTimeout(() => selectAnswerHandler(answer), 2000);
        }, 1000);
    };

    let answerState: "true" | "false" | "answered" | "" = "";
    if (answer.selectedAnswer && answer.isCorrect !== null) {
        answerState = answer.isCorrect ? "true" : "false";
    } else if (answer.selectedAnswer) {
        answerState = "answered";
    }

    return (
        <div>
            <p className="mb-5 text-xl font-semibold">
                {QUESTIONS[activeIndex].text}
            </p>
            <p>{QUESTIONS[activeIndex].id}</p>
            <QuestionTimer
                timeout={timeout}
                onTimeout={
                    answer.selectedAnswer === "" ? skipAnswerHandler : () => {}
                }
            />
            <Answers
                answers={QUESTIONS[activeIndex].answers}
                answerState={answerState}
                selectedAnswer={answer.selectedAnswer}
                handleSelectAnswer={handleSelectAnswer}
            />
        </div>
    );
}
