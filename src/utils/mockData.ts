
import { Clue, DashboardMetrics, ViolationDistribution, ChatMessage, RiskTrendData, RegionDistribution } from '../types';

// 模拟线索数据
export const mockClues: Clue[] = [
  {
    id: '1',
    merchantName: '老王烧烤',
    platform: 'meituan',
    address: 'XX区XX街道XX小区3栋502室',
    violationType: ['ghost', 'license'],
    riskLevel: 'high',
    riskScore: 92,
    status: 'pending',
    createdAt: '2026-05-25T14:30:00Z',
    updatedAt: '2026-05-25T14:30:00Z',
    evidence: {
      screenshots: ['screenshot1.jpg', 'screenshot2.jpg'],
      description: '注册地址为居民小区，与另外2家商家共用同一地址，门面照片经查重为网络图片，食品经营许可证号关联4家店铺',
      legalBasis: '《食品安全法》第131条'
    }
  },
  {
    id: '2',
    merchantName: '蜀湘人家',
    platform: 'meituan',
    address: 'XX区XX路88号',
    violationType: ['license'],
    riskLevel: 'high',
    riskScore: 88,
    status: 'checked',
    createdAt: '2026-05-25T12:15:00Z',
    updatedAt: '2026-05-25T16:45:00Z',
    evidence: {
      screenshots: ['screenshot3.jpg'],
      description: '许可证号在监管数据库中无记录，确认证照信息造假',
      legalBasis: '《食品安全法》第131条'
    }
  },
  {
    id: '3',
    merchantName: '好吃便当',
    platform: 'eleme',
    address: 'XX区XX广场12号',
    violationType: ['expired'],
    riskLevel: 'medium',
    riskScore: 65,
    status: 'rectified',
    createdAt: '2026-05-24T09:20:00Z',
    updatedAt: '2026-05-25T10:30:00Z',
    evidence: {
      screenshots: ['screenshot4.jpg'],
      description: '食品经营许可证已于2026-03-01过期，仍在经营',
      legalBasis: '《网络餐饮服务经营者落实食品安全主体责任监督管理规定》'
    }
  },
  {
    id: '4',
    merchantName: '甜品小站',
    platform: 'douyin',
    address: 'XX区XX街56号',
    violationType: ['publicity'],
    riskLevel: 'medium',
    riskScore: 58,
    status: 'pending',
    createdAt: '2026-05-24T15:40:00Z',
    updatedAt: '2026-05-24T15:40:00Z',
    evidence: {
      screenshots: ['screenshot5.jpg'],
      description: '未在页面公示食品经营许可证，未标注无堂食标识',
      legalBasis: '《网络餐饮服务经营者落实食品安全主体责任监督管理规定》第12条'
    }
  },
  {
    id: '5',
    merchantName: '潮汕牛肉火锅',
    platform: 'meituan',
    address: 'XX区XX大道234号',
    violationType: ['health'],
    riskLevel: 'medium',
    riskScore: 62,
    status: 'filed',
    createdAt: '2026-05-23T11:00:00Z',
    updatedAt: '2026-05-24T14:20:00Z',
    evidence: {
      screenshots: ['screenshot6.jpg', 'screenshot7.jpg'],
      description: '用户评价中多次提到食物不新鲜、吃后腹泻等问题',
      legalBasis: '《食品安全法》第148条'
    }
  },
  {
    id: '6',
    merchantName: '张记面馆',
    platform: 'eleme',
    address: 'XX区XX巷8号',
    violationType: ['超范围'],
    riskLevel: 'low',
    riskScore: 45,
    status: 'pending',
    createdAt: '2026-05-23T08:30:00Z',
    updatedAt: '2026-05-23T08:30:00Z',
    evidence: {
      screenshots: ['screenshot8.jpg'],
      description: '证照仅允许热食类制售，实际售卖凉菜',
      legalBasis: '《食品安全法》第122条'
    }
  }
];

// 模拟态势指标数据
export const mockDashboardMetrics: DashboardMetrics = {
  totalMerchants: 18247,
  totalClues: 412,
  highRiskCount: 67,
  rectificationRate: 73.2,
  monthlyChange: {
    totalMerchants: 12,
    totalClues: 8,
    highRiskCount: -3,
    rectificationRate: 5.1
  }
};

// 模拟违规类型分布数据
export const mockViolationDistribution: ViolationDistribution[] = [
  { type: '幽灵外卖', count: 115, percentage: 27.9, color: '#dc2626' },
  { type: '证照问题', count: 128, percentage: 31.1, color: '#ef4444' },
  { type: '证照过期', count: 91, percentage: 22.1, color: '#f59e0b' },
  { type: '公示不全', count: 58, percentage: 14.1, color: '#eab308' },
  { type: '超范围经营', count: 20, percentage: 4.8, color: '#10b981' }
];

// 模拟对话消息
export const mockChatMessages: ChatMessage[] = [
  {
    id: '1',
    role: 'assistant',
    content: '您好！我是网络餐饮巡检助手。有什么可以帮助您的吗？',
    type: 'text',
    timestamp: '2026-05-26T09:00:00Z'
  },
  {
    id: '2',
    role: 'assistant',
    content: '您设定的每日巡检已完成。今日扫描XX区美团商家1842家，发现线索27条：\n\n🔴 高风险5条（幽灵外卖3家，证照造假2家）\n🟡 中风险12条（证照过期8家，信息公示不全4家）\n🟢 低风险10条',
    type: 'card',
    timestamp: '2026-05-26T10:30:00Z'
  }
];

// 模拟风险趋势数据
export const mockRiskTrendData: RiskTrendData[] = [
  { month: '1月', high: 45, medium: 78, low: 52 },
  { month: '2月', high: 52, medium: 85, low: 48 },
  { month: '3月', high: 58, medium: 92, low: 55 },
  { month: '4月', high: 62, medium: 88, low: 60 },
  { month: '5月', high: 67, medium: 95, low: 58 },
  { month: '6月', high: 65, medium: 90, low: 55 }
];

// 模拟区域分布数据
export const mockRegionDistribution: RegionDistribution[] = [
  { region: 'XX区', count: 18 },
  { region: 'YY区', count: 12 },
  { region: 'ZZ区', count: 9 },
  { region: 'AA区', count: 6 },
  { region: 'BB区', count: 3 }
];
