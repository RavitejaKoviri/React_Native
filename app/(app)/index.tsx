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





















"use client"

import { useState } from "react"
import { View, Text, StyleSheet, ScrollView, Pressable, Dimensions } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { LineChart } from "react-native-chart-kit"
import Sidebar from "../../components/Sidebar"
import { useAuth } from "../../context/auth"
import MyCarousel from "@/components/MyCarousel"

const screenWidth = Dimensions.get("window").width

const chartConfig = {
  backgroundGradientFrom: "#ffffff",
  backgroundGradientTo: "#ffffff",
  color: (opacity = 1) => `rgba(74, 222, 128, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
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
    fontSize: 12,
    fill: "#6b7280",
  },
  withDots: false,
  withInnerLines: true,
  withOuterLines: true,
  withVerticalLabels: true,
  withHorizontalLabels: true,
  withShadow: false,
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

const invoices = [
  {
    id: "23",
    name: "ANNAPOORNA",
    amount: 19200.0,
    quantity: 1,
    date: "7/12/2024",
  },
  {
    id: "153",
    name: "John Doe",
    amount: 25000.0,
    quantity: 2,
    date: "7/12/2024",
  },
]

export default function Dashboard() {
  const { logout } = useAuth()
  const [sidebarVisible, setSidebarVisible] = useState(false)

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.carouselContainer}>
          <MyCarousel />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Sales Overview</Text>
          <View style={styles.statsRow}>
            <View style={styles.stat}>
              <Text style={styles.statLabel}>Total Bills</Text>
              <Text style={styles.statValue}>0</Text>
            </View>
          </View>
          <View style={styles.statsRow}>
            <View style={styles.stat}>
              <Text style={styles.statLabel}>Total Sales</Text>
              <Text style={styles.statValue}>₹0.00</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Collections</Text>
          <View style={styles.collectionsGrid}>
            {["Cash", "Card", "Online", "UPI", "Cheque", "Balance"].map((title) => (
              <View key={title} style={styles.collectionCircle}>
                <Text style={styles.collectionTitle}>{title}</Text>
                <Text style={styles.collectionAmount}>₹0.00</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Total Sales</Text>
          <View style={styles.chartWrapper}>
            <LineChart
              data={data}
              width={screenWidth - 64}
              height={220}
              chartConfig={chartConfig}
              bezier
              style={styles.chart}
            />
          </View>
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
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            contentContainerStyle={styles.invoicesContainer}
          >
            {invoices.map((invoice) => (
              <View key={invoice.id} style={styles.invoiceCard}>
                <View style={styles.invoiceHeader}>
                  <Text style={styles.invoiceHeaderText}>Invoice #{invoice.id}</Text>
                </View>
                <View style={styles.invoiceBody}>
                  <View style={styles.invoiceRow}>
                    <Text style={styles.invoiceLabel}>Name:</Text>
                    <Text style={styles.invoiceValue}>{invoice.name}</Text>
                  </View>
                  <View style={styles.invoiceRow}>
                    <Text style={styles.invoiceLabel}>Amount:</Text>
                    <Text style={styles.invoiceValue}>₹{invoice.amount.toFixed(2)}</Text>
                  </View>
                  <View style={styles.invoiceRow}>
                    <Text style={styles.invoiceLabel}>Quantity:</Text>
                    <Text style={styles.invoiceValue}>{invoice.quantity}</Text>
                  </View>
                  <View style={styles.invoiceRow}>
                    <Text style={styles.invoiceLabel}>Date:</Text>
                    <Text style={styles.invoiceValue}>{invoice.date}</Text>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
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
  },
  collectionCircle: {
    width: "30%",
    aspectRatio: 1,
    backgroundColor: "#f3f4f6",
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
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
})


