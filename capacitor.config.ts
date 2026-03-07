import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.michel.garlandat.mesrestos',
  appName: 'MesRestos',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    Camera: {
      // Permissions demandées au runtime iOS
    },
    Geolocation: {
      // Permissions dans Info.plist
    },
    StatusBar: {
      style: 'DEFAULT',
      backgroundColor: '#fffcf8'
    }
  },
  ios: {
    contentInset: 'automatic',
    backgroundColor: '#faf6f0'
  }
};

export default config;
