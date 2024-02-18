export enum CardId {
  SLIME = 0,
}

export enum CardEffectType {
  ATTACK = 'ATTACK',
}

export interface CardEffect {
  effectType: CardEffectType;
  value?: number;
}

export interface CardDef {
  id: CardId;
  maxHealth: number;
  effects: CardEffect[];
}

export interface PlayedCard extends CardDef {
  health: number;
}
