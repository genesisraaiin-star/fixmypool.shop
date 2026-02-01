# Merch Store

A modern e-commerce website featuring your custom logo on various products.

## 🚀 Quick Start - Deploying to Vercel

### Step 1: Upload to GitHub
1. Go to [github.com](https://github.com) and create an account (if you don't have one)
2. Click the "+" button in the top right → "New repository"
3. Name it whatever you want (like "merch-site")
4. Set it to "Public"
5. Click "Create repository"

6. On the next page, scroll down to "…or create a new repository on the command line"
7. Open Terminal (Mac) or Command Prompt (Windows)
8. Navigate to where you unzipped this folder:
   ```bash
   cd path/to/merch-site
   ```
9. Run these commands one by one (copy from GitHub):
   ```bash
   git init
   git add .
   git commit -m "first commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_URL_HERE
   git push -u origin main
   ```

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" and use your GitHub account
3. Click "Add New..." → "Project"
4. Find your "merch-site" repo and click "Import"
5. Vercel will detect it's a Vite project automatically
6. Click "Deploy"
7. Wait 1-2 minutes... Done! ✅

Your site is now live at: `your-project-name.vercel.app`

## 📝 Optional: Install Locally to Test First

If you want to see the site on your computer before deploying:

1. Make sure you have Node.js installed (download from nodejs.org)
2. Open Terminal/Command Prompt in this folder
3. Run:
   ```bash
   npm install
   npm run dev
   ```
4. Open your browser to `http://localhost:5173`

## 🎨 What's Included

- 8 product mockups with your logo
- Shopping cart functionality
- Mobile responsive design
- Product filtering
- Newsletter signup form

## 💡 Need Help?

If you get stuck:
- Make sure Node.js is installed: `node --version`
- Make sure git is installed: `git --version`
- Check that you're in the right folder: `ls` (should see package.json)

## 📱 Your Site Features

- Fully responsive (works on phones, tablets, desktops)
- Fast loading
- Modern design
- Ready to customize

---

Built with React + Vite + Tailwind CSS
