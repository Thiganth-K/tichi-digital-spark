
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Target, DollarSign, Calendar, Zap } from "lucide-react";

const ExecutiveSummary = () => {
  const objectives = [
    {
      title: "Brand Recognition",
      target: "+30% brand searches",
      progress: 65,
      icon: TrendingUp,
      color: "text-blue-600"
    },
    {
      title: "Lead Generation", 
      target: "5,000+ leads/month",
      progress: 45,
      icon: Users,
      color: "text-purple-600"
    },
    {
      title: "Platform Conversion",
      target: "+35% conversion",
      progress: 72,
      icon: Target,
      color: "text-teal-600"
    },
    {
      title: "Revenue Scale",
      target: "₹3.6 Cr in Year 1",
      progress: 28,
      icon: DollarSign,
      color: "text-orange-600"
    }
  ];

  const budgetBreakdown = [
    { category: "Paid Advertising", percentage: 70, amount: "₹3,500", color: "bg-blue-500" },
    { category: "Content Creation", percentage: 10, amount: "₹500", color: "bg-purple-500" },
    { category: "Tools & Software", percentage: 5, amount: "₹250", color: "bg-teal-500" },
    { category: "Personnel/Agency", percentage: 10, amount: "₹500", color: "bg-orange-500" },
    { category: "Contingency", percentage: 5, amount: "₹250", color: "bg-slate-400" }
  ];

  return (
    <div className="space-y-6">
      {/* Strategy Overview */}
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Zap className="h-6 w-6" />
            <span>Digital Marketing Strategy Overview</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-blue-100 leading-relaxed">
            A comprehensive multi-channel digital marketing plan for Tichi, connecting opportunity seekers 
            with verified providers through AI-powered matchmaking, community-first branding, and data-driven campaigns.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">350M+</div>
              <div className="text-blue-200 text-sm">Target Market Size</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">₹455B</div>
              <div className="text-blue-200 text-sm">Gig Economy Value</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">12 Months</div>
              <div className="text-blue-200 text-sm">Strategy Timeline</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Objectives */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {objectives.map((objective, index) => (
          <Card key={index} className="bg-white border border-slate-200 hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center justify-between text-sm">
                <span className="text-slate-700">{objective.title}</span>
                <objective.icon className={`h-5 w-5 ${objective.color}`} />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-xs text-slate-600">{objective.target}</div>
                <Progress value={objective.progress} className="h-2" />
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Progress</span>
                  <span className={`font-medium ${objective.color}`}>{objective.progress}%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Budget Summary */}
      <Card className="bg-white border border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <DollarSign className="h-5 w-5 text-blue-600" />
            <span>Budget Allocation Summary</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {budgetBreakdown.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded ${item.color}`}></div>
                  <span className="text-sm font-medium text-slate-700">{item.category}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-32 bg-slate-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${item.color}`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  <Badge variant="outline" className="bg-slate-50">
                    {item.amount}
                  </Badge>
                  <span className="text-sm text-slate-600 w-8">{item.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
            <div className="text-sm text-slate-700 mb-2">Primary Channel Focus:</div>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-blue-100 text-blue-700 border-blue-300">Meta Ads: ₹2,000</Badge>
              <Badge className="bg-purple-100 text-purple-700 border-purple-300">Google Search: ₹1,000</Badge>
              <Badge className="bg-teal-100 text-teal-700 border-teal-300">Retargeting: ₹500</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Phase Timeline */}
      <Card className="bg-white border border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-purple-600" />
            <span>Implementation Phases</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="font-semibold text-blue-800 mb-2">Phase 1: Foundation</div>
              <div className="text-sm text-blue-700 mb-3">Months 1-2</div>
              <ul className="text-xs text-blue-600 space-y-1">
                <li>• Analytics setup</li>
                <li>• Website optimization</li>
                <li>• Social presence launch</li>
              </ul>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="font-semibold text-purple-800 mb-2">Phase 2: Growth</div>
              <div className="text-sm text-purple-700 mb-3">Months 3-6</div>
              <ul className="text-xs text-purple-600 space-y-1">
                <li>• Paid campaigns launch</li>
                <li>• Email automation</li>
                <li>• Influencer partnerships</li>
              </ul>
            </div>
            <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
              <div className="font-semibold text-teal-800 mb-2">Phase 3: Scale</div>
              <div className="text-sm text-teal-700 mb-3">Months 7-12</div>
              <ul className="text-xs text-teal-600 space-y-1">
                <li>• Market expansion</li>
                <li>• Advanced campaigns</li>
                <li>• Monetization refinement</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExecutiveSummary;
