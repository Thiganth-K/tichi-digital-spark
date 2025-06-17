
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
            <div className="text-center flex-1">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Tichi Digital Marketing Strategy
              </h1>
            </div>
            
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <Tabs defaultValue="executive" className="space-y-4 sm:space-y-6">
          <div className="overflow-x-auto pb-2">
            <TabsList className="grid w-full grid-cols-5 sm:grid-cols-11 bg-white shadow-sm border border-slate-200 min-w-max">
              <TabsTrigger value="executive" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 text-xs px-1 sm:px-2 py-2">
                Executive
              </TabsTrigger>
              <TabsTrigger value="business" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 text-xs px-1 sm:px-2 py-2">
                Business
              </TabsTrigger>
              <TabsTrigger value="market" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 text-xs px-1 sm:px-2 py-2">
                Market
              </TabsTrigger>
              <TabsTrigger value="audience" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 text-xs px-1 sm:px-2 py-2">
                Audience
              </TabsTrigger>
              <TabsTrigger value="goals" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 text-xs px-1 sm:px-2 py-2">
                Goals
              </TabsTrigger>
              <TabsTrigger value="channels" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 text-xs px-1 sm:px-2 py-2">
                Channels
              </TabsTrigger>
              <TabsTrigger value="budget" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 text-xs px-1 sm:px-2 py-2">
                Budget
              </TabsTrigger>
              <TabsTrigger value="timeline" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 text-xs px-1 sm:px-2 py-2">
                Timeline
              </TabsTrigger>
              <TabsTrigger value="analytics" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 text-xs px-1 sm:px-2 py-2">
                Analytics
              </TabsTrigger>
              <TabsTrigger value="risk" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 text-xs px-1 sm:px-2 py-2">
                Risk
              </TabsTrigger>
              <TabsTrigger value="team" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 text-xs px-1 sm:px-2 py-2">
                Team
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
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
