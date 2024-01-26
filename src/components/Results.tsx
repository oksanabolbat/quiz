interface Props {
    wins: number;
    fails: number;
    tryAgainHandler: () => void;
}
export default function Results({ wins, fails, tryAgainHandler }: Props) {
    return (
        <>
            <h3>
                {wins > fails
                    ? "Congratulations!"
                    : "Well done, but you can better!"}
            </h3>
            <p>
                {wins} correct of {wins + fails}
            </p>
            <button
                onClick={tryAgainHandler}
                className=" text-violet-400 hover:text-violet-600 italic mt-4"
            >
                try again
            </button>
        </>
    );
}
