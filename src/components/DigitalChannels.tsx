
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Share2, Search, Users, Mail, Video, Calendar, MessageCircle } from "lucide-react";

const DigitalChannels = () => {
  const socialPlatforms = [
    {
      platform: "Facebook",
      strategy: "Share user achievements, success stories, testimonials, live Q&As. Boost posts to local audiences.",
      bestTimes: "9 AM - 12 PM, 3 PM - 5 PM",
      focus: "Community building"
    },
    {
      platform: "Instagram", 
      strategy: "Visual-first strategy with reels of user tips, behind-the-scenes, interactive stories.",
      bestTimes: "10 AM - 4 PM",
      focus: "Engagement & discovery"
    },
    {
      platform: "LinkedIn",
      strategy: "Share professional growth stories, collaborations with institutions, expert advice.",
      bestTimes: "10 AM - 12 PM, 2 PM - 6 PM",
      focus: "Trust building"
    }
  ];

  const contentMix = [
    { type: "Educational", percentage: 50, description: "Tips for users, career advice, productivity tools, how-to videos", color: "bg-blue-500" },
    { type: "Entertaining", percentage: 30, description: "Memes, trending reels, relatable content, fun challenges", color: "bg-purple-500" },
    { type: "Promotional", percentage: 20, description: "Platform features, success metrics, benefits, testimonials", color: "bg-orange-500" }
  ];

  const contentPillars = [
    {
      pillar: "Student Life",
      types: "How to price services, study vs hustle reels, productivity tips, budget gig ideas",
      icon: Users,
      color: "blue"
    },
    {
      pillar: "Opportunity Access",
      types: "App walkthroughs, job-finding tutorials, push reels for new leads and gigs",
      icon: Search,
      color: "purple"
    },
    {
      pillar: "Service Spotlight", 
      types: "Feature videos, carousel showcases, 'Top 5 most-booked services this month'",
      icon: Video,
      color: "teal"
    },
    {
      pillar: "Community Wins",
      types: "Testimonials, 'Tichi Earner of the Month,' milestone celebrations, peer shoutouts",
      icon: MessageCircle,
      color: "orange"
    }
  ];

  const postingSchedule = [
    { day: "Monday", platforms: "Instagram, LinkedIn", content: "Educational reel + career tip carousel" },
    { day: "Wednesday", platforms: "Facebook", content: "Promo post + quick stat" },
    { day: "Friday", platforms: "Instagram", content: "Entertaining or meme reel" },
    { day: "Sunday", platforms: "All Platforms", content: "Story recap + polls" }
  ];

  const monthlyThemes = [
    { month: "July", theme: "Hustle Begins on Campus", focus: "Gig awareness, onboarding reels, gig hacks for students" },
    { month: "August", theme: "Freedom to Earn", focus: "Independence Day campaign on self-employment & income" },
    { month: "September", theme: "Skill Up, Earn More", focus: "High-paying gig skills, platform education, freelance guides" },
    { month: "October", theme: "Festival of Hustlers", focus: "Community Wins + Service Spotlight, Diwali gigs, verified services" }
  ];

  const distributionStrategy = [
    { type: "Owned", channels: "Website blogs, Tichi app, social media accounts", color: "bg-blue-100 text-blue-700" },
    { type: "Earned", channels: "Shares, mentions from student influencers, word of mouth, organic reposts", color: "bg-green-100 text-green-700" },
    { type: "Paid", channels: "Facebook/Instagram ads, Google search ads, Caster collaborations", color: "bg-orange-100 text-orange-700" }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: "bg-blue-50 border-blue-200 text-blue-700",
      purple: "bg-purple-50 border-purple-200 text-purple-700",
      teal: "bg-teal-50 border-teal-200 text-teal-700",
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
            <Share2 className="h-6 w-6" />
            <span>Digital Marketing Channels Strategy</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">6+</div>
              <div className="text-blue-200 text-sm">Marketing Channels</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">3</div>
              <div className="text-blue-200 text-sm">Social Platforms</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">4</div>
              <div className="text-blue-200 text-sm">Content Pillars</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">50%</div>
              <div className="text-blue-200 text-sm">Educational Content</div>
            </div>
          </div>
          <p className="text-blue-100">
            Multi-channel approach combining SEO, SEM, Social Media, Content Marketing, 
            Email, and Influencer strategies for comprehensive reach.
          </p>
        </CardContent>
      </Card>

      {/* Social Media Strategy */}
      <Card className="bg-white border border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-blue-600" />
            <span>Social Media Marketing Strategy</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {socialPlatforms.map((platform, index) => (
              <div key={index} className="border border-slate-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-slate-800">{platform.platform}</h3>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="bg-blue-50 text-blue-700">
                      {platform.focus}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {platform.bestTimes}
                    </Badge>
                  </div>
                </div>
                <p className="text-sm text-slate-600">{platform.strategy}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Content Mix */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white border border-slate-200">
          <CardHeader>
            <CardTitle className="text-slate-800">Content Mix Distribution</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {contentMix.map((content, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-slate-700">{content.type}</span>
                  <Badge variant="outline">{content.percentage}%</Badge>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${content.color}`}
                    style={{ width: `${content.percentage}%` }}
                  ></div>
                </div>
                <p className="text-xs text-slate-600">{content.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Posting Schedule */}
        <Card className="bg-white border border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-purple-600" />
              <span>Weekly Posting Schedule</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {postingSchedule.map((schedule, index) => (
              <div key={index} className="p-3 bg-slate-50 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-medium text-slate-700">{schedule.day}</span>
                  <Badge variant="secondary" className="text-xs">{schedule.platforms}</Badge>
                </div>
                <p className="text-sm text-slate-600">{schedule.content}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Content Pillars */}
      <Card className="bg-white border border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Video className="h-5 w-5 text-teal-600" />
            <span>Content Marketing Pillars</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {contentPillars.map((pillar, index) => (
              <div key={index} className="space-y-3">
                <div className={`p-3 rounded-lg ${getColorClasses(pillar.color)}`}>
                  <div className="flex items-center space-x-2 mb-2">
                    <pillar.icon className="h-5 w-5" />
                    <span className="font-semibold">{pillar.pillar}</span>
                  </div>
                  <p className="text-sm">{pillar.types}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Monthly Themes */}
      <Card className="bg-white border border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-orange-600" />
            <span>Seasonal Campaign Calendar</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {monthlyThemes.map((theme, index) => (
              <div key={index} className="p-4 border border-slate-200 rounded-lg">
                <div className="font-semibold text-slate-800 mb-2">{theme.month}</div>
                <div className="text-sm font-medium text-slate-700 mb-2">{theme.theme}</div>
                <p className="text-xs text-slate-600">{theme.focus}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Distribution Strategy */}
      <Card className="bg-white border border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Mail className="h-5 w-5 text-green-600" />
            <span>Content Distribution Strategy</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {distributionStrategy.map((strategy, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Badge className={strategy.color}>
                    {strategy.type}
                  </Badge>
                  <span className="font-medium text-slate-700">Channels</span>
                </div>
                <span className="text-sm text-slate-600 flex-1 ml-4">{strategy.channels}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DigitalChannels;
