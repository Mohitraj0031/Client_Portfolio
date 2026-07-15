import ProjectImage1 from "../../images/Financial_Accounting01.jpg";

const ProjectOne = () => {
  return (
    <div className="w-full max-w-4xl rounded-2xl border-2 border-black bg-white p-6 shadow-sm">
      <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div className="overflow-hidden rounded-xl border border-black/10">
          <img
            className="h-full w-full object-cover"
            src={ProjectImage1}
            alt="Project 1"
          />
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
            Selected Certifications
          </p>
          <h2 className="mt-3 text-3xl font-bold">This is the Financial Analyst Certification</h2>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            This page is opened through route navigation from the Financial Analyst Certification tab.
          </p>    
        </div>
      </div>
    </div>
  );
};

export default ProjectOne;

// The flow is now route-based instead of state-based, which is why it feels like a real page change.

// In src/main.jsx, the app is wrapped in HashRouter. That matters because your portfolio is deployed as a static site, so hash routes like #/projects/project-1 will still work on refresh and on GitHub Pages. Without that, a direct page load on a nested route could break in a static deployment.

// In src/App.jsx, the app is split into routes. The home route renders your normal portfolio sections, including the Projects block. Separate routes are defined for /projects/project-1, /projects/project-2, and /projects/project-3. When one of those routes is opened, React renders the matching project page instead of the home page.

// In src/components/Project.jsx, the old static cards were changed back into clickable project cards, but now each card is a Link that navigates to its project route. So the card itself is the navigation trigger. The visual design stays the same as before, because the card still shows the image, title, and the GitHub / Live Demo actions.

// In src/components/projects/ProjectOne.jsx, the Project 1 route now renders the detailed Project 1 page. It uses the same card-style layout as the earlier project section, but as a dedicated page view. That is why clicking Project 1 now opens a separate page that shows the heading “This is the project one.”

// The overall logic is:

// The Projects section shows cards.
// Clicking a card changes the route.
// The route loads a dedicated project page.
// The project page keeps the same visual structure as the old card layout, but now behaves like a real page
