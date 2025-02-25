// import React, { useState, useRef } from 'react';
// import { View, Text, StyleSheet, ScrollView, Pressable, Image, Dimensions } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { LineChart } from 'react-native-chart-kit';
// import Sidebar from '../../components/Sidebar';
// import { useAuth } from '../../context/auth';

// const screenWidth = Dimensions.get('window').width;

// const chartConfig = {
//   backgroundGradientFrom: '#ffffff',
//   backgroundGradientTo: '#ffffff',
//   color: (opacity = 1) => `rgba(74, 222, 128, ${opacity})`,
//   strokeWidth: 2,
//   barPercentage: 0.5,
//   useShadowColorFromDataset: false,
//   propsForDots: {
//     r: '6',
//     strokeWidth: '2',
//     stroke: '#4ade80'
//   },
//   propsForBackgroundLines: {
//     strokeWidth: 1,
//     stroke: '#e5e7eb',
//   },
//   propsForLabels: {
//     fontSize: 12,
//     fill: '#6b7280',
//   },
//   withDots: false,
//   withInnerLines: true,
//   withOuterLines: true,
//   withVerticalLabels: true,
//   withHorizontalLabels: true,
//   withShadow: false,
// };

// const data = {
//   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
//   datasets: [
//     {
//       data: [20, 45, 28, 80, 99, 43],
//       color: (opacity = 1) => `rgba(74, 222, 128, ${opacity})`,
//       strokeWidth: 2,
//     },
//   ],
// };

// const invoices = [
//   {
//     id: '23',
//     name: 'ANNAPOORNA',
//     amount: 19200.00,
//     quantity: 1,
//     date: '7/12/2024',
//   },
//   {
//     id: '153',
//     name: 'John Doe',
//     amount: 25000.00,
//     quantity: 2,
//     date: '7/12/2024',
//   },
// ];

// export default function Dashboard() {
//   const { logout } = useAuth();
//   const [sidebarVisible, setSidebarVisible] = useState(false);

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Pressable 
//           style={styles.menuButton}
//           onPress={() => setSidebarVisible(true)}>
//           <Ionicons name="menu" size={24} color="#ffffff" />
//         </Pressable>
//         <Text style={styles.logo}>TimesEra ERP</Text>
//         <Pressable onPress={logout} style={styles.logoutButton}>
//           <Ionicons name="log-out-outline" size={24} color="#ffffff" />
//         </Pressable>
//       </View>

//       <ScrollView>
//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Sales Overview</Text>
//           <View style={styles.statsRow}>
//             <View style={styles.stat}>
//               <Text style={styles.statLabel}>Total Bills</Text>
//               <Text style={styles.statValue}>0</Text>
//             </View>
//             <View style={styles.stat}>
//               <Text style={styles.statLabel}>Total Sales</Text>
//               <Text style={styles.statValue}>₹0.00</Text>
//             </View>
//           </View>
//         </View>

//         <View style={styles.collectionsContainer}>
//           <Text style={styles.collectionsTitle}>Collections</Text>
//           <View style={styles.collectionsGrid}>
//             {['Cash', 'Card', 'Online', 'UPI', 'Cheque', 'Balance'].map((title) => (
//               <View key={title} style={styles.collectionCircle}>
//                 <Text style={styles.collectionTitle}>{title}</Text>
//                 <Text style={styles.collectionAmount}>₹0.00</Text>
//               </View>
//             ))}
//           </View>
//         </View>

//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Total Sales</Text>
//           <View style={styles.chartWrapper}>
//             <LineChart
//               data={data}
//               width={screenWidth - 48}
//               height={220}
//               chartConfig={chartConfig}
//               bezier
//               style={styles.chart}
//             />
//           </View>
//         </View>

//         <View style={styles.reminderCard}>
//           <View style={styles.reminderItem}>
//             <Ionicons name="gift-outline" size={24} color="#4ade80" />
//             <View style={styles.reminderContent}>
//               <Text style={styles.reminderTitle}>Birthday</Text>
//               <Text style={styles.reminderCount}>0</Text>
//             </View>
//             <Pressable style={styles.checkButton}>
//               <Text style={styles.checkButtonText}>Check</Text>
//             </Pressable>
//           </View>
//           <View style={[styles.reminderItem, styles.noBorder]}>
//             <Ionicons name="heart-outline" size={24} color="#4ade80" />
//             <View style={styles.reminderContent}>
//               <Text style={styles.reminderTitle}>Anniversary</Text>
//               <Text style={styles.reminderCount}>0</Text>
//             </View>
//             <Pressable style={styles.checkButton}>
//               <Text style={styles.checkButtonText}>Check</Text>
//             </Pressable>
//           </View>
//         </View>

//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Recent Invoices</Text>
//           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//             {invoices.map((invoice, index) => (
//               <View key={invoice.id} style={[
//                 styles.invoiceCard,
//                 index < invoices.length - 1 && styles.invoiceCardMargin
//               ]}>
//                 <View style={styles.invoiceHeader}>
//                   <Text style={styles.invoiceLabel}>Invoice No:</Text>
//                   <Text style={styles.invoiceValue}>{invoice.id}</Text>
//                 </View>
//                 <View style={styles.invoiceRow}>
//                   <Text style={styles.invoiceLabel}>Name:</Text>
//                   <Text style={styles.invoiceValue}>{invoice.name}</Text>
//                 </View>
//                 <View style={styles.invoiceRow}>
//                   <Text style={styles.invoiceLabel}>Amount:</Text>
//                   <Text style={styles.invoiceValue}>₹{invoice.amount.toFixed(2)}</Text>
//                 </View>
//                 <View style={styles.invoiceRow}>
//                   <Text style={styles.invoiceLabel}>Quantity:</Text>
//                   <Text style={styles.invoiceValue}>{invoice.quantity}</Text>
//                 </View>
//                 <View style={styles.invoiceRow}>
//                   <Text style={styles.invoiceLabel}>Date:</Text>
//                   <Text style={styles.invoiceValue}>{invoice.date}</Text>
//                 </View>
//               </View>
//             ))}
//           </ScrollView>
//         </View>
//       </ScrollView>

//       <Sidebar
//         visible={sidebarVisible}
//         onClose={() => setSidebarVisible(false)}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f3f4f6',
//   },
//   header: {
//     backgroundColor: '#1a1b4b',
//     padding: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   logo: {
//     color: '#ffffff',
//     fontSize: 20,
//     fontWeight: '600',
//   },
//   menuButton: {
//     padding: 8,
//   },
//   logoutButton: {
//     padding: 8,
//   },
//   card: {
//     backgroundColor: '#ffffff',
//     margin: 16,
//     padding: 16,
//     borderRadius: 12,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   cardTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     marginBottom: 16,
//     color: '#1f2937',
//   },
//   statsRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   stat: {
//     flex: 1,
//   },
//   statLabel: {
//     fontSize: 14,
//     color: '#6b7280',
//   },
//   statValue: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: '#1f2937',
//   },
//   collectionsContainer: {
//     margin: 16,
//   },
//   collectionsTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#1f2937',
//     marginBottom: 16,
//   },
//   collectionsGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   collectionCircle: {
//     width: '30%',
//     aspectRatio: 1,
//     backgroundColor: '#ffffff',
//     borderRadius: 999,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 16,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   collectionTitle: {
//     fontSize: 14,
//     color: '#6b7280',
//     marginBottom: 4,
//   },
//   collectionAmount: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#1f2937',
//   },
//   chartWrapper: {
//     marginHorizontal: -16,
//   },
//   chart: {
//     marginVertical: 8,
//     borderRadius: 16,
//   },
//   reminderCard: {
//     backgroundColor: '#ffffff',
//     margin: 16,
//     borderRadius: 12,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   reminderItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#e5e5e5',
//   },
//   noBorder: {
//     borderBottomWidth: 0,
//   },
//   reminderContent: {
//     flex: 1,
//     marginLeft: 12,
//   },
//   reminderTitle: {
//     fontSize: 16,
//     color: '#1f2937',
//     fontWeight: '500',
//   },
//   reminderCount: {
//     fontSize: 14,
//     color: '#6b7280',
//   },
//   checkButton: {
//     backgroundColor: '#4ade80',
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 20,
//   },
//   checkButtonText: {
//     color: '#ffffff',
//     fontSize: 14,
//     fontWeight: '500',
//   },
//   invoiceCard: {
//     backgroundColor: '#ffffff',
//     padding: 16,
//     borderRadius: 12,
//     width: screenWidth * 0.7,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   invoiceCardMargin: {
//     marginRight: 12,
//   },
//   invoiceHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 12,
//     paddingBottom: 8,
//     borderBottomWidth: 1,
//     borderBottomColor: '#e5e5e5',
//   },
//   invoiceRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 8,
//   },
//   invoiceLabel: {
//     fontSize: 14,
//     color: '#6b7280',
//   },
//   invoiceValue: {
//     fontSize: 14,
//     color: '#1f2937',
//     fontWeight: '500',
//   },
// });



































// import React, { useState, useRef } from 'react';
// import { View, Text, StyleSheet, ScrollView, Pressable, Image, Dimensions } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { LineChart } from 'react-native-chart-kit';
// import Sidebar from '../../components/Sidebar';
// import { useAuth } from '../../context/auth';
// import  MyCarousel from '@/components/MyCarousel';


// const screenWidth = Dimensions.get('window').width;

// const chartConfig = {
//   backgroundGradientFrom: '#ffffff',
//   backgroundGradientTo: '#ffffff',
//   color: (opacity = 1) => `rgba(74, 222, 128, ${opacity})`,
//   strokeWidth: 2,
//   barPercentage: 0.5,
//   useShadowColorFromDataset: false,
//   propsForDots: {
//     r: '6',
//     strokeWidth: '2',
//     stroke: '#4ade80'
//   },
//   propsForBackgroundLines: {
//     strokeWidth: 1,
//     stroke: '#e5e7eb',
//   },
//   propsForLabels: {
//     fontSize: 12,
//     fill: '#6b7280',
//   },
//   withDots: false,
//   withInnerLines: true,
//   withOuterLines: true,
//   withVerticalLabels: true,
//   withHorizontalLabels: true,
//   withShadow: false,
// };

// const data = {
//   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
//   datasets: [
//     {
//       data: [20, 45, 28, 80, 99, 43],
//       color: (opacity = 1) => `rgba(74, 222, 128, ${opacity})`,
//       strokeWidth: 2,
//     },
//   ],
// };

// const invoices = [
//   {
//     id: '23',
//     name: 'ANNAPOORNA',
//     amount: 19200.00,
//     quantity: 1,
//     date: '7/12/2024',
//   },
//   {
//     id: '153',
//     name: 'John Doe',
//     amount: 25000.00,
//     quantity: 2,
//     date: '7/12/2024',
//   },
// ];

// export default function Dashboard() {
//   const { logout } = useAuth();
//   const [sidebarVisible, setSidebarVisible] = useState(false);

//   return (
//     <View style={styles.container}>
//       {/* <View style={styles.header}>
//         <Text style={styles.logo}>TimesEra ERP</Text>
//         <Pressable 
//           style={styles.menuButton}
//           onPress={() => setSidebarVisible(true)}>
//           <Ionicons name="menu" size={24} color="#ffffff" />
//         </Pressable>
//       </View> */}

//       <ScrollView>

//          <MyCarousel/>
        
//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Sales Overview</Text>
//           <View style={styles.statsRow}>
//             <View style={styles.stat}>
//               <Text style={styles.statLabel}>Total Bills</Text>
//               <Text style={styles.statValue}>0</Text>
//             </View>
//             <View style={styles.stat}>
//               <Text style={styles.statLabel}>Total Sales</Text>
//               <Text style={styles.statValue}>₹0.00</Text>
//             </View>
//           </View>
//         </View>

//         <View style={styles.collectionsContainer}>
//           <Text style={styles.collectionsTitle}>Collections</Text>
//           <View style={styles.collectionsGrid}>
//             {['Cash', 'Card', 'Online', 'UPI', 'Cheque', 'Balance'].map((title) => (
//               <View key={title} style={styles.collectionCircle}>
//                 <Text style={styles.collectionTitle}>{title}</Text>
//                 <Text style={styles.collectionAmount}>₹0.00</Text>
//               </View>
//             ))}
//           </View>
//         </View>

//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Total Sales</Text>
//           <View style={styles.chartWrapper}>
//             <LineChart
//               data={data}
//               width={screenWidth - 48}
//               height={220}
//               chartConfig={chartConfig}
//               bezier
//               style={styles.chart}
//             />
//           </View>
//         </View>

//         <View style={styles.reminderCard}>
//           <View style={styles.reminderItem}>
//             <Ionicons name="gift-outline" size={24} color="#4ade80" />
//             <View style={styles.reminderContent}>
//               <Text style={styles.reminderTitle}>Birthday</Text>
//               <Text style={styles.reminderCount}>0</Text>
//             </View>
//             <Pressable style={styles.checkButton}>
//               <Text style={styles.checkButtonText}>Check</Text>
//             </Pressable>
//           </View>
//           <View style={[styles.reminderItem, styles.noBorder]}>
//             <Ionicons name="heart-outline" size={24} color="#4ade80" />
//             <View style={styles.reminderContent}>
//               <Text style={styles.reminderTitle}>Anniversary</Text>
//               <Text style={styles.reminderCount}>0</Text>
//             </View>
//             <Pressable style={styles.checkButton}>
//               <Text style={styles.checkButtonText}>Check</Text>
//             </Pressable>
//           </View>
//         </View>

//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Recent Invoices</Text>
//           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//             {invoices.map((invoice, index) => (
//               <View key={invoice.id} style={[
//                 styles.invoiceCard,
//                 index < invoices.length - 1 && styles.invoiceCardMargin
//               ]}>
//                 <View style={styles.invoiceHeader}>
//                   <Text style={styles.invoiceLabel}>Invoice No:</Text>
//                   <Text style={styles.invoiceValue}>{invoice.id}</Text>
//                 </View>
//                 <View style={styles.invoiceRow}>
//                   <Text style={styles.invoiceLabel}>Name:</Text>
//                   <Text style={styles.invoiceValue}>{invoice.name}</Text>
//                 </View>
//                 <View style={styles.invoiceRow}>
//                   <Text style={styles.invoiceLabel}>Amount:</Text>
//                   <Text style={styles.invoiceValue}>₹{invoice.amount.toFixed(2)}</Text>
//                 </View>
//                 <View style={styles.invoiceRow}>
//                   <Text style={styles.invoiceLabel}>Quantity:</Text>
//                   <Text style={styles.invoiceValue}>{invoice.quantity}</Text>
//                 </View>
//                 <View style={styles.invoiceRow}>
//                   <Text style={styles.invoiceLabel}>Date:</Text>
//                   <Text style={styles.invoiceValue}>{invoice.date}</Text>
//                 </View>
//               </View>
//             ))}
//           </ScrollView>
//         </View>
//       </ScrollView>

//       <Sidebar
//         visible={sidebarVisible}
//         onClose={() => setSidebarVisible(false)}
//         logout={logout} // Pass logout function to Sidebar
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
  
//     container: {
//       flex: 1,
//       backgroundColor: '#f3f4f6',
//     },
//     header: {
//       backgroundColor: '#1a1b4b',
//       padding: 20,
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//     },
//     logo: {
//       color: '#ffffff',
//       fontSize: 20,
//       fontWeight: '600',
//     },
//     menuButton: {
//       padding: 8,
//     },
//   logoutButton: {
//     padding: 8,
//   },
//   card: {
//     backgroundColor: '#ffffff',
//     margin: 16,
//     padding: 16,
//     borderRadius: 12,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   cardTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     marginBottom: 16,
//     color: '#1f2937',
//   },
//   statsRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   stat: {
//     flex: 1,
//   },
//   statLabel: {
//     fontSize: 14,
//     color: '#6b7280',
//   },
//   statValue: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: '#1f2937',
//   },
//   collectionsContainer: {
//     margin: 16,
//   },
//   collectionsTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#1f2937',
//     marginBottom: 16,
//   },
//   collectionsGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   collectionCircle: {
//     width: '30%',
//     aspectRatio: 1,
//     backgroundColor: '#ffffff',
//     borderRadius: 999,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 16,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   collectionTitle: {
//     fontSize: 14,
//     color: '#6b7280',
//     marginBottom: 4,
//   },
//   collectionAmount: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#1f2937',
//   },
//   chartWrapper: {
//     marginHorizontal: -16,
//   },
//   chart: {
//     marginVertical: 8,
//     borderRadius: 16,
//   },
//   reminderCard: {
//     backgroundColor: '#ffffff',
//     margin: 16,
//     borderRadius: 12,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   reminderItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#e5e5e5',
//   },
//   noBorder: {
//     borderBottomWidth: 0,
//   },
//   reminderContent: {
//     flex: 1,
//     marginLeft: 12,
//   },
//   reminderTitle: {
//     fontSize: 16,
//     color: '#1f2937',
//     fontWeight: '500',
//   },
//   reminderCount: {
//     fontSize: 14,
//     color: '#6b7280',
//   },
//   checkButton: {
//     backgroundColor: '#4ade80',
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 20,
//   },
//   checkButtonText: {
//     color: '#ffffff',
//     fontSize: 14,
//     fontWeight: '500',
//   },
//   invoiceCard: {
//     backgroundColor: '#ffffff',
//     padding: 16,
//     borderRadius: 12,
//     width: screenWidth * 0.7,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   invoiceCardMargin: {
//     marginRight: 12,
//   },
//   invoiceHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 12,
//     paddingBottom: 8,
//     borderBottomWidth: 1,
//     borderBottomColor: '#e5e5e5',
//   },
//   invoiceRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 8,
//   },
//   invoiceLabel: {
//     fontSize: 14,
//     color: '#6b7280',
//   },
//   invoiceValue: {
//     fontSize: 14,
//     color: '#1f2937',
//     fontWeight: '500',
//   },
// });









// "use client"

// import { useState } from "react"
// import { View, Text, StyleSheet, ScrollView, Pressable, Dimensions } from "react-native"
// import { Ionicons } from "@expo/vector-icons"
// import { LineChart } from "react-native-chart-kit"
// import Sidebar from "../../components/Sidebar"
// import { useAuth } from "../../context/auth"
// import MyCarousel from "@/components/MyCarousel"

// const screenWidth = Dimensions.get("window").width

// const chartConfig = {
//   backgroundGradientFrom: "#ffffff",
//   backgroundGradientTo: "#ffffff",
//   color: (opacity = 1) => `rgba(74, 222, 128, ${opacity})`,
//   strokeWidth: 2,
//   barPercentage: 0.5,
//   useShadowColorFromDataset: false,
//   propsForDots: {
//     r: "6",
//     strokeWidth: "2",
//     stroke: "#4ade80",
//   },
//   propsForBackgroundLines: {
//     strokeWidth: 1,
//     stroke: "#e5e7eb",
//   },
//   propsForLabels: {
//     fontSize: 12,
//     fill: "#6b7280",
//   },
//   withDots: false,
//   withInnerLines: true,
//   withOuterLines: true,
//   withVerticalLabels: true,
//   withHorizontalLabels: true,
//   withShadow: false,
// }

// const data = {
//   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//   datasets: [
//     {
//       data: [20, 45, 28, 80, 99, 43],
//       color: (opacity = 1) => `rgba(74, 222, 128, ${opacity})`,
//       strokeWidth: 2,
//     },
//   ],
// }

// const invoices = [
//   {
//     id: "23",
//     name: "ANNAPOORNA",
//     amount: 19200.0,
//     quantity: 1,
//     date: "7/12/2024",
//   },
//   {
//     id: "153",
//     name: "John Doe",
//     amount: 25000.0,
//     quantity: 2,
//     date: "7/12/2024",
//   },
// ]

// export default function Dashboard() {
//   const { logout } = useAuth()
//   const [sidebarVisible, setSidebarVisible] = useState(false)

//   return (
//     <View style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollContent}>
//         <MyCarousel />

//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Sales Overview</Text>
//           <View style={styles.statsRow}>
//             <View style={styles.stat}>
//               <Text style={styles.statLabel}>Total Bills</Text>
//               <Text style={styles.statValue}>0</Text>
//             </View>
//           </View>
//           <View style={styles.statsRow}>
//             <View style={styles.stat}>
//               <Text style={styles.statLabel}>Total Sales</Text>
//               <Text style={styles.statValue}>₹0.00</Text>
//             </View>
//           </View>
//         </View>

//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Collections</Text>
//           <View style={styles.collectionsGrid}>
//             {["Cash", "Card", "Online", "UPI", "Cheque", "Balance"].map((title) => (
//               <View key={title} style={styles.collectionCircle}>
//                 <Text style={styles.collectionTitle}>{title}</Text>
//                 <Text style={styles.collectionAmount}>₹0.00</Text>
//               </View>
//             ))}
//           </View>
//         </View>

//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Total Sales</Text>
//           <View style={styles.chartWrapper}>
//             <LineChart
//               data={data}
//               width={screenWidth - 64}
//               height={220}
//               chartConfig={chartConfig}
//               bezier
//               style={styles.chart}
//             />
//           </View>
//         </View>

//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Reminders</Text>
//           <View style={styles.reminderItem}>
//             <Ionicons name="gift-outline" size={24} color="#4ade80" />
//             <View style={styles.reminderContent}>
//               <Text style={styles.reminderTitle}>Birthday</Text>
//               <Text style={styles.reminderCount}>0</Text>
//             </View>
//             <Pressable style={styles.checkButton}>
//               <Text style={styles.checkButtonText}>Check</Text>
//             </Pressable>
//           </View>
//           <View style={[styles.reminderItem, styles.noBorder]}>
//             <Ionicons name="heart-outline" size={24} color="#4ade80" />
//             <View style={styles.reminderContent}>
//               <Text style={styles.reminderTitle}>Anniversary</Text>
//               <Text style={styles.reminderCount}>0</Text>
//             </View>
//             <Pressable style={styles.checkButton}>
//               <Text style={styles.checkButtonText}>Check</Text>
//             </Pressable>
//           </View>
//         </View>

//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Recent Invoices</Text>
//           <ScrollView horizontal showsHorizontalScrollIndicator={false} pagingEnabled>
//             {invoices.map((invoice) => (
//               <View key={invoice.id} style={styles.invoiceCard}>
//                 <View style={styles.invoiceHeader}>
//                   <Text style={styles.invoiceLabel}>Invoice No:</Text>
//                   <Text style={styles.invoiceValue}>{invoice.id}</Text>
//                 </View>
//                 <View style={styles.invoiceRow}>
//                   <Text style={styles.invoiceLabel}>Name:</Text>
//                   <Text style={styles.invoiceValue}>{invoice.name}</Text>
//                 </View>
//                 <View style={styles.invoiceRow}>
//                   <Text style={styles.invoiceLabel}>Amount:</Text>
//                   <Text style={styles.invoiceValue}>₹{invoice.amount.toFixed(2)}</Text>
//                 </View>
//                 <View style={styles.invoiceRow}>
//                   <Text style={styles.invoiceLabel}>Quantity:</Text>
//                   <Text style={styles.invoiceValue}>{invoice.quantity}</Text>
//                 </View>
//                 <View style={styles.invoiceRow}>
//                   <Text style={styles.invoiceLabel}>Date:</Text>
//                   <Text style={styles.invoiceValue}>{invoice.date}</Text>
//                 </View>
//               </View>
//             ))}
//           </ScrollView>
//         </View>
//       </ScrollView>

//       <Sidebar visible={sidebarVisible} onClose={() => setSidebarVisible(false)} logout={logout} />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f3f4f6",
//   },
//   scrollContent: {
//     padding: 16,
//   },
//   card: {
//     backgroundColor: "#ffffff",
//     borderRadius: 12,
//     padding: 16,
//     marginBottom: 16,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   cardTitle: {
//     fontSize: 18,
//     fontWeight: "600",
//     marginBottom: 16,
//     color: "#1f2937",
//   },
//   statsRow: {
//     marginBottom: 12,
//   },
//   stat: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   statLabel: {
//     fontSize: 14,
//     color: "#6b7280",
//   },
//   statValue: {
//     fontSize: 18,
//     fontWeight: "600",
//     color: "#1f2937",
//   },
//   collectionsGrid: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "space-between",
//   },
//   collectionCircle: {
//     width: "30%",
//     aspectRatio: 1,
//     backgroundColor: "#f3f4f6",
//     borderRadius: 999,
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 16,
//   },
//   collectionTitle: {
//     fontSize: 14,
//     color: "#6b7280",
//     marginBottom: 4,
//   },
//   collectionAmount: {
//     fontSize: 16,
//     fontWeight: "600",
//     color: "#1f2937",
//   },
//   chartWrapper: {
//     alignItems: "center",
//   },
//   chart: {
//     marginVertical: 8,
//     borderRadius: 16,
//   },
//   reminderItem: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingVertical: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: "#e5e5e5",
//   },
//   noBorder: {
//     borderBottomWidth: 0,
//   },
//   reminderContent: {
//     flex: 1,
//     marginLeft: 12,
//   },
//   reminderTitle: {
//     fontSize: 16,
//     color: "#1f2937",
//     fontWeight: "500",
//   },
//   reminderCount: {
//     fontSize: 14,
//     color: "#6b7280",
//   },
//   checkButton: {
//     backgroundColor: "#4ade80",
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 20,
//   },
//   checkButtonText: {
//     color: "#ffffff",
//     fontSize: 14,
//     fontWeight: "500",
//   },
//   invoiceCard: {
//     width: screenWidth - 64,
//     padding: 16,
//     borderRadius: 12,
//     backgroundColor: "#ffffff",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   invoiceHeader: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 12,
//     paddingBottom: 8,
//     borderBottomWidth: 1,
//     borderBottomColor: "#e5e5e5",
//   },
//   invoiceRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 8,
//   },
//   invoiceLabel: {
//     fontSize: 14,
//     color: "#6b7280",
//   },
//   invoiceValue: {
//     fontSize: 14,
//     color: "#1f2937",
//     fontWeight: "500",
//   },
// })














// "use client"

// import { useState, useEffect } from "react"
// import { View, Text, StyleSheet, ScrollView, Pressable, Dimensions } from "react-native"
// import { Ionicons } from "@expo/vector-icons"
// import { LineChart } from "react-native-chart-kit"
// import Sidebar from "../../components/Sidebar"
// import { useAuth } from "../../context/auth"
// import MyCarousel from "@/components/MyCarousel"

// const screenWidth = Dimensions.get("window").width

// const chartConfig = {
//   backgroundGradientFrom: "#ffffff",
//   backgroundGradientTo: "#ffffff",
//   color: (opacity = 1) => `rgba(74, 222, 128, ${opacity})`,
//   strokeWidth: 2,
//   barPercentage: 0.5,
//   useShadowColorFromDataset: false,
//   propsForDots: {
//     r: "6",
//     strokeWidth: "2",
//     stroke: "#4ade80",
//   },
//   propsForBackgroundLines: {
//     strokeWidth: 1,
//     stroke: "#e5e7eb",
//   },
//   propsForLabels: {
//     fontSize: 12,
//     fill: "#6b7280",
//   },
//   withDots: false,
//   withInnerLines: true,
//   withOuterLines: true,
//   withVerticalLabels: true,
//   withHorizontalLabels: true,
//   withShadow: false,
// }

// const data = {
//   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//   datasets: [
//     {
//       data: [20, 45, 28, 80, 99, 43],
//       color: (opacity = 1) => `rgba(74, 222, 128, ${opacity})`,
//       strokeWidth: 2,
//     },
//   ],
// }

// const invoices = [
//   {
//     id: "23",
//     name: "ANNAPOORNA",
//     amount: 19200.0,
//     quantity: 1,
//     date: "7/12/2024",
//   },
//   {
//     id: "153",
//     name: "John Doe",
//     amount: 25000.0,
//     quantity: 2,
//     date: "7/12/2024",
//   },
// ]

// export default function Dashboard() {
//   const { logout } = useAuth()
//   const [sidebarVisible, setSidebarVisible] = useState(false)
//   const [totalBills, setTotalBills] = useState(0)
//   const [totalSales, setTotalSales] = useState(null)
//   const [totalCash, setTotalCash] = useState(null)

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const today = new Date()
//         const month = today.getMonth() + 1
//         const date = today.getDate()
//         const year = today.getFullYear()
//         const formattedDate = `${month}%2F${date}%2F${year}`

//         // Fetch total bills
//         const billsResponse = await fetch(
//           `http://www.textileerp.timeserasoftware.in/api/ERP/GetTotalBills?billDate=${formattedDate}`,
//           {
//             headers: {
//               'accept': '*/*',
//               'tenantName': 'Hq975eIDSVP1hfE9exLODw=='
//             }
//           }
//         )
//         const billsData = await billsResponse.json()
//         if (Array.isArray(billsData) && billsData.length > 0 && billsData[0].hasOwnProperty('Expr1')) {
//           setTotalBills(billsData[0].Expr1)
//         }

//         // Fetch total sales
//         const salesResponse = await fetch(
//           `http://www.textileerp.timeserasoftware.in/api/ERP/GetTotalSaleValue?billDate=${formattedDate}`,
//           {
//             headers: {
//               'accept': '*/*',
//               'tenantName': 'Hq975eIDSVP1hfE9exLODw=='
//             }
//           }
//         )
//         const salesData = await salesResponse.json()
//         if (Array.isArray(salesData) && salesData.length > 0 && salesData[0].hasOwnProperty('AMT')) {
//           setTotalSales(salesData[0].AMT)
//         }

//         // Fetch total cash sales
//         const cashResponse = await fetch(
//           `http://www.textileerp.timeserasoftware.in/api/ERP/GetTotalCashSale?billDate=${formattedDate}`,
//           {
//             headers: {
//               'accept': '*/*',
//               'tenantName': 'Hq975eIDSVP1hfE9exLODw=='
//             }
//           }
//         )
//         const cashData = await cashResponse.json()
//         if (Array.isArray(cashData) && cashData.length > 0 && cashData[0].hasOwnProperty('CASH')) {
//           setTotalCash(cashData[0].CASH)
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error)
//       }
//     }

//     fetchData()
//   }, [])

//   return (
//     <View style={styles.container}>
//       <ScrollView 
//         contentContainerStyle={styles.scrollContent}
//         bounces={false}
//       >
//         <View style={styles.carouselContainer}>
//           <MyCarousel />
//         </View>

//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Sales</Text>
//           <View style={styles.statsRow}>
//             <View style={styles.stat}>
//               <Text style={styles.statLabel}>Total Bills</Text>
//               <Text style={styles.statValue}>{totalBills ? totalBills : 0}</Text>
//             </View>
//           </View>
//           <View style={styles.statsRow}>
//             <View style={styles.stat}>
//               <Text style={styles.statLabel}>Total Sales</Text>
//               <Text style={styles.statValue}>{totalSales ? `₹${totalSales.toFixed(2)}` : "₹0.00"}</Text>
//             </View>
//           </View>
//         </View>

//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Collections</Text>
//           <View style={styles.collectionsGrid}>
//             {["Cash", "Card", "Online", "UPI", "Cheque", "Balance"].map((title) => (
//               <View key={title} style={styles.collectionCircle}>
//                 <Text style={styles.collectionTitle}>{title}</Text>
//                 <Text style={styles.collectionAmount}>
//                   {title === "Cash" && totalCash ? `₹${totalCash.toFixed(2)}` : "₹0.00"}
//                 </Text>
//               </View>
//             ))}
//           </View>
//         </View>

//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Total Sales</Text>
//           <View style={styles.chartWrapper}>
//             <LineChart
//               data={data}
//               width={screenWidth - 64}
//               height={220}
//               chartConfig={chartConfig}
//               bezier
//               style={styles.chart}
//             />
//           </View>
//         </View>

//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Purchases</Text>
//           <View style={styles.statsRow}>
//             <View style={styles.stat}>
//               <Text style={styles.statLabel}>Total Bills</Text>
//               <Text style={styles.statValue}>0</Text>
//             </View>
//           </View>
//           <View style={styles.statsRow}>
//             <View style={styles.stat}>
//               <Text style={styles.statLabel}>Total Sales</Text>
//               <Text style={styles.statValue}>₹0.00</Text>
//             </View>
//           </View>
//         </View>


//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Total Purchases</Text>
//           <View style={styles.chartWrapper}>
//             <LineChart
//               data={data}
//               width={screenWidth - 64}
//               height={220}
//               chartConfig={chartConfig}
//               bezier
//               style={styles.chart}
//             />
//           </View>
//         </View>


//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Reminders</Text>
//           <View style={styles.reminderItem}>
//             <Ionicons name="gift-outline" size={24} color="#4ade80" />
//             <View style={styles.reminderContent}>
//               <Text style={styles.reminderTitle}>Birthday</Text>
//               <Text style={styles.reminderCount}>0</Text>
//             </View>
//             <Pressable style={styles.checkButton}>
//               <Text style={styles.checkButtonText}>Check</Text>
//             </Pressable>
//           </View>
//           <View style={[styles.reminderItem, styles.noBorder]}>
//             <Ionicons name="heart-outline" size={24} color="#4ade80" />
//             <View style={styles.reminderContent}>
//               <Text style={styles.reminderTitle}>Anniversary</Text>
//               <Text style={styles.reminderCount}>0</Text>
//             </View>
//             <Pressable style={styles.checkButton}>
//               <Text style={styles.checkButtonText}>Check</Text>
//             </Pressable>
//           </View>
//         </View>

//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Recent Invoices</Text>
//           <ScrollView
//             horizontal
//             showsHorizontalScrollIndicator={false}
//             pagingEnabled
//             contentContainerStyle={styles.invoicesContainer}
//           >
//             {invoices.map((invoice) => (
//               <View key={invoice.id} style={styles.invoiceCard}>
//                 <View style={styles.invoiceHeader}>
//                   <Text style={styles.invoiceHeaderText}>Invoice #{invoice.id}</Text>
//                 </View>
//                 <View style={styles.invoiceBody}>
//                   <View style={styles.invoiceRow}>
//                     <Text style={styles.invoiceLabel}>Name:</Text>
//                     <Text style={styles.invoiceValue}>{invoice.name}</Text>
//                   </View>
//                   <View style={styles.invoiceRow}>
//                     <Text style={styles.invoiceLabel}>Amount:</Text>
//                     <Text style={styles.invoiceValue}>₹{invoice.amount.toFixed(2)}</Text>
//                   </View>
//                   <View style={styles.invoiceRow}>
//                     <Text style={styles.invoiceLabel}>Quantity:</Text>
//                     <Text style={styles.invoiceValue}>{invoice.quantity}</Text>
//                   </View>
//                   <View style={styles.invoiceRow}>
//                     <Text style={styles.invoiceLabel}>Date:</Text>
//                     <Text style={styles.invoiceValue}>{invoice.date}</Text>
//                   </View>
//                 </View>
//               </View>
//             ))}
//           </ScrollView>
//         </View>
//       </ScrollView>

//       <Sidebar visible={sidebarVisible} onClose={() => setSidebarVisible(false)} logout={logout} />
//     </View>
//   )
// }















// "use client"

// import { useState, useEffect } from "react"
// import { View, Text, StyleSheet, ScrollView, Pressable, Dimensions } from "react-native"
// import { Ionicons } from "@expo/vector-icons"
// import { LineChart } from "react-native-chart-kit"
// import Sidebar from "../../components/Sidebar"
// import { useAuth } from "../../context/auth"
// import MyCarousel from "@/components/MyCarousel"
// import { useQuery } from '@tanstack/react-query'

// const screenWidth = Dimensions.get("window").width

// const chartConfig = {
//   backgroundGradientFrom: "#ffffff",
//   backgroundGradientTo: "#ffffff",
//   color: (opacity = 1) => `rgba(74, 222, 128, ${opacity})`,
//   strokeWidth: 2,
//   barPercentage: 0.5,
//   useShadowColorFromDataset: false,
//   propsForDots: {
//     r: "6",
//     strokeWidth: "2",
//     stroke: "#4ade80",
//   },
//   propsForBackgroundLines: {
//     strokeWidth: 1,
//     stroke: "#e5e7eb",
//   },
//   propsForLabels: {
//     fontSize: 12,
//     fill: "#6b7280",
//   },
//   withDots: false,
//   withInnerLines: true,
//   withOuterLines: true,
//   withVerticalLabels: true,
//   withHorizontalLabels: true,
//   withShadow: false,
// }

// const data = {
//   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//   datasets: [
//     {
//       data: [20, 45, 28, 80, 99, 43],
//       color: (opacity = 1) => `rgba(74, 222, 128, ${opacity})`,
//       strokeWidth: 2,
//     },
//   ],
// }

// const invoices = [
//   {
//     id: "23",
//     name: "ANNAPOORNA",
//     amount: 19200.0,
//     quantity: 1,
//     date: "7/12/2024",
//   },
//   {
//     id: "153",
//     name: "John Doe",
//     amount: 25000.0,
//     quantity: 2,
//     date: "7/12/2024",
//   },
// ]

// const getFormattedDate = () => {
//   const today = new Date()
//   const month = today.getMonth() + 1
//   const date = today.getDate()
//   const year = today.getFullYear()
//   return `${month}%2F${date}%2F${year}`
// }

// const fetchTotalBills = async () => {
//   const formattedDate = getFormattedDate()
//   const response = await fetch(
//     `http://www.textileerp.timeserasoftware.in/api/ERP/GetTotalBills?billDate=${formattedDate}`,
//     {
//       headers: {
//         'accept': '*/*',
//         'tenantName': 'Hq975eIDSVP1hfE9exLODw=='
//       }
//     }
//   )
//   const data = await response.json()
//   return data[0]?.Expr1 || 0
// }

// const fetchTotalSales = async () => {
//   const formattedDate = getFormattedDate()
//   const response = await fetch(
//     `http://www.textileerp.timeserasoftware.in/api/ERP/GetTotalSaleValue?billDate=${formattedDate}`,
//     {
//       headers: {
//         'accept': '*/*',
//         'tenantName': 'Hq975eIDSVP1hfE9exLODw=='
//       }
//     }
//   )
//   const data = await response.json()
//   return data[0]?.AMT || 0
// }

// const fetchCollections = async () => {
//   const formattedDate = getFormattedDate()
//   const response = await fetch(
//     `http://www.textileerp.timeserasoftware.in/api/ERP/GetBinningCollectionData?fromDate=${formattedDate}&toDate=${formattedDate}`,
//     {
//       headers: {
//         'accept': '*/*',
//         'tenantName': 'Hq975eIDSVP1hfE9exLODw=='
//       }
//     }
//   )
//   const data = await response.json()
//   if (Array.isArray(data) && data.length > 0) {
//     return {
//       Cash: data[0].CASH || 0,
//       Card: data[0].CARD || 0,
//       Online: data[0].ONLINE || 0,
//       UPI: data[0].UPI || 0,
//       Cheque: data[0].CHEQUE || 0,
//       Balance: data[0].BALANCE || 0
//     }
//   }
//   return {
//     Cash: 0,
//     Card: 0,
//     Online: 0,
//     UPI: 0,
//     Cheque: 0,
//     Balance: 0
//   }
// }

// export default function Dashboard() {
//   const { logout } = useAuth()
//   const [sidebarVisible, setSidebarVisible] = useState(false)

//   // Using useQuery for real-time data with automatic background updates
//   const { data: totalBills = 0 } = useQuery({
//     queryKey: ['totalBills'],
//     queryFn: fetchTotalBills,
//     refetchInterval: 5000, // Refetch every 5 seconds
//   })

//   const { data: totalSales = 0 } = useQuery({
//     queryKey: ['totalSales'],
//     queryFn: fetchTotalSales,
//     refetchInterval: 5000,
//   })

//   const { data: collections = {
//     Cash: 0,
//     Card: 0,
//     Online: 0,
//     UPI: 0,
//     Cheque: 0,
//     Balance: 0
//   }} = useQuery({
//     queryKey: ['collections'],
//     queryFn: fetchCollections,
//     refetchInterval: 5000,
//   })

//   return (
//     <View style={styles.container}>
//       <ScrollView 
//         contentContainerStyle={styles.scrollContent}
//         bounces={false}
//       >
//         <View style={styles.carouselContainer}>
//           <MyCarousel />
//         </View>

//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Sales</Text>
//           <View style={styles.statsRow}>
//             <View style={styles.stat}>
//               <Text style={styles.statLabel}>Total Bills</Text>
//               <Text style={styles.statValue}>{totalBills}</Text>
//             </View>
//           </View>
//           <View style={styles.statsRow}>
//             <View style={styles.stat}>
//               <Text style={styles.statLabel}>Total Sales</Text>
//               <Text style={styles.statValue}>₹{totalSales.toFixed(2)}</Text>
//             </View>
//           </View>
//         </View>

//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Collections</Text>
//           <View style={styles.collectionsGrid}>
//             {Object.entries(collections).map(([method, amount]) => (
//               <View key={method} style={styles.collectionCircle}>
//                 <Text style={styles.collectionTitle}>{method}</Text>
//                 <Text style={styles.collectionAmount}>
//                   ₹{amount.toFixed(2)}
//                 </Text>
//               </View>
//             ))}
//           </View>
//         </View>

//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Total Sales</Text>
//           <View style={styles.chartWrapper}>
//             <LineChart
//               data={data}
//               width={screenWidth - 64}
//               height={220}
//               chartConfig={chartConfig}
//               bezier
//               style={styles.chart}
//             />
//           </View>
//         </View>

//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Purchases</Text>
//           <View style={styles.statsRow}>
//             <View style={styles.stat}>
//               <Text style={styles.statLabel}>Total Bills</Text>
//               <Text style={styles.statValue}>0</Text>
//             </View>
//           </View>
//           <View style={styles.statsRow}>
//             <View style={styles.stat}>
//               <Text style={styles.statLabel}>Total Sales</Text>
//               <Text style={styles.statValue}>₹0.00</Text>
//             </View>
//           </View>
//         </View>

//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Total Purchases</Text>
//           <View style={styles.chartWrapper}>
//             <LineChart
//               data={data}
//               width={screenWidth - 64}
//               height={220}
//               chartConfig={chartConfig}
//               bezier
//               style={styles.chart}
//             />
//           </View>
//         </View>

//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Reminders</Text>
//           <View style={styles.reminderItem}>
//             <Ionicons name="gift-outline" size={24} color="#4ade80" />
//             <View style={styles.reminderContent}>
//               <Text style={styles.reminderTitle}>Birthday</Text>
//               <Text style={styles.reminderCount}>0</Text>
//             </View>
//             <Pressable style={styles.checkButton}>
//               <Text style={styles.checkButtonText}>Check</Text>
//             </Pressable>
//           </View>
//           <View style={[styles.reminderItem, styles.noBorder]}>
//             <Ionicons name="heart-outline" size={24} color="#4ade80" />
//             <View style={styles.reminderContent}>
//               <Text style={styles.reminderTitle}>Anniversary</Text>
//               <Text style={styles.reminderCount}>0</Text>
//             </View>
//             <Pressable style={styles.checkButton}>
//               <Text style={styles.checkButtonText}>Check</Text>
//             </Pressable>
//           </View>
//         </View>

//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Recent Invoices</Text>
//           <ScrollView
//             horizontal
//             showsHorizontalScrollIndicator={false}
//             pagingEnabled
//             contentContainerStyle={styles.invoicesContainer}
//           >
//             {invoices.map((invoice) => (
//               <View key={invoice.id} style={styles.invoiceCard}>
//                 <View style={styles.invoiceHeader}>
//                   <Text style={styles.invoiceHeaderText}>Invoice #{invoice.id}</Text>
//                 </View>
//                 <View style={styles.invoiceBody}>
//                   <View style={styles.invoiceRow}>
//                     <Text style={styles.invoiceLabel}>Name:</Text>
//                     <Text style={styles.invoiceValue}>{invoice.name}</Text>
//                   </View>
//                   <View style={styles.invoiceRow}>
//                     <Text style={styles.invoiceLabel}>Amount:</Text>
//                     <Text style={styles.invoiceValue}>₹{invoice.amount.toFixed(2)}</Text>
//                   </View>
//                   <View style={styles.invoiceRow}>
//                     <Text style={styles.invoiceLabel}>Quantity:</Text>
//                     <Text style={styles.invoiceValue}>{invoice.quantity}</Text>
//                   </View>
//                   <View style={styles.invoiceRow}>
//                     <Text style={styles.invoiceLabel}>Date:</Text>
//                     <Text style={styles.invoiceValue}>{invoice.date}</Text>
//                   </View>
//                 </View>
//               </View>
//             ))}
//           </ScrollView>
//         </View>
//       </ScrollView>

//       <Sidebar visible={sidebarVisible} onClose={() => setSidebarVisible(false)} logout={logout} />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f3f4f6",
//   },
//   scrollContent: {
//     paddingBottom: 16,
//   },
//   carouselContainer: {
//     width: "100%",
//     marginBottom: 16,
//   },
//   card: {
//     backgroundColor: "#ffffff",
//     borderRadius: 12,
//     padding: 16,
//     marginHorizontal: 16,
//     marginBottom: 16,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   cardTitle: {
//     fontSize: 18,
//     fontWeight: "600",
//     marginBottom: 16,
//     color: "#1f2937",
//   },
//   statsRow: {
//     marginBottom: 12,
//   },
//   stat: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   statLabel: {
//     fontSize: 14,
//     color: "#6b7280",
//   },
//   statValue: {
//     fontSize: 18,
//     fontWeight: "600",
//     color: "#1f2937",
//   },
//   collectionsGrid: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "space-between",
//     gap: 12,
//   },
//   collectionCircle: {
//     width: "30%",
//     aspectRatio: 1,
//     backgroundColor: "#f3f4f6",
//     borderRadius: 999,
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 16,
//     borderWidth: 2,
//     borderColor: "#4ade80",
//     overflow: "hidden",
//   },
//   collectionTitle: {
//     fontSize: 14,
//     color: "#6b7280",
//     marginBottom: 4,
//   },
//   collectionAmount: {
//     fontSize: 16,
//     fontWeight: "600",
//     color: "#1f2937",
//   },
//   chartWrapper: {
//     alignItems: "center",
//   },
//   chart: {
//     marginVertical: 8,
//     borderRadius: 16,
//   },
//   reminderItem: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingVertical: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: "#e5e5e5",
//   },
//   noBorder: {
//     borderBottomWidth: 0,
//   },
//   reminderContent: {
//     flex: 1,
//     marginLeft: 12,
//   },
//   reminderTitle: {
//     fontSize: 16,
//     color: "#1f2937",
//     fontWeight: "500",
//   },
//   reminderCount: {
//     fontSize: 14,
//     color: "#6b7280",
//   },
//   checkButton: {
//     backgroundColor: "#4ade80",
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 20,
//   },
//   checkButtonText: {
//     color: "#ffffff",
//     fontSize: 14,
//     fontWeight: "500",
//   },
//   invoicesContainer: {
//     paddingRight: 16,
//   },
//   invoiceCard: {
//     width: screenWidth - 64,
//     marginRight: 16,
//     borderRadius: 12,
//     backgroundColor: "#ffffff",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//     overflow: "hidden",
//   },
//   invoiceHeader: {
//     backgroundColor: "#4ade80",
//     padding: 12,
//   },
//   invoiceHeaderText: {
//     color: "#ffffff",
//     fontSize: 16,
//     fontWeight: "600",
//   },
//   invoiceBody: {
//     padding: 16,
//   },
//   invoiceRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 8,
//   },
//   invoiceLabel: {
//     fontSize: 14,
//     color: "#6b7280",
//   },
//   invoiceValue: {
//     fontSize: 14,
//     color: "#1f2937",
//     fontWeight: "500",
//   },
// })



















// "use client"

// import { useState, useEffect } from "react"
// import { View, Text, StyleSheet, ScrollView, Pressable, Dimensions } from "react-native"
// import { Ionicons } from "@expo/vector-icons"
// import { LineChart, BarChart } from "react-native-chart-kit" 
// import Sidebar from "../../components/Sidebar"
// import { useAuth } from "../../context/auth"
// import MyCarousel from "@/components/MyCarousel"
// import { useQuery } from '@tanstack/react-query'

// const screenWidth = Dimensions.get("window").width

// const chartConfig = {
//   backgroundGradientFrom: "#ffffff",
//   backgroundGradientTo: "#ffffff", 
//   color: (opacity = 1) => `rgba(74, 222, 128, ${opacity})`,
//   strokeWidth: 2,
//   barPercentage: 0.7,
//   useShadowColorFromDataset: false,
//   propsForDots: {
//     r: "6",
//     strokeWidth: "2", 
//     stroke: "#4ade80",
//   },
//   propsForBackgroundLines: {
//     strokeWidth: 1,
//     stroke: "#e5e7eb",
//   },
//   propsForLabels: {
//     fontSize: 14,
//     fill: "#1f2937",
//     fontWeight: "600"
//   },
//   withDots: false,
//   withInnerLines: true,
//   withOuterLines: true,
//   withVerticalLabels: true,
//   withHorizontalLabels: true,
//   withShadow: false,
//   decimalPlaces: 0,
// }

// const data = {
//   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//   datasets: [
//     {
//       data: [20, 45, 28, 80, 99, 43],
//       color: (opacity = 1) => `rgba(74, 222, 128, ${opacity})`,
//       strokeWidth: 2,
//     },
//   ],
// }

// const getFormattedDate = () => {
//   const today = new Date()
//   const month = today.getMonth() + 1
//   const date = today.getDate()
//   const year = today.getFullYear()
//   return `${month}%2F${date}%2F${year}`
// }

// const fetchTotalBills = async () => {
//   const formattedDate = getFormattedDate()
//   const response = await fetch(
//     `http://www.textileerp.timeserasoftware.in/api/ERP/GetTotalBills?billDate=${formattedDate}`,
//     {
//       headers: {
//         'accept': '*/*',
//         'tenantName': 'Hq975eIDSVP1hfE9exLODw=='
//       }
//     }
//   )
//   const data = await response.json()
//   return data[0]?.Expr1 || 0
// }

// const fetchTotalSales = async () => {
//   const formattedDate = getFormattedDate()
//   const response = await fetch(
//     `http://www.textileerp.timeserasoftware.in/api/ERP/GetTotalSaleValue?billDate=${formattedDate}`,
//     {
//       headers: {
//         'accept': '*/*',
//         'tenantName': 'Hq975eIDSVP1hfE9exLODw=='
//       }
//     }
//   )
//   const data = await response.json()
//   return data[0]?.AMT || 0
// }

// const fetchCommodityWiseSale = async () => {
//   const formattedDate = getFormattedDate()
//   const response = await fetch(
//     `http://www.textileerp.timeserasoftware.in/api/ERP/GetComodityWiseSale?billDate=${formattedDate}`,
//     {
//       headers: {
//         'accept': '*/*',
//         'tenantName': 'Hq975eIDSVP1hfE9exLODw=='
//       }
//     }
//   )
//   const data = await response.json()
//   return data || []
// }

// const fetchCollections = async () => {
//   const formattedDate = getFormattedDate()
//   const response = await fetch(
//     `http://www.textileerp.timeserasoftware.in/api/ERP/GetBinningCollectionData?fromDate=${formattedDate}&toDate=${formattedDate}`,
//     {
//       headers: {
//         'accept': '*/*',
//         'tenantName': 'Hq975eIDSVP1hfE9exLODw=='
//       }
//     }
//   )
//   const data = await response.json()
//   if (Array.isArray(data) && data.length > 0) {
//     return {
//       Cash: data[0].CASH || 0,
//       Card: data[0].CARD || 0,
//       Online: data[0].ONLINE || 0,
//       UPI: data[0].UPI || 0,
//       Cheque: data[0].CHEQUE || 0,
//       Balance: data[0].BALANCE || 0
//     }
//   }
//   return {
//     Cash: 0,
//     Card: 0,
//     Online: 0,
//     UPI: 0,
//     Cheque: 0,
//     Balance: 0
//   }
// }

// const fetchTotalPurchases = async () => {
//   const formattedDate = getFormattedDate()
//   const response = await fetch(
//     `http://www.textileerp.timeserasoftware.in/api/ERP/GetTotalPurchaseCount?billDate=${formattedDate}`,
//     {
//       headers: {
//         'accept': '*/*',
//         'tenantName': 'Hq975eIDSVP1hfE9exLODw=='
//       }
//     }
//   )
//   const data = await response.json()
//   return data[0]?.Expr1 || 0
// }

// const fetchTotalPurchaseValue = async () => {
//   const formattedDate = getFormattedDate()
//   const response = await fetch(
//     `http://www.textileerp.timeserasoftware.in/api/ERP/GetTotalPurchaseValue?billDate=${formattedDate}`,
//     {
//       headers: {
//         'accept': '*/*',
//         'tenantName': 'Hq975eIDSVP1hfE9exLODw=='
//       }
//     }
//   )
//   const data = await response.json()
//   return data[0]?.AMT || 0
// }

// const fetchTopTenBills = async () => {
//   const formattedDate = getFormattedDate()
//   const response = await fetch(
//     `http://www.textileerp.timeserasoftware.in/api/ERP/GetTopTenBills?billStartDate=${formattedDate}&billEndDate=${formattedDate}`,
//     {
//       headers: {
//         'accept': '*/*',
//         'tenantName': 'Hq975eIDSVP1hfE9exLODw=='
//       }
//     }
//   )
//   const data = await response.json()
//   return data || []
// }

// export default function Dashboard() {
//   const { logout } = useAuth()
//   const [sidebarVisible, setSidebarVisible] = useState(false)

//   // Using useQuery for real-time data with automatic background updates
//   const { data: totalBills = 0 } = useQuery({
//     queryKey: ['totalBills'],
//     queryFn: fetchTotalBills,
//     refetchInterval: 5000, // Refetch every 5 seconds
//   })

//   const { data: totalSales = 0 } = useQuery({
//     queryKey: ['totalSales'],
//     queryFn: fetchTotalSales,
//     refetchInterval: 5000,
//   })

//   const { data: commodityWiseSale = [] } = useQuery({
//     queryKey: ['commodityWiseSale'],
//     queryFn: fetchCommodityWiseSale,
//     refetchInterval: 5000,
//   })

//   const { data: collections = {
//     Cash: 0,
//     Card: 0,
//     Online: 0,
//     UPI: 0,
//     Cheque: 0,
//     Balance: 0
//   }} = useQuery({
//     queryKey: ['collections'],
//     queryFn: fetchCollections,
//     refetchInterval: 5000,
//   })

//   const { data: totalPurchases = 0 } = useQuery({
//     queryKey: ['totalPurchases'],
//     queryFn: fetchTotalPurchases,
//     refetchInterval: 5000,
//   })

//   const { data: totalPurchaseValue = 0 } = useQuery({
//     queryKey: ['totalPurchaseValue'],
//     queryFn: fetchTotalPurchaseValue,
//     refetchInterval: 5000,
//   })

//   const { data: topTenBills = [] } = useQuery({
//     queryKey: ['topTenBills'],
//     queryFn: fetchTopTenBills,
//     refetchInterval: 5000,
//   })

//   const commodityData = {
//     labels: commodityWiseSale.map(item => item.PTYPE),
//     datasets: [
//       {
//         data: commodityWiseSale.map(item => item.AMOUNT),
//         color: (opacity = 1) => `rgba(74, 222, 128, ${opacity})`,
//         strokeWidth: 2,
//       }
//     ]
//   }

//   return (
//     <View style={styles.container}>
//       <ScrollView 
//         contentContainerStyle={styles.scrollContent}
//         bounces={false}
//       >
//         <View style={styles.carouselContainer}>
//           <MyCarousel />
//         </View>

//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Sales</Text>
//           <View style={styles.statsRow}>
//             <View style={styles.stat}>
//               <Text style={styles.statLabel}>Total Invoices</Text>
//               <Text style={styles.statValue}>{totalBills}</Text>
//             </View>
//           </View>
//           <View style={styles.statsRow}>
//             <View style={styles.stat}>
//               <Text style={styles.statLabel}>Total Sales</Text>
//               <Text style={styles.statValue}>₹{totalSales.toFixed(2)}</Text>
//             </View>
//           </View>
//         </View>

//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Collections</Text>
//           <View style={styles.collectionsGrid}>
//             {Object.entries(collections).map(([method, amount]) => (
//               <View key={method} style={styles.collectionCircle}>
//                 <Text style={styles.collectionTitle}>{method}</Text>
//                 <Text style={styles.collectionAmount}>
//                   ₹{amount.toFixed(2)}
//                 </Text>
//               </View>
//             ))}
//           </View>
//         </View>

//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Total Sales by Category</Text>
//           <View style={styles.chartWrapper}>
//             <BarChart
//               data={commodityData}
//               width={screenWidth - 64}
//               height={300}
//               chartConfig={{
//                 ...chartConfig,
//                 barPercentage: 0.7,
//                 propsForLabels: {
//                   ...chartConfig.propsForLabels,
//                   fontSize: 14,
//                   rotation: 0
//                 }
//               }}
//               verticalLabelRotation={45}
//               showValuesOnTopOfBars={true}
//               fromZero={true}
//               style={{
//                 marginVertical: 8,
//                 borderRadius: 16,
//                 paddingRight: 0,
//                 paddingLeft: 0
//               }}
//             />
//           </View>
//           <View style={styles.legendContainer}>
//             {commodityWiseSale.map((item, index) => (
//               <View key={index} style={styles.legendItem}>
//                 <Text style={styles.legendTitle}>{item.PTYPE}</Text>
//                 <Text style={styles.legendDetail}>Amount: ₹{item.AMOUNT.toFixed(2)}</Text>
//                 <Text style={styles.legendDetail}>Quantity: {item.QTY}</Text>
//               </View>
//             ))}
//           </View>
//         </View>

//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Purchases</Text>
//           <View style={styles.statsRow}>
//             <View style={styles.stat}>
//               <Text style={styles.statLabel}>Total Invoices</Text>
//               <Text style={styles.statValue}>{totalPurchases}</Text>
//             </View>
//           </View>
//           <View style={styles.statsRow}>
//             <View style={styles.stat}>
//               <Text style={styles.statLabel}>Total Purchases</Text>
//               <Text style={styles.statValue}>₹{totalPurchaseValue.toFixed(2)}</Text>
//             </View>
//           </View>
//         </View>

//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Total Purchases</Text>
//           <View style={styles.chartWrapper}>
//             <LineChart
//               data={data}
//               width={screenWidth - 64}
//               height={220}
//               chartConfig={chartConfig}
//               bezier
//               style={styles.chart}
//             />
//           </View>
//         </View>

//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Reminders</Text>
//           <View style={styles.reminderItem}>
//             <Ionicons name="gift-outline" size={24} color="#4ade80" />
//             <View style={styles.reminderContent}>
//               <Text style={styles.reminderTitle}>Birthday</Text>
//               <Text style={styles.reminderCount}>0</Text>
//             </View>
//             <Pressable style={styles.checkButton}>
//               <Text style={styles.checkButtonText}>Check</Text>
//             </Pressable>
//           </View>
//           <View style={[styles.reminderItem, styles.noBorder]}>
//             <Ionicons name="heart-outline" size={24} color="#4ade80" />
//             <View style={styles.reminderContent}>
//               <Text style={styles.reminderTitle}>Anniversary</Text>
//               <Text style={styles.reminderCount}>0</Text>
//             </View>
//             <Pressable style={styles.checkButton}>
//               <Text style={styles.checkButtonText}>Check</Text>
//             </Pressable>
//           </View>
//         </View>

//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Recent Invoices</Text>
//           <ScrollView
//             horizontal
//             showsHorizontalScrollIndicator={false}
//             pagingEnabled
//             contentContainerStyle={styles.invoicesContainer}
//           >
//             {topTenBills.map((bill: any) => (
//               <View key={bill.billno} style={styles.invoiceCard}>
//                 <View style={styles.invoiceHeader}>
//                   <Text style={styles.invoiceHeaderText}>Invoice #{bill.billno}</Text>
//                 </View>
//                 <View style={styles.invoiceBody}>
//                   <View style={styles.invoiceRow}>
//                     <Text style={styles.invoiceLabel}>Name:</Text>
//                     <Text style={styles.invoiceValue}>{bill.CustName}</Text>
//                   </View>
//                   <View style={styles.invoiceRow}>
//                     <Text style={styles.invoiceLabel}>Amount:</Text>
//                     <Text style={styles.invoiceValue}>₹{bill.AMOUNT.toFixed(2)}</Text>
//                   </View>
//                   <View style={styles.invoiceRow}>
//                     <Text style={styles.invoiceLabel}>Quantity:</Text>
//                     <Text style={styles.invoiceValue}>{bill.QTY}</Text>
//                   </View>
//                   <View style={styles.invoiceRow}>
//                     <Text style={styles.invoiceLabel}>Date:</Text>
//                     <Text style={styles.invoiceValue}>
//                       {new Date(bill.billdate).toLocaleDateString('en-US', {month: 'numeric', day: 'numeric', year: 'numeric'})}
//                     </Text>
//                   </View>
//                   <View style={styles.invoiceRow}>
//                     <Text style={styles.invoiceLabel}>GST Amount:</Text>
//                     <Text style={styles.invoiceValue}>₹{bill.GSTAMT.toFixed(2)}</Text>
//                   </View>
//                 </View>
//               </View>
//             ))}
//           </ScrollView>
//         </View>
//       </ScrollView>

//       <Sidebar visible={sidebarVisible} onClose={() => setSidebarVisible(false)} logout={logout} />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f3f4f6",
//   },
//   scrollContent: {
//     paddingBottom: 16,
//   },
//   carouselContainer: {
//     width: "100%",
//     marginBottom: 16,
//   },
//   card: {
//     backgroundColor: "#ffffff",
//     borderRadius: 12,
//     padding: 16,
//     marginHorizontal: 16,
//     marginBottom: 16,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   cardTitle: {
//     fontSize: 18,
//     fontWeight: "600",
//     marginBottom: 16,
//     color: "#1f2937",
//   },
//   statsRow: {
//     marginBottom: 12,
//   },
//   stat: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   statLabel: {
//     fontSize: 14,
//     color: "#6b7280",
//   },
//   statValue: {
//     fontSize: 18,
//     fontWeight: "600",
//     color: "#1f2937",
//   },
//   collectionsGrid: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "space-between",
//     gap: 12,
//   },
//   collectionCircle: {
//     width: "30%",
//     aspectRatio: 1,
//     backgroundColor: "#f3f4f6",
//     borderRadius: 999,
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 16,
//     borderWidth: 2,
//     borderColor: "#4ade80",
//     overflow: "hidden",
//   },
//   collectionTitle: {
//     fontSize: 14,
//     color: "#6b7280",
//     marginBottom: 4,
//   },
//   collectionAmount: {
//     fontSize: 16,
//     fontWeight: "600",
//     color: "#1f2937",
//   },
//   chartWrapper: {
//     alignItems: "center",
//   },
//   chart: {
//     marginVertical: 8,
//     borderRadius: 16,
//   },
//   legendContainer: {
//     marginTop: 16,
//     padding: 8,
//     backgroundColor: "#f3f4f6",
//     borderRadius: 8,
//   },
//   legendItem: {
//     marginBottom: 8,
//     padding: 8,
//     backgroundColor: "#ffffff",
//     borderRadius: 4,
//   },
//   legendTitle: {
//     fontSize: 16,
//     fontWeight: "600",
//     color: "#1f2937",
//     marginBottom: 4,
//   },
//   legendDetail: {
//     fontSize: 14,
//     color: "#6b7280",
//   },
//   reminderItem: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingVertical: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: "#e5e5e5",
//   },
//   noBorder: {
//     borderBottomWidth: 0,
//   },
//   reminderContent: {
//     flex: 1,
//     marginLeft: 12,
//   },
//   reminderTitle: {
//     fontSize: 16,
//     color: "#1f2937",
//     fontWeight: "500",
//   },
//   reminderCount: {
//     fontSize: 14,
//     color: "#6b7280",
//   },
//   checkButton: {
//     backgroundColor: "#4ade80",
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 20,
//   },
//   checkButtonText: {
//     color: "#ffffff",
//     fontSize: 14,
//     fontWeight: "500",
//   },
//   invoicesContainer: {
//     paddingRight: 16,
//   },
//   invoiceCard: {
//     width: screenWidth - 64,
//     marginRight: 16,
//     borderRadius: 12,
//     backgroundColor: "#ffffff",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//     overflow: "hidden",
//   },
//   invoiceHeader: {
//     backgroundColor: "#4ade80",
//     padding: 12,
//   },
//   invoiceHeaderText: {
//     color: "#ffffff",
//     fontSize: 16,
//     fontWeight: "600",
//   },
//   invoiceBody: {
//     padding: 16,
//   },
//   invoiceRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 8,
//   },
//   invoiceLabel: {
//     fontSize: 14,
//     color: "#6b7280",
//   },
//   invoiceValue: {
//     fontSize: 14,
//     color: "#1f2937",
//     fontWeight: "500",
//   },
// })
























// "use client"

// import { useState, useEffect } from "react"
// import { View, Text, StyleSheet, ScrollView, Pressable, Dimensions } from "react-native"
// import { Ionicons } from "@expo/vector-icons"
// import { LineChart, BarChart } from "react-native-chart-kit" 
// import Sidebar from "../../components/Sidebar"
// import { useAuth } from "../../context/auth"
// import MyCarousel from "@/components/MyCarousel"
// import { useQuery } from '@tanstack/react-query'

// const screenWidth = Dimensions.get("window").width

// const chartConfig = {
//   backgroundGradientFrom: "#ffffff",
//   backgroundGradientTo: "#ffffff", 
//   color: (opacity = 1) => `rgba(74, 222, 128, ${opacity})`,
//   strokeWidth: 2,
//   barPercentage: 0.7,
//   useShadowColorFromDataset: false,
//   propsForDots: {
//     r: "6",
//     strokeWidth: "2", 
//     stroke: "#4ade80",
//   },
//   propsForBackgroundLines: {
//     strokeWidth: 1,
//     stroke: "#e5e7eb",
//   },
//   propsForLabels: {
//     fontSize: 14,
//     fill: "#1f2937",
//     fontWeight: "600"
//   },
//   withDots: false,
//   withInnerLines: true,
//   withOuterLines: true,
//   withVerticalLabels: true,
//   withHorizontalLabels: true,
//   withShadow: false,
//   decimalPlaces: 0,
// }

// const data = {
//   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//   datasets: [
//     {
//       data: [20, 45, 28, 80, 99, 43],
//       color: (opacity = 1) => `rgba(74, 222, 128, ${opacity})`,
//       strokeWidth: 2,
//     },
//   ],
// }

// const getFormattedDate = () => {
//   const today = new Date()
//   const month = today.getMonth() + 1
//   const date = today.getDate()
//   const year = today.getFullYear()
//   return `${month}%2F${date}%2F${year}`
// }

// const fetchTotalBills = async () => {
//   const formattedDate = getFormattedDate()
//   const response = await fetch(
//     `http://www.textileerp.timeserasoftware.in/api/ERP/GetTotalBills?billDate=${formattedDate}`,
//     {
//       headers: {
//         'accept': '*/*',
//         'tenantName': 'Hq975eIDSVP1hfE9exLODw=='
//       }
//     }
//   )
//   const data = await response.json()
//   return data[0]?.Expr1 || 0
// }

// const fetchTotalSales = async () => {
//   const formattedDate = getFormattedDate()
//   const response = await fetch(
//     `http://www.textileerp.timeserasoftware.in/api/ERP/GetTotalSaleValue?billDate=${formattedDate}`,
//     {
//       headers: {
//         'accept': '*/*',
//         'tenantName': 'Hq975eIDSVP1hfE9exLODw=='
//       }
//     }
//   )
//   const data = await response.json()
//   return data[0]?.AMT || 0
// }

// const fetchCommodityWiseSale = async () => {
//   const formattedDate = getFormattedDate()
//   const response = await fetch(
//     `http://www.textileerp.timeserasoftware.in/api/ERP/GetComodityWiseSale?billDate=02%2F24%2F2025`,
//     {
//       headers: {
//         'accept': '*/*',
//         'tenantName': 'Hq975eIDSVP1hfE9exLODw=='
//       }
//     }
//   )
//   const data = await response.json()
//   return data || []
// }

// const fetchCollections = async () => {
//   const formattedDate = getFormattedDate()
//   const response = await fetch(
//     `http://www.textileerp.timeserasoftware.in/api/ERP/GetBinningCollectionData?fromDate=${formattedDate}&toDate=${formattedDate}`,
//     {
//       headers: {
//         'accept': '*/*',
//         'tenantName': 'Hq975eIDSVP1hfE9exLODw=='
//       }
//     }
//   )
//   const data = await response.json()
//   if (Array.isArray(data) && data.length > 0) {
//     return {
//       Cash: data[0].CASH || 0,
//       Card: data[0].CARD || 0,
//       Online: data[0].ONLINE || 0,
//       UPI: data[0].UPI || 0,
//       Cheque: data[0].CHEQUE || 0,
//       Balance: data[0].BALANCE || 0
//     }
//   }
//   return {
//     Cash: 0,
//     Card: 0,
//     Online: 0,
//     UPI: 0,
//     Cheque: 0,
//     Balance: 0
//   }
// }

// const fetchTotalPurchases = async () => {
//   const formattedDate = getFormattedDate()
//   const response = await fetch(
//     `http://www.textileerp.timeserasoftware.in/api/ERP/GetTotalPurchaseCount?billDate=${formattedDate}`,
//     {
//       headers: {
//         'accept': '*/*',
//         'tenantName': 'Hq975eIDSVP1hfE9exLODw=='
//       }
//     }
//   )
//   const data = await response.json()
//   return data[0]?.Expr1 || 0
// }

// const fetchTotalPurchaseValue = async () => {
//   const formattedDate = getFormattedDate()
//   const response = await fetch(
//     `http://www.textileerp.timeserasoftware.in/api/ERP/GetTotalPurchaseValue?billDate=${formattedDate}`,
//     {
//       headers: {
//         'accept': '*/*',
//         'tenantName': 'Hq975eIDSVP1hfE9exLODw=='
//       }
//     }
//   )
//   const data = await response.json()
//   return data[0]?.AMT || 0
// }

// const fetchTopTenBills = async () => {
//   const formattedDate = getFormattedDate()
//   const response = await fetch(
//     `http://www.textileerp.timeserasoftware.in/api/ERP/GetTopTenBills?billStartDate=${formattedDate}&billEndDate=${formattedDate}`,
//     {
//       headers: {
//         'accept': '*/*',
//         'tenantName': 'Hq975eIDSVP1hfE9exLODw=='
//       }
//     }
//   )
//   const data = await response.json()
//   return data || []
// }

// export default function Dashboard() {
//   const { logout } = useAuth()
//   const [sidebarVisible, setSidebarVisible] = useState(false)

//   // Using useQuery for real-time data with automatic background updates
//   const { data: totalBills = 0 } = useQuery({
//     queryKey: ['totalBills'],
//     queryFn: fetchTotalBills,
//     refetchInterval: 5000, // Refetch every 5 seconds
//   })

//   const { data: totalSales = 0 } = useQuery({
//     queryKey: ['totalSales'],
//     queryFn: fetchTotalSales,
//     refetchInterval: 5000,
//   })

//   const { data: commodityWiseSale = [] } = useQuery({
//     queryKey: ['commodityWiseSale'],
//     queryFn: fetchCommodityWiseSale,
//     refetchInterval: 5000,
//   })

//   const { data: collections = {
//     Cash: 0,
//     Card: 0,
//     Online: 0,
//     UPI: 0,
//     Cheque: 0,
//     Balance: 0
//   }} = useQuery({
//     queryKey: ['collections'],
//     queryFn: fetchCollections,
//     refetchInterval: 5000,
//   })

//   const { data: totalPurchases = 0 } = useQuery({
//     queryKey: ['totalPurchases'],
//     queryFn: fetchTotalPurchases,
//     refetchInterval: 5000,
//   })

//   const { data: totalPurchaseValue = 0 } = useQuery({
//     queryKey: ['totalPurchaseValue'],
//     queryFn: fetchTotalPurchaseValue,
//     refetchInterval: 5000,
//   })

//   const { data: topTenBills = [] } = useQuery({
//     queryKey: ['topTenBills'],
//     queryFn: fetchTopTenBills,
//     refetchInterval: 5000,
//   })

//   // Transform commodityWiseSale data for bar chart
//   const categoryData = {
//     labels: commodityWiseSale.map(item => item.PTYPE),
//     datasets: [{
//       data: commodityWiseSale.map(item => item.AMOUNT)
//     }]
//   }

//   return (
//     <View style={styles.container}>
//       <ScrollView 
//         contentContainerStyle={styles.scrollContent}
//         bounces={false}
//       >
//         <View style={styles.carouselContainer}>
//           <MyCarousel />
//         </View>

//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Sales</Text>
//           <View style={styles.statsRow}>
//             <View style={styles.stat}>
//               <Text style={styles.statLabel}>Total Invoices</Text>
//               <Text style={styles.statValue}>{totalBills}</Text>
//             </View>
//           </View>
//           <View style={styles.statsRow}>
//             <View style={styles.stat}>
//               <Text style={styles.statLabel}>Total Sales</Text>
//               <Text style={styles.statValue}>₹{totalSales.toFixed(2)}</Text>
//             </View>
//           </View>
//         </View>

//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Collections</Text>
//           <View style={styles.collectionsGrid}>
//             {Object.entries(collections).map(([method, amount]) => (
//               <View key={method} style={styles.collectionCircle}>
//                 <Text style={styles.collectionTitle}>{method}</Text>
//                 <Text style={styles.collectionAmount}>
//                   ₹{amount.toFixed(2)}
//                 </Text>
//               </View>
//             ))}
//           </View>
//         </View>

//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Total Sales by Category</Text>
//           <BarChart
//             data={categoryData}
//             width={screenWidth - 64}
//             height={300}
//             chartConfig={{
//               ...chartConfig,
//               barPercentage: 0.7,
//             }}
//             style={styles.chart}
//             horizontal={true}
//             fromZero={true}
//             showBarTops={false}
//           />
//         </View>

//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Purchases</Text>
//           <View style={styles.statsRow}>
//             <View style={styles.stat}>
//               <Text style={styles.statLabel}>Total Invoices</Text>
//               <Text style={styles.statValue}>{totalPurchases}</Text>
//             </View>
//           </View>
//           <View style={styles.statsRow}>
//             <View style={styles.stat}>
//               <Text style={styles.statLabel}>Total Purchases</Text>
//               <Text style={styles.statValue}>₹{totalPurchaseValue.toFixed(2)}</Text>
//             </View>
//           </View>
//         </View>

//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Total Purchases</Text>
//           <View style={styles.chartWrapper}>
//             <LineChart
//               data={data}
//               width={screenWidth - 64}
//               height={220}
//               chartConfig={chartConfig}
//               bezier
//               style={styles.chart}
//             />
//           </View>
//         </View>

//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Reminders</Text>
//           <View style={styles.reminderItem}>
//             <Ionicons name="gift-outline" size={24} color="#4ade80" />
//             <View style={styles.reminderContent}>
//               <Text style={styles.reminderTitle}>Birthday</Text>
//               <Text style={styles.reminderCount}>0</Text>
//             </View>
//             <Pressable style={styles.checkButton}>
//               <Text style={styles.checkButtonText}>Check</Text>
//             </Pressable>
//           </View>
//           <View style={[styles.reminderItem, styles.noBorder]}>
//             <Ionicons name="heart-outline" size={24} color="#4ade80" />
//             <View style={styles.reminderContent}>
//               <Text style={styles.reminderTitle}>Anniversary</Text>
//               <Text style={styles.reminderCount}>0</Text>
//             </View>
//             <Pressable style={styles.checkButton}>
//               <Text style={styles.checkButtonText}>Check</Text>
//             </Pressable>
//           </View>
//         </View>

//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Recent Invoices</Text>
//           <ScrollView
//             horizontal
//             showsHorizontalScrollIndicator={false}
//             pagingEnabled
//             contentContainerStyle={styles.invoicesContainer}
//           >
//             {topTenBills.map((bill) => (
//               <View key={bill.billno} style={styles.invoiceCard}>
//                 <View style={styles.invoiceHeader}>
//                   <Text style={styles.invoiceHeaderText}>Invoice #{bill.billno}</Text>
//                 </View>
//                 <View style={styles.invoiceBody}>
//                   <View style={styles.invoiceRow}>
//                     <Text style={styles.invoiceLabel}>Name:</Text>
//                     <Text style={styles.invoiceValue}>{bill.CustName}</Text>
//                   </View>
//                   <View style={styles.invoiceRow}>
//                     <Text style={styles.invoiceLabel}>Amount:</Text>
//                     <Text style={styles.invoiceValue}>₹{bill.AMOUNT.toFixed(2)}</Text>
//                   </View>
//                   <View style={styles.invoiceRow}>
//                     <Text style={styles.invoiceLabel}>Quantity:</Text>
//                     <Text style={styles.invoiceValue}>{bill.QTY}</Text>
//                   </View>
//                   <View style={styles.invoiceRow}>
//                     <Text style={styles.invoiceLabel}>Date:</Text>
//                     <Text style={styles.invoiceValue}>
//                       {new Date(bill.billdate).toLocaleDateString('en-US', {month: 'numeric', day: 'numeric', year: 'numeric'})}
//                     </Text>
//                   </View>
//                   <View style={styles.invoiceRow}>
//                     <Text style={styles.invoiceLabel}>GST Amount:</Text>
//                     <Text style={styles.invoiceValue}>₹{bill.GSTAMT.toFixed(2)}</Text>
//                   </View>
//                 </View>
//               </View>
//             ))}
//           </ScrollView>
//         </View>
//       </ScrollView>

//       <Sidebar visible={sidebarVisible} onClose={() => setSidebarVisible(false)} logout={logout} />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f3f4f6",
//   },
//   scrollContent: {
//     paddingBottom: 16,
//   },
//   carouselContainer: {
//     width: "100%",
//     marginBottom: 16,
//   },
//   card: {
//     backgroundColor: "#ffffff",
//     borderRadius: 12,
//     padding: 16,
//     marginHorizontal: 16,
//     marginBottom: 16,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   cardTitle: {
//     fontSize: 18,
//     fontWeight: "600",
//     marginBottom: 16,
//     color: "#1f2937",
//   },
//   statsRow: {
//     marginBottom: 12,
//   },
//   stat: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   statLabel: {
//     fontSize: 14,
//     color: "#6b7280",
//   },
//   statValue: {
//     fontSize: 18,
//     fontWeight: "600",
//     color: "#1f2937",
//   },
//   collectionsGrid: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "space-between",
//     gap: 12,
//   },
//   collectionCircle: {
//     width: "30%",
//     aspectRatio: 1,
//     backgroundColor: "#f3f4f6",
//     borderRadius: 999,
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 16,
//     borderWidth: 2,
//     borderColor: "#4ade80",
//     overflow: "hidden",
//   },
//   collectionTitle: {
//     fontSize: 14,
//     color: "#6b7280",
//     marginBottom: 4,
//   },
//   collectionAmount: {
//     fontSize: 16,
//     fontWeight: "600",
//     color: "#1f2937",
//   },
//   chartWrapper: {
//     alignItems: "center",
//   },
//   chart: {
//     marginVertical: 8,
//     borderRadius: 16,
//   },
//   reminderItem: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingVertical: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: "#e5e5e5",
//   },
//   noBorder: {
//     borderBottomWidth: 0,
//   },
//   reminderContent: {
//     flex: 1,
//     marginLeft: 12,
//   },
//   reminderTitle: {
//     fontSize: 16,
//     color: "#1f2937",
//     fontWeight: "500",
//   },
//   reminderCount: {
//     fontSize: 14,
//     color: "#6b7280",
//   },
//   checkButton: {
//     backgroundColor: "#4ade80",
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 20,
//   },
//   checkButtonText: {
//     color: "#ffffff",
//     fontSize: 14,
//     fontWeight: "500",
//   },
//   invoicesContainer: {
//     paddingRight: 16,
//   },
//   invoiceCard: {
//     width: screenWidth - 64,
//     marginRight: 16,
//     borderRadius: 12,
//     backgroundColor: "#ffffff",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//     overflow: "hidden",
//   },
//   invoiceHeader: {
//     backgroundColor: "#4ade80",
//     padding: 12,
//   },
//   invoiceHeaderText: {
//     color: "#ffffff",
//     fontSize: 16,
//     fontWeight: "600",
//   },
//   invoiceBody: {
//     padding: 16,
//   },
//   invoiceRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 8,
//   },
//   invoiceLabel: {
//     fontSize: 14,
//     color: "#6b7280",
//   },
//   invoiceValue: {
//     fontSize: 14,
//     color: "#1f2937",
//     fontWeight: "500",
//   },
// })










// "use client"

// import { useState } from "react"
// import { View, Text, StyleSheet, ScrollView, Pressable, Dimensions } from "react-native"
// import { Ionicons } from "@expo/vector-icons"
// import { LineChart } from "react-native-chart-kit"
// import Sidebar from "../../components/Sidebar"
// import { useAuth } from "../../context/auth"
// import MyCarousel from "@/components/MyCarousel"
// import { useQuery } from "@tanstack/react-query"

// const screenWidth = Dimensions.get("window").width

// const chartConfig = {
//   backgroundGradientFrom: "#ffffff",
//   backgroundGradientTo: "#ffffff",
//   color: (opacity = 1) => `rgba(74, 222, 128, ${opacity})`,
//   strokeWidth: 2,
//   barPercentage: 0.7,
//   useShadowColorFromDataset: false,
//   propsForDots: {
//     r: "6",
//     strokeWidth: "2",
//     stroke: "#4ade80",
//   },
//   propsForBackgroundLines: {
//     strokeWidth: 1,
//     stroke: "#e5e7eb",
//   },
//   propsForLabels: {
//     fontSize: 14,
//     fill: "#1f2937",
//     fontWeight: "600",
//   },
//   withDots: false,
//   withInnerLines: true,
//   withOuterLines: true,
//   withVerticalLabels: true,
//   withHorizontalLabels: true,
//   withShadow: false,
//   decimalPlaces: 0,
// }

// const data = {
//   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//   datasets: [
//     {
//       data: [20, 45, 28, 80, 99, 43],
//       color: (opacity = 1) => `rgba(74, 222, 128, ${opacity})`,
//       strokeWidth: 2,
//     },
//   ],
// }

// const getFormattedDate = () => {
//   const today = new Date()
//   const month = today.getMonth() + 1
//   const date = today.getDate()
//   const year = today.getFullYear()
//   return `${month}%2F${date}%2F${year}`
// }

// const fetchTotalBills = async () => {
//   const formattedDate = getFormattedDate()
//   const response = await fetch(
//     `http://www.textileerp.timeserasoftware.in/api/ERP/GetTotalBills?billDate=${formattedDate}`,
//     {
//       headers: {
//         accept: "*/*",
//         tenantName: "Hq975eIDSVP1hfE9exLODw==",
//       },
//     },
//   )
//   const data = await response.json()
//   return data[0]?.Expr1 || 0
// }

// const fetchTotalSales = async () => {
//   const formattedDate = getFormattedDate()
//   const response = await fetch(
//     `http://www.textileerp.timeserasoftware.in/api/ERP/GetTotalSaleValue?billDate=${formattedDate}`,
//     {
//       headers: {
//         accept: "*/*",
//         tenantName: "Hq975eIDSVP1hfE9exLODw==",
//       },
//     },
//   )
//   const data = await response.json()
//   return data[0]?.AMT || 0
// }

// const fetchCommodityWiseSale = async () => {
//   const formattedDate = getFormattedDate()
//   const response = await fetch(
//     `http://www.textileerp.timeserasoftware.in/api/ERP/GetComodityWiseSale?billDate=02%2F24%2F2025`,
//     {
//       headers: {
//         accept: "*/*",
//         tenantName: "Hq975eIDSVP1hfE9exLODw==",
//       },
//     },
//   )
//   const data = await response.json()
//   return data || []
// }

// const fetchCollections = async () => {
//   const formattedDate = getFormattedDate()
//   const response = await fetch(
//     `http://www.textileerp.timeserasoftware.in/api/ERP/GetBinningCollectionData?fromDate=${formattedDate}&toDate=${formattedDate}`,
//     {
//       headers: {
//         accept: "*/*",
//         tenantName: "Hq975eIDSVP1hfE9exLODw==",
//       },
//     },
//   )
//   const data = await response.json()
//   if (Array.isArray(data) && data.length > 0) {
//     return {
//       Cash: data[0].CASH || 0,
//       Card: data[0].CARD || 0,
//       Online: data[0].ONLINE || 0,
//       UPI: data[0].UPI || 0,
//       Cheque: data[0].CHEQUE || 0,
//       Balance: data[0].BALANCE || 0,
//     }
//   }
//   return {
//     Cash: 0,
//     Card: 0,
//     Online: 0,
//     UPI: 0,
//     Cheque: 0,
//     Balance: 0,
//   }
// }

// const fetchTotalPurchases = async () => {
//   const formattedDate = getFormattedDate()
//   const response = await fetch(
//     `http://www.textileerp.timeserasoftware.in/api/ERP/GetTotalPurchaseCount?billDate=${formattedDate}`,
//     {
//       headers: {
//         accept: "*/*",
//         tenantName: "Hq975eIDSVP1hfE9exLODw==",
//       },
//     },
//   )
//   const data = await response.json()
//   return data[0]?.Expr1 || 0
// }

// const fetchTotalPurchaseValue = async () => {
//   const formattedDate = getFormattedDate()
//   const response = await fetch(
//     `http://www.textileerp.timeserasoftware.in/api/ERP/GetTotalPurchaseValue?billDate=${formattedDate}`,
//     {
//       headers: {
//         accept: "*/*",
//         tenantName: "Hq975eIDSVP1hfE9exLODw==",
//       },
//     },
//   )
//   const data = await response.json()
//   return data[0]?.AMT || 0
// }

// const fetchTopTenBills = async () => {
//   const formattedDate = getFormattedDate()
//   const response = await fetch(
//     `http://www.textileerp.timeserasoftware.in/api/ERP/GetTopTenBills?billStartDate=${formattedDate}&billEndDate=${formattedDate}`,
//     {
//       headers: {
//         accept: "*/*",
//         tenantName: "Hq975eIDSVP1hfE9exLODw==",
//       },
//     },
//   )
//   const data = await response.json()
//   return data || []
// }

// export default function Dashboard() {
//   const { logout } = useAuth()
//   const [sidebarVisible, setSidebarVisible] = useState(false)

//   // Using useQuery for real-time data with automatic background updates
//   const { data: totalBills = 0 } = useQuery({
//     queryKey: ["totalBills"],
//     queryFn: fetchTotalBills,
//     refetchInterval: 5000, // Refetch every 5 seconds
//   })

//   const { data: totalSales = 0 } = useQuery({
//     queryKey: ["totalSales"],
//     queryFn: fetchTotalSales,
//     refetchInterval: 5000,
//   })

//   const { data: commodityWiseSale = [] } = useQuery({
//     queryKey: ["commodityWiseSale"],
//     queryFn: fetchCommodityWiseSale,
//     refetchInterval: 5000,
//   })

//   const {
//     data: collections = {
//       Cash: 0,
//       Card: 0,
//       Online: 0,
//       UPI: 0,
//       Cheque: 0,
//       Balance: 0,
//     },
//   } = useQuery({
//     queryKey: ["collections"],
//     queryFn: fetchCollections,
//     refetchInterval: 5000,
//   })

//   const { data: totalPurchases = 0 } = useQuery({
//     queryKey: ["totalPurchases"],
//     queryFn: fetchTotalPurchases,
//     refetchInterval: 5000,
//   })

//   const { data: totalPurchaseValue = 0 } = useQuery({
//     queryKey: ["totalPurchaseValue"],
//     queryFn: fetchTotalPurchaseValue,
//     refetchInterval: 5000,
//   })

//   const { data: topTenBills = [] } = useQuery({
//     queryKey: ["topTenBills"],
//     queryFn: fetchTopTenBills,
//     refetchInterval: 5000,
//   })

//   // Transform commodityWiseSale data for bar chart

//   return (
//     <View style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollContent} bounces={false}>
//         <View style={styles.carouselContainer}>
//           <MyCarousel />
//         </View>

//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Sales</Text>
//           <View style={styles.statsRow}>
//             <View style={styles.stat}>
//               <Text style={styles.statLabel}>Total Invoices</Text>
//               <Text style={styles.statValue}>{totalBills}</Text>
//             </View>
//           </View>
//           <View style={styles.statsRow}>
//             <View style={styles.stat}>
//               <Text style={styles.statLabel}>Total Sales</Text>
//               <Text style={styles.statValue}>₹{totalSales.toFixed(2)}</Text>
//             </View>
//           </View>
//         </View>

//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Collections</Text>
//           <View style={styles.collectionsGrid}>
//             {Object.entries(collections).map(([method, amount]) => (
//               <View key={method} style={styles.collectionCircle}>
//                 <Text style={styles.collectionTitle}>{method}</Text>
//                 <Text style={styles.collectionAmount}>₹{amount.toFixed(2)}</Text>
//               </View>
//             ))}
//           </View>
//         </View>

//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Total Sales by Category</Text>
//           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//             <View style={styles.barChartContainer}>
//               {commodityWiseSale.map((item, index) => (
//                 <Pressable
//                   key={index}
//                   style={styles.barItem}
//                   onPress={() => alert(`${item.PTYPE}\nQuantity: ${item.QTY}\nAmount: ₹${item.AMOUNT.toFixed(2)}`)}
//                 >
//                   <View
//                     style={[
//                       styles.bar,
//                       {
//                         height: 200,
//                         width: Math.max((item.AMOUNT / Math.max(...commodityWiseSale.map((i) => i.AMOUNT))) * 200, 30),
//                       },
//                     ]}
//                   />
//                   <Text style={styles.barLabel}>{item.PTYPE}</Text>
//                 </Pressable>
//               ))}
//             </View>
//           </ScrollView>
//         </View>

//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Purchases</Text>
//           <View style={styles.statsRow}>
//             <View style={styles.stat}>
//               <Text style={styles.statLabel}>Total Invoices</Text>
//               <Text style={styles.statValue}>{totalPurchases}</Text>
//             </View>
//           </View>
//           <View style={styles.statsRow}>
//             <View style={styles.stat}>
//               <Text style={styles.statLabel}>Total Purchases</Text>
//               <Text style={styles.statValue}>₹{totalPurchaseValue.toFixed(2)}</Text>
//             </View>
//           </View>
//         </View>

//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Total Purchases by category</Text>
//           <View style={styles.chartWrapper}>
//             <LineChart
//               data={data}
//               width={screenWidth - 64}
//               height={220}
//               chartConfig={chartConfig}
//               bezier
//               style={styles.chart}
//             />
//           </View>
//         </View>

//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Reminders</Text>
//           <View style={styles.reminderItem}>
//             <Ionicons name="gift-outline" size={24} color="#4ade80" />
//             <View style={styles.reminderContent}>
//               <Text style={styles.reminderTitle}>Birthday</Text>
//               <Text style={styles.reminderCount}>0</Text>
//             </View>
//             <Pressable style={styles.checkButton}>
//               <Text style={styles.checkButtonText}>Check</Text>
//             </Pressable>
//           </View>
//           <View style={[styles.reminderItem, styles.noBorder]}>
//             <Ionicons name="heart-outline" size={24} color="#4ade80" />
//             <View style={styles.reminderContent}>
//               <Text style={styles.reminderTitle}>Anniversary</Text>
//               <Text style={styles.reminderCount}>0</Text>
//             </View>
//             <Pressable style={styles.checkButton}>
//               <Text style={styles.checkButtonText}>Check</Text>
//             </Pressable>
//           </View>
//         </View>

//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Recent Invoices</Text>
//           <ScrollView
//             horizontal
//             showsHorizontalScrollIndicator={false}
//             pagingEnabled
//             contentContainerStyle={styles.invoicesContainer}
//           >
//             {topTenBills.map((bill) => (
//               <View key={bill.billno} style={styles.invoiceCard}>
//                 <View style={styles.invoiceHeader}>
//                   <Text style={styles.invoiceHeaderText}>Invoice #{bill.billno}</Text>
//                 </View>
//                 <View style={styles.invoiceBody}>
//                   <View style={styles.invoiceRow}>
//                     <Text style={styles.invoiceLabel}>Name:</Text>
//                     <Text style={styles.invoiceValue}>{bill.CustName}</Text>
//                   </View>
//                   <View style={styles.invoiceRow}>
//                     <Text style={styles.invoiceLabel}>Amount:</Text>
//                     <Text style={styles.invoiceValue}>₹{bill.AMOUNT.toFixed(2)}</Text>
//                   </View>
//                   <View style={styles.invoiceRow}>
//                     <Text style={styles.invoiceLabel}>Quantity:</Text>
//                     <Text style={styles.invoiceValue}>{bill.QTY}</Text>
//                   </View>
//                   <View style={styles.invoiceRow}>
//                     <Text style={styles.invoiceLabel}>Date:</Text>
//                     <Text style={styles.invoiceValue}>
//                       {new Date(bill.billdate).toLocaleDateString("en-US", {
//                         month: "numeric",
//                         day: "numeric",
//                         year: "numeric",
//                       })}
//                     </Text>
//                   </View>
//                   <View style={styles.invoiceRow}>
//                     <Text style={styles.invoiceLabel}>GST Amount:</Text>
//                     <Text style={styles.invoiceValue}>₹{bill.GSTAMT.toFixed(2)}</Text>
//                   </View>
//                 </View>
//               </View>
//             ))}
//           </ScrollView>
//         </View>
//       </ScrollView>

//       <Sidebar visible={sidebarVisible} onClose={() => setSidebarVisible(false)} logout={logout} />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f3f4f6",
//   },
//   scrollContent: {
//     paddingBottom: 16,
//   },
//   carouselContainer: {
//     width: "100%",
//     marginBottom: 16,
//   },
//   card: {
//     backgroundColor: "#ffffff",
//     borderRadius: 12,
//     padding: 16,
//     marginHorizontal: 16,
//     marginBottom: 16,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   cardTitle: {
//     fontSize: 18,
//     fontWeight: "600",
//     marginBottom: 16,
//     color: "#1f2937",
//   },
//   statsRow: {
//     marginBottom: 12,
//   },
//   stat: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   statLabel: {
//     fontSize: 14,
//     color: "#6b7280",
//   },
//   statValue: {
//     fontSize: 18,
//     fontWeight: "600",
//     color: "#1f2937",
//   },
//   collectionsGrid: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "space-between",
//     gap: 12,
//   },
//   collectionCircle: {
//     width: "30%",
//     aspectRatio: 1,
//     backgroundColor: "#f3f4f6",
//     borderRadius: 999,
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 16,
//     borderWidth: 2,
//     borderColor: "#4ade80",
//     overflow: "hidden",
//   },
//   collectionTitle: {
//     fontSize: 14,
//     color: "#6b7280",
//     marginBottom: 4,
//   },
//   collectionAmount: {
//     fontSize: 16,
//     fontWeight: "600",
//     color: "#1f2937",
//   },
//   chartWrapper: {
//     alignItems: "center",
//   },
//   chart: {
//     marginVertical: 8,
//     borderRadius: 16,
//   },
//   reminderItem: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingVertical: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: "#e5e5e5",
//   },
//   noBorder: {
//     borderBottomWidth: 0,
//   },
//   reminderContent: {
//     flex: 1,
//     marginLeft: 12,
//   },
//   reminderTitle: {
//     fontSize: 16,
//     color: "#1f2937",
//     fontWeight: "500",
//   },
//   reminderCount: {
//     fontSize: 14,
//     color: "#6b7280",
//   },
//   checkButton: {
//     backgroundColor: "#4ade80",
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 20,
//   },
//   checkButtonText: {
//     color: "#ffffff",
//     fontSize: 14,
//     fontWeight: "500",
//   },
//   invoicesContainer: {
//     paddingRight: 16,
//   },
//   invoiceCard: {
//     width: screenWidth - 64,
//     marginRight: 16,
//     borderRadius: 12,
//     backgroundColor: "#ffffff",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//     overflow: "hidden",
//   },
//   invoiceHeader: {
//     backgroundColor: "#4ade80",
//     padding: 12,
//   },
//   invoiceHeaderText: {
//     color: "#ffffff",
//     fontSize: 16,
//     fontWeight: "600",
//   },
//   invoiceBody: {
//     padding: 16,
//   },
//   invoiceRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 8,
//   },
//   invoiceLabel: {
//     fontSize: 14,
//     color: "#6b7280",
//   },
//   invoiceValue: {
//     fontSize: 14,
//     color: "#1f2937",
//     fontWeight: "500",
//   },
//   barChartContainer: {
//     flexDirection: "row",
//     alignItems: "flex-end",
//     paddingVertical: 20,
//     height: 280,
//   },
//   barItem: {
//     alignItems: "center",
//     marginRight: 20,
//   },
//   bar: {
//     backgroundColor: "#4ade80",
//     width: 30,
//     borderTopLeftRadius: 4,
//     borderTopRightRadius: 4,
//   },
//   barLabel: {
//     marginTop: 8,
//     fontSize: 12,
//     color: "#6b7280",
//     textAlign: "center",
//   },
// })






















































// "use client"

// import { useState } from "react"
// import { View, Text, StyleSheet, ScrollView, Pressable, Dimensions } from "react-native"
// import { Ionicons } from "@expo/vector-icons"
// import { LineChart } from "react-native-chart-kit"
// import Sidebar from "../../components/Sidebar"
// import { useAuth } from "../../context/auth"
// import MyCarousel from "@/components/MyCarousel"
// import { useQuery } from "@tanstack/react-query"

// const screenWidth = Dimensions.get("window").width

// const chartConfig = {
//   backgroundGradientFrom: "#ffffff",
//   backgroundGradientTo: "#ffffff",
//   color: (opacity = 1) => `rgba(74, 222, 128, ${opacity})`,
//   strokeWidth: 2,
//   barPercentage: 0.7,
//   useShadowColorFromDataset: false,
//   propsForDots: {
//     r: "6",
//     strokeWidth: "2",
//     stroke: "#4ade80",
//   },
//   propsForBackgroundLines: {
//     strokeWidth: 1,
//     stroke: "#e5e7eb",
//   },
//   propsForLabels: {
//     fontSize: 14,
//     fill: "#1f2937",
//     fontWeight: "600",
//   },
//   withDots: false,
//   withInnerLines: true,
//   withOuterLines: true,
//   withVerticalLabels: true,
//   withHorizontalLabels: true,
//   withShadow: false,
//   decimalPlaces: 0,
// }

// const data = {
//   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//   datasets: [
//     {
//       data: [20, 45, 28, 80, 99, 43],
//       color: (opacity = 1) => `rgba(74, 222, 128, ${opacity})`,
//       strokeWidth: 2,
//     },
//   ],
// }

// const getFormattedDate = () => {
//   const today = new Date()
//   const month = today.getMonth() + 1
//   const date = today.getDate()
//   const year = today.getFullYear()
//   return `${month}%2F${date}%2F${year}`
// }

// const fetchTotalBills = async () => {
//   const formattedDate = getFormattedDate()
//   const response = await fetch(
//     `http://www.textileerp.timeserasoftware.in/api/ERP/GetTotalBills?billDate=${formattedDate}`,
//     {
//       headers: {
//         accept: "*/*",
//         tenantName: "Hq975eIDSVP1hfE9exLODw==",
//       },
//     },
//   )
//   const data = await response.json()
//   return data[0]?.Expr1 || 0
// }

// const fetchTotalSales = async () => {
//   const formattedDate = getFormattedDate()
//   const response = await fetch(
//     `http://www.textileerp.timeserasoftware.in/api/ERP/GetTotalSaleValue?billDate=${formattedDate}`,
//     {
//       headers: {
//         accept: "*/*",
//         tenantName: "Hq975eIDSVP1hfE9exLODw==",
//       },
//     },
//   )
//   const data = await response.json()
//   return data[0]?.AMT || 0
// }

// const fetchCommodityWiseSale = async () => {
//   const formattedDate = getFormattedDate()
//   const response = await fetch(
//     `http://www.textileerp.timeserasoftware.in/api/ERP/GetComodityWiseSale?billDate=${formattedDate}`,
//     {
//       headers: {
//         accept: "*/*",
//         tenantName: "Hq975eIDSVP1hfE9exLODw==",
//       },
//     },
//   )
//   const data = await response.json()
//   return data || []
// }
// const fetchCommodityWisePurchase = async () => {
//   const formattedDate = getFormattedDate()
//   const response = await fetch(
//     `http://www.textileerp.timeserasoftware.in/api/ERP/GetComodityWisePurchase?billDate=${formattedDate}`,
//     {
//       headers: {
//         accept: "*/*",
//         tenantName: "Hq975eIDSVP1hfE9exLODw==",
//       },
//     },
//   )
//   const data = await response.json()
//   return data || []
// }

// const fetchCollections = async () => {
//   const formattedDate = getFormattedDate()
//   const response = await fetch(
//     `http://www.textileerp.timeserasoftware.in/api/ERP/GetBinningCollectionData?fromDate=${formattedDate}&toDate=${formattedDate}`,
//     {
//       headers: {
//         accept: "*/*",
//         tenantName: "Hq975eIDSVP1hfE9exLODw==",
//       },
//     },
//   )
//   const data = await response.json()
//   if (Array.isArray(data) && data.length > 0) {
//     return {
//       Cash: data[0].CASH || 0,
//       Card: data[0].CARD || 0,
//       Online: data[0].ONLINE || 0,
//       UPI: data[0].UPI || 0,
//       Cheque: data[0].CHEQUE || 0,
//       Balance: data[0].BALANCE || 0,
//     }
//   }
//   return {
//     Cash: 0,
//     Card: 0,
//     Online: 0,
//     UPI: 0,
//     Cheque: 0,
//     Balance: 0,
//   }
// }

// const fetchTotalPurchases = async () => {
//   const formattedDate = getFormattedDate()
//   const response = await fetch(
//     `http://www.textileerp.timeserasoftware.in/api/ERP/GetTotalPurchaseCount?billDate=${formattedDate}`,
//     {
//       headers: {
//         accept: "*/*",
//         tenantName: "Hq975eIDSVP1hfE9exLODw==",
//       },
//     },
//   )
//   const data = await response.json()
//   return data[0]?.Expr1 || 0
// }

// const fetchTotalPurchaseValue = async () => {
//   const formattedDate = getFormattedDate()
//   const response = await fetch(
//     `http://www.textileerp.timeserasoftware.in/api/ERP/GetTotalPurchaseValue?billDate=${formattedDate}`,
//     {
//       headers: {
//         accept: "*/*",
//         tenantName: "Hq975eIDSVP1hfE9exLODw==",
//       },
//     },
//   )
//   const data = await response.json()
//   return data[0]?.AMT || 0
// }

// const fetchTopTenBills = async () => {
//   const formattedDate = getFormattedDate()
//   const response = await fetch(
//     `http://www.textileerp.timeserasoftware.in/api/ERP/GetTopTenBills?billStartDate=${formattedDate}&billEndDate=${formattedDate}`,
//     {
//       headers: {
//         accept: "*/*",
//         tenantName: "Hq975eIDSVP1hfE9exLODw==",
//       },
//     },
//   )
//   const data = await response.json()
//   return data || []
// }

// export default function Dashboard() {
//   const { logout } = useAuth()
//   const [sidebarVisible, setSidebarVisible] = useState(false)

//   // Using useQuery for real-time data with automatic background updates
//   const { data: totalBills = 0 } = useQuery({
//     queryKey: ["totalBills"],
//     queryFn: fetchTotalBills,
//     refetchInterval: 5000, // Refetch every 5 seconds
//   })

//   const { data: totalSales = 0 } = useQuery({
//     queryKey: ["totalSales"],
//     queryFn: fetchTotalSales,
//     refetchInterval: 5000,
//   })

//   const { data: commodityWiseSale = [] } = useQuery({
//     queryKey: ["commodityWiseSale"],
//     queryFn: fetchCommodityWiseSale,
//     refetchInterval: 5000,
//   })

//   const { data: commodityWisePurchase = [] } = useQuery({
//     queryKey: ["commodityWisePurchase"],
//     queryFn: fetchCommodityWisePurchase,
//     refetchInterval: 5000,
//   })

//   const {
//     data: collections = {
//       Cash: 0,
//       Card: 0,
//       Online: 0,
//       UPI: 0,
//       Cheque: 0,
//       Balance: 0,
//     },
//   } = useQuery({
//     queryKey: ["collections"],
//     queryFn: fetchCollections,
//     refetchInterval: 5000,
//   })

//   const { data: totalPurchases = 0 } = useQuery({
//     queryKey: ["totalPurchases"],
//     queryFn: fetchTotalPurchases,
//     refetchInterval: 5000,
//   })

//   const { data: totalPurchaseValue = 0 } = useQuery({
//     queryKey: ["totalPurchaseValue"],
//     queryFn: fetchTotalPurchaseValue,
//     refetchInterval: 5000,
//   })

//   const { data: topTenBills = [] } = useQuery({
//     queryKey: ["topTenBills"],
//     queryFn: fetchTopTenBills,
//     refetchInterval: 5000,
//   })

//   // Transform commodityWiseSale data for bar chart

//   return (
//     <View style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollContent} bounces={false}>
//         {/* <View style={styles.carouselContainer}> */}
//           <MyCarousel />
//         {/* </View> */}

//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Sales</Text>
//           <View style={styles.statsRow}>
//             <View style={styles.stat}>
//               <Text style={styles.statLabel}>Total Invoices</Text>
//               <Text style={styles.statValue}>{totalBills}</Text>
//             </View>
//           </View>
//           <View style={styles.statsRow}>
//             <View style={styles.stat}>
//               <Text style={styles.statLabel}>Total Sales</Text>
//               <Text style={styles.statValue}>₹{totalSales.toFixed(2)}</Text>
//             </View>
//           </View>
//         </View>

//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Collections</Text>
//           <View style={styles.collectionsGrid}>
//             {Object.entries(collections).map(([method, amount]) => (
//               <View key={method} style={styles.collectionCircle}>
//                 <Text style={styles.collectionTitle}>{method}</Text>
//                 <Text style={styles.collectionAmount}>₹{amount.toFixed(2)}</Text>
//               </View>
//             ))}
//           </View>
//         </View>

//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Total Sales by Category</Text>
//           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//             <View style={styles.barChartContainer}>
//               {commodityWiseSale.map((item, index) => (
//                 <Pressable
//                   key={index}
//                   style={styles.barItem}
//                   onPress={() => alert(`${item.PTYPE}\nQuantity: ${item.QTY}\nAmount: ₹${item.AMOUNT.toFixed(2)}`)}
//                 >
//                   <View
//                     style={[
//                       styles.bar,
//                       {
//                         height: 200,
//                         width: Math.max((item.AMOUNT / Math.max(...commodityWiseSale.map((i) => i.AMOUNT))) * 200, 30),
//                       },
//                     ]}
//                   />
//                   <Text style={styles.barLabel}>{item.PTYPE}</Text>
//                 </Pressable>
//               ))}
//             </View>
//           </ScrollView>
//         </View>

//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Purchases</Text>
//           <View style={styles.statsRow}>
//             <View style={styles.stat}>
//               <Text style={styles.statLabel}>Total Invoices</Text>
//               <Text style={styles.statValue}>{totalPurchases}</Text>
//             </View>
//           </View>
//           <View style={styles.statsRow}>
//             <View style={styles.stat}>
//               <Text style={styles.statLabel}>Total Purchases</Text>
//               <Text style={styles.statValue}>₹{totalPurchaseValue.toFixed(2)}</Text>
//             </View>
//           </View>
//         </View>

//         {/* <View style={styles.card}>
//           <Text style={styles.cardTitle}>Total Purchases by category</Text>
//           <View style={styles.chartWrapper}>
//             <LineChart
//               data={data}
//               width={screenWidth - 64}
//               height={220}
//               chartConfig={chartConfig}
//               bezier
//               style={styles.chart}
//             />
//           </View>
//         </View> */}

// <View style={styles.card}>
//           <Text style={styles.cardTitle}>Total purchases by Category</Text>
//           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//             <View style={styles.barChartContainer}>
//               {commodityWisePurchase.map((item, index) => (
//                 <Pressable
//                   key={index}
//                   style={styles.barItem}
//                   onPress={() => alert(`${item.PTYPE}\nQuantity: ${item.QTY}\nAmount: ₹${item.AMOUNT.toFixed(2)}`)}
//                 >
//                   <View
//                     style={[
//                       styles.bar,
//                       {
//                         height: 200,
//                         width: Math.max((item.AMOUNT / Math.max(...commodityWisePurchase.map((i) => i.AMOUNT))) * 200, 30),
//                       },
//                     ]}
//                   />
//                   <Text style={styles.barLabel}>{item.PTYPE}</Text>
//                 </Pressable>
//               ))}
//             </View>
//           </ScrollView>
//         </View>


//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Reminders</Text>
//           <View style={styles.reminderItem}>
//             <Ionicons name="gift-outline" size={24} color="#4ade80" />
//             <View style={styles.reminderContent}>
//               <Text style={styles.reminderTitle}>Birthday</Text>
//               <Text style={styles.reminderCount}>0</Text>
//             </View>
//             <Pressable style={styles.checkButton}>
//               <Text style={styles.checkButtonText}>Check</Text>
//             </Pressable>
//           </View>
//           <View style={[styles.reminderItem, styles.noBorder]}>
//             <Ionicons name="heart-outline" size={24} color="#4ade80" />
//             <View style={styles.reminderContent}>
//               <Text style={styles.reminderTitle}>Anniversary</Text>
//               <Text style={styles.reminderCount}>0</Text>
//             </View>
//             <Pressable style={styles.checkButton}>
//               <Text style={styles.checkButtonText}>Check</Text>
//             </Pressable>
//           </View>
//         </View>

//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Recent Invoices</Text>
//           <ScrollView
//             horizontal
//             showsHorizontalScrollIndicator={false}
//             pagingEnabled
//             contentContainerStyle={styles.invoicesContainer}
//           >
//             {topTenBills.map((bill) => (
//               <View key={bill.billno} style={styles.invoiceCard}>
//                 <View style={styles.invoiceHeader}>
//                   <Text style={styles.invoiceHeaderText}>Invoice #{bill.billno}</Text>
//                 </View>
//                 <View style={styles.invoiceBody}>
//                   <View style={styles.invoiceRow}>
//                     <Text style={styles.invoiceLabel}>Name:</Text>
//                     <Text style={styles.invoiceValue}>{bill.CustName}</Text>
//                   </View>
//                   <View style={styles.invoiceRow}>
//                     <Text style={styles.invoiceLabel}>Amount:</Text>
//                     <Text style={styles.invoiceValue}>₹{bill.AMOUNT.toFixed(2)}</Text>
//                   </View>
//                   <View style={styles.invoiceRow}>
//                     <Text style={styles.invoiceLabel}>Quantity:</Text>
//                     <Text style={styles.invoiceValue}>{bill.QTY}</Text>
//                   </View>
//                   <View style={styles.invoiceRow}>
//                     <Text style={styles.invoiceLabel}>Date:</Text>
//                     <Text style={styles.invoiceValue}>
//                       {new Date(bill.billdate).toLocaleDateString("en-US", {
//                         month: "numeric",
//                         day: "numeric",
//                         year: "numeric",
//                       })}
//                     </Text>
//                   </View>
//                   <View style={styles.invoiceRow}>
//                     <Text style={styles.invoiceLabel}>GST Amount:</Text>
//                     <Text style={styles.invoiceValue}>₹{bill.GSTAMT.toFixed(2)}</Text>
//                   </View>
//                 </View>
//               </View>
//             ))}
//           </ScrollView>
//         </View>
//       </ScrollView>

//       <Sidebar visible={sidebarVisible} onClose={() => setSidebarVisible(false)} logout={logout} />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f3f4f6",
//   },
//   scrollContent: {
//     paddingBottom: 16,
//   },
//   carouselContainer: {
//     width: "100%",
//     marginBottom: 16,
//   },
//   card: {
//     backgroundColor: "#ffffff",
//     borderRadius: 12,
//     padding: 16,
//     marginHorizontal: 16,
//     marginBottom: 16,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   cardTitle: {
//     fontSize: 18,
//     fontWeight: "600",
//     marginBottom: 16,
//     color: "#1f2937",
//   },
//   statsRow: {
//     marginBottom: 12,
//   },
//   stat: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   statLabel: {
//     fontSize: 14,
//     color: "#6b7280",
//   },
//   statValue: {
//     fontSize: 18,
//     fontWeight: "600",
//     color: "#1f2937",
//   },
//   collectionsGrid: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "space-between",
//     gap: 12,
//   },
//   collectionCircle: {
//     width: "30%",
//     aspectRatio: 1,
//     backgroundColor: "#f3f4f6",
//     borderRadius: 999,
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 16,
//     borderWidth: 2,
//     borderColor: "#4ade80",
//     overflow: "hidden",
//   },
//   collectionTitle: {
//     fontSize: 14,
//     color: "#6b7280",
//     marginBottom: 4,
//   },
//   collectionAmount: {
//     fontSize: 16,
//     fontWeight: "600",
//     color: "#1f2937",
//   },
//   chartWrapper: {
//     alignItems: "center",
//   },
//   chart: {
//     marginVertical: 8,
//     borderRadius: 16,
//   },
//   reminderItem: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingVertical: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: "#e5e5e5",
//   },
//   noBorder: {
//     borderBottomWidth: 0,
//   },
//   reminderContent: {
//     flex: 1,
//     marginLeft: 12,
//   },
//   reminderTitle: {
//     fontSize: 16,
//     color: "#1f2937",
//     fontWeight: "500",
//   },
//   reminderCount: {
//     fontSize: 14,
//     color: "#6b7280",
//   },
//   checkButton: {
//     backgroundColor: "#4ade80",
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 20,
//   },
//   checkButtonText: {
//     color: "#ffffff",
//     fontSize: 14,
//     fontWeight: "500",
//   },
//   invoicesContainer: {
//     paddingRight: 16,
//   },
//   invoiceCard: {
//     width: screenWidth - 64,
//     marginRight: 16,
//     borderRadius: 12,
//     backgroundColor: "#ffffff",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//     overflow: "hidden",
//   },
//   invoiceHeader: {
//     backgroundColor: "#4ade80",
//     padding: 12,
//   },
//   invoiceHeaderText: {
//     color: "#ffffff",
//     fontSize: 16,
//     fontWeight: "600",
//   },
//   invoiceBody: {
//     padding: 16,
//   },
//   invoiceRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 8,
//   },
//   invoiceLabel: {
//     fontSize: 14,
//     color: "#6b7280",
//   },
//   invoiceValue: {
//     fontSize: 14,
//     color: "#1f2937",
//     fontWeight: "500",
//   },
//   barChartContainer: {
//     flexDirection: "row",
//     alignItems: "flex-end",
//     paddingVertical: 20,
//     height: 280,
//   },
//   barItem: {
//     alignItems: "center",
//     marginRight: 20,
//   },
//   bar: {
//     backgroundColor: "#4ade80",
//     width: 30,
//     borderTopLeftRadius: 4,
//     borderTopRightRadius: 4,
//   },
//   barLabel: {
//     marginTop: 8,
//     fontSize: 12,
//     color: "#6b7280",
//     textAlign: "center",
//   },
// })














































"use client"

import { useState } from "react"
import { View, Text, StyleSheet, ScrollView, Pressable, Dimensions } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { LineChart } from "react-native-chart-kit"
import Sidebar from "../../components/Sidebar"
import { useAuth } from "../../context/auth"
import MyCarousel from "@/components/MyCarousel"
import { useQuery } from "@tanstack/react-query"

const screenWidth = Dimensions.get("window").width

const chartConfig = {
  backgroundGradientFrom: "#ffffff",
  backgroundGradientTo: "#ffffff",
  color: (opacity = 1) => `rgba(74, 222, 128, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.7,
  useShadowColorFromDataset: false,
  propsForDots: {
    r: "6",
    strokeWidth: "2",
    stroke: "#4ade80",
  },
  propsForBackgroundLines: {
    strokeWidth: 1,
    stroke: "#e5e7eb",
  },
  propsForLabels: {
    fontSize: 14,
    fill: "#1f2937",
    fontWeight: "600",
  },
  withDots: false,
  withInnerLines: true,
  withOuterLines: true,
  withVerticalLabels: true,
  withHorizontalLabels: true,
  withShadow: false,
  decimalPlaces: 0,
}

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `rgba(74, 222, 128, ${opacity})`,
      strokeWidth: 2,
    },
  ],
}

const getFormattedDate = () => {
  const today = new Date()
  const month = today.getMonth() + 1
  const date = today.getDate()
  const year = today.getFullYear()
  return `${month}%2F${date}%2F${year}`
}

const fetchTotalBills = async () => {
  const formattedDate = getFormattedDate()
  const response = await fetch(
    `http://www.textileerp.timeserasoftware.in/api/ERP/GetTotalBills?billDate=${formattedDate}`,
    {
      headers: {
        accept: "*/*",
        tenantName: "Hq975eIDSVP1hfE9exLODw==",
      },
    },
  )
  const data = await response.json()
  return data[0]?.Expr1 || 0
}

const fetchTotalSales = async () => {
  const formattedDate = getFormattedDate()
  const response = await fetch(
    `http://www.textileerp.timeserasoftware.in/api/ERP/GetTotalSaleValue?billDate=${formattedDate}`,
    {
      headers: {
        accept: "*/*",
        tenantName: "Hq975eIDSVP1hfE9exLODw==",
      },
    },
  )
  const data = await response.json()
  return data[0]?.AMT || 0
}

const fetchCommodityWiseSale = async () => {
  const formattedDate = getFormattedDate()
  const response = await fetch(
    `http://www.textileerp.timeserasoftware.in/api/ERP/GetComodityWiseSale?billDate=${formattedDate}`,
    {
      headers: {
        accept: "*/*",
        tenantName: "Hq975eIDSVP1hfE9exLODw==",
      },
    },
  )
  const data = await response.json()
  return data || []
}
const fetchCommodityWisePurchase = async () => {
  const formattedDate = getFormattedDate()
  const response = await fetch(
    `http://www.textileerp.timeserasoftware.in/api/ERP/GetComodityWisePurchase?billDate=${formattedDate}`,
    {
      headers: {
        accept: "*/*",
        tenantName: "Hq975eIDSVP1hfE9exLODw==",
      },
    },
  )
  const data = await response.json()
  return data || []
}

const fetchCollections = async () => {
  const formattedDate = getFormattedDate()
  const response = await fetch(
    `http://www.textileerp.timeserasoftware.in/api/ERP/GetBinningCollectionData?fromDate=${formattedDate}&toDate=${formattedDate}`,
    {
      headers: {
        accept: "*/*",
        tenantName: "Hq975eIDSVP1hfE9exLODw==",
      },
    },
  )
  const data = await response.json()
  if (Array.isArray(data) && data.length > 0) {
    return {
      Cash: data[0].CASH || 0,
      Card: data[0].CARD || 0,
      Online: data[0].ONLINE || 0,
      UPI: data[0].UPI || 0,
      Cheque: data[0].CHEQUE || 0,
      Balance: data[0].BALANCE || 0,
    }
  }
  return {
    Cash: 0,
    Card: 0,
    Online: 0,
    UPI: 0,
    Cheque: 0,
    Balance: 0,
  }
}

const fetchTotalPurchases = async () => {
  const formattedDate = getFormattedDate()
  const response = await fetch(
    `http://www.textileerp.timeserasoftware.in/api/ERP/GetTotalPurchaseCount?billDate=${formattedDate}`,
    {
      headers: {
        accept: "*/*",
        tenantName: "Hq975eIDSVP1hfE9exLODw==",
      },
    },
  )
  const data = await response.json()
  return data[0]?.Expr1 || 0
}

const fetchTotalPurchaseValue = async () => {
  const formattedDate = getFormattedDate()
  const response = await fetch(
    `http://www.textileerp.timeserasoftware.in/api/ERP/GetTotalPurchaseValue?billDate=${formattedDate}`,
    {
      headers: {
        accept: "*/*",
        tenantName: "Hq975eIDSVP1hfE9exLODw==",
      },
    },
  )
  const data = await response.json()
  return data[0]?.AMT || 0
}

const fetchTopTenBills = async () => {
  const formattedDate = getFormattedDate()
  const response = await fetch(
    `http://www.textileerp.timeserasoftware.in/api/ERP/GetTopTenBills?billStartDate=${formattedDate}&billEndDate=${formattedDate}`,
    {
      headers: {
        accept: "*/*",
        tenantName: "Hq975eIDSVP1hfE9exLODw==",
      },
    },
  )
  const data = await response.json()
  return data || []
}

export default function Dashboard() {
  const { logout } = useAuth()
  const [sidebarVisible, setSidebarVisible] = useState(false)

  // Using useQuery for real-time data with automatic background updates
  const { data: totalBills = 0 } = useQuery({
    queryKey: ["totalBills"],
    queryFn: fetchTotalBills,
    refetchInterval: 5000, // Refetch every 5 seconds
  })

  const { data: totalSales = 0 } = useQuery({
    queryKey: ["totalSales"],
    queryFn: fetchTotalSales,
    refetchInterval: 5000,
  })

  const { data: commodityWiseSale = [] } = useQuery({
    queryKey: ["commodityWiseSale"],
    queryFn: fetchCommodityWiseSale,
    refetchInterval: 5000,
  })

  const { data: commodityWisePurchase = [] } = useQuery({
    queryKey: ["commodityWisePurchase"],
    queryFn: fetchCommodityWisePurchase,
    refetchInterval: 5000,
  })

  const {
    data: collections = {
      Cash: 0,
      Card: 0,
      Online: 0,
      UPI: 0,
      Cheque: 0,
      Balance: 0,
    },
  } = useQuery({
    queryKey: ["collections"],
    queryFn: fetchCollections,
    refetchInterval: 5000,
  })

  const { data: totalPurchases = 0 } = useQuery({
    queryKey: ["totalPurchases"],
    queryFn: fetchTotalPurchases,
    refetchInterval: 5000,
  })

  const { data: totalPurchaseValue = 0 } = useQuery({
    queryKey: ["totalPurchaseValue"],
    queryFn: fetchTotalPurchaseValue,
    refetchInterval: 5000,
  })

  const { data: topTenBills = [] } = useQuery({
    queryKey: ["topTenBills"],
    queryFn: fetchTopTenBills,
    refetchInterval: 5000,
  })

  // Transform commodityWiseSale data for bar chart

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} bounces={false}>
        {/* <View style={styles.carouselContainer}> */}
          <MyCarousel />
        {/* </View> */}

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Sales</Text>
          <View style={styles.statsRow}>
            <View style={styles.stat}>
              <Text style={styles.statLabel}>Total Invoices</Text>
              <Text style={styles.statValue}>{totalBills}</Text>
            </View>
          </View>
          <View style={styles.statsRow}>
            <View style={styles.stat}>
              <Text style={styles.statLabel}>Total Sales</Text>
              <Text style={styles.statValue}>₹{totalSales.toFixed(2)}</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Collections</Text>
          <View style={styles.collectionsGrid}>
            {Object.entries(collections).map(([method, amount]) => (
              <View key={method} style={styles.collectionCircle}>
                <Text style={styles.collectionTitle}>{method}</Text>
                <Text style={styles.collectionAmount}>₹{amount.toFixed(2)}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Total Sales by Category</Text>
          {commodityWiseSale.length > 0 ? (
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.barChartContainer}>
                {commodityWiseSale.map((item, index) => (
                  <Pressable
                    key={index}
                    style={styles.barItem}
                    onPress={() => alert(`${item.PTYPE}\nQuantity: ${item.QTY}\nAmount: ₹${item.AMOUNT.toFixed(2)}`)}
                  >
                    <View
                      style={[
                        styles.bar,
                        {
                          height: 200,
                          width: Math.max((item.AMOUNT / Math.max(...commodityWiseSale.map((i) => i.AMOUNT))) * 200, 30),
                        },
                      ]}
                    />
                    <Text style={styles.barLabel}>{item.PTYPE}</Text>
                  </Pressable>
                ))}
              </View>
            </ScrollView>
          ) : (
            <Text style={styles.noDataText}>updating ....</Text>
          )}
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Purchases</Text>
          <View style={styles.statsRow}>
            <View style={styles.stat}>
              <Text style={styles.statLabel}>Total Invoices</Text>
              <Text style={styles.statValue}>{totalPurchases}</Text>
            </View>
          </View>
          <View style={styles.statsRow}>
            <View style={styles.stat}>
              <Text style={styles.statLabel}>Total Purchases</Text>
              <Text style={styles.statValue}>₹{totalPurchaseValue.toFixed(2)}</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Total purchases by Category</Text>
          {commodityWisePurchase.length > 0 ? (
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.barChartContainer}>
                {commodityWisePurchase.map((item, index) => (
                  <Pressable
                    key={index}
                    style={styles.barItem}
                    onPress={() => alert(`${item.PTYPE}\nQuantity: ${item.QTY}\nAmount: ₹${item.AMOUNT.toFixed(2)}`)}
                  >
                    <View
                      style={[
                        styles.bar,
                        {
                          height: 200,
                          width: Math.max((item.AMOUNT / Math.max(...commodityWisePurchase.map((i) => i.AMOUNT))) * 200, 30),
                        },
                      ]}
                    />
                    <Text style={styles.barLabel}>{item.PTYPE}</Text>
                  </Pressable>
                ))}
              </View>
            </ScrollView>
          ) : (
            <Text style={styles.noDataText}>updating ....</Text>
          )}
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Reminders</Text>
          <View style={styles.reminderItem}>
            <Ionicons name="gift-outline" size={24} color="#4ade80" />
            <View style={styles.reminderContent}>
              <Text style={styles.reminderTitle}>Birthday</Text>
              <Text style={styles.reminderCount}>0</Text>
            </View>
            <Pressable style={styles.checkButton}>
              <Text style={styles.checkButtonText}>Check</Text>
            </Pressable>
          </View>
          <View style={[styles.reminderItem, styles.noBorder]}>
            <Ionicons name="heart-outline" size={24} color="#4ade80" />
            <View style={styles.reminderContent}>
              <Text style={styles.reminderTitle}>Anniversary</Text>
              <Text style={styles.reminderCount}>0</Text>
            </View>
            <Pressable style={styles.checkButton}>
              <Text style={styles.checkButtonText}>Check</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Recent Invoices</Text>
          {topTenBills.length > 0 ? (
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              contentContainerStyle={styles.invoicesContainer}
            >
              {topTenBills.map((bill) => (
                <View key={bill.billno} style={styles.invoiceCard}>
                  <View style={styles.invoiceHeader}>
                    <Text style={styles.invoiceHeaderText}>Invoice #{bill.billno}</Text>
                  </View>
                  <View style={styles.invoiceBody}>
                    <View style={styles.invoiceRow}>
                      <Text style={styles.invoiceLabel}>Name:</Text>
                      <Text style={styles.invoiceValue}>{bill.CustName}</Text>
                    </View>
                    <View style={styles.invoiceRow}>
                      <Text style={styles.invoiceLabel}>Amount:</Text>
                      <Text style={styles.invoiceValue}>₹{bill.AMOUNT.toFixed(2)}</Text>
                    </View>
                    <View style={styles.invoiceRow}>
                      <Text style={styles.invoiceLabel}>Quantity:</Text>
                      <Text style={styles.invoiceValue}>{bill.QTY}</Text>
                    </View>
                    <View style={styles.invoiceRow}>
                      <Text style={styles.invoiceLabel}>Date:</Text>
                      <Text style={styles.invoiceValue}>
                        {new Date(bill.billdate).toLocaleDateString("en-US", {
                          month: "numeric",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </Text>
                    </View>
                    <View style={styles.invoiceRow}>
                      <Text style={styles.invoiceLabel}>GST Amount:</Text>
                      <Text style={styles.invoiceValue}>₹{bill.GSTAMT.toFixed(2)}</Text>
                    </View>
                  </View>
                </View>
              ))}
            </ScrollView>
          ) : (
            <Text style={styles.noDataText}>updating ....</Text>
          )}
        </View>
      </ScrollView>

      <Sidebar visible={sidebarVisible} onClose={() => setSidebarVisible(false)} logout={logout} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
  },
  scrollContent: {
    paddingBottom: 16,
  },
  carouselContainer: {
    width: "100%",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
    color: "#1f2937",
  },
  statsRow: {
    marginBottom: 12,
  },
  stat: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  statLabel: {
    fontSize: 14,
    color: "#6b7280",
  },
  statValue: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1f2937",
  },
  collectionsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 12,
  },
  collectionCircle: {
    width: "30%",
    aspectRatio: 1,
    backgroundColor: "#f3f4f6",
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    borderWidth: 2,
    borderColor: "#4ade80",
    overflow: "hidden",
  },
  collectionTitle: {
    fontSize: 14,
    color: "#6b7280",
    marginBottom: 4,
  },
  collectionAmount: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1f2937",
  },
  chartWrapper: {
    alignItems: "center",
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  reminderItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
  },
  noBorder: {
    borderBottomWidth: 0,
  },
  reminderContent: {
    flex: 1,
    marginLeft: 12,
  },
  reminderTitle: {
    fontSize: 16,
    color: "#1f2937",
    fontWeight: "500",
  },
  reminderCount: {
    fontSize: 14,
    color: "#6b7280",
  },
  checkButton: {
    backgroundColor: "#4ade80",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  checkButtonText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "500",
  },
  invoicesContainer: {
    paddingRight: 16,
  },
  invoiceCard: {
    width: screenWidth - 64,
    marginRight: 16,
    borderRadius: 12,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: "hidden",
  },
  invoiceHeader: {
    backgroundColor: "#4ade80",
    padding: 12,
  },
  invoiceHeaderText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  invoiceBody: {
    padding: 16,
  },
  invoiceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  invoiceLabel: {
    fontSize: 14,
    color: "#6b7280",
  },
  invoiceValue: {
    fontSize: 14,
    color: "#1f2937",
    fontWeight: "500",
  },
  barChartContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    paddingVertical: 20,
    height: 280,
  },
  barItem: {
    alignItems: "center",
    marginRight: 20,
  },
  bar: {
    backgroundColor: "#4ade80",
    width: 30,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  barLabel: {
    marginTop: 8,
    fontSize: 12,
    color: "#6b7280",
    textAlign: "center",
  },
  noDataText: {
    textAlign: "center",
    fontSize: 16,
    color: "#6b7280",
    marginVertical: 20,
  }
})























