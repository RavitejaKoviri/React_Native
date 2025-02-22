// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Pressable, Animated } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// interface AccordionProps {
//   title: string;
//   children: React.ReactNode;
// }

// export function Accordion({ title, children }: AccordionProps) {
//   const [isOpen, setIsOpen] = useState(false);
//   const animatedHeight = React.useRef(new Animated.Value(0)).current;

//   const toggleAccordion = () => {
//     setIsOpen(!isOpen);
//     Animated.timing(animatedHeight, {
//       toValue: isOpen ? 0 : 1,
//       duration: 300,
//       useNativeDriver: false,
//     }).start();
//   };

//   return (
//     <View style={styles.accordionContainer}>
//       <Pressable 
//         style={styles.accordionHeader} 
//         onPress={toggleAccordion}
//       >
//         <Text style={styles.accordionTitle}>{title}</Text>
//         <Ionicons 
//           name={isOpen ? 'remove' : 'add'} 
//           size={24} 
//           color="#1e40af"
//         />
//       </Pressable>
//       {isOpen && (
//         <Animated.View style={[styles.accordionContent]}>
//           {children}
//         </Animated.View>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   accordionContainer: {
//     backgroundColor: '#ffffff',
//     borderRadius: 8,
//     marginBottom: 12,
//     overflow: 'hidden',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   accordionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 16,
//     backgroundColor: '#f8fafc',
//   },
//   accordionTitle: {
//     fontSize: 18,
//     fontWeight: '500',
//     color: '#1e40af',
//   },
//   accordionContent: {
//     padding: 16,
//     backgroundColor: '#ffffff',
//   },
// });
















import React from 'react';
import { View, Text, StyleSheet, Pressable, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

export function Accordion({ title, children, isOpen, onToggle }: AccordionProps) {
  const animatedHeight = React.useRef(new Animated.Value(0)).current;

  const toggleAccordion = () => {
    onToggle();
    Animated.timing(animatedHeight, {
      toValue: isOpen ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.accordionContainer}>
      <Pressable 
        style={styles.accordionHeader} 
        onPress={toggleAccordion}
      >
        <Text style={styles.accordionTitle}>{title}</Text>
        <Ionicons 
          name={isOpen ? 'remove' : 'add'} 
          size={24} 
          color="#1e40af"
        />
      </Pressable>
      {isOpen && (
        <Animated.View style={styles.accordionContent}>
          {children}
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  accordionContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  accordionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8fafc',
  },
  accordionTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#1e40af',
  },
  accordionContent: {
    padding: 16,
    backgroundColor: '#ffffff',
  },
});
