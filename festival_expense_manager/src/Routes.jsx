import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import DashboardOverview from './pages/dashboard-overview';
import FinancialReports from './pages/financial-reports';
import AddTransaction from './pages/add-transaction';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<AddTransaction />} />
        <Route path="/dashboard-overview" element={<DashboardOverview />} />
        <Route path="/financial-reports" element={<FinancialReports />} />
        <Route path="/add-transaction" element={<AddTransaction />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
