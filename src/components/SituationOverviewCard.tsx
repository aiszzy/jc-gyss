
import React from 'react';

interface SituationOverviewCardProps {
  data?: any;
}

const SituationOverviewCard: React.FC<SituationOverviewCardProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
          <span className="text-purple-600 text-2xl">📈</span>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">态势概览</h3>
          <p className="text-sm text-gray-500">近一个月 · XX区</p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
          <div className="text-2xl font-bold text-blue-700">18,247</div>
          <div className="text-xs text-blue-600 mb-1">扫描商家总数</div>
          <div className="flex items-center gap-1 text-xs text-green-600">
            <span>↑</span>
            <span>12% 较上月</span>
          </div>
        </div>
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4">
          <div className="text-2xl font-bold text-orange-700">412</div>
          <div className="text-xs text-orange-600 mb-1">发现线索总数</div>
          <div className="flex items-center gap-1 text-xs text-green-600">
            <span>↑</span>
            <span>8% 较上月</span>
          </div>
        </div>
        <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-4">
          <div className="text-2xl font-bold text-red-700">67</div>
          <div className="text-xs text-red-600 mb-1">高风险线索</div>
          <div className="flex items-center gap-1 text-xs text-green-600">
            <span>↓</span>
            <span>3% 较上月</span>
          </div>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4">
          <div className="text-2xl font-bold text-green-700">73.2%</div>
          <div className="text-xs text-green-600 mb-1">整改率</div>
          <div className="flex items-center gap-1 text-xs text-green-600">
            <span>↑</span>
            <span>5.1% 较上月</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <div className="text-sm font-medium text-gray-800 mb-3">违规类型分布</div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-sm text-gray-700">幽灵外卖</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{ width: '28%' }}></div>
                </div>
                <span className="text-xs text-gray-600">28%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="text-sm text-gray-700">证照问题</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{ width: '31%' }}></div>
                </div>
                <span className="text-xs text-gray-600">31%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-sm text-gray-700">证照过期</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '22%' }}></div>
                </div>
                <span className="text-xs text-gray-600">22%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-700">公示不全</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '14%' }}></div>
                </div>
                <span className="text-xs text-gray-600">14%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-700">超范围经营</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '5%' }}></div>
                </div>
                <span className="text-xs text-gray-600">5%</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-sm font-medium text-gray-800 mb-3">高风险区域分布</div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">XX街道</span>
              <div className="flex items-center gap-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
                <span className="text-xs text-gray-600">18条</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">YY街道</span>
              <div className="flex items-center gap-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '67%' }}></div>
                </div>
                <span className="text-xs text-gray-600">12条</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">ZZ街道</span>
              <div className="flex items-center gap-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '50%' }}></div>
                </div>
                <span className="text-xs text-gray-600">9条</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">AA街道</span>
              <div className="flex items-center gap-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '33%' }}></div>
                </div>
                <span className="text-xs text-gray-600">6条</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">BB街道</span>
              <div className="flex items-center gap-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '17%' }}></div>
                </div>
                <span className="text-xs text-gray-600">3条</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <button className="flex-1 py-3 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700">导出态势报告</button>
        <button className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200">查看详情</button>
      </div>
    </div>
  );
};

export default SituationOverviewCard;
