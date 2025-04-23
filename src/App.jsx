
import React from "react";
import { Mail, Phone, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

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
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-800 relative">
      <header className="text-center py-20 px-4 bg-blue-100">
        <img
          src="https://i.imgur.com/PvMWjbC.png"
          alt="Logo No Stress English Club"
          className="mx-auto w-full max-w-[48rem] mb-2"
        />
        <Button className="mt-2 px-6 py-3 text-lg text-blue-700 border border-blue-700 hover:bg-blue-100 bg-gradient-to-br from-white via-blue-50 to-white">Quero minha primeira aula gratuita!</Button>
      </header>
      <section className="relative">
        <video className="w-full h-[60vh] object-cover" autoPlay loop muted playsInline src="https://videos.pexels.com/video-files/3184290/3184290-hd_1280_720_25fps.mp4" />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h2 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
            Mergulhe em uma experiência de aprendizado real e prática
          </h2>
        </div>
      </section>
      <section className="py-16 px-4 max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6 text-center">
              <BookOpen className="mx-auto mb-4 w-10 h-10 text-blue-600 transition-transform duration-300 hover:scale-110" />
              <h2 className="text-2xl font-semibold">Aulas Dinâmicas</h2>
              <p className="text-gray-600 mt-2">Métodos interativos, conversação prática e conteúdo atual.</p>
            </CardContent>
          </Card>
        </motion.div>
        <Card className="shadow-lg">
          <CardContent className="p-6 text-center">
            <Mail className="mx-auto mb-4 w-10 h-10 text-blue-600 transition-transform duration-300 hover:scale-110" />
            <h2 className="text-2xl font-semibold">Para jovens e adultos</h2>
            <p className="text-gray-600 mt-2">Desde o básico até o avançado, com foco em resultados práticos e rápidos.</p>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardContent className="p-6 text-center">
            <Phone className="mx-auto mb-4 w-10 h-10 text-blue-600" />
            <h2 className="text-2xl font-semibold">Contato Fácil</h2>
            <p className="text-gray-600 mt-2">Tire suas dúvidas e agende sua aula pelo WhatsApp ou e-mail.</p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
