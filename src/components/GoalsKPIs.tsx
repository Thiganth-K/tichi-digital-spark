
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, TrendingUp, Users, DollarSign, Heart, BarChart3 } from "lucide-react";

const GoalsKPIs = () => {
  const primaryGoals = [
    {
      category: "Brand Awareness",
      icon: TrendingUp,
      color: "blue",
      objectives: [
        { metric: "Increase brand recognition", target: "30% growth in brand searches within 6 months" },
        { metric: "Improve brand sentiment", target: "Maintain >80% positive sentiment" },
        { metric: "Expand reach", target: "40%+ traffic from Tier 2 & 3 cities" }
      ]
    },
    {
      category: "Lead Generation", 
      icon: Users,
      color: "purple",
      objectives: [
        { metric: "Generate qualified leads", target: "5,000+ leads/month" },
        { metric: "Improve lead quality", target: ">15% lead-to-conversion rate" },
        { metric: "Reduce cost per lead", target: "25% CPL reduction" }
      ]
    },
    {
      category: "Sales & Revenue",
      icon: DollarSign,
      color: "green",
      objectives: [
        { metric: "Achieve revenue target", target: "₹3.6 Cr in Year 1" },
        { metric: "Improve conversion rates", target: "35% increase in sign-up to paid" },
        { metric: "Increase AOV", target: "₹150 per paying user" }
      ]
    },
    {
      category: "Customer Retention",
      icon: Heart,
      color: "orange",
      objectives: [
        { metric: "Improve customer lifetime value", target: "₹500+ over 6 months" },
        { metric: "Increase repeat purchase", target: ">40% renewal rate" },
        { metric: "Enhance satisfaction", target: "85%+ CSAT score" }
      ]
    }
  ];

  const kpiMetrics = [
    {
      category: "Traffic Metrics",
      metrics: [
        { name: "Organic traffic share", target: "45%", current: "38%" },
        { name: "Paid traffic CTR", target: "2.5%", current: "2.1%" },
        { name: "Mobile vs desktop", target: "80% mobile", current: "75%" }
      ]
    },
    {
      category: "Engagement Metrics",
      metrics: [
        { name: "Avg. session duration", target: "3-5 min", current: "4.2 min" },
        { name: "Bounce rate", target: "<40%", current: "38%" },
        { name: "Pages per session", target: ">3 pages", current: "3.4" }
      ]
    },
    {
      category: "Conversion Metrics", 
      metrics: [
        { name: "Conversion Rate", target: ">10%", current: "8.5%" },
        { name: "Cost per Acquisition", target: "₹200", current: "₹245" },
        { name: "Return on Investment", target: "300%", current: "275%" }
      ]
    },
    {
      category: "Social Metrics",
      metrics: [
        { name: "Follower Growth", target: "+25%/quarter", current: "+18%" },
        { name: "Engagement Rate", target: ">5%", current: "6.2%" },
        { name: "Share of Voice", target: "15%", current: "12%" }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: "bg-blue-50 border-blue-200 text-blue-700",
      purple: "bg-purple-50 border-purple-200 text-purple-700",
      green: "bg-green-50 border-green-200 text-green-700",
      orange: "bg-orange-50 border-orange-200 text-orange-700"
    };
    return colorMap[color] || "bg-slate-50 border-slate-200 text-slate-700";
  };

  return (
    <div className="space-y-6">
      {/* Overview */}
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="h-6 w-6" />
            <span>Goals, Objectives & Key Performance Indicators</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">4</div>
              <div className="text-blue-200 text-sm">Primary Goal Areas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">12</div>
              <div className="text-blue-200 text-sm">Key Objectives</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">16</div>
              <div className="text-blue-200 text-sm">KPI Metrics</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">6</div>
              <div className="text-blue-200 text-sm">Month Timeline</div>
            </div>
          </div>
          <p className="text-blue-100">
            Comprehensive measurement framework tracking brand awareness, lead generation, 
            revenue growth, and customer retention across multiple channels.
          </p>
        </CardContent>
      </Card>

      {/* Primary Goals */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {primaryGoals.map((goal, index) => (
          <Card key={index} className="bg-white border border-slate-200">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${getColorClasses(goal.color)}`}>
                  <goal.icon className="h-5 w-5" />
                </div>
                <span className="text-slate-800">{goal.category}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {goal.objectives.map((objective, objIndex) => (
                <div key={objIndex} className="p-3 bg-slate-50 rounded-lg">
                  <div className="font-medium text-slate-700 text-sm mb-1">{objective.metric}</div>
                  <div className="text-xs text-slate-600">{objective.target}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* KPI Metrics */}
      <Card className="bg-white border border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="h-5 w-5 text-purple-600" />
            <span>Key Performance Indicators (KPIs)</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {kpiMetrics.map((category, index) => (
              <div key={index} className="space-y-4">
                <h3 className="font-semibold text-slate-700 text-sm border-b border-slate-200 pb-2">
                  {category.category}
                </h3>
                <div className="space-y-3">
                  {category.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="p-3 bg-slate-50 rounded-lg">
                      <div className="font-medium text-slate-700 text-sm mb-1">{metric.name}</div>
                      <div className="flex justify-between items-center">
                        <div className="text-xs text-slate-500">Target: {metric.target}</div>
                        <Badge variant="secondary" className="text-xs">
                          {metric.current}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GoalsKPIs;
