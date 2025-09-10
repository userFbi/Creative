import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import Icon from '../../../components/AppIcon';

const SpendingBreakdown = ({ expenses, className = '' }) => {
  // Calculate spending by category
  const calculateCategorySpending = () => {
    const categoryTotals = {};
    
    expenses?.forEach(expense => {
      const category = expense?.category;
      categoryTotals[category] = (categoryTotals?.[category] || 0) + expense?.amount;
    });
    
    return Object.entries(categoryTotals)?.map(([category, amount]) => ({
      name: category?.replace('_', ' ')?.replace(/\b\w/g, l => l?.toUpperCase()),
      value: amount,
      category: category
    }))?.sort((a, b) => b?.value - a?.value);
  };

  const categoryData = calculateCategorySpending();
  const totalSpending = categoryData?.reduce((sum, item) => sum + item?.value, 0);

  // Color palette for categories
  const colors = [
    '#2D5A5A', // Primary
    '#D4A574', // Secondary
    '#E07A5F', // Accent
    '#10B981', // Success
    '#F59E0B', // Warning
    '#EF4444', // Error
    '#8B5CF6', // Purple
    '#06B6D4'  // Cyan
  ];

  const getCategoryIcon = (category) => {
    const categoryIcons = {
      'decorations': 'Sparkles',
      'food': 'UtensilsCrossed',
      'gifts': 'Gift',
      'clothing': 'Shirt',
      'transportation': 'Car',
      'entertainment': 'Music',
      'other_expense': 'ShoppingBag'
    };
    
    return categoryIcons?.[category] || 'ShoppingBag';
  };

  const formatAmount = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })?.format(amount);
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload?.length) {
      const data = payload?.[0];
      const percentage = ((data?.value / totalSpending) * 100)?.toFixed(1);
      
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-modal">
          <p className="text-sm font-medium text-foreground">{data?.payload?.name}</p>
          <p className="text-sm text-muted-foreground">
            {formatAmount(data?.value)} ({percentage}%)
          </p>
        </div>
      );
    }
    return null;
  };

  if (categoryData?.length === 0) {
    return (
      <div className={`bg-card rounded-xl border border-border p-6 ${className}`}>
        <h2 className="text-lg font-semibold text-foreground mb-6">Spending Breakdown</h2>
        <div className="text-center py-8">
          <Icon name="PieChart" size={48} color="var(--color-muted-foreground)" className="mx-auto mb-4" />
          <p className="text-muted-foreground">No expenses to analyze</p>
          <p className="text-sm text-muted-foreground mt-1">Add some expenses to see your spending breakdown</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-card rounded-xl border border-border p-6 ${className}`}>
      <h2 className="text-lg font-semibold text-foreground mb-6">Spending Breakdown</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pie Chart */}
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {categoryData?.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors?.[index % colors?.length]} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        {/* Category List */}
        <div className="space-y-3">
          {categoryData?.map((item, index) => {
            const percentage = ((item?.value / totalSpending) * 100)?.toFixed(1);
            
            return (
              <div key={item?.category} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-4 h-4 rounded-full flex-shrink-0"
                    style={{ backgroundColor: colors?.[index % colors?.length] }}
                  />
                  <div className="flex items-center space-x-2">
                    <Icon
                      name={getCategoryIcon(item?.category)}
                      size={16}
                      color="var(--color-muted-foreground)"
                    />
                    <span className="text-sm font-medium text-foreground">{item?.name}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-foreground">{formatAmount(item?.value)}</p>
                  <p className="text-xs text-muted-foreground">{percentage}%</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-muted-foreground">Total Spending</span>
          <span className="text-lg font-bold text-error">{formatAmount(totalSpending)}</span>
        </div>
      </div>
    </div>
  );
};

export default SpendingBreakdown;