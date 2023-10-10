import * as React from 'react';
import { Image , Text, StyleSheet , View} from 'react-native';
import { Banner } from 'react-native-paper';

export default function Screen4() {
    const [visible, setVisible] = React.useState(true);
  return (
    <View style={styles.container}>
    <Text>Banner</Text>
    <Banner
    visible={visible}
    actions={[
      {
        label: 'Fix it',
        onPress: () => setVisible(false),
      },
      {
        label: 'Learn more',
        onPress: () => setVisible(false),
      },
    ]}
    icon={({size}) => (
      <Image
        source={{
          uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4',
        }}
        style={{
          width: size,
          height: size,
        }}
      />
    )}>
    There was a problem processing a transaction on your credit card.
  </Banner>
  <Banner
    visible={visible}
    actions={[
      {
        label: 'Fix it',
        onPress: () => setVisible(false),
      },
      {
        label: 'Learn more',
        onPress: () => setVisible(false),
      },
    ]}
    icon={({size}) => (
      <Image
        source={{
          uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4',
        }}
        style={{
          width: size,
          height: size,
        }}
      />
    )}>
    There was a problem processing a transaction on your credit card.
  </Banner>
  <Banner
    visible={visible}
    actions={[
      {
        label: 'Fix it',
        onPress: () => setVisible(false),
      },
      {
        label: 'Learn more',
        onPress: () => setVisible(false),
      },
    ]}
    icon={({size}) => (
      <Image
        source={{
          uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4',
        }}
        style={{
          width: size,
          height: size,
        }}
      />
    )}>
    There was a problem processing a transaction on your credit card.
  </Banner>
  <Banner
    visible={visible}
    actions={[
      {
        label: 'Fix it',
        onPress: () => setVisible(false),
      },
      {
        label: 'Learn more',
        onPress: () => setVisible(false),
      },
    ]}
    icon={({size}) => (
      <Image
        source={{
          uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4',
        }}
        style={{
          width: size,
          height: size,
        }}
      />
    )}>
    There was a problem processing a transaction on your credit card.
  </Banner>
  </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
   padding: 5,
   gap: 10
    
    },
}
);