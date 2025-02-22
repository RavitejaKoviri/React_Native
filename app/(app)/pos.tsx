// import React from 'react';
// import { View, Text, StyleSheet, Pressable } from 'react-native';
// import { Accordion } from '../../components/Accordion';

// export default function POS() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>Point of Sales</Text>
//         <View style={styles.buttonContainer}>
//           <Pressable style={styles.button}>
//             <Text style={styles.buttonText}>Expand All</Text>
//           </Pressable>
//           <Pressable style={[styles.button, styles.collapseButton]}>
//             <Text style={styles.buttonText}>Collapse All</Text>
//           </Pressable>
//         </View>
//       </View>

//       <Accordion title="Today's Sales">
//         <Text style={styles.emptyText}>No sales recorded today</Text>
//       </Accordion>

//       <Accordion title="Recent Transactions">
//         <Text style={styles.emptyText}>No recent transactions</Text>
//       </Accordion>

//       <Accordion title="Popular Items">
//         <Text style={styles.emptyText}>No popular items data</Text>
//       </Accordion>

//       <Accordion title="Cash Register">
//         <Text style={styles.emptyText}>Register is empty</Text>
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
//   emptyText: {
//     color: '#6b7280',
//     fontStyle: 'italic',
//   },
// });






















import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable,ScrollView } from 'react-native';
import { Accordion } from '../../components/Accordion';
import MyCarousel from '@/components/MyCarousel';

export default function POS() {
  const [accordionStates, setAccordionStates] = useState({
    todaysSales: false,
    recentTransactions: false,
    popularItems: false,
    cashRegister: false,
  });

  const toggleAccordion = (key: keyof typeof accordionStates) => {
    setAccordionStates((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const expandAll = () => {
    setAccordionStates({
      todaysSales: true,
      recentTransactions: true,
      popularItems: true,
      cashRegister: true,
    });
  };

  const collapseAll = () => {
    setAccordionStates({
      todaysSales: false,
      recentTransactions: false,
      popularItems: false,
      cashRegister: false,
    });
  };

  return (
    <ScrollView>
    <MyCarousel/>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Point of Sales</Text>
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
        title="Today's Sales"
        isOpen={accordionStates.todaysSales}
        onToggle={() => toggleAccordion('todaysSales')}
      >
        <Text style={styles.emptyText}>No sales recorded today</Text>
      </Accordion>

      <Accordion
        title="Recent Transactions"
        isOpen={accordionStates.recentTransactions}
        onToggle={() => toggleAccordion('recentTransactions')}
      >
        <Text style={styles.emptyText}>No recent transactions</Text>
      </Accordion>

      <Accordion
        title="Popular Items"
        isOpen={accordionStates.popularItems}
        onToggle={() => toggleAccordion('popularItems')}
      >
        <Text style={styles.emptyText}>No popular items data</Text>
      </Accordion>

      <Accordion
        title="Cash Register"
        isOpen={accordionStates.cashRegister}
        onToggle={() => toggleAccordion('cashRegister')}
      >
        <Text style={styles.emptyText}>Register is empty</Text>
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
