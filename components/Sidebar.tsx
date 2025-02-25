// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Modal, Animated, Dimensions } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { useAuth } from '../context/auth';
// import { useRouter, usePathname } from 'expo-router';

// interface SidebarProps {
//   visible: boolean;
//   onClose: () => void;
// }

// const { width: screenWidth } = Dimensions.get('window');

// export default function Sidebar({ visible, onClose }: SidebarProps) {
//   const { logout } = useAuth();
//   const router = useRouter();
//   const currentPath = usePathname();
//   const [slideAnim] = React.useState(new Animated.Value(screenWidth));

//   React.useEffect(() => {
//     Animated.timing(slideAnim, {
//       toValue: visible ? 0 : screenWidth,
//       duration: 300,
//       useNativeDriver: true,
//     }).start();
//   }, [visible]);

//   const handleNavigation = (route: string) => {
//     onClose();
//     router.push(route);
//   };

//   const menuItems = [
//     { icon: 'home-outline', label: 'HOME', route: '/' },
//     { icon: 'trophy-outline', label: 'Top Ten', route: '/top-ten' },
//     { icon: 'cart-outline', label: 'Point of Sales', route: '/pos' },
//     { icon: 'cube-outline', label: 'Inventory', route: '/inventory' },
//     { icon: 'wallet-outline', label: 'Accounts', route: '/accounts' },
//     { icon: 'bag-handle-outline', label: 'Purchase', route: '/purchase' },
//     { icon: 'people-outline', label: 'CRM', route: '/crm' },
//     { icon: 'stats-chart-outline', label: 'Graphs', route: '/graphs' },
//   ];

//   return (
//     <Modal
//       visible={visible}
//       animationType="none"
//       transparent={true}
//       onRequestClose={onClose}
//     >
//       <View style={styles.container}>
//         <TouchableOpacity style={styles.backdrop} activeOpacity={1} onPress={onClose} />
//         <Animated.View style={[styles.sidebar, { transform: [{ translateX: slideAnim }] }]}>
//           <TouchableOpacity style={styles.closeButton} onPress={onClose}>
//             <Ionicons name="close" size={24} color="#fff" />
//           </TouchableOpacity>

//           <View style={styles.profileSection}>
//             <View style={styles.profileImage}>
//               <Text style={styles.profileInitial}>T</Text>
//             </View>
//           </View>

//           <View style={styles.menuItems}>
//             {menuItems.map((item, index) => {
//               const isActive = currentPath === item.route;
//               return (
//                 <TouchableOpacity
//                   key={index}
//                   style={[styles.menuItem, isActive && styles.activeMenuItem]}
//                   onPress={() => handleNavigation(item.route)}
//                 >
//                   <Ionicons name={item.icon as any} size={24} color={isActive ? '#ffffff' : '#65ddb7'} />
//                   <Text style={[styles.menuText, isActive && styles.activeMenuText]}>{item.label}</Text>
//                 </TouchableOpacity>
//               );
//             })}
//           </View>

//           <TouchableOpacity style={styles.logoutButton} onPress={logout}>
//             <Text style={styles.logoutText}>Logout</Text>
//             <Text style={styles.versionText}>V 1.0</Text>
//           </TouchableOpacity>
//         </Animated.View>
//       </View>
//     </Modal>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   backdrop: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//   },
//   sidebar: {
//     position: 'absolute',
//     top: 0,
//     right: 0,
//     width: '80%',
//     height: '100%',
//     backgroundColor: '#1a1b4b',
//     padding: 20,
//   },
//   closeButton: {
//     alignSelf: 'flex-end',
//     padding: 10,
//   },
//   profileSection: {
//     alignItems: 'center',
//     marginVertical: 20,
//   },
//   profileImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     backgroundColor: '#ffffff',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   profileInitial: {
//     fontSize: 32,
//     color: '#65ddb7',
//     fontWeight: 'bold',
//   },
//   menuItems: {
//     marginTop: 20,
//   },
//   menuItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: 'rgba(255, 255, 255, 0.1)',
//   },
//   activeMenuItem: {
//     backgroundColor: '#65ddb7',
//   },
//   menuText: {
//     color: '#ffffff',
//     marginLeft: 15,
//     fontSize: 16,
//   },
//   activeMenuText: {
//     color: '#ffffff',
//     fontWeight: 'bold',
//   },
//   logoutButton: {
//     position: 'absolute',
//     bottom: 20,
//     left: 20,
//     right: 20,
//   },
//   logoutText: {
//     color: '#65ddb7',
//     fontSize: 18,
//     textAlign: 'center',
//     fontWeight: '600',
//   },
//   versionText: {
//     color: '#ffffff',
//     fontSize: 12,
//     textAlign: 'center',
//     marginTop: 5,
//   },
// });
















import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Animated, Dimensions, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../context/auth';
import { useRouter, usePathname } from 'expo-router';

interface SidebarProps {
  visible: boolean;
  onClose: () => void;
}

const { width: screenWidth } = Dimensions.get('window');

export default function Sidebar({ visible, onClose }: SidebarProps) {
  const { logout } = useAuth();
  const router = useRouter();
  const currentPath = usePathname();
  const [slideAnim] = React.useState(new Animated.Value(screenWidth));

  React.useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: visible ? 0 : screenWidth,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [visible]);

  const handleNavigation = (route: string) => {
    onClose();
    router.push(route as any);
  };

  const menuItems = [
    { icon: 'home', label: 'HOME', route: '/' },
    { icon: 'trophy', label: 'Top Ten', route: '/top-ten' },
    { icon: 'analytics', label: 'Point of Sales', route: '/pos' },
    { icon: 'document-text', label: 'Inventory', route: '/inventory' },
    { icon: 'people', label: 'Accounts', route: '/accounts' },
    { icon: 'cart', label: 'Purchase', route: '/purchase' },
    { icon: 'people-circle', label: 'CRM', route: '/crm' },
    { icon: 'stats-chart', label: 'Graphs', route: '/graphs' },
  ];

  return (
    <Modal
      visible={visible}
      animationType="none"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <TouchableOpacity style={styles.backdrop} activeOpacity={1} onPress={onClose} />
        <Animated.View style={[styles.sidebar, { transform: [{ translateX: slideAnim }] }]}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Ionicons name="close" size={28} color="#fff" />
          </TouchableOpacity>
          
          <View style={styles.logoContainer}>
            <View style={styles.logo}>
              <Image 
                source={require('../assets/images/TTTTT.png')}
                style={styles.logoImage}
                resizeMode="contain"
              />
            </View>
          </View>

          <View style={styles.menuItems}>
            {menuItems.map((item, index) => {
              const isActive = currentPath === item.route;
              return (
                <View key={index}>
                  <TouchableOpacity
                    style={styles.menuItem}
                    onPress={() => handleNavigation(item.route)}
                  >
                    <Ionicons 
                      name={item.icon as any} 
                      size={24} 
                      color={isActive ? '#65ddb7' : '#ffffff'} 
                    />
                    <Text style={[
                      styles.menuText,
                      isActive && styles.activeMenuText
                    ]}>
                      {item.label}
                    </Text>
                  </TouchableOpacity>
                  <View style={styles.separator} />
                </View>
              );
            })}
          </View>

          <View style={styles.footer}>
            <TouchableOpacity style={styles.logoutButton} onPress={logout}>
              <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
            <Text style={styles.versionText}>V 1.0</Text>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '80%',
    height: '100%',
    backgroundColor: '#1a237e',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 40,
  },
  logo: {
    width: 150,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  menuItems: {
    marginTop: 0,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  menuText: {
    color: '#ffffff',
    marginLeft: 15,
    fontSize: 16,
    fontWeight: '500',
  },
  activeMenuText: {
    color: '#65ddb7',
    fontWeight: '600',
  },
  separator: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginLeft: 20,
  },
  footer: {
    marginTop: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  logoutButton: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 24,
    marginBottom: 10,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  versionText: {
    color: '#fff',
    fontSize: 14,
    opacity: 0.8,
  },
});