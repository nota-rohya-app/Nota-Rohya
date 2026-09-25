// ============================================================================
// إعدادات Firebase - استبدل القيم التالية بإعدادات مشروعك
// من Firebase Console: Project Settings -> General -> Your apps -> SDK setup
// راجع ملف SETUP.md للشرح خطوة بخطوة
// ============================================================================
const firebaseConfig = {
  apiKey: "AIzaSyBgSYuXzBm1v6Si-6EH7LS3rRCHgl_XTdY",
  authDomain: "nota-roheya---2026.firebaseapp.com",
  projectId: "nota-roheya---2026",
  storageBucket: "nota-roheya---2026.firebasestorage.app",
  messagingSenderId: "385127675487",
  appId: "1:385127675487:web:1a76dc1f02115dd4404dea",
  measurementId: "G-LQS0PR5ZKC"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
