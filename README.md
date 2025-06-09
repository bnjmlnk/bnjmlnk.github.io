# Benjamin Mlynek - Music Producer Portfolio

A minimalistic and modern portfolio website for music producer Benjamin Mlynek, specializing in rock, hard rock, metal, and pop music production.

## Features

- **Modern Design**: Clean, minimalistic interface with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Spotify Integration**: Direct links to showcase tracks on Spotify
- **Contact Integration**: Mailto links with pre-filled templates for booking inquiries
- **Performance Optimized**: Fast loading with optimized CSS and JavaScript
- **Dark Theme**: Professional dark theme suitable for the music industry

## Services Showcased

- Recording
- Mixing  
- Music Production
- Audio Engineering

## Deployment to GitHub Pages

### Quick Setup

1. **Fork or clone this repository**
2. **Enable GitHub Pages**:
   - Go to your repository settings
   - Scroll down to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Select "main" branch and "/ (root)" folder
   - Click "Save"

3. **Custom Domain Setup** (for benjaminmlynek.com):
   - In your repository, create a file named `CNAME` in the root directory
   - Add your domain: `benjaminmlynek.com`
   - Configure your domain's DNS settings to point to GitHub Pages:
     - For apex domain (benjaminmlynek.com): Create A records pointing to:
       - `185.199.108.153`
       - `185.199.109.153`
       - `185.199.110.153`
       - `185.199.111.153`
     - For www subdomain: Create CNAME record pointing to `yourusername.github.io`

### Customization

#### Adding Your Tracks
Edit the `index.html` file and replace the placeholder Spotify embeds:

```html
<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/YOUR_TRACK_ID" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
```

To get Spotify embed codes:
1. Go to your track on Spotify
2. Click "Share" → "Embed track"
3. Copy the iframe code and replace the placeholder embeds
4. Or manually replace `YOUR_TRACK_ID` with your actual track ID from the Spotify URL

#### Updating Contact Information
The contact button uses a mailto link. Update the email address in:
- `index.html` (line with `mailto:hello@benjaminmlynek.com`)
- `script.js` (in the `openEmailClient` function)

#### Modifying Content
- **About Section**: Edit the text in the `#about` section
- **Services**: Modify the service cards in the `#services` section
- **Track Information**: Update track titles, artists, genres, and roles

### File Structure

```
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── .gitignore          # Git ignore rules
├── README.md           # This file
└── CNAME               # Custom domain configuration (create when needed)
```

### Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance Features

- Preloaded Google Fonts
- Optimized CSS with minimal external dependencies
- Efficient JavaScript with intersection observers
- Responsive images and layouts
- Smooth scrolling and animations

### Development

For local development, simply open `index.html` in your browser or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## License

© 2024 Benjamin Mlynek. All rights reserved.

---

**Note**: Make sure to replace all placeholder content (track links, contact information, etc.) with your actual information before deploying. 