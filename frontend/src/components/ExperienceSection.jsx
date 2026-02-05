import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';
import { experienceData } from '../data/mockData';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Work <span className="text-green-600">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-green-700 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 w-0.5 h-full bg-green-900/30" />

          {experienceData.map((exp, i) => (
            <div key={i} className="relative mb-12">
              <div className="p-6 bg-[#141414] rounded-xl border border-white/10 hover:border-green-700/40 transition shadow">
                <div className="flex gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-700/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-white">{exp.role}</h3>
                    <p className="text-green-500">{exp.company}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  {exp.duration}
                </div>

                <ul className="space-y-2">
                  {exp.responsibilities.map((r, idx) => (
                    <li key={idx} className="flex gap-2 text-gray-300 text-sm">
                      <ChevronRight className="w-4 h-4 text-green-500" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
