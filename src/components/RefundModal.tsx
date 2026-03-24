import React, { useState } from 'react';

export function RefundModal({ chargeId, onClose }: { chargeId: string; onClose: () => void }) {
  const [amount, setAmount] = useState('');
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: 'white', borderRadius: '8px', padding: '24px', width: '400px', boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px' }}>Process Refund</h2>
        <p style={{ color: '#6b7280', marginBottom: '12px' }}>Charge: {chargeId}</p>
        <input
          style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', marginBottom: '16px' }}
          placeholder="Refund amount"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
          <button style={{ padding: '8px 16px', borderRadius: '6px', border: '1px solid #d1d5db' }} onClick={onClose}>Cancel</button>
          <button style={{ padding: '8px 16px', borderRadius: '6px', backgroundColor: '#ef4444', color: 'white' }}>Refund</button>
        </div>
      </div>
    </div>
  );
}
