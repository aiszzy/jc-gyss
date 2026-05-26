
## 1. Architecture Design

```mermaid
graph TB
    subgraph "Frontend Layer"
        A[React App]
        B[React Router]
        C[Zustand Store]
        D[Tailwind CSS]
        E[Recharts]
        F[Lucide Icons]
    end
    
    subgraph "Presentation Layer"
        G[Pages]
        H[Components]
        I[Hooks]
    end
    
    subgraph "Mock Data Layer"
        J[Mock Data Store]
        K[Utils]
    end
    
    A --&gt; G
    G --&gt; H
    H --&gt; I
    G --&gt; C
    H --&gt; C
    G --&gt; J
    H --&gt; J
    J --&gt; K
    G --&gt; D
    H --&gt; D
    G --&gt; E
    H --&gt; E
    G --&gt; F
    H --&gt; F
```

## 2. Technology Description
- **Frontend**: React@18 + TypeScript + tailwindcss@3 + vite
- **Initialization Tool**: vite-init
- **Backend**: None（前端原型，使用模拟数据）
- **Database**: None（内存中Mock数据）
- **Chart Library**: Recharts
- **State Management**: Zustand
- **Icons**: Lucide React

## 3. Route Definitions
| Route | Purpose |
|-------|---------|
| / | 对话页面（默认首页） |
| /clues | 线索看板 |
| /dashboard | 态势概览 |
| /schedule | 巡检计划 |
| /settings | 设置页面 |

## 4. Data Model

### 4.1 Core Types

```typescript
// 线索类型
type ViolationType = 'ghost' | 'license' | 'expired' | 'publicity' | '超范围' | 'health' | 'transfer';

// 风险等级
type RiskLevel = 'high' | 'medium' | 'low';

// 线索状态
type ClueStatus = 'pending' | 'checked' | 'filed' | 'rectified' | 'rebounded';

// 商家平台
type Platform = 'meituan' | 'eleme' | 'douyin';

// 线索数据结构
interface Clue {
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
interface DashboardMetrics {
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
interface ViolationDistribution {
  type: string;
  count: number;
  percentage: number;
}

// 对话消息
interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  type: 'text' | 'card';
  timestamp: string;
}
```

## 5. File Structure
```
/workspace
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── components/
│   │   ├── Layout.tsx
│   │   ├── Sidebar.tsx
│   │   ├── ClueCard.tsx
│   │   ├── ClueList.tsx
│   │   ├── DashboardMetric.tsx
│   │   └── ChatBubble.tsx
│   ├── pages/
│   │   ├── ChatPage.tsx
│   │   ├── CluesPage.tsx
│   │   ├── DashboardPage.tsx
│   │   ├── SchedulePage.tsx
│   │   └── SettingsPage.tsx
│   ├── hooks/
│   │   └── useMockData.ts
│   ├── store/
│   │   └── useAppStore.ts
│   ├── utils/
│   │   ├── constants.ts
│   │   ├── mockData.ts
│   │   └── formatters.ts
│   └── types/
│       └── index.ts
├── public/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── postcss.config.js
```
