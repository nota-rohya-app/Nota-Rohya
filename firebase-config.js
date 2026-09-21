// ============================================================================
// إعدادات Firebase - استبدل القيم التالية بإعدادات مشروعك
// من Firebase Console: Project Settings -> General -> Your apps -> SDK setup
// راجع ملف SETUP.md للشرح خطوة بخطوة
// ============================================================================
const firebaseConfig = {
  apiKey: "AIzaSyAZd4W7GjhS7qreTlHEzQph_9stqd1sr30",
  authDomain: "nota-rohya-1ec23.firebaseapp.com",
  projectId: "nota-rohya-1ec23",
  storageBucket: "nota-rohya-1ec23.firebasestorage.app",
  messagingSenderId: "39996331097",
  appId: "1:39996331097:web:d7ed1c69a42c83cb020d48"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
