import { motion } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection';
import { useLanguage } from '../../contexts/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();

  const skillsData = [
    {
      category: "Frontend",
      icon: "🎨",
      color: "from-blue-500 to-purple-600",
      skills: [
        { name: "Angular", level: 80, icon: "🔷" },
        { name: "React", level: 90, icon: "⚛️" },
        { name: "JavaScript", level: 90, icon: "📜" },
        { name: "TypeScript", level: 85, icon: "📘" },
        { name: "HTML", level: 90, icon: "🌐" },
        { name: "CSS", level: 85, icon: "🎨" },
        { name: "Tailwind CSS", level: 88, icon: "🎨" },
        { name: "Bootstrap", level: 80, icon: "📦" },
        { name: "Sass", level: 75, icon: "🧶" },
        { name: "ngPrime", level: 70, icon: "🔶" },
      ]
    },
    {
      category: "Backend",
      icon: "⚙️",
      color: "from-green-500 to-teal-600",
      skills: [
        { name: "Node.js", level: 80, icon: "🟢" },
        { name: "Python", level: 75, icon: "🐍" },
        { name: "Express", level: 78, icon: "🚀" },
        { name: "GraphQL", level: 70, icon: "📊" },
        { name: "C#", level: 80, icon: "🔵" }
      ]
    },
    {
      category: "Database & Cloud",
      icon: "☁️",
      color: "from-orange-500 to-red-600",
      skills: [
        { name: "MongoDB", level: 70, icon: "🍃" },
        { name: "PostgreSQL", level: 75, icon: "🐘" },
        { name: "MySQL", level: 80, icon: "🐬" },
        { name: "AWS", level: 65, icon: "☁️" },
        { name: "Docker", level: 70, icon: "🐳" }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-12 lg:mb-16">
          <motion.span 
            className="text-primary-600 dark:text-primary-400 font-semibold text-sm sm:text-base lg:text-lg uppercase tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t('skills.title')}
          </motion.span>
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-4 lg:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t('skills.subtitle')}
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('skills.description')}
          </motion.p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {skillsData.map((category, categoryIndex) => (
            <AnimatedSection key={categoryIndex} delay={categoryIndex * 0.2} className="h-full">
              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl dark:hover:shadow-gray-900/20 transition-all duration-300 h-full"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center text-2xl mb-6 mx-auto shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {category.icon}
                </motion.div>
                
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white text-center mb-6">
                  {category.category}
                </h3>

                <div className="space-y-3 lg:space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skillIndex}
                      className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors group"
                      whileHover={{ scale: 1.02, x: 5 }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + (skillIndex * 0.05) }}
                    >
                      <div className="flex items-center space-x-3">
                        <motion.span 
                          className="text-lg"
                          whileHover={{ scale: 1.2 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          {skill.icon}
                        </motion.span>
                        <span className="font-medium text-gray-800 dark:text-gray-200 text-sm lg:text-base">
                          {skill.name}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 lg:w-20 h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                          <motion.div 
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.2, delay: 0.5 + (skillIndex * 0.1) }}
                            viewport={{ once: true }}
                          />
                        </div>
                        <span className="text-xs lg:text-sm font-medium text-gray-600 dark:text-gray-400 min-w-[2.5rem]">
                          {skill.level}%
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Call to action */}
        <motion.div 
          className="text-center mt-12 lg:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-base lg:text-lg text-gray-600 dark:text-gray-400 mb-6">
            {t('skills.callToAction')}
          </p>
          <motion.a 
            href="#projects" 
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('skills.viewProjects')}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;