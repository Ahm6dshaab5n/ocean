import {Features} from '@/types/interfaces';

export const features:Features[]=[
  {
    imageUrl:'/features/bar-chart.png',
    title:'Reporting Dashboard',
    content:"Generate insightful reports and analytics with our reporting dashboard features "
  },
  {
imageUrl:'/features/calendar.png',
    title:'meeting scheduling',
    content:"Effortlessly schedule meetings, coordinate availability, and send automated reminder "
  },
 {
imageUrl:'/features/protect.png',
    title:'100% secured',
    content:"Enhance data protection with robust security features, ensuring confidentiality "
  }
  ]

export const FeaturesBlock:featureBlock[]=[
  {
    imageUrl:"/features/messaing.svg",
    title:"Integrated Messaging System",
    content:"The integrated messaging system within the CRM dashboard for engineering teans allows for instant and seamless communication among team members. It eliminates the need for external messaging platforms, keeping all project-related conversations organized and easily accessible within the dashboard's interface."
  },
  {
    imageUrl:"/features/task-management.svg",
    title:"Resource Allocation and Task Management",
    content:"The task management system within the CHM dashboard for engineering enables efficient tracking and assignment of tasks. It provides centralized platfers to create, prioritize, and monitor tasks, ensuring streamlined project execution and improved collaboration among team senbers.",
     isReversed:true,
  }
  ]

export default FeaturesBlock;