import React, { useState } from 'react';
import RazorpayButton from './RazorpayButton';
import ProjectModal from './projectModal';
import './styles/style.css';

const projects = [
  { id: 1, title: "Portfolio Website", price: 1, zipPath: "/sample.zip", image: "https://th.bing.com/th/id/OIP.uHA2d-AhUqlQh0NZVZjM8gHaWW?rs=1&pid=ImgDetMain", previewLink: "/portfolio-demo" },
  { id: 2, title: "E-commerce Template", price: 99, zipPath: "/sample.zip", image: "/images/ecommerce.jpg", previewLink: "/ecommerce-demo" },
  { id: 3, title: "Blog Website", price: 39, zipPath: "/sample.zip", image: "/images/blog.jpg", previewLink: "/blog-demo" },
  { id: 4, title: "Admin Dashboard", price: 79, zipPath: "/sample.zip", image: "/images/dashboard.jpg", previewLink: "/dashboard-demo" },
  { id: 5, title: "React UI Kit", price: 59, zipPath: "/sample.zip", image: "/images/uikit.jpg", previewLink: "/uikit-demo" }
];

function ProjectList() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [proceedToPay, setProceedToPay] = useState(false);

  const handleBuyClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setProceedToPay(false);
  };

  const handleContinueToPayment = () => {
    setProceedToPay(true);
  };

  return (
    <div className="container my-5">
      {/* <h2 className="text-center mb-4">Available Projects</h2> */}
      <div className="row">
        {projects.map(project => (
          <div key={project.id} className="col-md-4 mb-4">
            <div className="project-card h-100 text-center p-3 border rounded">
              <div className="image-container mb-2">
                <img src={project.image} alt={project.title} className="scroll-image img-fluid rounded" />
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-price">Price: ₹{project.price}</p>

              {selectedProject?.id === project.id && proceedToPay ? (
                <RazorpayButton amount={project.price} zipPath={project.zipPath} />
              ) : (
                <button className="btn btn-primary" onClick={() => handleBuyClick(project)}>Buy Now</button>
              )}

              <a
                href={project.previewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success mt-2"
              >
                Live Preview
              </a>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && !proceedToPay && (
        <ProjectModal
          project={selectedProject}
          onClose={handleCloseModal}
          onContinue={handleContinueToPayment}
        />
      )}
    </div>
  );
}

export default ProjectList;
