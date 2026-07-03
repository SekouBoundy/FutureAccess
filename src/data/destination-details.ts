export type ProcessStep = { title: string; text?: string };

export type University = {
  abbr: string;
  name: string;
  location: string;
  programs?: string;
  rank: string;
  rankTone?: "gold" | "slate"; // défaut : gold
  abbrTone?: "slate" | "blue"; // défaut : slate
};

export type CostRow = {
  icon?: string;
  label: string;
  value: string;
  value2?: string;
  highlight?: boolean;
};

export type ProcedureItem = { icon?: string; text: string };
export type ProcedureCard = {
  icon: string;
  title: string;
  amount?: string;
  itemsLabel?: string;
  items: ProcedureItem[];
};

export type ProgramGroup = { icon?: string; title: string; items: string[] };
export type ProgramLevel = { level: string; groups: ProgramGroup[] };

export type DestinationDetail = {
  slug: string;
  country: string;
  /** Forme avec article, ex. « la Malaisie » */
  countryArticle: string;
  /** Couleur d'accent : puces « opportunités » + numéros « accompagnement ». Défaut : blue */
  accent?: "blue" | "gold";
  rating?: string;
  reviews?: string;
  badge?: string;
  spotsLeft?: string;
  heroImage: string;
  intro: string;
  stats: { value: string; label: string; icon?: string }[];
  opportunities: string[];
  opportunitiesImage: string;
  /** Bloc d'intro optionnel « Pourquoi étudier en … ? » */
  whyStudy?: { title: string; text: string };
  /** Section optionnelle « Documents à préparer » */
  documents?: string[];
  universities?: University[];
  summarySteps?: ProcessStep[];
  forfait: {
    label: string;
    badge: string;
    badgePosition?: "top" | "corner"; // défaut : top
    goldBorder?: boolean;
    price: string;
    priceUnit?: string; // ex. « / dossier » (inline)
    priceApprox?: string; // ex. « (≈ 1 200 €) / dossier » (ligne)
    features: string[];
  };
  studyCosts: {
    subtitle: string;
    layout?: "row" | "stack" | "table";
    columns?: string[];
    rows: CostRow[];
    note?: string;
  };
  procedureCosts: { subtitle: string; cards: ProcedureCard[]; notes?: string[] };
  applicationDuration: string;
  applicationLayout?: "collapsible" | "grid"; // défaut : grid
  applicationSteps: ProcessStep[];
  importantInfo: string[];
  importantIcon?: "check" | "info"; // défaut : check
  programs?: ProgramLevel[];
};

const malaisie: DestinationDetail = {
  slug: "malaisie",
  country: "Malaisie",
  countryArticle: "la Malaisie",
  accent: "blue",
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
    badge: "Tout inclus",
    badgePosition: "top",
    goldBorder: true,
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
    layout: "row",
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
    cards: [
      {
        icon: "📄",
        title: "Frais d'agence",
        amount: "500 000 FCFA (≈ 760 €)",
        items: [
          { text: "Premier versement : 300 000 FCFA (≈ 457 €)" },
          { text: "Deuxième versement : 200 000 FCFA (≈ 304 €)" },
        ],
      },
      {
        icon: "🏛️",
        title: "Frais de visa",
        amount: "550 000 FCFA (≈ 838 €)",
        items: [
          {
            text: "Les frais de visa comprennent les frais de traitement de la demande de visa étudiant ainsi que les frais administratifs exigés par les autorités malaisiennes.",
          },
        ],
      },
    ],
  },
  applicationDuration: "6 à 8 semaines",
  applicationLayout: "collapsible",
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
  importantIcon: "check",
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
        { icon: "🏛️", title: "Architecture", items: ["Architecture"] },
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
        { title: "Sciences sociales", items: ["Relations internationales", "Psychologie"] },
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
        { title: "Design", items: ["Management de l'innovation en design"] },
        {
          icon: "🎓",
          title: "Éducation",
          items: ["Conception pédagogique et technologies de l'éducation"],
        },
        { title: "Psychologie", items: ["Psychologie appliquée (Cyberpsychologie)"] },
      ],
    },
  ],
};

const turquie: DestinationDetail = {
  slug: "turquie",
  country: "Turquie",
  countryArticle: "la Turquie",
  accent: "gold",
  heroImage: "/images/destinations/turkey.jpg",
  intro:
    "Au carrefour de l'Europe et de l'Asie, la Turquie offre une éducation de qualité à des prix accessibles.",
  stats: [
    { icon: "🏛️", value: "15+", label: "Universités partenaires" },
    { icon: "💰", value: "950€", label: "Frais de dossier" },
    { icon: "✈️", value: "Vol direct", label: "Depuis Paris & Maghreb" },
    { icon: "🗣️", value: "Langues", label: "Turc & Anglais" },
  ],
  opportunities: [
    "Bourses gouvernementales disponibles",
    "Architecture et histoire exceptionnelles",
    "Vie étudiante animée à Istanbul",
    "Coût de la vie modéré",
  ],
  opportunitiesImage: "/images/destinations/turkey-campus.jpg",
  whyStudy: {
    title: "Pourquoi étudier en Turquie ?",
    text: "La Turquie offre un enseignement de qualité, des frais abordables et des diplômes reconnus dans un environnement multiculturel.",
  },
  universities: [
    {
      abbr: "IU",
      name: "Istanbul University",
      location: "Istanbul",
      rank: "Classic",
      rankTone: "slate",
      abbrTone: "blue",
    },
    {
      abbr: "AU",
      name: "Ankara University",
      location: "Ankara",
      rank: "Prestige",
      rankTone: "slate",
      abbrTone: "blue",
    },
    {
      abbr: "METU",
      name: "Middle East Technical (METU)",
      location: "Ankara",
      rank: "Top Tech",
      rankTone: "slate",
      abbrTone: "blue",
    },
  ],
  summarySteps: [
    {
      title: "Soumettez votre dossier",
      text: "Téléversez vos relevés de notes et votre passeport pour étude immédiate.",
    },
    {
      title: "Obtenez votre admission",
      text: "Réception de votre lettre d'acceptation sous 10 jours ouvrés.",
    },
    {
      title: "Préparez votre départ",
      text: "Finalisation du visa turc et réservation de votre résidence étudiante.",
    },
  ],
  forfait: {
    label: "Forfait Turquie",
    badge: "Populaire",
    badgePosition: "corner",
    price: "950€",
    priceUnit: "/ dossier",
    features: [
      "Conseil stratégique",
      "Admission garantie 100%",
      "Accompagnement Visa",
      "Assurance santé turque",
      "Recherche logement Istanbul",
    ],
  },
  studyCosts: {
    subtitle: "Estimation des dépenses mensuelles et annuelles pour étudier en Turquie.",
    layout: "stack",
    rows: [
      {
        icon: "🎓",
        label: "Frais de scolarité (par an)",
        value: "2 000 000 à 2 500 000 FCFA (≈ 3 050 € – 3 810 €)",
      },
      {
        icon: "🏠",
        label: "Hébergement",
        value: "100 000 à 200 000 FCFA / mois (≈ 152 € – 305 €)",
      },
      {
        icon: "🛒",
        label: "Frais de subsistance",
        value: "150 000 à 200 000 FCFA / mois (≈ 229 € – 305 €)",
      },
      {
        icon: "💳",
        label: "Budget annuel estimé",
        value: "5 000 000 à 7 500 000 FCFA (≈ 7 620 € – 11 430 €)",
        highlight: true,
      },
    ],
  },
  procedureCosts: {
    subtitle: "Détail des frais liés à la candidature et au visa étudiant.",
    cards: [
      {
        icon: "📄",
        title: "Frais d'agence FutureAccess",
        amount: "500 000 FCFA (≈ 762 €)",
        itemsLabel: "Versements",
        items: [
          { icon: "→", text: "1er : 300 000 FCFA" },
          { icon: "→", text: "2ème : 200 000 FCFA" },
        ],
      },
      {
        icon: "🛡️",
        title: "Visa et assurance + Frais de réception",
        items: [
          { icon: "→", text: "Visa & assurance : 160 000 FCFA (≈ 244 €)" },
          { icon: "✈️", text: "Accueil à l'arrivée : 90 000 FCFA (≈ 137 €)" },
        ],
      },
    ],
  },
  applicationDuration: "4 à 6 semaines",
  applicationLayout: "grid",
  applicationSteps: [
    {
      title: "Premier versement des frais d'agence (300 000 FCFA)",
      text: "Initialisation du dossier.",
    },
    {
      title: "Constitution et soumission du dossier de candidature.",
      text: "Vérification des documents.",
    },
    {
      title: "Obtention de la lettre d'admission et paiement de l'acompte 1 000 $ si exigé.",
      text: "Validation universitaire.",
    },
    {
      title: "Obtention de la lettre d'admission officielle et des documents nécessaires à la demande de visa.",
      text: "Préparation du dossier administratif.",
    },
    { title: "Dépôt de la demande de visa étudiant.", text: "Soumission auprès des autorités." },
    { title: "Attente de l'approbation du visa (2 à 4 semaines).", text: "Phase administrative." },
    {
      title: "Paiement du solde des frais d'agence (200 000 FCFA) et des frais de scolarité restants.",
      text: "Finalisation financière.",
    },
    {
      title: "Achat du billet d'avion et préparation du départ pour la Turquie.",
      text: "Derniers préparatifs.",
    },
  ],
  importantInfo: [
    "FutureAccess accompagne les étudiants dans leur admission au sein d'universités privées, principalement à Istanbul et Antalya.",
    "Les programmes sont principalement dispensés en anglais. Test de niveau à l'arrivée, préparation linguistique possible.",
    "Les possibilités de travail pendant les études sont soumises à la réglementation turque en vigueur.",
    "Les possibilités de transfert de crédits dépendent de l'université et du programme choisi.",
    "La Turquie offre un enseignement supérieur de qualité, un environnement multiculturel et un coût de la vie généralement plus abordable.",
  ],
  importantIcon: "info",
};

const chine: DestinationDetail = {
  slug: "chine",
  country: "Chine",
  countryArticle: "la Chine",
  accent: "blue",
  heroImage: "/images/destinations/china.jpg",
  intro:
    "Les universités chinoises figurent parmi les meilleures d'Asie et accueillent chaque année des milliers d'étudiants internationaux. Programmes en anglais ou en chinois, large choix de filières et coût de la vie accessible : la Chine est une destination de choix pour vos études.",
  stats: [
    { icon: "🗣️", value: "Anglais / Chinois", label: "Langues d'enseignement" },
    { icon: "💰", value: "700 000 FCFA", label: "Frais d'agence" },
    { icon: "🗓️", value: "8–12 sem.", label: "Délai de procédure" },
    { icon: "🎓", value: "Bachelor & Master", label: "Niveaux disponibles" },
  ],
  opportunities: [
    "Meilleures universités chinoises",
    "Programmes en anglais ou en chinois",
    "Coût de la vie accessible",
    "Large choix de filières",
  ],
  opportunitiesImage: "/images/destinations/china-campus.jpg",
  documents: [
    "Passeport valide (au moins 6 mois de validité)",
    "Photo d'identité récente",
    "Certificat médical international",
    "Acte de naissance",
    "Diplôme du Baccalauréat (ou diplôme requis selon le niveau d'études)",
    "Relevés de notes",
    "Casier judiciaire (moins de 6 mois)",
    "Relevé bancaire du garant (si demandé)",
  ],
  forfait: {
    label: "Forfait Chine",
    badge: "Tout inclus",
    badgePosition: "top",
    goldBorder: true,
    price: "700 000 FCFA",
    priceApprox: "(≈ 1 067 €) / dossier",
    features: [
      "Vérification des documents",
      "Accompagnement dans le choix de l'université et du programme",
      "Constitution et vérification du dossier de candidature",
      "Soumission de la candidature auprès de l'université",
      "Suivi du dossier jusqu'à l'obtention de l'admission",
      "Assistance pour la demande de visa",
      "Conseils et préparation au départ pour la Chine",
    ],
  },
  studyCosts: {
    subtitle: "Estimation des frais annuels pour étudier en Chine (hors frais d'agence).",
    layout: "table",
    columns: ["Frais", "Coût (RMB)", "Coût (FCFA)"],
    rows: [
      { label: "Frais de scolarité", value: "6 000 à 10 000 RMB/an", value2: "500 000 à 850 000 FCFA" },
      { label: "Hébergement", value: "4 000 à 8 000 RMB/an", value2: "340 000 à 680 000 FCFA" },
      { label: "Dépenses de subsistance", value: "1 500 RMB/mois", value2: "≈ 150 000 FCFA/mois" },
      {
        label: "Budget annuel estimatif",
        value: "≈ 31 200 à 38 800 RMB",
        value2: "≈ 2 650 000 à 3 300 000 FCFA",
        highlight: true,
      },
    ],
  },
  procedureCosts: {
    subtitle: "Détail des frais liés à la candidature, à l'admission et au visa étudiant.",
    cards: [
      {
        icon: "📄",
        title: "Frais d'agence FutureAccess",
        amount: "700 000 FCFA",
        itemsLabel: "Versements",
        items: [
          { icon: "→", text: "1er versement : 400 000 FCFA" },
          { icon: "→", text: "2ᵉ versement : 300 000 FCFA" },
        ],
      },
      {
        icon: "🏛️",
        title: "Admission & visa",
        items: [
          { icon: "→", text: "Frais d'admission (université) : à partir de 250 000 FCFA" },
          { icon: "→", text: "Frais de visa étudiant : 40 000 FCFA" },
        ],
      },
    ],
    notes: [
      "Les frais d'agence sont payables en deux tranches : 400 000 FCFA à l'ouverture du dossier et 300 000 FCFA après l'obtention de l'admission.",
      "Les frais d'admission sont versés à l'université et peuvent varier selon l'établissement.",
      "Les frais de visa sont payés au moment de la demande de visa.",
      "Les frais de scolarité, d'hébergement, d'assurance, de billet d'avion et de subsistance ne sont pas inclus dans les frais d'agence.",
    ],
  },
  applicationDuration: "8 à 12 semaines (admission et obtention du visa)",
  applicationLayout: "grid",
  applicationSteps: [
    {
      title:
        "Dépôt des documents et paiement du premier versement des frais d'agence (400 000 FCFA) ainsi que des frais d'admission.",
    },
    { title: "Soumission de la candidature auprès de l'université." },
    { title: "Obtention de la lettre d'admission et des documents nécessaires à la demande de visa." },
    { title: "Dépôt de la demande de visa auprès de l'ambassade et paiement des frais de visa." },
    {
      title:
        "Obtention du visa et paiement du second versement des frais d'agence (300 000 FCFA).",
    },
    { title: "Achat du billet d'avion et préparation du départ pour la Chine." },
  ],
  importantInfo: [
    "FutureAccess accompagne les étudiants dans leurs démarches d'admission auprès des meilleures universités chinoises.",
    "Les programmes sont proposés en anglais ou en chinois. Une formation linguistique peut être exigée avant le début des études selon le programme choisi.",
    "Les étudiants de première ou de deuxième année de licence ne peuvent généralement pas transférer leurs crédits.",
    "Pour le programme de Génie pharmaceutique, une moyenne minimale de 12/20 au baccalauréat est requise.",
    "Les étudiants doivent respecter le règlement de l'université et maintenir de bons résultats académiques.",
    "Le garant financier peut être amené à présenter un relevé bancaire justifiant d'un solde minimum de 2 000 000 FCFA, selon les exigences de l'université ou des autorités consulaires.",
  ],
  importantIcon: "check",
  programs: [
    {
      level: "Licence (Bachelor)",
      groups: [
        {
          icon: "💻",
          title: "Informatique et Technologies",
          items: [
            "Computer Science and Technology (en anglais)",
            "Software Engineering (en anglais)",
            "Artificial Intelligence (en anglais)",
            "Data Science and Big Data Technology",
            "Cyberspace Security",
            "Internet of Things Engineering",
            "Intelligent Science and Technology",
            "Digital Media Technology",
          ],
        },
        {
          icon: "💼",
          title: "Commerce et Gestion",
          items: [
            "Business Administration",
            "Accounting",
            "Finance",
            "Financial Management",
            "Economics",
            "International Business",
            "Human Resource Management",
            "Logistics Management",
            "Tourism Management",
            "Public Administration",
          ],
        },
        {
          icon: "⚖️",
          title: "Droit et Sciences sociales",
          items: ["Law", "Sociology", "Social Work", "Ethnology", "Philosophy"],
        },
        {
          icon: "🏗️",
          title: "Ingénierie",
          items: [
            "Civil Engineering",
            "Chemical Engineering",
            "Materials Science and Engineering",
            "Communication Engineering",
            "Electronic and Information Engineering",
            "Environmental Science and Engineering",
            "New Energy Science and Engineering",
          ],
        },
        {
          icon: "🔬",
          title: "Sciences",
          items: [
            "Mathematics",
            "Applied Mathematics",
            "Statistics",
            "Physics",
            "Chemistry",
            "Biological Science",
            "Biotechnology",
            "Ecology",
          ],
        },
        {
          icon: "🏛️",
          title: "Architecture et Design",
          items: [
            "Architecture",
            "Urban and Rural Planning",
            "Environmental Design",
            "Visual Communication Design",
          ],
        },
        { icon: "🎨", title: "Arts", items: ["Fine Arts", "Painting", "Musicology"] },
        {
          icon: "📰",
          title: "Communication",
          items: ["Journalism", "Radio and Television", "Communication"],
        },
      ],
    },
    {
      level: "Master (spécialités les plus demandées)",
      groups: [
        {
          icon: "💻",
          title: "Informatique",
          items: [
            "Artificial Intelligence",
            "Computer Technology",
            "Software Engineering",
            "Cybersecurity",
            "Data Science",
            "AI and Machine Learning",
          ],
        },
        {
          icon: "💼",
          title: "Business",
          items: ["MBA", "Accounting", "Finance", "International Business", "Enterprise Management"],
        },
        {
          icon: "⚖️",
          title: "Droit",
          items: ["International Law", "Civil Law", "Criminal Law"],
        },
        {
          icon: "🏗️",
          title: "Ingénierie",
          items: [
            "Civil Engineering",
            "Biomedical Engineering",
            "Chemical Engineering",
            "Materials Engineering",
          ],
        },
        {
          icon: "🔬",
          title: "Sciences",
          items: ["Biotechnology", "Pharmacy", "Pharmacology", "Biology", "Mathematics", "Statistics"],
        },
      ],
    },
  ],
};

export const DESTINATION_DETAILS: Record<string, DestinationDetail> = {
  malaisie,
  turquie,
  chine,
};
