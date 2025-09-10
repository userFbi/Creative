import React, { useState, useMemo } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DataTable = ({ data, title, columns }) => {
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedData = React.useMemo(() => {
    if (!sortField) return data;

    return [...data]?.sort((a, b) => {
      const aValue = a?.[sortField];
      const bValue = b?.[sortField];

      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
      }

      const aString = String(aValue)?.toLowerCase();
      const bString = String(bValue)?.toLowerCase();

      if (sortDirection === 'asc') {
        return aString?.localeCompare(bString);
      } else {
        return bString?.localeCompare(aString);
      }
    });
  }, [data, sortField, sortDirection]);

  const paginatedData = React.useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return sortedData?.slice(startIndex, startIndex + itemsPerPage);
  }, [sortedData, currentPage]);

  const totalPages = Math.ceil(sortedData?.length / itemsPerPage);

  const formatCellValue = (value, column) => {
    if (column?.type === 'currency') {
      return typeof value === 'number' ? `$${value?.toLocaleString()}` : value;
    }
    if (column?.type === 'percentage') {
      return typeof value === 'number' ? `${value}%` : value;
    }
    return value;
  };

  const getSortIcon = (field) => {
    if (sortField !== field) return 'ArrowUpDown';
    return sortDirection === 'asc' ? 'ArrowUp' : 'ArrowDown';
  };

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div className="p-6 border-b border-border">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Showing {paginatedData?.length} of {sortedData?.length} entries
        </p>
      </div>
      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              {columns?.map((column) => (
                <th
                  key={column?.field}
                  className={`
                    px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider
                    ${column?.sortable ? 'cursor-pointer hover:bg-muted/70 transition-colors' : ''}
                  `}
                  onClick={() => column?.sortable && handleSort(column?.field)}
                >
                  <div className="flex items-center space-x-1">
                    <span>{column?.label}</span>
                    {column?.sortable && (
                      <Icon 
                        name={getSortIcon(column?.field)} 
                        size={14} 
                        color="currentColor"
                        className={sortField === column?.field ? 'text-primary' : ''}
                      />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {paginatedData?.map((row, index) => (
              <tr key={index} className="hover:bg-muted/30 transition-colors">
                {columns?.map((column) => (
                  <td key={column?.field} className="px-6 py-4 whitespace-nowrap text-sm">
                    <div className={`
                      ${column?.field === 'category' ? 'font-medium text-foreground' : ''}
                      ${column?.type === 'currency' ? 'font-mono' : ''}
                      ${column?.type === 'percentage' ? 'text-center' : ''}
                    `}>
                      {formatCellValue(row?.[column?.field], column)}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Mobile Cards */}
      <div className="md:hidden divide-y divide-border">
        {paginatedData?.map((row, index) => (
          <div key={index} className="p-4 space-y-3">
            {columns?.map((column) => (
              <div key={column?.field} className="flex justify-between items-center">
                <span className="text-sm font-medium text-muted-foreground">
                  {column?.label}:
                </span>
                <span className={`
                  text-sm text-foreground
                  ${column?.type === 'currency' ? 'font-mono' : ''}
                  ${column?.field === 'category' ? 'font-medium' : ''}
                `}>
                  {formatCellValue(row?.[column?.field], column)}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="px-6 py-4 border-t border-border flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Page {currentPage} of {totalPages}
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              iconName="ChevronLeft"
              iconPosition="left"
            >
              Previous
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              iconName="ChevronRight"
              iconPosition="right"
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataTable;