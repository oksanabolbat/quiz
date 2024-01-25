import { useRef } from "react";

interface Props {
    answers: string[];
    selectedAnswer: string;
    answerState: "true" | "false" | "answered" | "";
    handleSelectAnswer: (variant: string) => void;
}
export default function Answers({
    answers,
    selectedAnswer,
    answerState,
    handleSelectAnswer,
}: Props) {
    const shuffledAnswers = useRef<string[] | undefined>();

    if (!shuffledAnswers.current) {
        shuffledAnswers.current = [...answers].sort(() => Math.random() - 0.5);
    }
    return (
        <ul>
            {shuffledAnswers.current.map((variant) => {
                let cssClass = "";
                const isSelected = selectedAnswer === variant;
                if (answerState === "answered" && isSelected) {
                    cssClass = "!bg-violet-400";
                } else if (answerState === "false" && variant === answers[0]) {
                    cssClass = "!bg-green-400";
                }
                if (isSelected) {
                    if (answerState === "true") {
                        cssClass = "!bg-green-400";
                    } else if (answerState === "false") {
                        cssClass = "!bg-red-500";
                    }
                }
                return (
                    <li key={variant}>
                        <button
                            id={variant}
                            className={` bg-sky-300  rounded-3xl  w-full px-6 py-3 mb-4 text-left transition hover:opacity-50 hover:text-sky-900  ${cssClass} `}
                            onClick={() => handleSelectAnswer(variant)}
                            disabled={answerState !== ""}
                        >
                            {variant}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}
