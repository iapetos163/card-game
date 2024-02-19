import { CardEffect, CardEffectType } from '@/card';
import { MantineStyleProps, Box, Stack } from '@mantine/core';
import PlainDagger from '@/asset/game-icons/plain-dagger.svg?react';
import classes from './Card.module.css';

const effectIcons: Record<CardEffectType, React.FunctionComponent<React.ComponentProps<'svg'>>> = {
  [CardEffectType.ATTACK]: PlainDagger,
};

export interface EffectProps extends MantineStyleProps, CardEffect {
  size: 16 | 24;
}

export const Effect = ({ effectType, value, size, ...styleProps }: EffectProps) => {
  const Icon = effectIcons[effectType];
  return (
    <Box c={'gray.7'} h={size} {...styleProps} className={classes.effect}>
      <Icon width={size} height={size} />
      {typeof value === 'number' && (
        <Stack justify="center" align="center" className={classes.effectValueOuter}>
          <div className={classes.effectValueInner}>{value}</div>
        </Stack>
      )}
    </Box>
  );
};
