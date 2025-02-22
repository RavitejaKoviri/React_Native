// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Pressable, Animated } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// interface AccordionProps {
//   title: string;
//   children: React.ReactNode;
// }

// const Accordion = ({ title, children }: AccordionProps) => {
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
// };

// export default function CRM() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>CRM</Text>
//         <View style={styles.buttonContainer}>
//           <Pressable style={styles.button}>
//             <Text style={styles.buttonText}>Expand All</Text>
//           </Pressable>
//           <Pressable style={[styles.button, styles.collapseButton]}>
//             <Text style={styles.buttonText}>Collapse All</Text>
//           </Pressable>
//         </View>
//       </View>

//       <Accordion title="Today Birthdays">
//         <Text style={styles.emptyText}>No birthdays today</Text>
//       </Accordion>

//       <Accordion title="Today Anniversaries">
//         <Text style={styles.emptyText}>No anniversaries today</Text>
//       </Accordion>

//       <Accordion title="Today Dues">
//         <Text style={styles.emptyText}>No dues today</Text>
//       </Accordion>

//       <Accordion title="Total Dues">
//         <Text style={styles.emptyText}>No total dues</Text>
//       </Accordion>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f3f4f6',
//     padding: 16,
//   },
//   header: {
//     marginBottom: 24,
//   },
//   headerTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: '#1e40af',
//     marginBottom: 16,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     gap: 12,
//   },
//   button: {
//     backgroundColor: '#4ade80',
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 6,
//   },
//   collapseButton: {
//     backgroundColor: '#ef4444',
//   },
//   buttonText: {
//     color: '#ffffff',
//     fontWeight: '500',
//   },
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
//   emptyText: {
//     color: '#6b7280',
//     fontStyle: 'italic',
//   },
// });







// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Pressable, Animated } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// interface AccordionProps {
//   title: string;
//   children: React.ReactNode;
//   isOpen: boolean;
//   onToggle: () => void;
// }

// const Accordion = ({ title, children, isOpen, onToggle }: AccordionProps) => {
//   const animatedHeight = React.useRef(new Animated.Value(0)).current;

//   const toggleAccordion = () => {
//     onToggle();
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
// };

// export default function CRM() {
//   const [accordionStates, setAccordionStates] = useState({
//     todayBirthdays: false,
//     todayAnniversaries: false,
//     todayDues: false,
//     totalDues: false,
//   });

//   const toggleAccordion = (key: keyof typeof accordionStates) => {
//     setAccordionStates((prev) => ({
//       ...prev,
//       [key]: !prev[key],
//     }));
//   };

//   const expandAll = () => {
//     setAccordionStates({
//       todayBirthdays: true,
//       todayAnniversaries: true,
//       todayDues: true,
//       totalDues: true,
//     });
//   };

//   const collapseAll = () => {
//     setAccordionStates({
//       todayBirthdays: false,
//       todayAnniversaries: false,
//       todayDues: false,
//       totalDues: false,
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>CRM</Text>
//         <View style={styles.buttonContainer}>
//           <Pressable style={styles.button} onPress={expandAll}>
//             <Text style={styles.buttonText}>Expand All</Text>
//           </Pressable>
//           <Pressable style={[styles.button, styles.collapseButton]} onPress={collapseAll}>
//             <Text style={styles.buttonText}>Collapse All</Text>
//           </Pressable>
//         </View>
//       </View>

//       <Accordion 
//         title="Today Birthdays" 
//         isOpen={accordionStates.todayBirthdays} 
//         onToggle={() => toggleAccordion('todayBirthdays')}
//       >
//         <Text style={styles.emptyText}>No birthdays today</Text>
//       </Accordion>

//       <Accordion 
//         title="Today Anniversaries" 
//         isOpen={accordionStates.todayAnniversaries} 
//         onToggle={() => toggleAccordion('todayAnniversaries')}
//       >
//         <Text style={styles.emptyText}>No anniversaries today</Text>
//       </Accordion>

//       <Accordion 
//         title="Today Dues" 
//         isOpen={accordionStates.todayDues} 
//         onToggle={() => toggleAccordion('todayDues')}
//       >
//         <Text style={styles.emptyText}>No dues today</Text>
//       </Accordion>

//       <Accordion 
//         title="Total Dues" 
//         isOpen={accordionStates.totalDues} 
//         onToggle={() => toggleAccordion('totalDues')}
//       >
//         <Text style={styles.emptyText}>No total dues</Text>
//       </Accordion>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f3f4f6',
//     padding: 16,
//   },
//   header: {
//     marginBottom: 24,
//   },
//   headerTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: '#1e40af',
//     marginBottom: 16,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     gap: 12,
//   },
//   button: {
//     backgroundColor: '#4ade80',
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 6,
//   },
//   collapseButton: {
//     backgroundColor: '#ef4444',
//   },
//   buttonText: {
//     color: '#ffffff',
//     fontWeight: '500',
//   },
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
//   emptyText: {
//     color: '#6b7280',
//     fontStyle: 'italic',
//   },
// });



























import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable,ScrollView } from 'react-native';
import { Accordion } from '@/components/Accordion';
import  MyCarousel from '@/components/MyCarousel'; 



export default function CRM() {
  const [accordionStates, setAccordionStates] = useState({
    todayBirthdays: false,
    todayAnniversaries: false,
    todayDues: false,
    totalDues: false,
  });

  const toggleAccordion = (key: keyof typeof accordionStates) => {
    setAccordionStates((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const expandAll = () => {
    setAccordionStates({
      todayBirthdays: true,
      todayAnniversaries: true,
      todayDues: true,
      totalDues: true,
    });
  };

  const collapseAll = () => {
    setAccordionStates({
      todayBirthdays: false,
      todayAnniversaries: false,
      todayDues: false,
      totalDues: false,
    });
  };

  return (

    <ScrollView>
    <MyCarousel />

    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>CRM</Text>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={expandAll}>
            <Text style={styles.buttonText}>Expand All</Text>
          </Pressable>
          <Pressable style={[styles.button, styles.collapseButton]} onPress={collapseAll}>
            <Text style={styles.buttonText}>Collapse All</Text>
          </Pressable>
        </View>
      </View>

      <Accordion 
        title="Today Birthdays" 
        isOpen={accordionStates.todayBirthdays} 
        onToggle={() => toggleAccordion('todayBirthdays')}
      >
        <Text style={styles.emptyText}>No birthdays today</Text>
      </Accordion>

      <Accordion 
        title="Today Anniversaries" 
        isOpen={accordionStates.todayAnniversaries} 
        onToggle={() => toggleAccordion('todayAnniversaries')}
      >
        <Text style={styles.emptyText}>No anniversaries today</Text>
      </Accordion>

      <Accordion 
        title="Today Dues" 
        isOpen={accordionStates.todayDues} 
        onToggle={() => toggleAccordion('todayDues')}
      >
        <Text style={styles.emptyText}>No dues today</Text>
      </Accordion>

      <Accordion 
        title="Total Dues" 
        isOpen={accordionStates.totalDues} 
        onToggle={() => toggleAccordion('totalDues')}
      >
        <Text style={styles.emptyText}>No total dues</Text>
      </Accordion>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    padding: 16,
  },
  header: {
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1e40af',
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  button: {
    backgroundColor: '#4ade80',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  collapseButton: {
    backgroundColor: '#ef4444',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '500',
  },
  emptyText: {
    color: '#6b7280',
    fontStyle: 'italic',
  },
});










