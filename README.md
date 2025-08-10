# Professional Company Website

![App Preview](https://imgix.cosmicjs.com/b5ee1b70-758b-11f0-a051-23c10f41277a-photo-1551434678-e076c223a692-1754790330852.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, professional company website built with Next.js 15 and powered by Cosmic. Showcases your services, team members, client testimonials, and case studies with a clean, responsive design optimized for conversions and user experience.

## Features

- 🏢 **Dynamic Services Showcase** - Interactive service cards with features and pricing
- 👥 **Team Member Profiles** - Professional team pages with skills and contact info
- 💬 **Client Testimonials** - Star ratings and testimonials with company logos
- 📊 **Case Study Portfolio** - Detailed project showcases with results and galleries
- 📱 **Responsive Design** - Optimized for all devices and screen sizes
- ⚡ **Performance Optimized** - Fast loading with image optimization
- 🎯 **SEO Ready** - Built-in meta tags and structured data
- 🔒 **Type Safe** - Full TypeScript implementation with strict typing

## Clone this Bucket and Code Repository

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Bucket and Code Repository](https://img.shields.io/badge/Clone%20this%20Bucket-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=6897f9256c33c6be18683887&clone_repository=68980fdc6c33c6be186838ac)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> Create a content model for a company website with services, team members, testimonials, and case studies

### Code Generation Prompt

> Build a Next.js website that uses my existing objects in this bucket

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Cosmic** - Headless CMS for content management
- **React** - UI library for building components

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with content

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   bun install
   ```

3. Set up environment variables:
   ```env
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

4. Run the development server:
   ```bash
   bun dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the website

## Cosmic SDK Examples

### Fetching Services

```typescript
import { cosmic } from '@/lib/cosmic'

export async function getServices() {
  try {
    const { objects } = await cosmic.objects
      .find({ type: 'services' })
      .props(['id', 'title', 'slug', 'metadata'])
    return objects
  } catch (error) {
    if (error.status === 404) return []
    throw error
  }
}
```

### Fetching Team Members

```typescript
export async function getTeamMembers() {
  try {
    const { objects } = await cosmic.objects
      .find({ type: 'team-members' })
      .props(['id', 'title', 'slug', 'metadata'])
    return objects
  } catch (error) {
    if (error.status === 404) return []
    throw error
  }
}
```

## Cosmic CMS Integration

This website integrates with the following Cosmic object types:

- **Services** - Service offerings with descriptions, features, and pricing
- **Team Members** - Staff profiles with photos, bios, and skills
- **Testimonials** - Client reviews with ratings and company information
- **Case Studies** - Project portfolios with images and results

All content is dynamically loaded from your Cosmic bucket and optimized for performance with image compression and responsive delivery.

## Deployment Options

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in the Vercel dashboard
4. Deploy automatically

### Netlify
1. Connect your repository to Netlify
2. Set build command: `bun run build`
3. Set output directory: `out`
4. Add environment variables
5. Deploy

For production, make sure to set your environment variables in your hosting platform's dashboard.

<!-- README_END -->