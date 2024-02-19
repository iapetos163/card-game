import { Grid, Space, Stack } from '@mantine/core';
import classes from './PlayGrid.module.css';
import Card from '../Card';
import { playCard } from '../Card/play-card';
import { slime } from '@/card/cards';

/*
10 -> (10+1) * 30 - 10 == 320
11 -> 12 * 30 -10 = 350
*/

export const PlayGrid = () => {
  return (
    <Grid w={380} gutter={10} overflow="hidden">
      <Grid.Col span={2}>
        {/* <Stack className={classes.place}></Stack> */}
        <Card def={playCard(slime)} />
      </Grid.Col>
      <Grid.Col span={2}>
        <Stack className={classes.place}></Stack>
      </Grid.Col>
      <Grid.Col span={2}>
        <Stack className={classes.place}></Stack>
      </Grid.Col>
      <Grid.Col span={2}>
        <Stack className={classes.place}></Stack>
      </Grid.Col>
      <Grid.Col span={2}>
        <Stack className={classes.place}></Stack>
      </Grid.Col>
      <Grid.Col span={2}>
        <Stack className={classes.place}></Stack>
      </Grid.Col>
      <Grid.Col span={2}>
        <Stack className={classes.place}></Stack>
      </Grid.Col>
      <Grid.Col span={2}>
        <Stack className={classes.place}></Stack>
      </Grid.Col>
      <Grid.Col span={2}>
        <Stack className={classes.place}></Stack>
      </Grid.Col>
      <Grid.Col span={2}>
        <Stack className={classes.place}></Stack>
      </Grid.Col>
      <Grid.Col span={2}>
        <Stack className={classes.place}></Stack>
      </Grid.Col>
      <Grid.Col span={2}>
        <Stack className={classes.place}></Stack>
      </Grid.Col>
      <Grid.Col span={12}>
        <Space />
      </Grid.Col>
      <Grid.Col span={2}>
        <Stack className={classes.place}></Stack>
      </Grid.Col>
      <Grid.Col span={2}>
        <Stack className={classes.place}></Stack>
      </Grid.Col>
      <Grid.Col span={2}>
        <Stack className={classes.place}></Stack>
      </Grid.Col>
      <Grid.Col span={2}>
        <Stack className={classes.place}></Stack>
      </Grid.Col>
      <Grid.Col span={2}>
        <Stack className={classes.place}></Stack>
      </Grid.Col>
      <Grid.Col span={2}>
        <Stack className={classes.place}></Stack>
      </Grid.Col>
      <Grid.Col span={2}>
        <Stack className={classes.place}></Stack>
      </Grid.Col>
      <Grid.Col span={2}>
        <Stack className={classes.place}></Stack>
      </Grid.Col>
      <Grid.Col span={2}>
        <Stack className={classes.place}></Stack>
      </Grid.Col>
      <Grid.Col span={2}>
        <Stack className={classes.place}></Stack>
      </Grid.Col>
      <Grid.Col span={2}>
        <Stack className={classes.place}></Stack>
      </Grid.Col>
      <Grid.Col span={2}>
        <Stack className={classes.place}></Stack>
      </Grid.Col>
    </Grid>
  );
};
