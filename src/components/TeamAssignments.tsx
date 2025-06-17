
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Users, FileText, BarChart3, Target, DollarSign, Calendar, Settings, Eye } from "lucide-react";

const TeamAssignments = () => {
  const assignments = [
    {
      section: "Executive Summary",
      subsections: ["Brief Overview", "Key Objectives", "Budget Summary", "Timeline Overview"],
      assignedTo: ["Parvat R"],
      icon: FileText,
      color: "blue",
      progress: 85
    },
    {
      section: "Business Foundation", 
      subsections: ["Business Objectives", "Company Analysis", "SWOT Analysis"],
      assignedTo: ["Parvat R"],
      icon: Settings,
      color: "purple",
      progress: 92
    },
    {
      section: "Market & Competitive Analysis",
      subsections: ["Market Overview", "Competitive Landscape", "Gap & SWOT for competitors"],
      assignedTo: ["Sachin S", "Sanjith R"],
      icon: BarChart3,
      color: "teal",
      progress: 78
    },
    {
      section: "Target Audience & Customer Personas",
      subsections: ["Primary Personas", "Customer Journey Mapping"],
      assignedTo: ["Sivaprakash R K", "Parvat R", "Santhosh S"],
      icon: Users,
      color: "orange",
      progress: 90
    },
    {
      section: "Goals, KPIs & Indicators",
      subsections: ["Brand Awareness", "Lead Gen", "Sales Goals", "Retention Metrics"],
      assignedTo: ["Swetha", "Sivaprakash R K"],
      icon: Target,
      color: "green",
      progress: 75
    },
    {
      section: "Digital Marketing Channels Strategy",
      subsections: ["SEO", "SEM", "Social Media", "Content", "Email", "Influencer Marketing"],
      assignedTo: ["Swetha", "Asmath", "Hazeena"],
      icon: Eye,
      color: "indigo",
      progress: 68
    },
    {
      section: "Budget Allocation",
      subsections: ["Budget Breakdown by Channel", "Tools", "Personnel", "Quarterly Review"],
      assignedTo: ["Giridharan"],
      icon: DollarSign,
      color: "yellow",
      progress: 95
    },
    {
      section: "Implementation Timeline",
      subsections: ["Phased Rollout", "Growth Strategy", "Scale Plans", "Monthly Milestones"],
      assignedTo: ["Sivaprakash R K"],
      icon: Calendar,
      color: "pink",
      progress: 82
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: "bg-blue-50 border-blue-200 text-blue-700",
      purple: "bg-purple-50 border-purple-200 text-purple-700",
      teal: "bg-teal-50 border-teal-200 text-teal-700",
      orange: "bg-orange-50 border-orange-200 text-orange-700",
      green: "bg-green-50 border-green-200 text-green-700",
      indigo: "bg-indigo-50 border-indigo-200 text-indigo-700",
      yellow: "bg-yellow-50 border-yellow-200 text-yellow-700",
      pink: "bg-pink-50 border-pink-200 text-pink-700"
    };
    return colorMap[color] || "bg-slate-50 border-slate-200 text-slate-700";
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const teamMembers = [
    "Parvat R", "Sachin S", "Sanjith R", "Sivaprakash R K", 
    "Santhosh S", "Swetha", "Asmath", "Hazeena", "Giridharan"
  ];

  return (
    <div className="space-y-6">
      {/* Team Overview */}
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="h-6 w-6" />
            <span>Digital Marketing Team Structure</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{teamMembers.length}</div>
              <div className="text-blue-200 text-sm">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{assignments.length}</div>
              <div className="text-blue-200 text-sm">Strategy Sections</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">12</div>
              <div className="text-blue-200 text-sm">Month Timeline</div>
            </div>
          </div>
          
          <div className="mt-6">
            <div className="text-sm text-blue-200 mb-3">Team Members:</div>
            <div className="flex flex-wrap gap-2">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex items-center space-x-2 bg-white/20 rounded-full px-3 py-1">
                  <Avatar className="h-6 w-6">
                    <AvatarFallback className="text-xs bg-white/30 text-white">
                      {getInitials(member)}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-white">{member}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Assignment Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {assignments.map((assignment, index) => (
          <Card key={index} className="bg-white border border-slate-200 hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${getColorClasses(assignment.color)}`}>
                    <assignment.icon className="h-5 w-5" />
                  </div>
                  <span className="text-slate-800">{assignment.section}</span>
                </div>
                <Badge 
                  variant="outline" 
                  className={`${getColorClasses(assignment.color)} border`}
                >
                  {assignment.progress}%
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Progress Bar */}
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full bg-gradient-to-r ${
                    assignment.color === 'blue' ? 'from-blue-400 to-blue-600' :
                    assignment.color === 'purple' ? 'from-purple-400 to-purple-600' :
                    assignment.color === 'teal' ? 'from-teal-400 to-teal-600' :
                    assignment.color === 'orange' ? 'from-orange-400 to-orange-600' :
                    assignment.color === 'green' ? 'from-green-400 to-green-600' :
                    assignment.color === 'indigo' ? 'from-indigo-400 to-indigo-600' :
                    assignment.color === 'yellow' ? 'from-yellow-400 to-yellow-600' :
                    'from-pink-400 to-pink-600'
                  }`}
                  style={{ width: `${assignment.progress}%` }}
                ></div>
              </div>

              {/* Subsections */}
              <div className="space-y-2">
                <div className="text-sm font-medium text-slate-700">Subsections:</div>
                <div className="flex flex-wrap gap-1">
                  {assignment.subsections.map((subsection, subIndex) => (
                    <Badge 
                      key={subIndex} 
                      variant="secondary" 
                      className="text-xs bg-slate-100 text-slate-600"
                    >
                      {subsection}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Assigned Team Members */}
              <div className="space-y-2">
                <div className="text-sm font-medium text-slate-700">Assigned to:</div>
                <div className="flex flex-wrap gap-2">
                  {assignment.assignedTo.map((member, memberIndex) => (
                    <div key={memberIndex} className="flex items-center space-x-2 bg-slate-50 rounded-full px-3 py-1">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="text-xs bg-slate-200 text-slate-700">
                          {getInitials(member)}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-slate-700">{member}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TeamAssignments;
