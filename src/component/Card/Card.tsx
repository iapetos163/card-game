import { Box, Group, MantineStyleProps, Stack } from '@mantine/core';
import { PropsWithChildren } from 'react';
import { Icon, Zap } from 'react-feather';

const COLOR_CARD = '#e3ccaf';

const Stat = ({ children, ...styleProps }: PropsWithChildren & MantineStyleProps) => (
  <Box {...styleProps} style={{ lineHeight: 1, fontSize: 11, padding: 2, borderRadius: 4 }}>
    {children}
  </Box>
);

interface EffectProps extends MantineStyleProps {
  Icon: Icon;
  size: 16 | 24;
  value?: number;
}

const Effect = ({ Icon, value, size, ...styleProps }: EffectProps) => (
  <Box
    c={'gray.7'}
    h={size}
    {...styleProps}
    style={{ display: 'block', position: 'relative', lineHeight: 1 }}
  >
    <Icon size={size} />
    {typeof value === 'number' && (
      <Stack
        justify="center"
        align="center"
        style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}
      >
        <Box
          style={{
            padding: '3px 4px',
            fontSize: 11,
            lineHeight: 1,
            background: `radial-gradient(${COLOR_CARD}, ${COLOR_CARD}dd 40%, transparent)`,
          }}
        >
          {value}
        </Box>
      </Stack>
    )}
  </Box>
);

export const Card = () => {
  return (
    <Stack bg={COLOR_CARD} w={55} h={77} p={2} gap={4}>
      <Group gap={2} justify="space-between">
        <Group gap={2} flex={1}>
          <Stat bg={'black'}>5</Stat>
          <Stat bg={'violet.9'}>2</Stat>
        </Group>
        <Group gap={2} flex={1} justify="flex-end">
          <Stat bg={'red.9'}>9</Stat>
          <Stat bg={'blue.9'}>7</Stat>
        </Group>
      </Group>
      <Group gap={1} justify="space-between">
        <Effect size={24} value={2} Icon={Zap} />
        <Effect size={24} Icon={Zap} />
        <Effect size={16} Icon={Zap} />
      </Group>
    </Stack>
  );
};
