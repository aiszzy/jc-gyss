import React from 'react';

interface MorningSummaryCardProps {
  data?: any;
}

const MorningSummaryCard: React.FC<MorningSummaryCardProps> = ({ data }) => {
  const today = data?.date || new Date().toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  });

  const todayTasks = data?.todayTasks || { pendingCheck: 12, highPriority: 5, dueToday: 8 };
  const yesterdayOverview = data?.yesterdayOverview || { cluesDiscovered: 27, highRisk: 5, rectificationCompleted: 14, complianceRate: 73.2 };
  const suggestions = data?.suggestions || [
    '优先处理XX烧烤等5条高风险线索',
    '跟进8家商户的整改验收',
    '关注餐饮集聚区的合规情况'
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
          <span className="text-white text-2xl">🌅</span>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">早安，检察官</h3>
          <p className="text-sm text-gray-500">{today}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-white rounded-lg p-4 border border-gray-100">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-orange-500">📋</span>
            <span className="text-sm font-medium text-gray-700">今日待办</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="bg-orange-50 rounded-lg p-2">
              <div className="text-xl font-bold text-orange-600">{todayTasks.pendingCheck}</div>
              <div className="text-xs text-gray-500">待核查</div>
            </div>
            <div className="bg-red-50 rounded-lg p-2">
              <div className="text-xl font-bold text-red-600">{todayTasks.highPriority}</div>
              <div className="text-xs text-gray-500">高优先级</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-2">
              <div className="text-xl font-bold text-blue-600">{todayTasks.dueToday}</div>
              <div className="text-xs text-gray-500">今日到期</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 border border-gray-100">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-green-500">📊</span>
            <span className="text-sm font-medium text-gray-700">昨日概况</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <div className="text-sm text-gray-500">扫描商家</div>
              <div className="text-lg font-semibold text-blue-600">1,842家</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">发现线索</div>
              <div className="text-lg font-semibold text-orange-600">{yesterdayOverview.cluesDiscovered}条</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">高风险</div>
              <div className="text-lg font-semibold text-red-600">{yesterdayOverview.highRisk}条</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">整改率</div>
              <div className="text-lg font-semibold text-green-600">{yesterdayOverview.complianceRate}%</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 border border-gray-100">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-purple-500">💡</span>
          <span className="text-sm font-medium text-gray-700">智能建议</span>
        </div>
        <ul className="space-y-2">
          {suggestions.map((suggestion: string, index: number) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-purple-500 mt-0.5">•</span>
              <span className="text-sm text-gray-600">{suggestion}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MorningSummaryCard;
