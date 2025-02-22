// import React from 'react';
// import { View, Text, StyleSheet, Pressable } from 'react-native';
// import { Accordion } from '../../components/Accordion';

// export default function Inventory() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>Inventory</Text>
//         <View style={styles.buttonContainer}>
//           <Pressable style={styles.button}>
//             <Text style={styles.buttonText}>Expand All</Text>
//           </Pressable>
//           <Pressable style={[styles.button, styles.collapseButton]}>
//             <Text style={styles.buttonText}>Collapse All</Text>
//           </Pressable>
//         </View>
//       </View>

//       <Accordion title="Low Stock Items">
//         <Text style={styles.emptyText}>No low stock items</Text>
//       </Accordion>

//       <Accordion title="Out of Stock">
//         <Text style={styles.emptyText}>No out of stock items</Text>
//       </Accordion>

//       <Accordion title="Recent Updates">
//         <Text style={styles.emptyText}>No recent updates</Text>
//       </Accordion>

//       <Accordion title="Stock Value">
//         <Text style={styles.emptyText}>No stock value data</Text>
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


export default function Inventory() {
  const [accordionStates, setAccordionStates] = useState({
    lowStockItems: false,
    outOfStock: false,
    recentUpdates: false,
    stockValue: false,
  });

  const toggleAccordion = (key: keyof typeof accordionStates) => {
    setAccordionStates((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const expandAll = () => {
    setAccordionStates({
      lowStockItems: true,
      outOfStock: true,
      recentUpdates: true,
      stockValue: true,
    });
  };

  const collapseAll = () => {
    setAccordionStates({
      lowStockItems: false,
      outOfStock: false,
      recentUpdates: false,
      stockValue: false,
    });
  };

  return (
    <ScrollView>
    <MyCarousel/>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Inventory</Text>
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
        title="Low Stock Items"
        isOpen={accordionStates.lowStockItems}
        onToggle={() => toggleAccordion('lowStockItems')}
      >
        <Text style={styles.emptyText}>No low stock items</Text>
      </Accordion>

      <Accordion 
        title="Out of Stock"
        isOpen={accordionStates.outOfStock}
        onToggle={() => toggleAccordion('outOfStock')}
      >
        <Text style={styles.emptyText}>No out of stock items</Text>
      </Accordion>

      <Accordion 
        title="Recent Updates"
        isOpen={accordionStates.recentUpdates}
        onToggle={() => toggleAccordion('recentUpdates')}
      >
        <Text style={styles.emptyText}>No recent updates</Text>
      </Accordion>

      <Accordion 
        title="Stock Value"
        isOpen={accordionStates.stockValue}
        onToggle={() => toggleAccordion('stockValue')}
      >
        <Text style={styles.emptyText}>No stock value data</Text>
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
