export type Platform =
  | "facebook"
  | "twitter"
  | "linkedin"
  | "whatsapp"
  | "telegram"
  | "reddit";

export const getShareUrl = (platform: Platform, url: string, text?: string) => {
  switch (platform) {
    case "facebook":
      return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        url
      )}`;
    case "twitter":
      return `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        url
      )}&text=${encodeURIComponent(text || "")}`;
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
  }
};
