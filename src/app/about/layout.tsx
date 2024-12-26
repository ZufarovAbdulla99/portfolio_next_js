const AboutPage = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="max-w-3xl mx-auto">
      <div>{children}</div>
      <h1 className="text-4xl font-bold text-gray-100 mb-8">About Me</h1>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6">
            I'm a passionate web developer with experience in modern web
            technologies. I love creating beautiful and functional applications
            that solve real-world problems.
          </p>
          <h2 className="text-2xl text-gray-800 font-semibold mb-4">Experience</h2>
          <ul className="space-y-4 text-gray-600">
            <li>Senior Developer at Company A (2020-Present)</li>
            <li>Web Developer at Company B (2018-2020)</li>
            <li>Junior Developer at Company C (2016-2018)</li>
          </ul>
          <h2 className="text-2xl text-gray-800 font-semibold mt-8 mb-4">Education</h2>
          <ul className="space-y-4 text-gray-600">
            <hr className="border border-black"/>
            <li>National University of Uzbekistan, 2019 - 2023</li>
            <li>BS in Computer Science</li>
            <hr className="border border-black"/>
            <li>Najot Ta'lim, 2023 - 2025</li>
            <li>BS in Full Stack (Node.js + React.js)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage