import React from "react";
import SocialButton from "./SocialButton";
import type { Platform } from "./utils";

type Props = {
  url: string;
  text?: string;
  platforms?: Platform[]; // default: all
  wrapClassName?: string; // container classes (gap, layout)
  buttonClassName?: string; // forward to each button
  iconClassName?: string; // forward to each button
  labels?: Partial<Record<Platform, string>>; // per-platform label overrides
};

const ALL: Platform[] = [
  "facebook",
  "X",
  "linkedin",
  "whatsapp",
  "telegram",
  "reddit",
];

const SocialShareGroup: React.FC<Props> = ({
  url,
  text,
  platforms = ALL,
  wrapClassName = "flex flex-wrap items-center gap-3",
  buttonClassName,
  iconClassName,
  labels = {},
}) => {
  return (
    <div className={wrapClassName}>
      {platforms.map((p) => (
        <SocialButton
          key={p}
          platform={p}
          url={url}
          text={text}
          className={buttonClassName}
          iconClassName={iconClassName}
          label={labels[p]}
        />
      ))}
    </div>
  );
};

export default SocialShareGroup;
