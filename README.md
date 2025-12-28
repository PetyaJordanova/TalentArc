# TalentArc - Career Guidance Marketplace

A React-based marketplace connecting career seekers with expert coaches for navigating careers in the AI era.

## 🚀 Quick Deploy to Netlify

### Step 1: Push This Project to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial TalentArc setup"

# Create a new repository on GitHub (github.com/new)
# Then connect it:
git remote add origin https://github.com/YOUR_USERNAME/talentarc.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Netlify

1. Go to **https://app.netlify.com**
2. Sign up/login
3. Click **"Add new site"** → **"Import an existing project"**
4. Choose **"Deploy with GitHub"**
5. Authorize Netlify to access GitHub
6. Select your `talentarc` repository
7. Build settings are auto-detected:
   - Build command: `npm run build`
   - Publish directory: `dist`
8. Click **"Deploy site"**
9. ✅ **LIVE IN 2-3 MINUTES!**

### Custom Domain (Optional)
- In Netlify: Domain settings → Add custom domain
- Point your domain DNS to Netlify

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Visit `http://localhost:5173`

---

## 🔧 Customization

### Update Coach Application Form
In `src/App.jsx`, find and replace:
```javascript
https://forms.gle/your-application-link
```

Create your Google Form at: https://forms.google.com

### Edit Coach Profiles
Search for "Sarah Mitchell" in `src/App.jsx` and update with real coaches

### Change Colors
In `src/App.jsx`, update CSS variables in the `<style>` block

---

## 📁 Project Structure

```
talentarc/
├── src/
│   ├── App.jsx          # Main component (your entire website)
│   ├── main.jsx         # React entry point
│   └── index.css        # Base styles
├── public/              # Static files
├── netlify.toml         # Netlify deployment config
├── package.json         # Dependencies
└── README.md            # This file
```

---

## 📝 Next Steps After Deploy

1. ✅ Get site live on Netlify
2. Create Google Form for coach applications
3. Set up Stripe for coach subscriptions ($50/$100/$150/mo)
4. Start recruiting 3-5 founding coaches
5. Launch!

---

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool (super fast!)
- **Netlify** - Hosting & auto-deployment

---

## 💡 Features

- ✅ Fully responsive design
- ✅ Smooth scroll navigation
- ✅ Interactive tab switching
- ✅ Animated on scroll
- ✅ Mobile-optimized
- ✅ SEO-friendly
- ✅ Production-ready

---

## 🆘 Troubleshooting

**Build fails on Netlify?**
- Check that `netlify.toml` exists
- Verify Node version (should auto-detect)

**Site not updating?**
- Clear Netlify cache: Deploys → Trigger deploy → Clear cache

**Local dev not working?**
```bash
rm -rf node_modules
npm install
npm run dev
```

---

Built with React ⚛️ + Vite ⚡ | Deployed on Netlify 🚀
