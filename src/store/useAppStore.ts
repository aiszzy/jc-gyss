
import { create } from 'zustand';
import { Clue, ChatMessage, DashboardMetrics, ViolationDistribution, RiskTrendData, RegionDistribution } from '../types';
import { mockClues, mockChatMessages, mockDashboardMetrics, mockViolationDistribution, mockRiskTrendData, mockRegionDistribution } from '../utils/mockData';

interface AppStore {
  // 数据
  clues: Clue[];
  chatMessages: ChatMessage[];
  dashboardMetrics: DashboardMetrics;
  violationDistribution: ViolationDistribution[];
  riskTrendData: RiskTrendData[];
  regionDistribution: RegionDistribution[];
  
  // 筛选状态
  selectedViolationType: string | null;
  selectedRiskLevel: string | null;
  selectedStatus: string | null;
  
  // 操作
  setSelectedViolationType: (type: string | null) => void;
  setSelectedRiskLevel: (level: string | null) => void;
  setSelectedStatus: (status: string | null) => void;
  updateClueStatus: (id: string, status: Clue['status']) => void;
  addChatMessage: (message: ChatMessage) => void;
  getFilteredClues: () => Clue[];
}

export const useAppStore = create<AppStore>((set, get) => ({
  // 初始数据
  clues: mockClues,
  chatMessages: mockChatMessages,
  dashboardMetrics: mockDashboardMetrics,
  violationDistribution: mockViolationDistribution,
  riskTrendData: mockRiskTrendData,
  regionDistribution: mockRegionDistribution,
  
  // 筛选状态
  selectedViolationType: null,
  selectedRiskLevel: null,
  selectedStatus: null,
  
  // 操作方法
  setSelectedViolationType: (type) => set({ selectedViolationType: type }),
  setSelectedRiskLevel: (level) => set({ selectedRiskLevel: level }),
  setSelectedStatus: (status) => set({ selectedStatus: status }),
  
  updateClueStatus: (id, status) => set((state) => ({
    clues: state.clues.map(clue => 
      clue.id === id ? { ...clue, status, updatedAt: new Date().toISOString() } : clue
    )
  })),
  
  addChatMessage: (message) => set((state) => ({
    chatMessages: [...state.chatMessages, message]
  })),
  
  getFilteredClues: () => {
    const { clues, selectedViolationType, selectedRiskLevel, selectedStatus } = get();
    return clues.filter(clue => {
      if (selectedViolationType && !clue.violationType.includes(selectedViolationType as any)) return false;
      if (selectedRiskLevel && clue.riskLevel !== selectedRiskLevel) return false;
      if (selectedStatus && clue.status !== selectedStatus) return false;
      return true;
    });
  }
}));
