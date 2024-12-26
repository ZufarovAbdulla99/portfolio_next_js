const ProjectsPage = ({children}: {children: React.ReactNode}) => {
  const projects = [
    {
      title: "Chat app",
      description: "A web application built with React and Node.js",
      tech: ["React", "Node.js", "MongoDB"],
      image: "https://cdn.dribbble.com/users/194964/screenshots/3144295/chat-module.jpg",
    },
    {
      title: "E-commerce",
      description: "E-commerce platform using Next.js",
      tech: ["Next.js", "Tailwind CSS", "PostgreSQL"],
      image: "https://magesolution.com/wp-content/uploads/2022/07/ecommerce-website-design-examples-1024x768.jpg",
    },
    {
      title: "LMS",
      description: "Mobile-first web application",
      tech: ["React Native", "Firebase", "Redux"],
      image: "https://savvycomsoftware.com/wp-content/uploads/2023/06/Learning-Management-System-2.webp",
    },
  ];

  return (
    <div>
      <div>{children}</div>
      <h1 className="text-4xl font-bold text-center text-gray-100 mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl text-gray-800 font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage