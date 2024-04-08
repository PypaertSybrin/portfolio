import Skill from '@/models/Skill'
import { SiFlutter } from 'react-icons/si'
import { LuMonitor, LuSmartphone, LuDatabase } from "react-icons/lu";

export const SkillData: Skill[] = [
  {
    icon: LuMonitor,
    name: 'Frontend Development',
    strength: [
      { icon: SiFlutter, name: 'Flutter', color: 'blue' },
      { icon: SiFlutter, name: 'Flutter', color: 'blue' },
      { icon: SiFlutter, name: 'Flutter', color: 'blue' },
    ],
  },
  {
    icon: LuDatabase,
    name: 'Backend Development',
    strength: [
      { icon: SiFlutter, name: 'Flutter', color: 'blue' },
      { icon: SiFlutter, name: 'Flutter', color: 'blue' },
      { icon: SiFlutter, name: 'Flutter', color: 'blue' },
    ],
  },
  {
    icon: LuSmartphone,
    name: 'Mobile Development',
    strength: [
      { icon: SiFlutter, name: 'Fluttersss', color: 'blue' },
      { icon: SiFlutter, name: 'Flutter', color: 'blue' },
      { icon: SiFlutter, name: 'Flutter', color: 'blue' },
      { icon: SiFlutter, name: 'Flutter', color: 'blue' },
    ],
  },
]
