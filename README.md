# Pixal Pulse Studio

The official app catalog for Pixal Pulse Studio — a Play Store-style home for Nova Linx, Nova Code, AnimeSoul and the rest of the studio's apps.

## Live site

Live at [https://pixalpulsestudio.onrender.com](https://pixalpulsestudio.onrender.com).

`pixalpulsestudio.com` is not connected yet. After the domain is registered, point it at this Render static site to make that the public address.

## Local preview

Any static file server works:

```bash
python3 -m http.server 8080
```

Then open http://localhost:8080

## Swap the AnimeSoul icon

Replace `icons/apps/animesoul.png` (512×512 PNG) and redeploy. See `icons/apps/README.txt`.

## Deploy

Pushes to `main` auto-deploy on Render. Use a normal push only.
