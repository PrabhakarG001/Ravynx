import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { AuthProvider } from "./context/AuthContext";
import { DashboardLayout } from './components/layout/DashboardLayout/DashboardLayout';
import Landing from "./pages/Landing/Landing";
import { Login } from "./pages/Login/Login";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Upload } from "./pages/Upload/Upload";
import { Analysis } from "./pages/Analysis/Analysis";
import { Viewer } from "./pages/Viewer/Viewer";
import { Analytics } from "./pages/Analytics/Analytics";
import { Audit } from "./pages/Audit/Audit";
import { Report } from "./pages/Report/Report";
import { Profile } from "./pages/Profile/Profile";
import { Teams } from "./pages/Teams/Teams";
import { Help } from "./pages/Help/Help";
import { Settings } from "./pages/Settings/Settings";

export default function App() {
    return (
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />}/>
            <Route path="/login" element={<Login />}/>
            
            <Route element={<DashboardLayout />}>
              <Route path="/dashboard" element={<Dashboard />}/>
              <Route path="/profile" element={<Profile />}/>
              <Route path="/teams" element={<Teams />}/>
              <Route path="/help" element={<Help />}/>
              <Route path="/settings" element={<Settings />}/>
              <Route path="/upload" element={<Upload />}/>
              <Route path="/analysis" element={<Analysis />}/>

              <Route path="/viewer" element={<Viewer />}/>
              <Route path="/analytics" element={<Analytics />}/>
              <Route path="/audit" element={<Audit />}/>
              <Route path="/report" element={<Report />}/>
            </Route>
            
            <Route path="*" element={<Navigate to="/" replace/>}/>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    );
}

