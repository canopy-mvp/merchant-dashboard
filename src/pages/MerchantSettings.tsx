import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

interface MerchantSettings {
  id: string;
  name: string;
  webhookUrl: string;
  notificationEmail: string;
  autoCapture: boolean;
  currency: string;
}

export function MerchantSettingsPage() {
  const queryClient = useQueryClient();
  const { data: settings, isLoading } = useQuery<MerchantSettings>({
    queryKey: ['merchant-settings'],
    queryFn: () => fetch('/api/merchant/settings').then((r) => r.json()),
  });

  const mutation = useMutation({
    mutationFn: (updated: Partial<MerchantSettings>) =>
      fetch('/api/merchant/settings', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updated),
      }).then((r) => r.json()),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['merchant-settings'] }),
  });

  if (isLoading || !settings) {
    return <div className="flex items-center justify-center h-64 text-gray-400">Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-100 mb-6">Merchant Settings</h1>
      <div className="space-y-4 bg-[#1a1b26] rounded-lg p-6">
        <div>
          <label className="block text-sm text-gray-400 mb-1">Business Name</label>
          <input
            className="w-full px-3 py-2 bg-[#2a2b36] border border-[#3a3b46] rounded-md text-gray-100"
            defaultValue={settings.name}
            onBlur={(e) => mutation.mutate({ name: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">Webhook URL</label>
          <input
            className="w-full px-3 py-2 bg-[#2a2b36] border border-[#3a3b46] rounded-md text-gray-100"
            defaultValue={settings.webhookUrl}
            onBlur={(e) => mutation.mutate({ webhookUrl: e.target.value })}
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-300">Auto-capture payments</span>
          <button
            className={`px-4 py-1.5 rounded-md text-sm ${settings.autoCapture ? 'bg-purple-600 text-white' : 'bg-[#2a2b36] text-gray-400'}`}
            onClick={() => mutation.mutate({ autoCapture: !settings.autoCapture })}
          >
            {settings.autoCapture ? 'Enabled' : 'Disabled'}
          </button>
        </div>
      </div>
    </div>
  );
}
