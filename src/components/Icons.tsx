'use client';
import { ComponentProps, JSX } from 'react';
import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  XLogoIcon,
  CaretRightIcon,
  XIcon,
  ArrowSquareOutIcon,
  YoutubeLogoIcon,
  DotIcon,
} from '@phosphor-icons/react';

const iconMap = {
  linkedinLogo: LinkedinLogoIcon,
  githubLogo: GithubLogoIcon,
  xLogo: XLogoIcon,
  caretRight: CaretRightIcon,
  x: XIcon,
  arrowOut: ArrowSquareOutIcon,
  youtubeLogo: YoutubeLogoIcon,
  dot: DotIcon,
  // Add more icons as needed
} as const;

type IconName = keyof typeof iconMap;
type IconComponent = (
  props: ComponentProps<typeof LinkedinLogoIcon>,
) => JSX.Element;
type IconProps = { name: IconName } & ComponentProps<IconComponent>;

export default function Icon({ name, ...props }: IconProps) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found.`);
    return null;
  }

  return <IconComponent color={props.color} {...props} />;
}
