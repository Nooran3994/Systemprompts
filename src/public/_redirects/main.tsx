# Serve static assets first, then fall back to index.html for SPA routing
/favicon.ico /favicon.ico 200
/favicon.svg /favicon.svg 200
/apple-touch-icon.svg /apple-touch-icon.svg 200
/og-image.svg /og-image.svg 200
/logo.png.svg /logo.png.svg 200

# SPA fallback - serve index.html for all other routes
/* /index.html 200
