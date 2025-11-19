import React, { useState } from "react";
import { Award, CheckCircle, XCircle, RefreshCw } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { quizQuestions } from "../mockData";
import { toast } from "sonner";

export const QuizSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex) => {
    if (answeredQuestions.includes(currentQuestion)) return;

    setSelectedAnswer(answerIndex);
    setShowResult(true);

    const isCorrect =
      answerIndex === quizQuestions[currentQuestion].correctAnswer;

    if (isCorrect) {
      setScore(score + 1);
      toast.success("Resposta correta! Parabéns!");
    } else {
      toast.error("Resposta incorreta. Tente novamente!");
    }

    setAnsweredQuestions([...answeredQuestions, currentQuestion]);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions([]);
    setQuizCompleted(false);
    toast.info("Quiz reiniciado!");
  };

  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <section
      id="quiz"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-yellow-50"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
            <Award className="w-8 h-8 text-yellow-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Quiz Interativo
          </h2>
          <p className="text-xl text-gray-600">
            Teste seus conhecimentos sobre Roberto DaMatta
          </p>
          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded mt-4"></div>
        </div>

        {!quizCompleted ? (
          <Card className="border-2 border-yellow-200 shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-yellow-50 to-green-50">
              <div className="flex justify-between items-center mb-4">
                <CardTitle className="text-gray-800">
                  Questão {currentQuestion + 1} de {quizQuestions.length}
                </CardTitle>
                <div className="text-sm font-semibold text-gray-600">
                  Pontuação: {score}/{quizQuestions.length}
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-yellow-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </CardHeader>
            <CardContent className="pt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                {question.question}
              </h3>
              <div className="space-y-4">
                {question.options.map((option, index) => {
                  const isSelected = selectedAnswer === index;
                  const isCorrect = index === question.correctAnswer;
                  const showCorrect = showResult && isCorrect;
                  const showIncorrect = showResult && isSelected && !isCorrect;

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={answeredQuestions.includes(currentQuestion)}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 ${
                        showCorrect
                          ? "border-green-500 bg-green-50"
                          : showIncorrect
                          ? "border-red-500 bg-red-50"
                          : isSelected
                          ? "border-yellow-500 bg-yellow-50"
                          : "border-gray-200 hover:border-yellow-300 hover:bg-yellow-50"
                      } ${
                        answeredQuestions.includes(currentQuestion)
                          ? "cursor-not-allowed opacity-75"
                          : "cursor-pointer"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-700">
                          {option}
                        </span>
                        {showCorrect && (
                          <CheckCircle className="w-6 h-6 text-green-600" />
                        )}
                        {showIncorrect && (
                          <XCircle className="w-6 h-6 text-red-600" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {showResult && (
                <div className="mt-6">
                  <Button
                    onClick={handleNextQuestion}
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg transition-colors"
                  >
                    {currentQuestion < quizQuestions.length - 1
                      ? "Próxima Questão"
                      : "Finalizar Quiz"}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        ) : (
          <Card className="border-2 border-green-200 shadow-2xl">
            <CardContent className="pt-12 pb-12 text-center">
              <Award className="w-20 h-20 text-yellow-500 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Quiz Concluído!
              </h3>
              <p className="text-xl text-gray-600 mb-2">
                Você acertou{" "}
                <span className="font-bold text-green-600">{score}</span> de{" "}
                <span className="font-bold">{quizQuestions.length}</span>{" "}
                questões
              </p>
              <div className="text-5xl font-bold text-yellow-500 my-6">
                {Math.round((score / quizQuestions.length) * 100)}%
              </div>
              <p className="text-gray-600 mb-8">
                {score === quizQuestions.length
                  ? "Perfeito! Você domina o conteúdo!"
                  : score >= quizQuestions.length * 0.7
                  ? "Ótimo trabalho! Você tem um bom conhecimento!"
                  : score >= quizQuestions.length * 0.5
                  ? "Bom esforço! Continue estudando!"
                  : "Continue estudando e tente novamente!"}
              </p>
              <Button
                onClick={resetQuiz}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center space-x-2"
              >
                <RefreshCw className="w-5 h-5" />
                <span>Tentar Novamente</span>
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default QuizSection;
