import { Button, Grid, Space } from '@mantine/core';
import classes from './PlayGrid.module.css';
import Card from '../Card';
import { playCard } from '../Card/play-card';
import { slime } from '@/card/cards';

/*
10 -> (10+1) * 30 - 10 == 320
11 -> 12 * 30 -10 = 350
*/

export interface PlayGridProps {
  placing?: boolean;
}

export const PlayGrid = ({ placing }: PlayGridProps) => {
  return (
    <Grid w={380} gutter={10} overflow="hidden">
      <Grid.Col span={2}>
        {/* <Button
          variant="subtle"
          disabled={!placing}
          className={classes.place}
        ></Button> */}
        <Card def={playCard(slime)} />
      </Grid.Col>
      <Grid.Col span={2}>
        <Button variant="subtle" disabled={!placing} className={classes.place}></Button>
      </Grid.Col>
      <Grid.Col span={2}>
        <Button variant="subtle" disabled={!placing} className={classes.place}></Button>
      </Grid.Col>
      <Grid.Col span={2}>
        <Button variant="subtle" disabled={!placing} className={classes.place}></Button>
      </Grid.Col>
      <Grid.Col span={2}>
        <Button variant="subtle" disabled={!placing} className={classes.place}></Button>
      </Grid.Col>
      <Grid.Col span={2}>
        <Button variant="subtle" disabled={!placing} className={classes.place}></Button>
      </Grid.Col>
      <Grid.Col span={2}>
        <Button variant="subtle" disabled={!placing} className={classes.place}></Button>
      </Grid.Col>
      <Grid.Col span={2}>
        <Button variant="subtle" disabled={!placing} className={classes.place}></Button>
      </Grid.Col>
      <Grid.Col span={2}>
        <Button variant="subtle" disabled={!placing} className={classes.place}></Button>
      </Grid.Col>
      <Grid.Col span={2}>
        <Button variant="subtle" disabled={!placing} className={classes.place}></Button>
      </Grid.Col>
      <Grid.Col span={2}>
        <Button variant="subtle" disabled={!placing} className={classes.place}></Button>
      </Grid.Col>
      <Grid.Col span={2}>
        <Button variant="subtle" disabled={!placing} className={classes.place}></Button>
      </Grid.Col>
      <Grid.Col span={12}>
        <Space />
      </Grid.Col>
      <Grid.Col span={2}>
        <Button variant="subtle" disabled={!placing} className={classes.place}></Button>
      </Grid.Col>
      <Grid.Col span={2}>
        <Button variant="subtle" disabled={!placing} className={classes.place}></Button>
      </Grid.Col>
      <Grid.Col span={2}>
        <Button variant="subtle" disabled={!placing} className={classes.place}></Button>
      </Grid.Col>
      <Grid.Col span={2}>
        <Button variant="subtle" disabled={!placing} className={classes.place}></Button>
      </Grid.Col>
      <Grid.Col span={2}>
        <Button variant="subtle" disabled={!placing} className={classes.place}></Button>
      </Grid.Col>
      <Grid.Col span={2}>
        <Button variant="subtle" disabled={!placing} className={classes.place}></Button>
      </Grid.Col>
      <Grid.Col span={2}>
        <Button variant="subtle" disabled={!placing} className={classes.place}></Button>
      </Grid.Col>
      <Grid.Col span={2}>
        <Button variant="subtle" disabled={!placing} className={classes.place}></Button>
      </Grid.Col>
      <Grid.Col span={2}>
        <Button variant="subtle" disabled={!placing} className={classes.place}></Button>
      </Grid.Col>
      <Grid.Col span={2}>
        <Button variant="subtle" disabled={!placing} className={classes.place}></Button>
      </Grid.Col>
      <Grid.Col span={2}>
        <Button variant="subtle" disabled={!placing} className={classes.place}></Button>
      </Grid.Col>
      <Grid.Col span={2}>
        <Button variant="subtle" disabled={!placing} className={classes.place}></Button>
      </Grid.Col>
    </Grid>
  );
};
