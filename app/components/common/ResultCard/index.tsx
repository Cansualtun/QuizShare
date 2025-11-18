import type { ResultCardProps } from "./type"

const ResultCard = ({ message, data }: ResultCardProps) => {
    return (
        <div className="w-full rounded-md">
            <p className="text-black text-2xl">{message}</p>
            <p className="text-pink-200">{data.title}</p>
            <p className="text-pink-200">{data.description}</p>
        </div>
    )
}

export default ResultCard