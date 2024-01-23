import { useCallback, useState } from "react";
import { QUESTIONS } from "../data/qustions";
import QuestionTimer from "./QuestionTimer";

export default function Quiz() {
    const [questions, setQuestions] = useState<string[]>([]);
    const activeIndex = questions.length;

    const answerHandler = useCallback(
        (answer: string) => {
            if (answer) {
                document
                    .getElementById(answer)
                    ?.classList.add(
                        answer === QUESTIONS[activeIndex].answers[0]
                            ? "bg-green-400"
                            : "bg-red-400"
                    );
            }
            setTimeout(() => {
                setQuestions((prev) => {
                    return [...prev, answer];
                });
            }, 500);
        },
        [activeIndex]
    );
    const handleSkipAnswer = useCallback(
        () => answerHandler(""),
        [answerHandler]
    );

    if (activeIndex === QUESTIONS.length) {
        return (
            <p className="text-center text-2xl py-5 text-sky-500">
                quiz completed!
            </p>
        );
    }
    const shuffledAnswers = [...QUESTIONS[activeIndex].answers].sort(
        () => Math.random() - 0.5
    );

    return (
        <>
            <p className="mb-5 text-xl font-semibold">
                {QUESTIONS[activeIndex].text}
            </p>
            <QuestionTimer
                timeout={10000}
                onTimeout={handleSkipAnswer}
                key={activeIndex}
            />
            <ul>
                {shuffledAnswers.map((variant) => {
                    return (
                        <li key={variant}>
                            <button
                                id={variant}
                                className={`bg-sky-300 border-1 rounded-3xl border-sky-800 w-full px-6 py-3 mb-4 text-left transition hover:opacity-50 hover:text-sky-900`}
                                onClick={() => answerHandler(variant)}
                            >
                                {variant}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
