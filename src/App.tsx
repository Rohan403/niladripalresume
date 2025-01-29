import React from 'react';
import { Mail, Phone, Linkedin, Globe, MapPin, Calendar, Building2 } from 'lucide-react';

function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <div className="fixed top-4 right-4 print:hidden">
        <button 
          onClick={handlePrint}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md flex items-center gap-2"
        >
          Download PDF
        </button>
      </div>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-8 print:bg-white print:p-0">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden print:shadow-none">
          {/* Header Section */}
          <div className="p-8 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
            <h1 className="text-4xl font-bold text-gray-800">NILADRI PAL</h1>
            <h2 className="text-2xl text-blue-600 mt-2">Full Stack Developer</h2>
            
            <div className="mt-4 flex flex-wrap gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-green-500" />
                <a href="tel:+919556903109" className="hover:text-blue-600">+91 9556903109</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-red-500" />
                <a href="mailto:niladripal160@gmail.com" className="hover:text-blue-600">niladripal160@gmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-5 h-5 text-[#0A66C2]" />
                <a href="https://www.linkedin.com/in/niladri-pal-670480213/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">LinkedIn Profile</a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-purple-500" />
                <a href="https://niladripalportfolio.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">Portfolio Website</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-600" />
                <span>Bengaluru</span>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="p-8 border-b border-gray-200 bg-gradient-to-r from-white to-blue-50/30">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="text-blue-600">PROFESSIONAL SUMMARY</span>
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Full Stack Developer building websites and web 
applications using ReactJS, NextJS, and 
modern JavaScript tools like Tailwind CSS and 
Redux. Strong design-to-code transition skills. 
Experienced in developing effective and 
productive relationships with clients and 
vendors. Knowledgeable in user interaction, 
testing, and debugging processes. Equipped 
with a diverse programming skill set. 
Experienced with the latest cutting-edge 
development tools and procedures. Able to 
effectively self-manage during independent 
projects, as well as collaborate as part of a 
productive team. 
            </p>
          </div>

          {/* Professional Experience */}
          <div className="p-8 border-b border-gray-200 bg-gradient-to-r from-white to-indigo-50/30">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span className="text-blue-600">PROFESSIONAL EXPERIENCE</span>
            </h3>
            
            {/* Current Role */}
            <div className="mb-8">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Full Stack Developer</h4>
                  <div className="flex items-center gap-2 text-gray-600 mt-1">
                    <Building2 className="w-5 h-5 text-blue-500" />
                    <span>Octopus Technologies</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-5 h-5 text-orange-500" />
                    <span>06/2024 - Present</span>
                  </div>
                  <div className="text-gray-600 mt-1">Surat, Gujarat</div>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Architected and implemented responsive web applications using React.js, achieving 99.9% uptime and reducing page load time by 40%</li>
                <li>Developed and maintained scalable RESTful APIs using Node.js and Express.js, handling 1M+ daily requests with 99.9% success rate</li>
                <li>Implemented OAuth 2.0 and JWT authentication, enhancing application security and reducing unauthorized access attempts by 95%</li>
                <li>Led the migration from monolithic to microservices architecture, improving system scalability and reducing deployment time by 60%</li>
                <li>Optimized database queries and implemented Redis caching, resulting in 50% faster data retrieval times</li>
                <li>Mentored 5 junior developers, conducting code reviews and implementing best practices that improved team productivity by 30%</li>
              </ul>
            </div>

            {/* Previous Role */}
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Software Developer Engineer</h4>
                  <div className="flex items-center gap-2 text-gray-600 mt-1">
                    <Building2 className="w-5 h-5 text-blue-500" />
                    <span>Nettantra Technologies</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-5 h-5 text-orange-500" />
                    <span>03/2022 - 04/2024</span>
                  </div>
                  <div className="text-gray-600 mt-1">Bhubaneswar, Odisha</div>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Developed and maintained 15+ React applications using Redux for state management, improving user experience and reducing bug reports by 40%</li>
                <li>Implemented CI/CD pipelines using Jenkins and Docker, reducing deployment time by 70% and improving release reliability</li>
                <li>Optimized React application performance through code splitting and lazy loading, resulting in 45% faster initial page loads</li>
                <li>Integrated third-party APIs and payment gateways, processing 10,000+ monthly transactions with 99.99% success rate</li>
                <li>Implemented automated testing using Jest and React Testing Library, achieving 90% code coverage and reducing production bugs by 60%</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="p-8 border-b border-gray-200 bg-gradient-to-r from-white to-blue-50/30">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="text-blue-600">EDUCATION</span>
            </h3>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Bachelor of Technology in Computer Science and Technology</h4>
                <div className="text-gray-600">Sambalpur University Institute of Information and Technology</div>
                <div className="text-gray-600">CGPA: 7.8/10</div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-5 h-5 text-orange-500" />
                  <span>07/2018 - 04/2022</span>
                </div>
                <div className="text-gray-600 mt-1">Burla, Sambalpur</div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="p-8 bg-gradient-to-r from-white to-indigo-50/30">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="text-blue-600">TECHNICAL SKILLS</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/80 p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-2">Programming Languages:</h4>
                <p className="text-gray-700">JavaScript (ES6+), TypeScript, HTML5, CSS3</p>
              </div>
              <div className="bg-white/80 p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-2">Frameworks & Libraries:</h4>
                <p className="text-gray-700">React.js, Next.js, Node.js, Express.js, Vue.js</p>
              </div>
              <div className="bg-white/80 p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-2">State Management & UI:</h4>
                <p className="text-gray-700">Redux, Context API, Material UI, Tailwind CSS, Bootstrap</p>
              </div>
              <div className="bg-white/80 p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-2">Database & Tools:</h4>
                <p className="text-gray-700">MongoDB, Git, Docker, Jenkins</p>
              </div>
              <div className="bg-white/80 p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-2">Testing & Performance:</h4>
                <p className="text-gray-700">Jest, React Testing Library, Cypress</p>
              </div>
              <div className="bg-white/80 p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-2">Cloud & DevOps:</h4>
                <p className="text-gray-700">RESTful APIs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;