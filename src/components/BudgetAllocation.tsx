
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Target, BarChart3 } from "lucide-react";

const BudgetAllocation = () => {
  const totalBudget = 5000; // ₹5,000 monthly budget

  const budgetBreakdown = [
    { 
      category: "Paid Advertising", 
      percentage: 70, 
      amount: 3500, 
      color: "bg-blue-500",
      description: "Meta Ads, Google Search, Retargeting",
      channels: [
        { name: "Meta Ads (FB + IG)", amount: 2000, focus: "Geo-target gig-heavy cities" },
        { name: "Google Search Ads", amount: 1000, focus: "Low-CPC keywords like 'freelance work India'" },
        { name: "Retargeting", amount: 500, focus: "Simple reminder creatives for warm audiences" }
      ]
    },
    { 
      category: "Agency Fee", 
      percentage: 14, 
      amount: 700, 
      color: "bg-orange-500",
      description: "20% of utilized budget for agency services",
      channels: []
    },
    { 
      category: "Contingency Reserve", 
      percentage: 16, 
      amount: 800, 
      color: "bg-slate-400",
      description: "Emergency funds and unexpected opportunities",
      channels: []
    }
  ];

  const kpis = [
    {
      metric: "Cost Per Install (CPI)",
      target: "₹30 - ₹60",
      current: "₹45",
      status: "good",
      icon: Target
    },
    {
      metric: "CTR (Meta Ads)",
      target: "≥ 1.5%",
      current: "1.8%",
      status: "excellent",
      icon: BarChart3
    },
    {
      metric: "Install → Signup Rate",
      target: "≥ 25%",
      current: "28%",
      status: "excellent",
      icon: BarChart3
    },
    {
      metric: "Monthly Budget Utilization",
      target: "100%",
      current: "95%",
      status: "good",
      icon: DollarSign
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent": return "text-green-600 bg-green-50 border-green-200";
      case "good": return "text-blue-600 bg-blue-50 border-blue-200";
      case "warning": return "text-orange-600 bg-orange-50 border-orange-200";
      default: return "text-slate-600 bg-slate-50 border-slate-200";
    }
  };

  return (
    <div className="space-y-6">
      {/* Budget Overview */}
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <DollarSign className="h-6 w-6" />
            <span>Budget Allocation Strategy</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">₹{totalBudget.toLocaleString()}</div>
              <div className="text-blue-200 text-sm">Monthly Budget</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">70%</div>
              <div className="text-blue-200 text-sm">Paid Ads Focus</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">₹60</div>
              <div className="text-blue-200 text-sm">Max CPI Target</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">3.6Cr</div>
              <div className="text-blue-200 text-sm">Year 1 Revenue Goal</div>
            </div>
          </div>
          <p className="text-blue-100">
            Focus on high-ROI digital channels with emphasis on Meta Ads and regional targeting 
            for maximum impact. Agency gets 20% of utilized budget.
          </p>
        </CardContent>
      </Card>

      {/* Budget Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white border border-slate-200">
          <CardHeader>
            <CardTitle className="text-slate-800">Budget Distribution</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {budgetBreakdown.map((item, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded ${item.color}`}></div>
                    <span className="font-medium text-slate-700">{item.category}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="bg-slate-50">
                      ₹{item.amount.toLocaleString()}
                    </Badge>
                    <span className="text-sm text-slate-600">{item.percentage}%</span>
                  </div>
                </div>
                
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${item.color}`}
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                
                <p className="text-xs text-slate-600">{item.description}</p>
                
                {item.channels.length > 0 && (
                  <div className="pl-4 space-y-2 border-l-2 border-slate-200">
                    {item.channels.map((channel, channelIndex) => (
                      <div key={channelIndex} className="bg-slate-50 rounded p-2">
                        <div className="flex justify-between items-start mb-1">
                          <span className="text-sm font-medium text-slate-700">{channel.name}</span>
                          <Badge variant="secondary" className="text-xs">₹{channel.amount}</Badge>
                        </div>
                        <p className="text-xs text-slate-600">{channel.focus}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* KPI Targets */}
        <Card className="bg-white border border-slate-200">
          <CardHeader>
            <CardTitle className="text-slate-800">Performance Targets & KPIs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {kpis.map((kpi, index) => (
              <div key={index} className="p-4 border border-slate-200 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <kpi.icon className="h-5 w-5 text-slate-600" />
                    <span className="font-medium text-slate-700">{kpi.metric}</span>
                  </div>
                  <Badge className={getStatusColor(kpi.status)}>
                    {kpi.status}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Target</div>
                    <div className="text-sm font-medium text-slate-700">{kpi.target}</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Current</div>
                    <div className="text-sm font-medium text-slate-700">{kpi.current}</div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Channel Focus */}
      <Card className="bg-white border border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="h-5 w-5 text-purple-600" />
            <span>Channel Focus Strategy</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="font-semibold text-blue-800 mb-2">Meta Ads Priority</div>
              <div className="space-y-2 text-sm text-blue-700">
                <div>• Geo-target Tier 1 & 2 cities</div>
                <div>• Carousel and story ads</div>
                <div>• Identity and discovery messaging</div>
              </div>
            </div>
            
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="font-semibold text-purple-800 mb-2">Google Search Focus</div>
              <div className="space-y-2 text-sm text-purple-700">
                <div>• Low-CPC keywords targeting</div>
                <div>• "Freelance work India" keywords</div>
                <div>• Avoid broad match strategies</div>
              </div>
            </div>
            
            <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
              <div className="font-semibold text-teal-800 mb-2">Retargeting Strategy</div>
              <div className="space-y-2 text-sm text-teal-700">
                <div>• Simple reminder creatives</div>
                <div>• Warm audience filters</div>
                <div>• Landing page visitors focus</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BudgetAllocation;
