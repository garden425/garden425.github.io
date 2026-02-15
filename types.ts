
export interface Project {
  id: string;
  title: string;
  titleAccent?: string;
  accentColor?: string; // 프로젝트별 포인트 컬러 (예: Chatie-레드, Yammi-블루, Myrics-핑크)
  subtitle: string;
  tags: string[];
  description: string;
  overview: string;
  role: string;
  roleList?: string[];
  imageUrl: string;
  mockupUrl?: string;
  color: string;
  problemTitle?: string;
  problemText?: string;
  problemBullets?: string[];
  solutionTitle?: string;
  solutionText?: string;
  solutionBullets?: string[];
}

export interface Tool {
  name: string;
  icon: string;
}
