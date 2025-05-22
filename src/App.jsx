import React, { useEffect } from "react";
import { Mail, Phone, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

function Card({ children, className = "" }) {
  return <div className={`bg-white rounded shadow p-4 ${className}`}>{children}</div>;
}

function CardContent({ children, className = "" }) {
  return <div className={`p-2 ${className}`}>{children}</div>;
}

function Button({ children, className = "", ...props }) {
  return (
    <button {...props} className={`rounded px-4 py-2 font-semibold transition ${className}`}>
      {children}
    </button>
  );
}

function Input({ className = "", ...props }) {
  return (
    <input {...props} className={`border px-3 py-2 rounded w-full ${className}`} />
  );
}

export default function NoStressEnglishClub() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-800 relative">
      <header className="text-center py-12 px-4 bg-blue-100" data-aos="fade-down">
        <img
          src="https://imgur.com/UUQaXU9.png"
          alt="Logo No Stress English Club"
          className="mx-auto w-full max-w-[48rem] mb-2"
        />
        <a href="#agendamento">
          <Button className="mt-2 px-6 py-3 text-lg text-blue-700 border border-blue-700 hover:bg-blue-100 bg-gradient-to-br from-white via-blue-50 to-white">
            Quero minha primeira aula gratuita!
          </Button>
        </a>
      </header>

      <section className="relative" data-aos="fade-up">
        <video
          className="w-full h-[60vh] object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="https://videos.pexels.com/video-files/3184290/3184290-hd_1280_720_25fps.mp4"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h2 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
            Mergulhe em uma experiência de aprendizado real e prática
          </h2>
        </div>
      </section>

      <section className="py-10 px-4 max-w-6xl mx-auto grid gap-4 md:grid-cols-3" data-aos="zoom-in-up">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6 text-center">
              <BookOpen className="mx-auto mb-6 w-16 h-16 text-blue-600 transition-transform duration-300 hover:scale-110" />
              <h2 className="text-2xl font-semibold">Aulas Dinâmicas</h2>
              <p className="text-gray-600 mt-2">
                Métodos interativos, conversação prática e conteúdo atual.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <Card className="shadow-lg" data-aos="zoom-in">
          <CardContent className="p-6 text-center">
            <Mail className="mx-auto mb-6 w-16 h-16 text-blue-600 transition-transform duration-300 hover:scale-110" />
            <h2 className="text-2xl font-semibold">Para jovens e adultos</h2>
            <p className="text-gray-600 mt-2">
              Desde o básico até o avançado, com foco em resultados práticos e rápidos.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg" data-aos="zoom-in">
          <CardContent className="p-6 text-center">
            <Phone className="mx-auto mb-6 w-16 h-16 text-blue-600" />
            <h2 className="text-2xl font-semibold">Contato Fácil</h2>
            <p className="text-gray-600 mt-2">
              Tire suas dúvidas e agende sua aula pelo WhatsApp ou e-mail.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="bg-blue-50 py-16 px-4" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
          O que dizem nossos alunos
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <blockquote className="text-gray-700 italic border-l-4 pl-4 border-blue-400">
            “Aprendi mais em 2 meses aqui do que em anos de curso tradicional. Recomendo!”
            <footer className="text-sm mt-2 text-right">— João M.</footer>
          </blockquote>
          <blockquote className="text-gray-700 italic border-l-4 pl-4 border-blue-400">
            “Professor paciente, aulas práticas e muito conteúdo útil. Nota 10.”
            <footer className="text-sm mt-2 text-right">— Marina T.</footer>
          </blockquote>
        </div>
      </section>

      <section className="py-16 px-4 max-w-5xl mx-auto" data-aos="fade-up">
  <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
    Veja como é aprender com a gente
  </h2>
  <div className="overflow-x-auto whitespace-nowrap space-x-4 px-4">
    <iframe
      className="inline-block rounded-xl shadow-md w-80 h-48"
      src="https://www.youtube.com/embed/7_QWhuIrdMo?si=dR9pHqwzefOwFZDM"
      title="Eu sabia mas esqueci!"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
    <iframe
      className="inline-block rounded-xl shadow-md w-80 h-48"
      src="https://www.youtube.com/embed/gTGxXQaG9tE?si=yG4Hw20oaMi8cGAX"
      title="Exemplo de aula"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
      </section>

      <section className="py-16 px-4 bg-blue-50" data-aos="fade-up">
  <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
    Galeria de Fotos
  </h2>
  <div className="overflow-x-auto whitespace-nowrap space-x-4 px-4 max-w-6xl mx-auto">
    <img className="inline-block rounded-lg shadow-md w-64 h-40 object-cover" src="https://images.pexels.com/photos/1308663/pexels-photo-1308663.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Aluno feliz 1" />
    <img className="inline-block rounded-lg shadow-md w-64 h-40 object-cover" src="https://images.pexels.com/photos/4144221/pexels-photo-4144221.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Aluno feliz 2" />
    <img className="inline-block rounded-lg shadow-md w-64 h-40 object-cover" src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Aluno feliz 3" />
    <img className="inline-block rounded-lg shadow-md w-64 h-40 object-cover" src="https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Aluno feliz 4" />
  </div>
</section>

      <section className="py-16 px-4 max-w-5xl mx-auto" data-aos="fade-up">
  <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">Missão, Visão e Valores</h2>
  <div className="grid gap-6 md:grid-cols-3">
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-xl font-semibold text-blue-700 mb-2">Missão</h3>
      <p className="text-gray-700">Ensinar inglês de maneira leve, objetiva e transformadora, garantindo que os alunos tenham resultados reais e atinjam seus objetivos profissionais, pessoais ou de viagem — sem depender de anos de mensalidades sem progresso.</p>
    </div>
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-xl font-semibold text-blue-700 mb-2">Visão</h3>
      <p className="text-gray-700">Impactar positivamente a vida das pessoas por meio do ensino de inglês acessível, humano e de alta qualidade, promovendo oportunidades reais de crescimento e mudança de vida.</p>
    </div>
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-xl font-semibold text-blue-700 mb-2">Valores</h3>
      <ul className="list-disc list-inside text-gray-700">
        <li>Respeito e empatia no processo de aprendizado</li>
        <li>Compromisso com resultados verdadeiros</li>
        <li>Acessibilidade e inclusão</li>
        <li>Transformação pessoal e profissional</li>
        <li>Dedicação ao ensino voluntário e social</li>
      </ul>
    </div>
  </div>
</section>

<section id="agendamento" className="py-16 px-4" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
          Agende sua aula
        </h2>
        <div className="flex justify-center">
          <iframe
            src="https://calendly.com/emersonvidoli/aula_de_ingles_gratuita"
            width="100%"
            height="630"
            frameBorder="0"
            title="Calendly Agendamento"
          ></iframe>
        </div>
      </section>

      <section className="bg-white py-20 px-4" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
          Fale com a gente
        </h2>
        <form className="max-w-2xl mx-auto space-y-4">
          <Input placeholder="Seu nome" />
          <Input placeholder="Seu e-mail" type="email" />
          <Input placeholder="Seu WhatsApp" />
          <Input placeholder="Sua mensagem" className="h-24" />
          <Button className="w-full" onClick={() => {
            const button = document.querySelector('button');
            const nome = document.querySelector('input[placeholder="Seu nome"]').value;
            const email = document.querySelector('input[placeholder="Seu e-mail"]').value;
            const tel = document.querySelector('input[placeholder="Seu WhatsApp"]').value;
            const mensagem = document.querySelector('input[placeholder="Sua mensagem"]').value;
            const texto = encodeURIComponent(`Olá!\n\nNome: ${nome}\nEmail: ${email}\nWhatsApp: ${tel}\nMensagem: ${mensagem}`);
            button.innerText = 'Enviando...';
            window.open(`mailto:Emersonvidoli@gmail.com?subject=Contato%20via%20site&body=${texto}`, '_blank');
            setTimeout(() => { button.innerText = 'Enviar mensagem'; }, 2000);
          }}>Enviar mensagem</Button>
        </form>

        <div className="text-center mt-10">
          <a href="#agendamento">
            <Button className="px-6 py-3 text-blue-700 border border-blue-700 hover:bg-blue-100 bg-white">
              Quero minha primeira aula gratuita!
            </Button>
          </a>
        </div>
      </section>

      <a
        href="https://wa.me/14372985755?text=Ol%C3%A1%2C+quero+minha+primeira+aula+gratuita!"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 animate-bounce"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-message-circle"
        >
          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.5 8.5 0 018 8v.5z" />
        </svg>
      </a>

      <footer className="text-center text-sm text-gray-500 py-10 bg-blue-100" data-aos="fade-up">
        © {new Date().getFullYear()} No Stress English Club. Todos os direitos reservados.
      </footer>
    </div>
  );
}
