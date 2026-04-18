# حنقس حناقيس's Project

![App Preview](https://imgix.cosmicjs.com/84180f30-3b14-11f1-968b-2b750db04345-Screenshot_--_-_com_instagram_android_InstagramMainActivity_edit_10638999180172.jpg?w=1200&h=630&fit=crop&auto=format,compress)

A modern Next.js website powered by [Cosmic](https://www.cosmicjs.com) CMS.

## Features

- 📝 Dynamic posts and categories
- 🎨 Modern responsive design
- ⚡ Server-side rendering with Next.js 16
- 🖼️ Optimized images via imgix
- 🔍 SEO-friendly URLs

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69e361c3e8787a5bd2e1b9be&clone_repository=69e3623ae8787a5bd2e1b9f8)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for: Yuyuugh7gd4hg44"

### Code Generation Prompt

> Build a Next.js application for a website called "حنقس حناقيس's Project". The content is managed in Cosmic CMS with the following object types: categories, posts. Create a beautiful, modern, responsive design with a homepage and pages for each content type.

The app has been tailored to work with your existing Cosmic content structure.

## Technologies

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Cosmic SDK

## Getting Started

### Prerequisites
- Bun installed
- Cosmic account and bucket

### Installation
```bash
bun install
bun run dev
```

## Cosmic SDK Examples

```typescript
// Fetch all posts
const { objects } = await cosmic.objects
  .find({ type: 'posts' })
  .depth(1)
```

## Cosmic CMS Integration

This app integrates with Cosmic to fetch posts and categories with depth queries for connected objects.

## Deployment Options

Deploy to Vercel or Netlify. Set environment variables in your hosting dashboard.
<!-- README_END -->