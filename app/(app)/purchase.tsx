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






















// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Pressable,ScrollView } from 'react-native';
// import { Accordion } from '../../components/Accordion';
// import MyCarousel from '@/components/MyCarousel';


// export default function Purchase() {
//   const [accordionStates, setAccordionStates] = useState({
//     recentOrders: false,
//     pendingDeliveries: false,
//     purchaseHistory: false,
//     supplierList: false,
//   });

//   const toggleAccordion = (key: keyof typeof accordionStates) => {
//     setAccordionStates((prev) => ({
//       ...prev,
//       [key]: !prev[key],
//     }));
//   };

//   const expandAll = () => {
//     setAccordionStates({
//       recentOrders: true,
//       pendingDeliveries: true,
//       purchaseHistory: true,
//       supplierList: true,
//     });
//   };

//   const collapseAll = () => {
//     setAccordionStates({
//       recentOrders: false,
//       pendingDeliveries: false,
//       purchaseHistory: false,
//       supplierList: false,
//     });
//   };

//   return (
//     <ScrollView>
//       <MyCarousel />
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>Purchase</Text>
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
//         title="Recent Orders"
//         isOpen={accordionStates.recentOrders}
//         onToggle={() => toggleAccordion('recentOrders')}
//       >
//         <Text style={styles.emptyText}>No recent orders</Text>
//       </Accordion>

//       <Accordion
//         title="Pending Deliveries"
//         isOpen={accordionStates.pendingDeliveries}
//         onToggle={() => toggleAccordion('pendingDeliveries')}
//       >
//         <Text style={styles.emptyText}>No pending deliveries</Text>
//       </Accordion>

//       <Accordion
//         title="Purchase History"
//         isOpen={accordionStates.purchaseHistory}
//         onToggle={() => toggleAccordion('purchaseHistory')}
//       >
//         <Text style={styles.emptyText}>No purchase history</Text>
//       </Accordion>

//       <Accordion
//         title="Supplier List"
//         isOpen={accordionStates.supplierList}
//         onToggle={() => toggleAccordion('supplierList')}
//       >
//         <Text style={styles.emptyText}>No suppliers</Text>
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

























import React, { useEffect, useState } from 'react';
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

interface StockItem {
  PTYPE: string;
  ProdName: string;
  QTY: number;
  AMOUNT: number;
  SAMOUNT: number;
}


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
  const [loading, setLoading] = useState(false);
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


  const dateFormat = (date: Date): string => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };



    // Data states mapped to each accordion
    const [commodityPurchaseData, setCommodityPurchaseData] = useState<StockItem[]>([]);
  const [productPurchaseData, setProductPurchaseData] = useState<StockItem[]>([]);
  const [dealerPurchaseData, setDealerPurchaseData] = useState<StockItem[]>([]);
  const [hsnPurchaseData, setHSNPurchaseData] = useState<StockItem[]>([]);
  const [brandPurchaseData, setBrandPurchaseData] = useState<StockItem[]>([]);
  const [taxPurchaseData, setTaxPurchaseData] = useState<StockItem[]>([]);


  const fetchCommodityPurchase = async (): Promise<void> => {
    const formattedStartDate = encodeURIComponent(dateFormat(startDate));
    const formattedEndDate = encodeURIComponent(dateFormat(endDate));
    const url = `http://www.textileerp.timeserasoftware.in/api/ERP/GetCommodityPurchase?startDate=${formattedStartDate}&endDate=${formattedEndDate}`;
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          accept: '*/*',
          tenantName: 'Hq975eIDSVP1hfE9exLODw=='
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data: StockItem[] = await response.json();
      setCommodityPurchaseData(data);
      console.log('Fetched commodity purchase data:', data);
    } catch (error) {
      console.error('Error fetching commodity purchase data:', error);
    }
  };

  const fetchProductPurchase = async (): Promise<void> => {
    const formattedStartDate = encodeURIComponent(dateFormat(startDate));
    const formattedEndDate = encodeURIComponent(dateFormat(endDate));
    const url = `http://www.textileerp.timeserasoftware.in/api/ERP/GetProductWisePurchase?startDate=${formattedStartDate}&endDate=${formattedEndDate}`;
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          accept: '*/*',
          tenantName: 'Hq975eIDSVP1hfE9exLODw=='
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data: StockItem[] = await response.json();
      setProductPurchaseData(data);
      console.log('Fetched product purchase data:', data);
    } catch (error) {
      console.error('Error fetching product purchase data:', error);
    }
  };

  const fetchDealerPurchase = async (): Promise<void> => {
    const formattedStartDate = encodeURIComponent(dateFormat(startDate));
    const formattedEndDate = encodeURIComponent(dateFormat(endDate));
    const url = `http://www.textileerp.timeserasoftware.in/api/ERP/GetDealerWisePurchase?startDate=${formattedStartDate}&endDate=${formattedEndDate}`;
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          accept: '*/*',
          tenantName: 'Hq975eIDSVP1hfE9exLODw=='
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data: StockItem[] = await response.json();
      setDealerPurchaseData(data);
      console.log('Fetched dealer purchase data:', data);
    } catch (error) {
      console.error('Error fetching dealer purchase data:', error);
    }
  };

  const fetchHsnPurchase = async (): Promise<void> => {
    const formattedStartDate = encodeURIComponent(dateFormat(startDate));
    const formattedEndDate = encodeURIComponent(dateFormat(endDate));
    const url = `http://www.textileerp.timeserasoftware.in/api/ERP/GetHSNWisePurchase?startDate=${formattedStartDate}&endDate=${formattedEndDate}`;
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          accept: '*/*',
          tenantName: 'Hq975eIDSVP1hfE9exLODw=='
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data: StockItem[] = await response.json();
      setHSNPurchaseData(data);
      console.log('Fetched HSN purchase data:', data);
    } catch (error) {
      console.error('Error fetching HSN purchase data:', error);
    }
  };

  const fetchBrandPurchase = async (): Promise<void> => {
    const formattedStartDate = encodeURIComponent(dateFormat(startDate));
    const formattedEndDate = encodeURIComponent(dateFormat(endDate));
    const url = `http://www.textileerp.timeserasoftware.in/api/ERP/GetBrandWisePurchase?startDate=${formattedStartDate}&endDate=${formattedEndDate}`;
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          accept: '*/*',
          tenantName: 'Hq975eIDSVP1hfE9exLODw=='
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data: StockItem[] = await response.json();
      setBrandPurchaseData(data);
      console.log('Fetched brand purchase data:', data);
    } catch (error) {
      console.error('Error fetching brand purchase data:', error);
    }
  };

  const fetchTaxPurchase = async (): Promise<void> => {
    const formattedStartDate = encodeURIComponent(dateFormat(startDate));
    const formattedEndDate = encodeURIComponent(dateFormat(endDate));
    const url = `http://www.textileerp.timeserasoftware.in/api/ERP/GetTaxWisePurchase?startDate=${formattedStartDate}&endDate=${formattedEndDate}`;
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          accept: '*/*',
          tenantName: 'Hq975eIDSVP1hfE9exLODw=='
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data: StockItem[] = await response.json();
      setTaxPurchaseData(data);
      console.log('Fetched tax purchase data:', data);
    } catch (error) {
      console.error('Error fetching tax purchase data:', error);
    }
  };



  useEffect(()=>{
    console.log("venkat")
    console.log(dateFormat(startDate),"hloo")
  },[startDate,endDate])


  return (
    <ScrollView style={styles.scrollView}>
      <MyCarousel />
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.titleRow}>
            <Text style={styles.headerTitle}>Purchase Plan</Text>
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
        <Accordion title="Commodity Wise Purchase" isOpen={accordionStates.outstandingCustomers} onToggle={() => toggleAccordion('outstandingCustomers')}>
          <Text style={styles.emptyText}></Text>
        </Accordion>

        <Accordion title="Product Wise purchase" isOpen={accordionStates.outstandingDealers} onToggle={() => toggleAccordion('outstandingDealers')}>
          <Text style={styles.emptyText}></Text>
        </Accordion>

        <Accordion title="Dealer Wise purchase" isOpen={accordionStates.cashBook} onToggle={() => toggleAccordion('cashBook')}>
          <Text style={styles.emptyText}></Text>
        </Accordion>

        <Accordion title="HSN Wise purchase" isOpen={accordionStates.bankStatement} onToggle={() => toggleAccordion('bankStatement')}>
          <Text style={styles.emptyText}></Text>
        </Accordion>

        <Accordion title="Brand Wise purchase" isOpen={accordionStates.bankStatement} onToggle={() => toggleAccordion('bankStatement')}>
          <Text style={styles.emptyText}></Text>
        </Accordion>

        <Accordion title="Tax Wise purchase" isOpen={accordionStates.bankStatement} onToggle={() => toggleAccordion('bankStatement')}>
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














