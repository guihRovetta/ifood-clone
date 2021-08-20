import React from 'react';
import { Pressable, View, Text, PressableProps } from 'react-native';

import { styles } from './styles';

type QuickFilterProps = PressableProps & {
  label: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  selected: boolean;
};

const QuickFilter = ({
  label,
  leftIcon,
  rightIcon,
  selected,
  ...props
}: QuickFilterProps) => {
  return (
    <Pressable {...props}>
      <View
        style={[
          styles.filterContainer,
          selected && styles.filterContainerActive,
        ]}
      >
        {leftIcon}
        <Text
          style={[styles.filterLabel, selected && styles.filterLabelActive]}
        >
          {label}
        </Text>
        {rightIcon}
      </View>
    </Pressable>
  );
};

export default QuickFilter;
