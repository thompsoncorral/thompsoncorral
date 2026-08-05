# Thompson Corral Website

A plain HTML website for Thompson Corral — no build tools, no
framework, nothing to install. Free to host on GitHub Pages.

## What's in here

```
index.html      Home page
cattle.html      Brown Swiss page
kunekune.html    Kune Kune breeding herd page
piglets.html     Piglets for sale + buy buttons (inventory + buttons live here)
```

Each page is a single, self-contained file — the styling and (on
`piglets.html`) the piglet data all live inside that one file. That's
deliberate: it means every page works correctly no matter how you
open it (double-click, upload to GitHub, paste into any preview
tool) with nothing else needed alongside it.

## 1. Preview it before publishing

Just double-click `index.html` — it opens in your browser and works
locally, links and all.

## 2. Put it on GitHub Pages (free hosting)

1. Go to github.com, log in (or create a free account).
2. Click the **+** in the top right → **New repository**.
   - Name it something like `thompson-corral`
   - Set it to **Public**
   - Click **Create repository**
3. On the new repo's page, click **uploading an existing file**.
4. Drag in every file and folder from this project (keep the `css`
   and `js` folders — don't flatten them).
5. Scroll down, click **Commit changes**.
6. Go to the repo's **Settings** tab → **Pages** (left sidebar).
7. Under "Build and deployment", set **Source** to **Deploy from a
   branch**, branch **main**, folder **/ (root)**. Click **Save**.
8. Wait a minute, then refresh — GitHub shows you the live URL
   (something like `https://yourusername.github.io/thompson-corral/`).

That URL is your new site. You can point a custom domain (like
thompsoncorral.com) at it later from the same Pages settings screen if
you buy one — GitHub Pages supports that for free too.

## 3. Selling piglets — hooking up real payments

Right now every piglet's "buy" button falls back to **Email to
Reserve**, so the site works exactly like it does today even before
you touch Stripe or PayPal. Turn on real online payment whenever
you're ready, per piglet:

**Stripe (recommended — takes cards, Apple Pay, Google Pay):**
1. Create a free account at stripe.com and finish verification (they
   need your bank info to pay you out).
2. In the dashboard: **Payment links → + New**.
3. Name it after the piglet (e.g. "Willow – KuneKune Piglet"), set
   the price, save.
4. Copy the link it gives you (looks like `https://buy.stripe.com/...`).
5. In `piglets.html`, find that piglet's entry and paste the link
   into `stripeLink: ""`.

**PayPal:**
1. Log into paypal.com/buttons → create a **Buy Now** button for the
   piglet.
2. PayPal will give you a `hosted_button_id` — copy just that ID
   (not the whole code block).
3. Paste it into that piglet's `paypalButtonId: ""` in `piglets.html`.

You can set up Stripe, PayPal, both, or neither for any given piglet
— the site shows whichever buttons are filled in.

Stripe generally has lower fees for card payments (~2.9% + 30¢) and
pays out fastest; PayPal is more familiar to some buyers. Nothing
stops you from offering both.

## 4. Adding, selling, or removing a piglet

Open `piglets.html` in a text editor. There are two lists: `PIGLETS`
(AKKPS-registered) and `UNREGISTERED_PIGLETS` (no papers) — search for
`const PIGLETS = [` or `const UNREGISTERED_PIGLETS = [` to find them.
Each piglet is a block like:

```js
{
  id: "willow",
  name: "Willow",
  sex: "Female",
  regNumber: "AKKPS 99004",
  sire: "Coconut",
  dam: "Honey",
  dob: "2026-05-10",
  price: 850,
  status: "available",   // "available" | "reserved" | "sold"
  image: "https://...",
  bio: "...",
  stripeLink: "",
  paypalButtonId: ""
}
```

- **Sold a piglet?** Change `status` to `"sold"` — the buy buttons
  disappear automatically, and it's still shown for the record.
- **New litter?** Copy an existing block, change the details, and
  make sure `id` is unique.
- **Photos:** paste any image URL. Leave `image: ""` empty and the
  card shows a "Photo Coming Soon" placeholder until you add one.
  For full independence from Wix, download your photos and add them
  to an `images/` folder in this project, then point `image:` at
  e.g. `images/willow.jpg` instead.
- **Unregistered piglets** don't need `regNumber` — just leave that
  field out entirely (or delete the line) and the card won't show a
  Reg # row or the AKKPS seal.

## 5. About the hotlinked photos

To get you moving fast, the photos on this site currently link
directly to your old Wix media library (`static.wixstatic.com`
URLs). That works today, but isn't fully independent of Wix long
term. When you have a spare hour, download your originals and swap
them into a local `images/` folder — just say the word and I can help
you do that swap in bulk.
