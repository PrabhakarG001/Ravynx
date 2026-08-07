import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { DashboardLayout } from "../components/layout/DashboardLayout";
import Landing from "../pages/Landing";
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";
import { Upload } from "../pages/Upload";
import { Processing } from "../pages/Processing";
import { Analysis } from "../pages/Analysis";
import { Viewer } from "../pages/Viewer";
import { Analytics } from "../pages/Analytics";
import { Audit } from "../pages/Audit";
import { Report } from "../pages/Report";
export default function App() {
    return (<BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/login" element={<Login />}/>
        
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/upload" element={<Upload />}/>
          <Route path="/processing" element={<Processing />}/>
          <Route path="/analysis" element={<Analysis />}/>
          <Route path="/viewer" element={<Viewer />}/>
          <Route path="/analytics" element={<Analytics />}/>
          <Route path="/audit" element={<Audit />}/>
          <Route path="/report" element={<Report />}/>
        </Route>
        
        <Route path="*" element={<Navigate to="/" replace/>}/>
      </Routes>
    </BrowserRouter>);
}
