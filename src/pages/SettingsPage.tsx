import React, { useState } from 'react';
import { Bell, Database, Shield, Save } from 'lucide-react';

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    notifications: {
      highRisk: true,
      mediumRisk: false,
      lowRisk: false,
      taskComplete: true,
      taskFailed: true
    },
    data: {
      autoSaveEvidence: true,
      retentionPeriod: '90',
      exportFormat: 'excel'
    },
    security: {
      sessionTimeout: '30',
      ipWhitelist: false,
      auditLog: true
    }
  });

  const handleSave = () => {
    alert('设置已保存');
  };

  return (
    <div className="p-6 max-w-4xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">系统设置</h1>
        <p className="text-gray-600">配置系统参数和偏好设置</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Bell size={20} className="text-blue-600" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900">通知设置</h2>
        </div>

        <div className="space-y-4">
          {[
            { key: 'highRisk', label: '高风险线索通知', desc: '发现高风险线索时立即通知' },
            { key: 'mediumRisk', label: '中风险线索通知', desc: '发现中风险线索时通知' },
            { key: 'lowRisk', label: '低风险线索通知', desc: '发现低风险线索时通知' },
            { key: 'taskComplete', label: '巡检任务完成', desc: '巡检任务执行完成后通知' },
            { key: 'taskFailed', label: '巡检任务失败', desc: '巡检任务执行失败时通知' },
          ].map((item) => (
            <div key={item.key} className="flex items-center justify-between py-3">
              <div>
                <div className="text-sm font-medium text-gray-900">{item.label}</div>
                <div className="text-xs text-gray-500">{item.desc}</div>
              </div>
              <button
                onClick={() => setSettings(prev => ({
                  ...prev,
                  notifications: {
                    ...prev.notifications,
                    [item.key]: !prev.notifications[item.key]
                  }
                }))}
                className={`w-12 h-6 rounded-full transition-colors ${
                  settings.notifications[item.key]
                    ? 'bg-blue-600'
                    : 'bg-gray-300'
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                    settings.notifications[item.key]
                      ? 'translate-x-6'
                      : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-green-100 rounded-lg">
            <Database size={20} className="text-green-600" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900">数据设置</h2>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-gray-900">自动保存证据</div>
              <div className="text-xs text-gray-500">发现线索时自动保存证据材料</div>
            </div>
            <button
              onClick={() => setSettings(prev => ({
                ...prev,
                data: { ...prev.data, autoSaveEvidence: !prev.data.autoSaveEvidence }
              }))}
              className={`w-12 h-6 rounded-full transition-colors ${
                settings.data.autoSaveEvidence ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                  settings.data.autoSaveEvidence ? 'translate-x-6' : 'translate-x-0.5'
                }`}
              />
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              数据保留期限
            </label>
            <select
              value={settings.data.retentionPeriod}
              onChange={(e) => setSettings(prev => ({
                ...prev,
                data: { ...prev.data, retentionPeriod: e.target.value }
              }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="30">30天</option>
              <option value="90">90天</option>
              <option value="180">180天</option>
              <option value="365">1年</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              导出格式
            </label>
            <select
              value={settings.data.exportFormat}
              onChange={(e) => setSettings(prev => ({
                ...prev,
                data: { ...prev.data, exportFormat: e.target.value }
              }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="excel">Excel (.xlsx)</option>
              <option value="pdf">PDF (.pdf)</option>
              <option value="csv">CSV (.csv)</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-purple-100 rounded-lg">
            <Shield size={20} className="text-purple-600" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900">安全设置</h2>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              会话超时时间（分钟）
            </label>
            <select
              value={settings.security.sessionTimeout}
              onChange={(e) => setSettings(prev => ({
                ...prev,
                security: { ...prev.security, sessionTimeout: e.target.value }
              }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="15">15分钟</option>
              <option value="30">30分钟</option>
              <option value="60">1小时</option>
              <option value="120">2小时</option>
            </select>
          </div>

          {[
            { key: 'ipWhitelist', label: 'IP白名单', desc: '仅允许白名单内IP访问系统' },
            { key: 'auditLog', label: '操作审计日志', desc: '记录所有用户操作行为' },
          ].map((item) => (
            <div key={item.key} className="flex items-center justify-between py-3">
              <div>
                <div className="text-sm font-medium text-gray-900">{item.label}</div>
                <div className="text-xs text-gray-500">{item.desc}</div>
              </div>
              <button
                onClick={() => setSettings(prev => ({
                  ...prev,
                  security: {
                    ...prev.security,
                    [item.key]: !prev.security[item.key]
                  }
                }))}
                className={`w-12 h-6 rounded-full transition-colors ${
                  settings.security[item.key]
                    ? 'bg-blue-600'
                    : 'bg-gray-300'
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                    settings.security[item.key]
                      ? 'translate-x-6'
                      : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Save size={20} />
          保存设置
        </button>
      </div>
    </div>
  );
}
