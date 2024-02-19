import { Box, Group, MantineStyleProps, Stack } from '@mantine/core';
import { PropsWithChildren, useMemo } from 'react';
import classes from './Card.module.css';
import { cardImages } from './card-display';
import { PlayedCard } from '@/card';
import { Effect, EffectProps } from './Effect';
import chunk from '@/util/chunk';

const Stat = ({ children, ...styleProps }: PropsWithChildren & MantineStyleProps) => (
  <Box {...styleProps} className={classes.stat}>
    {children}
  </Box>
);

export interface CardProps extends MantineStyleProps {
  def: PlayedCard;
}

const ICON_SIZE_XS = 18 as const;
const ICON_SIZE_SM = 27 as const;

export const Card = ({ def, ...props }: CardProps) => {
  const effectSections = useMemo(() => {
    const valuedEffects = def.effects.filter((e) => typeof e.value === 'number');
    const unvaluedEffects = def.effects.filter((e) => typeof e.value !== 'number');

    if (valuedEffects.length === 0 && unvaluedEffects.length <= 2) {
      return [unvaluedEffects.map((e): EffectProps => ({ ...e, size: ICON_SIZE_SM }))];
    }
    if (valuedEffects.length === 0) {
      return chunk(
        unvaluedEffects.map((e): EffectProps => ({ ...e, size: ICON_SIZE_XS })),
        3
      );
    }

    const largeSections = chunk(
      valuedEffects.map((e): EffectProps => ({ ...e, size: ICON_SIZE_SM })),
      2
    );

    const lastLargeSection = largeSections[largeSections.length - 1];
    if (unvaluedEffects.length === 1 && lastLargeSection.length === 1) {
      lastLargeSection.push({ ...unvaluedEffects[0], size: ICON_SIZE_SM });
      return largeSections;
    }

    return [
      ...largeSections,
      ...chunk(
        unvaluedEffects.map((e): EffectProps => ({ ...e, size: ICON_SIZE_XS })),
        3
      ),
    ];
  }, [def]);

  return (
    <div {...props} className={classes.card}>
      <Stack gap={4} justify="space-between" h="100%">
        <Group gap={2} justify="space-between">
          <Group gap={2} flex={1}>
            {/* <Stat bg={'black'}>5</Stat>
            <Stat bg={'violet.9'}>2</Stat> */}
          </Group>
          <Group gap={2} flex={1} justify="flex-end">
            <Stat bg={'red.9'}>{def.health}</Stat>
          </Group>
        </Group>
        <Stack gap={2} align="center" justify="space-around" className={classes.effectsSection}>
          {effectSections.map((section, i) => (
            <Group key={i} gap={1} justify="space-around" w="100%">
              {section.map((effectProps) => (
                <Effect key={effectProps.effectType} {...effectProps} />
              ))}
            </Group>
          ))}
        </Stack>
      </Stack>
      <Stack align="center" className={classes.canvasOuter}>
        <div className={classes.canvasInner}>
          <img src={cardImages[def.id]} />
        </div>
      </Stack>
    </div>
  );
};
