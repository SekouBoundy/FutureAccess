export type ProcessStep = { title: string; text: string };
export type University = {
  abbr: string;
  name: string;
  location: string;
  programs: string;
  rank: string;
};
export type CostRow = { icon: string; label: string; value: string; highlight?: boolean };
export type ProgramGroup = { icon?: string; title: string; items: string[] };
export type ProgramLevel = { level: string; groups: ProgramGroup[] };

export type DestinationDetail = {
  slug: string;
  country: string;
  /** Forme avec article, ex. « la Malaisie » */
  countryArticle: string;
  rating: string;
  reviews: string;
  badge?: string;
  spotsLeft?: string;
  heroImage: string;
  intro: string;
  stats: { value: string; label: string }[];
  opportunities: string[];
  opportunitiesImage: string;
  universities: University[];
  summarySteps: ProcessStep[];
  forfait: {
    label: string;
    price: string;
    priceApprox: string;
    features: string[];
  };
  studyCosts: { subtitle: string; rows: CostRow[]; note: string };
  procedureCosts: {
    subtitle: string;
    agency: { title: string; amount: string; details: string[] };
    visa: { title: string; amount: string; text: string };
  };
  applicationDuration: string;
  applicationSteps: ProcessStep[];
  importantInfo: string[];
  programs: ProgramLevel[];
};

const malaisie: DestinationDetail = {
  slug: "malaisie",
  country: "Malaisie",
  countryArticle: "la Malaisie",
  rating: "4.8/5",
  reviews: "243 avis",
  badge: "Meilleure vente",
  spotsLeft: "Plus que 3 places",
  heroImage: "/images/destinations/malaysia.jpg",
  intro:
    "La Malaisie est une destination de plus en plus prisée par les étudiants internationaux grâce à la qualité de son enseignement, à ses universités reconnues, à son coût de vie abordable et à son environnement multiculturel. Les diplômes délivrés sont reconnus à l'international et les programmes sont principalement dispensés en anglais.",
  stats: [
    { value: "20+", label: "Universités partenaires" },
    { value: "1 200€", label: "Frais de dossier" },
    { value: "Vol direct", label: "Disponible depuis Paris" },
    { value: "Bilingue", label: "Anglais & Malais" },
  ],
  opportunities: [
    "Coût de la vie très abordable",
    "Universités classées QS Top 300",
    "Environnement multiculturel",
    "Visa étudiant facile à obtenir",
  ],
  opportunitiesImage: "/images/destinations/malaysia-campus.jpg",
  universities: [
    {
      abbr: "UM",
      name: "Universiti Malaya (UM)",
      location: "Kuala Lumpur",
      programs: "250+ programmes",
      rank: "QS TOP 100",
    },
    {
      abbr: "UTM",
      name: "Universiti Teknologi Malaysia (UTM)",
      location: "Johor Bahru",
      programs: "180+ programmes",
      rank: "QS #188",
    },
    {
      abbr: "UPM",
      name: "Universiti Putra Malaysia (UPM)",
      location: "Serdang",
      programs: "220+ programmes",
      rank: "QS #123",
    },
  ],
  summarySteps: [
    {
      title: "Soumettez votre dossier",
      text: "Préparez vos documents académiques et remplissez notre formulaire sécurisé.",
    },
    {
      title: "Obtenez votre admission",
      text: "Nous négocions votre place parmi nos 20+ universités partenaires en Malaisie.",
    },
    {
      title: "Préparez votre départ",
      text: "Assistance visa, recherche de logement à KL et accueil à l'aéroport inclus.",
    },
  ],
  forfait: {
    label: "Forfait Malaisie",
    price: "800 000 FCFA",
    priceApprox: "(≈ 1 200 €) / dossier",
    features: [
      "Orientation personnalisée",
      "Accompagnement complet vers l'admission",
      "Aide au visa (VDR)",
      "Installation à Kuala Lumpur",
      "Suivi 6 mois",
    ],
  },
  studyCosts: {
    subtitle: "Estimation des dépenses mensuelles et annuelles pour étudier en Malaisie.",
    rows: [
      { icon: "🎓", label: "Frais de scolarité (par an)", value: "4 500 000 FCFA" },
      { icon: "🏠", label: "Hébergement", value: "150 000 FCFA / mois" },
      { icon: "🍽️", label: "Frais de subsistance", value: "250 000 FCFA / mois" },
      { icon: "💳", label: "Budget annuel estimé", value: "8 000 000 FCFA", highlight: true },
    ],
    note: "NB : Les frais de scolarité varient selon l'université et le programme d'études choisis.",
  },
  procedureCosts: {
    subtitle: "Détail des frais liés à la candidature et au visa étudiant.",
    agency: {
      title: "Frais d'agence",
      amount: "500 000 FCFA (≈ 760 €)",
      details: [
        "Premier versement : 300 000 FCFA (≈ 457 €)",
        "Deuxième versement : 200 000 FCFA (≈ 304 €)",
      ],
    },
    visa: {
      title: "Frais de visa",
      amount: "550 000 FCFA (≈ 838 €)",
      text: "Les frais de visa comprennent les frais de traitement de la demande de visa étudiant ainsi que les frais administratifs exigés par les autorités malaisiennes.",
    },
  },
  applicationDuration: "6 à 8 semaines",
  applicationSteps: [
    {
      title: "Dépôt du dossier de candidature",
      text: "Préparez vos documents académiques et remplissez notre formulaire sécurisé.",
    },
    {
      title: "Premier versement des frais d'agence (300 000 FCFA)",
      text: "Validation de votre dossier et lancement de la procédure d'admission.",
    },
    {
      title: "Soumission du dossier à l'université",
      text: "Nous négocions votre place parmi nos 20+ universités partenaires en Malaisie.",
    },
    {
      title: "Réception de la lettre d'admission provisoire",
      text: "Confirmation de votre admission par l'université partenaire.",
    },
    {
      title: "Paiement de l'acompte des frais de scolarité",
      text: "Formalisation de votre inscription à l'université.",
    },
    {
      title: "Réception de la lettre d'admission officielle",
      text: "Document final confirmant votre inscription définitive.",
    },
    {
      title: "Deuxième versement des frais d'agence (200 000 FCFA)",
      text: "Finalisation de votre dossier d'accompagnement.",
    },
    {
      title: "Dépôt de la demande de visa et paiement des frais de visa",
      text: "Préparation des documents requis pour le visa étudiant.",
    },
    {
      title: "Attente de l'approbation du visa (environ 6 à 8 semaines)",
      text: "Suivi administratif jusqu'à la réception du visa.",
    },
    {
      title: "Achat du billet d'avion et préparation du départ",
      text: "Assistance pour l'organisation logistique finale.",
    },
  ],
  importantInfo: [
    "FutureAccess accompagne les étudiants dans leurs démarches d'admission auprès des universités en Malaisie.",
    "Les programmes sont principalement dispensés en anglais.",
    "Un test de niveau d'anglais peut être requis selon l'université. Une formation en anglais de 3 à 7 mois peut être demandée avant le début du programme.",
    "Les frais de scolarité varient selon l'université et le programme choisis.",
    "Les étudiants internationaux peuvent travailler à temps partiel, conformément à la réglementation malaisienne en vigueur.",
    "Les conditions d'admission, les documents requis et les possibilités de transfert de crédits dépendent de l'université et du programme choisis.",
    "FutureAccess accompagne également les étudiants dans les démarches administratives, la demande de visa et la préparation de leur départ.",
  ],
  programs: [
    {
      level: "Licence (3 ans)",
      groups: [
        {
          title: "Informatique & Technologies",
          items: [
            "Technologies de l'information (IT)",
            "Informatique",
            "Génie logiciel",
            "Intelligence artificielle (IA)",
            "Cybersécurité",
            "Développement de jeux vidéo",
            "Médias interactifs et technologies immersives",
          ],
        },
        {
          title: "Commerce & Management",
          items: [
            "Gestion d'entreprise",
            "Gestion du commerce international",
            "Marketing",
            "Marketing digital",
            "Gestion des ressources humaines",
          ],
        },
        {
          icon: "💰",
          title: "Comptabilité, Banque & Finance",
          items: [
            "Comptabilité et finance",
            "Banque et finance",
            "Technologie financière (FinTech)",
            "Sciences actuarielles",
          ],
        },
        {
          icon: "🏛️",
          title: "Architecture",
          items: ["Architecture"],
        },
        {
          title: "Design & Médias",
          items: [
            "Design industriel",
            "Animation",
            "Effets visuels (VFX)",
            "Publicité numérique",
            "Études des médias et de la communication",
          ],
        },
        {
          title: "Sciences sociales",
          items: ["Relations internationales", "Psychologie"],
        },
        {
          icon: "✈️",
          title: "Tourisme & Hôtellerie",
          items: ["Gestion du tourisme", "Hôtellerie et tourisme"],
        },
      ],
    },
    {
      level: "Licence (4 ans)",
      groups: [
        {
          title: "Ingénierie",
          items: [
            "Génie électrique et électronique",
            "Génie mécanique",
            "Génie mécatronique",
            "Génie informatique",
            "Génie pétrolier",
          ],
        },
      ],
    },
    {
      level: "Master (Mastère)",
      groups: [
        {
          title: "Informatique & Technologies",
          items: [
            "Génie logiciel",
            "Intelligence artificielle (IA)",
            "Cybersécurité",
            "Science des données et analyse commerciale",
            "Gestion des technologies de l'information",
            "Gestion des technologies",
            "Transformation numérique",
            "Informatique",
          ],
        },
        {
          title: "Commerce & Management",
          items: ["Master en administration des affaires (MBA)", "Gestion de projets"],
        },
        {
          icon: "💰",
          title: "Comptabilité & Finance",
          items: ["Comptabilité", "Finance", "Sciences actuarielles"],
        },
        {
          title: "Marketing & Communication",
          items: ["Marketing digital", "Communication numérique"],
        },
        {
          title: "Design",
          items: ["Management de l'innovation en design"],
        },
        {
          icon: "🎓",
          title: "Éducation",
          items: ["Conception pédagogique et technologies de l'éducation"],
        },
        {
          title: "Psychologie",
          items: ["Psychologie appliquée (Cyberpsychologie)"],
        },
      ],
    },
  ],
};

export const DESTINATION_DETAILS: Record<string, DestinationDetail> = {
  malaisie,
};
