// // import React from 'react';
// // import { View, Text, StyleSheet, Pressable } from 'react-native';
// // import { Accordion } from '../../components/Accordion';

// // export default function Accounts() {
// //   return (
// //     <View style={styles.container}>
// //       <View style={styles.header}>
// //         <Text style={styles.headerTitle}>Accounts</Text>
// //         <View style={styles.buttonContainer}>
// //           <Pressable style={styles.button}>
// //             <Text style={styles.buttonText}>Expand All</Text>
// //           </Pressable>
// //           <Pressable style={[styles.button, styles.collapseButton]}>
// //             <Text style={styles.buttonText}>Collapse All</Text>
// //           </Pressable>
// //         </View>
// //       </View>

// //       <Accordion title="Recent Transactions">
// //         <Text style={styles.emptyText}>No recent transactions</Text>
// //       </Accordion>

// //       <Accordion title="Pending Payments">
// //         <Text style={styles.emptyText}>No pending payments</Text>
// //       </Accordion>

// //       <Accordion title="Account Balance">
// //         <Text style={styles.emptyText}>No balance information</Text>
// //       </Accordion>

// //       <Accordion title="Financial Reports">
// //         <Text style={styles.emptyText}>No reports available</Text>
// //       </Accordion>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#f3f4f6',
// //     padding: 16,
// //   },
// //   header: {
// //     marginBottom: 24,
// //   },
// //   headerTitle: {
// //     fontSize: 24,
// //     fontWeight: '600',
// //     color: '#1e40af',
// //     marginBottom: 16,
// //   },
// //   buttonContainer: {
// //     flexDirection: 'row',
// //     gap: 12,
// //   },
// //   button: {
// //     backgroundColor: '#4ade80',
// //     paddingHorizontal: 16,
// //     paddingVertical: 8,
// //     borderRadius: 6,
// //   },
// //   collapseButton: {
// //     backgroundColor: '#ef4444',
// //   },
// //   buttonText: {
// //     color: '#ffffff',
// //     fontWeight: '500',
// //   },
// //   emptyText: {
// //     color: '#6b7280',
// //     fontStyle: 'italic',
// //   },
// // });


















// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Pressable,ScrollView } from 'react-native';
// import { Accordion } from '../../components/Accordion';
// import  MyCarousel from '@/components/MyCarousel';
// // import { ScrollView } from 'react-native-gesture-handler';

// export default function Accounts() {
//   const [accordionStates, setAccordionStates] = useState({
//     recentTransactions: false,
//     pendingPayments: false,
//     accountBalance: false,
//     financialReports: false,
//   });

//   const toggleAccordion = (key: keyof typeof accordionStates) => {
//     setAccordionStates((prev) => ({
//       ...prev,
//       [key]: !prev[key],
//     }));
//   };

//   const expandAll = () => {
//     setAccordionStates({
//       recentTransactions: true,
//       pendingPayments: true,
//       accountBalance: true,
//       financialReports: true,
//     });
//   };

//   const collapseAll = () => {
//     setAccordionStates({
//       recentTransactions: false,
//       pendingPayments: false,
//       accountBalance: false,
//       financialReports: false,
//     });
//   };

//   return (
//     <ScrollView>
//     <MyCarousel/>
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>Accounts</Text>
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
//         title="Recent Transactions"
//         isOpen={accordionStates.recentTransactions}
//         onToggle={() => toggleAccordion('recentTransactions')}
//       >
//         <Text style={styles.emptyText}>No recent transactions</Text>
//       </Accordion>

//       <Accordion 
//         title="Pending Payments"
//         isOpen={accordionStates.pendingPayments}
//         onToggle={() => toggleAccordion('pendingPayments')}
//       >
//         <Text style={styles.emptyText}>No pending payments</Text>
//       </Accordion>

//       <Accordion 
//         title="Account Balance"
//         isOpen={accordionStates.accountBalance}
//         onToggle={() => toggleAccordion('accountBalance')}
//       >
//         <Text style={styles.emptyText}>No balance information</Text>
//       </Accordion>

//       <Accordion 
//         title="Financial Reports"
//         isOpen={accordionStates.financialReports}
//         onToggle={() => toggleAccordion('financialReports')}
//       >
//         <Text style={styles.emptyText}>No reports available</Text>
//       </Accordion>
//     </View>
//     </ScrollView>
//     // <View style={styles.container}>
//     //   <View style={styles.header}>
//     //     <Text style={styles.headerTitle}>Accounts</Text>
//     //     <View style={styles.buttonContainer}>
//     //       <Pressable style={styles.button} onPress={expandAll}>
//     //         <Text style={styles.buttonText}>Expand All</Text>
//     //       </Pressable>
//     //       <Pressable style={[styles.button, styles.collapseButton]} onPress={collapseAll}>
//     //         <Text style={styles.buttonText}>Collapse All</Text>
//     //       </Pressable>
//     //     </View>
//     //   </View>

//     //   <Accordion 
//     //     title="Recent Transactions"
//     //     isOpen={accordionStates.recentTransactions}
//     //     onToggle={() => toggleAccordion('recentTransactions')}
//     //   >
//     //     <Text style={styles.emptyText}>No recent transactions</Text>
//     //   </Accordion>

//     //   <Accordion 
//     //     title="Pending Payments"
//     //     isOpen={accordionStates.pendingPayments}
//     //     onToggle={() => toggleAccordion('pendingPayments')}
//     //   >
//     //     <Text style={styles.emptyText}>No pending payments</Text>
//     //   </Accordion>

//     //   <Accordion 
//     //     title="Account Balance"
//     //     isOpen={accordionStates.accountBalance}
//     //     onToggle={() => toggleAccordion('accountBalance')}
//     //   >
//     //     <Text style={styles.emptyText}>No balance information</Text>
//     //   </Accordion>

//     //   <Accordion 
//     //     title="Financial Reports"
//     //     isOpen={accordionStates.financialReports}
//     //     onToggle={() => toggleAccordion('financialReports')}
//     //   >
//     //     <Text style={styles.emptyText}>No reports available</Text>
//     //   </Accordion>
//     // </View>
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



























// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Pressable, ScrollView, TextInput } from 'react-native';
// import { Accordion } from '../../components/Accordion';
// import MyCarousel from '@/components/MyCarousel';
// import { Picker } from '@react-native-picker/picker';

// export default function Accounts() {
//   const [accordionStates, setAccordionStates] = useState({
//     outstandingCustomers: false,
//     outstandingDealers: false,
//     cashBook: false,
//     bankStatement: false,
//     receiptsRegister: false,
//     paymentsRegister: false,
//     purchaseRegister: false,
//     journalRegister: false,
//   });

//   const [selectedBank, setSelectedBank] = useState('123');
//   const [startDate, setStartDate] = useState('22/02/2025');
//   const [endDate, setEndDate] = useState('22/02/2025');

//   const toggleAccordion = (key: keyof typeof accordionStates) => {
//     setAccordionStates((prev) => ({
//       ...prev,
//       [key]: !prev[key],
//     }));
//   };

//   const expandAll = () => {
//     const newState = Object.keys(accordionStates).reduce((acc, key) => {
//       acc[key as keyof typeof accordionStates] = true;
//       return acc;
//     }, {} as typeof accordionStates);
//     setAccordionStates(newState);
//   };

//   const collapseAll = () => {
//     const newState = Object.keys(accordionStates).reduce((acc, key) => {
//       acc[key as keyof typeof accordionStates] = false;
//       return acc;
//     }, {} as typeof accordionStates);
//     setAccordionStates(newState);
//   };

//   return (
//     <ScrollView style={styles.scrollView}>
//       <MyCarousel />
//       <View style={styles.container}>
//         <View style={styles.header}>
//           <View style={styles.titleRow}>
//             <View style={styles.titleContainer}>
//               <Text style={styles.headerTitle}>Accounts</Text>
//             </View>
//             <View style={styles.buttonContainer}>
//               <Pressable style={styles.expandButton} onPress={expandAll}>
//                 <Text style={styles.buttonText}>Expand All +</Text>
//               </Pressable>
//               <Pressable style={styles.collapseButton} onPress={collapseAll}>
//                 <Text style={styles.buttonText}>Collapse All -</Text>
//               </Pressable>
//             </View>
//           </View>

//           <View style={styles.openingBalances}>
//             <View style={styles.balanceBox}>
//               <Text style={styles.balanceText}>Cash Opening: ₹1286697.00</Text>
//             </View>
//             <View style={styles.balanceBox}>
//               <Text style={styles.balanceText}>Bank Opening: ₹513919.00</Text>
//             </View>
//           </View>

//           <View style={styles.filters}>
//             <View style={styles.bankSelect}>
//               <Text style={styles.filterLabel}>Select Bank Acc:</Text>
//               <View style={styles.pickerContainer}>
//                 <Picker
//                   selectedValue={selectedBank}
//                   onValueChange={(value) => setSelectedBank(value)}
//                   style={styles.picker}
//                 >
//                   <Picker.Item label="123" value="123" />
//                 </Picker>
//               </View>
//             </View>

//             <View style={styles.dateContainer}>
//               <TextInput
//                 style={styles.dateInput}
//                 value={startDate}
//                 onChangeText={setStartDate}
//                 placeholder="Start Date"
//               />
//               <TextInput
//                 style={styles.dateInput}
//                 value={endDate}
//                 onChangeText={setEndDate}
//                 placeholder="End Date"
//               />
//             </View>
//           </View>
//         </View>

//         <Accordion
//           title="Outstanding Customers"
//           isOpen={accordionStates.outstandingCustomers}
//           onToggle={() => toggleAccordion('outstandingCustomers')}
//         >
//           <Text style={styles.emptyText}>No outstanding customers</Text>
//         </Accordion>

//         <Accordion
//           title="Outstanding Dealers"
//           isOpen={accordionStates.outstandingDealers}
//           onToggle={() => toggleAccordion('outstandingDealers')}
//         >
//           <Text style={styles.emptyText}>No outstanding dealers</Text>
//         </Accordion>

//         <Accordion
//           title="Cash Book"
//           isOpen={accordionStates.cashBook}
//           onToggle={() => toggleAccordion('cashBook')}
//         >
//           <Text style={styles.emptyText}>No cash book entries</Text>
//         </Accordion>

//         <Accordion
//           title="Bank Statement"
//           isOpen={accordionStates.bankStatement}
//           onToggle={() => toggleAccordion('bankStatement')}
//         >
//           <Text style={styles.emptyText}>No bank statement entries</Text>
//         </Accordion>

//         <Accordion
//           title="Receipts Register"
//           isOpen={accordionStates.receiptsRegister}
//           onToggle={() => toggleAccordion('receiptsRegister')}
//         >
//           <Text style={styles.emptyText}>No receipts</Text>
//         </Accordion>

//         <Accordion
//           title="Payments Register"
//           isOpen={accordionStates.paymentsRegister}
//           onToggle={() => toggleAccordion('paymentsRegister')}
//         >
//           <Text style={styles.emptyText}>No payments</Text>
//         </Accordion>

//         <Accordion
//           title="Purchase Register"
//           isOpen={accordionStates.purchaseRegister}
//           onToggle={() => toggleAccordion('purchaseRegister')}
//         >
//           <Text style={styles.emptyText}>No purchases</Text>
//         </Accordion>

//         <Accordion
//           title="Journal Register"
//           isOpen={accordionStates.journalRegister}
//           onToggle={() => toggleAccordion('journalRegister')}
//         >
//           <Text style={styles.emptyText}>No journal entries</Text>
//         </Accordion>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   scrollView: {
//     flex: 1,
//     backgroundColor: '#f3f4f6',
//   },
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   header: {
//     marginBottom: 24,
//   },
//   titleRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   titleContainer: {
//     flex: 1,
//   },
//   headerTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: '#1e3a8a',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     gap: 8,
//   },
//   expandButton: {
//     backgroundColor: '#10b981',
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 4,
//   },
//   collapseButton: {
//     backgroundColor: '#10b981',
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 4,
//   },
//   buttonText: {
//     color: '#ffffff',
//     fontWeight: '500',
//     fontSize: 14,
//   },
//   openingBalances: {
//     gap: 8,
//     marginBottom: 16,
//   },
//   balanceBox: {
//     backgroundColor: '#ffffff',
//     padding: 12,
//     borderRadius: 4,
//     borderWidth: 1,
//     borderColor: '#e5e7eb',
//   },
//   balanceText: {
//     fontSize: 16,
//     color: '#1f2937',
//   },
//   filters: {
//     gap: 12,
//   },
//   bankSelect: {
//     marginBottom: 8,
//   },
//   filterLabel: {
//     fontSize: 16,
//     color: '#374151',
//     marginBottom: 4,
//   },
//   pickerContainer: {
//     backgroundColor: '#ffffff',
//     borderRadius: 4,
//     borderWidth: 1,
//     borderColor: '#e5e7eb',
//     overflow: 'hidden',
//   },
//   picker: {
//     height: 40,
//   },
//   dateContainer: {
//     flexDirection: 'row',
//     gap: 8,
//   },
//   dateInput: {
//     flex: 1,
//     backgroundColor: '#ffffff',
//     borderRadius: 4,
//     borderWidth: 1,
//     borderColor: '#e5e7eb',
//     padding: 8,
//     height: 40,
//   },
//   emptyText: {
//     color: '#6b7280',
//     fontStyle: 'italic',
//   },
// });




























import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  TextInput,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import { Accordion } from '../../components/Accordion';
import MyCarousel from '@/components/MyCarousel';

export default function Accounts() {
  const [accordionStates, setAccordionStates] = useState({
    outstandingCustomers: false,
    outstandingDealers: false,
    cashBook: false,
    bankStatement: false,
    receiptsRegister: false,
    paymentsRegister: false,
    purchaseRegister: false,
    journalRegister: false,
  });

  const [selectedBank, setSelectedBank] = useState('123');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);

  const toggleAccordion = (key: keyof typeof accordionStates) => {
    setAccordionStates((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const expandAll = () => {
    setAccordionStates(Object.keys(accordionStates).reduce((acc, key) => {
      acc[key as keyof typeof accordionStates] = true;
      return acc;
    }, {} as typeof accordionStates));
  };

  const collapseAll = () => {
    setAccordionStates(Object.keys(accordionStates).reduce((acc, key) => {
      acc[key as keyof typeof accordionStates] = false;
      return acc;
    }, {} as typeof accordionStates));
  };

  return (
    <ScrollView style={styles.scrollView}>
      <MyCarousel />
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.titleRow}>
            <Text style={styles.headerTitle}>Accounts</Text>
            <View style={styles.buttonContainer}>
              <Pressable style={styles.expandButton} onPress={expandAll}>
                <Text style={styles.buttonText}>Expand All +</Text>
              </Pressable>
              <Pressable style={styles.collapseButton} onPress={collapseAll}>
                <Text style={styles.buttonText}>Collapse All -</Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.openingBalances}>
            <View style={styles.balanceBox}>
              <Text style={styles.balanceText}>Cash Opening: ₹1,286,697.00</Text>
            </View>
            <View style={styles.balanceBox}>
              <Text style={[styles.balanceText, styles.bankText]}>Bank Opening: ₹513,919.00</Text>
            </View>
          </View>

          <View style={styles.filters}>
            {/* Bank Account Picker */}
            <View style={styles.bankSelect}>
              <Text style={styles.filterLabel}>Select Bank Acc:</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={selectedBank}
                  onValueChange={(value) => setSelectedBank(value)}
                  style={styles.picker}
                >
                  <Picker.Item label="123 - HDFC Bank" value="123" />
                  <Picker.Item label="456 - SBI Bank" value="456" />
                  <Picker.Item label="789 - ICICI Bank" value="789" />
                </Picker>
              </View>
            </View>

            {/* Date Pickers */}
            <View style={styles.dateContainer}>
              <Pressable onPress={() => setShowStartPicker(true)} style={styles.dateInput}>
                <Text>{startDate.toLocaleDateString()}</Text>
              </Pressable>
              <Pressable onPress={() => setShowEndPicker(true)} style={styles.dateInput}>
                <Text>{endDate.toLocaleDateString()}</Text>
              </Pressable>
            </View>

            {/* Start Date Picker */}
            {showStartPicker && (
              <DateTimePicker
                value={startDate}
                mode="date"
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                onChange={(event, date) => {
                  setShowStartPicker(false);
                  if (date) setStartDate(date);
                }}
              />
            )}

            {/* End Date Picker */}
            {showEndPicker && (
              <DateTimePicker
                value={endDate}
                mode="date"
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                onChange={(event, date) => {
                  setShowEndPicker(false);
                  if (date) setEndDate(date);
                }}
              />
            )}
          </View>
        </View>

        {/* Accordions */}
        <Accordion title="Outstanding Customers" isOpen={accordionStates.outstandingCustomers} onToggle={() => toggleAccordion('outstandingCustomers')}>
          <Text style={styles.emptyText}>No outstanding customers</Text>
        </Accordion>

        <Accordion title="Outstanding Dealers" isOpen={accordionStates.outstandingDealers} onToggle={() => toggleAccordion('outstandingDealers')}>
          <Text style={styles.emptyText}>No outstanding dealers</Text>
        </Accordion>

        <Accordion title="Cash Book" isOpen={accordionStates.cashBook} onToggle={() => toggleAccordion('cashBook')}>
          <Text style={styles.emptyText}>No cash book entries</Text>
        </Accordion>

        <Accordion title="Bank Statement" isOpen={accordionStates.bankStatement} onToggle={() => toggleAccordion('bankStatement')}>
          <Text style={styles.emptyText}>No bank statement entries</Text>
        </Accordion>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: { flex: 1, backgroundColor: '#f3f4f6' },
  container: { flex: 1, padding: 16 },
  header: { marginBottom: 24 },
  titleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  headerTitle: { fontSize: 24, fontWeight: '600', color: '#1e3a8a' },
  buttonContainer: { flexDirection: 'row', gap: 8 },
  expandButton: { backgroundColor: '#10b981', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 4 },
  collapseButton: { backgroundColor: '#ef4444', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 4 },
  buttonText: { color: '#ffffff', fontWeight: '500', fontSize: 14 },
  openingBalances: { gap: 8, marginBottom: 16 },
  balanceBox: { backgroundColor: '#ffffff', padding: 12, borderRadius: 4, borderWidth: 1, borderColor: '#e5e7eb' },
  balanceText: { fontSize: 18, color: '#1f2937' },
  bankText: { fontSize: 20, fontWeight: 'bold' },
  filters: { gap: 12 },
  bankSelect: { marginBottom: 8 },
  filterLabel: { fontSize: 16, color: '#374151', marginBottom: 4 },
  pickerContainer: { backgroundColor: '#ffffff', borderRadius: 4, borderWidth: 1, borderColor: '#e5e7eb', overflow: 'hidden' },
  picker: { height: 40 },
  dateContainer: { flexDirection: 'row', gap: 8 },
  dateInput: { flex: 1, backgroundColor: '#ffffff', borderRadius: 4, borderWidth: 1, borderColor: '#e5e7eb', padding: 10, alignItems: 'center' },
  emptyText: { color: '#6b7280', fontStyle: 'italic' },
});

