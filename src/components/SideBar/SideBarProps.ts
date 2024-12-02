interface SideBarProps {
  data: {
    authors: string[],
    genres: string[],
  };
}

interface SideBarSectionProps extends SectionDataProps {
  name: string;
}

interface SectionDataProps {
  data: string[];
}

export type { SideBarProps, SideBarSectionProps, SectionDataProps };
