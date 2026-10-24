/* ===== À MODIFIER / EDIT HERE ===== */
window.APP = {
  BUSINESS_NAME: "Assistance Tech Wifi",
  WHATSAPP_NUMBER: "224624164483",          // indicatif + numéro, sans + ni espaces
  WHATSAPP_DISPLAY: "+224 624 16 44 83",
  CURRENCY: "GNF",
  SUPABASE_URL: "https://cytvuurtbjejrwpoolsx.supabase.co",
  SUPABASE_KEY: "sb_publishable_zIL7vHag_NWFPopsCWRzFw_RQcQiu3T", // clé publique (publishable)

  SERVICES: [
    {id:"wifi_install", tag:{fr:"Wi‑Fi",en:"Wi‑Fi"}, fr:["Installation Wi‑Fi zone","Routeur, MikroTik, hotspot avec tickets"], en:["Wi‑Fi zone installation","Router, MikroTik, voucher hotspot"]},
    {id:"wifi_fix", tag:{fr:"Wi‑Fi",en:"Wi‑Fi"}, fr:["Dépannage & maintenance Wi‑Fi","Connexion lente, coupures, configuration"], en:["Wi‑Fi repair & maintenance","Slow connection, drops, configuration"]},
    {id:"vouchers", tag:{fr:"Wi‑Fi",en:"Wi‑Fi"}, fr:["Système de tickets / vouchers","Mikhmon, profils, impression des tickets"], en:["Ticket / voucher system","Mikhmon, profiles, printing vouchers"]},
    {id:"mikrotik", tag:{fr:"Wi‑Fi",en:"Wi‑Fi"}, fr:["Configuration MikroTik uniquement","Vous avez le MikroTik, je le configure"], en:["MikroTik configuration only","You have the MikroTik, I configure it"]},
    {id:"ap", tag:{fr:"Wi‑Fi",en:"Wi‑Fi"}, fr:["Configuration point d'accès uniquement","Réglage de vos points d'accès (AP)"], en:["Access point configuration only","Setting up your access points (AP)"]},
    {id:"tech_help", tag:{fr:"Techniciens",en:"Technicians"}, fr:["Aide aux techniciens","Installer logiciels de flashing, drivers USB, à distance"], en:["Help for technicians","Install flashing tools and USB drivers, remotely"]},
    {id:"flash", tag:{fr:"Téléphone",en:"Phone"}, fr:["Flashing / logiciel téléphone","Bootloop, bloqué sur logo, mise à jour"], en:["Phone flashing / software","Bootloop, stuck on logo, updates"]},
    {id:"unlock", tag:{fr:"Téléphone",en:"Phone"}, fr:["Déblocage réseau","Pour accepter d'autres cartes SIM (propriétaire uniquement)"], en:["Network unlock","Use other SIM cards (owner only)"]}
  ]
};
