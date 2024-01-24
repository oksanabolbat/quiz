import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";

interface Props {
    questionText: string;
    answers: string[];
    activeIndex: number;
    answerState: string;
    selectedAnswer: string;
    selectAnswerHandler: (variant: string) => void;
    skipAnswerHandler: () => void;
}

export default function Question({
    questionText,
    answers,
    selectAnswerHandler,
    skipAnswerHandler,
    activeIndex,
    answerState,
    selectedAnswer,
}: Props) {
    return (
        <div key={activeIndex}>
            <p className="mb-5 text-xl font-semibold">{questionText}</p>
            <QuestionTimer timeout={10000} onTimeout={skipAnswerHandler} />
            <Answers
                answers={answers}
                answerState={answerState}
                selectedAnswer={selectedAnswer}
                handleSelectAnswer={selectAnswerHandler}
            />
        </div>
    );
}
