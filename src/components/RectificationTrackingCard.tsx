
import React from 'react';

interface RectificationTrackingCardProps {
  data?: any;
}

const RectificationTrackingCard: React.FC<RectificationTrackingCardProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
          <span className="text-orange-600 text-2xl">📊</span>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">整改跟踪情况</h3>
          <p className="text-sm text-gray-500">XX区 · 2026年5月</p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-green-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-green-600">18</div>
          <div className="text-xs text-green-700">已完成整改</div>
        </div>
        <div className="bg-yellow-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-yellow-600">5</div>
          <div className="text-xs text-yellow-700">整改中</div>
        </div>
        <div className="bg-red-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-red-600">2</div>
          <div className="text-xs text-red-700">⚠️ 反弹预警</div>
        </div>
        <div className="bg-blue-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-blue-600">73.2%</div>
          <div className="text-xs text-blue-700">整改率</div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="border border-red-200 bg-red-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-red-500">🚨</span>
              <span className="text-sm font-semibold text-red-800">反弹预警 - XX小吃店</span>
            </div>
            <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">需核查</span>
          </div>
          <div className="text-sm text-gray-700 space-y-1">
            <p>• 前期已完成"证照过期"整改，更新至2026年4月30日</p>
            <p>• 今日巡检发现：许可证再次到期，且新增"未公示营业执照"问题</p>
            <p>• 建议：立即现场核查，依法从重处理</p>
          </div>
          <div className="flex gap-2 mt-3">
            <button className="text-xs bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">启动复查</button>
            <button className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300">查看历史</button>
          </div>
        </div>

        <div className="border border-red-200 bg-red-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-red-500">🚨</span>
              <span className="text-sm font-semibold text-red-800">反弹预警 - XX快餐店</span>
            </div>
            <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">需核查</span>
          </div>
          <div className="text-sm text-gray-700 space-y-1">
            <p>• 前期已完成"公示不全"整改，补充了营业执照公示</p>
            <p>• 今日巡检发现：营业执照已被撤下，且凉菜类目重新上线</p>
            <p>• 建议：立即现场核查，固定证据</p>
          </div>
          <div className="flex gap-2 mt-3">
            <button className="text-xs bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">启动复查</button>
            <button className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300">查看历史</button>
          </div>
        </div>
      </div>

      <div className="mt-6 border-t border-gray-200 pt-4">
        <div className="text-sm font-medium text-gray-800 mb-3">整改时间线</div>
        <div className="space-y-3">
          <div className="flex gap-3">
            <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 text-xs">✓</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-800">XX便当</span>
                <span className="text-xs text-gray-500">2026-05-28</span>
              </div>
              <p className="text-xs text-gray-600">已完成整改：更新许可证至2027年5月27日</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 text-xs">✓</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-800">XX面馆</span>
                <span className="text-xs text-gray-500">2026-05-27</span>
              </div>
              <p className="text-xs text-gray-600">已完成整改：变更经营地址至商业用房</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <button className="flex-1 py-3 bg-orange-600 text-white rounded-lg text-sm font-medium hover:bg-orange-700">导出跟踪报告</button>
        <button className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200">设置预警规则</button>
      </div>
    </div>
  );
};

export default RectificationTrackingCard;
