import React, { useState, useEffect } from 'react';
import NavigationBar from '../../components/ui/NavigationBar';
import QuickActionButton from '../../components/ui/QuickActionButton';
import ReportControls from './components/ReportControls';
import SummaryCards from './components/SummaryCards';
import SpendingChart from './components/SpendingChart';
import DataTable from './components/DataTable';
import Icon from '../../components/AppIcon';

const FinancialReports = () => {
  const [filters, setFilters] = useState({
    dateRange: 'last30days',
    reportType: 'overview',
    categoryFilter: 'all'
  });

  const [reportData, setReportData] = useState({
    summaryData: {
      totalIncome: 8500,
      incomeChange: 12.5,
      totalExpenses: 6750,
      expenseChange: -8.3,
      netBalance: 1750,
      balanceChange: 15.2,
      avgDailySpending: 225,
      avgSpendingChange: -5.1,
      topCategory: {
        name: "Food & Catering",
        amount: 2100
      },
      budgetVariance: -350,
      variancePercentage: -4.2
    },
    categoryData: [
      { name: "Food & Catering", value: 2100, percentage: 31.1 },
      { name: "Decorations", value: 1850, percentage: 27.4 },
      { name: "Gifts", value: 1200, percentage: 17.8 },
      { name: "Clothing", value: 950, percentage: 14.1 },
      { name: "Travel", value: 450, percentage: 6.7 },
      { name: "Entertainment", value: 200, percentage: 3.0 }
    ],
    trendData: [
      { name: "Week 1", value: 1200 },
      { name: "Week 2", value: 1850 },
      { name: "Week 3", value: 2100 },
      { name: "Week 4", value: 1600 }
    ],
    comparisonData: [
      { name: "Jan", income: 2000, expenses: 1500 },
      { name: "Feb", income: 2200, expenses: 1800 },
      { name: "Mar", income: 2500, expenses: 2100 },
      { name: "Apr", income: 1800, expenses: 1350 }
    ],
    detailData: [
      {
        category: "Food & Catering",
        amount: 2100,
        percentage: 31.1,
        transactions: 15,
        avgTransaction: 140
      },
      {
        category: "Decorations",
        amount: 1850,
        percentage: 27.4,
        transactions: 8,
        avgTransaction: 231
      },
      {
        category: "Gifts",
        amount: 1200,
        percentage: 17.8,
        transactions: 12,
        avgTransaction: 100
      },
      {
        category: "Clothing",
        amount: 950,
        percentage: 14.1,
        transactions: 6,
        avgTransaction: 158
      },
      {
        category: "Travel",
        amount: 450,
        percentage: 6.7,
        transactions: 3,
        avgTransaction: 150
      },
      {
        category: "Entertainment",
        amount: 200,
        percentage: 3.0,
        transactions: 4,
        avgTransaction: 50
      }
    ]
  });

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
    // In a real app, this would trigger an API call to fetch filtered data
    console.log('Filters changed:', newFilters);
  };

  const handleExport = (format, exportFilters) => {
    // Mock export functionality
    const exportData = {
      format,
      filters: exportFilters,
      timestamp: new Date()?.toISOString(),
      data: reportData
    };
    
    console.log('Exporting data:', exportData);
    
    // Simulate file download
    const fileName = `festival-expense-report-${new Date()?.toISOString()?.split('T')?.[0]}.${format}`;
    alert(`Exporting ${fileName}...\n\nThis would download your financial report in ${format?.toUpperCase()} format.`);
  };

  // Add this block - handlers for required props
  const handleRouteChange = (route) => {
    console.log('Route changed:', route);
    // Handle navigation logic here
  };

  const handleActionSelect = (action) => {
    console.log('Quick action selected:', action);
    // Handle quick action logic here
  };
  // End of added block

  const getChartData = () => {
    switch (filters?.reportType) {
      case 'category':
        return { type: 'pie', data: reportData?.categoryData, title: 'Spending by Category' };
      case 'trends':
        return { type: 'line', data: reportData?.trendData, title: 'Spending Trends Over Time' };
      case 'comparison':
        return { type: 'comparison', data: reportData?.comparisonData, title: 'Income vs Expenses' };
      default:
        return { type: 'bar', data: reportData?.categoryData, title: 'Category Overview' };
    }
  };

  const tableColumns = [
    { field: 'category', label: 'Category', sortable: true },
    { field: 'amount', label: 'Amount', type: 'currency', sortable: true },
    { field: 'percentage', label: 'Percentage', type: 'percentage', sortable: true },
    { field: 'transactions', label: 'Transactions', sortable: true },
    { field: 'avgTransaction', label: 'Avg per Transaction', type: 'currency', sortable: true }
  ];

  const chartConfig = getChartData();

  return (
    <div className="min-h-screen bg-background">
      <NavigationBar onRouteChange={handleRouteChange} />
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name="BarChart3" size={20} color="var(--color-primary)" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Financial Reports</h1>
              <p className="text-muted-foreground">
                Analyze your festival spending patterns and export data
              </p>
            </div>
          </div>
        </div>

        {/* Report Controls */}
        <ReportControls 
          onFiltersChange={handleFiltersChange}
          onExport={handleExport}
        />

        {/* Summary Cards */}
        <SummaryCards summaryData={reportData?.summaryData} />

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Main Chart */}
          <div className="lg:col-span-2">
            <SpendingChart
              chartType={chartConfig?.type}
              data={chartConfig?.data}
              title={chartConfig?.title}
            />
          </div>

          {/* Secondary Charts */}
          {filters?.reportType === 'overview' && (
            <>
              <SpendingChart
                chartType="pie"
                data={reportData?.categoryData}
                title="Category Distribution"
              />
              <SpendingChart
                chartType="line"
                data={reportData?.trendData}
                title="Weekly Trends"
              />
            </>
          )}
        </div>

        {/* Data Table */}
        <DataTable
          data={reportData?.detailData}
          title="Detailed Category Breakdown"
          columns={tableColumns}
        />

        {/* Insights Section */}
        <div className="mt-8 bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
            <Icon name="Lightbulb" size={20} color="var(--color-accent)" className="mr-2" />
            Key Insights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-muted-foreground">
                  Your income increased by 12.5% compared to the previous period, showing strong financial growth.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-warning rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-muted-foreground">
                  Food & Catering represents 31% of your total expenses - consider setting a specific budget for this category.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-muted-foreground">
                  Your average daily spending of $225 is within reasonable limits for festival periods.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-muted-foreground">
                  You're 4.2% over your planned budget - consider adjusting future festival allocations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Quick Action Button */}
      <QuickActionButton onActionSelect={handleActionSelect} />
      {/* Bottom spacing for mobile navigation */}
      <div className="h-20 md:hidden" />
    </div>
  );
};

export default FinancialReports;