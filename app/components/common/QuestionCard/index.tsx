import type { QuestionCardProps } from "./type";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { Label } from "~/components/ui/label";
import { useState } from "react";
import { clientApi } from "~/services/http.client";
import { ResultPopup } from "../ResultPopup";

type ReplyResult = {
    message: string;
    data: {
        id: string;
        title: string;
        description: string;
        imageUrl: string;
        totalWeight: number;
    };
};

const QuestionCard = ({ survey, questions }: QuestionCardProps) => {
    const [answers, setAnswers] = useState<any[]>([]);
    const [result, setResult] = useState<ReplyResult | null>(null);
    const [open, setOpen] = useState(false);

    const handleSelect = (questionId: string, answerId: string) => {
        setAnswers((prev) => {
            const exists = prev.find((a) => a.questionId === questionId);

            if (exists) {
                return prev.map((a) =>
                    a.questionId === questionId ? { ...a, answerId } : a
                );
            }
            return [...prev, { questionId, answerId }];
        });
    };

    const handleSend = async () => {
        try {
            const res = await clientApi.post("/replies/" + survey._id, answers);
            setResult(res.data);
            setOpen(true);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <section className="rounded-2xl border from-slate-50 to-slate-100 shadow-sm">
                <header className="flex items-center justify-between gap-3 px-5 py-4 border-b">
                    <div className="flex items-center gap-3">
                        <span className="inline-flex items-center rounded-full bg-[#FF5C5C] text-slate-50 px-3 py-1 text-xs font-semibold">
                            Test
                        </span>
                        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">
                            {survey.title}
                        </h2>
                    </div>
                    <span className="text-xs sm:text-sm text-slate-500">
                        {questions.length} soru
                    </span>
                </header>

                {survey.headerImageUrl ? (
                    <div className="p-4 sm:p-5">
                        <div className="overflow-hidden rounded-xl border bg-white">
                            <img
                                src={survey.headerImageUrl}
                                alt="Question Illustration"
                                className="aspect-video w-full object-cover transition-transform duration-300 hover:scale-[1.01]"
                            />
                        </div>
                    </div>
                ) : null}

                <div className="px-4 pb-5 sm:px-5 sm:pb-6">
                    <ol className="space-y-4 sm:space-y-5">
                        {questions.map((q, qIndex) => (
                            <li key={q._id}>
                                <div className="rounded-xl border bg-white shadow-xs">
                                    <div className="flex items-start gap-3 px-4 py-3 sm:px-5 sm:py-4 border-b">
                                        <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#FF5C5C] text-white text-xs font-bold">
                                            {qIndex + 1}
                                        </span>
                                        <p className="text-base sm:text-lg font-medium text-slate-800">
                                            {q.text}
                                        </p>
                                    </div>
                                    <div className="px-3 py-3 sm:px-4 sm:py-4">
                                        <RadioGroup
                                            className="flex flex-col gap-2"
                                            name={`question-${q._id}`}
                                            onValueChange={(value) => handleSelect(q._id, value)}
                                        >
                                            {q.answers.map((a) => {
                                                const inputId = `q-${q._id}-a-${a._id}`;
                                                return (
                                                    <div
                                                        key={a._id}
                                                        className="group rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 transition shadow-[0_0_0_0_rgba(0,0,0,0)] hover:shadow-[0_2px_10px_-4px_rgba(0,0,0,0.15)]"
                                                    >
                                                        <div className="flex items-center gap-3 p-3">
                                                            <RadioGroupItem
                                                                id={inputId}
                                                                value={a._id}
                                                                className="peer h-5 w-5 rounded-full bg-gray-200 data-[state=checked]:bg-[#FF5C5C] transition-colors"
                                                            />
                                                            <Label
                                                                htmlFor={inputId}
                                                                className="flex-1 cursor-pointer text-sm sm:text-base text-slate-800"
                                                            >
                                                                {a.text}
                                                            </Label>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </RadioGroup>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ol>

                    <button
                        onClick={handleSend}
                        className="mt-6 w-full rounded-lg bg-[#FF5C5C] hover:bg-[#e44c4c] text-white font-semibold py-3 shadow transition"
                    >
                        Sonuçları Gönder
                    </button>
                </div>
            </section>
            <ResultPopup open={open} onOpenChange={setOpen} result={result} />
        </>
    );
};

export default QuestionCard;
