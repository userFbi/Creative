import React, { useState, useEffect } from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';

const TransactionForm = ({ 
  type, 
  onSubmit, 
  onCancel, 
  initialData = null,
  isLoading = false,
  className = '' 
}) => {
  const [formData, setFormData] = useState({
    amount: '',
    date: new Date()?.toISOString()?.split('T')?.[0],
    description: '',
    category: '',
    source: ''
  });

  const [errors, setErrors] = useState({});
  const [saveAndAddAnother, setSaveAndAddAnother] = useState(false);

  // Expense categories for festival spending
  const expenseCategories = [
    { value: 'decorations', label: 'Decorations & Lighting' },
    { value: 'food', label: 'Food & Catering' },
    { value: 'gifts', label: 'Gifts & Presents' },
    { value: 'clothing', label: 'Clothing & Accessories' },
    { value: 'entertainment', label: 'Entertainment & Events' },
    { value: 'travel', label: 'Travel & Transportation' },
    { value: 'religious', label: 'Religious Items' },
    { value: 'sweets', label: 'Sweets & Treats' },
    { value: 'flowers', label: 'Flowers & Garlands' },
    { value: 'other', label: 'Other Festival Expenses' }
  ];

  // Income sources
  const incomeSources = [
    { value: 'salary', label: 'Salary' },
    { value: 'bonus', label: 'Festival Bonus' },
    { value: 'gift_money', label: 'Gift Money' },
    { value: 'freelance', label: 'Freelance Work' },
    { value: 'business', label: 'Business Income' },
    { value: 'investment', label: 'Investment Returns' },
    { value: 'rental', label: 'Rental Income' },
    { value: 'other', label: 'Other Income' }
  ];

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.amount || parseFloat(formData?.amount) <= 0) {
      newErrors.amount = 'Please enter a valid amount greater than 0';
    }

    if (!formData?.date) {
      newErrors.date = 'Please select a date';
    }

    if (!formData?.description?.trim()) {
      newErrors.description = 'Please enter a description';
    }

    if (type === 'expense' && !formData?.category) {
      newErrors.category = 'Please select a category';
    }

    if (type === 'income' && !formData?.source) {
      newErrors.source = 'Please select an income source';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Clear error when user starts typing
    if (errors?.[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleAmountChange = (e) => {
    const value = e?.target?.value;
    // Allow only numbers and decimal point
    if (value === '' || /^\d*\.?\d*$/?.test(value)) {
      handleInputChange('amount', value);
    }
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    const transactionData = {
      ...formData,
      amount: parseFloat(formData?.amount),
      type,
      id: Date.now(), // Simple ID generation
      timestamp: new Date()?.toISOString()
    };

    onSubmit(transactionData, saveAndAddAnother);

    if (saveAndAddAnother) {
      // Reset form for next entry
      setFormData({
        amount: '',
        date: new Date()?.toISOString()?.split('T')?.[0],
        description: '',
        category: '',
        source: ''
      });
      setErrors({});
    }
  };

  const isFormValid = formData?.amount && 
                     formData?.date && 
                     formData?.description?.trim() &&
                     (type === 'expense' ? formData?.category : formData?.source);

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      {/* Amount Input */}
      <Input
        label="Amount"
        type="text"
        placeholder="0.00"
        value={formData?.amount}
        onChange={handleAmountChange}
        error={errors?.amount}
        required
        description="Enter the transaction amount in USD"
        className="relative"
      />
      {/* Date Input */}
      <Input
        label="Date"
        type="date"
        value={formData?.date}
        onChange={(e) => handleInputChange('date', e?.target?.value)}
        error={errors?.date}
        required
        max={new Date()?.toISOString()?.split('T')?.[0]}
        description="Select the transaction date"
      />
      {/* Category/Source Selection */}
      {type === 'expense' ? (
        <Select
          label="Category"
          placeholder="Select expense category"
          options={expenseCategories}
          value={formData?.category}
          onChange={(value) => handleInputChange('category', value)}
          error={errors?.category}
          required
          searchable
          description="Choose the most appropriate category"
        />
      ) : (
        <Select
          label="Income Source"
          placeholder="Select income source"
          options={incomeSources}
          value={formData?.source}
          onChange={(value) => handleInputChange('source', value)}
          error={errors?.source}
          required
          searchable
          description="Choose where this income came from"
        />
      )}
      {/* Description Input */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-foreground">
          Description <span className="text-error">*</span>
        </label>
        <textarea
          value={formData?.description}
          onChange={(e) => handleInputChange('description', e?.target?.value)}
          placeholder={`Enter ${type} description...`}
          rows={3}
          className={`
            w-full px-3 py-2 border rounded-lg text-sm transition-colors
            focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent
            ${errors?.description 
              ? 'border-error focus:ring-error/20' :'border-border focus:ring-ring/20'
            }
          `}
          maxLength={200}
        />
        {errors?.description && (
          <p className="text-sm text-error">{errors?.description}</p>
        )}
        <p className="text-xs text-muted-foreground">
          {formData?.description?.length}/200 characters
        </p>
      </div>
      {/* Action Buttons */}
      <div className="flex flex-col space-y-3 pt-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            type="submit"
            variant="default"
            disabled={!isFormValid || isLoading}
            loading={isLoading && !saveAndAddAnother}
            iconName="Save"
            iconPosition="left"
            className="flex-1"
            onClick={() => setSaveAndAddAnother(false)}
          >
            Save Transaction
          </Button>

          <Button
            type="button"
            variant="outline"
            disabled={!isFormValid || isLoading}
            loading={isLoading && saveAndAddAnother}
            iconName="Plus"
            iconPosition="left"
            className="flex-1"
            onClick={(e) => {
              setSaveAndAddAnother(true);
              handleSubmit(e);
            }}
          >
            Save & Add Another
          </Button>
        </div>

        <Button
          type="button"
          variant="ghost"
          onClick={onCancel}
          disabled={isLoading}
          className="w-full sm:w-auto"
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default TransactionForm;