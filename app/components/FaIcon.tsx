"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faGraduationCap,
  faRocket,
  faArrowsRotate,
  faHandshake,
  faTrophy,
  faSatelliteDish,
  faScaleBalanced,
  faBullhorn,
  faGlobe,
  faBullseye,
  faPeopleGroup,
  faMountain,
  faEnvelope,
  faFlask,
  faLandmark,
  faBuilding,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const icons: Record<string, IconProp> = {
  "graduation-cap": faGraduationCap,
  rocket: faRocket,
  "arrows-rotate": faArrowsRotate,
  handshake: faHandshake,
  trophy: faTrophy,
  "satellite-dish": faSatelliteDish,
  "scale-balanced": faScaleBalanced,
  bullhorn: faBullhorn,
  globe: faGlobe,
  bullseye: faBullseye,
  "people-group": faPeopleGroup,
  mountain: faMountain,
  envelope: faEnvelope,
  flask: faFlask,
  landmark: faLandmark,
  building: faBuilding,
  seedling: faSeedling,
  instagram: faInstagram,
  linkedin: faLinkedin,
  whatsapp: faWhatsapp,
};

interface FaIconProps {
  name: keyof typeof icons;
  className?: string;
}

export default function FaIcon({ name, className }: FaIconProps) {
  const icon = icons[name];
  if (!icon) return null;
  return <FontAwesomeIcon icon={icon} className={className} />;
}
