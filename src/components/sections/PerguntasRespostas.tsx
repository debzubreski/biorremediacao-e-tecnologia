import React from 'react';
import { MessageCircle, HelpCircle, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const PerguntasRespostas = () => {
  // URL do Google Forms
  const GOOGLE_FORMS_URL = 'https://forms.gle/hCchgn8iiZxKfcJ78';

  const faqItems = [
    {
      id: 'item-1',
      pergunta: 'O que é biorremediação?',
      resposta: 'A biorremediação é uma tecnologia que utiliza organismos vivos, principalmente microrganismos, para degradar ou transformar contaminantes ambientais em substâncias menos tóxicas ou inofensivas. É uma solução sustentável e econômica para a recuperação de solos contaminados.',
    },
    {
      id: 'item-2',
      pergunta: 'Como funciona o processo de biorremediação?',
      resposta: 'O processo ocorre através da atividade metabólica de microrganismos que utilizam os contaminantes como fonte de energia ou carbono. Estes organismos quebram as moléculas tóxicas em compostos mais simples e menos perigosos, como água e dióxido de carbono.',
    },
    {
      id: 'item-3',
      pergunta: 'Quais são as principais diferenças entre os tipos de solo estudados?',
      resposta: 'Terra Vermelha: rica em óxidos de ferro, boa drenagem. Terra Pós-Colheita: contém resíduos orgânicos, alta atividade microbiana. Terra Vegetal: rica em matéria orgânica, ideal para cultivo. Cada tipo tem características específicas que influenciam a eficácia da biorremediação.',
    },
    {
      id: 'item-4',
      pergunta: 'Como funciona o sensor Arduino no projeto?',
      resposta: 'O sensor de umidade do solo Arduino mede a condutividade elétrica do solo. Valores mais altos indicam solo mais seco, enquanto valores menores indicam maior umidade. Isso é crucial para monitorar as condições ideais para os processos de biorremediação.',
    },
    {
      id: 'item-5',
      pergunta: 'Quais são os benefícios da biorremediação?',
      resposta: 'Os principais benefícios incluem: baixo custo comparado a métodos tradicionais, sustentabilidade ambiental, não produção de resíduos secundários, possibilidade de tratamento in situ, e eficácia comprovada na degradação de diversos contaminantes.',
    },
  ];

  const handleOpenGoogleForms = () => {
    window.open(GOOGLE_FORMS_URL, '_blank');
  };

  return (
    <section id="perguntas-respostas" className="py-16 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MessageCircle className="w-8 h-8 text-green-600" />
            <h2 className="text-4xl font-bold text-gray-900">Perguntas e Respostas</h2>
          </div>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Encontre respostas para as perguntas mais frequentes sobre biorremediação ou envie sua própria pergunta.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* FAQ Section */}
          <Card className="border-green-100">
            <CardHeader>
              <div className="flex items-center gap-3">
                <HelpCircle className="w-6 h-6 text-green-600" />
                <CardTitle className="text-2xl text-gray-900">Perguntas Frequentes</CardTitle>
              </div>
              <CardDescription>
                Confira as perguntas mais comuns sobre biorremediação e tecnologia.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item) => (
                  <AccordionItem key={item.id} value={item.id}>
                    <AccordionTrigger className="text-left hover:text-green-600">
                      {item.pergunta}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed">
                      {item.resposta}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* Google Forms Section */}
          <Card className="border-blue-100">
            <CardHeader>
              <div className="flex items-center gap-3">
                <ExternalLink className="w-6 h-6 text-blue-600" />
                <CardTitle className="text-2xl text-gray-900">Faça sua Pergunta</CardTitle>
              </div>
              <CardDescription>
                Não encontrou o que procurava? Use nosso formulário do Google para enviar sua pergunta!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-3">📝 Como funciona:</h3>
                <ul className="space-y-2 text-blue-800 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    Clique no botão abaixo para abrir o formulário
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    Preencha sua pergunta e dados de contato
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    Receba a resposta no seu email em até 48h
                  </li>
                </ul>
              </div>

              <Button
                onClick={handleOpenGoogleForms}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-lg"
                size="lg"
              >
                <ExternalLink className="w-5 h-5 mr-3" />
                Abrir Formulário de Perguntas
              </Button>

              <div className="text-center text-sm text-gray-500">
                <p>O formulário abrirá em uma nova aba</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-2">Contribua com nosso projeto!</h3>
            <p className="opacity-90">
              Suas perguntas nos ajudam a melhorar e expandir nosso conhecimento sobre biorremediação. 
              Cada pergunta é uma oportunidade de aprendizado para toda a comunidade.
            </p>
          </div>
        </div>

        {/* Instruções de configuração do Google Forms */}
        <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
          <h4 className="font-semibold text-green-800 mb-2">📋 Como criar seu Google Forms:</h4>
          <div className="text-green-700 text-sm space-y-2">
            <p><strong>1.</strong> Acesse <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer" className="underline text-green-600">forms.google.com</a></p>
            <p><strong>2.</strong> Crie um novo formulário</p>
            <p><strong>3.</strong> Adicione campos: Nome, Email, Categoria, Pergunta</p>
            <p><strong>4.</strong> Configure para receber notificações por email</p>
            <p><strong>5.</strong> Copie o link e substitua na constante GOOGLE_FORMS_URL no código</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerguntasRespostas;
