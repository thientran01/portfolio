
// Case study data

interface DataPoint {
  name: string;
  value: number;
  color?: string;
}

interface KeyInsight {
  title: string;
  description: string;
  icon?: string;
}

interface ProcessStep {
  title: string;
  description: string;
}

interface NextProject {
  title: string;
  slug: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  heroImage: string;
  isEmotional: boolean;
  overview: string;
  challenge: string;
  solution: string;
  timeline: string;
  role: string;
  tools: string[];
  process: ProcessStep[];
  researchMethods: string[];
  insights: string[];
  keyInsights: KeyInsight[];
  outcomes: string[];
  solutionImages: string[];
  dataPoints?: DataPoint[];
  dataTitle?: string;
  externalLink?: string;
  nextProject?: NextProject;
}

const caseStudies: CaseStudy[] = [
  {
    id: '1',
    slug: 'fixmyblock',
    title: 'FixMyBlock App',
    category: 'Functional UX',
    description: 'A community-focused reporting app for neighborhood issues',
    image: 'https://images.unsplash.com/photo-1603899122361-e99b4f8405e0?q=80&w=2874',
    heroImage: 'https://images.unsplash.com/photo-1603899122361-e99b4f8405e0?q=80&w=2874',
    isEmotional: false,
    overview: 'FixMyBlock is a mobile application designed to empower residents to report and track neighborhood issues such as damaged infrastructure, safety concerns, and maintenance needs. The app connects residents directly with local authorities, streamlining the reporting process and improving response times.',
    challenge: 'Residents in urban neighborhoods often struggle to report local issues effectively. Traditional channels like phone calls and emails can be time-consuming and lack transparency in the resolution process. We needed to create a solution that would make reporting simple, trackable, and effective while encouraging community engagement.',
    solution: 'We designed a user-friendly mobile application that allows residents to quickly report issues with geo-location, photos, and descriptions. The app includes a tracking system that provides updates on the status of reported problems and notifies users when issues are resolved. A community feed shows nearby reports and allows residents to upvote priority concerns.',
    timeline: 'May 2023 - September 2023',
    role: 'Lead UX Designer & Researcher',
    tools: ['Figma', 'Miro', 'React Native', 'UserTesting'],
    process: [
      {
        title: 'Research & Discovery',
        description: 'Conducted user interviews with 18 residents and 5 local officials to understand pain points in the current reporting process.'
      },
      {
        title: 'Define & Ideate',
        description: 'Created user personas and journey maps to identify key opportunities for improvement and generated solution concepts.'
      },
      {
        title: 'Prototype & Iterate',
        description: 'Developed a mid-fidelity prototype focusing on the core reporting flow and issue tracking interface.'
      },
      {
        title: 'Test & Refine',
        description: 'Conducted usability testing with 12 participants to identify friction points and refine the user experience.'
      },
      {
        title: 'Design & Deliver',
        description: 'Finalized UI design with a focus on accessibility and created a comprehensive design system for the development team.'
      }
    ],
    researchMethods: [
      'User Interviews',
      'Contextual Inquiry',
      'Competitive Analysis',
      'Usability Testing',
      'Survey (143 respondents)'
    ],
    insights: [
      'Users wanted a quick way to report issues without creating accounts',
      'Transparency in the resolution process was a top priority',
      'Visual confirmation (photos) was essential for both reporters and authorities',
      'Users valued community validation of issues through upvoting'
    ],
    keyInsights: [
      {
        title: 'Speed is Critical',
        description: 'Users abandon reporting if it takes longer than 2 minutes to complete the process.',
        icon: '⏱️'
      },
      {
        title: 'Visual Validation',
        description: 'Both residents and officials place high value on photographic evidence of issues.',
        icon: '📸'
      },
      {
        title: 'Status Transparency',
        description: 'Users expect regular updates and clear timelines for resolution.',
        icon: '🔍'
      }
    ],
    outcomes: [
      'Increased reporting rates by 64% compared to previous methods',
      'Reduced average resolution time from 14 days to 8 days',
      'Achieved 78% user satisfaction rating',
      '89% of users reported feeling more connected to their community'
    ],
    solutionImages: [
      'https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=2870',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2870'
    ],
    dataPoints: [
      { name: 'Reporting Rate', value: 64, color: '#1B2CC1' },
      { name: 'Resolution Time', value: 42, color: '#3D4ED9' },
      { name: 'User Satisfaction', value: 78, color: '#5F70F1' },
      { name: 'Community Connection', value: 89, color: '#818EFF' }
    ],
    dataTitle: 'Performance Metrics',
    externalLink: '#',
    nextProject: {
      title: 'Emotion Compass',
      slug: 'emotion-compass'
    }
  },
  {
    id: '2',
    slug: 'emotion-compass',
    title: 'Emotion Compass',
    category: 'Emotional UX',
    description: 'An emotional intelligence tool for self-awareness and reflection',
    image: 'https://images.unsplash.com/photo-1578091878751-557e3391dbc8?q=80&w=2874',
    heroImage: 'https://images.unsplash.com/photo-1578091878751-557e3391dbc8?q=80&w=2874',
    isEmotional: true,
    overview: 'Emotion Compass is a digital tool designed to help users develop greater emotional intelligence through guided self-reflection exercises, mood tracking, and personalized insights. The application supports users in identifying patterns in their emotional responses and developing healthier coping mechanisms.',
    challenge: 'Many people struggle to understand and process their emotions effectively, leading to poor decision-making, strained relationships, and mental health challenges. Traditional therapy is expensive and time-consuming, while most self-help apps lack personalization and scientific grounding. We needed to create an accessible tool that would help users develop emotional self-awareness in their daily lives.',
    solution: 'We designed an application that combines regular check-ins with guided reflection exercises and visualization tools that help users understand patterns in their emotional responses. The app uses a custom-designed "compass" visualization that maps emotional states and provides insights based on user data. Personalized recommendations help users develop coping strategies tailored to their emotional patterns.',
    timeline: 'January 2023 - June 2023',
    role: 'UX Lead & Product Designer',
    tools: ['Figma', 'Framer', 'Adobe Illustrator', 'Miro'],
    process: [
      {
        title: 'Research & Exploration',
        description: 'Worked with psychologists to understand emotional intelligence frameworks and conducted interviews with potential users.'
      },
      {
        title: 'Concept Development',
        description: 'Created the emotional compass metaphor and mapping system based on psychological models of emotion.'
      },
      {
        title: 'Visualization Design',
        description: 'Developed interactive visualizations that represent emotional states in an intuitive, non-judgmental way.'
      },
      {
        title: 'Prototype & Testing',
        description: 'Built interactive prototypes and conducted testing with 22 participants from diverse backgrounds.'
      },
      {
        title: 'Refinement & Launch',
        description: 'Refined the experience based on user feedback, with particular focus on accessibility and inclusivity.'
      }
    ],
    researchMethods: [
      'Expert Interviews',
      'Literature Review',
      'Co-design Workshops',
      'Diary Studies',
      'Prototype Testing'
    ],
    insights: [
      'Users often lack vocabulary to express their emotional states accurately',
      'Visual representations help users process complex emotional experiences',
      'Privacy and judgment-free experiences are essential for honest reflection',
      'Small, consistent interactions are more effective than lengthy sessions'
    ],
    keyInsights: [
      {
        title: 'Visual Language',
        description: 'Users could more easily identify and communicate emotions when given visual tools rather than text alone.',
        icon: '🎨'
      },
      {
        title: 'Moment of Reflection',
        description: 'Brief, daily check-ins were more effective than longer weekly sessions for developing emotional awareness.',
        icon: '✨'
      },
      {
        title: 'Personal Journey',
        description: 'Users valued seeing their emotional patterns over time, creating a sense of growth and progress.',
        icon: '🛤️'
      }
    ],
    outcomes: [
      'Users reported 73% improvement in emotional self-awareness',
      '68% reduction in reported emotional overwhelm',
      '82% of users established a daily reflection practice',
      'Positive feedback from therapists who recommended the app as a supplement to therapy'
    ],
    solutionImages: [
      'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2940',
      'https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=2940',
      'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=2940'
    ],
    dataPoints: [
      { name: 'Self-Awareness', value: 73, color: '#7692FF' },
      { name: 'Emotional Regulation', value: 68, color: '#8EA2FF' },
      { name: 'Daily Practice', value: 82, color: '#A6B3FF' },
      { name: 'Therapy Complement', value: 90, color: '#BDC5FF' }
    ],
    dataTitle: 'User Outcomes',
    nextProject: {
      title: 'FixMyBlock App',
      slug: 'fixmyblock'
    }
  }
];

export const getCaseStudyData = (slug: string): CaseStudy | undefined => {
  return caseStudies.find(study => study.slug === slug);
};

export const getAllCaseStudies = (): CaseStudy[] => {
  return caseStudies;
};
