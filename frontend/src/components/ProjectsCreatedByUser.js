import React, { useEffect, useState, Component } from "react";
import { getProjectsByUser } from "../http/usersService";

export function ProjectsCreatedByUser({ projects }) {
  return (
    <h1>
      <span className="valoracion-span">{projects.length}</span> actuaciones
      creadas
    </h1>
  );
}
