import React from 'react';

const Skills = () => {
  const frontendSkills = [
    { name: 'React.js', level: 90, color: 'bg-blue-500' },
    { name: 'JavaScript (ES6+)', level: 85, color: 'bg-yellow-500' },
    { name: 'Tailwind CSS', level: 88, color: 'bg-cyan-500' },
    { name: 'HTML5 & CSS3', level: 92, color: 'bg-orange-500' },
    { name: 'Redux', level: 80, color: 'bg-purple-500' }
  ];

  const backendSkills = [
    { name: 'Node.js', level: 87, color: 'bg-green-500' },
    { name: 'Express.js', level: 85, color: 'bg-gray-600' },
    { name: 'MongoDB', level: 82, color: 'bg-green-600' },
    { name: 'REST APIs', level: 88, color: 'bg-blue-600' },
    { name: 'JWT Authentication', level: 80, color: 'bg-red-500' }
  ];

  const SkillBar = ({ skill }) => (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
        <span className="text-sm text-gray-500">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="bg-gray-50 section-padding">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-primary rounded mx-auto"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Frontend Skills */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <h3 className="text-xl font-bold text-secondary">Frontend Development</h3>
              </div>
              
              <div className="space-y-6">
                {frontendSkills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} />
                ))}
              </div>
            </div>
          </div>

          {/* Backend Skills */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <h3 className="text-xl font-bold text-secondary">Backend Development</h3>
              </div>
              
              <div className="space-y-6">
                {backendSkills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Skills */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-secondary text-center mb-8">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Git & GitHub', 'VS Code', 'Postman', 'Figma', 'Docker', 'AWS', 'Vercel'].map((tech, index) => (
              <div 
                key={index}
                className="bg-white px-6 py-3 rounded-full shadow-md border hover:shadow-lg transition-shadow duration-200"
              >
                <span className="text-sm font-medium text-gray-700">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 