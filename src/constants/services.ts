
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
    name: 'Quick Visit (QV)',
    description: "A quick engagement. Perfect for the ones rushin', but still need a hand bussin'",
    price: '$80',
    duration: '15 min',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'playful tease quick',
  },
  {
    id: '2',
    name: 'Half Hour (HHR)',
    description: 'You got 30 minutes. Make it count.',
    price: '$150',
    duration: '30 min',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'intense connection silhouette',
  },
  {
    id: '3',
    name: 'Power Hour',
    description: "You got a 60 minutes, I don't want to be able to walk in 61.",
    price: '$300',
    duration: '1 hour',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'energetic encounter passion',
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
