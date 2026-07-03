"# FutureAccess" 
Monotonie de composition — presque toutes les sections suivent le même patron : kicker doré centré → h2 → grille de cartes blanches identiques, en alternant fond papier/crème. Avantages, processus, témoignages : trois fois la même carte. C'est propre mais ça devient du papier peint ; rien n'accroche l'œil après le héros.
Emojis résiduels — 📞 dans le header, 🎓 et 💬 dans le menu mobile, ✓ dans la checklist, drapeaux emoji sur les destinations. La page d'accueil a déjà des icônes SVG style Lucide ; le reste devrait suivre. Les emojis rendent différemment selon l'OS et cassent le côté premium.
Hiérarchie typo déséquilibrée — le h1 est énorme (jusqu'à 7xl) mais les h2 plafonnent à 3xl. Le saut est brutal ; les sections manquent de présence.
Zéro mouvement — aucune animation d'apparition au scroll, pas de compteurs (« +500 étudiants »), pas de micro-interactions au-delà d'un hover translate. C'est ce qui sépare le plus un site « correct » d'un site « wow » en 2026.
Crédibilité — témoignages avec noms génériques et 5/5 partout, pas de bandeau de chiffres clés, pas de logos d'universités partenaires, pas de FAQ. Pour une agence qui gère des visas, la confiance est LE produit.
Images manquantes — les avatars de témoignages (/images/testimonials/) n'existent pas dans public/, le composant Photo affiche des placeholders.
Et ui-ux-pro-max dans tout ça ?
Mon avis reste le même après avoir vu le code : tu n'en as pas besoin pour ce projet. Le skill sert à générer une direction quand il n'y en a pas — ici elle existe déjà (navy/or/Fraunces) et elle est bonne. L'installer risquerait surtout de pousser des recommandations génériques par-dessus. Ce qu'il faut, c'est de l'exécution : rythme, mouvement, preuve sociale. Si tu veux quand même le tester, garde-le pour un futur projet qui part de zéro.

Ce que je propose comme plan d'upgrade
Phase 1 — polish : remplacer tous les emojis par des SVG, uniformiser les icônes, corriger la hiérarchie typo, varier les fonds de section.
Phase 2 — rythme : casser la grille répétitive (une section asymétrique image/texte, un bandeau de stats animé, un processus en timeline plutôt qu'en cartes).
Phase 3 — confiance : bloc logos universités, FAQ, refonte des témoignages (carrousel, notes variées, photos réelles à fournir par Idrissa).
Phase 4 — mouvement : reveals au scroll, compteurs animés, transitions de page légères.
