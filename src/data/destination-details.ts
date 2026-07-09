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
    "La Malaisie est une destination de choix pour les étudiants internationaux grâce à la qualité de son enseignement, ses universités reconnues, ses programmes dispensés en anglais, son coût de la vie abordable, ses diplômes reconnus à l'international et son environnement multiculturel.",
  opportunities: [
    "Coût de la vie très abordable",
    "Universités classées QS Top 300",
    "Environnement multiculturel",
    "Visa étudiant facile à obtenir",
  ],
  opportunitiesImage: "/images/destinations/malaysia-campus.jpg",
  whyStudy: {
    title: "Pourquoi étudier en Malaisie ?",
    text: "La Malaisie offre un enseignement de qualité, des universités reconnues à l'international, des programmes majoritairement dispensés en anglais et un coût de vie abordable. C'est une destination idéale pour obtenir un diplôme reconnu tout en évoluant dans un environnement multiculturel.",
  },
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
    label: "Frais d'agence – Malaisie",
    badge: "Tout inclus",
    badgePosition: "top",
    goldBorder: true,
    price: "500 000 FCFA",
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
    layout: "table",
    columns: ["Frais", "Coût (USD)", "Coût (FCFA)"],
    rows: [
      {
        icon: "🎓",
        label: "Frais de scolarité",
        value: "8 000 à 10 000 USD/an",
        value2: "4 500 000 à 6 000 000 FCFA/an",
      },
      {
        icon: "🏠",
        label: "Hébergement",
        value: "200 à 350 USD/mois",
        value2: "100 000 à 200 000 FCFA/mois",
      },
      {
        icon: "🍽️",
        label: "Dépenses de subsistance",
        value: "300 à 450 USD/mois",
        value2: "200 000 à 250 000 FCFA/mois",
      },
      {
        icon: "💳",
        label: "Budget annuel estimé",
        value: "14 000 à 19 000 USD/an",
        value2: "8 000 000 à 11 000 000 FCFA/an",
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
        amount: "500 000 FCFA",
        itemsLabel: "En deux versements",
        items: [
          { icon: "→", text: "1er versement : 300 000 FCFA" },
          { icon: "→", text: "2ème versement : 200 000 FCFA" },
        ],
      },
      {
        icon: "🏛️",
        title: "Frais de visa",
        amount: "550 000 FCFA",
        items: [
          {
            text: "Les frais de visa comprennent les frais de traitement de la demande de visa étudiant, les frais administratifs exigés par les autorités malaisiennes et l'accueil à l'arrivée.",
          },
        ],
      },
    ],
  },
  applicationDuration: "6 à 8 semaines",
  applicationLayout: "collapsible",
  applicationSteps: [
    {
      title:
        "Dépôt du dossier de candidature, premier versement des frais d'agence (300 000 FCFA) et soumission du dossier à l'université.",
    },
    {
      title:
        "Réception de la lettre d'admission provisoire et paiement de l'acompte des frais de scolarité, selon les exigences de l'université.",
    },
    {
      title:
        "Réception de la lettre d'admission officielle, paiement des frais de visa et deuxième versement des frais d'agence (200 000 FCFA).",
    },
    { title: "Attente de l'approbation du visa (environ 6 à 8 semaines)." },
    { title: "Achat du billet d'avion et préparation du départ." },
  ],
  importantInfo: [
    "FutureAccess accompagne les étudiants dans leur admission auprès des meilleures universités en Malaisie.",
    "Les programmes sont principalement dispensés en anglais. Les étudiants passent un test de niveau d'anglais à leur arrivée, et une formation en anglais de quelques mois peut être demandée avant le début du programme.",
    "Les étudiants doivent se concentrer uniquement sur leurs études.",
    "Les conditions d'admission, les documents requis et les possibilités de transfert de crédits dépendent de l'université et du programme choisis.",
    "FutureAccess accompagne également les étudiants dans les démarches administratives, la demande de visa et la préparation de leur départ.",
  ],
  importantIcon: "check",
  programs: [
    {
      level: "Licence (3 ans)",
      groups: [
        {
          icon: "💻",
          title: "Informatique & Technologies",
          items: [
            "Technologies de l'information (IT)",
            "Informatique",
            "Génie logiciel",
            "Intelligence artificielle (IA)",
            "Cybersécurité",
          ],
        },
        {
          icon: "🎨",
          title: "Création & Médias",
          items: [
            "Développement de jeux vidéo",
            "Effets visuels (VFX)",
            "Médias et communication",
          ],
        },
        {
          icon: "💼",
          title: "Commerce & Management",
          items: [
            "Gestion d'entreprise",
            "Commerce international",
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
          ],
        },
        { icon: "🏛️", title: "Architecture", items: ["Architecture"] },
        {
          title: "Sciences sociales",
          items: ["Relations internationales", "Psychologie"],
        },
        {
          icon: "✈️",
          title: "Hôtellerie & Tourisme",
          items: ["Hôtellerie et tourisme"],
        },
      ],
    },
    {
      level: "Licence (4 ans)",
      groups: [
        {
          icon: "🏗️",
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
      level: "Master (2 ans)",
      groups: [
        {
          icon: "💻",
          title: "Informatique & Technologies",
          items: [
            "Génie logiciel",
            "Intelligence artificielle (IA)",
            "Cybersécurité",
            "Science des données et analyse commerciale",
            "Gestion des technologies de l'information",
            "Transformation numérique",
            "Informatique",
          ],
        },
        {
          icon: "💼",
          title: "Commerce & Management",
          items: ["Master en administration des affaires (MBA)", "Gestion de projets"],
        },
        {
          icon: "💰",
          title: "Comptabilité & Finance",
          items: ["Comptabilité", "Finance"],
        },
        {
          icon: "📰",
          title: "Marketing & Communication",
          items: ["Marketing digital", "Communication numérique"],
        },
        {
          icon: "🎨",
          title: "Design & Innovation",
          items: ["Management de l'innovation en design"],
        },
        {
          title: "Sciences humaines & Éducation",
          items: [
            "Conception pédagogique et technologies de l'apprentissage",
            "Psychologie appliquée (Cyberpsychologie)",
          ],
        },
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
    "La Turquie offre un enseignement de qualité, des universités reconnues, un coût de la vie abordable, des programmes dispensés en anglais et en turc, une position stratégique entre l'Europe et l'Asie, ainsi qu'un riche patrimoine culturel.",
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
    label: "Frais d'agence – Turquie",
    badge: "Populaire",
    badgePosition: "corner",
    price: "500 000 FCFA",
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
    layout: "table",
    columns: ["Frais", "USD", "FCFA"],
    rows: [
      {
        icon: "🎓",
        label: "Frais de scolarité",
        value: "3 400 à 4 500 USD/an",
        value2: "2 000 000 à 2 500 000 FCFA/an",
      },
      {
        icon: "🏠",
        label: "Hébergement",
        value: "200 à 300 USD/mois",
        value2: "100 000 à 175 000 FCFA/mois",
      },
      {
        icon: "🛒",
        label: "Dépenses de subsistance",
        value: "250 à 300 USD/mois",
        value2: "150 000 à 175 000 FCFA/mois",
      },
      {
        icon: "💳",
        label: "Budget annuel estimé",
        value: "8 800 à 11 500 USD/an",
        value2: "5 000 000 à 6 500 000 FCFA/an",
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
        amount: "500 000 FCFA",
        itemsLabel: "En deux versements",
        items: [
          { icon: "→", text: "1er versement : 300 000 FCFA" },
          { icon: "→", text: "2ᵉ versement : 200 000 FCFA" },
        ],
      },
      {
        icon: "🏛️",
        title: "Autres frais",
        items: [
          { icon: "→", text: "Visa et assurance : 175 000 FCFA" },
          { icon: "→", text: "Frais de réception : 90 000 FCFA" },
          { icon: "→", text: "Assurance et permis de séjour : 350 USD" },
        ],
      },
    ],
  },

  applicationDuration: "4 à 6 semaines",
  applicationLayout: "grid",
  applicationSteps: [
    {
      title:
        "Dépôt du dossier de candidature, paiement du premier versement des frais d'agence (300 000 FCFA) et soumission du dossier à l'université.",
    },
    {
      title:
        "Obtention de la lettre d'admission provisoire et paiement de l'acompte demandé par l'université (1 000 USD, si applicable).",
    },
    {
      title:
        "Obtention de la lettre d'admission officielle ainsi que des documents nécessaires à la demande de visa étudiant.",
    },
    {
      title:
        "Dépôt de la demande de visa et attente de son approbation (environ 2 à 4 semaines).",
    },
    {
      title:
        "Paiement du solde des frais d'agence (200 000 FCFA) ainsi que du reste des frais de scolarité.",
    },
    { title: "Préparation du départ, achat du billet d'avion et départ pour la Turquie." },
  ],
  importantInfo: [
    "FutureAccess accompagne les étudiants dans leur admission au sein d'universités privées, principalement à Istanbul et Antalya.",
    "Les programmes sont principalement dispensés en anglais. Les étudiants passent un test de niveau d'anglais à leur arrivée et peuvent suivre un ou plusieurs semestres de préparation linguistique si nécessaire.",
    "Les étudiants sont encouragés à se consacrer pleinement à leurs études afin de favoriser leur réussite académique.",
    "Les possibilités de transfert de crédits dépendent de l'université et du programme choisi.",
    "La Turquie offre un enseignement supérieur de qualité, un environnement multiculturel et un coût de la vie généralement plus abordable que dans de nombreux autres pays d'études.",
  ],
  importantIcon: "info",
  programs: [
    {
      level: "Licence (Baccalauréat)",
      groups: [
        {
          icon: "🏗️",
          title: "Ingénierie",
          items: [
            "Génie informatique",
            "Génie électrique et électronique",
            "Génie industriel",
            "Génie mécanique",
            "Génie civil",
          ],
        },
        {
          icon: "🏛️",
          title: "Architecture & Design",
          items: [
            "Architecture",
            "Architecture d'intérieur et design environnemental",
          ],
        },
        {
          icon: "💼",
          title: "Commerce, Économie & Gestion",
          items: [
            "Administration des affaires",
            "Économie",
            "Économie et finance",
            "Gestion de la logistique",
            "Gestion du tourisme",
          ],
        },
        {
          icon: "⚖️",
          title: "Sciences sociales & Droit",
          items: [
            "Science politique et relations internationales",
            "Psychologie",
            "Droit",
          ],
        },
        {
          icon: "🔬",
          title: "Santé & Médecine",
          items: [
            "Médecine",
            "Dentisterie (14 000 $/an)",
            "Pharmacie (13 500 $/an)",
            "Soins infirmiers",
            "Physiothérapie et réadaptation",
            "Sage-femme (Turc)",
            "Nutrition et diététique (Turc)",
          ],
        },
        {
          icon: "✈️",
          title: "Aviation",
          items: [
            "Gestion de l'aviation",
            "Pilotage (Turc · 8 300 $/an)",
          ],
        },
      ],
    },
    {
      level: "Master",
      groups: [
        {
          icon: "💼",
          title: "Commerce & Économie",
          items: [
            "MBA – Administration des affaires",
            "Économie et finance",
          ],
        },
        {
          icon: "⚖️",
          title: "Sciences politiques & Relations internationales",
          items: [
            "Politique mondiale et relations internationales",
            "Science politique et administration publique",
          ],
        },
        {
          icon: "💻",
          title: "Informatique & Cybersécurité",
          items: [
            "Cybersécurité",
            "Génie informatique",
          ],
        },
        {
          icon: "🏗️",
          title: "Ingénierie",
          items: [
            "Génie électrique et informatique",
            "Génie électrique et électronique",
            "Génie civil",
            "Génie aéronautique",
          ],
        },
        {
          icon: "🏛️",
          title: "Architecture",
          items: ["Architecture"],
        },
      ],
    },
  ],
};

const chine: DestinationDetail = {
  slug: "chine",
  country: "Chine",
  countryArticle: "la Chine",
  accent: "blue",
  heroImage: "/images/destinations/china.jpg",
  intro:
    "La Chine : une destination académique d'avenir, avec une éducation abordable, des formations accessibles et des opportunités de bourses pour les étudiants internationaux.",
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
    label: "Frais d'agence – Chine",
    badge: "Tout inclus",
    badgePosition: "top",
    goldBorder: true,
    price: "700 000 FCFA",
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
    columns: ["Frais", "Coût (FCFA)", "Coût (RMB)"],
    rows: [
      {
        icon: "🎓",
        label: "Frais de scolarité",
        value: "600 000 à 900 000 FCFA/an",
        value2: "7 000 à 10 000 RMB/an",
      },
      {
        icon: "🏠",
        label: "Hébergement",
        value: "300 000 à 500 000 FCFA/an",
        value2: "4 000 à 6 000 RMB/an",
      },
      {
        icon: "🍽️",
        label: "Dépenses de subsistance",
        value: "≈ 150 000 FCFA/mois",
        value2: "1 500 RMB/mois",
      },
      {
        icon: "💳",
        label: "Budget annuel estimatif",
        value: "≈ 2 750 000 à 3 200 000 FCFA/an",
        value2: "29 000 à 34 000 RMB/an",
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
        itemsLabel: "En deux versements",
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
  applicationDuration: "8 à 12 semaines (de la candidature à l'obtention du visa)",
  applicationLayout: "grid",
  applicationSteps: [
    {
      title:
        "Dépôt des documents requis et paiement du premier versement des frais d'agence (400 000 FCFA) ainsi que des frais d'admission, le cas échéant.",
    },
    { title: "Soumission de votre dossier de candidature auprès de l'université choisie." },
    {
      title:
        "Réception de la lettre d'admission et des documents officiels nécessaires à la demande de visa étudiant.",
    },
    {
      title:
        "Dépôt de la demande de visa auprès de l'ambassade de Chine et paiement des frais de visa.",
    },
    {
      title:
        "Obtention du visa étudiant et paiement du second versement des frais d'agence (300 000 FCFA).",
    },
    { title: "Préparation du voyage, achat du billet d'avion et départ pour la Chine." },
  ],
  importantInfo: [
    "FutureAccess vous accompagne tout au long du processus d'admission dans des universités reconnues en Chine.",
    "Les formations sont dispensées en anglais ou en chinois, selon le programme choisi. Une formation linguistique peut être requise avant le début des études.",
    "Les étudiants inscrits en première ou en deuxième année de licence ne sont généralement pas autorisés à transférer leurs crédits vers une université chinoise.",
    "Pour le programme de Génie pharmaceutique, une moyenne minimale de 12/20 au baccalauréat est exigée.",
    "Les étudiants sont tenus de respecter le règlement de leur université et de maintenir des résultats académiques satisfaisants tout au long de leurs études.",
    "Selon les exigences de l'université ou des autorités consulaires, le garant financier peut être amené à fournir un relevé bancaire justifiant d'un solde minimum de 2 000 000 FCFA.",
  ],
  importantIcon: "check",
  programs: [
    {
      level: "Licence (Bachelor)",
      groups: [
        {
          icon: "💻",
          title: "Informatique & Technologies",
          items: [
            "Computer Science and Technology (en anglais)",
            "Software Engineering (en anglais)",
            "Artificial Intelligence (en anglais)",
            "Data Science and Big Data Technology",
            "Cyberspace",
            "Intelligent Science and Technology",
            "Digital Media Technology",
          ],
        },
        {
          icon: "💼",
          title: "Commerce & Gestion",
          items: [
            "Business Administration",
            "Accounting",
            "Finance",
            "Financial Management",
            "Economics",
            "International Business",
            "Human Resource Management",
            "Logistics Management",
            "Public Administration",
          ],
        },
        {
          icon: "⚖️",
          title: "Droit & Sciences humaines",
          items: ["Law", "Philosophy"],
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
            "Physics",
            "Chemistry",
            "Biological Science",
            "Biotechnology",
            "Ecology",
          ],
        },
        {
          icon: "🏛️",
          title: "Architecture & Design",
          items: ["Architecture", "Visual Communication Design"],
        },
        {
          icon: "📰",
          title: "Communication & Médias",
          items: ["Journalism", "Radio and Television", "Communication"],
        },
      ],
    },
    {
      level: "Master",
      groups: [
        {
          icon: "💻",
          title: "Informatique & IA",
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
          title: "Commerce & Gestion",
          items: [
            "MBA",
            "Accounting",
            "Finance",
            "International Business",
            "Enterprise Management",
          ],
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
          title: "Sciences & Santé",
          items: ["Biotechnology", "Pharmacy", "Biology"],
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
