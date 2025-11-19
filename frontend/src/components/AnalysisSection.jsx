import React from "react";
import { TrendingUp, Building2, Music, Flag } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export const AnalysisSection = () => {
  const examples = [
    {
      icon: Music,
      title: "Samba e a Malandragem",
      description:
        "O samba, especialmente figuras como Zé Ketti e Noel Rosa, eternizaram o personagem do malandro na cultura brasileira. As letras cantam a vida nas margens, a esperteza e a rejeição ao trabalho formal.",
      color: "green",
      image:
        "https://images.unsplash.com/photo-1583166614297-a97b68d5cead?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxCcmF6aWxpYW4lMjBjdWx0dXJlfGVufDB8fHx8MTc2MzQ5OTUxM3ww&ixlib=rb-4.1.0&q=85",
    },
    {
      icon: Flag,
      title: "Heróis Nacionais",
      description:
        "Figuras como Tiradentes representam o herói que se sacrifica pela nação. Seu martírio é celebrado como exemplo de renúncia pessoal em favor do coletivo.",
      color: "yellow",
      image:
        "https://images.unsplash.com/photo-1735839550903-98b86765a0d2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwzfHxCcmF6aWxpYW4lMjBjYXJuaXZhbCUyMG1hc2tzfGVufDB8fHx8MTc2MzQ5OTQ3N3ww&ixlib=rb-4.1.0&q=85",
    },
    {
      icon: Building2,
      title: 'Burocracia e o "Corredor"',
      description:
        "A burocracia brasileira, com seus formulários, carimbos e protocolos intermimáveis, representa a figura do corredor - aquele que exige o cumprimento estrito das normas.",
      color: "blue",
      image:
        "https://images.unsplash.com/photo-1708397832199-f7917247db06?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwyfHxCcmF6aWwlMjBzdHJlZXR8ZW58MHx8fHwxNzYzNDk5NTI2fDA&ixlib=rb-4.1.0&q=85",
    },
    {
      icon: TrendingUp,
      title: 'O "Jeitinho" no Cotidiano',
      description:
        'Desde a "fila preferencial" até o "conhece alguém lá?", o jeitinho brasileiro manifesta a tensão entre a regra universal e a relação pessoal.',
      color: "purple",
      image:
        "https://images.unsplash.com/photo-1522008629172-0c17aa47d1ee?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxCcmF6aWxpYW4lMjBjYXJuaXZhbHxlbnwwfHx8fDE3NjM0OTk0ODN8MA&ixlib=rb-4.1.0&q=85",
    },
  ];

  const colorClasses = {
    green: {
      border: "border-green-200",
      bg: "bg-green-50",
      text: "text-green-700",
      icon: "text-green-600",
    },
    yellow: {
      border: "border-yellow-200",
      bg: "bg-yellow-50",
      text: "text-yellow-700",
      icon: "text-yellow-600",
    },
    blue: {
      border: "border-blue-200",
      bg: "bg-blue-50",
      text: "text-blue-700",
      icon: "text-blue-600",
    },
    purple: {
      border: "border-purple-200",
      bg: "bg-purple-50",
      text: "text-purple-700",
      icon: "text-purple-600",
    },
  };

  return (
    <section
      id="analysis"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-50 to-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <TrendingUp className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Análises e Exemplos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Exemplos concretos que ilustram os conceitos de DaMatta na cultura
            brasileira
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {examples.map((example, index) => {
            const Icon = example.icon;
            const colors = colorClasses[example.color];
            return (
              <Card
                key={index}
                className={`border-2 ${colors.border} hover:shadow-2xl transition-all duration-300 overflow-hidden group`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={example.image}
                    alt={example.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div
                    className={`absolute bottom-4 left-4 w-12 h-12 ${colors.bg} rounded-full flex items-center justify-center`}
                  >
                    <Icon className={`w-6 h-6 ${colors.icon}`} />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className={`${colors.text} text-xl`}>
                    {example.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    {example.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Current Relevance */}
        <Card className="border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-2xl">
          <CardHeader className="bg-gradient-to-r from-green-50 to-yellow-50">
            <CardTitle className="text-2xl text-gray-800">
              Relações com a Cultura Atual
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-2">
                    Política Contemporânea
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Os arquétipos de DaMatta continuam visíveis na política
                    brasileira atual, onde vemos a tensão entre o discurso
                    formal das instituições e as práticas informais das relações
                    de poder.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-yellow-600 font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-2">
                    Cultura Digital
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Nas redes sociais, os personagens de DaMatta ganham novas
                    expressões: influencers que encarnam o malandro digital,
                    heróis midiáticos que defendem causas, e a polícia digital
                    fiscalizando comportamentos.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-2">
                    Economia e Trabalho
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    A economia informal, os "bicos", o empreendedorismo de
                    necessidade - todos ecos da figura do malandro que busca
                    sobreviver à margem do sistema formal.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Relevance Today */}
        <div className="mt-12 bg-gradient-to-r from-green-100 via-yellow-100 to-blue-100 p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Relevância da Obra Hoje
          </h3>
          <p className="text-gray-700 leading-relaxed text-center max-w-4xl mx-auto mb-6">
            Mais de 40 anos após sua publicação, "Carnavais, Malandros e Heróis"
            permanece essencial para compreender a sociedade brasileira. Os
            dilemas identificados por DaMatta - entre o individual e o coletivo,
            entre a lei e a relação pessoal, entre a ordem e a subversão -
            continuam estruturando nossa experiência social.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white px-6 py-3 rounded-full shadow-md">
              <span className="font-semibold text-green-700">
                Identidade Nacional
              </span>
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-md">
              <span className="font-semibold text-yellow-700">
                Comportamento Social
              </span>
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-md">
              <span className="font-semibold text-blue-700">
                Cultura Política
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalysisSection;
