import React from 'react';

import { 
  View, 
  Text, 
  StatusBar,
  StyleSheet,
  TouchableOpacity 
} from 'react-native';

import { Feather } from '@expo/vector-icons';
import { MotiView, MotiText } from 'moti';

import colors from '../../theme/colors';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 22;

export default function Header({ name }: { name: string }) {
  return (
    <View style={styles.container}>
      <MotiView
        style={styles.content}
        from={{
          translateY: -150,
          opacity: 0,
        }}
        animate={{
          translateY: 0,
          opacity: 1,
        }}
        transition={{
          type: 'timing',
          duration: 1500,
          delay: 300,
        }}
      >
        <MotiText
          style={styles.username}
          from={{
            translateX: -300,
          }}
          animate={{
            translateX: 0,
          }}
          transition={{
            type: 'timing',
            duration: 1500,
            delay: 300,
          }}
        >
          <Text style={styles.text}>{name}</Text>
        </MotiText>
        
        <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>          
          <Feather name="user" size={27} color={colors.red} />
        </TouchableOpacity>
      </MotiView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.dark_purple,
    paddingTop: statusBarHeight,
    flexDirection: 'row',
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 44,
  },
  
  content: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  username: {
    fontSize: 18,
    color: colors.white,
    fontWeight: 'bold',
  },

  buttonUser: {
    width: 44,
    height: 44,
    backgroundColor: colors.opacity_white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 44 / 2,
  },

  text: {
    fontSize: 14,
    color: colors.white,
  }
});
