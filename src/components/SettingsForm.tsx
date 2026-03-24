import React, { useState } from 'react';

export function SettingsForm({ merchant }: { merchant: any }) {
  const [name, setName] = useState(merchant.name);
  const [email, setEmail] = useState(merchant.email);
  return (
    <form style={{ maxWidth: '600px', padding: '24px' }}>
      <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px' }}>Business Settings</h2>
      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500' }}>Business Name</label>
        <input style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500' }}>Email</label>
        <input style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <button style={{ backgroundColor: '#3b82f6', color: 'white', padding: '8px 16px', borderRadius: '6px' }}>Save</button>
    </form>
  );
}
