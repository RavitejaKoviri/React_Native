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





















import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Accordion } from '../../components/Accordion';
import MyCarousel from '@/components/MyCarousel';
import { Picker } from '@react-native-picker/picker';

// Define the interface for a stock item
interface StockItem {
  PTYPE: string;
  ProdName: string;
  QTY: number;
  AMOUNT: number;
  SAMOUNT: number;
}

export default function Inventory() {
  const [accordionStates, setAccordionStates] = useState({
    purchaseTypeStock: false,
    productWiseStock: false,
    hsnWiseStock: false,
    brandWiseStock: false,
    dealerWiseStock: false,
    sizeWiseStock: false,
    inventoryWiseStock: false,
    barCode: false,
    invoiceWiseStock: false,
  });

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [inputData, setInputData] = useState('');

  const [selectedMname, setSelectedMname] = useState('');
  const [selectedPartyname, setSelectedPartyname] = useState('');
  const [invoiceNumber,setInvoiceNumber]= useState('');
 
  const [loading, setLoading] = useState(false);

  const [productWiseStockData, setProductWiseStockData] = useState<StockItem[]>([]);
  const [purchaseTypeStockData, setPurchaseTypeStockData] = useState<StockItem[]>([]);
  const [hsnWiseStockData, setHsnWiseStockData] = useState<StockItem[]>([]);
  const [brandWiseStockData, setBrandWiseStockData] = useState<StockItem[]>([]);
  const [dealerWiseStockData, setDealereWiseStockData] = useState<StockItem[]>([]);
  const [sizeWiseStockData, setSizeWiseStockData] = useState<StockItem[]>([]);
  const [inventoryWiseStockData, setInventoryWiseStockData] = useState<StockItem[]>([]);
  const [invoiceStockData, setInvoiceWiseStockData] = useState<StockItem[]>([]);
  const [barCode, setbarCode] = useState<StockItem[]>([]);

  const toggleAccordion = (key: keyof typeof accordionStates) => {
    setAccordionStates((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const HEADERS = {
    'accept': '*/*',
    'tenantName': 'Hq975eIDSVP1hfE9exLODw=='
  };
  

  const formatDate = (date: Date): string => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const dateFormat = (date: Date): string => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };
  

  const expandAll = () => {
    setAccordionStates({
      purchaseTypeStock: true,
      productWiseStock: true,
      hsnWiseStock: true,
      brandWiseStock: true,
      dealerWiseStock: true,
      sizeWiseStock: true,
      inventoryWiseStock: true,
      barCode: true,
      invoiceWiseStock: true,
    });
  };

  const collapseAll = () => {
    setAccordionStates({
      purchaseTypeStock: false,
      productWiseStock: false,
      hsnWiseStock: false,
      brandWiseStock: false,
      dealerWiseStock: false,
      sizeWiseStock: false,
      inventoryWiseStock: false,
      barCode: false,
      invoiceWiseStock: false,
    });
  };

  const fetchProductWiseStock = async () => {
    const formattedStartDate = encodeURIComponent(formatDate(startDate));
    const formattedEndDate = encodeURIComponent(formatDate(endDate));
    const url = `http://www.textileerp.timeserasoftware.in/api/ERP/GetProductWiseStock?startDate=${formattedStartDate}&endDate=${formattedEndDate}`;
    try {
      setLoading(true);
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'accept': '*/*',
          'tenantName': 'Hq975eIDSVP1hfE9exLODw=='
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data: StockItem[] = await response.json();
      setProductWiseStockData(data);
      console.log("Fetched product wise stock data:", data);
    } catch (error) {
      console.error('Error fetching stock data:', error);
    } finally {
      setLoading(false);
    }
  };


    const fetchPurchaseTypeStock = async () => {
    const formattedStartDate = encodeURIComponent(dateFormat(startDate));
    const formattedEndDate = encodeURIComponent(dateFormat(endDate));
    const url = `http://www.textileerp.timeserasoftware.in/api/ERP/GetPurchaseTypeWiseSales?billStartDate=${formattedStartDate}&billEndDate=${formattedEndDate}`;
    try {
      setLoading(true);
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'accept': '*/*',
          'tenantName': 'Hq975eIDSVP1hfE9exLODw=='
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data: StockItem[] = await response.json();
      setPurchaseTypeStockData(data);
      console.log("Fetched product wise stock data:", data);
    } catch (error) {
      console.error('Error fetching stock data:', error);
    } finally {
      setLoading(false);
    }

  };

  const fetchHsnWiseStock = async () => {
    const formattedStartDate = encodeURIComponent(dateFormat(startDate));
    const formattedEndDate = encodeURIComponent(dateFormat(endDate));
    const url = `http://www.textileerp.timeserasoftware.in/api/ERP/GetHSNdWiseStock?billStartDate=${formattedStartDate}&billEndDate=${formattedEndDate}`;
    try {
      setLoading(true);
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'accept': '*/*',
          'tenantName': 'Hq975eIDSVP1hfE9exLODw=='
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data: StockItem[] = await response.json();
      setHsnWiseStockData(data);
      console.log("Fetched product wise stock data:", data);
    } catch (error) {
      console.error('Error fetching stock data:', error);
    } finally {
      setLoading(false);
    }
  };
  const fetchBrandWiseStock = async () => {
    const formattedStartDate = encodeURIComponent(formatDate(startDate));
    const formattedEndDate = encodeURIComponent(formatDate(endDate));
    const url = `http://www.textileerp.timeserasoftware.in/api/ERP/GetProductWiseStock?startDate=${formattedStartDate}&endDate=${formattedEndDate}`;
    try {
      setLoading(true);
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'accept': '*/*',
          'tenantName': 'Hq975eIDSVP1hfE9exLODw=='
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data: StockItem[] = await response.json();
      setBrandWiseStockData(data);
      console.log("Fetched product wise stock data:", data);
    } catch (error) {
      console.error('Error fetching stock data:', error);
    } finally {
      setLoading(false);
    }
  };
  const fetchDealerWiseStock = async () => {
    const formattedStartDate = encodeURIComponent(formatDate(startDate));
    const formattedEndDate = encodeURIComponent(formatDate(endDate));
    const url = `http://www.textileerp.timeserasoftware.in/api/ERP/GetDLRWiseStock?startDate=${formattedStartDate}&endDate=${formattedEndDate}`;
    try {
      setLoading(true);
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'accept': '*/*',
          'tenantName': 'Hq975eIDSVP1hfE9exLODw=='
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data: StockItem[] = await response.json();
      setDealereWiseStockData(data);
      console.log("Fetched product wise stock data holla:", data);
    } catch (error) {
      console.error('Error fetching stock data:', error);
    } finally {
      setLoading(false);
    }
  };
  const fetchSizeWiseStock = async () => {
    const formattedStartDate = encodeURIComponent(formatDate(startDate));
    const formattedEndDate = encodeURIComponent(formatDate(endDate));
    const url = `http://www.textileerp.timeserasoftware.in/api/ERP/GetProductWiseStock?startDate=${formattedStartDate}&endDate=${formattedEndDate}`;
    try {
      setLoading(true);
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'accept': '*/*',
          'tenantName': 'Hq975eIDSVP1hfE9exLODw=='
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data: StockItem[] = await response.json();
      setSizeWiseStockData(data);
      console.log("Fetched product wise stock data:", data);
    } catch (error) {
      console.error('Error fetching stock data:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchInventoryWiseStock = async () => {
    try {
      setLoading(true);
      const formattedStartDate = encodeURIComponent(dateFormat(startDate));
      const formattedEndDate = encodeURIComponent(dateFormat(endDate));
      
      const response = await fetch(
        `http://www.textileerp.timeserasoftware.in/api/ERP/GetPtypeWiseInvenToryStock?startDate=${formattedStartDate}&endDate=${formattedEndDate}`,
        {
          method: 'GET',
          headers: HEADERS
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setInventoryWiseStockData(data);
    } catch (error) {
      console.error('Error fetching inventory wise stock:', error);
    } finally {
      setLoading(false);
    }
  };


  const fetchInvoiceWiseStock = async () => {
    const formattedStartDate = encodeURIComponent(formatDate(startDate));
    const formattedEndDate = encodeURIComponent(formatDate(endDate));
    const url = `http://www.textileerp.timeserasoftware.in/api/ERP/GetProductWiseStock?startDate=${formattedStartDate}&endDate=${formattedEndDate}`;
    try {
      setLoading(true);
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'accept': '*/*',
          'tenantName': 'Hq975eIDSVP1hfE9exLODw=='
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data: StockItem[] = await response.json();
      setInvoiceWiseStockData(data);
      console.log("Fetched product wise stock data:", data);
    } catch (error) {
      console.error('Error fetching stock data:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchbarCode = async () => {
    const formattedStartDate = encodeURIComponent(dateFormat(startDate));
    const formattedEndDate = encodeURIComponent(dateFormat(endDate));
    const url = `http://www.textileerp.timeserasoftware.in/api/ERP/GetPurchaseTypeWiseSales?billStartDate=${formattedStartDate}&billEndDate=${formattedEndDate}`;
    try {
      setLoading(true);
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'accept': '*/*',
          'tenantName': 'Hq975eIDSVP1hfE9exLODw=='
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data: StockItem[] = await response.json();
      setbarCode(data);
      console.log("Fetched product wise stock data:", data);
    } catch (error) {
      console.error('Error fetching stock data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductWiseStock();
    // fetchBrandWiseStock();
    fetchDealerWiseStock();
    // fetchInvoiceWiseStock();
    // fetchInventoryWiseStock();
    fetchPurchaseTypeStock();
    // fetchSizeWiseStock();
    fetchHsnWiseStock();
    // fetchbarCode();
    console.log(dateFormat(startDate),"uuuuuu");
    console.log(formatDate(startDate),"yeyyeye");
    console.log(dealerWiseStockData,"holla")
   
  }, [startDate,endDate]);

  return (
    <ScrollView>
      <MyCarousel />
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.titleRow}>
            <Text style={styles.headerTitle}>Inventory</Text>
            <View style={styles.buttonContainer}>
              <Pressable style={styles.expandButton} onPress={expandAll}>
                <Text style={styles.buttonText}>Expand All +</Text>
              </Pressable>
              <Pressable style={styles.collapseButton} onPress={collapseAll}>
                <Text style={styles.buttonText}>Collapse All -</Text>
              </Pressable>
            </View>
          </View>
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

        {/* Accordions */}
        <Accordion title="Purchase Type Stock" isOpen={accordionStates.purchaseTypeStock} onToggle={() => toggleAccordion('purchaseTypeStock')}>
        {loading ? (
            <Text style={styles.emptyText}>Loading...</Text>
          ) : purchaseTypeStockData.length > 0 ? (
            purchaseTypeStockData.map((item, index) => (
              <View key={index} style={styles.stockItem}>
                <Text style={styles.stockText}>Amount: {item.AMOUNT}</Text>
                <Text style={styles.stockText}>PType: {item.PTYPE}</Text>
                <Text style={styles.stockText}>Quantity: {item.QTY}</Text>
                <Text style={styles.stockText}>Amount: {item.AMOUNT}</Text>
              </View>
            ))
          ) : (
            <Text style={styles.emptyText}>No purchase type stock data</Text>          )}
         
        </Accordion>

        <Accordion title="Product Wise Stock" isOpen={accordionStates.productWiseStock} onToggle={() => toggleAccordion('productWiseStock')}>
          {loading ? (
            <Text style={styles.emptyText}>Loading...</Text>
          ) : productWiseStockData.length > 0 ? (
            productWiseStockData.map((item, index) => (
              <View key={index} style={styles.stockItem}>
                <Text style={styles.stockText}>Type: {item.PTYPE}</Text>
                <Text style={styles.stockText}>Product: {item.ProdName}</Text>
                <Text style={styles.stockText}>Quantity: {item.QTY}</Text>
                <Text style={styles.stockText}>Amount: {item.AMOUNT}</Text>
                <Text style={styles.stockText}>SAMOUNT: {item.SAMOUNT}</Text>
              </View>
            ))
          ) : (
            <Text style={styles.emptyText}>No product wise stock data</Text>
          )}
        </Accordion>

        <Accordion title="HSN Wise Stock" isOpen={accordionStates.hsnWiseStock} onToggle={() => toggleAccordion('hsnWiseStock')}>
        {loading ? (
            <Text style={styles.emptyText}>Loading...</Text>
          ) : hsnWiseStockData.length > 0 ? (
            hsnWiseStockData.map((item, index) => (
              <View key={index} style={styles.stockItem}>
                {/* <Text style={styles.stockText}>GST: {item.GST}</Text>
                <Text style={styles.stockText}>HSNCODE: {item.HSNCODE}</Text>
                <Text style={styles.stockText}>PAMOUNT: {item.PAMOUNT}</Text> */}
                <Text style={styles.stockText}>QTY: {item.QTY}</Text>
                <Text style={styles.stockText}>SAMOUNT: {item.SAMOUNT}</Text>
              </View>
            ))
          ) : (
            <Text style={styles.emptyText}>No HSN wise stock data</Text>
          )}
        </Accordion>

        <Accordion title="Brand Wise Stock" isOpen={accordionStates.brandWiseStock} onToggle={() => toggleAccordion('brandWiseStock')}>
          <Text style={styles.emptyText}>No brand wise stock data</Text>
        </Accordion>

        <Accordion title="Dealer Wise Stock" isOpen={accordionStates.dealerWiseStock} onToggle={() => toggleAccordion('dealerWiseStock')}>
        {loading ? (
            <Text style={styles.emptyText}>Loading...</Text>
          ) : dealerWiseStockData.length > 0 ? (
            dealerWiseStockData.map((item, index) => (
              <View key={index} style={styles.stockItem}>
                <Text style={styles.stockText}>PTYPE: {item.PTYPE}</Text>
                <Text style={styles.stockText}>AMOUNT: {item.AMOUNT}</Text>
                <Text style={styles.stockText}>Partyname: {item.Partyname}</Text>
                <Text style={styles.stockText}>QTY: {item.QTY}</Text>
                <Text style={styles.stockText}>SAMOUNT: {item.SAMOUNT}</Text>
              </View>
            ))
          ) : (
            <Text style={styles.emptyText}>No dealer wise stock data</Text>
          )}
       
        </Accordion>

        <Accordion title="Size Wise Stock" isOpen={accordionStates.sizeWiseStock} onToggle={() => toggleAccordion('sizeWiseStock')}>
        {loading ? (
            <Text style={styles.emptyText}>Loading...</Text>
          ) : dealerWiseStockData.length > 0 ? (
            dealerWiseStockData.map((item, index) => (
              <View key={index} style={styles.stockItem}>
                <Text style={styles.stockText}>PTYPE: {item.PTYPE}</Text>
                <Text style={styles.stockText}>AMOUNT: {item.AMOUNT}</Text>
                <Text style={styles.stockText}>Partyname: {item.Partyname}</Text>
                <Text style={styles.stockText}>QTY: {item.QTY}</Text>
                <Text style={styles.stockText}>SAMOUNT: {item.SAMOUNT}</Text>
              </View>
            ))
          ) : (
            <Text style={styles.emptyText}>No size wise stock data</Text>          )}
          
        </Accordion>

        <Accordion title="Inventory Wise Stock" isOpen={accordionStates.inventoryWiseStock} onToggle={() => toggleAccordion('inventoryWiseStock')}>
        {loading ? (
            <Text style={styles.emptyText}>Loading...</Text>
          ) : dealerWiseStockData.length > 0 ? (
            dealerWiseStockData.map((item, index) => (
              <View key={index} style={styles.stockItem}>
                <Text style={styles.stockText}>PTYPE: {item.PTYPE}</Text>
                <Text style={styles.stockText}>AMOUNT: {item.AMOUNT}</Text>
                <Text style={styles.stockText}>Partyname: {item.Partyname}</Text>
                <Text style={styles.stockText}>QTY: {item.QTY}</Text>
                <Text style={styles.stockText}>SAMOUNT: {item.SAMOUNT}</Text>
              </View>
            ))
          ) : (
                <Text style={styles.emptyText}>No inventory wise stock data</Text>
          )}
          
        {/* ajdsbgajbdsa */}

        </Accordion>

        <Accordion title="Bar Code" isOpen={accordionStates.barCode} onToggle={() => toggleAccordion('barCode')}>
          <Text style={styles.emptyText}>No bar code data</Text>
        </Accordion>

       
        {/* Input and Pickers */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={inputData}
            onChangeText={setInputData}
          />
          <Pressable style={styles.button} >
            <Text style={styles.buttonText}>Submit</Text>
          </Pressable>
        </View>

         <Accordion title="Invoice Wise Stock" isOpen={accordionStates.invoiceWiseStock} onToggle={() => toggleAccordion('invoiceWiseStock')}>
          <Text style={styles.emptyText}>No invoice wise stock data</Text>
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
  titleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  expandButton: { backgroundColor: '#10b981', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 4 },
  collapseButton: { backgroundColor: '#ef4444', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 4 },
  header: { marginBottom: 24 },
  headerTitle: { fontSize: 24, fontWeight: '600', color: '#1e40af', marginBottom: 16 },
  buttonContainer: { flexDirection: 'row', gap: 12 },
  // button: { backgroundColor: '#4ade80', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 6 },
  // buttonText: { color: '#ffffff', fontWeight: '500' },
  emptyText: { color: '#6b7280', fontStyle: 'italic' },
  // pickerContainer: { backgroundColor: '#ffffff', borderRadius: 4, display: 'flex', borderWidth: 1, borderColor: '#e5e7eb', overflow: 'hidden' },
  // picker: { height: 40 },
  dateContainer: { flexDirection: 'row', gap: 8 },
  dateInput: { flex: 1, backgroundColor: '#ffffff', borderRadius: 4, borderWidth: 1, borderColor: '#e5e7eb', padding: 10, alignItems: 'center' },
  // inputContainer: { marginVertical: 20 },
  label: { fontSize: 16, fontWeight: '500', marginBottom: 8 },
  // input: { borderWidth: 1, borderColor: '#e5e7eb', borderRadius: 4, padding: 10, backgroundColor: '#ffffff' },
  stockItem: { backgroundColor: '#ffffff', padding: 10, marginBottom: 5, borderRadius: 4, borderWidth: 1, borderColor: '#e5e7eb' },
  stockText: { fontSize: 16, fontWeight: '500' },
  inputContainer: {
    flexDirection: 'row',  // Layout children in a row
    alignItems: 'center',
    marginVertical: 12,
  },
  input: {
    flex: 1,               // Takes up remaining space
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 4,
  },
  button: {
    marginLeft: 8,         // Spacing between input and button
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
  },
  dualPickerContainer: {
    flexDirection: 'row',       // Place pickers side by side
    alignItems: 'center',
    marginVertical: 12,
  },
 
});