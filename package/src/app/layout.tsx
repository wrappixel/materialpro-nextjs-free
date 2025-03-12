"use client";
import { baselightTheme } from "@/utils/theme/DefaultColors";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { DashboardContextProvider } from "./context/DashboardContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       <head>
       <link rel="icon" href="/images/favicon.ico" />
        <title>MaterialPro React + Ts + Mui</title>
      </head> 
      <body>
        <ThemeProvider theme={baselightTheme}>
          <DashboardContextProvider>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {children}
          </DashboardContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
