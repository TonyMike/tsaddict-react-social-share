export type Platform =
  | "facebook"
  | "linkedin"
  | "whatsapp"
  | "telegram"
  | "reddit"
  | "X"
  | "email"
  | "messenger"
  | "discord";

export const getShareUrl = (platform: Platform, url: string, text?: string) => {
  switch (platform) {
    case "facebook":
      return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        url
      )}`;

    case "linkedin":
      return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        url
      )}`;
    case "whatsapp":
      // works on mobile + desktop web
      return `https://wa.me/?text=${encodeURIComponent(
        text ? `${text} ${url}` : url
      )}`;
    case "telegram":
      return `https://t.me/share/url?url=${encodeURIComponent(
        url
      )}&text=${encodeURIComponent(text || "")}`;
    case "reddit":
      return `https://www.reddit.com/submit?url=${encodeURIComponent(
        url
      )}&title=${encodeURIComponent(text || "")}`;
    case "X":
      return `https://x.com/intent/tweet?url=${encodeURIComponent(
        url
      )}&text=${encodeURIComponent(text || "")}`;
    case "email":
      return `mailto:?subject=${encodeURIComponent(
        text || ""
      )}&body=${encodeURIComponent(url)}`;
    case "messenger":
      return `https://www.facebook.com/dialog/send?app_id=1234567890&link=${encodeURIComponent(
        url
      )}`;
    case "discord":
      return `https://discord.com/invite/${encodeURIComponent(url)}`;
  }
};
