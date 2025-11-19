import React from "react";
import { BookOpen, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { references } from "../mockData";

export const ReferencesSection = () => {
  return (
    <section
      id="references"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-100"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-700 rounded-full mb-4">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Referências
          </h2>
          <p className="text-xl text-gray-600">
            Obras recomendadas de Roberto DaMatta
          </p>
          <div className="w-24 h-1 bg-gray-700 mx-auto rounded mt-4"></div>
        </div>

        <Card className="border-2 border-gray-300 shadow-xl">
          <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100">
            <CardTitle className="text-gray-800">
              Leituras Recomendadas
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              {references.map((reference, index) => (
                <div
                  key={reference.id}
                  className="flex items-start space-x-4 p-4 bg-white border-2 border-gray-200 rounded-lg hover:border-green-300 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-700 font-bold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-bold text-lg text-gray-800 mb-1">
                          {reference.title}
                        </h4>
                        <p className="text-gray-600 text-sm mb-1">
                          <span className="font-medium">Autor:</span>{" "}
                          {reference.author}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>
                            <span className="font-medium">Ano:</span>{" "}
                            {reference.year}
                          </span>
                          <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium">
                            {reference.type}
                          </span>
                        </div>
                      </div>
                      <ExternalLink className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-yellow-50 rounded-lg border-2 border-green-200">
              <h4 className="font-bold text-lg text-gray-800 mb-3">
                Outras Fontes
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>
                    Museu Nacional - UFRJ: Acervo de trabalhos acadêmicos
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>
                    Portal de Periódicos CAPES: Artigos sobre antropologia
                    brasileira
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>
                    SciELO: Publicações científicas em ciências sociais
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>
                    Biblioteca Digital de Teses e Dissertações: Estudos sobre
                    DaMatta
                  </span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ReferencesSection;
