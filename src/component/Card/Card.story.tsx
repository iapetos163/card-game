import { slime } from '@/card/cards';
import { Card } from './Card';
import { playCard } from './play-card';

export default {
  title: 'Card',
};

export const Slime = () => <Card def={playCard(slime)} />;
