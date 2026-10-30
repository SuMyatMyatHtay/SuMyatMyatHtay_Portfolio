import PageShell from "../../components/page-shell";
import ProjectShowcase from "../../components/project-showcase";
import ProjectGallery from "../../components/project-gallery";
import { selectedProjects } from "../../data/portfolio";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  const careCircle = selectedProjects.find((project) => project.title === "CareCircle");
  const otherProjects = selectedProjects.filter((project) => project.title !== "CareCircle");

  return (
    <PageShell>
      {careCircle && <ProjectShowcase project={careCircle} />}
      <ProjectGallery projects={otherProjects} />
    </PageShell>
  );
}
