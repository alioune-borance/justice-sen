import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Search, Filter, FileText, Clock, Heart, Shield } from "lucide-react";

const eligibleInmatesData = [
  {
    id: "INM-2024-001234",
    name: "Ahmed Hassan Mohammed",
    age: 34,
    crimeType: "Theft",
    sentenceLength: "4 years",
    timeServed: "42%",
    region: "Cairo",
    behaviorScore: 85,
    healthStatus: "Good",
    remainingTime: "2.3 years",
    eligibilityScore: 78,
    lastReview: "2023-12-15"
  },
  {
    id: "INM-2024-001567",
    name: "Mohamed Ali Rashid",
    age: 29,
    crimeType: "Fraud",
    sentenceLength: "3 years",
    timeServed: "67%",
    region: "Alexandria",
    behaviorScore: 92,
    healthStatus: "Good",
    remainingTime: "1.0 year",
    eligibilityScore: 89,
    lastReview: "2024-01-10"
  },
  {
    id: "INM-2024-002134",
    name: "Omar Saeed Ibrahim",
    age: 45,
    crimeType: "Embezzlement",
    sentenceLength: "5 years",
    timeServed: "58%",
    region: "Giza",
    behaviorScore: 88,
    healthStatus: "Fair",
    remainingTime: "2.1 years",
    eligibilityScore: 82,
    lastReview: "2023-11-20"
  },
  {
    id: "INM-2024-003421",
    name: "Hassan Mahmoud Ali",
    age: 52,
    crimeType: "Tax Evasion",
    sentenceLength: "6 years",
    timeServed: "61%",
    region: "Luxor",
    behaviorScore: 91,
    healthStatus: "Poor",
    remainingTime: "2.3 years",
    eligibilityScore: 85,
    lastReview: "2024-01-05"
  },
  {
    id: "INM-2024-004789",
    name: "Khalil Omar Hassan",
    age: 38,
    crimeType: "Forgery",
    sentenceLength: "3.5 years",
    timeServed: "71%",
    region: "Aswan",
    behaviorScore: 87,
    healthStatus: "Good",
    remainingTime: "1.0 year",
    eligibilityScore: 88,
    lastReview: "2023-12-30"
  }
];

export default function GracePanel() {
  const [inmates, setInmates] = useState(eligibleInmatesData);
  const [searchTerm, setSearchTerm] = useState("");
  const [crimeTypeFilter, setCrimeTypeFilter] = useState("All");
  const [regionFilter, setRegionFilter] = useState("All");
  const [healthFilter, setHealthFilter] = useState("All");
  const [selectedInmate, setSelectedInmate] = useState<typeof eligibleInmatesData[0] | null>(null);
  const [justification, setJustification] = useState("");

  const filteredInmates = inmates.filter(inmate => {
    const matchesSearch = 
      inmate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inmate.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCrimeType = crimeTypeFilter === "All" || inmate.crimeType === crimeTypeFilter;
    const matchesRegion = regionFilter === "All" || inmate.region === regionFilter;
    const matchesHealth = healthFilter === "All" || inmate.healthStatus === healthFilter;
    
    return matchesSearch && matchesCrimeType && matchesRegion && matchesHealth;
  });

  const handleRecommend = () => {
    if (selectedInmate && justification.trim()) {
      // In a real app, this would send to backend
      console.log("Recommending for grace:", selectedInmate.id, justification);
      setSelectedInmate(null);
      setJustification("");
    }
  };

  const getEligibilityColor = (score: number) => {
    if (score >= 85) return "text-success";
    if (score >= 70) return "text-warning";
    return "text-destructive";
  };

  const getHealthBadgeVariant = (status: string) => {
    switch (status) {
      case "Good": return "default";
      case "Fair": return "secondary";
      case "Poor": return "destructive";
      default: return "secondary";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Panneau de Grâce Présidentielle</h2>
        <p className="text-muted-foreground">
          Examiner et recommander les détenus éligibles à la grâce présidentielle
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-primary">{inmates.length}</p>
                <p className="text-sm text-muted-foreground">Eligible Inmates</p>
              </div>
              <FileText className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-success">
                  {inmates.filter(i => parseInt(i.timeServed) >= 60).length}
                </p>
                <p className="text-sm text-muted-foreground">60%+ Time Served</p>
              </div>
              <Clock className="h-8 w-8 text-success" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-warning">
                  {inmates.filter(i => i.healthStatus === "Poor").length}
                </p>
                <p className="text-sm text-muted-foreground">Health Concerns</p>
              </div>
              <Heart className="h-8 w-8 text-warning" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-info">
                  {inmates.filter(i => i.behaviorScore >= 85).length}
                </p>
                <p className="text-sm text-muted-foreground">Excellent Behavior</p>
              </div>
              <Shield className="h-8 w-8 text-info" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Search</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name or ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Crime Type</label>
              <Select value={crimeTypeFilter} onValueChange={setCrimeTypeFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by crime type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Crime Types</SelectItem>
                  <SelectItem value="Theft">Theft</SelectItem>
                  <SelectItem value="Fraud">Fraud</SelectItem>
                  <SelectItem value="Embezzlement">Embezzlement</SelectItem>
                  <SelectItem value="Tax Evasion">Tax Evasion</SelectItem>
                  <SelectItem value="Forgery">Forgery</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Region</label>
              <Select value={regionFilter} onValueChange={setRegionFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Regions</SelectItem>
                  <SelectItem value="Cairo">Cairo</SelectItem>
                  <SelectItem value="Alexandria">Alexandria</SelectItem>
                  <SelectItem value="Giza">Giza</SelectItem>
                  <SelectItem value="Luxor">Luxor</SelectItem>
                  <SelectItem value="Aswan">Aswan</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Health Status</label>
              <Select value={healthFilter} onValueChange={setHealthFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by health" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Health Status</SelectItem>
                  <SelectItem value="Good">Good</SelectItem>
                  <SelectItem value="Fair">Fair</SelectItem>
                  <SelectItem value="Poor">Poor</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Eligible Inmates Table */}
      <Card>
        <CardHeader>
          <CardTitle>Eligible Inmates ({filteredInmates.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Inmate ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Age</TableHead>
                  <TableHead>Crime Type</TableHead>
                  <TableHead>Time Served</TableHead>
                  <TableHead>Behavior</TableHead>
                  <TableHead>Health</TableHead>
                  <TableHead>Region</TableHead>
                  <TableHead>Eligibility</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredInmates.map((inmate) => (
                  <TableRow key={inmate.id}>
                    <TableCell className="font-medium">{inmate.id}</TableCell>
                    <TableCell>{inmate.name}</TableCell>
                    <TableCell>{inmate.age}</TableCell>
                    <TableCell>{inmate.crimeType}</TableCell>
                    <TableCell>
                      <div>
                        <p>{inmate.timeServed}</p>
                        <p className="text-xs text-muted-foreground">
                          {inmate.remainingTime} left
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={inmate.behaviorScore >= 85 ? "default" : "secondary"}>
                        {inmate.behaviorScore}/100
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={getHealthBadgeVariant(inmate.healthStatus)}>
                        {inmate.healthStatus}
                      </Badge>
                    </TableCell>
                    <TableCell>{inmate.region}</TableCell>
                    <TableCell>
                      <span className={`font-medium ${getEligibilityColor(inmate.eligibilityScore)}`}>
                        {inmate.eligibilityScore}%
                      </span>
                    </TableCell>
                    <TableCell>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            size="sm"
                            onClick={() => setSelectedInmate(inmate)}
                          >
                            Recommend
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-md">
                          <DialogHeader>
                            <DialogTitle>Recommend for Grace</DialogTitle>
                          </DialogHeader>
                          {selectedInmate && (
                            <div className="space-y-4">
                              <div className="space-y-2">
                                <h4 className="font-medium">{selectedInmate.name}</h4>
                                <p className="text-sm text-muted-foreground">
                                  ID: {selectedInmate.id}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  Crime: {selectedInmate.crimeType} | 
                                  Time Served: {selectedInmate.timeServed} | 
                                  Behavior: {selectedInmate.behaviorScore}/100
                                </p>
                              </div>
                              
                              <div className="space-y-2">
                                <label className="text-sm font-medium">Justification</label>
                                <Textarea
                                  placeholder="Provide justification for this grace recommendation..."
                                  value={justification}
                                  onChange={(e) => setJustification(e.target.value)}
                                  rows={4}
                                />
                              </div>
                              
                              <div className="flex justify-end gap-2">
                                <Button variant="outline" onClick={() => setSelectedInmate(null)}>
                                  Cancel
                                </Button>
                                <Button 
                                  onClick={handleRecommend}
                                  disabled={!justification.trim()}
                                >
                                  Submit Recommendation
                                </Button>
                              </div>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}