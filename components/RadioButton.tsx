import React, {useState} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {Button} from './Button';

type RadioButtonProps = {
  style?: ViewStyle;
  radios: string[];
  init?: number;
  onSelected?: (i: number) => void;
};

export function RadioButton(props: RadioButtonProps): React.JSX.Element {
  const {style, radios, init = 0, onSelected} = props;
  const [selected, setSelected] = useState<number>(init);

  return (
    <View style={{...styles.container, ...style}}>
      {radios.map((r, i) => {
        const type = selected === i ? 'primary' : 'secondary';
        return (
          <Button
            style={{...styles.button, ...{flex: 1}}}
            title={r}
            onPress={() => {
              setSelected(i);

              if (onSelected) {
                onSelected(i);
              }
            }}
            type={type}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  button: {},
});
