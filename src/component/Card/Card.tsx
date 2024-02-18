import { Box, Group, MantineStyleProps, Stack } from '@mantine/core';
import { PropsWithChildren } from 'react';
import { Icon, Zap } from 'react-feather';
import classes from './Card.module.css';

const Stat = ({ children, ...styleProps }: PropsWithChildren & MantineStyleProps) => (
  <Box {...styleProps} className={classes.stat}>
    {children}
  </Box>
);

interface EffectProps extends MantineStyleProps {
  Icon: Icon;
  size: 16 | 24;
  value?: number;
}

const Effect = ({ Icon, value, size, ...styleProps }: EffectProps) => (
  <Box c={'gray.7'} h={size} {...styleProps} className={classes.effect}>
    <Icon size={size} />
    {typeof value === 'number' && (
      <Stack justify="center" align="center" className={classes.effectValueOuter}>
        <div className={classes.effectValueInner}>{value}</div>
      </Stack>
    )}
  </Box>
);

export const Card = () => {
  return (
    <div className={classes.card}>
      <Stack gap={4} justify="space-between" h="100%">
        <Group gap={2} justify="space-between">
          <Group gap={2} flex={1}>
            <Stat bg={'black'}>5</Stat>
            <Stat bg={'violet.9'}>2</Stat>
          </Group>
          <Group gap={2} flex={1} justify="flex-end">
            <Stat bg={'red.9'}>9</Stat>
            <Stat bg={'blue.9'}>7</Stat>
            {/* <Stat bg={'blue.9'}>7</Stat> */}
          </Group>
        </Group>
        <Stack gap={2} align="center" justify="space-around" className={classes.effectsSection}>
          <Group gap={1} justify="space-around" w="100%">
            <Effect size={24} value={2} Icon={Zap} />
            <Effect size={24} Icon={Zap} />
          </Group>
          {/* <Group gap={1} w="100%" justify="space-around">
            <Effect size={16} Icon={Zap} />
          </Group> */}
        </Stack>
      </Stack>
      <Stack align="center" className={classes.canvasOuter}>
        <div className={classes.canvasInner}></div>
      </Stack>
    </div>
  );
};
