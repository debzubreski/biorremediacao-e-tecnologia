
import React, { useState } from 'react';
import { MessageCircle, HelpCircle, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import emailjs from '@emailjs/browser';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { useToast } from '@/hooks/use-toast';

const perguntaSchema = z.object({
  nome: z.string().optional(),
  email: z.string().email('Email inválido').optional().or(z.literal('')),
  categoria: z.string().min(1, 'Selecione uma categoria'),
  pergunta: z.string().min(10, 'A pergunta deve ter pelo menos 10 caracteres'),
});

type PerguntaForm = z.infer<typeof perguntaSchema>;

const PerguntasRespostas = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  // Configuração do EmailJS - SUBSTITUA PELOS SEUS DADOS
  const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
  const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
  const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PerguntaForm>({
    resolver: zodResolver(perguntaSchema),
  });

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

  const onSubmit = async (data: PerguntaForm) => {
    setIsLoading(true);
    
    try {
      // Preparar dados para o EmailJS
      const templateParams = {
        nome: data.nome || 'Não informado',
        email: data.email || 'Não informado',
        categoria: data.categoria,
        pergunta: data.pergunta,
        to_email: 'seuemail@exemplo.com', // SUBSTITUA pelo seu email
      };

      console.log('Enviando pergunta via EmailJS:', templateParams);

      // Enviar email via EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      
      toast({
        title: 'Pergunta enviada com sucesso!',
        description: 'Obrigado por sua pergunta. Responderemos em breve!',
      });
      
      reset();
    } catch (error) {
      console.error('Erro ao enviar pergunta:', error);
      toast({
        title: 'Erro ao enviar pergunta',
        description: 'Tente novamente mais tarde.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
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

          {/* Formulário de Perguntas */}
          <Card className="border-blue-100">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Send className="w-6 h-6 text-blue-600" />
                <CardTitle className="text-2xl text-gray-900">Faça sua Pergunta</CardTitle>
              </div>
              <CardDescription>
                Não encontrou o que procurava? Envie sua pergunta e responderemos no seu email (se fornecido)!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <input
                    {...register('nome')}
                    placeholder="Seu nome (opcional)"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="seu@email.com (opcional - para resposta)"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <select
                    {...register('categoria')}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Selecione uma categoria</option>
                    <option value="biorremediacão">Biorremediação</option>
                    <option value="tipos-solo">Tipos de Solo</option>
                    <option value="sensor-arduino">Sensor Arduino</option>
                    <option value="outros">Outros</option>
                  </select>
                  {errors.categoria && (
                    <p className="text-red-600 text-sm mt-1">{errors.categoria.message}</p>
                  )}
                </div>

                <div>
                  <Textarea
                    {...register('pergunta')}
                    placeholder="Digite sua pergunta aqui..."
                    rows={4}
                    className="focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  {errors.pergunta && (
                    <p className="text-red-600 text-sm mt-1">{errors.pergunta.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Pergunta
                    </>
                  )}
                </Button>
              </form>
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

        {/* Instruções de configuração do EmailJS */}
        <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h4 className="font-semibold text-yellow-800 mb-2">⚙️ Configuração Necessária:</h4>
          <p className="text-yellow-700 text-sm">
            Para receber as perguntas no seu email, você precisa configurar o EmailJS:
            <br />
            1. Crie uma conta em <a href="https://emailjs.com" target="_blank" rel="noopener noreferrer" className="underline">emailjs.com</a>
            <br />
            2. Configure um serviço de email (Gmail, Outlook, etc.)
            <br />
            3. Crie um template de email
            <br />
            4. Substitua as constantes no código pelos seus dados do EmailJS
          </p>
        </div>
      </div>
    </section>
  );
};

export default PerguntasRespostas;
