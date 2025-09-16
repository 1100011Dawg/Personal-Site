
export interface ProfileData {
  name: string;
  title: string;
  bio: string;
  location: string;
  contact: {
    email: string;
    phone: string;
    linkedin: string;
    github: string;
  };
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  dates: string;
  description: string[];
}

export interface Project {
  title: string;
  date: string;
  description: string[];
  tools: string[];
  link?: string;
  imageUrl: string;
}

export interface Skills {
  languages: string[];
  technologies: string[];
  communication: string[];
}

export interface Education {
    school: string;
    degree: string;
    graduation: string;
    focus: string;
    gpa: string;
    courses: string[];
}
