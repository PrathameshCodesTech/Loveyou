import React from 'react';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import Counter from './Counter';

const Hero = ({ startDate }) => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100 text-center px-4">

            {/* Falling Hearts Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-pink-300"
                        initial={{
                            top: "-10%",
                            left: `${Math.random() * 100}%`,
                            opacity: 0.7,
                            scale: Math.random() * 0.5 + 0.5
                        }}
                        animate={{
                            top: "110%",
                            opacity: [0.7, 1, 0.7, 0],
                            rotate: [0, 360]
                        }}
                        transition={{
                            duration: Math.random() * 5 + 8,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "linear"
                        }}
                    >
                        <Heart size={Math.random() * 20 + 15} fill="currentColor" />
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="relative z-10"
            >
                <Heart className="w-24 h-24 text-red-500 fill-current drop-shadow-lg mx-auto mb-6 animate-pulse" />
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-5xl md:text-7xl font-display text-pink-600 mb-6 relative z-10"
            >
                Happy Valentine's Day
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-xl md:text-2xl text-gray-700 font-body mb-4 max-w-2xl relative z-10"
            >
                To the one who makes every day brighter
            </motion.p>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
                className="text-lg md:text-xl text-pink-600 font-body italic mb-4 relative z-10"
            >
                "Every moment with you is a treasure."
            </motion.p>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
                className="text-base md:text-lg text-gray-600 font-body max-w-xl relative z-10 mb-8"
            >
                This is our story, our journey, our forever.
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="relative z-10"
            >
                <Counter startDate={startDate} />
            </motion.div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 z-10"
            >
                <p className="text-gray-500 text-sm">Scroll Down ↓</p>
            </motion.div>
        </div>
    );
};

export default Hero;
