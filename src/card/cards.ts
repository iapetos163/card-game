import { CardDef, CardEffectType, CardId } from '@/card';

export const slime: CardDef = {
  id: CardId.SLIME,
  maxHealth: 5,
  effects: [
    {
      effectType: CardEffectType.ATTACK,
      value: 2,
    },
  ],
};
