export interface Tag {
  id: string;
  name: string;
  color: string;
}

export interface Opinion {
  id: string;
  title: string;
  description: string;
  source: string;
  politicalOrientation: string;
  schoolOfThought: string;
  genealogy: string;
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  tags: Tag[];
  views: number;
  opinions: Opinion[];
}

export const tags: Tag[] = [
  { id: '1', name: 'Politique', color: '#FF6B6B' },
  { id: '2', name: 'Économie', color: '#4ECDC4' },
  { id: '3', name: 'Société', color: '#45B7D1' },
  { id: '4', name: 'Environnement', color: '#96CEB4' },
  { id: '5', name: 'International', color: '#FFEEAD' },
  { id: '6', name: 'Santé', color: '#D4A5A5' },
];

export const topics: Topic[] = [
  {
    id: '1',
    title: 'Investissement immobilier',
    description: 'Analyse des différentes stratégies d\'investissement immobilier en France',
    imageUrl: 'https://picsum.photos/400/300',
    date: '2024-03-20',
    tags: [tags[1], tags[2]],
    views: 1250,
    opinions: [
      {
        id: '1',
        title: 'L\'immobilier n\'est plus un investissement rentable',
        description: 'Avec la hausse des taux et la baisse des rendements locatifs, l\'immobilier devient moins attractif',
        source: 'Étude économique 2024',
        politicalOrientation: 'Centriste',
        schoolOfThought: 'Économie néoclassique',
        genealogy: 'Basé sur les analyses de Keynes et Friedman'
      },
      {
        id: '2',
        title: 'L\'immobilier permet de devenir libre financièrement',
        description: 'L\'effet de levier et la rentabilité locative permettent d\'atteindre l\'indépendance financière',
        source: 'Association des investisseurs immobiliers',
        politicalOrientation: 'Libéral',
        schoolOfThought: 'École autrichienne',
        genealogy: 'Inspiré des travaux de Robert Kiyosaki'
      },
      {
        id: '3',
        title: 'Il vaut mieux investir en LMNP',
        description: 'Le statut LMNP offre des avantages fiscaux significatifs pour les investisseurs',
        source: 'Cabinet d\'expertise comptable',
        politicalOrientation: 'Centriste',
        schoolOfThought: 'Fiscalité optimisée',
        genealogy: 'Développé par les experts-comptables spécialisés'
      },
      {
        id: '4',
        title: 'Il vaut mieux faire une SCI',
        description: 'La SCI permet une meilleure gestion patrimoniale et une transmission facilitée',
        source: 'Notaires de France',
        politicalOrientation: 'Conservateur',
        schoolOfThought: 'Droit patrimonial',
        genealogy: 'Issu de la tradition juridique française'
      }
    ]
  },
  {
    id: '2',
    title: 'Transition écologique',
    description: 'Les débats autour de la transition écologique et ses implications',
    imageUrl: 'https://picsum.photos/400/301',
    date: '2024-03-19',
    tags: [tags[3], tags[1]],
    views: 980,
    opinions: [
      {
        id: '1',
        title: 'La décroissance est la seule solution',
        description: 'Pour sauver la planète, nous devons réduire notre consommation',
        source: 'Mouvement décroissant',
        politicalOrientation: 'Écologiste radical',
        schoolOfThought: 'Décroissance',
        genealogy: 'Inspiré des travaux de Serge Latouche'
      },
      {
        id: '2',
        title: 'L\'innovation technologique nous sauvera',
        description: 'Les solutions technologiques permettront de résoudre les problèmes environnementaux',
        source: 'Institut de recherche technologique',
        politicalOrientation: 'Progressiste',
        schoolOfThought: 'Techno-optimisme',
        genealogy: 'Issu du mouvement transhumaniste'
      }
    ]
  },
  {
    id: '3',
    title: 'Réforme de l\'éducation',
    description: 'Les différentes approches pour moderniser le système éducatif français',
    imageUrl: 'https://picsum.photos/400/302',
    date: '2024-03-18',
    tags: [tags[2], tags[0]],
    views: 750,
    opinions: [
      {
        id: '1',
        title: 'Retour aux fondamentaux',
        description: 'Il faut recentrer l\'éducation sur les bases : lire, écrire, compter',
        source: 'Syndicat des enseignants',
        politicalOrientation: 'Conservateur',
        schoolOfThought: 'Pédagogie traditionnelle',
        genealogy: 'Inspiré des méthodes du XIXe siècle'
      },
      {
        id: '2',
        title: 'École numérique',
        description: 'L\'avenir passe par l\'intégration du numérique dans l\'éducation',
        source: 'Ministère de l\'Éducation',
        politicalOrientation: 'Progressiste',
        schoolOfThought: 'Pédagogie innovante',
        genealogy: 'Basé sur les recherches en sciences cognitives'
      }
    ]
  },
  {
    id: '4',
    title: 'Crise migratoire européenne',
    description: 'Analyse des politiques migratoires et leurs impacts sur l\'Europe',
    imageUrl: 'https://picsum.photos/400/303',
    date: '2024-03-17',
    tags: [tags[4], tags[2]],
    views: 1100,
    opinions: [
      {
        id: '1',
        title: 'Fermeture des frontières',
        description: 'L\'Europe doit contrôler strictement ses frontières',
        source: 'Parti national',
        politicalOrientation: 'Nationaliste',
        schoolOfThought: 'Souverainisme',
        genealogy: 'Issu du mouvement identitaire'
      },
      {
        id: '2',
        title: 'Accueil et intégration',
        description: 'L\'Europe doit accueillir et intégrer les migrants',
        source: 'ONG humanitaire',
        politicalOrientation: 'Progressiste',
        schoolOfThought: 'Internationalisme',
        genealogy: 'Inspiré des valeurs humanistes'
      }
    ]
  },
  {
    id: '5',
    title: 'Réforme du système de santé',
    description: 'Les enjeux de la modernisation du système de santé français',
    imageUrl: 'https://picsum.photos/400/304',
    date: '2024-03-16',
    tags: [tags[5], tags[1]],
    views: 890,
    opinions: [
      {
        id: '1',
        title: 'Privatisation partielle',
        description: 'Introduction d\'une dose de privé pour améliorer l\'efficacité',
        source: 'Think tank libéral',
        politicalOrientation: 'Libéral',
        schoolOfThought: 'Économie de marché',
        genealogy: 'Inspiré du modèle suisse'
      },
      {
        id: '2',
        title: 'Renforcement du public',
        description: 'Investissement massif dans l\'hôpital public',
        source: 'Syndicat des médecins',
        politicalOrientation: 'Social-démocrate',
        schoolOfThought: 'Service public',
        genealogy: 'Issu du modèle bismarckien'
      }
    ]
  },
  {
    id: '6',
    title: 'Intelligence artificielle et emploi',
    description: 'Impact de l\'IA sur le marché du travail et les perspectives d\'avenir',
    imageUrl: 'https://picsum.photos/400/305',
    date: '2024-03-15',
    tags: [tags[1], tags[2]],
    views: 1500,
    opinions: [
      {
        id: '1',
        title: 'Destruction massive d\'emplois',
        description: 'L\'IA va remplacer de nombreux emplois',
        source: 'Institut d\'études économiques',
        politicalOrientation: 'Centriste',
        schoolOfThought: 'Économie numérique',
        genealogy: 'Basé sur les études de l\'OCDE'
      },
      {
        id: '2',
        title: 'Création de nouveaux métiers',
        description: 'L\'IA va créer plus d\'emplois qu\'elle n\'en détruira',
        source: 'Forum économique mondial',
        politicalOrientation: 'Progressiste',
        schoolOfThought: 'Innovation',
        genealogy: 'Inspiré des révolutions industrielles précédentes'
      }
    ]
  }
]; 