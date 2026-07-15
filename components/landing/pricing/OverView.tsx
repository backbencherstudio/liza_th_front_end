"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const CARD_HEIGHT = 600;
const GAP = 20;

export default function OverView() {
    const containerRef = useRef<HTMLDivElement>(null);

    const images = [
        "/images/finance.png",
        "/images/execuitive.png",

        "/images/operational.png",



    ];

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Card 1
    const y1 = useTransform(scrollYProgress, [0, 1], [90, 95]);

    // Card 2
    const y2 = useTransform(scrollYProgress, [0, 0.35], [CARD_HEIGHT + GAP + 100, 100]);

    // Card 3
    const y3 = useTransform(
        scrollYProgress,
        [0.35, 0.7],
        [(CARD_HEIGHT + GAP) * 2 + 100, 100]
    );

    // Card 4


    const scale1 = useTransform(scrollYProgress, [0.18, 0.35], [1, 0.95]);
    const scale2 = useTransform(scrollYProgress, [0.5, 0.7], [1, 0.95]);
    const scale3 = useTransform(scrollYProgress, [0.82, 1], [1, 0.95]);

    const positions = [y1, y2, y3];
    const scales = [scale1, scale2, scale3, 1];

    return (
        <section
            ref={containerRef}
            className="relative"
            style={{ height: `${images.length * 90}vh` }}
        >
            <div className="sticky top-30 flex max-w-[1600px] px-5 sm:px-10 lg:px-[140px] mx-auto ">
                <div className="relative h-[800px] w-full">
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            className="absolute inset-0 overflow-hidden rounded-3xl"
                            style={{
                                y: positions[index],
                                scale: scales[index],
                                zIndex: index + 1,
                                transformOrigin: "top center",
                            }}
                        >
                            <Image
                                src={image}
                                alt=""
                                width={1000}
                                height={1000}
                                priority={index === 0}
                                className="object-center flex justify-center items-center mx-auto w-auto lg:h-[600px] h-[300px] max-w-full max-h-full"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}