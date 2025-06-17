
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Users, Globe, Shield, AlertTriangle, CheckCircle } from "lucide-react";

const MarketAnalysis = () => {
  const marketData = [
    {
      title: "India's Gig Economy",
      value: "₹455 Billion",
      subtitle: "Expected by 2025",
      growth: "+350M workers",
      color: "blue"
    },
    {
      title: "Quick Commerce Growth",
      value: "15-30%",
      subtitle: "CAGR",
      growth: "Hyperlocal services",
      color: "purple"
    },
    {
      title: "Freelancing Revenue",
      value: "$1+ Billion",
      subtitle: "India contribution",
      growth: "17% YoY growth",
      color: "teal"
    }
  ];

  const competitors = [
    {
      name: "Urban Company",
      strengths: ["Verified pros", "Strong brand"],
      weaknesses: ["Excludes semi-skilled workers", "Tier-1 focus only"],
      marketShare: 15,
      color: "blue"
    },
    {
      name: "OLX/Quikr",
      strengths: ["Large audience", "Local reach"],
      weaknesses: ["Scams & spam", "No service fulfillment"],
      marketShare: 25,
      color: "orange"
    },
    {
      name: "Fiverr/Upwork",
      strengths: ["Skill-based income", "Global reach"],
      weaknesses: ["Requires portfolios", "Intense competition"],
      marketShare: 20,
      color: "green"
    },
    {
      name: "Apna/Job Hai",
      strengths: ["Entry-level jobs", "Wide adoption"],
      weaknesses: ["Recruiter-led", "Few gig posts"],
      marketShare: 18,
      color: "purple"
    },
    {
      name: "JustDial",
      strengths: ["Service database", "Top web traffic"],
      weaknesses: ["Cold calls", "No two-way matching"],
      marketShare: 22,
      color: "teal"
    }
  ];

  const swotData = {
    strengths: [
      "Scalable multi-revenue business model",
      "Advanced AI matching system", 
      "Verified and secure platform",
      "Growing user base across segments"
    ],
    weaknesses: [
      "No auto-renewal for subscriptions",
      "Limited awareness in rural areas",
      "Dependence on digital adoption"
    ],
    opportunities: [
      "₹455 billion gig economy potential",
      "Rising demand for service verification",
      "Increasing MSME digitization",
      "International expansion potential"
    ],
    threats: [
      "Competition from established platforms",
      "Regulatory risks and compliance",
      "High customer acquisition costs",
      "Infrastructure scale-up challenges"
    ]
  };

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: "bg-blue-50 border-blue-200 text-blue-700",
      purple: "bg-purple-50 border-purple-200 text-purple-700",
      teal: "bg-teal-50 border-teal-200 text-teal-700",
      orange: "bg-orange-50 border-orange-200 text-orange-700",
      green: "bg-green-50 border-green-200 text-green-700"
    };
    return colorMap[color] || "bg-slate-50 border-slate-200 text-slate-700";
  };

  return (
    <div className="space-y-6">
      {/* Market Overview */}
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Globe className="h-6 w-6" />
            <span>Market Overview & Opportunity</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-blue-100 mb-6">
            Tichi operates at the intersection of multiple high-growth sectors: Gig Economy, 
            Hyperlocal Services, Job Platforms, and Community Networks.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {marketData.map((item, index) => (
              <div key={index} className="text-center bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-white">{item.value}</div>
                <div className="text-blue-200 text-sm mb-2">{item.subtitle}</div>
                <div className="text-xs text-blue-300">{item.growth}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Competitive Analysis */}
      <Card className="bg-white border border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-purple-600" />
            <span>Competitive Landscape</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {competitors.map((competitor, index) => (
              <div key={index} className="border border-slate-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <h3 className="font-semibold text-slate-800">{competitor.name}</h3>
                    <Badge className={getColorClasses(competitor.color)}>
                      {competitor.marketShare}% market share
                    </Badge>
                  </div>
                  <Progress value={competitor.marketShare} className="w-24 h-2" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium text-slate-700">Strengths</span>
                    </div>
                    <ul className="text-sm text-slate-600 space-y-1">
                      {competitor.strengths.map((strength, i) => (
                        <li key={i}>• {strength}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <AlertTriangle className="h-4 w-4 text-orange-600" />
                      <span className="text-sm font-medium text-slate-700">Weaknesses</span>
                    </div>
                    <ul className="text-sm text-slate-600 space-y-1">
                      {competitor.weaknesses.map((weakness, i) => (
                        <li key={i}>• {weakness}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* SWOT Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Strengths & Opportunities */}
        <div className="space-y-4">
          <Card className="bg-green-50 border-green-200">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-2 text-green-800">
                <CheckCircle className="h-5 w-5" />
                <span>Strengths</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {swotData.strengths.map((item, index) => (
                  <li key={index} className="text-sm text-green-700 flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border-blue-200">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-2 text-blue-800">
                <TrendingUp className="h-5 w-5" />
                <span>Opportunities</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {swotData.opportunities.map((item, index) => (
                  <li key={index} className="text-sm text-blue-700 flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Weaknesses & Threats */}
        <div className="space-y-4">
          <Card className="bg-orange-50 border-orange-200">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-2 text-orange-800">
                <AlertTriangle className="h-5 w-5" />
                <span>Weaknesses</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {swotData.weaknesses.map((item, index) => (
                  <li key={index} className="text-sm text-orange-700 flex items-start space-x-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-red-50 border-red-200">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-2 text-red-800">
                <Shield className="h-5 w-5" />
                <span>Threats</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {swotData.threats.map((item, index) => (
                  <li key={index} className="text-sm text-red-700 flex items-start space-x-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MarketAnalysis;
