# Vercel Deployment Guide

This guide will help you deploy your Next.js application to Vercel.

## Prerequisites

- A Vercel account (sign up at [vercel.com](https://vercel.com))
- Your project pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### Method 1: Vercel CLI (Recommended)

1. Install Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```

2. Login to your Vercel account:
   ```bash
   vercel login
   ```

3. Deploy your project:
   ```bash
   vercel
   ```

4. Follow the prompts to configure your deployment

### Method 2: Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your Git repository
4. Vercel will automatically detect it's a Next.js project
5. Configure your environment variables (if any)
6. Click "Deploy"

## Environment Variables

If your application uses environment variables:

1. Copy `.env.example` to `.env.local` for local development
2. In Vercel dashboard, go to your project settings
3. Navigate to "Environment Variables"
4. Add your production environment variables

## Configuration

The `vercel.json` file in your project root contains:

- Build and deployment settings
- Security headers
- Function timeout configurations
- Regional deployment settings

## Custom Domain (Optional)

1. In your Vercel project dashboard
2. Go to "Settings" → "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Automatic Deployments

Once connected to your Git repository:
- Every push to your main branch triggers a production deployment
- Pull requests create preview deployments
- You can configure branch-specific deployment rules

## Monitoring

- View deployment logs in the Vercel dashboard
- Monitor performance and analytics
- Set up alerts for deployment failures

## Troubleshooting

### Build Failures
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

### Environment Variables
- Make sure all required environment variables are set in Vercel
- Use `NEXT_PUBLIC_` prefix for client-side variables

### Performance
- Enable Vercel Analytics for performance monitoring
- Use Vercel's built-in optimization features

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment) 