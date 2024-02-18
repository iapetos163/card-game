import { CardDef, PlayedCard } from '@/card';

export const playCard = (def: CardDef): PlayedCard => ({
  ...def,
  health: def.maxHealth,
});
