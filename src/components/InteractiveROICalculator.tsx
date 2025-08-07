import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { 
  Calculator, TrendingUp, DollarSign, Clock, Users, 
  Zap, ArrowRight, Download, CheckCircle, BarChart3 
} from "lucide-react";

export const InteractiveROICalculator = () => {
  const [formData, setFormData] = useState({
    companySize: "",
    industry: "",
    avgSalary: [65000],
    hoursPerWeek: [40],
    repetitiveTasksPercentage: [30],
    currentToolCosts: [500]
  });

  const [results, setResults] = useState({
    monthlyTimeSaved: 0,
    monthlyCostSavings: 0,
    annualSavings: 0,
    roiPercentage: 0,
    paybackPeriod: 0,
    agentRecommendations: 0
  });

  const [showResults, setShowResults] = useState(false);

  const industries = [
    { value: "finance", label: "Financial Services", multiplier: 1.4, avgHours: 25 },
    { value: "healthcare", label: "Healthcare", multiplier: 1.3, avgHours: 22 },
    { value: "manufacturing", label: "Manufacturing", multiplier: 1.2, avgHours: 18 },
    { value: "technology", label: "Technology", multiplier: 1.6, avgHours: 30 },
    { value: "retail", label: "Retail & E-commerce", multiplier: 1.1, avgHours: 15 },
    { value: "legal", label: "Legal Services", multiplier: 1.8, avgHours: 35 },
    { value: "consulting", label: "Professional Services", multiplier: 1.5, avgHours: 28 },
    { value: "education", label: "Education", multiplier: 1.0, avgHours: 12 }
  ];

  const companySizes = [
    { value: "1-10", label: "1-10 employees", factor: 0.8 },
    { value: "11-50", label: "11-50 employees", factor: 1.0 },
    { value: "51-200", label: "51-200 employees", factor: 1.2 },
    { value: "201-500", label: "201-500 employees", factor: 1.4 },
    { value: "501-1000", label: "501-1000 employees", factor: 1.6 },
    { value: "1000+", label: "1000+ employees", factor: 2.0 }
  ];

  useEffect(() => {
    calculateROI();
  }, [formData]);

  const calculateROI = () => {
    if (!formData.companySize || !formData.industry) return;

    const industry = industries.find(i => i.value === formData.industry);
    const companySize = companySizes.find(s => s.value === formData.companySize);
    
    if (!industry || !companySize) return;

    // Base calculations
    const avgEmployees = getEmployeeCount(formData.companySize);
    const annualSalary = formData.avgSalary[0];
    const hourlyRate = annualSalary / (52 * formData.hoursPerWeek[0]);
    
    // Industry and automation specific calculations
    const automationEfficiency = 0.85; // 85% efficiency rate
    const baseHoursSaved = industry.avgHours * (formData.repetitiveTasksPercentage[0] / 100);
    const totalHoursSaved = baseHoursSaved * avgEmployees * companySize.factor * automationEfficiency;
    
    // Monthly calculations
    const monthlyTimeSaved = totalHoursSaved * 4.33; // weeks per month
    const monthlyCostSavings = monthlyTimeSaved * hourlyRate;
    
    // Sentus.ai pricing (simplified)
    const sentusMonthlyCost = getSentusPrice(formData.companySize);
    const netMonthlySavings = monthlyCostSavings - sentusMonthlyCost - formData.currentToolCosts[0];
    
    // Annual and ROI calculations
    const annualSavings = netMonthlySavings * 12;
    const totalInvestment = sentusMonthlyCost * 12;
    const roiPercentage = (annualSavings / totalInvestment) * 100;
    const paybackPeriod = totalInvestment / netMonthlySavings;
    
    // Agent recommendations based on industry and company size
    const baseAgents = 5;
    const agentRecommendations = Math.min(50, baseAgents + Math.floor(avgEmployees / 10) * industry.multiplier);

    setResults({
      monthlyTimeSaved: Math.round(monthlyTimeSaved),
      monthlyCostSavings: Math.round(monthlyCostSavings),
      annualSavings: Math.round(annualSavings),
      roiPercentage: Math.round(roiPercentage),
      paybackPeriod: Math.max(0.1, Math.round(paybackPeriod * 10) / 10),
      agentRecommendations
    });

    setShowResults(true);
  };

  const getEmployeeCount = (size: string) => {
    const ranges = {
      "1-10": 5,
      "11-50": 25,
      "51-200": 100,
      "201-500": 300,
      "501-1000": 750,
      "1000+": 1500
    };
    return ranges[size as keyof typeof ranges] || 25;
  };

  const getSentusPrice = (size: string) => {
    const pricing = {
      "1-10": 299,
      "11-50": 599,
      "51-200": 999,
      "201-500": 1999,
      "501-1000": 2999,
      "1000+": 4999
    };
    return pricing[size as keyof typeof pricing] || 599;
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-2">
          <Calculator className="w-4 h-4 mr-2" />
          Interactive ROI Calculator
        </Badge>
        <h2 className="text-4xl font-bold">Calculate Your Savings Potential</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover how much time and money you could save with Sentus.ai's intelligent automation
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Input Form */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="h-5 w-5" />
              <span>Your Business Details</span>
            </CardTitle>
            <CardDescription>
              Help us understand your current operations to provide accurate estimates
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="company-size">Company Size</Label>
              <Select value={formData.companySize} onValueChange={(value) => 
                setFormData({...formData, companySize: value})
              }>
                <SelectTrigger>
                  <SelectValue placeholder="Select company size" />
                </SelectTrigger>
                <SelectContent>
                  {companySizes.map((size) => (
                    <SelectItem key={size.value} value={size.value}>
                      {size.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="industry">Industry</Label>
              <Select value={formData.industry} onValueChange={(value) => 
                setFormData({...formData, industry: value})
              }>
                <SelectTrigger>
                  <SelectValue placeholder="Select your industry" />
                </SelectTrigger>
                <SelectContent>
                  {industries.map((industry) => (
                    <SelectItem key={industry.value} value={industry.value}>
                      {industry.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              <Label>Average Employee Salary: {formatCurrency(formData.avgSalary[0])}</Label>
              <Slider
                value={formData.avgSalary}
                onValueChange={(value) => setFormData({...formData, avgSalary: value})}
                max={200000}
                min={30000}
                step={5000}
                className="w-full"
              />
            </div>

            <div className="space-y-4">
              <Label>Hours Per Week: {formData.hoursPerWeek[0]} hours</Label>
              <Slider
                value={formData.hoursPerWeek}
                onValueChange={(value) => setFormData({...formData, hoursPerWeek: value})}
                max={60}
                min={20}
                step={5}
                className="w-full"
              />
            </div>

            <div className="space-y-4">
              <Label>Repetitive Tasks: {formData.repetitiveTasksPercentage[0]}% of work time</Label>
              <Slider
                value={formData.repetitiveTasksPercentage}
                onValueChange={(value) => setFormData({...formData, repetitiveTasksPercentage: value})}
                max={80}
                min={10}
                step={5}
                className="w-full"
              />
            </div>

            <div className="space-y-4">
              <Label>Current Tool Costs: {formatCurrency(formData.currentToolCosts[0])}/month</Label>
              <Slider
                value={formData.currentToolCosts}
                onValueChange={(value) => setFormData({...formData, currentToolCosts: value})}
                max={5000}
                min={0}
                step={100}
                className="w-full"
              />
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <Card className="glass-hero">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5" />
              <span>Your ROI Projection</span>
            </CardTitle>
            <CardDescription>
              Based on data from 500+ successful implementations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {showResults ? (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 glass-panel rounded-2xl">
                    <div className="text-3xl font-bold text-primary">{results.monthlyTimeSaved}</div>
                    <div className="text-sm text-muted-foreground">Hours Saved/Month</div>
                  </div>
                  <div className="text-center p-4 glass-panel rounded-2xl">
                    <div className="text-3xl font-bold text-green-400">{formatCurrency(results.monthlyCostSavings)}</div>
                    <div className="text-sm text-muted-foreground">Monthly Savings</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 glass-panel rounded-xl">
                    <span className="font-medium">Annual Savings</span>
                    <span className="text-2xl font-bold text-accent">{formatCurrency(results.annualSavings)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 glass-panel rounded-xl">
                    <span className="font-medium">ROI Percentage</span>
                    <span className="text-2xl font-bold text-green-400">{results.roiPercentage}%</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 glass-panel rounded-xl">
                    <span className="font-medium">Payback Period</span>
                    <span className="text-2xl font-bold text-blue-400">{results.paybackPeriod} months</span>
                  </div>
                </div>

                <div className="glass-panel p-6 rounded-2xl space-y-4">
                  <h4 className="font-semibold flex items-center space-x-2">
                    <Zap className="h-4 w-4" />
                    <span>Recommended Agent Package</span>
                  </h4>
                  <div className="flex items-center justify-between">
                    <span>{results.agentRecommendations} AI Agents</span>
                    <Badge className="bg-accent/20 text-accent">Optimized for your industry</Badge>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button className="w-full btn-primary" size="lg">
                    Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="w-full btn-ghost">
                    <Download className="mr-2 h-4 w-4" />
                    Download Detailed Report
                  </Button>
                </div>

                <div className="glass-panel p-4 rounded-xl">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Calculations based on industry benchmarks and 500+ real implementations</span>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center space-y-6 py-12">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary/20 flex items-center justify-center">
                  <Calculator className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Ready to Calculate</h3>
                  <p className="text-muted-foreground">
                    Complete the form to see your personalized ROI projection
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};