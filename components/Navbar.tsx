// // components/Navbar.tsx
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Pressable } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { useAuth } from '../context/auth';
// import Sidebar from './Sidebar';

// export default function Navbar() {
//   const { logout } = useAuth();
//   const [sidebarVisible, setSidebarVisible] = useState(false);

//   return (
//     <>
//       <View style={styles.header}>
//         <Text style={styles.logo}>TimesEra ERP</Text>
//         <Pressable 
//           style={styles.menuButton}
//           onPress={() => setSidebarVisible(true)}>
//           <Ionicons name="menu" size={24} color="#ffffff" />
//         </Pressable>
//       </View>

//       <Sidebar
//         visible={sidebarVisible}
//         onClose={() => setSidebarVisible(false)}
//         logout={logout}
//       />
//     </>
//   );
// }

// const styles = StyleSheet.create({
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
// });






















// components/Navbar.tsx
import React, { useState } from 'react';
import { View, Image, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../context/auth';
import Sidebar from './Sidebar';

export default function Navbar() {
  const { logout } = useAuth();
  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    <>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image 
            source={require('../assets/images/TTTTT.png')}
            style={styles.logoImage}
            resizeMode="contain"
          />
          <Image 
            source={require('../assets/images/times era wh.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <Pressable 
          style={styles.menuButton}
          onPress={() => setSidebarVisible(true)}>
          <Ionicons name="menu" size={30} color="#ffffff" />
        </Pressable>
      </View>

      <Sidebar
        visible={sidebarVisible}
        onClose={() => setSidebarVisible(false)}
        logout={logout}
      />
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgba(7, 28, 86, 0.95)',
    paddingTop:5,
    paddingBottom:5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap:0,
  },
  logoImage: {
    width: 60,
    height: 50,
    // backgroundColor: 'green',
    margin:0,
    padding:0,
    boxSizing:'border-box',
  },
  logo: {
    width: 130,
    height: 40,
    // backgroundColor: 'white',
    margin:0,
    padding:0,
    boxSizing:'border-box',
    position:'relative',
    left:-8,
    top:-1,
  },
  menuButton: {
    padding: 8,
    marginRight:10,
    width:40,
    height:40,
    // padding:0,
    boxSizing:'border-box',
  },
});