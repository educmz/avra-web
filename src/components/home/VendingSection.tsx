import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

import { HomeImage } from "./HomeImage";
import { HomeHeading } from "./HomeHeading";
import styles from "./Home.module.css";

const vendingBenefits = [
  "Disponibilidad durante todo el día",
  "Instalación práctica y ordenada",
  "Una propuesta fresca y natural",
] as const;

export function VendingSection() {
  return (
    <section
      aria-labelledby="vending-title"
      className={styles.section}
    >
      <div className={styles.container}>
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* CONTENIDO */}
          <div>
            <HomeHeading
              id="vending-title"
              eyebrow="máquinas avra"
            >
              Avra, donde la necesites
            </HomeHeading>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#5E5A54] sm:text-lg sm:leading-8">
              Llevamos nuestra propuesta de comida, jugos y bebidas a oficinas,
              universidades, clínicas, gimnasios y otros espacios a través de
              máquinas expendedoras modernas, prácticas y pensadas para
              acompañar tu día.
            </p>

            <div className="mt-7 space-y-3">
              {vendingBenefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 text-sm font-semibold text-[#302E2A] sm:text-base"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FF8A00] text-white">
                    <Check
                      size={15}
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                  </span>

                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/contacto"
                className="group inline-flex items-center gap-3 rounded-full bg-[#302E2A] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#FF8A00]"
              >
                Quiero una máquina Avra

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-[#FF8A00]">
                  <ArrowUpRight
                    size={17}
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </div>
          </div>

          {/* IMAGEN */}
          <div className="relative min-h-[520px] sm:min-h-[620px]">
            <HomeImage
                src="/images/home/vending-machine/avra-vending-machine.png"
                alt="Máquina expendedora Avra"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-contain object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}