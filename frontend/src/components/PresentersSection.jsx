import React from "react";
import { Users, UserCircle } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { presenters } from "../mockData";

export const PresentersSection = () => {
  const colorClasses = [
    {
      bg: "bg-green-50",
      border: "border-green-300",
      text: "text-green-700",
      icon: "bg-green-100",
    },
    {
      bg: "bg-yellow-50",
      border: "border-yellow-300",
      text: "text-yellow-700",
      icon: "bg-yellow-100",
    },
    {
      bg: "bg-blue-50",
      border: "border-blue-300",
      text: "text-blue-700",
      icon: "bg-blue-100",
    },
  ];

  return (
    <section id="presenters" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <Users className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Apresentadores
          </h2>
          <p className="text-xl text-gray-600">
            Equipe responsável pelo seminário
          </p>
          <div className="w-24 h-1 bg-green-500 mx-auto rounded mt-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {presenters.map((presenter, index) => {
            const colors = colorClasses[index % 3];
            return (
              <Card
                key={presenter.id}
                className={`border-2 ${colors.border} ${colors.bg} hover:shadow-2xl transition-all duration-300 group`}
              >
                <CardContent className="pt-8 pb-6 text-center">
                  <div
                    className={`w-20 h-20 ${colors.icon} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <UserCircle className={`w-12 h-12 ${colors.text}`} />
                  </div>
                  <h3 className={`text-xl font-bold ${colors.text} mb-2`}>
                    {presenter.name}
                  </h3>
                  <p className="text-gray-600 text-sm font-medium">
                    {presenter.section}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-green-50 via-yellow-50 to-blue-50 p-6 rounded-xl shadow-md inline-block">
            <p className="text-gray-700 font-medium">
              Cada apresentador será responsável por explicar sua respectiva
              seção durante o seminário.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresentersSection;
