# Portfolio Website

A modern, responsive portfolio website built with Next.js, showcasing my work as a full-stack developer.

## 🌟 Features

- **Modern Design**: Clean and professional interface with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark Theme**: Eye-friendly dark theme with carefully chosen colors
- **Sections**:
  - Interactive Hero section
  - About Me with key skills
  - Experience timeline
  - Project showcase with case studies
  - Skills & Technologies
  - Contact form

## 🛠 Technologies Used

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Shadcn/ui
- **Icons**: Lucide React
- **Form Handling**: React Hook Form
- **Deployment**: Vercel

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/navid001/portfolio.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── error.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── loading.tsx
│   │   ├── not-found.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── sections/
│   │   │   ├── hero.tsx
│   │   │   ├── about.tsx
│   │   │   ├── experience.tsx
│   │   │   ├── projects.tsx
│   │   │   ├── selectedProject.tsx
│   │   │   ├── skills.tsx
│   │   │   ├── services.tsx
│   │   │   ├── testimonials.tsx
│   │   │   └── contact.tsx
│   │   ├── layout/
│   │   │   ├── footer.tsx
│   │   │   ├── loading-screen.tsx
│   │   │   ├── navbar.tsx
│   │   │   ├── pageLayout.tsx
│   │   │   ├── theme-provider.tsx
│   │   └── ui/
│   ├── hooks/
│   ├── lib/
│   ├── types/
└── public/
│   ├── projects/
│   │   ├── floortech/
│   │   ├── portfolio/
│   │   ├── webscraper/
```

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Mobile devices (320px and up)
- Tablets (768px and up)
- Desktops (1024px and up)
- Large screens (1280px and up)

## ✨ Key Features

- Smooth scroll animations
- Interactive project cards
- Detailed case studies for each project
- Skills visualization
- Contact form with validation
- Downloadable resume
- Social media links

## 🎨 Customization

1. Modify color scheme in `globals.css`
2. Add/remove sections in `src/component/layout/pageLayout.tsx`
3. Update projects in the projects variable inside `components/sections/projects.tsx`

## 📈 Future Improvements

- [ ] Add blog section
- [ ] Add testimonials section
- [ ] Implement dark/light theme toggle
- [ ] Add more refined project case studies
- [ ] Integrate with a CMS
- [ ] Add analytics


## 🤝 Contact

Navid Alvi - [navidalvi.001@gmail.com](mailto:navidalvi.001@gmail.com)

Project Link: [https://github.com/navid001/portfolio](https://github.com/navid001/portfolio)