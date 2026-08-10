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
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(localStorage.getItem('ravynx_lang') || 'en');

  const applyGoogleTranslate = (lang) => {
    try {
      const langCode = lang === 'hi' ? '/en/hi' : '/en/en';
      const domain = window.location.hostname;
      
      document.cookie = `googtrans=${langCode}; path=/; domain=${domain}`;
      document.cookie = `googtrans=${langCode}; path=/;`;
      
      const select = document.querySelector('.goog-te-combo');
      if (select) {
        select.value = lang === 'hi' ? 'hi' : 'en';
        select.dispatchEvent(new Event('change'));
      } else {
        // Retry trigger once widget initializes
        setTimeout(() => {
          const combo = document.querySelector('.goog-te-combo');
          if (combo) {
            combo.value = lang === 'hi' ? 'hi' : 'en';
            combo.dispatchEvent(new Event('change'));
          }
        }, 800);
      }
    } catch (e) {
      console.warn("Google Translate helper:", e);
    }
  };

  useEffect(() => {
    const storedLang = localStorage.getItem('ravynx_lang');
    if (storedLang === 'hi') {
      applyGoogleTranslate('hi');
    }
  }, []);

  const setLanguage = (lang) => {
    setLanguageState(lang);
    localStorage.setItem('ravynx_lang', lang);
    applyGoogleTranslate(lang);
  };

  const t = (key) => {
    return translations['en']?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
