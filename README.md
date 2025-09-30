# Akshit Kumar - Personal Website

A modern, responsive personal website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## 📝 How to Edit Your Website Content

### 1. **Basic Site Information**
Edit `/content/site-config.ts` to update:
- Your name, bio, and contact info
- Hero section text
- Services descriptions
- Social media links

### 2. **Blog Posts & Writing**
- Create new `.md` files in `/content/blog/`
- Follow this format:
  ```markdown
  ---
  title: "Your Post Title"
  excerpt: "Brief description"
  category: "Product" or "Writing" or "Adventures"
  date: "2024-01-15"
  ---
  
  Your blog content here...
  ```

### 3. **Project Portfolio**
- Add projects in `/content/projects/`
- Include images in `/public/images/projects/`

### 4. **Images & Assets**
- Profile photos: `/public/images/profile/`
- Project images: `/public/images/projects/`
- Blog images: `/public/images/blog/`

### 5. **Adventures & Photography**
- Add adventure posts in `/content/adventures/`
- Include photos in `/public/images/adventures/`

## 🔧 Tech Stack

- **Framework:** Next.js 14 with App Router
- **Styling:** Tailwind CSS
- **Typography:** Playfair Display (headings) + Manrope (body)
- **Animations:** Framer Motion
- **Icons:** Heroicons
- **Content:** MDX/Markdown files
- **Deployment:** Vercel (recommended)

## 📄 Pages Structure

- `/` - Home page with hero, services, about, and content preview
- `/work` - Portfolio and case studies
- `/writing` - Blog posts and articles
- `/adventures` - Outdoor adventures and photography
- `/newsletter` - Newsletter signup and archive
- `/contact` - Contact form and information

## 🎨 Design System

### Colors
- **Primary:** #111827 (charcoal black)
- **Accent Orange:** #F97316
- **Accent Indigo:** #6366F1
- **Background:** #F9FAFB
- **Text:** #1F2937 (primary), #6B7280 (muted)

### Typography
- **Headings:** Playfair Display (serif)
- **Body:** Manrope (sans-serif)

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repo to Vercel
3. Deploy automatically

### Custom Domain
1. Add your domain in Vercel dashboard
2. Update DNS settings
3. SSL automatically configured

## 📧 Newsletter Integration

To connect your newsletter form:

1. **ConvertKit:**
   - Get your form ID
   - Update the form action in `NewsletterSection.tsx`

2. **Substack:**
   - Embed Substack form
   - Replace the form in `NewsletterSection.tsx`

## 📞 Contact Form

The contact form uses Formspree by default:
1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update the form action in `/app/contact/page.tsx`

## 🔧 Customization

### Changing Colors
Edit `tailwind.config.ts` to update the color scheme:
```typescript
colors: {
  primary: '#your-color',
  accent: {
    orange: '#your-orange',
    indigo: '#your-indigo',
  },
}
```

### Adding New Sections
Create components in `/src/components/` and import them into your pages.

### Modifying Layout
- Header: `/src/components/Header.tsx`
- Footer: `/src/components/Footer.tsx`
- Global styles: `/src/app/globals.css`

## 📁 Project Structure

```
akshit-personal-website/
├── content/               # Your editable content
│   ├── site-config.ts    # Main site configuration
│   ├── blog/             # Blog posts (markdown)
│   ├── projects/         # Portfolio projects
│   └── adventures/       # Adventure posts
├── public/               # Static assets
│   └── images/           # Your photos and images
├── src/
│   ├── app/              # Next.js pages
│   ├── components/       # React components
│   └── lib/              # Utilities
└── README.md             # This file
```

## 💡 Tips for Content Management

1. **Regular Updates:** Update your content files weekly
2. **Image Optimization:** Use WebP format for better performance
3. **SEO:** Include meta descriptions in your blog posts
4. **Analytics:** Add Google Analytics or Plausible for insights

## 🆘 Need Help?

- Check the [Next.js Documentation](https://nextjs.org/docs)
- Review [Tailwind CSS Docs](https://tailwindcss.com/docs)
- Framer Motion [Animation Guide](https://framer.com/motion)

---

Built with ❤️ by Claude Code