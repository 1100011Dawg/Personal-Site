
import { ProfileData, Experience, Project, Skills, Education } from './types';

export const profileData: ProfileData = {
  name: "Dawson David",
  title: "Software Engineer | Data Science Focus",
  bio: "Aspiring software engineer with a strong foundation in computer science and a passion for data-driven solutions. Currently pursuing a BS at the Colorado School of Mines and seeking to leverage my skills in real-world applications.",
  location: "Grand Junction, CO",
  contact: {
    email: "dawsonleedavid@gmail.com",
    phone: "+1 970 644 7679",
    linkedin: "https://www.linkedin.com/in/dawson-david-41bb0918b/",
    github: "https://github.com/1100011Dawg",
  },
};

export const experiences: Experience[] = [
  {
    role: "Intern",
    company: "SalesForce",
    location: "Denver, CO",
    dates: "May 2025 – Aug 2025",
    description: [
      "Worked with TypeScript and a large-scale monolith repository to extend a command-line interface (CLI) tool for customers.",
      "Contributed across four distinct GitHub repositories for NPM modules, collectively exceeding one million weekly downloads.",
    ],
  },
  {
    role: "Front Desk",
    company: "Motel 6",
    location: "Grand Junction, CO",
    dates: "May 2024 – Aug 2024",
    description: [
      "Managed check-ins and reservations for over 1000 guests, ensuring high levels of customer satisfaction.",
      "Resolved on-shift incidents with effective and empathic communication.",
      "Diagnosed and troubleshooted network connections and credit card terminals, resulting in cost savings.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Self Hosted cluster",
    date: "January 2025",
    description: [
      "Built a k3s Kubernetes cluster on NixOS to self-host services like FreshRSS, Calibre, and SearXNG.",
      "Managed cluster configuration with YAML files derived from Docker Compose examples, accessed securely via NodePorts and Tailscale.",
    ],
    tools: ["Kubernetes", "K3s", "NixOS", "Docker", "Tailscale", "YAML"],
    imageUrl: "https://picsum.photos/seed/cluster/500/300",
  },
  {
    title: "Fossil Prediction via Bio-metric Data",
    date: "July 2024",
    description: [
      "Trained a histogram gradient boosting classifier on a Box-Cox standardized Encyclopedia of Life database.",
      "Performed exploratory data analysis and visualization using Seaborn and Matplotlib to highlight key findings.",
    ],
    tools: ["Python", "Scikit-learn", "Seaborn", "Matplotlib", "Numpy"],
    imageUrl: "https://picsum.photos/seed/fossil/500/300",
  },
  {
    title: "Ecosystem Predator-Prey Model",
    date: "Dec 2023",
    description: [
      "Modeled predator-prey dynamics by visualizing CSV data in a continuously changing 2D array with the SFML library.",
      "Built upon research from a prior 'LD50 correlation with r-Selection' paper.",
    ],
    tools: ["C++", "SFML", "Bash"],
    imageUrl: "https://picsum.photos/seed/ecosystem/500/300",
  },
  {
    title: "Palisade IB Students Website",
    date: "May 2023",
    description: [
      "Designed and developed a study resource website for fellow International Baccalaureate students.",
      "Integrated a custom Google search engine, calendar iframe, and links to relevant coursework.",
    ],
    tools: ["HTML", "CSS", "JavaScript", "Google Search API"],
    imageUrl: "https://picsum.photos/seed/website/500/300",
  },
];

export const skills: Skills = {
  languages: ["Bash", "C", "C++", "Python", "R", "Wolfram Mathematica", "TypeScript", "JavaScript"],
  technologies: ["Arch Linux", "CSS", "Excel", "Git", "HTML", "Latex", "Outlook", "PowerPoint", "Solidworks", "Word", "NPM", "Kubernetes", "K3s", "NixOS", "Docker", "Tailscale", "YAML"],
  communication: ["Customer Service", "Data Visualization", "Oratory", "Research", "SVG images", "Technical Writing"],
};

export const education: Education = {
    school: "Colorado School of Mines, Golden, CO",
    degree: "BS in Computer Science",
    graduation: "Exp. May 2026",
    focus: "Data Science",
    gpa: "3.975/4.0",
    courses: ["Data Structures And Algorithms", "Introductions to Data Science", "Statistical Modeling"]
};
