import React from 'react';
import { AutoComplete, Button, Card, Grid, Input, Text } from '@geist-ui/react';

export const Swap: React.FC = () => {
  const currencies = [
    { label: 'ETH', value: 'ETH' },
    { label: 'ERG', value: 'ERG' },
  ];

  return (
    <>
      <Card>
        <Grid.Container gap={1}>
          <Grid xs={24}>
            <Text h4>From</Text>
          </Grid>
          <Grid xs={6}>
            <AutoComplete
              disableFreeSolo
              options={currencies}
              initialValue="ETH"
            />
          </Grid>
          <Grid xs={18}>
            <Input placeholder="0.0" type="number" width="100%" />
          </Grid>
          <Grid xs={24}>
            <Text h4>To</Text>
          </Grid>
          <Grid xs={6}>
            <AutoComplete
              disableFreeSolo
              options={currencies}
              initialValue="ERG"
            />
          </Grid>
          <Grid xs={18}>
            <Input placeholder="0.0" type="number" width="100%" />
          </Grid>
          <Grid xs={24} justify="center">
            <Button>Swap</Button>
          </Grid>
        </Grid.Container>
      </Card>
    </>
  );
};
