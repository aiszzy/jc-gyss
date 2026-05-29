
import React from 'react';

interface ScreeningResultCardProps {
  data?: any;
}

const ScreeningResultCard: React.FC<ScreeningResultCardProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">巡检报告 · XX区 · 2026-05-29</h3>
          <p className="text-sm text-gray-500">扫描商家1,842家 · 发现线索27条</p>
        </div>
        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
          <span className="text-blue-600 text-xl">📋</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-red-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-red-600">5</div>
          <div className="text-sm text-red-700">🔴 高风险</div>
        </div>
        <div className="bg-yellow-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-yellow-600">12</div>
          <div className="text-sm text-yellow-700">🟡 中风险</div>
        </div>
        <div className="bg-green-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-green-600">10</div>
          <div className="text-sm text-green-700">🟢 低风险</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-sm font-medium text-gray-700 mb-2">违规类型分布</div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">[幽灵外卖]</span>
              <span className="text-sm font-semibold text-gray-900">3条</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">[证照问题]</span>
              <span className="text-sm font-semibold text-gray-900">2条</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">[证照过期]</span>
              <span className="text-sm font-semibold text-gray-900">8条</span>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-sm font-medium text-gray-700 mb-2">平台分布</div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">美团</span>
              <span className="text-sm font-semibold text-gray-900">18条</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">饿了么</span>
              <span className="text-sm font-semibold text-gray-900">9条</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4">
        <div className="text-sm font-medium text-gray-700 mb-3">▼ 线索列表（按风险排序）</div>
        <div className="space-y-3">
          <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-red-600 font-semibold">🔴 XX烧烤</span>
                  <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">评分92</span>
                </div>
                <div className="text-sm text-gray-600">幽灵外卖+证照共用</div>
                <div className="text-xs text-gray-500 mt-1">地址：XX小区3栋502室 · 共用证照关联4家</div>
              </div>
              <div className="flex gap-2">
                <button className="text-xs bg-white border border-gray-300 px-3 py-1 rounded hover:bg-gray-50">查看证据</button>
                <button className="text-xs bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">生成检察建议</button>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-red-600 font-semibold">🔴 XX麻辣烫</span>
                  <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">评分88</span>
                </div>
                <div className="text-sm text-gray-600">证照造假</div>
                <div className="text-xs text-gray-500 mt-1">许可证号不存在于监管数据库 · 门面照片为网络图片</div>
              </div>
              <div className="flex gap-2">
                <button className="text-xs bg-white border border-gray-300 px-3 py-1 rounded hover:bg-gray-50">查看证据</button>
                <button className="text-xs bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">生成检察建议</button>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-yellow-600 font-semibold">🟡 XX便当</span>
                  <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded">评分65</span>
                </div>
                <div className="text-sm text-gray-600">证照过期</div>
                <div className="text-xs text-gray-500 mt-1">许可证2026-03-01过期 · 仍在经营</div>
              </div>
              <div className="flex gap-2">
                <button className="text-xs bg-white border border-gray-300 px-3 py-1 rounded hover:bg-gray-50">查看证据</button>
                <button className="text-xs bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">标记跟踪</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <button className="flex-1 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">导出线索清单</button>
        <button className="flex-1 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200">导出区域报告</button>
        <button className="flex-1 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200">设置巡检计划</button>
      </div>
    </div>
  );
};

export default ScreeningResultCard;
