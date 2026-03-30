import React, { useState } from 'react';

interface FilterState {
  status: string;
  dateRange: { start: string; end: string };
  merchantId: string;
}

interface FilterBarProps {
  onFilterChange: (filters: FilterState) => void;
}

export function FilterBar({ onFilterChange }: FilterBarProps) {
  const [filters, setFilters] = useState<FilterState>({
    status: 'all',
    dateRange: { start: '', end: '' },
    merchantId: '',
  });

  const handleChange = (key: keyof FilterState, value: unknown) => {
    const updated = { ...filters, [key]: value };
    setFilters(updated);
    onFilterChange(updated);
  };

  return (
    <div style={{ display: 'flex', gap: '16px', padding: '16px', backgroundColor: '#1a1b26', borderRadius: '8px', marginBottom: '16px' }}>
      <select
        value={filters.status}
        onChange={(e) => handleChange('status', e.target.value)}
        style={{ padding: '8px 12px', backgroundColor: '#2a2b36', color: '#e2e8f0', border: '1px solid #3a3b46', borderRadius: '6px' }}
      >
        <option value="all">All Statuses</option>
        <option value="pending">Pending</option>
        <option value="captured">Captured</option>
        <option value="refunded">Refunded</option>
      </select>

      <input
        type="date"
        value={filters.dateRange.start}
        onChange={(e) => handleChange('dateRange', { ...filters.dateRange, start: e.target.value })}
        style={{ padding: '8px 12px', backgroundColor: '#2a2b36', color: '#e2e8f0', border: '1px solid #3a3b46', borderRadius: '6px' }}
      />

      <input
        type="date"
        value={filters.dateRange.end}
        onChange={(e) => handleChange('dateRange', { ...filters.dateRange, end: e.target.value })}
        style={{ padding: '8px 12px', backgroundColor: '#2a2b36', color: '#e2e8f0', border: '1px solid #3a3b46', borderRadius: '6px' }}
      />

      <input
        type="text"
        placeholder="Merchant ID"
        value={filters.merchantId}
        onChange={(e) => handleChange('merchantId', e.target.value)}
        style={{ padding: '8px 12px', backgroundColor: '#2a2b36', color: '#e2e8f0', border: '1px solid #3a3b46', borderRadius: '6px', flex: 1 }}
      />
    </div>
  );
}
