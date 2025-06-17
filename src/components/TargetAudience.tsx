
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, GraduationCap, Briefcase, MapPin, Clock, Heart, Target } from "lucide-react";

const TargetAudience = () => {
  const personas = [
    {
      title: "College Students & Young Adults",
      age: "18-24 years",
      quote: "I want flexible work I can do around my classes or free time and earn quick cash.",
      demographics: {
        income: "₹0-₹3,000/month",
        location: "Urban & Tier-2 cities",
        education: "Currently pursuing degree/diploma",
        familyStatus: "Mostly single"
      },
      painPoints: [
        "No steady income",
        "Trust in platform & jobs",
        "Fake jobs, non-payment",
        "Time constraints with classes"
      ],
      goals: [
        "Earn quick income with flexible hours",
        "Build experience, learn new skills",
        "Financial independence",
        "Career skills development"
      ],
      channels: ["Instagram", "YouTube", "WhatsApp", "Telegram groups"],
      color: "blue"
    },
    {
      title: "Working Professionals",
      age: "25-40 years", 
      quote: "I want to use my free time to earn more or test freelance without quitting my job.",
      demographics: {
        income: "₹30,000-₹70,000/month",
        location: "Metro & Tier-1 cities",
        education: "Graduate/Postgraduate",
        familyStatus: "Mostly married, some with kids"
      },
      painPoints: [
        "Underpaid at primary job",
        "Lack of safe freelancing options",
        "Time constraints with 9-6 job",
        "ROI-focused budget concerns"
      ],
      goals: [
        "Earn side income (₹10k-₹20k/month)",
        "Build freelance career",
        "Quit 9-6, become self-employed",
        "Expand resume, build portfolio"
      ],
      channels: ["LinkedIn", "Instagram", "YouTube", "Forums"],
      color: "purple"
    }
  ];

  const customerJourney = [
    {
      stage: "Awareness",
      description: "Students discover financial independence needs and skill-building opportunities",
      triggers: ["Financial independence needs", "Peer influence", "Campus placement uncertainty"],
      channels: ["WhatsApp groups", "Instagram reels", "College workshops"]
    },
    {
      stage: "Consideration", 
      description: "Research solutions and compare platforms",
      triggers: ["Search for gig platforms", "Ask peers about quick jobs", "Visit tutorials"],
      channels: ["LinkedIn", "YouTube tutorials", "Play Store reviews"]
    },
    {
      stage: "Decision",
      description: "Factors influencing platform choice",
      triggers: ["Free sign-up", "Verified leads", "Affordable pricing", "Referral earnings"],
      channels: ["Demo videos", "Student discounts", "College webinars"]
    },
    {
      stage: "Retention",
      description: "Post-signup experience and engagement",
      triggers: ["Regular notifications", "Smooth communication", "Gamified elements"],
      channels: ["In-app wallet", "Monthly contests", "Email automation"]
    },
    {
      stage: "Advocacy",
      description: "Becoming brand advocates",
      triggers: ["Word-of-mouth", "Social media achievements", "Referral programs"],
      channels: ["Student clubs", "Instagram posts", "Campus ambassadors"]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: "bg-blue-50 border-blue-200 text-blue-700",
      purple: "bg-purple-50 border-purple-200 text-purple-700"
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
            <span>Target Audience & Customer Personas</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">2</div>
              <div className="text-blue-200 text-sm">Primary Personas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">18-40</div>
              <div className="text-blue-200 text-sm">Age Range</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">5</div>
              <div className="text-blue-200 text-sm">Journey Stages</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">Multi-Tier</div>
              <div className="text-blue-200 text-sm">City Coverage</div>
            </div>
          </div>
          <p className="text-blue-100">
            Focused on opportunity seekers across student and professional segments, 
            targeting flexible income generation and career growth aspirations.
          </p>
        </CardContent>
      </Card>

      {/* Primary Personas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {personas.map((persona, index) => (
          <Card key={index} className="bg-white border border-slate-200">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  {persona.color === 'blue' ? <GraduationCap className="h-5 w-5 text-blue-600" /> : <Briefcase className="h-5 w-5 text-purple-600" />}
                  <span className="text-slate-800">{persona.title}</span>
                </CardTitle>
                <Badge className={getColorClasses(persona.color)}>
                  {persona.age}
                </Badge>
              </div>
              <p className="text-sm italic text-slate-600 mt-2">"{persona.quote}"</p>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Demographics */}
              <div>
                <h4 className="font-semibold text-slate-700 mb-2 flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Demographics</span>
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div><span className="font-medium">Income:</span> {persona.demographics.income}</div>
                  <div><span className="font-medium">Location:</span> {persona.demographics.location}</div>
                  <div><span className="font-medium">Education:</span> {persona.demographics.education}</div>
                  <div><span className="font-medium">Status:</span> {persona.demographics.familyStatus}</div>
                </div>
              </div>

              {/* Pain Points */}
              <div>
                <h4 className="font-semibold text-slate-700 mb-2 flex items-center space-x-2">
                  <Heart className="h-4 w-4 text-red-500" />
                  <span>Pain Points</span>
                </h4>
                <div className="flex flex-wrap gap-1">
                  {persona.painPoints.map((pain, painIndex) => (
                    <Badge key={painIndex} variant="secondary" className="text-xs bg-red-50 text-red-700">
                      {pain}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Goals */}
              <div>
                <h4 className="font-semibold text-slate-700 mb-2 flex items-center space-x-2">
                  <Target className="h-4 w-4 text-green-500" />
                  <span>Goals</span>
                </h4>
                <div className="flex flex-wrap gap-1">
                  {persona.goals.map((goal, goalIndex) => (
                    <Badge key={goalIndex} variant="secondary" className="text-xs bg-green-50 text-green-700">
                      {goal}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Preferred Channels */}
              <div>
                <h4 className="font-semibold text-slate-700 mb-2">Preferred Channels</h4>
                <div className="flex flex-wrap gap-1">
                  {persona.channels.map((channel, channelIndex) => (
                    <Badge key={channelIndex} className={getColorClasses(persona.color)} variant="outline">
                      {channel}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Customer Journey */}
      <Card className="bg-white border border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-teal-600" />
            <span>Customer Journey Mapping</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {customerJourney.map((stage, index) => (
              <div key={index} className="border border-slate-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-slate-800">{stage.stage}</h3>
                  <Badge variant="outline" className="bg-teal-50 text-teal-700">
                    Stage {index + 1}
                  </Badge>
                </div>
                
                <p className="text-sm text-slate-600 mb-3">{stage.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs font-medium text-slate-500 mb-2">Triggers</div>
                    <div className="flex flex-wrap gap-1">
                      {stage.triggers.map((trigger, triggerIndex) => (
                        <Badge key={triggerIndex} variant="secondary" className="text-xs">
                          {trigger}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-xs font-medium text-slate-500 mb-2">Channels</div>
                    <div className="flex flex-wrap gap-1">
                      {stage.channels.map((channel, channelIndex) => (
                        <Badge key={channelIndex} variant="outline" className="text-xs bg-blue-50 text-blue-700">
                          {channel}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TargetAudience;
