// import { useEffect } from 'react';
// import { Stack } from 'expo-router';
// import { AuthProvider } from '../context/auth';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';

// export default function RootLayout() {
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <AuthProvider>
//         <Stack screenOptions={{ headerShown: false }}>
//           <Stack.Screen name="(auth)" options={{ headerShown: false }} />
//           <Stack.Screen name="(app)" options={{ headerShown: false }} />
//         </Stack>
//       </AuthProvider>
//     </GestureHandlerRootView>
//   );
// }














import { useEffect } from "react";
import { Stack } from "expo-router";
import { AuthProvider } from "../context/auth";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create QueryClient instance
const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="(app)" options={{ headerShown: false }} />
          </Stack>
        </AuthProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
