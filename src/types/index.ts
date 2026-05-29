
// 线索类型
export type ViolationType = 'ghost' | 'license' | 'expired' | 'publicity' | '超范围' | 'health' | 'transfer';

// 风险等级
export type RiskLevel = 'high' | 'medium' | 'low';

// 线索状态
export type ClueStatus = 'pending' | 'checked' | 'filed' | 'rectified' | 'rebounded';

// 商家平台
export type Platform = 'meituan' | 'eleme' | 'douyin';

// 线索数据结构
export interface Clue {
  id: string;
  merchantName: string;
  platform: Platform;
  address: string;
  violationType: ViolationType[];
  riskLevel: RiskLevel;
  riskScore: number;
  status: ClueStatus;
  createdAt: string;
  updatedAt: string;
  evidence: {
    screenshots: string[];
    description: string;
    legalBasis: string;
  };
}

// 态势指标
export interface DashboardMetrics {
  totalMerchants: number;
  totalClues: number;
  highRiskCount: number;
  rectificationRate: number;
  monthlyChange: {
    totalMerchants: number;
    totalClues: number;
    highRiskCount: number;
    rectificationRate: number;
  };
}

// 违规类型分布
export interface ViolationDistribution {
  type: string;
  count: number;
  percentage: number;
  color: string;
}

// 卡片类型
export type CardType = 
  | 'morning_summary' 
  | 'screening_result' 
  | 'clue_detail' 
  | 'prosecution_suggestion'
  | 'rectification_tracking'
  | 'situation_overview'
  | 'data_source_status';

// 对话消息
export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  type: 'text' | 'card';
  cardType?: CardType;
  cardData?: any;
  timestamp: string;
}

// 风险趋势数据
export interface RiskTrendData {
  month: string;
  high: number;
  medium: number;
  low: number;
}

// 区域分布数据
export interface RegionDistribution {
  region: string;
  count: number;
}
