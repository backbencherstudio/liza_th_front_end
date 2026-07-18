"use client";

import { useRef } from "react";
import Image from "next/image";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue,
} from "framer-motion";

const images: string[] = [
    "/images/finance.png",
    "/images/execuitive.png",
    "/images/operational.png",
];

const ImageCard = ({
    image,
    index,
    progress,
    totalImages,
}: {
    image: string;
    index: number;
    progress: MotionValue<number>;
    totalImages: number;
}) => {
    const start = index * (1 / totalImages);
    const targetScale = 1 - (totalImages - index) * 0.04;

    const scaleProgress = useTransform(progress, [start, 1], [1, targetScale]);
    const scale = useSpring(scaleProgress, {
        stiffness: 75,
        damping: 24,
        mass: 0.6,
    });

    return (
        <div className="w-full flex items-center justify-center sticky top-24 md:top-28">
            <motion.div
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                    scale,
                    top: `calc(4vh + ${index * 14}px)`,
                }}
                className="relative w-full max-w-[1600px] origin-top mx-auto px-5 sm:px-10 lg:px-[140px]"
            >
                <div className="relative overflow-hidden rounded-3xl h-[300px] lg:h-[600px] w-full flex items-center justify-center  dark:bg-slate-800">
                    <Image
                        src={image}
                        alt=""
                        fill
                        priority={index === 0}
                        className="object-contain"
                    />
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-1/4 bg-linear-to-b from-transparent via-white/55 to-white dark:via-slate-800/55 dark:to-slate-800"
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default function OverView() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    return (
        <section ref={containerRef} className="relative w-full">
            <div className="flex flex-col items-center">
                {images.map((image, index) => (
                    <ImageCard
                        key={image}
                        image={image}
                        index={index}
                        progress={scrollYProgress}
                        totalImages={images.length}
                    />
                ))}
            </div>
        </section>
    );
}