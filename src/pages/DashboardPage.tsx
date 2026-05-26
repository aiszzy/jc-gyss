import React from 'react';
import { BarChart3, PieChart, TrendingUp, Store, AlertTriangle, CheckCircle, Download } from 'lucide-react';
import { PieChart as RePieChart, Pie, Cell, BarChart as ReBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import DashboardMetric from '../components/DashboardMetric';
import { useAppStore } from '../store/useAppStore';

export default function DashboardPage() {
  const { dashboardMetrics, violationDistribution, riskTrendData, regionDistribution } = useAppStore();

  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">态势概览</h1>
            <p className="text-gray-600">网络餐饮安全整体情况分析</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Download size={20} />
            导出报告
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <DashboardMetric
          title="扫描商家总数"
          value={dashboardMetrics.totalMerchants}
          change={dashboardMetrics.monthlyChange.totalMerchants}
          icon={Store}
          color="#3b82f6"
        />
        <DashboardMetric
          title="发现线索数"
          value={dashboardMetrics.totalClues}
          change={dashboardMetrics.monthlyChange.totalClues}
          icon={AlertTriangle}
          color="#ef4444"
        />
        <DashboardMetric
          title="高风险线索"
          value={dashboardMetrics.highRiskCount}
          change={dashboardMetrics.monthlyChange.highRiskCount}
          icon={AlertTriangle}
          color="#dc2626"
        />
        <DashboardMetric
          title="整改率"
          value={dashboardMetrics.rectificationRate}
          change={dashboardMetrics.monthlyChange.rectificationRate}
          isPercent={true}
          icon={CheckCircle}
          color="#10b981"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <PieChart size={20} />
            违规类型分布
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RePieChart>
                <Pie
                  data={violationDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {violationDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </RePieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <TrendingUp size={20} />
            风险趋势（近6个月）
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <ReBarChart data={riskTrendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                />
                <Legend />
                <Bar dataKey="high" fill="#dc2626" name="高风险" />
                <Bar dataKey="medium" fill="#f59e0b" name="中风险" />
                <Bar dataKey="low" fill="#10b981" name="低风险" />
              </ReBarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <BarChart3 size={20} />
            高风险区域分布
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <ReBarChart data={regionDistribution} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" horizontal={false} />
                <XAxis type="number" stroke="#6b7280" />
                <YAxis dataKey="region" type="category" stroke="#6b7280" width={80} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                />
                <Bar dataKey="count" fill="#dc2626" radius={[0, 4, 4, 0]} />
              </ReBarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">重点关注</h3>
          <div className="space-y-4">
            <div className="p-4 bg-red-50 rounded-lg border border-red-100">
              <h4 className="font-medium text-red-900 mb-2">幽灵外卖问题突出</h4>
              <p className="text-sm text-red-700">
                幽灵外卖占比 27.9%，主要集中在居民区，建议联合市场监管部门开展专项整治。
              </p>
            </div>
            <div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
              <h4 className="font-medium text-amber-900 mb-2">证照过期需关注</h4>
              <p className="text-sm text-amber-700">
                证照过期线索占比 22.1%，建议督促平台加强资质审核，及时下架过期商家。
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-100">
              <h4 className="font-medium text-green-900 mb-2">整改成效显著</h4>
              <p className="text-sm text-green-700">
                整改率达到 73.2%，较上月提升 5.1 个百分点，建议继续保持当前监管力度。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
