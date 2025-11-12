"use client"
import TextType from '@/componentes/TextType';
import FlowingMenu from "@/componentes/FlowingMenu";
import { func } from 'prop-types';
import Image from 'next/image';
import { Michroma } from "next/font/google";
import GradientText from "@/componentes/GradientText";
const michroma = Michroma({ subsets: ["latin"], weight: "400" });



export default function Portafolio(){
  return(
    <div>
      <h1 className={`${michroma.className} py-10 text-4xl md:text-5xl text-center font-bold text-white`}>
        Nuestro Portafolio
      </h1>
      <p className="max-w-2xl mx-auto mb-12 text-center text-gray-400 text-lg">
        Algunos de los proyectos que ya confían en <span className="text-indigo-400">NativeCode</span>
      </p>

      <section className="relative bg-neutral-900/40 ring-1 ring-white/10 rounded-4xl shadow-2xl backdrop-blur-sm px-6 md:px-10 lg:px-14 py-16 md:py-24">
        {/* Encabezado profesional fuera de las cards */}
        <div className="mb-12 md:mb-16 grid grid-cols-1 md:grid-cols-3 items-center gap-8">
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-2xl md:text-3xl font-semibold leading-tight tracking-tight text-white">
              ¿Por qué confiar en <span className="text-fuchsia-400">NativeCode</span>?
            </h3>
            <p className="text-white/80 text-base md:text-lg">
              Combinamos diseño y performance para entregar productos digitales sólidos, escalables y fáciles de usar.
              Nos integramos a tu equipo, entendemos tus objetivos y los transformamos en soluciones reales que generan valor.
            </p>
            <p className="text-white/80 text-base md:text-lg">
              Código limpio, procesos claros y soporte continuo. Nuestro compromiso es que tus proyectos brillen hoy y crezcan mañana.
            </p>
          </div>
          <div className="flex md:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 blur-2xl rounded-3xl" aria-hidden="true"></div>
              <Image
                src="/ico2.png"
                alt="NativeCode logo"
                width={140}
                height={140}
                className="relative w-28 h-28 md:w-36 md:h-36 object-contain rounded-2xl ring-1 ring-white/10 shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* Cards del portafolio */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Proyecto Denisse */}
          <a href="https://runajoyas.cl/" target="_blank" rel="noopener noreferrer" className="group block">
            <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-xl transition-transform duration-300 group-hover:scale-[1.02] h-80 md:h-96 flex flex-col justify-end">
              <Image
                src="/runa.png"
                alt="Runa Joyas"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
              {/* Overlay negro difuminado y texto morado eléctrico */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent"></div>
                <div className="relative h-full w-full flex items-end justify-center p-6">
                  <p className="text-fuchsia-400 drop-shadow-[0_0_12px_rgba(168,85,247,0.35)] text-lg md:text-xl font-semibold text-center">
                    Runa Joyas
                  </p>
                </div>
              </div>
            </div>
          </a>

          {/* Proyecto JPA */}
          <a href="https://jpaingenieriasolutions.cl/" target="_blank" rel="noopener noreferrer" className="group block">
            <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-xl transition-transform duration-300 group-hover:scale-[1.02] h-80 md:h-96 flex flex-col justify-end">
              <Image
                src="/jpa.png"
                alt="Proyecto JPA"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
              {/* Overlay negro difuminado y texto morado eléctrico */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent"></div>
                <div className="relative h-full w-full flex items-end justify-center p-6">
                  <p className="text-purple-900 drop-shadow-[0_0_12px_rgba(168,85,247,0.35)] text-lg md:text-xl font-semibold text-center">
                    JPA Ingeniería
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  )
}