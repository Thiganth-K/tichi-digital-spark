
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import TeamAssignments from "@/components/TeamAssignments";
import ExecutiveSummary from "@/components/ExecutiveSummary";
import BusinessFoundation from "@/components/BusinessFoundation";
import MarketAnalysis from "@/components/MarketAnalysis";
import TargetAudience from "@/components/TargetAudience";
import GoalsKPIs from "@/components/GoalsKPIs";
import DigitalChannels from "@/components/DigitalChannels";
import BudgetAllocation from "@/components/BudgetAllocation";
import Timeline from "@/components/Timeline";
import MeasurementAnalytics from "@/components/MeasurementAnalytics";
import RiskManagement from "@/components/RiskManagement";
import TeamStructure from "@/components/TeamStructure";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Tichi Digital Marketing Strategy
              </h1>
              <p className="text-slate-600 mt-2">Connecting opportunities, building communities</p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                Live Dashboard
              </Badge>
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                2024 Strategy
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Tabs defaultValue="executive" className="space-y-6">
          <div className="overflow-x-auto">
            <TabsList className="grid w-full grid-cols-12 bg-white shadow-sm border border-slate-200 min-w-max">
              <TabsTrigger value="executive" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 text-xs px-2">
                Executive Summary
              </TabsTrigger>
              <TabsTrigger value="business" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 text-xs px-2">
                Business Foundation
              </TabsTrigger>
              <TabsTrigger value="market" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 text-xs px-2">
                Market Analysis
              </TabsTrigger>
              <TabsTrigger value="audience" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 text-xs px-2">
                Target Audience
              </TabsTrigger>
              <TabsTrigger value="goals" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 text-xs px-2">
                Goals & KPIs
              </TabsTrigger>
              <TabsTrigger value="channels" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 text-xs px-2">
                Digital Channels
              </TabsTrigger>
              <TabsTrigger value="budget" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 text-xs px-2">
                Budget Allocation
              </TabsTrigger>
              <TabsTrigger value="timeline" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 text-xs px-2">
                Timeline
              </TabsTrigger>
              <TabsTrigger value="analytics" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 text-xs px-2">
                Analytics
              </TabsTrigger>
              <TabsTrigger value="risk" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 text-xs px-2">
                Risk Management
              </TabsTrigger>
              <TabsTrigger value="team" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 text-xs px-2">
                Team Structure
              </TabsTrigger>
              <TabsTrigger value="assignment" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 text-xs px-2">
                Task Assignment
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="executive">
            <ExecutiveSummary />
          </TabsContent>

          <TabsContent value="business">
            <BusinessFoundation />
          </TabsContent>

          <TabsContent value="market">
            <MarketAnalysis />
          </TabsContent>

          <TabsContent value="audience">
            <TargetAudience />
          </TabsContent>

          <TabsContent value="goals">
            <GoalsKPIs />
          </TabsContent>

          <TabsContent value="channels">
            <DigitalChannels />
          </TabsContent>

          <TabsContent value="budget">
            <BudgetAllocation />
          </TabsContent>

          <TabsContent value="timeline">
            <Timeline />
          </TabsContent>

          <TabsContent value="analytics">
            <MeasurementAnalytics />
          </TabsContent>

          <TabsContent value="risk">
            <RiskManagement />
          </TabsContent>

          <TabsContent value="team">
            <TeamStructure />
          </TabsContent>

          <TabsContent value="assignment">
            <TeamAssignments />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
