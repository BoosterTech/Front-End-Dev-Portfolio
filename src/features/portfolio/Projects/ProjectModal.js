import { useLanguage } from "common/LanguageProvider";
import useContent from "common/useContent";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";

import {
  Backdrop,
  CloseButton,
  Modal,
  ModalCTAButton,
  ModalCTAContainer,
  ModalContent,
  ModalDescription,
  ModalImage,
  ModalImageWrapper,
  ModalScroll,
  ModalTechBadge,
  ModalTechBadges,
  ModalTitle,
} from "./ProjectModal.styles";

/** @param {{ project: import("../../../types").Project | null; onClose: () => void }} props */
const ProjectModal = ({ project, onClose }) => {
  const { language } = useLanguage();
  const { projects: projectsContent } = useContent();

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  return createPortal(
    <Backdrop
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <Modal
        role="dialog"
        aria-modal="true"
        aria-label={project.title[language]}
        initial={{ scale: 0.85, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.85, opacity: 0, y: 30 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        <CloseButton onClick={onClose} aria-label={projectsContent.closeLabel}>
          <FaTimes />
        </CloseButton>
        <ModalScroll>
          <ModalImageWrapper>
            <ModalImage
              src={project.imageURL}
              alt={`${project.title[language]} project screenshot`}
            />
          </ModalImageWrapper>
          <ModalContent>
            <ModalTitle>{project.title[language]}</ModalTitle>
            <ModalDescription
              dangerouslySetInnerHTML={{
                __html: project.description[language],
              }}
            />
            {project.technologies?.length > 0 && (
              <ModalTechBadges>
                {project.technologies.map((tech) => (
                  <ModalTechBadge key={tech}>{tech}</ModalTechBadge>
                ))}
              </ModalTechBadges>
            )}
            <ModalCTAContainer>
              {project.GitHubPagesURL && (
                <ModalCTAButton
                  href={project.GitHubPagesURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt />
                  {project.GitHubPagesURLTag?.[language] || "Live Demo"}
                </ModalCTAButton>
              )}
              {project.GitHubRepoURL && (
                <ModalCTAButton
                  $secondary
                  href={project.GitHubRepoURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                  {project.GitHubRepoURLTag?.[language] || "GitHub"}
                </ModalCTAButton>
              )}
            </ModalCTAContainer>
          </ModalContent>
        </ModalScroll>
      </Modal>
    </Backdrop>,
    document.body
  );
};

export default ProjectModal;
