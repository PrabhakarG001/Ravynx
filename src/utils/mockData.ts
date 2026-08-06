export const monthlyData = [
  { month: "Jan", docs: 42, fraud: 5, safe: 37 },
  { month: "Feb", docs: 58, fraud: 8, safe: 50 },
  { month: "Mar", docs: 71, fraud: 6, safe: 65 },
  { month: "Apr", docs: 64, fraud: 11, safe: 53 },
  { month: "May", docs: 89, fraud: 14, safe: 75 },
  { month: "Jun", docs: 95, fraud: 9, safe: 86 },
  { month: "Jul", docs: 112, fraud: 18, safe: 94 },
  { month: "Aug", docs: 78, fraud: 7, safe: 71 },
];

export const riskTypeData = [
  { name: "Metadata Mismatch", value: 38 },
  { name: "Owner Discrepancy", value: 27 },
  { name: "Survey Anomaly", value: 19 },
  { name: "Financial Fraud", value: 16 },
];

export const processingTimeData = [
  { month: "Apr", avg: 4.2 },
  { month: "May", avg: 3.8 },
  { month: "Jun", avg: 3.1 },
  { month: "Jul", avg: 2.7 },
  { month: "Aug", avg: 2.4 },
];

export const auditLogs = [
  { id: "AL-0041", time: "2026-08-05 14:32", user: "analyst.priya@pnb.in", action: "Document Uploaded", doc: "DEED-2026-0821", status: "success" },
  { id: "AL-0040", time: "2026-08-05 13:18", user: "officer.rajan@pnb.in", action: "Risk Report Generated", doc: "LAND-2026-0719", status: "success" },
  { id: "AL-0039", time: "2026-08-05 11:44", user: "analyst.priya@pnb.in", action: "Analysis Flagged", doc: "GST-2026-0302", status: "warning" },
  { id: "AL-0038", time: "2026-08-05 10:05", user: "admin.sharma@pnb.in", action: "User Login", doc: "—", status: "success" },
  { id: "AL-0037", time: "2026-08-04 17:22", user: "officer.rajan@pnb.in", action: "Document Rejected", doc: "DEED-2026-0810", status: "danger" },
  { id: "AL-0036", time: "2026-08-04 15:09", user: "analyst.meena@pnb.in", action: "OCR Processing Failed", doc: "BANK-2026-0115", status: "danger" },
  { id: "AL-0035", time: "2026-08-04 13:50", user: "analyst.priya@pnb.in", action: "Analysis Completed", doc: "LAND-2026-0714", status: "success" },
  { id: "AL-0034", time: "2026-08-04 09:30", user: "admin.sharma@pnb.in", action: "System Backup", doc: "—", status: "success" },
];

export const COLORS = ["#7A1F1F", "#1e40af", "#15803d", "#b45309"];
