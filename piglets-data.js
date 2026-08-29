/* ============================================================
   PIGLET INVENTORY
   ------------------------------------------------------------
   This is the ONLY file you need to edit to add, remove, sell,
   or reprice a piglet. No HTML editing required.

   For each piglet, fill in the fields below. Leave a payment
   field EMPTY ("") if you haven't set it up yet — the card will
   automatically fall back to an "Email to Reserve" button.

   HOW TO GET A STRIPE PAYMENT LINK (no coding required):
     1. Log into dashboard.stripe.com
     2. Payment links -> + New
     3. Set the product name (e.g. "Willow - KuneKune Piglet") and price
     4. Save, copy the link (looks like https://buy.stripe.com/xxxxx)
     5. Paste it into stripeLink below

   HOW TO GET A PAYPAL "BUY NOW" BUTTON:
     1. Log into paypal.com -> PayPal Buttons (paypal.com/buttons)
     2. Create a "Buy Now" button for the piglet
     3. PayPal gives you a "hosted_button_id" value
     4. Paste ONLY that id into paypalButtonId below (not the whole snippet)

   status options: "available", "reserved", "sold"
   (reserved/sold piglets are shown but the buy buttons are hidden)

   This same file also powers each piglet's own "More Info" page
   (piglet-detail.html?id=...), so every piglet's "id" below must
   be unique — it's what goes in that link.
   ============================================================ */

const PIGLETS = [
  /* No AKKPS-registered piglets currently listed — the page will automatically
     show "No AKKPS-registered piglets currently listed..." until you add one.

     To list a registered piglet, add an object here (copy the example below,
     uncomment it, and fill in the real details) — it'll appear on piglets.html
     and get its own "More Info" page automatically, no other editing needed.

  {
    id: "example-id",              // unique — used in the piglet-detail.html link
    name: "Example Name",
    sex: "Female",                 // "Male" or "Female"
    fixedStatus: "Intact",         // "Intact" or "Castrated"
    wattles: "Double Wattled",
    regNumber: "AKKPS 12345",
    sire: "Coconut",
    dam: "Honey",
    dob: "2026-06-01",             // YYYY-MM-DD
    price: 850,
    status: "available",           // "available", "reserved", or "sold"
    images: ["https://..."],
    bio: "Registered KuneKune piglet out of Thompson Corral's herd.",
    stripeLink: "",
    paypalButtonId: ""
  }
  */
];

/* ============================================================
   UNREGISTERED PIGLET INVENTORY
   ------------------------------------------------------------
   Same idea as above, but for piglets without AKKPS papers.
   Most are placeholders — replace name, sex, fixedStatus, wattles, dam,
   price, photos, and bio with the real details, and delete any entries you don't
   need. Each piglet can have up to 4 photos: fill in the "images"
   array with image paths/URLs in the order you want them shown
   (the first one is the main photo). Leave "images" as an empty
   array ([]) until you have real photos.
   ============================================================ */

const UNREGISTERED_PIGLETS = [
  { id: "tigress", name: "Tigress", sex: "Female", fixedStatus: "Intact", wattles: "Double Wattled", dam: "Bluey", sire: "Coconut", dob: "2026-03-31", price: 225, status: "available",
    images: ["images/piglets/tigress-1.jpg", "images/piglets/tigress-2.jpg", "images/piglets/tigress-3.jpg", "images/piglets/tigress-4.jpg"],
    bio: "Tigress is one of our friendliest piglets — sweet-natured, curious, and always eager to say hello. She loves a good belly rub and genuinely enjoys being around people, making her a great fit for a family looking for an affectionate companion.", stripeLink: "", paypalButtonId: "" },
  { id: "shifu", name: "Shifu", sex: "Male", fixedStatus: "Castrated", wattles: "Double Wattled", dam: "Bluey", sire: "Coconut", dob: "2026-03-31", price: 225, status: "available",
    images: ["images/piglets/shifu-1.jpg", "images/piglets/shifu-2.jpg", "images/piglets/shifu-3.jpg", "images/piglets/shifu-4.jpg"],
    bio: "Shifu is one of the friendliest piglets in our herd — upbeat, curious, and always excited to meet new people. He's got an outgoing, easygoing personality that makes him a joy to be around.", stripeLink: "", paypalButtonId: "" },
  { id: "po", name: "Po", sex: "Male", fixedStatus: "Castrated", wattles: "Double Wattled", dam: "Pom Pom", sire: "Coconut", dob: "2026-04-24", price: 225, status: "available",
    images: ["images/piglets/Po%20(1).jpg", "images/piglets/Po%20(2).jpg", "images/piglets/Po%20(3).jpg"],
    bio: "Po is one of our newest piglets and already has a big personality — sweet, curious, and always ready for attention. He’d make a great addition to the right home.", stripeLink: "", paypalButtonId: "" },
  { id: "unreg-bluey-3", name: "Piglet #3", sex: "Female", fixedStatus: "Intact", wattles: "Double Wattled", dam: "Bluey", sire: "Coconut", dob: "", price: 450, status: "available", images: [], bio: "Unregistered KuneKune piglet — replace with real description.", stripeLink: "", paypalButtonId: "" },
  { id: "unreg-bluey-4", name: "Piglet #4", sex: "Male", fixedStatus: "Castrated",   wattles: "Double Wattled", dam: "Bluey", sire: "Coconut", dob: "", price: 450, status: "available", images: [], bio: "Unregistered KuneKune piglet — replace with real description.", stripeLink: "", paypalButtonId: "" },
  { id: "unreg-07", name: "Piglet #7",  sex: "Female", fixedStatus: "Intact", wattles: "Double Wattled", dam: "Mia",   sire: "Coconut", dob: "", price: 450, status: "available", images: [], bio: "Unregistered KuneKune piglet — replace with real description.", stripeLink: "", paypalButtonId: "" },
  { id: "unreg-08", name: "Piglet #8",  sex: "Male", fixedStatus: "Castrated",   wattles: "Double Wattled", dam: "Mia",   sire: "Coconut", dob: "", price: 450, status: "available", images: [], bio: "Unregistered KuneKune piglet — replace with real description.", stripeLink: "", paypalButtonId: "" },
  { id: "unreg-09", name: "Piglet #9",  sex: "Female", fixedStatus: "Intact", wattles: "Double Wattled", dam: "Mia",   sire: "Coconut", dob: "", price: 450, status: "available", images: [], bio: "Unregistered KuneKune piglet — replace with real description.", stripeLink: "", paypalButtonId: "" },
  { id: "unreg-10", name: "Piglet #10", sex: "Male", fixedStatus: "Castrated",   wattles: "Double Wattled", dam: "Mia",   sire: "Coconut", dob: "", price: 450, status: "available", images: [], bio: "Unregistered KuneKune piglet — replace with real description.", stripeLink: "", paypalButtonId: "" },
  { id: "unreg-11", name: "Piglet #11", sex: "Female", fixedStatus: "Intact", wattles: "Double Wattled", dam: "Mia",   sire: "Coconut", dob: "", price: 450, status: "available", images: [], bio: "Unregistered KuneKune piglet — replace with real description.", stripeLink: "", paypalButtonId: "" },
  { id: "unreg-12", name: "Piglet #12", sex: "Male", fixedStatus: "Castrated",   wattles: "Double Wattled", dam: "Mia",   sire: "Coconut", dob: "", price: 450, status: "available", images: [], bio: "Unregistered KuneKune piglet — replace with real description.", stripeLink: "", paypalButtonId: "" },
  { id: "unreg-13", name: "Piglet #13", sex: "Female", fixedStatus: "Intact", wattles: "Double Wattled", dam: "Bingo",  sire: "Coconut", dob: "", price: 450, status: "available", images: [], bio: "Unregistered KuneKune piglet — replace with real description.", stripeLink: "", paypalButtonId: "" },
  { id: "unreg-14", name: "Piglet #14", sex: "Male", fixedStatus: "Castrated",   wattles: "Double Wattled", dam: "Bingo",  sire: "Coconut", dob: "", price: 450, status: "available", images: [], bio: "Unregistered KuneKune piglet — replace with real description.", stripeLink: "", paypalButtonId: "" },
  { id: "unreg-15", name: "Piglet #15", sex: "Female", fixedStatus: "Intact", wattles: "Double Wattled", dam: "Bingo",  sire: "Coconut", dob: "", price: 450, status: "available", images: [], bio: "Unregistered KuneKune piglet — replace with real description.", stripeLink: "", paypalButtonId: "" },
  { id: "unreg-16", name: "Piglet #16", sex: "Male", fixedStatus: "Castrated",   wattles: "Double Wattled", dam: "Bingo",  sire: "Coconut", dob: "", price: 450, status: "available", images: [], bio: "Unregistered KuneKune piglet — replace with real description.", stripeLink: "", paypalButtonId: "" },
  { id: "unreg-17", name: "Piglet #17", sex: "Female", fixedStatus: "Intact", wattles: "Double Wattled", dam: "Bingo",  sire: "Coconut", dob: "", price: 450, status: "available", images: [], bio: "Unregistered KuneKune piglet — replace with real description.", stripeLink: "", paypalButtonId: "" },
  { id: "unreg-18", name: "Piglet #18", sex: "Male", fixedStatus: "Castrated",   wattles: "Double Wattled", dam: "Bingo",  sire: "Coconut", dob: "", price: 450, status: "available", images: [], bio: "Unregistered KuneKune piglet — replace with real description.", stripeLink: "", paypalButtonId: "" }
];

const RESERVE_EMAIL = "kunekune@thompsoncorral.com";

/* Piglet Reservation Google Form -- one form handles every piglet.
Each "Reserve" button links to this same form with the piglet's name
pre-filled into the hidden "Piglet" field via a URL parameter, so you
always know which piglet a reservation request is for without any
extra setup per piglet. If you ever need to rebuild the form, update
these two values (new form URL + new entry ID for the "Piglet"
question, found via the form's "Get pre-filled link" option). */
const RESERVATION_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdldYpYk5pXmUCfmtDb2WeQ7DCKWKXOIbkle_ym_Ev3LHxRzQ/viewform";
const RESERVATION_FORM_PIGLET_ENTRY_ID = "2037063654";

/* Photos of the farm's boar/sows, used on each piglet's "More Info" page
   under Parentage. Add a name here (matching the "sire"/"dam" fields above
   exactly) to show that parent's photo; unmatched names just show as text. */
const PARENT_PHOTOS = {
  "Coconut": "https://static.wixstatic.com/media/d72fc0_d86e2d82713d4c0a8899aaf82e4b84fc~mv2.jpg/v1/fill/w_443,h_431,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/DSC_6263.jpg",
  "Bluey": "https://static.wixstatic.com/media/d72fc0_fe4748d8e24a4bafa123f573460a12aa~mv2.jpg/v1/fill/w_368,h_515,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/d72fc0_fe4748d8e24a4bafa123f573460a12aa~mv2.jpg",
  "Mia": "images/kunekune/mia.jpg",
  "Bingo": "images/kunekune/Bingo.jpg"
};

/* Registry details for parents that have a full AKKPS record on file.
   Shown on each piglet's "More Info" page under Parentage, for whichever
   parent (sire and/or dam) has an entry here — parents without an entry
   (e.g. unregistered dams like Bluey/Mia/Bingo) just show name + photo. */
const PARENT_DETAILS = {
  "Coconut": {
    regName: "Broken H Farm Whakanui 1",
    wattles: "Double Wattled",
    dob: "2024-02-28",
    color: "Cream",
    bloodlines: "Whakanui / Haunene",
    regNumber: "AKKPS 57040"
  },
  "Honey": {
    regName: "Big Springs Farm Wilsons Gina 1",
    wattles: "Double Wattled",
    dob: "2025-04-20",
    color: "Ginger / White",
    bloodlines: "Ru / Tonganui",
    regNumber: "AKKPS 57952"
  }
};

/* Coefficient of Inbreeding (COI%) for a litter, based on its sire/dam pairing.
   Honey and Peaches are full sisters, so a Coconut x Honey litter and a
   Coconut x Peaches litter carry the same COI%. Add more "Sire|Dam" pairings
   here as needed — piglets whose pairing isn't listed just omit the row. */
const COI_BY_PAIRING = {
  "Coconut|Honey": "3.2816",
  "Coconut|Peaches": "3.2816"
};

function getCoi(pig) {
  if (!pig.sire || !pig.dam) return null;
  return COI_BY_PAIRING[`${pig.sire}|${pig.dam}`] || null;
}

function findPiglet(id) {
  if (!id) return null;
  return PIGLETS.find((p) => p.id === id) || UNREGISTERED_PIGLETS.find((p) => p.id === id) || null;
}

function formatDob(iso) {
  const d = new Date(iso + "T00:00:00");
  if (isNaN(d)) return iso;
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

function buyActionsHtml(pig) {
  if (pig.status !== "available") {
    return "";
  }
  const actions = [];

  if (pig.stripeLink) {
    actions.push(
      `<a class="btn btn-barn btn-block" href="${pig.stripeLink}" target="_blank" rel="noopener">Buy Now — Card</a>`
    );
  }

  if (pig.paypalButtonId) {
    actions.push(`
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" rel="noopener">
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="${pig.paypalButtonId}" />
        <button type="submit" class="btn btn-outline-dark btn-block" style="border:2px solid var(--pasture);color:var(--pasture);background:transparent;">Buy Now — PayPal</button>
      </form>
    `);
  }

  if (!pig.stripeLink && !pig.paypalButtonId) {
    const pigletLabel = pig.regNumber ? `${pig.name} (${pig.regNumber})` : `${pig.name} (${pig.id})`;
    const reserveLink = `${RESERVATION_FORM_URL}?usp=pp_url&entry.${RESERVATION_FORM_PIGLET_ENTRY_ID}=${encodeURIComponent(pigletLabel)}`;
    actions.push(
      `<a class="btn btn-barn btn-block" href="${reserveLink}" target="_blank" rel="noopener">Reserve This Piglet</a>`
    );
  }

  return `<div class="buy-actions">${actions.join("")}</div>`;
}

function statusTagHtml(pig) {
  const label = pig.status === "available" ? "Available" : pig.status === "reserved" ? "Reserved" : "Sold";
  return `<span class="status-tag status-${pig.status}">${label}</span>`;
}
