// import { Stack } from 'expo-router';
// import { useAuth } from '../../context/auth';

// export default function AppLayout() {
//   const { isLoggedIn } = useAuth();

//   // Protect the app routes
//   if (!isLoggedIn) {
//     return null;
//   }

//   return (
//     <Stack screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="index" />
//     </Stack>
//   );
// }










// app/(app)/_layout.tsx   
import { Stack } from 'expo-router';
import { useAuth } from '../../context/auth';
import { View } from 'react-native';
import Navbar from '@/components/Navbar';

export default function AppLayout() {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <Navbar />
     
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="crm" options={{ headerShown: false }} />
        <Stack.Screen name="inventory" options={{ headerShown: false }} />
        <Stack.Screen name="pos" options={{ headerShown: false }} />
        <Stack.Screen name="accounts" options={{ headerShown: false }} />
        <Stack.Screen name="purchase" options={{ headerShown: false }} />
        <Stack.Screen name="top-ten" options={{ headerShown: false }} />
        <Stack.Screen name="graphs" options={{ headerShown: false }} />
      </Stack>
    </View>
  );
}