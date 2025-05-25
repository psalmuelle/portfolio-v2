

export default function ProjectCard(){
    return (
        <div>
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4">Project Title</h2>
                <p className="text-gray-700 mb-4">
                    A brief description of the project goes here. It should be concise and informative.
                </p>
                <a href="#" className="text-blue-500 hover:underline">
                    View Project
                </a>
            </div>
        </div>
    )
}