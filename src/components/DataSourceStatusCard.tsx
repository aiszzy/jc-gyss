
import React from 'react';

interface DataSourceStatusCardProps {
  data?: any;
}

const DataSourceStatusCard: React.FC<DataSourceStatusCardProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
          <span className="text-gray-600 text-2xl">🔌</span>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">数据源状态</h3>
          <p className="text-sm text-gray-500">系统连接状态监控</p>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div className="border border-green-200 bg-green-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-green-800">美团外卖平台</span>
            </div>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">正常</span>
          </div>
          <div className="text-xs text-gray-600 space-y-1">
            <p>• 最后同步：2026-05-29 08:30:15</p>
            <p>• 数据量：12,847家商家</p>
            <p>• 延迟：150ms</p>
          </div>
        </div>

        <div className="border border-green-200 bg-green-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-green-800">饿了么平台</span>
            </div>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">正常</span>
          </div>
          <div className="text-xs text-gray-600 space-y-1">
            <p>• 最后同步：2026-05-29 08:32:08</p>
            <p>• 数据量：5,400家商家</p>
            <p>• 延迟：120ms</p>
          </div>
        </div>

        <div className="border border-yellow-200 bg-yellow-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-yellow-800">市场监管许可数据库</span>
            </div>
            <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">需注意</span>
          </div>
          <div className="text-xs text-gray-600 space-y-1">
            <p>• 最后同步：2026-05-20 14:00:00</p>
            <p>• ⚠️ 已9天未更新</p>
            <p>• 建议：联系数据提供方确认更新状态</p>
          </div>
        </div>

        <div className="border border-green-200 bg-green-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-green-800">12315投诉数据</span>
            </div>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">正常</span>
          </div>
          <div className="text-xs text-gray-600 space-y-1">
            <p>• 最后同步：2026-05-29 00:00:00</p>
            <p>• 数据量：87条投诉</p>
            <p>• 延迟：5小时</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4">
        <div className="text-sm font-medium text-gray-800 mb-3">系统健康度</div>
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <div className="flex justify-between text-xs text-gray-600 mb-1">
              <span>整体健康度</span>
              <span>85%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <button className="flex-1 py-3 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">手动同步</button>
        <button className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200">设置告警</button>
      </div>
    </div>
  );
};

export default DataSourceStatusCard;
