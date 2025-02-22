// components/Navbar.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../context/auth';
import Sidebar from './Sidebar';

export default function Navbar() {
  const { logout } = useAuth();
  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.logo}>TimesEra ERP</Text>
        <Pressable 
          style={styles.menuButton}
          onPress={() => setSidebarVisible(true)}>
          <Ionicons name="menu" size={24} color="#ffffff" />
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
   
    backgroundColor: '#1a1b4b',
    padding: 20,
    
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '600',
  },
  menuButton: {
    padding: 8,
  },
});