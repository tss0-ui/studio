
export type Service = {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  image: string;
  aiHint?: string;
  features?: string[];
};

export const services: Service[] = [
  {
    id: '1',
    name: 'The Signature Experience',
    description: 'A comprehensive session tailored to your deepest desires. Includes premium amenities.',
    price: '$500',
    duration: '2 hours',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'sensual ambiance candlelit',
    features: ['Personalized consultation', 'Premium ambiance', 'Refreshments included', 'Extended duration option']
  },
  {
    id: '2',
    name: 'Evening Interlude',
    description: 'A shorter, yet equally luxurious encounter perfect for a sophisticated evening.',
    price: '$300',
    duration: '1 hour',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'intimate encounter silhouette',
    features: ['Focused session', 'Choice of theme', 'Discreet & private']
  },
  {
    id: '3',
    name: 'The Night Owl Special',
    description: 'An extended session for those who seek a truly immersive and unforgettable night.',
    price: '$800',
    duration: '4 hours',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'opulent hotel suite night',
    features: ['All-inclusive', 'Multiple activities', 'Gourmet snacks & drinks', 'Utmost privacy']
  },
  {
    id: '4',
    name: 'Virtual Charm',
    description: 'Engage in a captivating virtual experience from the comfort of your own space.',
    price: '$200',
    duration: '1 hour (Virtual)',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'flirty video chat',
    features: ['Secure video platform', 'Personalized interaction', 'Flexible scheduling']
  },
];
