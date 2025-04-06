# DJ HOP Official Website

A modern, futuristic website showcasing DJ H.O.P's music, discography, and journey in turntablism. Built with Next.js, Tailwind CSS, and modern web technologies.

## 🎧 Features

- **Dynamic Home Page**
  - Animated logo and title
  - Interactive navigation
  - Biography with styled text sections
  - Featured tracks with Bandcamp integration
  - Social media links (Instagram, X, Email)
  - Responsive design for all devices

- **Music Page**
  - Bandcamp track embeddings
  - YouTube video integration
  - iTunes/Apple Music integration
  - Sticky navigation for platforms
  - Mobile-optimized layout

- **Discography Page**
  - Visual showcase of physical releases
  - Album/EP cards with hover effects
  - Chronological display of releases
  - Responsive grid layout

## 🛠 Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Custom CSS animations
- **Components**: Custom React components
- **Media**: Optimized image loading with Next.js Image
- **Deployment**: [Add deployment platform]

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home page
│   ├── music/               
│   │   └── page.tsx         # Music showcase page
│   ├── discography/
│   │   └── page.tsx         # Discography page
│   └── globals.css          # Global styles
├── components/
│   └── FuturisticButton.tsx # Custom button component
└── public/
    └── images/              # Image assets
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd [project-directory]
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

## 💫 Styling Guide

- **Color Scheme**
  - Primary: Cyan (#00ffff)
  - Secondary: Custom gradients
  - Text: White with varying opacity
  - Backgrounds: Black with transparency

- **Components**
  - FuturisticButton: Custom component for navigation
  - Card layouts: Consistent border and hover effects
  - Text sections: Left border highlights with hover effects

- **Animations**
  - Logo flip animation
  - Gradient text animations
  - Hover transitions
  - Background pulse effects

## 🔄 Content Updates

To update content:

1. **Music Page**
   - Add new tracks in the `releases` array in `music/page.tsx`
   - Support for Bandcamp, YouTube, and iTunes embeds

2. **Discography**
   - Add new releases in the `releases` array in `discography/page.tsx`
   - Include images in `public/images/`

3. **Home Page**
   - Update biography text in the story section
   - Modify featured tracks in the `featuredReleases` array

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

[Add License Information]

## 🔗 Links

- Website: [Add live URL]
- Instagram: [@chrishopbarton](https://www.instagram.com/chrishopbarton/)
- X/Twitter: [@DJHOP619](https://x.com/DJHOP619)
- Contact: djhop@hoponthecut.com
