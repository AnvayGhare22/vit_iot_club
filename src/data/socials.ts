export interface SocialLink {
  name: string;
  href: string;
  label: string;
  handle: string;
  color: string;
}

export const SOCIAL_LINKS = {
  linkedin: {
    name: "LinkedIn",
    href: "https://in.linkedin.com/company/iot-club-viit-pune",
    label: "IoT Club on LinkedIn",
    handle: "iot-club-viit-pune",
    color: "#0A66C2",
  },
  x: {
    name: "X (Twitter)",
    href: "https://x.com/vit_college?lang=en",
    label: "VIT College on X",
    handle: "@vit_college",
    color: "#FFFFFF",
  },
  instagram: {
    name: "Instagram",
    href: "https://www.instagram.com/iot_club_vit/",
    label: "IoT Club on Instagram",
    handle: "@iot_club_vit",
    color: "#E1306C",
  },
  whatsapp: {
    name: "WhatsApp Community",
    href: "https://chat.whatsapp.com/EJDVaeuGSKGBLHhyZgpO3z",
    label: "Join WhatsApp Community",
    handle: "IoT Club Community",
    color: "#25D366",
  },
} as const;

export const SOCIAL_LINKS_ARRAY = [
  SOCIAL_LINKS.linkedin,
  SOCIAL_LINKS.instagram,
  SOCIAL_LINKS.x,
  SOCIAL_LINKS.whatsapp,
];
