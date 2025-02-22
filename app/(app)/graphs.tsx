import React from 'react';
import { View, Text, StyleSheet, Pressable,ScrollView } from 'react-native';
import { Accordion } from '../../components/Accordion';
import MyCarousel from '@/components/MyCarousel';

export default function Graphs() {
  return (
    <ScrollView>
      <MyCarousel/>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Graphs</Text>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Expand All</Text>
          </Pressable>
          <Pressable style={[styles.button, styles.collapseButton]}>
            <Text style={styles.buttonText}>Collapse All</Text>
          </Pressable>
        </View>
      </View>

      <Accordion title="Sales Analytics">
        <Text style={styles.emptyText}>No sales data available</Text>
      </Accordion>

      <Accordion title="Revenue Trends">
        <Text style={styles.emptyText}>No revenue data available</Text>
      </Accordion>

      <Accordion title="Inventory Levels">
        <Text style={styles.emptyText}>No inventory data available</Text>
      </Accordion>

      <Accordion title="Customer Growth">
        <Text style={styles.emptyText}>No customer data available</Text>
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
  header: {
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1e40af',
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  button: {
    backgroundColor: '#4ade80',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  collapseButton: {
    backgroundColor: '#ef4444',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '500',
  },
  emptyText: {
    color: '#6b7280',
    fontStyle: 'italic',
  },
});