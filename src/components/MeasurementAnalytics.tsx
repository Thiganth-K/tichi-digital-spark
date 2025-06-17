
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Target, TestTube, Clock, TrendingUp, AlertCircle } from "lucide-react";

const MeasurementAnalytics = () => {
  const reportingStructure = [
    {
      frequency: "Daily",
      metrics: "Ad spend, impressions, reach, clicks, installs, CPI (paid); post reach, likes, shares, comments, profile visits (organic)",
      focus: "Real-time optimization"
    },
    {
      frequency: "Weekly", 
      metrics: "Campaign CTR, engagement rate, follower growth, CPI trends, story taps/swipes, top-performing posts",
      focus: "Performance trends"
    },
    {
      frequency: "Monthly",
      metrics: "Total installs from social, install-to-signup conversion, ROI by channel, organic vs. paid contribution split",
      focus: "Strategic review"
    },
    {
      frequency: "Quarterly",
      metrics: "Strategic review: creative effectiveness, audience segmentation performance, CPI benchmark tracking, platform strategy shifts",
      focus: "Long-term planning"
    }
  ];

  const abTestingElements = [
    { element: "Creative formats", examples: "Carousel vs. reel", schedule: "Weekly" },
    { element: "CTA buttons", examples: "'Install Now' vs. 'Get the App'", schedule: "Weekly" },
    { element: "Visuals", examples: "Localised vs. generic", schedule: "Weekly" },
    { element: "Language", examples: "English vs. vernacular", schedule: "Bi-weekly" },
    { element: "Content types", examples: "Reels, carousels, memes", schedule: "Bi-weekly" },
    { element: "Theme alignment", examples: "Messaging consistency", schedule: "Monthly" }
  ];

  const performanceBenchmarks = [
    { category: "Cost Per Install (CPI)", target: "₹30 – ₹60", current: "₹45", status: "good" },
    { category: "CTR (Meta Ads)", target: "≥ 1.5%", current: "1.8%", status: "excellent" },
    { category: "Engagement Rate", target: "≥ 5% (organic)", current: "6.2%", status: "excellent" },
    { category: "Follower Growth", target: "+25% per quarter", current: "+18%", status: "warning" },
    { category: "Install → Signup Rate", target: "≥ 25%", current: "28%", status: "excellent" },
    { category: "Bounce Rate (from Social)", target: "< 40%", current: "38%", status: "good" },
    { category: "Session Duration", target: "3–5 minutes", current: "4.2 min", status: "excellent" },
    { category: "Ad Spend Efficiency", target: "100% monthly utilization", current: "95%", status: "good" }
  ];

  const analyticsTools = [
    { tool: "Google Analytics 4", purpose: "Website traffic, acquisition channels, user behavior analysis" },
    { tool: "Firebase Analytics", purpose: "App installs, in-app activity, retention, engagement metrics" },
    { tool: "Meta Business Suite", purpose: "Organic + paid content performance across Facebook and Instagram" },
    { tool: "Google Search Console", purpose: "SEO performance, keyword rankings, site indexing" },
    { tool: "Power BI", purpose: "Advanced dashboards consolidating metrics from all platforms" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent": return "text-green-600 bg-green-50 border-green-200";
      case "good": return "text-blue-600 bg-blue-50 border-blue-200";
      case "warning": return "text-orange-600 bg-orange-50 border-orange-200";
      default: return "text-slate-600 bg-slate-50 border-slate-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "excellent": return <TrendingUp className="h-4 w-4 text-green-600" />;
      case "good": return <Target className="h-4 w-4 text-blue-600" />;
      case "warning": return <AlertCircle className="h-4 w-4 text-orange-600" />;
      default: return <Clock className="h-4 w-4 text-slate-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Overview */}
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="h-6 w-6" />
            <span>Measurement & Analytics Framework</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">4</div>
              <div className="text-blue-200 text-sm">Reporting Frequencies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">8</div>
              <div className="text-blue-200 text-sm">Key Benchmarks</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">6</div>
              <div className="text-blue-200 text-sm">A/B Test Elements</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">5</div>
              <div className="text-blue-200 text-sm">Analytics Tools</div>
            </div>
          </div>
          <p className="text-blue-100">
            Comprehensive analytics framework focused on organic & paid social media for app growth, 
            with real-time optimization and strategic performance reviews.
          </p>
        </CardContent>
      </Card>

      {/* Reporting Structure */}
      <Card className="bg-white border border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-purple-600" />
            <span>Reporting Structure</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {reportingStructure.map((report, index) => (
              <div key={index} className="border border-slate-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-slate-800">{report.frequency}</h3>
                  <Badge variant="outline" className="bg-purple-50 text-purple-700">
                    {report.focus}
                  </Badge>
                </div>
                <p className="text-sm text-slate-600">{report.metrics}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* A/B Testing Framework */}
      <Card className="bg-white border border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TestTube className="h-5 w-5 text-teal-600" />
            <span>A/B Testing Framework</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {abTestingElements.map((test, index) => (
              <div key={index} className="p-4 border border-slate-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-slate-800">{test.element}</h4>
                  <Badge variant="secondary" className="text-xs">
                    {test.schedule}
                  </Badge>
                </div>
                <p className="text-sm text-slate-600 mb-3">{test.examples}</p>
                <div className="text-xs text-slate-500">
                  Testing schedule: {test.schedule}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-teal-50 rounded-lg border border-teal-200">
            <h4 className="font-semibold text-teal-800 mb-2">Execution Flow</h4>
            <ol className="text-sm text-teal-700 space-y-1">
              <li>1. Define target CPI and install volume</li>
              <li>2. Segment by platform and city tier</li>
              <li>3. Measure installs, CTR, CPI, and post-install behavior</li>
              <li>4. Analyze and iterate on top performers</li>
            </ol>
          </div>
        </CardContent>
      </Card>

      {/* Performance Benchmarks */}
      <Card className="bg-white border border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="h-5 w-5 text-green-600" />
            <span>Performance Benchmarks</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {performanceBenchmarks.map((benchmark, index) => (
              <div key={index} className="p-4 border border-slate-200 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium text-slate-700 text-sm">{benchmark.category}</span>
                  <div className="flex items-center space-x-1">
                    {getStatusIcon(benchmark.status)}
                    <Badge className={getStatusColor(benchmark.status)} variant="outline">
                      {benchmark.status}
                    </Badge>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div>
                    <div className="text-xs text-slate-500">Target</div>
                    <div className="text-sm font-medium text-slate-700">{benchmark.target}</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Current</div>
                    <div className="text-sm font-medium text-slate-700">{benchmark.current}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Analytics Tools */}
      <Card className="bg-white border border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="h-5 w-5 text-blue-600" />
            <span>Analytics & Measurement Tools</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {analyticsTools.map((tool, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Badge variant="outline" className="bg-blue-50 text-blue-700">
                    {tool.tool}
                  </Badge>
                </div>
                <span className="text-sm text-slate-600 flex-1 ml-4">{tool.purpose}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MeasurementAnalytics;
