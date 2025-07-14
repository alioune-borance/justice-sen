import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Calendar, MapPin, Phone, Mail, AlertTriangle, Check, X } from "lucide-react";

const inmateData = {
  id: "INM-2024-001234",
  name: "Ahmed Hassan Mohammed",
  photo: "",
  age: 34,
  nationality: "Egyptian",
  dateOfBirth: "1990-03-15",
  admissionDate: "2022-06-20",
  expectedRelease: "2026-06-20",
  currentLocation: "Cairo Central Prison - Block A, Cell 45",
  status: "Active",
  riskLevel: "Medium",
  personalInfo: {
    address: "15 Al-Azhar Street, Cairo",
    phone: "+20 101 234 5678",
    email: "ahmed.hassan@email.com",
    emergencyContact: "Fatima Hassan (Sister) - +20 102 345 6789",
    education: "High School Graduate",
    occupation: "Construction Worker",
    maritalStatus: "Married",
    children: 2
  },
  judicialRecord: {
    currentSentence: "4 years imprisonment",
    crimeType: "Theft",
    courtCase: "Case No. 2022/789",
    judge: "Judge Mohammed Al-Rashid",
    prosecutor: "Prosecutor Sarah Ahmed",
    timeServed: "1 year, 8 months",
    behaviorScore: 85,
    appeals: [
      { date: "2023-02-15", status: "Rejected", court: "Appeals Court" }
    ]
  },
  visits: [
    { date: "2024-01-15", visitor: "Fatima Hassan", relationship: "Sister", duration: "2 hours", approved: true },
    { date: "2024-01-08", visitor: "Omar Mohammed", relationship: "Son", duration: "1.5 hours", approved: true },
    { date: "2023-12-22", visitor: "Legal Advisor", relationship: "Lawyer", duration: "3 hours", approved: true }
  ],
  behavioralNotes: [
    { date: "2024-01-10", type: "Positive", note: "Participated in educational program", officer: "Officer Ali" },
    { date: "2023-12-15", type: "Neutral", note: "Regular cell inspection - no issues", officer: "Officer Hassan" },
    { date: "2023-11-20", type: "Positive", note: "Helped resolve conflict between inmates", officer: "Officer Mahmoud" }
  ],
  graceEligibility: {
    eligible: true,
    criteria: {
      timeServed: { required: "50%", current: "42%", status: "Not Met" },
      behavior: { required: "80", current: "85", status: "Met" },
      healthStatus: { status: "Good", issues: "None" },
      crimeType: { eligible: true, note: "Non-violent offense" }
    },
    nextReview: "2024-06-20"
  }
};

export default function InmateProfile() {
  const [activeTab, setActiveTab] = useState("personal");

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Inmate Profile</h2>
        <p className="text-muted-foreground">
          Detailed information for inmate {inmateData.id}
        </p>
      </div>

      {/* Header Card */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src={inmateData.photo} alt={inmateData.name} />
                <AvatarFallback className="text-lg">
                  {inmateData.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">{inmateData.name}</h3>
                <p className="text-muted-foreground">ID: {inmateData.id}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>Age: {inmateData.age}</span>
                  <span>•</span>
                  <span>Nationality: {inmateData.nationality}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{inmateData.currentLocation}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Badge variant={inmateData.status === "Active" ? "default" : "secondary"}>
                {inmateData.status}
              </Badge>
              <Badge variant={
                inmateData.riskLevel === "High" ? "destructive" : 
                inmateData.riskLevel === "Medium" ? "default" : 
                "secondary"
              }>
                Risk: {inmateData.riskLevel}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="personal">Personal Info</TabsTrigger>
          <TabsTrigger value="judicial">Judicial Record</TabsTrigger>
          <TabsTrigger value="visits">Visit History</TabsTrigger>
          <TabsTrigger value="behavior">Behavioral Notes</TabsTrigger>
          <TabsTrigger value="grace">Grace Eligibility</TabsTrigger>
        </TabsList>

        <TabsContent value="personal" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Date of Birth</label>
                <p className="text-sm">{inmateData.personalInfo.address}</p>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Address</label>
                <p className="text-sm">{inmateData.personalInfo.address}</p>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Phone</label>
                <p className="text-sm">{inmateData.personalInfo.phone}</p>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Email</label>
                <p className="text-sm">{inmateData.personalInfo.email}</p>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Emergency Contact</label>
                <p className="text-sm">{inmateData.personalInfo.emergencyContact}</p>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Education</label>
                <p className="text-sm">{inmateData.personalInfo.education}</p>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Occupation</label>
                <p className="text-sm">{inmateData.personalInfo.occupation}</p>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Marital Status</label>
                <p className="text-sm">{inmateData.personalInfo.maritalStatus}</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="judicial" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Judicial Record</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Current Sentence</label>
                  <p className="text-sm">{inmateData.judicialRecord.currentSentence}</p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Crime Type</label>
                  <p className="text-sm">{inmateData.judicialRecord.crimeType}</p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Court Case</label>
                  <p className="text-sm">{inmateData.judicialRecord.courtCase}</p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Time Served</label>
                  <p className="text-sm">{inmateData.judicialRecord.timeServed}</p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Behavior Score</label>
                  <p className="text-sm">{inmateData.judicialRecord.behaviorScore}/100</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="visits" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Visit History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {inmateData.visits.map((visit, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="space-y-1">
                      <p className="font-medium">{visit.visitor}</p>
                      <p className="text-sm text-muted-foreground">{visit.relationship}</p>
                      <p className="text-sm text-muted-foreground">Duration: {visit.duration}</p>
                    </div>
                    <div className="text-right space-y-1">
                      <p className="text-sm">{visit.date}</p>
                      <Badge variant={visit.approved ? "default" : "destructive"}>
                        {visit.approved ? "Approved" : "Denied"}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="behavior" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Behavioral Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {inmateData.behavioralNotes.map((note, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 border border-border rounded-lg">
                    <div className={`p-2 rounded-full ${
                      note.type === "Positive" ? "bg-success/10 text-success" :
                      note.type === "Negative" ? "bg-destructive/10 text-destructive" :
                      "bg-muted text-muted-foreground"
                    }`}>
                      {note.type === "Positive" ? <Check className="h-4 w-4" /> :
                       note.type === "Negative" ? <X className="h-4 w-4" /> :
                       <AlertTriangle className="h-4 w-4" />}
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm">{note.note}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{note.date}</span>
                        <span>•</span>
                        <span>By {note.officer}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="grace" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Grace Eligibility Assessment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(inmateData.graceEligibility.criteria).map(([key, criteria]) => (
                  <div key={key} className="p-4 border border-border rounded-lg">
                    <h4 className="font-medium capitalize mb-2">{key.replace(/([A-Z])/g, ' $1').trim()}</h4>
                    {typeof criteria === 'object' && 'status' in criteria ? (
                      <div className="space-y-1">
                        {'required' in criteria && criteria.required && (
                          <p className="text-sm text-muted-foreground">
                            Required: {criteria.required}
                          </p>
                        )}
                        {'current' in criteria && criteria.current && (
                          <p className="text-sm text-muted-foreground">
                            Current: {criteria.current}
                          </p>
                        )}
                        <Badge variant={criteria.status === "Met" ? "default" : "destructive"}>
                          {criteria.status}
                        </Badge>
                        {'note' in criteria && criteria.note && (
                          <p className="text-xs text-muted-foreground mt-1">{String(criteria.note)}</p>
                        )}
                        {'issues' in criteria && criteria.issues && (
                          <p className="text-xs text-muted-foreground mt-1">Issues: {String(criteria.issues)}</p>
                        )}
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <p className="font-medium">
                    Overall Eligibility: {inmateData.graceEligibility.eligible ? "Eligible" : "Not Eligible"}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Next Review: {inmateData.graceEligibility.nextReview}
                  </p>
                </div>
                <Button disabled={!inmateData.graceEligibility.eligible}>
                  Recommend for Grace
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}