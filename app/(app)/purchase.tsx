// import React from 'react';
// import { View, Text, StyleSheet, Pressable } from 'react-native';
// import { Accordion } from '../../components/Accordion';

// export default function Purchase() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>Purchase</Text>
//         <View style={styles.buttonContainer}>
//           <Pressable style={styles.button}>
//             <Text style={styles.buttonText}>Expand All</Text>
//           </Pressable>
//           <Pressable style={[styles.button, styles.collapseButton]}>
//             <Text style={styles.buttonText}>Collapse All</Text>
//           </Pressable>
//         </View>
//       </View>

//       <Accordion title="Recent Orders">
//         <Text style={styles.emptyText}>No recent orders</Text>
//       </Accordion>

//       <Accordion title="Pending Deliveries">
//         <Text style={styles.emptyText}>No pending deliveries</Text>
//       </Accordion>

//       <Accordion title="Purchase History">
//         <Text style={styles.emptyText}>No purchase history</Text>
//       </Accordion>

//       <Accordion title="Supplier List">
//         <Text style={styles.emptyText}>No suppliers</Text>
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


export default function Purchase() {
  const [accordionStates, setAccordionStates] = useState({
    recentOrders: false,
    pendingDeliveries: false,
    purchaseHistory: false,
    supplierList: false,
  });

  const toggleAccordion = (key: keyof typeof accordionStates) => {
    setAccordionStates((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const expandAll = () => {
    setAccordionStates({
      recentOrders: true,
      pendingDeliveries: true,
      purchaseHistory: true,
      supplierList: true,
    });
  };

  const collapseAll = () => {
    setAccordionStates({
      recentOrders: false,
      pendingDeliveries: false,
      purchaseHistory: false,
      supplierList: false,
    });
  };

  return (
    <ScrollView>
      <MyCarousel />
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Purchase</Text>
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
        title="Recent Orders"
        isOpen={accordionStates.recentOrders}
        onToggle={() => toggleAccordion('recentOrders')}
      >
        <Text style={styles.emptyText}>No recent orders</Text>
      </Accordion>

      <Accordion
        title="Pending Deliveries"
        isOpen={accordionStates.pendingDeliveries}
        onToggle={() => toggleAccordion('pendingDeliveries')}
      >
        <Text style={styles.emptyText}>No pending deliveries</Text>
      </Accordion>

      <Accordion
        title="Purchase History"
        isOpen={accordionStates.purchaseHistory}
        onToggle={() => toggleAccordion('purchaseHistory')}
      >
        <Text style={styles.emptyText}>No purchase history</Text>
      </Accordion>

      <Accordion
        title="Supplier List"
        isOpen={accordionStates.supplierList}
        onToggle={() => toggleAccordion('supplierList')}
      >
        <Text style={styles.emptyText}>No suppliers</Text>
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
