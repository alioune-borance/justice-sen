import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Check, X, Filter } from "lucide-react";

const visitsData = [
  {
    id: "VIS-2024-001",
    inmateId: "DET-2024-001234",
    inmateName: "Ahmed Hassan Mohammed",
    visitorName: "Fatima Hassan",
    relationship: "Sœur",
    date: "2024-01-20",
    time: "14:00",
    duration: "2 heures",
    status: "En attente",
    purpose: "Visite familiale",
    notes: "Première demande de visite"
  },
  {
    id: "VIS-2024-002",
    inmateId: "INM-2024-001235",
    inmateName: "Mohamed Ali Rashid",
    visitorName: "Lawyer Ahmed",
    relationship: "Legal Advisor",
    date: "2024-01-20",
    time: "10:00",
    duration: "3 hours",
    status: "Approved",
    purpose: "Legal Consultation",
    notes: "Appeal preparation"
  },
  {
    id: "VIS-2024-003",
    inmateId: "INM-2024-001236",
    inmateName: "Omar Saeed Ibrahim",
    visitorName: "Aisha Ibrahim",
    relationship: "Wife",
    date: "2024-01-21",
    time: "15:30",
    duration: "1.5 hours",
    status: "Denied",
    purpose: "Family Visit",
    notes: "Security concerns"
  },
  {
    id: "VIS-2024-004",
    inmateId: "INM-2024-001237",
    inmateName: "Hassan Mahmoud Ali",
    visitorName: "Dr. Sarah Ahmed",
    relationship: "Medical Advisor",
    date: "2024-01-22",
    time: "09:00",
    duration: "1 hour",
    status: "Pending",
    purpose: "Medical Consultation",
    notes: "Health assessment"
  },
  {
    id: "VIS-2024-005",
    inmateId: "INM-2024-001238",
    inmateName: "Khalil Omar Hassan",
    visitorName: "Nour Hassan",
    relationship: "Daughter",
    date: "2024-01-23",
    time: "16:00",
    duration: "2 hours",
    status: "Approved",
    purpose: "Family Visit",
    notes: "Special occasion visit"
  }
];

export default function VisitManagement() {
  const [visits, setVisits] = useState(visitsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [purposeFilter, setPurposeFilter] = useState("All");

  const filteredVisits = visits.filter(visit => {
    const matchesSearch = 
      visit.inmateName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      visit.visitorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      visit.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "All" || visit.status === statusFilter;
    const matchesPurpose = purposeFilter === "All" || visit.purpose === purposeFilter;
    
    return matchesSearch && matchesStatus && matchesPurpose;
  });

  const handleApprove = (visitId: string) => {
    setVisits(prev => prev.map(visit => 
      visit.id === visitId ? { ...visit, status: "Approved" } : visit
    ));
  };

  const handleDeny = (visitId: string) => {
    setVisits(prev => prev.map(visit => 
      visit.id === visitId ? { ...visit, status: "Denied" } : visit
    ));
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Approved": return "default";
      case "Denied": return "destructive";
      case "Pending": return "secondary";
      default: return "secondary";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Gestion des Visites</h2>
        <p className="text-muted-foreground">
          Gérer et examiner les visites pénitentiaires programmées
        </p>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filtres
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Recherche</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Rechercher par détenu, visiteur ou ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Statut</label>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filtrer par statut" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">Tous les Statuts</SelectItem>
                  <SelectItem value="Pending">En attente</SelectItem>
                  <SelectItem value="Approved">Approuvé</SelectItem>
                  <SelectItem value="Denied">Refusé</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Motif</label>
              <Select value={purposeFilter} onValueChange={setPurposeFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filtrer par motif" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">Tous les Motifs</SelectItem>
                  <SelectItem value="Family Visit">Visite Familiale</SelectItem>
                  <SelectItem value="Legal Consultation">Consultation Légale</SelectItem>
                  <SelectItem value="Medical Consultation">Consultation Médicale</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Visits Table */}
      <Card>
        <CardHeader>
          <CardTitle>Visites Programmées ({filteredVisits.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID Visite</TableHead>
                  <TableHead>Détenu</TableHead>
                  <TableHead>Visiteur</TableHead>
                  <TableHead>Relation</TableHead>
                  <TableHead>Date & Heure</TableHead>
                  <TableHead>Durée</TableHead>
                  <TableHead>Motif</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredVisits.map((visit) => (
                  <TableRow key={visit.id}>
                    <TableCell className="font-medium">{visit.id}</TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{visit.inmateName}</p>
                        <p className="text-sm text-muted-foreground">{visit.inmateId}</p>
                      </div>
                    </TableCell>
                    <TableCell>{visit.visitorName}</TableCell>
                    <TableCell>{visit.relationship}</TableCell>
                    <TableCell>
                      <div>
                        <p>{visit.date}</p>
                        <p className="text-sm text-muted-foreground">{visit.time}</p>
                      </div>
                    </TableCell>
                    <TableCell>{visit.duration}</TableCell>
                    <TableCell>{visit.purpose}</TableCell>
                    <TableCell>
                      <Badge variant={getStatusVariant(visit.status)}>
                        {visit.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {visit.status === "Pending" && (
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="default"
                            onClick={() => handleApprove(visit.id)}
                            className="h-8 w-8 p-0"
                          >
                            <Check className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => handleDeny(visit.id)}
                            className="h-8 w-8 p-0"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      )}
                      {visit.status !== "En attente" && (
                        <span className="text-sm text-muted-foreground">
                          {visit.status === "Approuvé" ? "Approuvé" : "Refusé"}
                        </span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">
                {visits.filter(v => v.status === "Pending").length}
              </p>
              <p className="text-sm text-muted-foreground">En Attente d'Approbation</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-success">
                {visits.filter(v => v.status === "Approved").length}
              </p>
              <p className="text-sm text-muted-foreground">Approuvées Aujourd'hui</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-destructive">
                {visits.filter(v => v.status === "Denied").length}
              </p>
              <p className="text-sm text-muted-foreground">Refusées Aujourd'hui</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-info">
                {visits.length}
              </p>
              <p className="text-sm text-muted-foreground">Total Demandes</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}