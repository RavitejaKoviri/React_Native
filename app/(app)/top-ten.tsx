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

























// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Pressable,ScrollView } from 'react-native';
// import { Accordion } from '../../components/Accordion';
// import MyCarousel from '@/components/MyCarousel';


// export default function TopTen() {
//   const [accordionStates, setAccordionStates] = useState({
//     topCustomers: false,
//     topProducts: false,
//     topSales: false,
//     topSuppliers: false,
//   });

//   const toggleAccordion = (key: keyof typeof accordionStates) => {
//     setAccordionStates((prev) => ({
//       ...prev,
//       [key]: !prev[key],
//     }));
//   };

//   const expandAll = () => {
//     setAccordionStates({
//       topCustomers: true,
//       topProducts: true,
//       topSales: true,
//       topSuppliers: true,
//     });
//   };

//   const collapseAll = () => {
//     setAccordionStates({
//       topCustomers: false,
//       topProducts: false,
//       topSales: false,
//       topSuppliers: false,
//     });
//   };

//   return (
//     <ScrollView>
//     <MyCarousel/>
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>Top 10</Text>
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
//         title="Top 5 Customers"
//         isOpen={accordionStates.topCustomers}
//         onToggle={() => toggleAccordion('topCustomers')}
//       >
//         <Text style={styles.emptyText}>No data available</Text>
//       </Accordion>

//       <Accordion
//         title="Top 5 Products"
//         isOpen={accordionStates.topProducts}
//         onToggle={() => toggleAccordion('topProducts')}
//       >
//         <Text style={styles.emptyText}>No data available</Text>
//       </Accordion>

//       <Accordion
//         title="Top 5 Sales"
//         isOpen={accordionStates.topSales}
//         onToggle={() => toggleAccordion('topSales')}
//       >
//         <Text style={styles.emptyText}>No data available</Text>
//       </Accordion>

//       <Accordion
//         title="Top 5 Suppliers"
//         isOpen={accordionStates.topSuppliers}
//         onToggle={() => toggleAccordion('topSuppliers')}
//       >
//         <Text style={styles.emptyText}>No data available</Text>
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
  const [selectedBank, setSelectedBank] = useState('123');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);

  const [brands,setBrands] = useState([]);
  const [topPrices, setTopPrices] = useState([]);
  const [salesMan, setSalesMan] = useState([]);
  const [topProducts, setTopProducts] = useState([]);
  const [topbills, setTopBills] = useState([]);


  const dateFormat = (date: Date): string => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };
  

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

  const fetchTopBills = async () => {
    setLoading(true);
    const formattedStartDate = encodeURIComponent(dateFormat(startDate));
    const formattedEndDate = encodeURIComponent(dateFormat(endDate));
    const url = `http://www.textileerp.timeserasoftware.in/api/ERP/GetTopTenBills?billStartDate=${formattedStartDate}&billEndDate=${formattedEndDate}`;
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          accept: "*/*",
          tenantName: "Hq975eIDSVP1hfE9exLODw==",
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      setTopBills(data);
      console.log("Fetched Top Bills Data:", data);
    } catch (error) {
      console.error("Error fetching Outstanding Customers:", error);
    } finally {
      setLoading(false);
    }
  };
  

  
  const fetchTopBrands = async () => {
    const formattedStartDate = encodeURIComponent(dateFormat(startDate));
    const formattedEndDate = encodeURIComponent(dateFormat(endDate));
    setLoading(true);
    const url = `http://www.textileerp.timeserasoftware.in/api/ERP/GetTopTenBrands?billStartDate=${formattedStartDate}&billEndDate=${formattedEndDate}`;
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          accept: "*/*",
          tenantName: "Hq975eIDSVP1hfE9exLODw==",
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("Fetched Top brands:", data);
      setBrands(data);
    } catch (error) {
      console.error("Error fetching Cash Book:", error);
    } finally {
      setLoading(false);
    }
  };
  
  const fetchSalesMan = async () => {
    const formattedStartDate = encodeURIComponent(dateFormat(startDate));
    const formattedEndDate = encodeURIComponent(dateFormat(endDate));
    setLoading(true);
    const url = `http://www.textileerp.timeserasoftware.in/api/ERP/GetTopTenSalesMan?billStartDate=${formattedStartDate}&billEndDate=${formattedEndDate}`;
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          accept: "*/*",
          tenantName: "Hq975eIDSVP1hfE9exLODw==",
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("Fetched Sales Man:", data);
      setSalesMan(data);
    } catch (error) {
      console.error("Error fetching Sales Man:", error);
    } finally {
      setLoading(false);
    }
  };
  
  const fetchTopPrices = async () => {
    const formattedStartDate = encodeURIComponent(dateFormat(startDate));
    const formattedEndDate = encodeURIComponent(dateFormat(endDate));
    setLoading(true);
    const url = `http://www.textileerp.timeserasoftware.in/api/ERP/GetTopTenPrice?billStartDate=${formattedStartDate}&billEndDate=${formattedEndDate}`;
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          accept: "*/*",
          tenantName: "Hq975eIDSVP1hfE9exLODw==",        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      setTopPrices(data);
      console.log("Fetched Top prices :", data);
    } catch (error) {
      console.error("Error fetching Top Products:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchTopProducts = async () => {
    const formattedStartDate = encodeURIComponent(dateFormat(startDate));
    const formattedEndDate = encodeURIComponent(dateFormat(endDate));
    setLoading(true);
    const url = `http://www.textileerp.timeserasoftware.in/api/ERP/GetTopTenProducts?billStartDate=${formattedStartDate}&billEndDate=${formattedEndDate}&pType=24`;
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          accept: "*/*",
          tenantName: "Hq975eIDSVP1hfE9exLODw==",        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      setTopProducts(data);
      console.log("Fetched Top products :", data);
    } catch (error) {
      console.error("Error fetching Top Products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(()=>{
    fetchSalesMan();
    fetchTopBrands();
    fetchTopPrices();
    fetchTopBills();
    fetchTopProducts()

    console.log(dateFormat(startDate))

  },[startDate,endDate])
  

  return (
    <ScrollView style={styles.scrollView}>
      <MyCarousel />
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.titleRow}>
            <Text style={styles.headerTitle}>Top 10</Text>
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
            {/* <View style={styles.dateContainer}>
              <Pressable onPress={() => setShowStartPicker(true)} style={styles.dateInput}>
                <Text>{startDate.toLocaleDateString()}</Text>
              </Pressable>
              <Pressable onPress={() => setShowEndPicker(true)} style={styles.dateInput}>
                <Text>{endDate.toLocaleDateString()}</Text>
              </Pressable>
            </View> */}

            {/* Start Date Picker */}
            {/* {showStartPicker && (
              <DateTimePicker
                value={startDate}
                mode="date"
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                onChange={(event, date) => {
                  setShowStartPicker(false);
                  if (date) setStartDate(date);
                }}
              />
            )} */}

            {/* End Date Picker */}
            {/* {showEndPicker && (
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
          </View> */}

<View style={styles.dateContainer}>
            <Pressable onPress={() => setShowStartPicker(true)} style={styles.dateInput}>
              <Text>{startDate.toLocaleDateString()}</Text>
            </Pressable>
            <Pressable onPress={() => setShowEndPicker(true)} style={styles.dateInput}>
              <Text>{endDate.toLocaleDateString()}</Text>
            </Pressable>
          </View>
          {showStartPicker && (
            <DateTimePicker
              value={startDate}
              mode="date"
              display="default"
              onChange={(event, date) => {
                setShowStartPicker(false);
                if (date) setStartDate(date);
              }}
            />
          )}
          {showEndPicker && (
            <DateTimePicker
              value={endDate}
              mode="date"
              display="default"
              onChange={(event, date) => {
                setShowEndPicker(false);
                if (date) setEndDate(date);
              }}
            />
          )}
        </View>
        </View>

{/* 
        const [brands,setBrands] = useState([]);
  const [topPrices, setTopPrices] = useState([]);
  const [salesMan, setSalesMan] = useState([]);
  const [topProducts, setTopProducts] = useState([]);
  const [topbills, setTopBills] = useState([]); */}

        {/* Accordions */}
        <Accordion 
            title="Top 10 Bills" 
            isOpen={accordionStates.outstandingCustomers} 
            onToggle={() => toggleAccordion('outstandingCustomers')}
          >
            {loading ? (
              <Text style={styles.emptyText}>Loading...</Text>
            ) : topbills.length > 0 ? (
              topbills.map((item, index) => (
                <View key={index} style={styles.stockItem}>
                  <Text style={styles.stockText}>Bill No: {item.billno}</Text>
                  <Text style={styles.stockText}>Bill Date: {new Date(item.billdate).toLocaleDateString()}</Text>
                  <Text style={styles.stockText}>Customer Name: {item.CustName}</Text>
                  <Text style={styles.stockText}>Quantity: {item.QTY}</Text>
                  <Text style={styles.stockText}>Total Amount: {item.AMOUNT}</Text>
                  <Text style={styles.stockText}>GST Amount: {item.GSTAMT}</Text>
                  <Text style={styles.stockText}>Basic Amount: {item.BASICAMT}</Text>
                  <Text style={styles.stockText}>CGST: {item.CGSTAMT}</Text>
                  <Text style={styles.stockText}>SGST: {item.SGSTAMT}</Text>
                  <Text style={styles.stockText}>IGST: {item.IGSTAMT}</Text>
                </View>
              ))
            ) : (
              <Text style={styles.emptyText}>No purchase type stock data</Text>
            )}
          </Accordion>

          <Accordion 
            title="Top 10 Brands" 
            isOpen={accordionStates.outstandingDealers} 
            onToggle={() => toggleAccordion('outstandingDealers')}
          >
            {loading ? (
              <Text style={styles.emptyText}>Loading...</Text>
            ) : brands.length > 0 ? (
              brands.map((item, index) => (
                <View key={index} style={styles.stockItem}>
                  <Text style={styles.stockText}>Brand Name: {item.COMPNAME}</Text>
                  <Text style={styles.stockText}>Total Sales: {item.AMOUNT}</Text>
                  <Text style={styles.stockText}>Quantity: {item.QTY}</Text>
                </View>
              ))
            ) : (
              <Text style={styles.emptyText}>No brand data available</Text>
            )}
          </Accordion>

          <Accordion 
            title="Top 10 Prices" 
            isOpen={accordionStates.cashBook} 
            onToggle={() => toggleAccordion('cashBook')}
          >
            {loading ? (
              <Text style={styles.emptyText}>Loading...</Text>
            ) : topPrices.length > 0 ? (
              topPrices.map((item, index) => (
                <View key={index} style={styles.stockItem}>
                  <Text style={styles.stockText}>Actual Rate: {item.ACTRATE}</Text>
                  <Text style={styles.stockText}>Total Amount: {item.AMOUNT}</Text>
                  <Text style={styles.stockText}>Quantity: {item.QTY}</Text>
                </View>
              ))
            ) : (
              <Text style={styles.emptyText}>No price data available</Text>
            )}
          </Accordion>

          <Accordion 
            title="Top 10 Sales Man" 
            isOpen={accordionStates.bankStatement} 
            onToggle={() => toggleAccordion('bankStatement')}
          >
            {loading ? (
              <Text style={styles.emptyText}>Loading...</Text>
            ) : salesMan.length > 0 ? (
              salesMan.map((item, index) => (
                <View key={index} style={styles.stockItem}>
                  <Text style={styles.stockText}>Salesman Code: {item.SMCODE}</Text>
                  <Text style={styles.stockText}>Total Sales: {item.AMOUNT}</Text>
                  <Text style={styles.stockText}>Total Quantity Sold: {item.QTY}</Text>
                </View>
              ))
            ) : (
              <Text style={styles.emptyText}>No salesman data available</Text>
            )}
          </Accordion>

          <Accordion 
            title="Top 10 Products" 
            isOpen={accordionStates.bankStatement} 
            onToggle={() => toggleAccordion('bankStatement')}
          >
            {loading ? (
              <Text style={styles.emptyText}>Loading...</Text>
            ) : topProducts.length > 0 ? (
              topProducts.map((item, index) => (
                <View key={index} style={styles.stockItem}>
                  <Text style={styles.stockText}>Product Name: {item.productName}</Text>
                  <Text style={styles.stockText}>Total Sales: {item.totalSales}</Text>
                </View>
              ))
            ) : (
              <Text style={styles.emptyText}>No product data available</Text>
            )}
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
  stockItem: { backgroundColor: '#ffffff', padding: 10, marginBottom: 5, borderRadius: 4, borderWidth: 1, borderColor: '#e5e7eb' },
  stockText: { fontSize: 16, fontWeight: '500' },
});






