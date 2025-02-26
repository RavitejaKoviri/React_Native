// import React, { useState } from 'react';
// import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { useAuth } from '../../context/auth';

// export default function LoginScreen() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const { login } = useAuth();

//   const handleLogin = async () => {
//     const success = await login(username, password);
//     if (!success) {
//       setError('Invalid username or password');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <ImageBackground 
//         source={{ uri: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?q=80&w=2029&auto=format&fit=crop' }}
//         style={styles.backgroundImage}
//         resizeMode="cover"
//       >
//         <View style={styles.overlay}>
//           <View style={styles.logoContainer}>
//             <Text style={styles.logoText}>T</Text>
//             <Text style={styles.appName}>Timesera ERP</Text>
//           </View>

//           <Text style={styles.title}>Login to your account</Text>

//           <TextInput
//             style={styles.input}
//             placeholder="Enter your username"
//             placeholderTextColor="#8e8ea9"
//             value={username}
//             onChangeText={setUsername}
//           />

//           <TextInput
//             style={styles.input}
//             placeholder="Enter your password"
//             placeholderTextColor="#8e8ea9"
//             value={password}
//             onChangeText={setPassword}
//             secureTextEntry
//           />

//           {error ? <Text style={styles.errorText}>{error}</Text> : null}

//           <TouchableOpacity onPress={handleLogin}>
//             <LinearGradient
//               colors={['#65ddb7', '#5cc9a7']}
//               style={styles.button}
//             >
//               <Text style={styles.buttonText}>Submit</Text>
//             </LinearGradient>
//           </TouchableOpacity>
//         </View>
//       </ImageBackground>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   backgroundImage: {
//     flex: 1,
//   },
//   overlay: {
//     flex: 1,
//     backgroundColor: 'rgba(26, 27, 75, 0.95)',
//     padding: 20,
//     justifyContent: 'center',
//   },
//   logoContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 40,
//   },
//   logoText: {
//     fontSize: 32,
//     color: '#65ddb7',
//     fontWeight: 'bold',
//     backgroundColor: '#ffffff',
//     width: 50,
//     height: 50,
//     textAlign: 'center',
//     lineHeight: 50,
//     borderRadius: 10,
//   },
//   appName: {
//     fontSize: 24,
//     color: '#ffffff',
//     marginLeft: 10,
//     fontWeight: '600',
//   },
//   title: {
//     fontSize: 24,
//     color: '#ffffff',
//     marginBottom: 30,
//     textAlign: 'center',
//     fontWeight: '600',
//   },
//   input: {
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 10,
//     padding: 15,
//     marginBottom: 15,
//     color: '#ffffff',
//     fontSize: 16,
//   },
//   button: {
//     borderRadius: 10,
//     padding: 15,
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#ffffff',
//     textAlign: 'center',
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   errorText: {
//     color: '#ff6b6b',
//     textAlign: 'center',
//     marginBottom: 10,
//   },
// });


































// import React, { useState } from 'react';
// import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { useAuth } from '../../context/auth';

// export default function LoginScreen() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const { login } = useAuth();

//   // const handleLogin = async () => {
//   //   const success = await login(username, password);
//   //   if (!success) {
//   //     setError('Invalid username or password');
//   //   }
//   // };



//   const [loading, setLoading] = useState(false);

//   const handleLogin = async () => {
//     setLoading(true);
//     setError('');
  
//     const success = await login(username, password);
//     if (!success) {
//       setError('Invalid username or password');
//     }
  
//     setLoading(false);
//   };
  





//   return (
//     <View style={styles.container}>
//       <ImageBackground 
//         source={{ uri: 'https://images.unsplash.com/photo-1601598851547-4302969d0614?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D' }}
//         style={styles.backgroundImage}
//         resizeMode="cover"
//       >
//         <View style={styles.overlay}>
//           <View style={styles.logoContainer}>
//             <Image
//               source={require('../../assets/images/TTTTT.png')}
//               style={styles.logoImage}
//               resizeMode="contain"
//             />
//             <Image
//               source={require('../../assets/images/times era wh.png')}
//               style={styles.brandImage}
//               resizeMode="contain"
//             />
//           </View>

//           <Text style={styles.title}>Login to your account</Text>

//           <View style={styles.inputContainer}>
//             <TextInput
//               style={styles.input}
//               placeholder="Enter your username"
//               placeholderTextColor="#ffffff"
//               value={username}
//               onChangeText={setUsername}
//             />

//             <TextInput
//               style={styles.input}
//               placeholder="Enter your password"
//               placeholderTextColor="#ffffff"
//               value={password}
//               onChangeText={setPassword}
//               secureTextEntry
//             />
//           </View>

//           {error ? <Text style={styles.errorText}>{error}</Text> : null}

//           {/* <View style={styles.buttonContainer}>

//             <TouchableOpacity onPress={handleLogin}>
//               <LinearGradient
//                 colors={['#65ddb7', '#5cc9a7']}
//                 style={styles.button}
//               >
//                 <Text style={styles.buttonText}>Submit</Text>
//               </LinearGradient>
//             </TouchableOpacity>
//           </View> */}

// <View style={styles.buttonContainer}>
//   {loading ? <Text style={styles.loadingText}>Logging in...</Text> : null}
//   <TouchableOpacity onPress={handleLogin} disabled={loading}>
//     <LinearGradient
//       colors={['#65ddb7', '#5cc9a7']}
//       style={[styles.button, loading && { opacity: 0.5 }]}
//     >
//       <Text style={styles.buttonText}>Submit</Text>
//     </LinearGradient>
//   </TouchableOpacity>
// </View>



          
//         </View>
//       </ImageBackground>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   backgroundImage: {
//     flex: 1,
//   },
//   overlay: {
//     flex: 1,
//     backgroundColor: 'rgba(10, 25, 68, 0.95)',
//     padding: 20,
//     justifyContent: 'center',
//   },
//   logoContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 10,
//   },
//   logoImage: {
//     width: 80,
//     height: 70,
//     borderRadius: 10,
//     padding: 0,
//     margin: 0,
//     boxSizing: 'border-box',
//   },
//   brandImage: {
//     width: 220,
//     height: 60,
//     marginLeft: 10,
//     position: 'relative',
//     padding: 0,
//     top: 0,
//     left: -15,
//     boxSizing: 'border-box',
//   },
//   title: {
//     fontSize: 22,
//     color: '#ffffff',
//     marginBottom: 30,
//     textAlign: 'center',
//     fontWeight: '600',
//     letterSpacing: 1,
//   },
//   inputContainer: {
//     width: '80%',
//     alignSelf: 'center',
//   },
//   input: {
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 8,
//     padding: 12,
//     marginBottom: 12,
//     color: '#ffffff',
//     fontSize: 14,
//     borderWidth: 1,
//     borderColor: 'rgba(255, 255, 255, 0.7)',
//     letterSpacing: 0.5,
//   },
//   buttonContainer: {
//     alignItems: 'center',
//   },
//   button: {
//     borderRadius: 10,
//     padding: 12,
//     marginTop: 10,
//     width: 150,
//   },
//   buttonText: {
//     color: '#ffffff',
//     textAlign: 'center',
//     fontSize: 16,
//     fontWeight: '600',
//     letterSpacing: 1,
//   },
//   errorText: {
//     color: '#ff6b6b',
//     textAlign: 'center',
//     marginBottom: 10,
//     letterSpacing: 0.5,
//   },
//   loadingText: {
//     color: '#ffffff',
//     textAlign: 'center',
//     fontSize: 14,
//     marginBottom: 10,
//   }
  
// });





























import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useAuth } from "../../context/auth";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setError("");

    const success = await login(username, password);
    if (!success) {
      setError("Invalid username or password");
    }

    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: "https://images.unsplash.com/photo-1601598851547-4302969d0614?w=600&auto=format&fit=crop&q=60" }}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <View style={styles.logoContainer}>
            <Image source={require("../../assets/images/TTTTT.png")} style={styles.logoImage} resizeMode="contain" />
            <Image source={require("../../assets/images/times era wh.png")} style={styles.brandImage} resizeMode="contain" />
          </View>

          <Text style={styles.title}>Login to your account</Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter your username"
              placeholderTextColor="#ffffff"
              value={username}
              onChangeText={setUsername}
            />

            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              placeholderTextColor="#ffffff"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          {error ? <Text style={styles.errorText}>{error}</Text> : null}

          <View style={styles.buttonContainer}>
            {loading ? <Text style={styles.loadingText}>Logging in...</Text> : null}
            <TouchableOpacity onPress={handleLogin} disabled={loading}>
              <LinearGradient colors={["#65ddb7", "#5cc9a7"]} style={[styles.button, loading && { opacity: 0.5 }]}>
                <Text style={styles.buttonText}>Submit</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  backgroundImage: { flex: 1 },
  overlay: { flex: 1, backgroundColor: "rgba(10, 25, 68, 0.95)", padding: 20, justifyContent: "center" },
  logoContainer: { flexDirection: "row", alignItems: "center", justifyContent: "center", marginBottom: 10 },
  logoImage: { width: 80, height: 70, borderRadius: 10 },
  brandImage: { width: 220, height: 60, marginLeft: 10, position: "relative", left: -15 },
  title: { fontSize: 22, color: "#ffffff", marginBottom: 30, textAlign: "center", fontWeight: "600", letterSpacing: 1 },
  inputContainer: { width: "80%", alignSelf: "center" },
  input: { backgroundColor: "rgba(255, 255, 255, 0.1)", borderRadius: 8, padding: 12, marginBottom: 12, color: "#ffffff" },
  buttonContainer: { alignItems: "center" },
  button: { borderRadius: 10, padding: 12, marginTop: 10, width: 150 },
  buttonText: { color: "#ffffff", textAlign: "center", fontSize: 16, fontWeight: "600", letterSpacing: 1 },
  errorText: { color: "#ff6b6b", textAlign: "center", marginBottom: 10, letterSpacing: 0.5 },
  loadingText: { color: "#ffffff", textAlign: "center", fontSize: 14, marginBottom: 10 },
});















