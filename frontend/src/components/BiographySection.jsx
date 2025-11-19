import React from "react";
import { User, GraduationCap, Star, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export const BiographySection = () => {
  return (
    <section id="biography" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <User className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Quem é Roberto DaMatta
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-2 border-green-100 hover:border-green-300 transition-all duration-300 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-green-700">
                <User className="w-6 h-6" />
                <span>Biografia</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Roberto Augusto DaMatta, nascido em 1936 em Niterói, Rio de
                Janeiro, é um dos mais importantes antropólogos brasileiros
                contemporâneos.
              </p>
              <p>
                Sua obra revolucionou a forma como entendemos a sociedade
                brasileira, trazendo uma perspectiva única sobre os rituais,
                símbolos e comportamentos que caracterizam nossa cultura.
              </p>
              <p>
                DaMatta é conhecido por sua capacidade de analisar o cotidiano
                brasileiro com profundidade antropológica, revelando
                significados ocultos em práticas aparentemente simples.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-yellow-100 hover:border-yellow-300 transition-all duration-300 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-yellow-700">
                <GraduationCap className="w-6 h-6" />
                <span>Formação Acadêmica</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold">Graduação</p>
                  <p className="text-sm text-gray-600">
                    Sociologia e Política pela Pontifícia Universidade Católica
                    do Rio de Janeiro (PUC-RJ)
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold">Doutorado</p>
                  <p className="text-sm text-gray-600">
                    Ph.D. em Antropologia pela Universidade de Harvard (EUA)
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold">Carreira</p>
                  <p className="text-sm text-gray-600">
                    Professor emérito da Universidade de Notre Dame (EUA) e do
                    Museu Nacional (UFRJ)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-blue-700">
              <Star className="w-6 h-6" />
              <span>Importância na Antropologia Brasileira</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <Award className="w-8 h-8 text-blue-600 mb-3" />
                <h4 className="font-semibold text-gray-800 mb-2">
                  Pioneirismo Metodológico
                </h4>
                <p className="text-sm text-gray-600">
                  Desenvolveu uma abordagem única para estudar a cultura
                  brasileira, combinando análise estrutural com interpretação
                  simbólica.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <Award className="w-8 h-8 text-green-600 mb-3" />
                <h4 className="font-semibold text-gray-800 mb-2">
                  Análise Cultural
                </h4>
                <p className="text-sm text-gray-600">
                  Revelou como rituais como o Carnaval funcionam como momentos
                  de inversão e renovação social na sociedade brasileira.
                </p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <Award className="w-8 h-8 text-yellow-600 mb-3" />
                <h4 className="font-semibold text-gray-800 mb-2">
                  Legado Intelectual
                </h4>
                <p className="text-sm text-gray-600">
                  Suas obras são referência obrigatória nos estudos sobre
                  identidade nacional e comportamento social brasileiro.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BiographySection;
