import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Plane, Calendar, Home, Star } from 'lucide-react';

// Import images
import disha1 from '../assets/disha1.jpeg';
import disha2 from '../assets/disha2.jpeg';
import disha3 from '../assets/disha3.jpeg';
import disha4 from '../assets/disha4.jpeg';
import disha5 from '../assets/disha5.jpeg';
import disha6 from '../assets/disha6.jpeg';

const events = [
    {
        date: '',
        title: 'Roka',
        description: 'The best \'Yes\' I have ever said.',
        icon: <Heart className="w-6 h-6 text-white" />,
        image: disha1,
    },
    {
        date: 'Our First Trip',
        title: 'Adventure Begins',
        description: 'Best kept secret which wasn\'t on the itinerary.',
        icon: <Plane className="w-6 h-6 text-white" />,
        image: disha2,
    },
    {
        date: 'Our First Diwali',
        title: 'Festival of Lights',
        description: 'Celebrating our first Diwali together.',
        icon: <Sparkles className="w-6 h-6 text-white" />,
        image: disha3,
    },
    {
        date: 'First Anniversary',
        title: 'One Year Together',
        description: 'Celebrating our first year of love and togetherness.',
        icon: <Calendar className="w-6 h-6 text-white" />,
        image: disha4,
    },
    {
        date: 'Our First Home',
        title: 'Found Our Destination',
        description: 'When two travellers have finally found their destination.',
        icon: <Home className="w-6 h-6 text-white" />,
        image: disha6,
    },
    {
        date: 'Now',
        title: 'Today',
        description: 'Every moment with you is a treasure.',
        icon: <Star className="w-6 h-6 text-white" />,
        image: disha5,
    },
];

const TimelineItem = ({ event, index }) => {
    const isLeft = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`flex flex-col md:flex-row items-center justify-between w-full mb-12 ${isLeft ? 'md:flex-row-reverse' : ''}`}
        >
            <div className="hidden md:block w-full md:w-5/12"></div>

            <div className="z-20 flex items-center justify-center w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-full shadow-lg border-4 border-white mb-6 md:mb-0">
                {event.icon}
            </div>

            <motion.div
                whileHover={{ scale: 1.05 }}
                className={`w-full md:w-5/12 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-xl border-t-4 border-pink-500 md:mt-0 ${isLeft ? 'md:text-right text-center' : 'md:text-left text-center'}`}
            >
                <div className="overflow-hidden rounded-lg mb-4 h-64 md:h-80 shadow-md bg-gray-100">
                    <img src={event.image} alt={event.title} className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-500" />
                </div>
                <span className="text-pink-600 font-semibold tracking-wider block mb-1 uppercase text-sm">{event.date}</span>
                <h3 className="text-2xl font-bold text-gray-800 mb-2 font-display">{event.title}</h3>
                <p className="text-gray-600 leading-relaxed font-body">{event.description}</p>
            </motion.div>
        </motion.div>
    );
};

const Timeline = () => {
    return (
        <div className="relative py-20 px-4 max-w-6xl mx-auto overflow-hidden">
            {/* Falling Hearts Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(25)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-pink-200"
                        initial={{
                            top: "-10%",
                            left: `${Math.random() * 100}%`,
                            opacity: 0.6,
                            scale: Math.random() * 0.5 + 0.5
                        }}
                        animate={{
                            top: "110%",
                            opacity: [0.6, 1, 0.6, 0],
                            rotate: [0, 360]
                        }}
                        transition={{
                            duration: Math.random() * 6 + 10,
                            repeat: Infinity,
                            delay: Math.random() * 8,
                            ease: "linear"
                        }}
                    >
                        <Heart size={Math.random() * 25 + 15} fill="currentColor" />
                    </motion.div>
                ))}
            </div>

            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold text-center text-pink-600 mb-16 font-display"
            >
                Our Journey Together
            </motion.h2>

            <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-300 via-red-300 to-pink-500 rounded-full hidden md:block"></div>

                {events.map((event, index) => (
                    <TimelineItem key={index} event={event} index={index} />
                ))}
            </div>
        </div>
    );
};

export default Timeline;
