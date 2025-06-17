
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Target, Globe, TrendingUp, Zap, Shield } from "lucide-react";

const BusinessFoundation = () => {
  const revenueTargets = [
    { period: "Current", amount: "₹4.02 Cr", description: "Subscriptions, pay-per-use, verifications" },
    { period: "Future Potential", amount: "₹6.92 Cr", description: "Including ads, APIs, corporate plans" },
    { period: "5-Year Target", amount: "₹8.85 Cr", description: "Net profit of ₹4.11 Cr projected" }
  ];

  const marketExpansion = [
    { phase: "Year 1-2", markets: "Tier 1 & 2 Indian Cities", status: "active" },
    { phase: "Year 3-4", markets: "Southeast Asia & Middle East", status: "planned" },
    { phase: "Year 5", markets: "African & European Markets", status: "future" }
  ];

  const swotData = {
    strengths: [
      "Scalable multi-revenue business model",
      "Advanced AI matching system", 
      "Verified and secure platform to reduce fraud",
      "Growing user base across segments"
    ],
    weaknesses: [
      "No auto-renewal for subscriptions",
      "Limited awareness among rural users",
      "Dependence on rapid digital adoption"
    ],
    opportunities: [
      "₹455 billion gig economy in India",
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

  return (
    <div className="space-y-6">
      {/* Business Overview */}
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Building className="h-6 w-6" />
            <span>Business Foundation Overview</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-blue-100 mb-6">
            Tichi aims to become the global connector of opportunities, creating a comprehensive ecosystem 
            that simplifies access to business and career opportunities through AI-powered matching.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold text-white">All-in-One</div>
              <div className="text-blue-200 text-sm">Platform Solution</div>
            </div>
            <div className="text-center bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold text-white">AI-Powered</div>
              <div className="text-blue-200 text-sm">Smart Matching</div>
            </div>
            <div className="text-center bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold text-white">Verified</div>
              <div className="text-blue-200 text-sm">Trusted Network</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Business Objectives */}
      <Card className="bg-white border border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="h-5 w-5 text-blue-600" />
            <span>Primary Business Goals</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center space-x-2 mb-2">
                  <Zap className="h-5 w-5 text-blue-600" />
                  <span className="font-semibold text-blue-800">Connect Opportunities</span>
                </div>
                <p className="text-sm text-blue-700">
                  Connect opportunity seekers (job seekers, freelancers, businesses) with providers 
                  (employers, service users, investors)
                </p>
              </div>
              
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div className="flex items-center space-x-2 mb-2">
                  <Building className="h-5 w-5 text-purple-600" />
                  <span className="font-semibold text-purple-800">Comprehensive Ecosystem</span>
                </div>
                <p className="text-sm text-purple-700">
                  Build a comprehensive ecosystem that simplifies access to business and career opportunities
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
                <div className="flex items-center space-x-2 mb-2">
                  <Shield className="h-5 w-5 text-teal-600" />
                  <span className="font-semibold text-teal-800">Digital Marketplace</span>
                </div>
                <p className="text-sm text-teal-700">
                  Create a digital marketplace for verified services and professional collaborations
                </p>
              </div>
              
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="flex items-center space-x-2 mb-2">
                  <TrendingUp className="h-5 w-5 text-orange-600" />
                  <span className="font-semibold text-orange-800">Scalable Platform</span>
                </div>
                <p className="text-sm text-orange-700">
                  Position as trusted and scalable digital ecosystem for jobs, services, and growth
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Revenue Targets */}
      <Card className="bg-white border border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-green-600" />
            <span>Revenue Targets & Growth</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {revenueTargets.map((target, index) => (
              <div key={index} className="p-4 border border-slate-200 rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-800 mb-2">{target.amount}</div>
                  <div className="text-sm font-medium text-slate-700 mb-2">{target.period}</div>
                  <p className="text-xs text-slate-600">{target.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Market Expansion */}
      <Card className="bg-white border border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Globe className="h-5 w-5 text-purple-600" />
            <span>Market Expansion Strategy</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {marketExpansion.map((expansion, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                <div className="flex items-center space-x-4">
                  <Badge 
                    variant="outline" 
                    className={
                      expansion.status === 'active' ? 'bg-green-50 text-green-700 border-green-200' :
                      expansion.status === 'planned' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                      'bg-slate-50 text-slate-700 border-slate-200'
                    }
                  >
                    {expansion.phase}
                  </Badge>
                  <span className="font-medium text-slate-700">{expansion.markets}</span>
                </div>
                <Badge variant="secondary" className="capitalize">
                  {expansion.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* SWOT Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <Card className="bg-green-50 border-green-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-green-800">Strengths</CardTitle>
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
              <CardTitle className="text-blue-800">Opportunities</CardTitle>
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

        <div className="space-y-4">
          <Card className="bg-orange-50 border-orange-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-orange-800">Weaknesses</CardTitle>
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
              <CardTitle className="text-red-800">Threats</CardTitle>
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

export default BusinessFoundation;
