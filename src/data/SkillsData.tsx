import Skill from '@/models/Skill';
import {
  SiAzurefunctions,
  SiDotnet,
  SiFirebase,
  SiFlutter,
  SiJavascript,
  SiMicrosoftazure,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { LuMonitor, LuSmartphone, LuDatabase } from 'react-icons/lu';

export const SkillData: Skill[] = [
  {
    icon: LuMonitor,
    name: 'Frontend Development',
    strength: [
      { icon: SiJavascript, name: 'JS', color: '#f0db4f' },
      { icon: SiTypescript, name: 'TS', color: '#3178c6' },
      { icon: SiReact, name: 'React', color: '#61dafb' },
      { icon: SiTailwindcss, name: 'Tailwindcss', color: '#06b6d4' },
      { icon: SiNextdotjs, name: 'Next.js', color: '#000000' }, // Black color
    ],
  },
  {
    icon: LuDatabase,
    name: 'Backend Development',
    strength: [
      { icon: SiMicrosoftazure, name: 'Azure', color: '#0078d4' },
      { icon: SiMysql, name: 'MySql', color: '#4479a1' },
      { icon: SiMongodb, name: 'MongoDB', color: '#4db33d' },
      { icon: SiDotnet, name: 'ASP.NET', color: '#512bd4' },
    ],
  },
  {
    icon: LuSmartphone,
    name: 'Mobile Development',
    strength: [
      { icon: SiFlutter, name: 'Flutter', color: '#02569b' },
      { icon: SiFirebase, name: 'Firebase', color: '#ffca28' },
    ],
  },
];
