import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'x-state-training',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
