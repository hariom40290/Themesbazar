import React, { useState } from 'react';
import RazorpayButton from './RazorpayButton';
import ProjectModal from './projectModal';
import './styles/style.css';


const projects = [
  { id: 1, title: "Portfolio Website", price: 0, isFree: true, zipPath: "/anon.zip", image: "/Anon-website.png", previewLink: "/portfolio-demo",
     screenshots: ["/01.png",
      "/02.png",
      "/03.png",
      "/04.png",
      "/05.png",
    ] },
  { id: 2, title: "E-commerce Template", price: 99, zipPath: "/anon", image: "../anon.zip", previewLink: "/ecommerce-demo", screenshots: ["/screenshots/2_1.jpg", "/screenshots/2_2.jpg"] },
  // Add other projects similarly
];

// const projects = [
  
//   { id: 1, title: "Portfolio Website", price: 0, isFree: true, zipPath: "/anon.zip", image: "https://th.bing.com/th/id/OIP.uHA2d-AhUqlQh0NZVZjM8gHaWW?rs=1&pid=ImgDetMain", previewLink: "/portfolio-demo",
// screenshots: [
//       "/Anon-website.png",
//       "/Anon-website.png",
//       "/Anon-website.png",
//       "/Anon-websitepng",
//     ]

//    },
//   { id: 2, title: "E-commerce Template", price: 99, zipPath: "/anon.zip", image: "../Anon-website.png", previewLink: "/ecommerce-demo" },
//   { id: 3, title: "Blog Website", price: 39, zipPath: "/sample.zip", image: "/images/blog.jpg", previewLink: "/blog-demo" },
//   { id: 4, title: "Admin Dashboard", price: 79, zipPath: "/sample.zip", image: "/images/dashboard.jpg", previewLink: "/dashboard-demo" },
//   { id: 5, title: "React UI Kit", price: 59, zipPath: "/sample.zip", image: "/images/uikit.jpg", previewLink: "/uikit-demo" }
// ];

function ProjectList() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [proceedToPay, setProceedToPay] = useState(false);

  const handleBuyClick = (project) => {
    setSelectedProject(project); // Open modal even for free projects
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
      <h2 className="text-center mb-4">Available Projects</h2>
      <div className="row">
        {projects.map(project => (
          <div key={project.id} className="col-md-4 mb-4">
            <div className="project-card h-100 text-center p-3 border rounded">
              <div className="image-container mb-2">
                <img src={project.image} alt={project.title} className="scroll-image img-fluid rounded" />
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-price">
                {project.isFree ? "Free" : `Price: ₹${project.price}`}
              </p>

              <div className="d-flex align-items-center gap-2 justify-content-between">
                <button
                  className={`btn ${project.isFree ? 'btn-success' : 'btn-primary'} w-500`}
                  onClick={() => handleBuyClick(project)}
                >
                  {project.isFree ? 'Download Free' : 'Buy Now'}
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className='col-md-4 mb-4'>
<div className='coming-soon text-center h-100 text-center p-3 border rounded'>
Coming Soon...
</div>
        </div>
      </div>

      {selectedProject && !proceedToPay && (
        <ProjectModal
          project={selectedProject}
          onClose={handleCloseModal}
          onContinue={handleContinueToPayment}
        />
      )}

      {selectedProject && proceedToPay && !selectedProject.isFree && (
        <RazorpayButton amount={selectedProject.price} zipPath={selectedProject.zipPath} />
      )}
    </div>
  );
}

export default ProjectList;
