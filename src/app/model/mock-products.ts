import { Product } from './product';

export const PRODUCTS: Product[] = [
  // 🔥 Anti-inflammatoires
  {
    id: 1,
    name: 'Aspirin',
    description:
      'Utilisé pour traiter les douleurs, la fièvre et les inflammations.',
    price: 10,
    image: 'assets/img/products/aspirine-100-30-comprimes.webp',
    categoryId: 1,
    quantity: 10,
    pharmacyId: 1,
  },
  {
    id: 2,
    name: 'Paracetamol',
    description: 'Médicament contre la douleur et la fièvre.',
    price: 20,
    image: 'assets/img/products/paracetamol.webp',
    categoryId: 1,
    quantity: 20,
    pharmacyId: 2,
  },
  {
    id: 3,
    name: 'Ibuprofène',
    description: 'Anti-inflammatoire et analgésique.',
    price: 30,
    image: 'assets/img/products/ibuprofen-teva-gel-50-g.webp',
    categoryId: 1,
    quantity: 30,
    pharmacyId: 1,
  },
  {
    id: 4,
    name: 'Diclofénac',
    description: 'Soulage les douleurs musculaires et articulaires.',
    price: 25,
    image: 'assets/img/products/diclofenac.webp',
    categoryId: 1,
    quantity: 15,
    pharmacyId: 3,
  },

  // 💊 Antibiotiques
  {
    id: 5,
    name: 'Amoxicilline',
    description:
      'Antibiotique utilisé contre diverses infections bactériennes.',
    price: 15,
    image: 'assets/img/products/amoxicillin.webp',
    categoryId: 2,
    quantity: 50,
    pharmacyId: 1,
  },
  {
    id: 6,
    name: 'Ciprofloxacine',
    description: 'Antibiotique puissant contre les infections urinaires.',
    price: 22,
    image: 'assets/img/products/ciprofloxacine.webp',
    categoryId: 2,
    quantity: 40,
    pharmacyId: 2,
  },
  {
    id: 7,
    name: 'Azithromycine',
    description: 'Utilisé contre les infections ORL et pulmonaires.',
    price: 18,
    image: 'assets/img/products/azithromycine.webp',
    categoryId: 2,
    quantity: 30,
    pharmacyId: 3,
  },

  // ⚡ Analgésiques
  {
    id: 8,
    name: 'Codéine',
    description: 'Analgésique opioïde contre les douleurs modérées.',
    price: 35,
    image: 'assets/img/products/codeine.webp',
    categoryId: 3,
    quantity: 25,
    pharmacyId: 1,
  },
  {
    id: 9,
    name: 'Tramadol',
    description: 'Utilisé pour les douleurs chroniques sévères.',
    price: 40,
    image: 'assets/img/products/tramadol.webp',
    categoryId: 3,
    quantity: 20,
    pharmacyId: 2,
  },
  {
    id: 10,
    name: 'Morphine',
    description: 'Analgésique puissant utilisé en cas de douleurs sévères.',
    price: 70,
    image: 'assets/img/products/morphine.webp',
    categoryId: 3,
    quantity: 10,
    pharmacyId: 3,
  },

  // 🌞 Vitamines
  {
    id: 11,
    name: 'Vitamine C',
    description: 'Renforce le système immunitaire.',
    price: 10,
    image: 'assets/img/products/vitamineC.webp',
    categoryId: 4,
    quantity: 60,
    pharmacyId: 1,
  },
  {
    id: 12,
    name: 'Vitamine D',
    description: 'Essentielle pour la santé des os et des muscles.',
    price: 15,
    image: 'assets/img/products/vitamineD.webp',
    categoryId: 4,
    quantity: 50,
    pharmacyId: 2,
  },
  {
    id: 13,
    name: 'Vitamine B12',
    description: 'Aide à la formation des globules rouges.',
    price: 20,
    image: 'assets/img/products/vitamineB12.webp',
    categoryId: 4,
    quantity: 30,
    pharmacyId: 3,
  },

  // 💪 Suppléments
  {
    id: 14,
    name: 'Magnésium',
    description: 'Réduit la fatigue et améliore la concentration.',
    price: 12,
    image: 'assets/img/products/magnesium.webp',
    categoryId: 5,
    quantity: 40,
    pharmacyId: 1,
  },
  {
    id: 15,
    name: 'Oméga-3',
    description: 'Bénéfique pour la santé du cœur et du cerveau.',
    price: 25,
    image: 'assets/img/products/omega3.webp',
    categoryId: 5,
    quantity: 35,
    pharmacyId: 2,
  },
  {
    id: 16,
    name: 'Probiotiques',
    description: 'Améliorent la digestion et l’équilibre intestinal.',
    price: 30,
    image: 'assets/img/products/probiotiques.webp',
    categoryId: 5,
    quantity: 25,
    pharmacyId: 3,
  },
];
