// import React from 'react';
// import { View, Text, StyleSheet, Pressable } from 'react-native';
// import { Accordion } from '../../components/Accordion';

// export default function Accounts() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>Accounts</Text>
//         <View style={styles.buttonContainer}>
//           <Pressable style={styles.button}>
//             <Text style={styles.buttonText}>Expand All</Text>
//           </Pressable>
//           <Pressable style={[styles.button, styles.collapseButton]}>
//             <Text style={styles.buttonText}>Collapse All</Text>
//           </Pressable>
//         </View>
//       </View>

//       <Accordion title="Recent Transactions">
//         <Text style={styles.emptyText}>No recent transactions</Text>
//       </Accordion>

//       <Accordion title="Pending Payments">
//         <Text style={styles.emptyText}>No pending payments</Text>
//       </Accordion>

//       <Accordion title="Account Balance">
//         <Text style={styles.emptyText}>No balance information</Text>
//       </Accordion>

//       <Accordion title="Financial Reports">
//         <Text style={styles.emptyText}>No reports available</Text>
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
import  MyCarousel from '@/components/MyCarousel';
// import { ScrollView } from 'react-native-gesture-handler';

export default function Accounts() {
  const [accordionStates, setAccordionStates] = useState({
    recentTransactions: false,
    pendingPayments: false,
    accountBalance: false,
    financialReports: false,
  });

  const toggleAccordion = (key: keyof typeof accordionStates) => {
    setAccordionStates((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const expandAll = () => {
    setAccordionStates({
      recentTransactions: true,
      pendingPayments: true,
      accountBalance: true,
      financialReports: true,
    });
  };

  const collapseAll = () => {
    setAccordionStates({
      recentTransactions: false,
      pendingPayments: false,
      accountBalance: false,
      financialReports: false,
    });
  };

  return (
    <ScrollView>
    <MyCarousel/>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Accounts</Text>
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
        title="Recent Transactions"
        isOpen={accordionStates.recentTransactions}
        onToggle={() => toggleAccordion('recentTransactions')}
      >
        <Text style={styles.emptyText}>No recent transactions</Text>
      </Accordion>

      <Accordion 
        title="Pending Payments"
        isOpen={accordionStates.pendingPayments}
        onToggle={() => toggleAccordion('pendingPayments')}
      >
        <Text style={styles.emptyText}>No pending payments</Text>
      </Accordion>

      <Accordion 
        title="Account Balance"
        isOpen={accordionStates.accountBalance}
        onToggle={() => toggleAccordion('accountBalance')}
      >
        <Text style={styles.emptyText}>No balance information</Text>
      </Accordion>

      <Accordion 
        title="Financial Reports"
        isOpen={accordionStates.financialReports}
        onToggle={() => toggleAccordion('financialReports')}
      >
        <Text style={styles.emptyText}>No reports available</Text>
      </Accordion>
    </View>
    </ScrollView>
    // <View style={styles.container}>
    //   <View style={styles.header}>
    //     <Text style={styles.headerTitle}>Accounts</Text>
    //     <View style={styles.buttonContainer}>
    //       <Pressable style={styles.button} onPress={expandAll}>
    //         <Text style={styles.buttonText}>Expand All</Text>
    //       </Pressable>
    //       <Pressable style={[styles.button, styles.collapseButton]} onPress={collapseAll}>
    //         <Text style={styles.buttonText}>Collapse All</Text>
    //       </Pressable>
    //     </View>
    //   </View>

    //   <Accordion 
    //     title="Recent Transactions"
    //     isOpen={accordionStates.recentTransactions}
    //     onToggle={() => toggleAccordion('recentTransactions')}
    //   >
    //     <Text style={styles.emptyText}>No recent transactions</Text>
    //   </Accordion>

    //   <Accordion 
    //     title="Pending Payments"
    //     isOpen={accordionStates.pendingPayments}
    //     onToggle={() => toggleAccordion('pendingPayments')}
    //   >
    //     <Text style={styles.emptyText}>No pending payments</Text>
    //   </Accordion>

    //   <Accordion 
    //     title="Account Balance"
    //     isOpen={accordionStates.accountBalance}
    //     onToggle={() => toggleAccordion('accountBalance')}
    //   >
    //     <Text style={styles.emptyText}>No balance information</Text>
    //   </Accordion>

    //   <Accordion 
    //     title="Financial Reports"
    //     isOpen={accordionStates.financialReports}
    //     onToggle={() => toggleAccordion('financialReports')}
    //   >
    //     <Text style={styles.emptyText}>No reports available</Text>
    //   </Accordion>
    // </View>
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
