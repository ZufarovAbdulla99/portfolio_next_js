const Home = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="text-center">
      {children}
      <h1 className="text-4xl font-bold text-gray-100 mb-4">
        Welcome to My Portfolio
      </h1>
      <p className="text-xl text-gray-300 mb-8">
        Hi, I'm a developer passionate about creating amazing web experiences.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl text-gray-800 font-semibold mb-4">Skills</h2>
          <div className="space-y-2">
            <p className="text-gray-600">HTML/CSS</p>
            <p className="text-gray-600">Tailwind CSS</p>
            <p className="text-gray-600">JavaScript/TypeScript</p>
            <p className="text-gray-600">React & Next.js</p>
            <p className="text-gray-600">Express.js/NestJs</p>
            <p className="text-gray-600">PostgreSql/MySql/MongoDb</p>
            <p className="text-gray-600">Docker/Deploy</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl text-gray-800 font-semibold mb-4">Latest Work</h2>
          <div className="space-y-2">
            <p className="text-gray-600">Chat Application</p>
            <p className="text-gray-600">Movie Site</p>
            <p className="text-gray-600">Cooking Recipe site</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home