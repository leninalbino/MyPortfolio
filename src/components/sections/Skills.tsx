import { motion } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection';

const Skills = () => {
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
        //{ name: "Next.js", level: 82, icon: "▲" }
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
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary-600 font-semibold text-lg">Habilidades</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
            Tecnologías y Herramientas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Las tecnologías con las que trabajo día a día para crear 
            soluciones digitales innovadoras.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.map((category, categoryIndex) => (
            <AnimatedSection key={categoryIndex} delay={categoryIndex * 0.2}>
              <motion.div 
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center text-2xl mb-6 mx-auto`}>
                  {category.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 text-center mb-6">
                  {category.category}
                </h3>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skillIndex}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="font-medium text-gray-800">{skill.name}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div 
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            viewport={{ once: true }}
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;