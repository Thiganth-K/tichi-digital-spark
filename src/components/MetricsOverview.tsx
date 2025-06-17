
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BarChart3, TrendingUp, Users, Target, DollarSign, Eye, Clock, Zap } from "lucide-react";

const MetricsOverview = () => {
  const kpiCategories = [
    {
      title: "Brand Awareness",
      icon: Eye,
      color: "blue",
      metrics: [
        { name: "Brand Search Growth", target: "+30%", current: "22%", progress: 73 },
        { name: "Direct Traffic", target: "+30%", current: "18%", progress: 60 },
        { name: "Brand Sentiment", target: ">80%", current: "85%", progress: 100 },
        { name: "Tier 2&3 Traffic Share", target: "40%", current: "32%", progress: 80 }
      ]
    },
    {
      title: "Lead Generation", 
      icon: Users,
      color: "purple",
      metrics: [
        { name: "Monthly Qualified Leads", target: "5,000+", current: "3,850", progress: 77 },
        { name: "Lead-to-Conversion Rate", target: ">15%", current: "18%", progress: 100 },
        { name: "Cost Per Lead (CPL)", target: "25% reduction", current: "18% reduction", progress: 72 },
        { name: "Lead Quality Score", target: ">15%", current: "16.5%", progress: 100 }
      ]
    },
    {
      title: "Sales & Revenue",
      icon: DollarSign, 
      color: "teal",
      metrics: [
        { name: "Year 1 Revenue", target: "₹3.6 Cr", current: "₹1.2 Cr", progress: 33 },
        { name: "Signup to Paid Conversion", target: "+35%", current: "+28%", progress: 80 },
        { name: "Average Order Value", target: "₹150", current: "₹135", progress: 90 },
        { name: "Monthly Revenue Growth", target: "20%", current: "15%", progress: 75 }
      ]
    },
    {
      title: "Customer Retention",
      icon: Target,
      color: "orange", 
      metrics: [
        { name: "Customer Lifetime Value", target: "₹500+", current: "₹420", progress: 84 },
        { name: "Subscription Renewal Rate", target: ">40%", current: "38%", progress: 95 },
        { name: "Customer Satisfaction", target: "85%+", current: "87%", progress: 100 },
        { name: "Support Response Time", target: "<12 hours", current: "8 hours", progress: 100 }
      ]
    }
  ];

  const trafficMetrics = [
    { name: "Organic Traffic Share", value: "45%", change: "+12%", trend: "up" },
    { name: "Paid Traffic CTR", value: "2.1%", change: "+0.3%", trend: "up" },
    { name: "Mobile vs Desktop", value: "78% / 22%", change: "+5%", trend: "up" },
    { name: "Avg Session Duration", value: "4.2 min", change: "+1.1 min", trend: "up" }
  ];

  const engagementMetrics = [
    { name: "Bounce Rate", value: "35%", change: "-8%", trend: "down" },
    { name: "Pages Per Session", value: "3.4", change: "+0.6", trend: "up" },
    { name: "Social Engagement Rate", value: "6.2%", change: "+1.8%", trend: "up" },
    { name: "Email Open Rate", value: "28%", change: "+5%", trend: "up" }
  ];

  const socialMetrics = [
    { platform: "Instagram", followers: "12.5K", growth: "+25%", engagement: "7.2%" },
    { platform: "LinkedIn", followers: "8.2K", growth: "+18%", engagement: "4.8%" },
    { platform: "Facebook", followers: "15.1K", growth: "+22%", engagement: "5.1%" },
    { platform: "Twitter", followers: "6.8K", growth: "+15%", engagement: "3.9%" }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: "from-blue-500 to-blue-600",
      purple: "from-purple-500 to-purple-600",
      teal: "from-teal-500 to-teal-600", 
      orange: "from-orange-500 to-orange-600"
    };
    return colorMap[color] || "from-slate-500 to-slate-600";
  };

  const getTrendIcon = (trend: string) => {
    return trend === "up" ? (
      <TrendingUp className="h-4 w-4 text-green-600" />
    ) : (
      <div className="h-4 w-4 text-green-600 rotate-180">
        <TrendingUp className="h-4 w-4" />
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Metrics Overview Header */}
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="h-6 w-6" />
            <span>Performance Metrics & Analytics</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">78%</div>
              <div className="text-blue-200 text-sm">Overall Progress</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">16</div>
              <div className="text-blue-200 text-sm">Key KPIs</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">4.2min</div>
              <div className="text-blue-200 text-sm">Avg Session</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">₹45</div>
              <div className="text-blue-200 text-sm">Current CPI</div>
            </div>
          </div>
          <p className="text-blue-100">
            Real-time performance tracking across brand awareness, lead generation, 
            revenue growth, and customer retention metrics.
          </p>
        </CardContent>
      </Card>

      {/* KPI Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {kpiCategories.map((category, index) => (
          <Card key={index} className="bg-white border border-slate-200">
            <div className={`h-2 bg-gradient-to-r ${getColorClasses(category.color)}`}></div>
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${getColorClasses(category.color)} text-white`}>
                  <category.icon className="h-5 w-5" />
                </div>
                <span className="text-slate-800">{category.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {category.metrics.map((metric, metricIndex) => (
                <div key={metricIndex} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-slate-700">{metric.name}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-slate-600">{metric.current}</span>
                      <Badge variant="outline" className="text-xs">
                        Target: {metric.target}
                      </Badge>
                    </div>
                  </div>
                  <Progress value={metric.progress} className="h-2" />
                  <div className="text-xs text-slate-500 text-right">{metric.progress}% of target</div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Traffic & Engagement Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white border border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Zap className="h-5 w-5 text-blue-600" />
              <span>Traffic Metrics</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {trafficMetrics.map((metric, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div>
                  <div className="font-medium text-slate-700">{metric.name}</div>
                  <div className="text-sm text-slate-600">{metric.value}</div>
                </div>
                <div className="flex items-center space-x-2">
                  {getTrendIcon(metric.trend)}
                  <span className="text-sm font-medium text-green-600">{metric.change}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-white border border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-purple-600" />
              <span>Engagement Metrics</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {engagementMetrics.map((metric, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div>
                  <div className="font-medium text-slate-700">{metric.name}</div>
                  <div className="text-sm text-slate-600">{metric.value}</div>
                </div>
                <div className="flex items-center space-x-2">
                  {getTrendIcon(metric.trend)}
                  <span className="text-sm font-medium text-green-600">{metric.change}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Social Media Performance */}
      <Card className="bg-white border border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-teal-600" />
            <span>Social Media Performance</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {socialMetrics.map((social, index) => (
              <div key={index} className="p-4 border border-slate-200 rounded-lg">
                <div className="text-center space-y-2">
                  <h4 className="font-semibold text-slate-700">{social.platform}</h4>
                  <div className="text-2xl font-bold text-slate-800">{social.followers}</div>
                  <div className="space-y-1">
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-300">
                      {social.growth} growth
                    </Badge>
                    <div className="text-sm text-slate-600">
                      Engagement: {social.engagement}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Performance Benchmarks */}
      <Card className="bg-white border border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="h-5 w-5 text-orange-600" />
            <span>App-Focused Performance Benchmarks</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="text-blue-800 font-semibold mb-1">Cost Per Install</div>
              <div className="text-2xl font-bold text-blue-900">₹45</div>
              <div className="text-sm text-blue-700">Target: ₹30-₹60</div>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="text-purple-800 font-semibold mb-1">CTR (Meta Ads)</div>
              <div className="text-2xl font-bold text-purple-900">1.8%</div>
              <div className="text-sm text-purple-700">Target: ≥1.5%</div>
            </div>
            <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
              <div className="text-teal-800 font-semibold mb-1">Install → Signup</div>
              <div className="text-2xl font-bold text-teal-900">28%</div>
              <div className="text-sm text-teal-700">Target: ≥25%</div>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
              <div className="text-orange-800 font-semibold mb-1">Budget Efficiency</div>
              <div className="text-2xl font-bold text-orange-900">95%</div>
              <div className="text-sm text-orange-700">Target: 100%</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MetricsOverview;
