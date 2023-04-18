import React from 'react';
import PropTypes from 'prop-types';
import "./BoxProject.css"

const ProjectCard = ({ name, description, status, startDate, endDate, members, budget, tasks, files, comments, kpi }) => {
  return (
    <div className="project-card">
      <div className="project-name">{name}</div>
      <div className="project-description">{description}</div>
      <div className="project-status">{status}</div>
      <div className="project-dates">Du {startDate} au {endDate}</div>
      <div className="project-members">Membres de l'équipe : {members.join(', ')}</div>
      <div className="project-budget">Budget alloué : {budget}</div>
      <div className="project-tasks">Tâches : {tasks}</div>
      <div className="project-files">Fichiers : {files}</div>
      <div className="project-comments">Commentaires : {comments}</div>
      <div className="project-kpi">Indicateurs de performance : {kpi}</div>
    </div>
  );
};

ProjectCard.defaultProps = {
  name: 'Nom du projet',
  description: 'Description du projet',
  status: 'En cours',
  startDate: '01/01/2023',
  endDate: '31/12/2023',
  members: ['Alice', 'Bob', 'Charlie'],
  budget: '$10000',
  tasks: 15,
  files: 5,
  comments: 2,
  kpi: 'Délai : 10 jours, Coût : $9000'
};

ProjectCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  status: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  members: PropTypes.arrayOf(PropTypes.string),
  budget: PropTypes.string,
  tasks: PropTypes.number,
  files: PropTypes.number,
  comments: PropTypes.number,
  kpi: PropTypes.string
};

export default ProjectCard;
