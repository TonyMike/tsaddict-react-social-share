import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaTelegram,
  FaReddit,
} from "react-icons/fa";
import { getShareUrl, Platform } from "./utils";

type Props = {
  platform: Platform;
  url: string;
  text?: string;
  label?: string; // optional custom label text
  className?: string; // allow consumers to extend Tailwind classes
  iconClassName?: string; // tweak icon size if needed
};

const platformConfig: Record<
  Platform,
  { base: string; hover: string; icon: React.ReactNode; defaultLabel: string }
> = {
  facebook: {
    base: "bg-blue-600",
    hover: "hover:bg-blue-700",
    icon: <FaFacebook />,
    defaultLabel: "Facebook",
  },
  twitter: {
    base: "bg-sky-500",
    hover: "hover:bg-sky-600",
    icon: <FaTwitter />,
    defaultLabel: "Twitter",
  },
  linkedin: {
    base: "bg-blue-700",
    hover: "hover:bg-blue-800",
    icon: <FaLinkedin />,
    defaultLabel: "LinkedIn",
  },
  whatsapp: {
    base: "bg-green-500",
    hover: "hover:bg-green-600",
    icon: <FaWhatsapp />,
    defaultLabel: "WhatsApp",
  },
  telegram: {
    base: "bg-sky-400",
    hover: "hover:bg-sky-500",
    icon: <FaTelegram />,
    defaultLabel: "Telegram",
  },
  reddit: {
    base: "bg-orange-500",
    hover: "hover:bg-orange-600",
    icon: <FaReddit />,
    defaultLabel: "Reddit",
  },
};

const SocialButton: React.FC<Props> = ({
  platform,
  url,
  text,
  label,
  className = "",
  iconClassName = "",
}) => {
  const shareUrl = getShareUrl(platform, url, text);
  const cfg = platformConfig[platform];

  return (
    <a
      href={shareUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={[
        "inline-flex items-center gap-2 rounded-lg px-4 py-2 text-white font-medium shadow-md",
        "transition-all duration-300 transform hover:scale-110 active:scale-95",
        cfg.base,
        cfg.hover,
        className,
      ].join(" ")}
      aria-label={`Share on ${cfg.defaultLabel}`}
    >
      <span className={["text-lg", iconClassName].join(" ")}>{cfg.icon}</span>
      <span className="whitespace-nowrap">{label ?? cfg.defaultLabel}</span>
    </a>
  );
};

export default SocialButton;
