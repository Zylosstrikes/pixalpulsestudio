# Pixal Pulse Studio

The official app catalog for Pixal Pulse Studio — a Play Store-style home for Nova Linx, Nova Code, AnimeSoul and the rest of the studio's apps.

## Live site

The site is deployed as a static site on Render. After you buy and point `pixalpulsestudio.com` at it, that domain can become the public address.

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
