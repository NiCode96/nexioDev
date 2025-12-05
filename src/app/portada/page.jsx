"use client";
import { Michroma } from "next/font/google";
const michroma = Michroma({ subsets: ["latin"], weight: "400", display: "swap" });

import Image from "next/image";
import { motion } from "framer-motion";
import { HandThumbUpIcon, BoltIcon, ShieldCheckIcon, GlobeAltIcon } from "@heroicons/react/24/solid";

export default function Portada() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };
  return (
    <div className="relative w-full min-h-[88vh] sm:min-h-screen overflow-hidden">
      <Image
        src="/portada7.png"
        alt="Fondo portada"
        fill
        priority
        className="object-cover object-center -z-10"
      />
      {/* Fondo pro: gradiente + patrón sutil */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F1A]/70 via-[#0B0F1A]/80 to-black" />
      </div>

      {/* Contenido */}
      <motion.div 
        className="mt-24 relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12 sm:pt-24 sm:pb-16"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        {/* Cinta/top badge */}
        <motion.div 
          className="flex justify-center sm:justify-start"
          variants={fadeInUp}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[13px] font-semibold text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Agencia de Desarrollo
          </span>
        </motion.div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Columna de texto */}
          <motion.div 
            className="lg:col-span-7"
            variants={fadeInUp}
          >
            <h1
              className={`${michroma.className} mt-5 antialiased flex items-center gap-3 text-[clamp(2rem,8.5vw,6rem)] md:text-[clamp(3rem,6.5vw,7rem)] lg:text-[clamp(3.5rem,5vw,8rem)] leading-[1.05] tracking-tight text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.9)] max-w-full whitespace-nowrap`}
              style={{ fontFamily: michroma.style.fontFamily }}
            >
              NativeCode
            </h1>

            <p className="mt-12 text-pretty text-justify text-base sm:text-lg md:text-xl text-white/80 max-w-2xl">
              Creamos páginas web y aplicaciones a medida que ayudan a empresas y profesionales a 
              simplificar su trabajo, atraer más clientes y mostrar una imagen moderna y confiable. 
              Soluciones digitales pensadas para optimizar tus procesos y hacer crecer tu negocio.
            </p>
          </motion.div>

          {/* Columna visual - Tarjetas de confianza */}
          <motion.div 
            className="lg:col-span-5 lg:pl-12"
            variants={fadeInUp}
          >
            <div className="grid grid-cols-2 gap-4 max-w-xl sm:grid-cols-3 justify-items-center">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center hover:scale-105 transition-transform h-28 w-full flex flex-col justify-center">
                <p className="text-2xl font-extrabold text-cyan-400">99.9%</p>
                <p className="text-xs text-white/80">Disponibilidad garantizada</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center hover:scale-105 transition-transform h-28 w-full flex flex-col justify-center">
                <p className="text-2xl font-extrabold text-cyan-400">SEO</p>
                <p className="text-xs text-white/80">Optimización avanzada</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center hover:scale-105 transition-transform h-28 w-full flex flex-col justify-center">
                <HandThumbUpIcon className="mx-auto h-10 w-10 text-cyan-400" />
                <p className="text-xs text-white/80">Soporte cercano y confiable</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center hover:scale-105 transition-transform h-28 w-full flex flex-col justify-center">
                <BoltIcon className="mx-auto h-10 w-10 text-cyan-400" />
                <p className="text-xs text-white/80">Velocidad de carga óptima</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center hover:scale-105 transition-transform h-28 w-full flex flex-col justify-center">
                <ShieldCheckIcon className="mx-auto h-10 w-10 text-cyan-400" />
                <p className="text-xs text-white/80">Seguridad de nivel empresarial</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center hover:scale-105 transition-transform h-28 w-full flex flex-col justify-center">
                <GlobeAltIcon className="mx-auto h-10 w-10 text-cyan-400" />
                <p className="text-xs text-white/80">Escalabilidad global</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Sección E-Commerce - Centrada debajo */}
        <motion.div 
          className="mt-50 flex flex-col items-center text-center max-w-16xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
                E-Commerce Profesional para <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-bold">
                  Vendedores que Quieren Escalar
                  </span>
              </h2>

          <ul className="mt-6 space-y-3 text-base sm:text-lg text-white/80 text-left max-w-4xl">
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-white-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Desarrollo y programación a medida 100% personalizadas.</span>
            </li>
            <li className="flex items-start gap-3 max-w-4xl">
              <svg className="w-5 h-5 text-white-300 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Sistemas de ventas automatizados y listos para hacer explotar tus ventas.</span>
            </li>
            <li className="flex items-start gap-3 max-w-4xl">
              <svg className="w-5 h-5 text-white-300 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Pasarela de pago, control de stock, notificaciones y órdenes integradas.</span>
            </li>
            <li className="flex items-start gap-3 max-w-4xl">
              <svg className="w-5 h-5 text-white-300 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Carga ultra rápida y soporte inmediato para apoyarte si lo necesitas.</span>
            </li>
            <li className="flex items-start gap-3 max-w-4xl">
              <svg className="w-5 h-5 text-white-300 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Soluciones especializadas dedicadas según el tamaño de tu negocio.</span>
            </li>
          </ul>

          {/* Botones CTA - Centrados */}
          <motion.div 
            className="mt-26 flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a
              href="https://wa.me/56966091038?text=Quiero%20cotizar%20proyecto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold text-white bg-violet-700 hover:bg-violet-600 shadow-[0_0_25px_rgba(139,92,246,0.8)] ring-1 ring-violet-400/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              aria-label="Cotizar proyecto por WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M20.52 3.48A11.94 11.94 0 0 0 12 .06 11.94 11.94 0 0 0 3.48 3.48C.51 6.46-.52 10.73.6 14.64L.03 23.97l9.33-.57a11.94 11.94 0 0 0 4.91 1.02h.01c3.19 0 6.2-1.24 8.46-3.5A11.94 11.94 0 0 0 24 12a11.94 11.94 0 0 0-3.48-8.52ZM12 21.5h-.01a9.9 9.9 0 0 1-4.45-1.05l-.32-.15-5.53.34.35-5.5-.15-.33A9.9 9.9 0 0 1 2.5 12 9.5 9.5 0 1 1 12 21.5Zm5.21-7.16c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.21-.63.08-.29-.15-1.22-.45-2.33-1.45-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.08-.15-.64-1.55-.88-2.12-.23-.56-.47-.48-.64-.49l-.55-.01c-.19 0-.5.07-.77.36-.26.29-1.01.98-1.01 2.39 0 1.41 1.03 2.77 1.18 2.96.15.19 2.03 3.1 4.92 4.35.69.3 1.23.48 1.65.61.69.22 1.31.19 1.8.11.55-.08 1.7-.7 1.94-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34Z" />
              </svg>
              Cotizar proyecto
            </a>

            <a
              href="/servicios"
              className="inline-flex items-center rounded-xl px-6 py-3.5 text-base font-semibold text-cyan-100 border border-cyan-400/40 bg-white/5 backdrop-blur-md shadow-[0_6px_24px_rgba(0,0,0,0.35)] hover:bg-white/10 hover:text-white transition-all"
            >
              Ver servicios
            </a>
          </motion.div>
        </motion.div>

      </motion.div>
    </div>
  );
}
