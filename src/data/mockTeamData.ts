import { TeamWidgetData } from '../components/TeamWidget/types';

export const mockTeamData: TeamWidgetData = {
  members: [
    {
      id: "1",
      name: "Dr. Sarah Johnson",
      credentials: "MD, PhD",
      title: "Chief Medical Officer",
      description: "Leading expert in cardiovascular medicine with over 15 years of experience.",
      image: {
        src: "/placeholder.jpg",
        alt: "Dr. Sarah Johnson",
        srcset: "/placeholder.jpg 400w, /placeholder.jpg 800w, /placeholder.jpg 1200w"
      },
      bio: "Dr. Sarah Johnson is a renowned cardiologist with extensive experience in both clinical practice and medical research. She has published over 50 peer-reviewed articles and has been instrumental in developing innovative treatment protocols for heart disease. Her dedication to patient care and medical excellence has earned her recognition as one of the top physicians in her field.",
      hasDecorativeSvg: false
    },
    {
      id: "2",
      name: "Michael Chen",
      credentials: "MBA, CPA",
      title: "Chief Financial Officer",
      description: "Strategic financial leader with expertise in healthcare economics.",
      image: {
        src: "/placeholder.jpg",
        alt: "Michael Chen",
        srcset: "/placeholder.jpg 400w, /placeholder.jpg 800w, /placeholder.jpg 1200w"
      },
      bio: "Michael Chen brings over 12 years of financial leadership experience to our organization. He has successfully managed multi-million dollar budgets and led financial transformations at several healthcare institutions. His strategic approach to financial planning has helped organizations achieve sustainable growth while maintaining the highest standards of patient care.",
      hasDecorativeSvg: false
    },
    {
      id: "3",
      name: "Dr. Emily Rodriguez",
      credentials: "PhD, RN",
      title: "Director of Nursing Excellence",
      description: "Passionate advocate for nursing education and patient safety.",
      image: {
        src: "/placeholder.jpg",
        alt: "Dr. Emily Rodriguez",
        srcset: "/placeholder.jpg 400w, /placeholder.jpg 800w, /placeholder.jpg 1200w"
      },
      bio: "Dr. Emily Rodriguez has dedicated her career to advancing nursing practice and improving patient outcomes. With a PhD in Nursing Science and over 20 years of clinical experience, she has implemented evidence-based practices that have significantly improved patient satisfaction scores and reduced hospital readmission rates.",
      hasDecorativeSvg: false
    },
    {
      id: "4",
      name: "James Thompson",
      title: "Director of Operations",
      description: "Operational excellence leader focused on process improvement and efficiency.",
      bio: "James Thompson has a proven track record of streamlining healthcare operations and improving organizational efficiency. His innovative approach to process improvement has resulted in significant cost savings while enhancing the quality of patient care. He specializes in lean management principles and has successfully led multiple organizational transformation initiatives.",
      hasDecorativeSvg: true
    },
    {
      id: "5",
      name: "Dr. Lisa Park",
      credentials: "MD, MPH",
      title: "Chief Quality Officer",
      description: "Quality improvement specialist with focus on patient safety and outcomes.",
      image: {
        src: "/placeholder.jpg",
        alt: "Dr. Lisa Park",
        srcset: "/placeholder.jpg 400w, /placeholder.jpg 800w, /placeholder.jpg 1200w"
      },
      bio: "Dr. Lisa Park is a board-certified physician with a Master's in Public Health who has devoted her career to improving healthcare quality and patient safety. She has led numerous quality improvement initiatives that have resulted in measurable improvements in patient outcomes and has been recognized nationally for her contributions to healthcare quality.",
      hasDecorativeSvg: false
    }
  ]
};

export const mockTeamDataSimple: TeamWidgetData = {
  members: [
    {
      id: "1",
      name: "John Smith",
      title: "Senior Developer",
      description: "Full-stack developer with expertise in React and Node.js.",
      hasDecorativeSvg: true
    },
    {
      id: "2",
      name: "Jane Doe",
      credentials: "PhD",
      title: "Research Director",
      description: "Leading research initiatives in artificial intelligence.",
      image: {
        src: "/placeholder.jpg",
        alt: "Jane Doe",
        srcset: "/placeholder.jpg 400w, /placeholder.jpg 800w, /placeholder.jpg 1200w"
      },
      bio: "Jane Doe is a leading researcher in artificial intelligence with over 10 years of experience in machine learning and natural language processing.",
      hasDecorativeSvg: false
    },
    {
      id: "3",
      name: "Bob Wilson",
      title: "Product Manager",
      description: "Product strategy and user experience specialist.",
      bio: "Bob Wilson has extensive experience in product management and has successfully launched multiple software products that have achieved significant market success.",
      hasDecorativeSvg: true
    }
  ]
};
