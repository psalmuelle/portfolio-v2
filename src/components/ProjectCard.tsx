export default function ProjectCard() {
  return (
    <div>
      <div className="rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-bold">Project Title</h2>
        <p className="mb-4 text-gray-700">
          A brief description of the project goes here. It should be concise and
          informative.
        </p>
        <a href="#" className="text-blue-500 hover:underline">
          View Project
        </a>
      </div>
    </div>
  );
}
