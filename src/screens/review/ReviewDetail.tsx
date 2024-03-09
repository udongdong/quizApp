import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {MainStackNavigationProp, MainStackParamList} from '../screenTypes';
import {Quiz} from '../../components/quiz/Quiz';
import {Space} from '../../components/Space';
import {
  ScrollView,
  View,
  Image,
  StyleSheet,
  Pressable,
  Text,
} from 'react-native';
import back from '../../assets/img/back.png';
import check_blue from '../../assets/img/check_blue.png';
import check_blank from '../../assets/img/check_blank.png';

export function ReviewDetail(): React.JSX.Element {
  const route = useRoute<RouteProp<MainStackParamList, 'reviewDetail'>>();
  const {quizList} = route.params;

  const [isShowAll, setShowAll] = useState<boolean>(true);

  const navigation = useNavigation<MainStackNavigationProp>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.pop()}>
          <Image style={styles.back} source={back} />
        </Pressable>

        <Pressable
          style={styles.toggle}
          onPress={() => setShowAll(prev => !prev)}>
          <Text>{'오답만 보기'}</Text>
          {isShowAll ? (
            <Image style={styles.checkIcon} source={check_blank} />
          ) : (
            <Image style={styles.checkIcon} source={check_blue} />
          )}
        </Pressable>
      </View>

      <ScrollView>
        {quizList
          ?.filter(q => isShowAll || q.correct !== q.selected)
          .map((q, i) => {
            return (
              <View key={i}>
                <Quiz {...q} isDone />
                <Space h={15} />
              </View>
            );
          })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    padding: 10,
    marginRight: 5,
  },
  back: {
    width: 25,
    height: 25,
  },
  toggle: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  checkIcon: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
});
