import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import NavigationBar from '../../components/ui/NavigationBar';
import TransactionTypeToggle from './components/TransactionTypeToggle';
import TransactionForm from './components/TransactionForm';
import TransactionPreview from './components/TransactionPreview';

import Icon from '../../components/AppIcon';

const AddTransaction = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [transactionType, setTransactionType] = useState('expense');
  const [isLoading, setIsLoading] = useState(false);
  const [savedTransaction, setSavedTransaction] = useState(null);
  const [showPreview, setShowPreview] = useState(false);

  // Check if user came from a specific action (e.g., quick action button)
  useEffect(() => {
    if (location?.state?.type) {
      setTransactionType(location?.state?.type);
    }
  }, [location?.state]);

  // Add this function to handle route changes
  const handleRouteChange = (route) => {
    navigate(route);
  };

  const handleTransactionSubmit = async (transactionData, saveAndAddAnother) => {
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Save to localStorage (mock persistence)
      const existingTransactions = JSON.parse(localStorage.getItem('festivalTransactions') || '[]');
      const newTransaction = {
        ...transactionData,
        id: Date.now(),
        createdAt: new Date()?.toISOString()
      };
      
      existingTransactions?.push(newTransaction);
      localStorage.setItem('festivalTransactions', JSON.stringify(existingTransactions));
      
      setSavedTransaction(newTransaction);
      
      if (saveAndAddAnother) {
        // Show brief success message then reset for next entry
        setShowPreview(true);
        setTimeout(() => {
          setShowPreview(false);
          setSavedTransaction(null);
        }, 2000);
      } else {
        // Show preview and navigate after delay
        setShowPreview(true);
        setTimeout(() => {
          navigate('/dashboard-overview', { 
            state: { 
              message: `${transactionData?.type} of $${transactionData?.amount} added successfully!`,
              type: 'success'
            }
          });
        }, 2500);
      }
      
    } catch (error) {
      console.error('Error saving transaction:', error);
      // Handle error state here
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    navigate('/dashboard-overview');
  };

  const handleEditTransaction = () => {
    setShowPreview(false);
    setSavedTransaction(null);
  };

  const getPageTitle = () => {
    return transactionType === 'income' ? 'Add Income' : 'Add Expense';
  };

  const getPageDescription = () => {
    return transactionType === 'income' ?'Record money received during festival celebrations' :'Track your festival spending and categorize expenses';
  };

  return (
    <div className="min-h-screen bg-background">
      <NavigationBar onRouteChange={handleRouteChange} />
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <button
              onClick={handleCancel}
              className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors btn-press focus-ring"
              title="Go back"
            >
              <Icon name="ArrowLeft" size={20} color="currentColor" />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-foreground">{getPageTitle()}</h1>
              <p className="text-muted-foreground">{getPageDescription()}</p>
            </div>
          </div>

          {/* Transaction Type Toggle */}
          <TransactionTypeToggle
            activeType={transactionType}
            onTypeChange={setTransactionType}
            className="mb-6"
          />
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          {showPreview && savedTransaction ? (
            /* Transaction Preview */
            (<TransactionPreview
              transaction={savedTransaction}
              onEdit={handleEditTransaction}
              className="animate-slide-up"
            />)
          ) : (
            /* Transaction Form */
            (<div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Icon 
                  name={transactionType === 'income' ? 'TrendingUp' : 'TrendingDown'} 
                  size={20} 
                  color={transactionType === 'income' ? 'var(--color-success)' : 'var(--color-error)'} 
                />
                <h2 className="text-lg font-semibold text-foreground">
                  {transactionType === 'income' ? 'Income Details' : 'Expense Details'}
                </h2>
              </div>
              <TransactionForm
                type={transactionType}
                onSubmit={handleTransactionSubmit}
                onCancel={handleCancel}
                isLoading={isLoading}
              />
            </div>)
          )}

          {/* Quick Tips */}
          <div className="bg-muted/50 border border-border rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Icon name="Lightbulb" size={16} color="var(--color-primary)" className="mt-0.5" />
              <div>
                <h3 className="text-sm font-medium text-foreground mb-1">Quick Tips</h3>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Be specific in descriptions for better tracking</li>
                  <li>• Choose the most accurate category for expenses</li>
                  <li>• Use "Save & Add Another" for multiple transactions</li>
                  <li>• All amounts are automatically saved in USD format</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Recent Transactions Summary */}
          <div className="bg-card border border-border rounded-lg p-4">
            <h3 className="text-sm font-medium text-foreground mb-3 flex items-center space-x-2">
              <Icon name="Clock" size={16} color="currentColor" />
              <span>Today's Summary</span>
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-lg font-semibold text-success">$0.00</div>
                <div className="text-xs text-muted-foreground">Income Today</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-error">$0.00</div>
                <div className="text-xs text-muted-foreground">Expenses Today</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Spacing for Mobile Navigation */}
        <div className="h-20 md:h-8"></div>
      </div>
    </div>
  );
};

export default AddTransaction;