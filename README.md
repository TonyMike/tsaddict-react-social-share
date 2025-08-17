# @tsaddict/react-social-share

A lightweight, modern React component library for social media sharing with beautiful Tailwind CSS animations and React Icons integration.

## 🚀 Features

- **6 Social Platforms**: Facebook, Twitter, LinkedIn, WhatsApp, Telegram, and Reddit
- **Beautiful Animations**: Smooth hover effects with scale transforms and color transitions
- **Tailwind CSS Ready**: Built with Tailwind CSS for easy customization
- **TypeScript Support**: Full TypeScript support with proper type definitions
- **Accessibility**: ARIA labels and semantic HTML for screen readers
- **Responsive Design**: Mobile-friendly with proper touch targets
- **Customizable**: Extensive customization options for styling and behavior
- **Lightweight**: Minimal bundle size with tree-shaking support

## 📦 Installation

```bash
npm install @tsaddict/react-social-share
```

### Peer Dependencies

This package requires the following peer dependencies:

```json
{
  "react": ">=17.0.0",
  "react-dom": ">=17.0.0",
  "react-icons": ">=4.0.0"
}
```

Make sure you have these installed in your project.

## 🎯 Quick Start

### Basic Usage

```tsx
import { SocialButton, SocialShareGroup } from "@tsaddict/react-social-share";

function App() {
  return (
    <div>
      {/* Single social share button */}
      <SocialButton
        platform="twitter"
        url="https://example.com"
        text="Check out this amazing article!"
      />

      {/* Group of social share buttons */}
      <SocialShareGroup
        url="https://example.com"
        text="Amazing content to share!"
      />
    </div>
  );
}
```

## 🧩 Components

### SocialButton

Individual social media share button component.

#### Props

| Prop            | Type       | Required | Default          | Description                             |
| --------------- | ---------- | -------- | ---------------- | --------------------------------------- |
| `platform`      | `Platform` | ✅       | -                | Social media platform to share to       |
| `url`           | `string`   | ✅       | -                | URL to share                            |
| `text`          | `string`   | ❌       | -                | Optional text to include with the share |
| `label`         | `string`   | ❌       | Platform default | Custom label text                       |
| `className`     | `string`   | ❌       | `""`             | Additional CSS classes for styling      |
| `iconClassName` | `string`   | ❌       | `""`             | Additional CSS classes for the icon     |

#### Platform Values

```typescript
type Platform =
  | "facebook"
  | "twitter"
  | "linkedin"
  | "whatsapp"
  | "telegram"
  | "reddit";
```

#### Example

```tsx
<SocialButton
  platform="linkedin"
  url="https://mycompany.com/careers"
  text="We're hiring! Check out our open positions."
  label="Share on LinkedIn"
  className="text-sm px-6 py-3"
  iconClassName="text-xl"
/>
```

### SocialShareGroup

Container component that renders multiple social share buttons.

#### Props

| Prop              | Type                                | Required | Default                               | Description                          |
| ----------------- | ----------------------------------- | -------- | ------------------------------------- | ------------------------------------ |
| `url`             | `string`                            | ✅       | -                                     | URL to share                         |
| `text`            | `string`                            | ❌       | -                                     | Optional text to include with shares |
| `platforms`       | `Platform[]`                        | ❌       | All platforms                         | Specific platforms to show           |
| `wrapClassName`   | `string`                            | ❌       | `"flex flex-wrap items-center gap-3"` | Container CSS classes                |
| `buttonClassName` | `string`                            | ❌       | -                                     | CSS classes applied to all buttons   |
| `iconClassName`   | `string`                            | ❌       | -                                     | CSS classes applied to all icons     |
| `labels`          | `Partial<Record<Platform, string>>` | ❌       | `{}`                                  | Custom labels per platform           |

#### Example

```tsx
<SocialShareGroup
  url="https://myblog.com/post-123"
  text="Amazing blog post about React!"
  platforms={["twitter", "linkedin", "reddit"]}
  wrapClassName="flex flex-col gap-2"
  buttonClassName="w-full justify-center"
  labels={{
    twitter: "Tweet this",
    linkedin: "Share on LinkedIn",
    reddit: "Post to Reddit",
  }}
/>
```

## 🎨 Customization

### Styling with Tailwind CSS

The components use Tailwind CSS classes and can be easily customized:

```tsx
// Custom button styling
<SocialButton
  platform="facebook"
  url="https://example.com"
  className="bg-purple-600 hover:bg-purple-700 rounded-full px-6 py-3"
/>

// Custom group layout
<SocialShareGroup
  url="https://example.com"
  wrapClassName="grid grid-cols-2 md:grid-cols-3 gap-4"
  buttonClassName="text-sm font-bold"
/>
```

### Platform-Specific Colors

Each platform has its brand colors by default:

- **Facebook**: Blue (`bg-blue-600`)
- **Twitter**: Sky (`bg-sky-500`)
- **LinkedIn**: Blue (`bg-blue-700`)
- **WhatsApp**: Green (`bg-green-500`)
- **Telegram**: Sky (`bg-sky-400`)
- **Reddit**: Orange (`bg-orange-500`)

### Animation Classes

The components include smooth animations:

- **Hover**: Scale up (`hover:scale-110`)
- **Active**: Scale down (`active:scale-95`)
- **Transitions**: Smooth duration (`transition-all duration-300`)

## 🔧 Advanced Usage

### Conditional Rendering

```tsx
function ShareSection({ article, user }) {
  const platforms = user.isPremium
    ? ["facebook", "twitter", "linkedin", "whatsapp", "telegram", "reddit"]
    : ["facebook", "twitter"];

  return (
    <SocialShareGroup
      url={article.url}
      text={article.title}
      platforms={platforms}
    />
  );
}
```

### Dynamic Labels

```tsx
function ShareButtons({ post }) {
  const labels = {
    twitter: `Share "${post.title}" on Twitter`,
    linkedin: `Share "${post.title}" on LinkedIn`,
    facebook: `Share "${post.title}" on Facebook`,
  };

  return <SocialShareGroup url={post.url} text={post.title} labels={labels} />;
}
```

### Custom Share URLs

```tsx
import { getShareUrl } from "@tsaddict/react-social-share";

function CustomShareButton({ platform, url, text }) {
  const shareUrl = getShareUrl(platform, url, text);

  const handleClick = () => {
    // Custom logic before sharing
    analytics.track("share_clicked", { platform, url });
    window.open(shareUrl, "_blank");
  };

  return <button onClick={handleClick}>Share on {platform}</button>;
}
```

## 📱 Mobile Support

The components are fully responsive and mobile-optimized:

- **Touch Targets**: Proper sizing for mobile devices
- **WhatsApp Integration**: Uses `wa.me` for mobile and desktop compatibility
- **Responsive Layout**: Flexible grid/flexbox layouts that work on all screen sizes

## ♿ Accessibility

- **ARIA Labels**: Proper labeling for screen readers
- **Semantic HTML**: Uses anchor tags for sharing functionality
- **Keyboard Navigation**: Full keyboard support
- **Focus Indicators**: Clear focus states for keyboard users

## 🚀 Performance

- **Tree Shaking**: Only import what you use
- **Minimal Dependencies**: Lightweight bundle size
- **Efficient Rendering**: Optimized React components
- **Lazy Loading**: Icons are loaded only when needed

## 🧪 Testing

The components are designed to be easily testable:

```tsx
import { render, screen } from "@testing-library/react";
import { SocialButton } from "@tsaddict/react-social-share";

test("renders social button with correct platform", () => {
  render(<SocialButton platform="twitter" url="https://example.com" />);

  expect(screen.getByLabelText("Share on Twitter")).toBeInTheDocument();
});
```

## 🔍 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile Browsers**: iOS Safari, Chrome Mobile, Samsung Internet
- **IE**: Not supported (uses modern ES6+ features)

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/yourusername/react-social-share/issues) page
2. Create a new issue with detailed information
3. Include your React version, browser, and reproduction steps

## 🔄 Changelog

### v0.1.0

- Initial release
- Support for 6 social platforms
- Tailwind CSS integration
- TypeScript support
- Responsive design
- Accessibility features

## 📚 Examples

### Blog Post Sharing

```tsx
function BlogPost({ post }) {
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.excerpt}</p>

      <div className="mt-8">
        <h3>Share this post:</h3>
        <SocialShareGroup
          url={post.url}
          text={post.title}
          platforms={["twitter", "linkedin", "facebook"]}
          wrapClassName="flex gap-3 mt-4"
        />
      </div>
    </article>
  );
}
```

### Product Page Sharing

```tsx
function ProductPage({ product }) {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>

      <SocialShareGroup
        url={product.url}
        text={`Check out ${product.name} - ${product.description}`}
        labels={{
          twitter: "Tweet this product",
          facebook: "Share on Facebook",
          whatsapp: "Share via WhatsApp",
        }}
        buttonClassName="bg-gray-800 hover:bg-gray-900"
      />
    </div>
  );
}
```

### Newsletter Signup

```tsx
function NewsletterSignup() {
  return (
    <div className="bg-blue-50 p-6 rounded-lg">
      <h3>Stay updated!</h3>
      <p>Share our newsletter with your network:</p>

      <SocialShareGroup
        url="https://mycompany.com/newsletter"
        text="Subscribe to our amazing newsletter!"
        platforms={["twitter", "linkedin"]}
        wrapClassName="flex gap-2 mt-4"
        buttonClassName="text-sm px-3 py-2"
      />
    </div>
  );
}
```

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
