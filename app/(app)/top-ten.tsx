// import React from 'react';
// import { View, Text, StyleSheet, Pressable } from 'react-native';
// import { Accordion } from '../../components/Accordion';

// export default function TopFive() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>Top Five</Text>
//         <View style={styles.buttonContainer}>
//           <Pressable style={styles.button}>
//             <Text style={styles.buttonText}>Expand All</Text>
//           </Pressable>
//           <Pressable style={[styles.button, styles.collapseButton]}>
//             <Text style={styles.buttonText}>Collapse All</Text>
//           </Pressable>
//         </View>
//       </View>

//       <Accordion title="Top 5 Customers">
//         <Text style={styles.emptyText}>No data available</Text>
//       </Accordion>

//       <Accordion title="Top 5 Products">
//         <Text style={styles.emptyText}>No data available</Text>
//       </Accordion>

//       <Accordion title="Top 5 Sales">
//         <Text style={styles.emptyText}>No data available</Text>
//       </Accordion>

//       <Accordion title="Top 5 Suppliers">
//         <Text style={styles.emptyText}>No data available</Text>
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


export default function TopTen() {
  const [accordionStates, setAccordionStates] = useState({
    topCustomers: false,
    topProducts: false,
    topSales: false,
    topSuppliers: false,
  });

  const toggleAccordion = (key: keyof typeof accordionStates) => {
    setAccordionStates((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const expandAll = () => {
    setAccordionStates({
      topCustomers: true,
      topProducts: true,
      topSales: true,
      topSuppliers: true,
    });
  };

  const collapseAll = () => {
    setAccordionStates({
      topCustomers: false,
      topProducts: false,
      topSales: false,
      topSuppliers: false,
    });
  };

  return (
    <ScrollView>
    <MyCarousel/>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Top 10</Text>
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
        title="Top 5 Customers"
        isOpen={accordionStates.topCustomers}
        onToggle={() => toggleAccordion('topCustomers')}
      >
        <Text style={styles.emptyText}>No data available</Text>
      </Accordion>

      <Accordion
        title="Top 5 Products"
        isOpen={accordionStates.topProducts}
        onToggle={() => toggleAccordion('topProducts')}
      >
        <Text style={styles.emptyText}>No data available</Text>
      </Accordion>

      <Accordion
        title="Top 5 Sales"
        isOpen={accordionStates.topSales}
        onToggle={() => toggleAccordion('topSales')}
      >
        <Text style={styles.emptyText}>No data available</Text>
      </Accordion>

      <Accordion
        title="Top 5 Suppliers"
        isOpen={accordionStates.topSuppliers}
        onToggle={() => toggleAccordion('topSuppliers')}
      >
        <Text style={styles.emptyText}>No data available</Text>
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
