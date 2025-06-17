
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, AlertTriangle, CheckCircle, MessageCircle, Clock, Users } from "lucide-react";

const RiskManagement = () => {
  const potentialRisks = [
    {
      category: "Platform Algorithm Changes",
      description: "Changes to social media or search engine algorithms may reduce organic reach or performance",
      impact: "High",
      likelihood: "Medium"
    },
    {
      category: "Economic Downturns",
      description: "Reduced consumer spending may impact conversions, especially in low-income segments",
      impact: "Medium",
      likelihood: "Low"
    },
    {
      category: "Competitive Pressure",
      description: "Market saturation may increase CAC (Customer Acquisition Cost) and lower differentiation",
      impact: "High",
      likelihood: "High"
    },
    {
      category: "Technical Issues",
      description: "Website downtime, broken links, or app crashes may reduce trust and engagement",
      impact: "Medium",
      likelihood: "Medium"
    },
    {
      category: "Reputation Risks",
      description: "Negative reviews, service failures, or social backlash can harm brand perception",
      impact: "High",
      likelihood: "Medium"
    }
  ];

  const mitigationStrategies = [
    {
      risk: "Traffic Dependency",
      strategy: "Diversify across SEO, Meta Ads, WhatsApp marketing, and community ambassador programs",
      icon: Shield
    },
    {
      risk: "Budget Flexibility",
      strategy: "Use modular budgets that can be reallocated based on performance per channel",
      icon: CheckCircle
    },
    {
      risk: "Brand Monitoring",
      strategy: "Set up social listening tools and real-time alerts for negative mentions or crises",
      icon: AlertTriangle
    },
    {
      risk: "Tech Health Checks",
      strategy: "Conduct monthly audits for bugs, speed, and broken flows across app and website",
      icon: CheckCircle
    },
    {
      risk: "Customer Trust Building",
      strategy: "Reinforce service verification, refund policies, and fast customer support",
      icon: Users
    }
  ];

  const crisisCommunication = {
    identification: {
      title: "Crisis Identification & Escalation",
      steps: [
        "Detect negative events through support tickets, social listening, or downtime alerts",
        "Escalate to PR and Digital Marketing Manager within 2 hours"
      ]
    },
    responseTeam: {
      title: "Response Team & Roles",
      roles: [
        { role: "PR", responsibility: "Craft customer-facing messages" },
        { role: "Digital Marketer", responsibility: "Coordinate platform-wide response" },
        { role: "Founder", responsibility: "Approve messaging and action plan" }
      ]
    },
    templates: {
      title: "Pre-approved Messaging Templates",
      scenarios: ["Service delay", "Refund issue", "App downtime", "Account security"]
    },
    channels: {
      title: "Communication Channels & Timelines",
      timeline: "WhatsApp Broadcast, Social Media, Email – 1st response within 2 hours, resolution update in 24 hours"
    },
    review: {
      title: "Post-Crisis Review",
      components: ["Root cause analysis", "Customer impact analysis", "Process improvement documentation"]
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "High": return "text-red-600 bg-red-50 border-red-200";
      case "Medium": return "text-orange-600 bg-orange-50 border-orange-200";
      case "Low": return "text-green-600 bg-green-50 border-green-200";
      default: return "text-slate-600 bg-slate-50 border-slate-200";
    }
  };

  const getLikelihoodColor = (likelihood: string) => {
    switch (likelihood) {
      case "High": return "text-red-600 bg-red-50 border-red-200";
      case "Medium": return "text-yellow-600 bg-yellow-50 border-yellow-200";
      case "Low": return "text-blue-600 bg-blue-50 border-blue-200";
      default: return "text-slate-600 bg-slate-50 border-slate-200";
    }
  };

  return (
    <div className="space-y-6">
      {/* Overview */}
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="h-6 w-6" />
            <span>Risk Management & Contingencies</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">5</div>
              <div className="text-blue-200 text-sm">Identified Risks</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">5</div>
              <div className="text-blue-200 text-sm">Mitigation Strategies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">2hrs</div>
              <div className="text-blue-200 text-sm">Crisis Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">24hrs</div>
              <div className="text-blue-200 text-sm">Resolution Update</div>
            </div>
          </div>
          <p className="text-blue-100">
            Comprehensive risk management framework with proactive mitigation strategies 
            and crisis communication protocols to ensure business continuity.
          </p>
        </CardContent>
      </Card>

      {/* Potential Risks */}
      <Card className="bg-white border border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-orange-600" />
            <span>Potential Risks Assessment</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {potentialRisks.map((risk, index) => (
              <div key={index} className="border border-slate-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-slate-800">{risk.category}</h3>
                  <div className="flex items-center space-x-2">
                    <Badge className={getImpactColor(risk.impact)} variant="outline">
                      Impact: {risk.impact}
                    </Badge>
                    <Badge className={getLikelihoodColor(risk.likelihood)} variant="outline">
                      Likelihood: {risk.likelihood}
                    </Badge>
                  </div>
                </div>
                <p className="text-sm text-slate-600">{risk.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Mitigation Strategies */}
      <Card className="bg-white border border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span>Mitigation Strategies</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mitigationStrategies.map((mitigation, index) => (
              <div key={index} className="p-4 border border-slate-200 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <mitigation.icon className="h-5 w-5 text-green-600" />
                  <h4 className="font-semibold text-slate-800">{mitigation.risk}</h4>
                </div>
                <p className="text-sm text-slate-600">{mitigation.strategy}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Crisis Communication Plan */}
      <Card className="bg-white border border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MessageCircle className="h-5 w-5 text-purple-600" />
            <span>Crisis Communication Plan</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Identification */}
          <div className="p-4 bg-red-50 rounded-lg border border-red-200">
            <h4 className="font-semibold text-red-800 mb-3 flex items-center space-x-2">
              <AlertTriangle className="h-4 w-4" />
              <span>{crisisCommunication.identification.title}</span>
            </h4>
            <ul className="space-y-1">
              {crisisCommunication.identification.steps.map((step, index) => (
                <li key={index} className="text-sm text-red-700">• {step}</li>
              ))}
            </ul>
          </div>

          {/* Response Team */}
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-3 flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span>{crisisCommunication.responseTeam.title}</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {crisisCommunication.responseTeam.roles.map((role, index) => (
                <div key={index} className="text-sm">
                  <span className="font-medium text-blue-800">{role.role}:</span>
                  <span className="text-blue-700 ml-1">{role.responsibility}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Templates */}
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-800 mb-3 flex items-center space-x-2">
              <MessageCircle className="h-4 w-4" />
              <span>{crisisCommunication.templates.title}</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {crisisCommunication.templates.scenarios.map((scenario, index) => (
                <Badge key={index} className="bg-purple-100 text-purple-700">
                  {scenario}
                </Badge>
              ))}
            </div>
          </div>

          {/* Channels & Timeline */}
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-800 mb-3 flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>{crisisCommunication.channels.title}</span>
            </h4>
            <p className="text-sm text-green-700">{crisisCommunication.channels.timeline}</p>
          </div>

          {/* Post-Crisis Review */}
          <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
            <h4 className="font-semibold text-orange-800 mb-3 flex items-center space-x-2">
              <CheckCircle className="h-4 w-4" />
              <span>{crisisCommunication.review.title}</span>
            </h4>
            <ul className="space-y-1">
              {crisisCommunication.review.components.map((component, index) => (
                <li key={index} className="text-sm text-orange-700">• {component}</li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RiskManagement;
