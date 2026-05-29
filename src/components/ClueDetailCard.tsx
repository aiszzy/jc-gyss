
import React from 'react';

interface ClueDetailCardProps {
  data?: any;
}

const ClueDetailCard: React.FC<ClueDetailCardProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
          <span className="text-red-600 text-2xl">🔍</span>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">XX烧烤 · 线索详情</h3>
          <p className="text-sm text-gray-500">风险评分 92 · 高风险</p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-red-500">⚠️</span>
            <span className="text-sm font-semibold text-gray-800">违法事实</span>
          </div>
          <div className="bg-red-50 rounded-lg p-4">
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">•</span>
                <span>注册地址为XX小区3栋502室，经核查为住宅性质，不符合网络餐饮服务经营场所要求</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">•</span>
                <span>该地址同时关联另外3家外卖商家，存在"一地多证"嫌疑</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">•</span>
                <span>门面照片经图像比对，与网络图片库中的素材高度相似，疑似虚假展示</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">•</span>
                <span>食品经营许可证号(JY11101051234567)在市场监管许可数据库中无记录</span>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-blue-500">📜</span>
            <span className="text-sm font-semibold text-gray-800">法律依据</span>
          </div>
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="text-sm text-gray-700 leading-relaxed">
              <strong className="text-blue-800">《食品安全法》第131条：</strong>违反本法规定，网络食品交易第三方平台提供者未对入网食品经营者进行实名登记、审查许可证，或者未履行报告、停止提供网络交易平台服务等义务的，由县级以上人民政府食品安全监督管理部门责令改正，没收违法所得，并处五万元以上二十万元以下罚款；造成严重后果的，责令停业，直至由原发证部门吊销许可证。
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-green-500">🧠</span>
            <span className="text-sm font-semibold text-gray-800">推理链</span>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <div className="flex items-center gap-4 mb-3">
              <div className="flex-1 h-1 bg-green-200 rounded-full overflow-hidden">
                <div className="h-full bg-green-500" style={{ width: '25%' }}></div>
              </div>
              <div className="flex-1 h-1 bg-green-200 rounded-full overflow-hidden">
                <div className="h-full bg-green-500" style={{ width: '50%' }}></div>
              </div>
              <div className="flex-1 h-1 bg-green-200 rounded-full overflow-hidden">
                <div className="h-full bg-green-500" style={{ width: '75%' }}></div>
              </div>
              <div className="flex-1 h-1 bg-green-200 rounded-full overflow-hidden">
                <div className="h-full bg-green-500" style={{ width: '100%' }}></div>
              </div>
            </div>
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
              <li>采集商家信息 → 发现地址为住宅区域</li>
              <li>地址关联分析 → 同一地址关联4家商家</li>
              <li>图像比对 → 门面照片与网络素材高度相似</li>
              <li>许可数据库查询 → 许可证号无记录</li>
              <li>综合判定 → 幽灵外卖+证照造假，高风险</li>
            </ol>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-purple-500">📁</span>
            <span className="text-sm font-semibold text-gray-800">证据包</span>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-gray-100 rounded-lg p-3 text-center">
              <div className="text-2xl mb-1">🖼️</div>
              <div className="text-xs text-gray-600">商家详情页截图</div>
              <div className="text-xs text-gray-400">2026-05-29</div>
            </div>
            <div className="bg-gray-100 rounded-lg p-3 text-center">
              <div className="text-2xl mb-1">🖼️</div>
              <div className="text-xs text-gray-600">证照公示区截图</div>
              <div className="text-xs text-gray-400">2026-05-29</div>
            </div>
            <div className="bg-gray-100 rounded-lg p-3 text-center">
              <div className="text-2xl mb-1">📄</div>
              <div className="text-xs text-gray-600">数据库查询报告</div>
              <div className="text-xs text-gray-400">2026-05-29</div>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="flex-1 py-3 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700">生成检察建议</button>
          <button className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200">导出证据包</button>
        </div>
      </div>
    </div>
  );
};

export default ClueDetailCard;
