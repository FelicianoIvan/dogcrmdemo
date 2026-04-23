/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  Shield,
  Calendar,
  Users,
  CreditCard,
  Mail,
  ArrowRight,
  Dog,
  Home,
  GraduationCap,
  LayoutDashboard,
  Search,
  Archive,
  CalendarCheck2,
  Target,
  Check,
} from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-beige-bg text-slate-900 font-sans selection:bg-primary/20 selection:text-primary-dark">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-primary/10">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <img 
                src="https://dogcrm.xyz/storage/settings/logo/logo.png" 
                alt="DogCRM Logo" 
                className="h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <span className="text-2xl font-bold tracking-tight text-primary-dark">DogCRM</span>
          </div>
          <div className="hidden md:flex gap-8 font-medium text-slate-600">
            <a href="#services" className="hover:text-primary transition-colors">Serviços</a>
            <a href="#modules" className="hover:text-primary transition-colors">Módulos</a>
            <a href="#features" className="hover:text-primary transition-colors">Gestão</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Preços</a>
            <a href="#demo" className="hover:text-primary transition-colors">Demonstração</a>
          </div>
          <a 
            href="#demo" 
            className="bg-primary text-white px-6 py-2.5 rounded-full font-semibold hover:bg-primary-dark transition-all hover:shadow-lg hover:shadow-primary/20 active:scale-95"
          >
            Pedir Demo
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="px-6 py-20 md:py-24 max-w-7xl mx-auto relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary-dark font-semibold text-sm mb-8 border border-primary/20">
            <Shield size={16} /> Solução Completa para Negócios Caninos
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 text-slate-900 leading-tight max-w-5xl mx-auto">
            O CRM que entende o seu <br className="hidden md:block" />
            <span className="text-primary">negócio de quatro patas.</span>
          </h1>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative max-w-6xl mx-auto mt-10"
          >
            <div className="absolute -inset-8 bg-primary/10 rounded-[3rem] blur-3xl pointer-events-none" />
            <div className="relative bg-white p-3 md:p-4 rounded-[2rem] shadow-2xl border border-primary/10">
              <div className="rounded-[1.5rem] overflow-hidden border border-slate-200 bg-slate-100">
                <img
                  src="/image.jpeg"
                  alt="Exemplo real do frontend do Dog CRM em produção"
                  className="w-full h-auto object-cover object-top"
                />
              </div>
            </div>
          </motion.div>

          <p className="text-xl text-slate-600 mt-10 mb-10 max-w-4xl mx-auto leading-relaxed">
            Uma plataforma pensada para treinadores, escolas caninas e clubes que precisam de divulgar serviços, gerir marcações, organizar clientes e cães, acompanhar pagamentos e adaptar a experiência ao seu projeto, incluindo módulos mais técnicos como IGP e SAR.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#demo" 
              className="bg-primary text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-primary-dark transition-all hover:shadow-xl hover:shadow-primary/20 flex items-center justify-center gap-2 group w-full sm:w-auto"
            >
              Solicitar Demonstração 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="https://dogcrm.xyz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-slate-700 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-slate-50 transition-all border border-slate-200 w-full sm:w-auto"
            >
              Ver Exemplo Real
            </a>
          </div>
          <p className="text-sm md:text-base text-slate-500 mt-5 max-w-2xl mx-auto leading-relaxed">
            Veja um exemplo em produção e tenha em conta que o frontend, os módulos e os fluxos podem ser personalizados ao seu contexto.
          </p>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-light rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary rounded-full blur-3xl" />
        </div>
      </header>

      {/* Services (Frontend Component) */}
      <section id="services" className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Um site feito para vender os seus serviços</h2>
            <p className="text-slate-600 text-lg">O frontend do Dog CRM ajuda a apresentar a oferta certa e encaminhar clientes para a marcação.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<GraduationCap className="text-primary w-8 h-8" />}
              title="Treino e aulas"
              description="Páginas para apresentar programas de treino, aulas individuais, aulas de grupo e acompanhamento especializado."
            />
            <ServiceCard 
              icon={<Home className="text-primary w-8 h-8" />}
              title="Hotel e estadias"
              description="Apresente serviços de estadia, rotinas, condições e pedidos de marcação de forma clara e profissional."
            />
            <ServiceCard 
              icon={<Dog className="text-primary w-8 h-8" />}
              title="Creche e serviços recorrentes"
              description="Mostre planos diários ou mensais e ligue cada serviço ao fluxo de contacto ou marcação dentro da plataforma."
            />
          </div>
        </div>
      </section>

      {/* IGP & scheduling modules */}
      <section id="modules" className="py-24 px-6 bg-beige-bg border-y border-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary-dark font-semibold text-sm mb-6 border border-primary/20">
              <Target size={16} aria-hidden />
              Clubes, centros de treino e desporto canino
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Módulos IGP e operação diária</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
              O Dog CRM junta a montra pública com a gestão interna, para que o trabalho do dia a dia não fique espalhado por folhas, mensagens e ferramentas separadas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Search className="text-primary w-8 h-8" aria-hidden />}
              title="Website e páginas de serviço"
              description="Landing pages, páginas institucionais, serviços, preços, artigos e zonas de contacto para transformar visitas em pedidos reais."
            />
            <ServiceCard
              icon={<Archive className="text-primary w-8 h-8" aria-hidden />}
              title="Marcações e organização"
              description="Agenda de aulas, serviços e outras marcações com tipos de serviço, estados, ligação a clientes e visão operacional para a equipa."
            />
            <ServiceCard
              icon={<CalendarCheck2 className="text-primary w-8 h-8" aria-hidden />}
              title="Módulos IGP e SAR"
              description="Estrutura preparada para cães, treinos, eventos e equipas em contextos mais técnicos, sem perder a ligação ao CRM principal."
            />
          </div>
        </div>
      </section>

      {/* Management (Backend Component) */}
      <section id="features" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Controlo Total nos Bastidores</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Para além do site público, o Dog CRM inclui a base operacional para gerir o negócio canino com mais contexto, menos improviso e melhor acompanhamento.
              </p>
              
              <div className="space-y-6">
                <FeatureItem 
                  icon={<Calendar className="text-primary" aria-hidden />}
                  title="Controlo de marcações"
                  description="Calendário com marcações, aulas e outros serviços, organizado por tipo, estado e contexto operacional."
                />
                <FeatureItem 
                  icon={<CreditCard className="text-primary" aria-hidden />}
                  title="Pagamentos e acompanhamento"
                  description="Registo de pagamentos e contexto financeiro associado a serviços, marcações e clientes."
                />
                <FeatureItem 
                  icon={<Users className="text-primary" aria-hidden />}
                  title="Gestão de Equipa"
                  description="Utilizadores, permissões e disponibilidade de treinadores para organizar melhor o trabalho interno."
                />
                <FeatureItem 
                  icon={<LayoutDashboard className="text-primary" aria-hidden />}
                  title="Clientes e cães"
                  description="Fichas centralizadas com histórico, relação entre clientes e cães e acompanhamento contínuo."
                />
                <FeatureItem 
                  icon={<Search className="text-primary" aria-hidden />}
                  title="Menus e secções personalizáveis"
                  description="Estrutura administrável para ajustar páginas, secções, conteúdos e navegação ao estilo de cada projeto."
                />
                <FeatureItem 
                  icon={<Target className="text-primary" aria-hidden />}
                  title="Módulos técnicos integrados"
                  description="Suporte a contextos mais especializados como IGP e SAR dentro da mesma plataforma."
                />
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 bg-white p-4 rounded-3xl shadow-2xl border border-primary/10"
            >
              <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100">
                {/* Mock UI for Backend */}
                <div className="bg-primary/10 p-4 flex items-center justify-between border-b border-primary/10">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="text-xs font-bold text-primary-dark">BACKEND ADMIN</div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="h-8 bg-white rounded-lg shadow-sm border border-slate-100 w-3/4" />
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-20 bg-white rounded-xl border border-slate-100" />
                    <div className="h-20 bg-white rounded-xl border border-slate-100" />
                    <div className="h-20 bg-white rounded-xl border border-slate-100" />
                  </div>
                  <div className="h-32 bg-white rounded-xl border border-slate-100" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 bg-beige-bg/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">Planos Adaptados ao seu Negócio</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Escolha a solução que melhor se adapta à fase atual da sua escola ou centro de treino canino.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <PricingCard 
              title="Solução Frontend"
              price="30"
              description="A montra perfeita para atrair novos clientes e profissionalizar a sua presença online."
              features={[
                "Website profissional personalizado",
                "Páginas de serviços e aulas",
                "Formulários de contacto direto",
                "Otimização SEO base",
                "Alojamento incluído",
                "Suporte técnico"
              ]}
            />
            <PricingCard 
              title="Frontend + Backend"
              price="35"
              highlighted={true}
              description="Gestão centralizada para quem precisa de organizar o fluxo de clientes e o histórico dos cães."
              features={[
                "Tudo do plano Frontend",
                "CRM completo de clientes",
                "Base de dados de cães e fotos",
                "Registo de pagamentos",
                "Histórico de treinos e notas",
                "Gestão de equipa e permissões"
              ]}
            />
            <PricingCard 
              title="Gestão + Marcações"
              price="40"
              description="A solução total com agenda inteligente e módulos técnicos para centros de alto rendimento."
              features={[
                "Tudo do plano Frontend + Backend",
                "Agenda inteligente de marcações",
                "Controlo de aulas de grupo e individuais",
                "Módulos técnicos IGP e SAR",
                "Calendário operacional de equipa",
                "Relatórios de atividade"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-24 px-6 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-primary-dark rounded-[2.5rem] p-10 md:p-20 text-white text-center relative overflow-hidden shadow-2xl shadow-primary/20"
        >
          <div className="relative z-10">
            <div className="bg-white/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 backdrop-blur-sm border border-white/20">
              <Mail className="w-10 h-10 text-primary-light" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Pronto para elevar o seu negócio?</h2>
            <p className="text-primary-light mb-12 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Solicite uma demonstração do Dog CRM e veja como o site público, o CRM e os módulos especializados podem trabalhar juntos.
            </p>
            
            <div className="flex flex-col gap-6 items-center">
              <a 
                href="mailto:dogscrm@gmail.com?subject=Pedido de Demonstração DogCRM - Gestão Completa" 
                className="bg-white text-primary-dark px-12 py-5 rounded-2xl text-xl font-bold hover:bg-beige-bg transition-all hover:scale-105 active:scale-95 shadow-xl w-full md:w-auto"
              >
                Enviar Email
              </a>
              <p className="text-primary-light/60 text-sm font-medium italic">
                Uma base prática para promover serviços e organizar a operação do dia a dia.
              </p>
            </div>
          </div>

          {/* Background decoration */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl" />
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-primary/10 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <img 
              src="https://dogcrm.xyz/storage/settings/logo/logo.png" 
              alt="DogCRM Logo" 
              className="h-8 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
            <span className="text-xl font-bold tracking-tight text-primary-dark">DogCRM</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-slate-500 text-sm font-medium">
            <a href="#services" className="hover:text-primary transition-colors">Serviços</a>
            <a href="#modules" className="hover:text-primary transition-colors">Módulos</a>
            <a href="#features" className="hover:text-primary transition-colors">Gestão</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Preços</a>
            <a href="https://dogcrm.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Demo Online</a>
          </div>
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} DogCRM. Uma montra promocional do Dog CRM.
          </p>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-beige-bg/30 p-10 rounded-[2rem] border border-primary/5 hover:border-primary/20 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all group"
    >
      <div className="mb-6 bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-3 text-slate-900">{title}</h3>
      <p className="text-slate-600 leading-relaxed text-lg">{description}</p>
    </motion.div>
  );
}

function FeatureItem({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="flex gap-4">
      <div className="bg-white p-3 rounded-xl shadow-sm border border-primary/10 h-fit">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-slate-900 text-lg mb-1">{title}</h4>
        <p className="text-slate-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function PricingCard({ 
  title, 
  price, 
  description, 
  features, 
  highlighted = false 
}: { 
  title: string, 
  price: string, 
  description: string, 
  features: string[],
  highlighted?: boolean
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative p-8 rounded-[2.5rem] border ${
        highlighted 
          ? 'bg-white border-primary shadow-2xl shadow-primary/10 scale-105 z-10' 
          : 'bg-white/50 border-primary/10 hover:bg-white hover:border-primary/20 transition-all'
      }`}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">
          MAIS POPULAR
        </div>
      )}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-extrabold text-slate-900">{price}€</span>
          <span className="text-slate-500 font-medium">/mês</span>
        </div>
        <p className="mt-4 text-slate-600 leading-relaxed text-sm">
          {description}
        </p>
      </div>
      
      <ul className="space-y-4 mb-10">
        {features.map((feature, idx) => (
          <li key={idx} className="flex gap-3 text-sm text-slate-700 items-start">
            <div className="bg-primary/10 p-0.5 rounded-full mt-0.5">
              <Check size={14} className="text-primary-dark" />
            </div>
            {feature}
          </li>
        ))}
      </ul>

      <a 
        href="#demo"
        className={`block w-full py-4 rounded-2xl text-center font-bold transition-all ${
          highlighted 
            ? 'bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/20' 
            : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
        }`}
      >
        Começar Agora
      </a>
    </motion.div>
  );
}
