import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  StyleSheet,
  Image,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const AUTO_SCROLL_INTERVAL = 3000;

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollViewRef = useRef(null);

  const data = [
    {
      title: 'Sales Overview',
      description: 'Track your daily sales performance',
      image: 'https://images.unsplash.com/photo-1726607424599-db0c41681494?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8cmV0YWlsfGVufDB8fDB8fHww',
    },
    {
      title: 'Inventory Status', 
      description: 'Monitor your stock levels',
      image: 'https://plus.unsplash.com/premium_photo-1664202219714-7451573a4fa7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'Inventory Status',
      description: 'Monitor your stock levels', 
      image: 'https://images.unsplash.com/photo-1601598851547-4302969d0614?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'Sales Overview',
      description: 'Track your daily sales performance',
      image: 'https://images.unsplash.com/photo-1571867424488-4565932edb41?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'Inventory Status',
      description: 'Monitor your stock levels',
      image: 'https://images.unsplash.com/photo-1601642263169-e6159cd2320e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      const nextSlide = (activeSlide + 1) % data.length;
      setActiveSlide(nextSlide);
      scrollViewRef.current?.scrollTo({
        x: nextSlide * SCREEN_WIDTH,
        animated: true,
      });
    }, AUTO_SCROLL_INTERVAL);

    return () => clearInterval(timer);
  }, [activeSlide]);

  const handleScroll = (event) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const currentIndex = Math.round(contentOffset.x / SCREEN_WIDTH);
    if (currentIndex !== activeSlide) {
      setActiveSlide(currentIndex);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        scrollEventThrottle={16}
        decelerationRate="fast"
      >
        {data.map((item, index) => (
          <View key={index} style={styles.slide}>
            <Image
              source={{ uri: item.image }}
              style={styles.image}
              resizeMode="cover"
            />
            {/* <View style={styles.content}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View> */}
          </View>
        ))}
      </ScrollView>

      {/* Pagination Dots */}
      {/* <View style={styles.pagination}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              index === activeSlide && styles.paginationDotActive,
            ]}
          />
        ))}
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 200,
    marginTop: -1,
    marginBottom: 16,
  },
  slide: {
    width: SCREEN_WIDTH,
    height: '100%',
    backgroundColor: '#fff',
  },
  image: {
    width: SCREEN_WIDTH,
    height: '100%',
    backgroundColor: '#fff',
  },
  content: {
    position: 'absolute', 
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: 'white',
  },
  pagination: {
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.5)',
    marginHorizontal: 4,
  },
  paginationDotActive: {
    backgroundColor: 'white',
    width: 16,
  },
});

export default Carousel;