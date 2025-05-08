import React from 'react';

const ProjectModal = ({ project, onClose, onContinue }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button onClick={onClose} className="close-btn">✕</button>
        <h2>{project.title}</h2>

        <div className="screenshots">
          {[1, 2, 3, 4].map(num => (
            <img
              key={num}
              src={`/screenshots/${project.id}_${num}.jpg`}
              alt={`Screenshot ${num}`}
            />
          ))}
        </div>

        <div className="details">
          <p><strong>Languages Used:</strong> HTML, CSS, JavaScript, React</p>
          <p><strong>Layout:</strong> Responsive design using CSS Grid and Flexbox. Includes navbar, sections, and footer.</p>
        </div>

        <button onClick={onContinue} className="pay-btn">Continue to Payment</button>
      </div>

      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: rgba(0, 0, 0, 0.7);
          display: flex; justify-content: center; align-items: center;
          z-index: 999;
        }
        .modal-box {
          background: #fff;
          padding: 20px;
          width: 90%;
          max-width: 600px;
          border-radius: 10px;
          position: relative;
        }
        .screenshots {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          margin: 15px 0;
        }
        .screenshots img {
          width: 100%;
          border-radius: 6px;
        }
        .details {
          font-size: 14px;
          margin-bottom: 20px;
        }
        .close-btn {
          position: absolute;
          right: 10px;
          top: 10px;
          background: none;
          border: none;
          font-size: 20px;
          cursor: pointer;
        }
        .pay-btn {
          background: #007bff;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default ProjectModal;
