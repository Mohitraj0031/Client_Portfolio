import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import ProjectOne from './projects/ProjectOne'

const ProjectPage = ({ title, image, description }) => (
  <div className="min-h-screen bg-slate-50">
    <Navbar />
    <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-4 py-20">
      <div className="mb-8 w-full text-left">
        <Link to="/" className="text-sm font-medium text-slate-600 hover:text-black">
          Back to Projects
        </Link>
      </div>
      {title === 'Project 1' ? (
        <ProjectOne />
      ) : (
        <div className="w-full max-w-4xl rounded-2xl border-2 border-black bg-white p-6 shadow-sm">
          <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div className="overflow-hidden rounded-xl border border-black/10">
              <img className="h-full w-full object-cover" src={image} alt={title} />
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Selected project</p>
              <h2 className="mt-3 text-3xl font-bold">{title}</h2>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                {description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3 text-sm font-medium">
                <a className="rounded-full border border-black px-4 py-2 transition hover:bg-black hover:text-white" href="#">
                  Github
                </a>
                <a className="rounded-full border border-black px-4 py-2 transition hover:bg-black hover:text-white" href="#">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
)

export default ProjectPage