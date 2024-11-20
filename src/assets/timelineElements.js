
import military from '../assets/USAF.jpg'
import spa from '../assets/spa.png'
import uva from '../assets/uva.png'

const timelineElements = [
    {
      id: 1,
      title: "United States Air Force",
      location: "Omaha, Nebraska & Doha,Qatar",
      description: "I was priviledged to serve as a medic for 55th Medical Group and 367th Expeditionary Group",
      buttonText: "Details",
      date: "2017 - 2021",
      icon: military,
      color: "blue",
      tech: [],
    },
    {
      id: 2,
      title: "University of Virginia",
      location: "Charlottesville, Virginia",
      description: "I completed the Bachelor of Computer Science at UVA in two years",
      buttonText: "",
      date: "2021 - 2023",
      icon: uva,
      color: "purple",
      tech: ["JavaScript", "Java"," Python","HTML/CSS", "Node.js", "SQL", "and more"],
    },
    {
      id: 3,
      title: "System Planning and Analysis",
      location: "Alexandria, Virginia",
      description: "I was hired as a full-stack developer for SPA",
      buttonText: "Details",
      date: "2023 - present",
      icon: spa,
      color: "yellow",
      tech: ["ASP.Net", "EntityFramework", "C#", "JavaScript", "Bootstrap", "Typescript", "HTML/CSS","SQL", "and more"],
    },
   
  ];
  
  export default timelineElements.reverse();