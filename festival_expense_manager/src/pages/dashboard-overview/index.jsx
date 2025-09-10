import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../../components/ui/NavigationBar';
import QuickActionButton from '../../components/ui/QuickActionButton';
import MetricCard from './components/MetricCard';
import RecentTransactions from './components/RecentTransactions';
import SpendingBreakdown from './components/SpendingBreakdown';
import QuickActions from './components/QuickActions';

const DashboardOverview = () => {
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock data for demonstration
  const mockTransactions = [
    {
      id: 1,
      type: 'income',
      amount: 5000,
      category: 'salary',
      description: 'Monthly Salary - December',
      date: '2025-09-08T10:00:00Z'
    },
    {
      id: 2,
      type: 'expense',
      amount: 250,
      category: 'decorations',
      description: 'Christmas lights and ornaments',
      date: '2025-09-08T14:30:00Z'
    },
    {
      id: 3,
      type: 'expense',
      amount: 180,
      category: 'food',
      description: 'Holiday dinner ingredients',
      date: '2025-09-08T16:45:00Z'
    },
    {
      id: 4,
      type: 'income',
      amount: 500,
      category: 'bonus',
      description: 'Year-end bonus',
      date: '2025-09-07T09:15:00Z'
    },
    {
      id: 5,
      type: 'expense',
      amount: 320,
      category: 'gifts',
      description: 'Christmas presents for family',
      date: '2025-09-07T11:20:00Z'
    },
    {
      id: 6,
      type: 'expense',
      amount: 150,
      category: 'clothing',
      description: 'New Year party outfit',
      date: '2025-09-06T13:10:00Z'
    },
    {
      id: 7,
      type: 'income',
      amount: 300,
      category: 'freelance',
      description: 'Website design project',
      date: '2025-09-06T15:30:00Z'
    },
    {
      id: 8,
      type: 'expense',
      amount: 85,
      category: 'transportation',
      description: 'Uber rides for shopping',
      date: '2025-09-05T12:45:00Z'
    },
    {
      id: 9,
      type: 'expense',
      amount: 120,
      category: 'entertainment',
      description: 'New Year party tickets',
      date: '2025-09-05T18:20:00Z'
    }
  ];

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setTransactions(mockTransactions);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Calculate financial metrics
  const calculateMetrics = () => {
    const income = transactions?.filter(t => t?.type === 'income')?.reduce((sum, t) => sum + t?.amount, 0);
    
    const expenses = transactions?.filter(t => t?.type === 'expense')?.reduce((sum, t) => sum + t?.amount, 0);
    
    const balance = income - expenses;
    
    return { income, expenses, balance };
  };

  const { income, expenses, balance } = calculateMetrics();
  const expenseTransactions = transactions?.filter(t => t?.type === 'expense');

  const handleViewAllTransactions = () => {
    navigate('/financial-reports');
  };

  const handleActionSelect = (actionType) => {
    console.log(`Quick action selected: ${actionType}`);
  };

  // Add this function to handle route changes
  const handleRouteChange = (route) => {
    navigate(route);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <NavigationBar onRouteChange={handleRouteChange} />
        <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading dashboard...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <NavigationBar onRouteChange={handleRouteChange} />
      
      <main className="container mx-auto px-4 py-8 pb-24 md:pb-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Festival Finance Dashboard
            </h1>
            <p className="text-muted-foreground">
              Track your celebration expenses and stay within budget
            </p>
          </div>
          
          {/* Desktop Quick Actions */}
          <div className="hidden md:block mt-4 md:mt-0">
            <QuickActionButton onActionSelect={handleActionSelect} />
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <MetricCard
            title="Total Income"
            amount={income}
            type="income"
            icon="TrendingUp"
            trend={true}
            trendValue={12.5}
          />
          <MetricCard
            title="Total Expenses"
            amount={expenses}
            type="expense"
            icon="TrendingDown"
            trend={true}
            trendValue={8.3}
          />
          <MetricCard
            title="Net Balance"
            amount={balance}
            type="balance"
            icon="Wallet"
            trend={true}
            trendValue={balance >= 0 ? 15.2 : -5.8}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Recent Transactions */}
          <RecentTransactions
            transactions={transactions}
            onViewAll={handleViewAllTransactions}
          />
          
          {/* Spending Breakdown */}
          <SpendingBreakdown expenses={expenseTransactions} />
        </div>

        {/* Quick Actions Panel */}
        <QuickActions />
      </main>

      {/* Mobile Floating Action Button */}
      <QuickActionButton onActionSelect={handleActionSelect} />
    </div>
  );
};

export default DashboardOverview;