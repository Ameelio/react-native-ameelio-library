import React from 'react';
import { ScrollView, View } from 'react-native';
import { Body, Caption, Header, Words } from '@src';

const TypographyDemoScreen: React.FC = () => {
  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 16 }}>
      <Header size={1}>Header 1</Header>
      <View style={{ width: '100%', height: 16 }} />
      <Header size={2}>Header 2</Header>
      <View style={{ width: '100%', height: 16 }} />
      <Header size={3}>Header 3</Header>
      <View style={{ width: '100%', height: 16 }} />
      <Header size={4}>Header 4</Header>
      <View style={{ width: '100%', height: 16 }} />
      <Header size={5}>Header 5</Header>
      <View style={{ width: '100%', height: 16 }} />
      <View style={{ width: '100%', height: 1, backgroundColor: 'gray' }} />
      <View style={{ width: '100%', height: 16 }} />
      <Body size={1}>Body 1</Body>
      <View style={{ width: '100%', height: 16 }} />
      <Body size={1} bold>
        Body 1 (Bold)
      </Body>
      <View style={{ width: '100%', height: 16 }} />
      <Body size={2}>Body 2</Body>
      <View style={{ width: '100%', height: 16 }} />
      <Body size={2} bold>
        Body 2 (Bold)
      </Body>
      <View style={{ width: '100%', height: 16 }} />
      <Body size={3}>Body 3</Body>
      <View style={{ width: '100%', height: 16 }} />
      <Body size={3} bold>
        Body 3 (Bold)
      </Body>
      <View style={{ width: '100%', height: 16 }} />
      <View style={{ width: '100%', height: 1, backgroundColor: 'gray' }} />
      <View style={{ width: '100%', height: 16 }} />
      <Caption size={1}>Caption 1</Caption>
      <View style={{ width: '100%', height: 16 }} />
      <Caption size={2}>Caption 2</Caption>
      <View style={{ width: '100%', height: 16 }} />
      <View style={{ width: '100%', height: 1, backgroundColor: 'gray' }} />
      <View style={{ width: '100%', height: 16 }} />
      <Words regular>Regular</Words>
      <View style={{ width: '100%', height: 16 }} />
      <Words regular italic>
        Regular (Italic)
      </Words>
      <Words regular size={25}>
        Regular (Huge)
      </Words>
      <View style={{ width: '100%', height: 16 }} />
      <Words medium>Medium</Words>
      <View style={{ width: '100%', height: 16 }} />
      <Words medium italic>
        Medium (Italic)
      </Words>
      <View style={{ width: '100%', height: 16 }} />
      <Words semibold>Semibold</Words>
      <View style={{ width: '100%', height: 16 }} />
      <Words semibold italic>
        Semibold (Italic)
      </Words>
      <View style={{ width: '100%', height: 16 }} />
      <Words bold>Bold</Words>
      <View style={{ width: '100%', height: 16 }} />
      <Words bold italic>
        Bold (Italic)
      </Words>
    </ScrollView>
  );
};

export default TypographyDemoScreen;
