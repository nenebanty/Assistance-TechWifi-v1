/* ===== À MODIFIER / EDIT HERE ===== */
window.APP = {
  BUSINESS_NAME: "Assistance Tech Wifi",
  WHATSAPP_NUMBER: "224624164483",          // indicatif + numéro, sans + ni espaces
  WHATSAPP_DISPLAY: "+224 624 16 44 83",
  CURRENCY: "GNF",
  SUPABASE_URL: "https://cytvuurtbjejrwpoolsx.supabase.co",
  SUPABASE_KEY: "sb_publishable_zIL7vHag_NWFPopsCWRzFw_RQcQiu3T", // clé publique (publishable)

  // Service groups (headings on the homepage), shown in this order.
  GROUPS: [
    {id:"business", icon:"🏢", fr:"Réseau entreprise", en:"Business network"},
    {id:"wifi",     icon:"📶", fr:"Wi‑Fi & internet",  en:"Wi‑Fi & internet"},
    {id:"phone",    icon:"📱", fr:"Téléphone",          en:"Phone"},
    {id:"tech",     icon:"🔧", fr:"Techniciens",        en:"Technicians"}
  ],

  SERVICES: [
    // --- Réseau entreprise / Business network ---
    {id:"biz_mikrotik", group:"business", tag:{fr:"MikroTik",en:"MikroTik"}, fr:["Réseau entreprise MikroTik","Routeur, firewall, VLAN, VPN, bande passante"], en:["MikroTik company network","Router, firewall, VLAN, VPN, bandwidth"]},
    {id:"biz_hotspot", group:"business", tag:{fr:"Hotspot",en:"Hotspot"}, fr:["Hotspot MikroTik pro","Portail, tickets, contrôle du débit, multi‑utilisateurs"], en:["MikroTik hotspot (business)","Portal, vouchers, bandwidth control, many users"]},
    {id:"cisco", group:"business", tag:{fr:"Cisco",en:"Cisco"}, fr:["Configuration Cisco","Routeurs et switches Cisco"], en:["Cisco configuration","Cisco routers and switches"]},
    {id:"network_setup", group:"business", tag:{fr:"Réseau",en:"Network"}, fr:["Installation réseau (LAN)","LAN, VLAN, câblage, Wi‑Fi bureau, points d'accès"], en:["Network setup (LAN)","LAN, VLAN, cabling, office Wi‑Fi, access points"]},

    // --- Wi‑Fi & internet ---
    {id:"wifi_install", group:"wifi", tag:{fr:"Wi‑Fi",en:"Wi‑Fi"}, fr:["Installation Wi‑Fi zone","Routeur, MikroTik, hotspot avec tickets"], en:["Wi‑Fi zone installation","Router, MikroTik, voucher hotspot"]},
    {id:"wifi_fix", group:"wifi", tag:{fr:"Wi‑Fi",en:"Wi‑Fi"}, fr:["Dépannage & maintenance Wi‑Fi","Connexion lente, coupures, configuration"], en:["Wi‑Fi repair & maintenance","Slow connection, drops, configuration"]},
    {id:"vouchers", group:"wifi", tag:{fr:"Wi‑Fi",en:"Wi‑Fi"}, fr:["Système de tickets / vouchers","Mikhmon, profils, impression des tickets"], en:["Ticket / voucher system","Mikhmon, profiles, printing vouchers"]},
    {id:"mikrotik", group:"wifi", tag:{fr:"Wi‑Fi",en:"Wi‑Fi"}, fr:["Configuration MikroTik uniquement","Vous avez le MikroTik, je le configure"], en:["MikroTik configuration only","You have the MikroTik, I configure it"]},
    {id:"ap", group:"wifi", tag:{fr:"Wi‑Fi",en:"Wi‑Fi"}, fr:["Configuration point d'accès uniquement","Réglage de vos points d'accès (AP)"], en:["Access point configuration only","Setting up your access points (AP)"]},
    {id:"starlink_install", group:"wifi", tag:{fr:"Starlink",en:"Starlink"}, fr:["Installation / configuration Starlink","Pose de l'antenne, configuration, mise en service"], en:["Starlink installation / setup","Dish mounting, configuration, going live"]},
    {id:"starlink_fix", group:"wifi", tag:{fr:"Starlink",en:"Starlink"}, fr:["Maintenance Starlink","Connexion lente, coupures, obstructions, réglages"], en:["Starlink maintenance","Slow connection, drops, obstructions, settings"]},

    // --- Téléphone / Phone ---
    {id:"flash", group:"phone", tag:{fr:"Téléphone",en:"Phone"}, fr:["Flashing / logiciel téléphone","Bootloop, bloqué sur logo, mise à jour"], en:["Phone flashing / software","Bootloop, stuck on logo, updates"]},
    {id:"unlock", group:"phone", tag:{fr:"Téléphone",en:"Phone"}, fr:["Déblocage réseau","Pour accepter d'autres cartes SIM (propriétaire uniquement)"], en:["Network unlock","Use other SIM cards (owner only)"]},
    {id:"icloud", group:"phone", tag:{fr:"Téléphone",en:"Phone"}, fr:["iCloud / Apple ID (propriétaire uniquement)","iPhone 4 à 11 Pro Max — boîte ou facture obligatoire"], en:["iCloud / Apple ID (owner only)","iPhone 4 to 11 Pro Max — box or receipt required"]},

    // --- Techniciens / Technicians ---
    {id:"tech_help", group:"tech", tag:{fr:"Techniciens",en:"Technicians"}, fr:["Aide aux techniciens","Installer logiciels de flashing, drivers USB, à distance"], en:["Help for technicians","Install flashing tools and USB drivers, remotely"]}
  ]
};
