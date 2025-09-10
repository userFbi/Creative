import React, { useState } from 'react';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';


const ReportControls = ({ onFiltersChange, onExport }) => {
  const [dateRange, setDateRange] = useState('last30days');
  const [reportType, setReportType] = useState('overview');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const dateRangeOptions = [
    { value: 'last7days', label: 'Last 7 Days' },
    { value: 'last30days', label: 'Last 30 Days' },
    { value: 'last3months', label: 'Last 3 Months' },
    { value: 'last6months', label: 'Last 6 Months' },
    { value: 'lastyear', label: 'Last Year' },
    { value: 'custom', label: 'Custom Range' }
  ];

  const reportTypeOptions = [
    { value: 'overview', label: 'Overview Report' },
    { value: 'category', label: 'Category Analysis' },
    { value: 'trends', label: 'Spending Trends' },
    { value: 'comparison', label: 'Income vs Expenses' }
  ];

  const categoryOptions = [
    { value: 'all', label: 'All Categories' },
    { value: 'decorations', label: 'Decorations' },
    { value: 'food', label: 'Food & Catering' },
    { value: 'gifts', label: 'Gifts' },
    { value: 'clothing', label: 'Clothing & Accessories' },
    { value: 'travel', label: 'Travel & Transport' },
    { value: 'entertainment', label: 'Entertainment' },
    { value: 'miscellaneous', label: 'Miscellaneous' }
  ];

  const handleFilterChange = (type, value) => {
    let newFilters = { dateRange, reportType, categoryFilter };
    
    switch (type) {
      case 'dateRange':
        setDateRange(value);
        newFilters.dateRange = value;
        break;
      case 'reportType':
        setReportType(value);
        newFilters.reportType = value;
        break;
      case 'categoryFilter':
        setCategoryFilter(value);
        newFilters.categoryFilter = value;
        break;
    }
    
    if (onFiltersChange) {
      onFiltersChange(newFilters);
    }
  };

  const handleExport = (format) => {
    if (onExport) {
      onExport(format, { dateRange, reportType, categoryFilter });
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 mb-6">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
        {/* Filter Controls */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
          <Select
            label="Date Range"
            options={dateRangeOptions}
            value={dateRange}
            onChange={(value) => handleFilterChange('dateRange', value)}
            className="w-full"
          />
          
          <Select
            label="Report Type"
            options={reportTypeOptions}
            value={reportType}
            onChange={(value) => handleFilterChange('reportType', value)}
            className="w-full"
          />
          
          <Select
            label="Category Filter"
            options={categoryOptions}
            value={categoryFilter}
            onChange={(value) => handleFilterChange('categoryFilter', value)}
            className="w-full"
          />
        </div>

        {/* Export Controls */}
        <div className="flex flex-col sm:flex-row gap-2 lg:ml-6">
          <Button
            variant="outline"
            iconName="Download"
            iconPosition="left"
            onClick={() => handleExport('pdf')}
            className="btn-press hover-lift"
          >
            Export PDF
          </Button>
          
          <Button
            variant="outline"
            iconName="FileSpreadsheet"
            iconPosition="left"
            onClick={() => handleExport('csv')}
            className="btn-press hover-lift"
          >
            Export CSV
          </Button>
        </div>
      </div>
      {/* Quick Date Filters */}
      <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
        <span className="text-sm text-muted-foreground mr-2">Quick filters:</span>
        {['last7days', 'last30days', 'last3months']?.map((range) => (
          <button
            key={range}
            onClick={() => handleFilterChange('dateRange', range)}
            className={`
              px-3 py-1 text-xs rounded-full transition-colors btn-press
              ${dateRange === range
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }
            `}
          >
            {dateRangeOptions?.find(opt => opt?.value === range)?.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ReportControls;