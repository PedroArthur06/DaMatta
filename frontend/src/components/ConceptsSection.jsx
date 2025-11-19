import React from "react";
import { Users, Zap, Trophy, PartyPopper } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export const ConceptsSection = () => {
  return (
    <section
      id="concepts"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-green-50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
            <Users className="w-8 h-8 text-yellow-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Conceitos Principais do Livro
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Carnavais, Malandros e Heróis: Para uma Sociologia do Dilema
            Brasileiro
          </p>
          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded mt-4"></div>
        </div>

        {/* Three Social Characters */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Os Três Personagens Sociais
          </h3>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="malandro"
              className="border-2 border-green-200 rounded-lg bg-white hover:shadow-lg transition-shadow"
            >
              <AccordionTrigger className="px-6 hover:no-underline">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-xl font-bold text-green-700">
                      O Malandro
                    </h4>
                    <p className="text-sm text-gray-500">
                      A esperteza e a jeitinho brasileiro
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    O malandro representa a figura que navega entre as regras
                    formais e informais da sociedade brasileira. Ele não é
                    necessariamente um criminoso, mas alguém que usa a esperteza
                    e o "jeitinho" para sobreviver e prosperar.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="font-semibold text-green-800 mb-2">
                      Características principais:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>Capacidade de adaptação às circunstâncias</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>Rejeição ao trabalho formal e sistemático</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>
                          Valorização da esperteza e da criatividade social
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>Ambiguidade moral e ética situacional</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="heroi"
              className="border-2 border-yellow-200 rounded-lg bg-white hover:shadow-lg transition-shadow"
            >
              <AccordionTrigger className="px-6 hover:no-underline">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-xl font-bold text-yellow-700">
                      O Herói
                    </h4>
                    <p className="text-sm text-gray-500">
                      O renunciador e o sacrifício
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    O herói é aquele que renuncia aos seus interesses pessoais
                    em favor do coletivo. Ele segue as regras, trabalha dentro
                    do sistema e faz sacrifícios pela sociedade, representando o
                    ideal do cidadão disciplinado.
                  </p>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="font-semibold text-yellow-800 mb-2">
                      Características principais:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-2">•</span>
                        <span>
                          Compromisso com as normas e leis estabelecidas
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-2">•</span>
                        <span>Sacrifício pessoal pelo bem comum</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-2">•</span>
                        <span>
                          Valorização do trabalho honesto e sistemático
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-2">•</span>
                        <span>Representa o ideal moral da sociedade</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="corredor"
              className="border-2 border-blue-200 rounded-lg bg-white hover:shadow-lg transition-shadow"
            >
              <AccordionTrigger className="px-6 hover:no-underline">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-xl font-bold text-blue-700">
                      O Corredor (Caxias)
                    </h4>
                    <p className="text-sm text-gray-500">
                      A disciplina e a ordem
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    O corredor, também chamado de "caxias", é aquele que segue
                    rigidamente as regras e a hierarquia. Representa a ordem, a
                    disciplina e a burocracia, sendo frequentemente visto como
                    inflexível e formalista.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="font-semibold text-blue-800 mb-2">
                      Características principais:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Adesão estrita às normas e regulamentos</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Valorização da hierarquia e autoridade</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Formalismo e rigidez comportamental</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Representa a ordem institucional</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Carnival Section */}
        <Card className="border-2 border-yellow-200 hover:border-yellow-400 transition-all duration-300 hover:shadow-2xl mb-12">
          <CardHeader className="bg-gradient-to-r from-yellow-50 to-green-50">
            <CardTitle className="flex items-center space-x-3 text-2xl text-gray-800">
              <PartyPopper className="w-8 h-8 text-yellow-600" />
              <span>O Significado Cultural do Carnaval</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1708014218991-33040743245a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHxCcmF6aWxpYW4lMjBjYXJuaXZhbCUyMG1hc2tzfGVufDB8fHx8MTc2MzQ5OTQ3N3ww&ixlib=rb-4.1.0&q=85"
                  alt="Carnaval brasileiro"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  Para DaMatta, o Carnaval não é apenas uma festa, mas um ritual
                  fundamental que revela a estrutura profunda da sociedade
                  brasileira.
                </p>
                <p className="leading-relaxed">
                  Durante o Carnaval, as hierarquias sociais são temporariamente
                  suspensas, permitindo uma inversão simbólica da ordem
                  cotidiana.
                </p>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="font-semibold text-yellow-800 mb-2">
                    O Carnaval como ritual de inversão:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">✓</span>
                      <span>Suspensão temporária das normas sociais</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">✓</span>
                      <span>
                        Possibilidade de ser "o outro" através das fantasias
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">✓</span>
                      <span>Renovação e reafirmação dos valores sociais</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">✓</span>
                      <span>Momento de catarse coletiva</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interpretation Section */}
        <Card className="border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-2xl">
          <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
            <CardTitle className="text-2xl text-gray-800">
              Como DaMatta Interpreta a Sociedade Brasileira
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border-l-4 border-green-500 shadow-md">
                <h4 className="font-bold text-lg text-gray-800 mb-3">
                  Dualidade Estrutural
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  A sociedade brasileira é marcada por uma dualidade entre "a
                  casa" (espaço privado, das relações pessoais) e "a rua"
                  (espaço público, das leis impessoais).
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border-l-4 border-yellow-500 shadow-md">
                <h4 className="font-bold text-lg text-gray-800 mb-3">
                  Hierarquia Relacional
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Diferente de sociedades individualistas, o Brasil valoriza as
                  relações pessoais, onde a famosa pergunta "Você sabe com quem
                  está falando?" revela a importância da posição social.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500 shadow-md">
                <h4 className="font-bold text-lg text-gray-800 mb-3">
                  Jeitinho Brasileiro
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  A capacidade de navegação entre regras formais e informais,
                  transformando obstáculos burocráticos em oportunidades através
                  das relações pessoais.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border-l-4 border-purple-500 shadow-md">
                <h4 className="font-bold text-lg text-gray-800 mb-3">
                  Rituais de Inversão
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Eventos como o Carnaval funcionam como válvulas de escape
                  social, permitindo a expressão de tensões e a reafirmação da
                  ordem através da desordem temporária.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ConceptsSection;
