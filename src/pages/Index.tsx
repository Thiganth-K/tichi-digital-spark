
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Target, DollarSign, Calendar, BarChart3 } from "lucide-react";
import TeamAssignments from "@/components/TeamAssignments";
import ExecutiveSummary from "@/components/ExecutiveSummary";
import MarketAnalysis from "@/components/MarketAnalysis";
import BudgetAllocation from "@/components/BudgetAllocation";
import Timeline from "@/components/Timeline";
import MetricsOverview from "@/components/MetricsOverview";

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
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 bg-white shadow-sm border border-slate-200">
            <TabsTrigger value="overview" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">
              Overview
            </TabsTrigger>
            <TabsTrigger value="team" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">
              Team
            </TabsTrigger>
            <TabsTrigger value="market" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">
              Market
            </TabsTrigger>
            <TabsTrigger value="budget" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">
              Budget
            </TabsTrigger>
            <TabsTrigger value="timeline" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">
              Timeline
            </TabsTrigger>
            <TabsTrigger value="metrics" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">
              Metrics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <ExecutiveSummary />
          </TabsContent>

          <TabsContent value="team">
            <TeamAssignments />
          </TabsContent>

          <TabsContent value="market">
            <MarketAnalysis />
          </TabsContent>

          <TabsContent value="budget">
            <BudgetAllocation />
          </TabsContent>

          <TabsContent value="timeline">
            <Timeline />
          </TabsContent>

          <TabsContent value="metrics">
            <MetricsOverview />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
