import React from 'react';
import { ScrollView } from 'react-native';
import { Button, Card, Paragraph, Title } from 'react-native-paper';

export default function HomeScreen() {
  return (
    <ScrollView>
      <Card>
        <Card.Content>
          <Title>Card title</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
}
