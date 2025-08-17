import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaTelegram,
  FaReddit,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { getShareUrl, Platform } from "./utils";

type Props = {
  platform: Platform;
  url: string;
  text?: string;
  label?: string; // optional custom label text
  className?: string; // allow consumers to extend Tailwind classes
  iconClassName?: string; // tweak icon size if needed
  icon?: React.ComponentType<import("react-icons").IconBaseProps>; // custom icon component using react-icons props
  iconProps?: import("react-icons").IconBaseProps; // props to pass to the icon (e.g. size, color)
};

const platformConfig: Record<
  Platform,
  {
    base: string;
    hover: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  }
> = {
  facebook: {
    base: "bg-blue-600",
    hover: "hover:bg-blue-700",
    icon: FaFacebook,
  },

  linkedin: {
    base: "bg-blue-700",
    hover: "hover:bg-blue-800",
    icon: FaLinkedin,
  },
  whatsapp: {
    base: "bg-green-500",
    hover: "hover:bg-green-600",
    icon: FaWhatsapp,
  },
  telegram: {
    base: "bg-sky-400",
    hover: "hover:bg-sky-500",
    icon: FaTelegram,
  },
  reddit: {
    base: "bg-orange-500",
    hover: "hover:bg-orange-600",
    icon: FaReddit,
  },
  X: {
    base: "bg-black",
    hover: "hover:bg-gray-800",
    icon: FaXTwitter,
  },
};

const SocialButton: React.FC<Props> = ({
  platform,
  url,
  text,
  label,
  className = "",
  iconClassName = "",
  icon: CustomIcon,
  iconProps = {},
}) => {
  const shareUrl = getShareUrl(platform, url, text);
  const cfg = platformConfig[platform];
  const IconComponent = CustomIcon || cfg.icon;

  return (
    <a
      href={shareUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={[
        "shadow-md",
        "transition-all duration-300 transform hover:scale-110 active:scale-95",
        cfg.base,
        cfg.hover,
        className,
      ].join(" ")}
      aria-label={`Share on ${label ?? platform}`}
      data-testid={`social-button-${platform}`}
    >
      <span className={["text-lg", iconClassName].join(" ")}>
        <IconComponent size={24} {...iconProps} />
      </span>
    </a>
  );
};

export default SocialButton;
