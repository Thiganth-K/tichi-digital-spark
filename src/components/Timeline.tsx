
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Calendar, CheckCircle, Clock, Play, Target } from "lucide-react";

const Timeline = () => {
  const phases = [
    {
      phase: "Phase 1: Foundation",
      duration: "Months 1-2",
      status: "completed",
      progress: 100,
      color: "blue",
      objectives: [
        "Set up analytics and tracking systems",
        "Complete website optimization",
        "Develop comprehensive content calendar",
        "Launch basic social media presence",
        "Begin SEO optimization efforts"
      ],
      deliverables: [
        "Google Analytics 4 & Firebase setup",
        "Website speed optimization",
        "Social media accounts creation",
        "Content strategy document"
      ]
    },
    {
      phase: "Phase 2: Growth",
      duration: "Months 3-6", 
      status: "in-progress",
      progress: 65,
      color: "purple",
      objectives: [
        "Launch paid advertising campaigns",
        "Implement email marketing automation",
        "Scale content production",
        "Begin influencer partnerships",
        "Optimize based on initial data"
      ],
      deliverables: [
        "Meta & Google Ads campaigns live",
        "Email automation workflows",
        "Influencer partnership agreements",
        "Performance optimization reports"
      ]
    },
    {
      phase: "Phase 3: Scale",
      duration: "Months 7-12",
      status: "planned",
      progress: 15,
      color: "teal",
      objectives: [
        "Expand to additional marketing channels",
        "Launch advanced campaign strategies",
        "Implement sophisticated automation",
        "Scale successful initiatives",
        "Continuous optimization and refinement"
      ],
      deliverables: [
        "Multi-channel campaign expansion",
        "Advanced automation systems",
        "Scale strategy implementation",
        "ROI optimization framework"
      ]
    }
  ];

  const milestones = [
    { month: 1, title: "Analytics Setup", description: "Complete tracking infrastructure", status: "completed" },
    { month: 2, title: "Content Planning", description: "Develop content calendar & social launch", status: "completed" },
    { month: 3, title: "Paid Campaigns Launch", description: "Meta & Google Ads go live", status: "completed" },
    { month: 4, title: "Email Automation", description: "Implement automated email workflows", status: "in-progress" },
    { month: 5, title: "Influencer Partnerships", description: "Begin collaborations & content scaling", status: "planned" },
    { month: 6, title: "Mid-year Review", description: "Performance analysis & strategy adjustment", status: "planned" },
    { month: 9, title: "Channel Expansion", description: "Launch additional marketing channels", status: "planned" },
    { month: 12, title: "Year-end Optimization", description: "Final review & next year planning", status: "planned" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-50 text-green-700 border-green-200";
      case "in-progress": return "bg-blue-50 text-blue-700 border-blue-200";
      case "planned": return "bg-slate-50 text-slate-700 border-slate-200";
      default: return "bg-slate-50 text-slate-700 border-slate-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed": return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "in-progress": return <Play className="h-4 w-4 text-blue-600" />;
      case "planned": return <Clock className="h-4 w-4 text-slate-600" />;
      default: return <Clock className="h-4 w-4 text-slate-600" />;
    }
  };

  const getPhaseColor = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: "from-blue-500 to-blue-600",
      purple: "from-purple-500 to-purple-600", 
      teal: "from-teal-500 to-teal-600"
    };
    return colorMap[color] || "from-slate-500 to-slate-600";
  };

  return (
    <div className="space-y-6">
      {/* Timeline Overview */}
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="h-6 w-6" />
            <span>Implementation Timeline Overview</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">12</div>
              <div className="text-blue-200 text-sm">Month Strategy</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">3</div>
              <div className="text-blue-200 text-sm">Strategic Phases</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">8</div>
              <div className="text-blue-200 text-sm">Key Milestones</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">60%</div>
              <div className="text-blue-200 text-sm">Current Progress</div>
            </div>
          </div>
          <p className="text-blue-100">
            Structured in three agile phases focusing on foundation, growth, and scale 
            with monthly milestones and performance benchmarks.
          </p>
        </CardContent>
      </Card>

      {/* Phase Timeline */}
      <div className="space-y-6">
        {phases.map((phase, index) => (
          <Card key={index} className="bg-white border border-slate-200 overflow-hidden">
            <div className={`h-2 bg-gradient-to-r ${getPhaseColor(phase.color)}`}></div>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${getPhaseColor(phase.color)} text-white`}>
                    <Target className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-slate-800">{phase.phase}</span>
                    <div className="text-sm text-slate-600 font-normal">{phase.duration}</div>
                  </div>
                </CardTitle>
                <div className="flex items-center space-x-3">
                  <Badge className={getStatusColor(phase.status)}>
                    {getStatusIcon(phase.status)}
                    <span className="ml-1">{phase.status}</span>
                  </Badge>
                  <span className="text-sm font-medium text-slate-700">{phase.progress}%</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Progress Bar */}
              <Progress value={phase.progress} className="h-3" />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Objectives */}
                <div>
                  <h4 className="font-semibold text-slate-700 mb-3">Key Objectives</h4>
                  <ul className="space-y-2">
                    {phase.objectives.map((objective, objIndex) => (
                      <li key={objIndex} className="text-sm text-slate-600 flex items-start space-x-2">
                        <span className="text-slate-400 mt-1">•</span>
                        <span>{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Deliverables */}
                <div>
                  <h4 className="font-semibold text-slate-700 mb-3">Key Deliverables</h4>
                  <div className="space-y-2">
                    {phase.deliverables.map((deliverable, delIndex) => (
                      <div key={delIndex} className="flex items-center space-x-2">
                        {phase.status === "completed" ? (
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        ) : phase.status === "in-progress" ? (
                          <Play className="h-4 w-4 text-blue-600 flex-shrink-0" />
                        ) : (
                          <Clock className="h-4 w-4 text-slate-400 flex-shrink-0" />
                        )}
                        <span className="text-sm text-slate-600">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Monthly Milestones */}
      <Card className="bg-white border border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-purple-600" />
            <span>Monthly Milestones</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {milestones.map((milestone, index) => (
              <div key={index} className="p-4 border border-slate-200 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline" className="bg-slate-50">
                    Month {milestone.month}
                  </Badge>
                  {getStatusIcon(milestone.status)}
                </div>
                <h4 className="font-semibold text-slate-700 mb-2">{milestone.title}</h4>
                <p className="text-sm text-slate-600">{milestone.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Timeline;
