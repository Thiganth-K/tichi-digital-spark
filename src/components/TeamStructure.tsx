
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Users, Star, MessageSquare, Clock, Target } from "lucide-react";

const TeamStructure = () => {
  const teamMembers = [
    {
      name: "Sivaprakash R K",
      role: "Digital Marketing Team Leader",
      responsibilities: ["Strategy oversight", "Team coordination", "Performance monitoring"],
      avatar: "SR",
      color: "blue"
    },
    {
      name: "Sachin S",
      role: "Digital Marketing Specialist", 
      responsibilities: ["Campaign execution", "Market analysis", "Content strategy"],
      avatar: "SS",
      color: "purple"
    },
    {
      name: "Parvat R",
      role: "Public Relations",
      responsibilities: ["Brand messaging", "Crisis communication", "Media relations"],
      avatar: "PR",
      color: "teal"
    },
    {
      name: "Santhosh S",
      role: "Content Creator",
      responsibilities: ["Blog posts", "Social content", "Video production"],
      avatar: "ST",
      color: "orange"
    },
    {
      name: "Sanjith R",
      role: "Content Creator",
      responsibilities: ["Visual content", "Graphic design", "Content calendar"],
      avatar: "SJ",
      color: "green"
    },
    {
      name: "Giridhar R V",
      role: "Paid Media Specialist",
      responsibilities: ["PPC campaigns", "Budget management", "Ad optimization"],
      avatar: "GR",
      color: "indigo"
    },
    {
      name: "Asmath Hazeena",
      role: "Social Media Manager",
      responsibilities: ["Community management", "Social engagement", "Platform strategy"],
      avatar: "AH",
      color: "pink"
    },
    {
      name: "Swetha G",
      role: "SEM Specialist",
      responsibilities: ["Search marketing", "Keyword strategy", "Performance tracking"],
      avatar: "SW",
      color: "yellow"
    }
  ];

  const communicationProtocols = [
    {
      frequency: "Bi-weekly",
      type: "Team Standup Meetings",
      purpose: "Progress updates and issue resolution",
      icon: Users
    },
    {
      frequency: "Weekly", 
      type: "Performance Review Meetings",
      purpose: "Metrics analysis and optimization",
      icon: Target
    },
    {
      frequency: "Monthly",
      type: "Strategy Planning Sessions", 
      purpose: "Strategic direction and planning",
      icon: Star
    },
    {
      frequency: "Ad-hoc",
      type: "Urgent Issue Communication",
      purpose: "Crisis management and quick decisions",
      icon: MessageSquare
    }
  ];

  const organizationChart = {
    leadership: {
      title: "Leadership Team",
      members: ["Sivaprakash R K - Team Leader"]
    },
    specialists: {
      title: "Specialists",
      members: ["Sachin S - Digital Marketing", "Giridhar R V - Paid Media", "Swetha G - SEM"]
    },
    creators: {
      title: "Content & Communications",
      members: ["Parvat R - Public Relations", "Santhosh S - Content", "Sanjith R - Content", "Asmath Hazeena - Social Media"]
    },
    pending: {
      title: "To Be Assigned",
      members: ["Data Analyst - Position Open"]
    }
  };

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: "bg-blue-50 border-blue-200 text-blue-700",
      purple: "bg-purple-50 border-purple-200 text-purple-700",
      teal: "bg-teal-50 border-teal-200 text-teal-700",
      orange: "bg-orange-50 border-orange-200 text-orange-700",
      green: "bg-green-50 border-green-200 text-green-700",
      indigo: "bg-indigo-50 border-indigo-200 text-indigo-700",
      pink: "bg-pink-50 border-pink-200 text-pink-700",
      yellow: "bg-yellow-50 border-yellow-200 text-yellow-700"
    };
    return colorMap[color] || "bg-slate-50 border-slate-200 text-slate-700";
  };

  return (
    <div className="space-y-6">
      {/* Overview */}
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="h-6 w-6" />
            <span>Team Structure & Responsibilities</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">8</div>
              <div className="text-blue-200 text-sm">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">7</div>
              <div className="text-blue-200 text-sm">Specialized Roles</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">4</div>
              <div className="text-blue-200 text-sm">Communication Types</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">1</div>
              <div className="text-blue-200 text-sm">Open Position</div>
            </div>
          </div>
          <p className="text-blue-100">
            Cross-functional digital marketing team with specialized expertise in strategy, 
            content creation, paid media, and performance optimization.
          </p>
        </CardContent>
      </Card>

      {/* Team Members */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {teamMembers.map((member, index) => (
          <Card key={index} className="bg-white border border-slate-200 hover:shadow-lg transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-3">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className={`font-semibold ${getColorClasses(member.color)}`}>
                    {member.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-800">{member.name}</h3>
                  <Badge className={getColorClasses(member.color)} variant="outline">
                    {member.role}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-sm font-medium text-slate-700">Key Responsibilities:</div>
                <ul className="space-y-1">
                  {member.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex} className="text-sm text-slate-600 flex items-start space-x-2">
                      <span className="text-slate-400 mt-1">•</span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Organization Chart */}
      <Card className="bg-white border border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="h-5 w-5 text-purple-600" />
            <span>Organization Structure</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-3">{organizationChart.leadership.title}</h4>
              <ul className="space-y-2">
                {organizationChart.leadership.members.map((member, index) => (
                  <li key={index} className="text-sm text-blue-700">• {member}</li>
                ))}
              </ul>
            </div>
            
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-3">{organizationChart.specialists.title}</h4>
              <ul className="space-y-2">
                {organizationChart.specialists.members.map((member, index) => (
                  <li key={index} className="text-sm text-purple-700">• {member}</li>
                ))}
              </ul>
            </div>
            
            <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
              <h4 className="font-semibold text-teal-800 mb-3">{organizationChart.creators.title}</h4>
              <ul className="space-y-2">
                {organizationChart.creators.members.map((member, index) => (
                  <li key={index} className="text-sm text-teal-700">• {member}</li>
                ))}
              </ul>
            </div>
            
            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-800 mb-3">{organizationChart.pending.title}</h4>
              <ul className="space-y-2">
                {organizationChart.pending.members.map((member, index) => (
                  <li key={index} className="text-sm text-orange-700">• {member}</li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Communication Protocols */}
      <Card className="bg-white border border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MessageSquare className="h-5 w-5 text-green-600" />
            <span>Communication Protocols</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {communicationProtocols.map((protocol, index) => (
              <div key={index} className="p-4 border border-slate-200 rounded-lg">
                <div className="flex items-center space-x-2 mb-3">
                  <protocol.icon className="h-5 w-5 text-slate-600" />
                  <Badge variant="outline" className="bg-slate-50">
                    {protocol.frequency}
                  </Badge>
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">{protocol.type}</h4>
                <p className="text-sm text-slate-600">{protocol.purpose}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Verification */}
      <Card className="bg-white border border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Star className="h-5 w-5 text-gold-600" />
            <span>Document Verification</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center space-x-4">
              <div className="text-green-700">
                <strong>Status:</strong> Verified and Approved
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-sm text-green-600">Digital Marketing Team Leader</div>
                <div className="font-semibold text-green-800">Sivaprakash R K</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-green-600">Managing Director</div>
                <div className="font-semibold text-green-800">Approved</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeamStructure;
