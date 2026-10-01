// AutoAgent website settings — edit these when your accounts are ready.
window.AA_CONFIG = {
  supabaseUrl: "https://chvcusedjxkpgldzgqjh.supabase.co",
  supabaseKey: "sb_publishable_cN93eVIaMuFrTFSOKg5Rtw_EIOPKlRh", // public key, safe in the browser
  paddleEnv: "sandbox",            // "sandbox" for testing, "production" when live
  paddleClientToken: "",           // Paddle > Developer tools > Authentication > Client-side token
  paddlePriceIdFounder: "",        // Paddle price ID for $19.99/month (first 1000 Pro users)
  paddlePriceIdStandard: "",       // Paddle price ID for $25/month (after 1000 founder spots are taken)
  paddlePriceIdAutogpt: "",        // Paddle price ID for the AutoGPT add-on, $5/month (Pro users only)
  priceAutogpt: "5",
  priceFounder: "19.99",
  priceStandard: "25",
  downloadUrl: "AutoAgent-Setup.exe", // installer hosted next to the site (temporary)
  supportEmail: "",                 // public contact email (leave empty to hide the Contact link)
};
