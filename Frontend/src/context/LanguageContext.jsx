import React, { createContext, useContext, useState, useEffect } from 'react';

const translations = {
  en: {
    // Auth & Login
    welcomeBack: "Welcome back",
    createAccount: "Create your account",
    enterPhoneSub: "Enter the phone number associated with your account",
    createAccountSub: "Start your 14-day free trial. Instant access to AI verification.",
    fullName: "Full name",
    workEmail: "Work email address",
    phoneNumber: "Phone number",
    companyName: "Company / Institution name (optional)",
    continueBtn: "Continue",
    createAccountBtn: "Create Account",
    orContinueWith: "or continue with",
    dontHaveAccount: "Don't have an account?",
    alreadyHaveAccount: "Already have an account?",
    loginBtn: "Log in",
    signupBtn: "Sign up",
    privacyPolicy: "Privacy Policy",
    terms: "Terms",
    processing: "Processing...",
    
    // Left Panel Auth
    leftHeadline: "AI-Powered Document Verification Platform",
    leftSub: "Instantly verify financial documents, detect fraud, and generate risk scores for faster, safer lending decisions.",
    bankSecurity: "Bank-Grade Security",
    aiDocVerify: "AI Document Verification",
    realtimeRisk: "Real-Time Risk Scoring",
    trustedFooter: "Trusted by leading NBFCs and financial institutions",

    // Landing Page & Nav
    capabilities: "Capabilities",
    howItWorks: "How it Works",
    architecture: "Architecture",
    team: "Team",
    heroTitle: "AI-Powered Underwriting & Document Fraud Detection",
    heroSub: "Instantly analyze financial and legal documents, detect fraud patterns, and generate explainable risk scores for faster, safer lending decisions.",
    launchDashboard: "Launch Dashboard",
    tryDemo: "Try Demo",
    coreCapabilities: "Core Capabilities",
    bottleneckTitle: "The Underwriting Bottleneck",
    manualVerification: "Manual Verification",
    ravynxAiEngine: "Ravynx AI Engine",

    // Nav & Sidebar
    home: "Home",
    uploadDocuments: "Upload Documents",
    analysis: "Analysis",
    docViewer: "Document Viewer",
    genReport: "Generated Report",
    riskAnalytics: "Risk Analytics",
    auditLogs: "Audit Logs",
    getHelp: "Get Help",
    settings: "Settings",
    logout: "Log out",
  },
  hi: {
    // Auth & Login
    welcomeBack: "वापसी पर आपका स्वागत है",
    createAccount: "अपना खाता बनाएं",
    enterPhoneSub: "अपने खाते से जुड़ा फोन नंबर दर्ज करें",
    createAccountSub: "अपना 14 दिनों का निःशुल्क परीक्षण शुरू करें। एआई सत्यापन की तुरंत पहुंच।",
    fullName: "पूरा नाम",
    workEmail: "कार्य ईमेल पता",
    phoneNumber: "फोन नंबर",
    companyName: "कंपनी / संस्था का नाम (वैकल्पिक)",
    continueBtn: "आगे बढ़ें",
    createAccountBtn: "खाता बनाएं",
    orContinueWith: "या इसके साथ जारी रखें",
    dontHaveAccount: "खाता नहीं है?",
    alreadyHaveAccount: "पहले से ही एक खाता है?",
    loginBtn: "लॉग इन करें",
    signupBtn: "साइन अप करें",
    privacyPolicy: "गोपनीयता नीति",
    terms: "नियम एवं शर्तें",
    processing: "प्रक्रिया जारी है...",

    // Left Panel Auth
    leftHeadline: "एआई-संचालित दस्तावेज़ सत्यापन प्लेटफ़ॉर्म",
    leftSub: "ऋण निर्णयों को तेज और सुरक्षित बनाने के लिए वित्तीय दस्तावेजों का सत्यापन करें, धोखाधड़ी का पता लगाएं और जोखिम स्कोर बनाएं।",
    bankSecurity: "बैंक-स्तरीय सुरक्षा",
    aiDocVerify: "एआई दस्तावेज़ सत्यापन",
    realtimeRisk: "रियल-टाइम जोखिम स्कोरिंग",
    trustedFooter: "प्रमुख एनबीएफसी और वित्तीय संस्थानों द्वारा विश्वसनीय",

    // Landing Page & Nav
    capabilities: "क्षमताएं",
    howItWorks: "यह कैसे काम करता है",
    architecture: "आर्किटेक्चर",
    team: "हमारी टीम",
    heroTitle: "एआई-संचालित अंडरराइटिंग और दस्तावेज़ धोखाधड़ी पहचान",
    heroSub: "तेज़, सुरक्षित ऋण निर्णयों के लिए वित्तीय और कानूनी दस्तावेजों का तुरंत विश्लेषण करें, धोखाधड़ी पैटर्न का पता लगाएं।",
    launchDashboard: "डैशबोर्ड खोलें",
    tryDemo: "डेमो आज़माएं",
    coreCapabilities: "मुख्य क्षमताएं",
    bottleneckTitle: "अंडरराइटिंग की चुनौतियाँ",
    manualVerification: "मैन्युअल सत्यापन",
    ravynxAiEngine: "रावेनक्स एआई इंजन",

    // Nav & Sidebar
    home: "मुख्य पृष्ठ",
    uploadDocuments: "दस्तावेज़ अपलोड करें",
    analysis: "विश्लेषण",
    docViewer: "दस्तावेज़ दर्शक",
    genReport: "उत्पन्न रिपोर्ट",
    riskAnalytics: "जोखिम विश्लेषण",
    auditLogs: "ऑडिट लॉग",
    getHelp: "सहायता लें",
    settings: "सेटिंग्स",
    logout: "लॉग आउट करें",
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(localStorage.getItem('ravynx_lang') || 'en');

  const setLanguage = (lang) => {
    setLanguageState(lang);
    localStorage.setItem('ravynx_lang', lang);
  };

  const t = (key) => {
    return translations[language]?.[key] || translations['en']?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
