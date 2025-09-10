import React from 'react';
import Icon from '../../../components/AppIcon';

const SummaryCards = ({ summaryData }) => {
  const cards = [
    {
      title: 'Total Income',
      value: summaryData?.totalIncome,
      change: summaryData?.incomeChange,
      icon: 'TrendingUp',
      color: 'success',
      description: 'Festival earnings'
    },
    {
      title: 'Total Expenses',
      value: summaryData?.totalExpenses,
      change: summaryData?.expenseChange,
      icon: 'TrendingDown',
      color: 'error',
      description: 'Festival spending'
    },
    {
      title: 'Net Balance',
      value: summaryData?.netBalance,
      change: summaryData?.balanceChange,
      icon: 'DollarSign',
      color: summaryData?.netBalance >= 0 ? 'success' : 'error',
      description: 'Current position'
    },
    {
      title: 'Avg Daily Spending',
      value: summaryData?.avgDailySpending,
      change: summaryData?.avgSpendingChange,
      icon: 'Calendar',
      color: 'primary',
      description: 'Per day average'
    },
    {
      title: 'Top Category',
      value: summaryData?.topCategory?.name,
      change: `$${summaryData?.topCategory?.amount?.toLocaleString()}`,
      icon: 'Award',
      color: 'accent',
      description: 'Highest spending',
      isText: true
    },
    {
      title: 'Budget Variance',
      value: summaryData?.budgetVariance,
      change: summaryData?.variancePercentage,
      icon: 'Target',
      color: summaryData?.budgetVariance >= 0 ? 'success' : 'warning',
      description: 'vs planned budget'
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      success: 'text-success bg-success/10 border-success/20',
      error: 'text-error bg-error/10 border-error/20',
      primary: 'text-primary bg-primary/10 border-primary/20',
      accent: 'text-accent bg-accent/10 border-accent/20',
      warning: 'text-warning bg-warning/10 border-warning/20'
    };
    return colorMap?.[color] || colorMap?.primary;
  };

  const formatValue = (value, isText = false) => {
    if (isText) return value;
    if (typeof value === 'number') {
      return value >= 0 ? `$${value?.toLocaleString()}` : `-$${Math.abs(value)?.toLocaleString()}`;
    }
    return value;
  };

  const formatChange = (change, isPercentage = false) => {
    if (typeof change === 'string' && change?.startsWith('$')) return change;
    if (typeof change === 'number') {
      const prefix = change >= 0 ? '+' : '';
      return isPercentage ? `${prefix}${change}%` : `${prefix}${change}`;
    }
    return change;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {cards?.map((card, index) => (
        <div
          key={index}
          className="bg-card border border-border rounded-lg p-6 hover-lift transition-all duration-200 animate-fade-in"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-sm font-medium text-muted-foreground mb-1">
                {card?.title}
              </h3>
              <div className="text-2xl font-bold text-foreground mb-1">
                {formatValue(card?.value, card?.isText)}
              </div>
              <p className="text-xs text-muted-foreground">
                {card?.description}
              </p>
            </div>
            
            <div className={`
              w-12 h-12 rounded-lg flex items-center justify-center border
              ${getColorClasses(card?.color)}
            `}>
              <Icon name={card?.icon} size={20} color="currentColor" />
            </div>
          </div>

          {/* Change Indicator */}
          <div className="flex items-center justify-between">
            <div className={`
              flex items-center space-x-1 text-sm
              ${typeof card?.change === 'number' && card?.change >= 0 ?'text-success' 
                : typeof card?.change === 'number' ?'text-error' :'text-muted-foreground'
              }
            `}>
              {typeof card?.change === 'number' && (
                <Icon 
                  name={card?.change >= 0 ? 'ArrowUp' : 'ArrowDown'} 
                  size={14} 
                  color="currentColor" 
                />
              )}
              <span className="font-medium">
                {formatChange(card?.change, card?.title === 'Budget Variance')}
              </span>
            </div>
            
            <div className="text-xs text-muted-foreground">
              vs last period
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;