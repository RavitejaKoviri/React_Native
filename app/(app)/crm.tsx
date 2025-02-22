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



























// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Pressable,ScrollView } from 'react-native';
// import { Accordion } from '@/components/Accordion';
// import  MyCarousel from '@/components/MyCarousel'; 



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

//     <ScrollView>
//     <MyCarousel />

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
//     </ScrollView>
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
            <Text style={styles.headerTitle}>CRM</Text>
            <View style={styles.buttonContainer}>
              <Pressable style={styles.expandButton} onPress={expandAll}>
                <Text style={styles.buttonText}>Expand All +</Text>
              </Pressable>
              <Pressable style={styles.collapseButton} onPress={collapseAll}>
                <Text style={styles.buttonText}>Collapse All -</Text>
              </Pressable>
            </View>
          </View>

          {/* <View style={styles.openingBalances}>
            <View style={styles.balanceBox}>
              <Text style={styles.balanceText}>Cash Opening: ₹1,286,697.00</Text>
            </View>
            <View style={styles.balanceBox}>
              <Text style={[styles.balanceText, styles.bankText]}>Bank Opening: ₹513,919.00</Text>
            </View>
          </View> */}

          <View style={styles.filters}>
            {/* Bank Account Picker */}
            {/* <View style={styles.bankSelect}>
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
            </View> */}

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
        <Accordion title="Today Birthdays" isOpen={accordionStates.outstandingCustomers} onToggle={() => toggleAccordion('outstandingCustomers')}>
          <Text style={styles.emptyText}></Text>
        </Accordion>

        <Accordion title="Today Anniversaries" isOpen={accordionStates.outstandingDealers} onToggle={() => toggleAccordion('outstandingDealers')}>
          <Text style={styles.emptyText}></Text>
        </Accordion>

        <Accordion title="Today Dues" isOpen={accordionStates.cashBook} onToggle={() => toggleAccordion('cashBook')}>
          <Text style={styles.emptyText}></Text>
        </Accordion>

        <Accordion title="Total Dues" isOpen={accordionStates.bankStatement} onToggle={() => toggleAccordion('bankStatement')}>
          <Text style={styles.emptyText}></Text>
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







