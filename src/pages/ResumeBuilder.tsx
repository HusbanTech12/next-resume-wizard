import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Trash2, Download, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Education {
  school: string;
  degree: string;
  field: string;
  graduationYear: string;
}

interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Project {
  name: string;
  description: string;
  technologies: string;
}

const ResumeBuilder = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState("personal");
  const [selectedTemplate, setSelectedTemplate] = useState("modern");

  // Personal Info
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    website: "",
  });

  // Professional Summary
  const [summary, setSummary] = useState("");

  // Education
  const [education, setEducation] = useState<Education[]>([
    { school: "", degree: "", field: "", graduationYear: "" },
  ]);

  // Experience
  const [experience, setExperience] = useState<Experience[]>([
    { company: "", position: "", startDate: "", endDate: "", description: "" },
  ]);

  // Skills
  const [skills, setSkills] = useState("");

  // Projects
  const [projects, setProjects] = useState<Project[]>([
    { name: "", description: "", technologies: "" },
  ]);

  const addEducation = () => {
    setEducation([...education, { school: "", degree: "", field: "", graduationYear: "" }]);
  };

  const removeEducation = (index: number) => {
    setEducation(education.filter((_, i) => i !== index));
  };

  const addExperience = () => {
    setExperience([
      ...experience,
      { company: "", position: "", startDate: "", endDate: "", description: "" },
    ]);
  };

  const removeExperience = (index: number) => {
    setExperience(experience.filter((_, i) => i !== index));
  };

  const addProject = () => {
    setProjects([...projects, { name: "", description: "", technologies: "" }]);
  };

  const removeProject = (index: number) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  const handleDownload = () => {
    toast({
      title: "Resume Downloaded!",
      description: "Your resume has been downloaded as PDF.",
    });
  };

  const handleSave = () => {
    const resumeData = {
      personalInfo,
      summary,
      education,
      experience,
      skills,
      projects,
    };
    localStorage.setItem("resume", JSON.stringify(resumeData));
    toast({
      title: "Resume Saved!",
      description: "Your resume has been saved locally.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-hero py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <FileText className="w-16 h-16 mx-auto mb-4 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Resume Builder</h1>
            <p className="text-lg text-muted-foreground">
              Create a professional resume in minutes with our easy-to-use builder
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Form Section */}
            <div>
              <Card>
                <CardContent className="p-6">
                  <Tabs value={currentStep} onValueChange={setCurrentStep}>
                    <TabsList className="grid w-full grid-cols-3 mb-6">
                      <TabsTrigger value="personal">Personal</TabsTrigger>
                      <TabsTrigger value="experience">Experience</TabsTrigger>
                      <TabsTrigger value="education">Education</TabsTrigger>
                    </TabsList>

                    {/* Personal Info Tab */}
                    <TabsContent value="personal" className="space-y-4">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="fullName">Full Name *</Label>
                          <Input
                            id="fullName"
                            value={personalInfo.fullName}
                            onChange={(e) =>
                              setPersonalInfo({ ...personalInfo, fullName: e.target.value })
                            }
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={personalInfo.email}
                            onChange={(e) =>
                              setPersonalInfo({ ...personalInfo, email: e.target.value })
                            }
                            placeholder="john@example.com"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            value={personalInfo.phone}
                            onChange={(e) =>
                              setPersonalInfo({ ...personalInfo, phone: e.target.value })
                            }
                            placeholder="(555) 123-4567"
                          />
                        </div>
                        <div>
                          <Label htmlFor="location">Location</Label>
                          <Input
                            id="location"
                            value={personalInfo.location}
                            onChange={(e) =>
                              setPersonalInfo({ ...personalInfo, location: e.target.value })
                            }
                            placeholder="New York, NY"
                          />
                        </div>
                        <div>
                          <Label htmlFor="summary">Professional Summary</Label>
                          <Textarea
                            id="summary"
                            value={summary}
                            onChange={(e) => setSummary(e.target.value)}
                            placeholder="Brief overview of your professional background..."
                            rows={4}
                          />
                        </div>
                        <div>
                          <Label htmlFor="skills">Skills (comma-separated)</Label>
                          <Textarea
                            id="skills"
                            value={skills}
                            onChange={(e) => setSkills(e.target.value)}
                            placeholder="JavaScript, React, Node.js, etc."
                            rows={3}
                          />
                        </div>
                      </div>
                    </TabsContent>

                    {/* Experience Tab */}
                    <TabsContent value="experience" className="space-y-4">
                      {experience.map((exp, index) => (
                        <Card key={index} className="p-4">
                          <div className="space-y-3">
                            <div className="flex justify-between items-center mb-2">
                              <h4 className="font-semibold">Experience {index + 1}</h4>
                              {experience.length > 1 && (
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => removeExperience(index)}
                                >
                                  <Trash2 size={16} />
                                </Button>
                              )}
                            </div>
                            <Input
                              placeholder="Company"
                              value={exp.company}
                              onChange={(e) => {
                                const newExp = [...experience];
                                newExp[index].company = e.target.value;
                                setExperience(newExp);
                              }}
                            />
                            <Input
                              placeholder="Position"
                              value={exp.position}
                              onChange={(e) => {
                                const newExp = [...experience];
                                newExp[index].position = e.target.value;
                                setExperience(newExp);
                              }}
                            />
                            <div className="grid grid-cols-2 gap-2">
                              <Input
                                placeholder="Start Date"
                                value={exp.startDate}
                                onChange={(e) => {
                                  const newExp = [...experience];
                                  newExp[index].startDate = e.target.value;
                                  setExperience(newExp);
                                }}
                              />
                              <Input
                                placeholder="End Date"
                                value={exp.endDate}
                                onChange={(e) => {
                                  const newExp = [...experience];
                                  newExp[index].endDate = e.target.value;
                                  setExperience(newExp);
                                }}
                              />
                            </div>
                            <Textarea
                              placeholder="Job description and achievements..."
                              value={exp.description}
                              onChange={(e) => {
                                const newExp = [...experience];
                                newExp[index].description = e.target.value;
                                setExperience(newExp);
                              }}
                              rows={3}
                            />
                          </div>
                        </Card>
                      ))}
                      <Button onClick={addExperience} variant="outline" className="w-full">
                        <Plus size={16} className="mr-2" />
                        Add Experience
                      </Button>

                      <div className="mt-6">
                        <h4 className="font-semibold mb-3">Projects</h4>
                        {projects.map((project, index) => (
                          <Card key={index} className="p-4 mb-3">
                            <div className="space-y-3">
                              <div className="flex justify-between items-center">
                                <span className="text-sm font-medium">Project {index + 1}</span>
                                {projects.length > 1 && (
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => removeProject(index)}
                                  >
                                    <Trash2 size={16} />
                                  </Button>
                                )}
                              </div>
                              <Input
                                placeholder="Project Name"
                                value={project.name}
                                onChange={(e) => {
                                  const newProjects = [...projects];
                                  newProjects[index].name = e.target.value;
                                  setProjects(newProjects);
                                }}
                              />
                              <Textarea
                                placeholder="Description"
                                value={project.description}
                                onChange={(e) => {
                                  const newProjects = [...projects];
                                  newProjects[index].description = e.target.value;
                                  setProjects(newProjects);
                                }}
                                rows={2}
                              />
                              <Input
                                placeholder="Technologies used"
                                value={project.technologies}
                                onChange={(e) => {
                                  const newProjects = [...projects];
                                  newProjects[index].technologies = e.target.value;
                                  setProjects(newProjects);
                                }}
                              />
                            </div>
                          </Card>
                        ))}
                        <Button onClick={addProject} variant="outline" className="w-full">
                          <Plus size={16} className="mr-2" />
                          Add Project
                        </Button>
                      </div>
                    </TabsContent>

                    {/* Education Tab */}
                    <TabsContent value="education" className="space-y-4">
                      {education.map((edu, index) => (
                        <Card key={index} className="p-4">
                          <div className="space-y-3">
                            <div className="flex justify-between items-center mb-2">
                              <h4 className="font-semibold">Education {index + 1}</h4>
                              {education.length > 1 && (
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => removeEducation(index)}
                                >
                                  <Trash2 size={16} />
                                </Button>
                              )}
                            </div>
                            <Input
                              placeholder="School/University"
                              value={edu.school}
                              onChange={(e) => {
                                const newEdu = [...education];
                                newEdu[index].school = e.target.value;
                                setEducation(newEdu);
                              }}
                            />
                            <Input
                              placeholder="Degree"
                              value={edu.degree}
                              onChange={(e) => {
                                const newEdu = [...education];
                                newEdu[index].degree = e.target.value;
                                setEducation(newEdu);
                              }}
                            />
                            <Input
                              placeholder="Field of Study"
                              value={edu.field}
                              onChange={(e) => {
                                const newEdu = [...education];
                                newEdu[index].field = e.target.value;
                                setEducation(newEdu);
                              }}
                            />
                            <Input
                              placeholder="Graduation Year"
                              value={edu.graduationYear}
                              onChange={(e) => {
                                const newEdu = [...education];
                                newEdu[index].graduationYear = e.target.value;
                                setEducation(newEdu);
                              }}
                            />
                          </div>
                        </Card>
                      ))}
                      <Button onClick={addEducation} variant="outline" className="w-full">
                        <Plus size={16} className="mr-2" />
                        Add Education
                      </Button>
                    </TabsContent>
                  </Tabs>

                  <div className="flex gap-3 mt-6">
                    <Button onClick={handleSave} variant="outline" className="flex-1">
                      Save
                    </Button>
                    <Button onClick={handleDownload} className="flex-1">
                      <Download size={16} className="mr-2" />
                      Download PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Preview Section */}
            <div className="lg:sticky lg:top-24 h-fit">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-secondary px-4 py-3 border-b">
                    <h3 className="font-semibold">Live Preview</h3>
                    <div className="flex gap-2 mt-2">
                      <button
                        onClick={() => setSelectedTemplate("modern")}
                        className={`px-3 py-1 text-xs rounded ${
                          selectedTemplate === "modern"
                            ? "bg-primary text-primary-foreground"
                            : "bg-background"
                        }`}
                      >
                        Modern
                      </button>
                      <button
                        onClick={() => setSelectedTemplate("classic")}
                        className={`px-3 py-1 text-xs rounded ${
                          selectedTemplate === "classic"
                            ? "bg-primary text-primary-foreground"
                            : "bg-background"
                        }`}
                      >
                        Classic
                      </button>
                    </div>
                  </div>

                  {/* Resume Preview */}
                  <div className="p-8 bg-white text-gray-900 min-h-[600px]">
                    {/* Header */}
                    <div className="mb-6 text-center border-b pb-4">
                      <h1 className="text-3xl font-bold text-gray-900">
                        {personalInfo.fullName || "Your Name"}
                      </h1>
                      <div className="text-sm mt-2 text-gray-600 space-x-3">
                        {personalInfo.email && <span>{personalInfo.email}</span>}
                        {personalInfo.phone && <span>• {personalInfo.phone}</span>}
                        {personalInfo.location && <span>• {personalInfo.location}</span>}
                      </div>
                    </div>

                    {/* Summary */}
                    {summary && (
                      <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-2 text-gray-900">
                          Professional Summary
                        </h2>
                        <p className="text-gray-700 text-sm">{summary}</p>
                      </div>
                    )}

                    {/* Experience */}
                    {experience[0].company && (
                      <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-3 text-gray-900">Experience</h2>
                        {experience.map(
                          (exp, index) =>
                            exp.company && (
                              <div key={index} className="mb-4">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <h3 className="font-semibold text-gray-900">
                                      {exp.position}
                                    </h3>
                                    <p className="text-sm text-gray-700">{exp.company}</p>
                                  </div>
                                  <span className="text-sm text-gray-600">
                                    {exp.startDate} - {exp.endDate}
                                  </span>
                                </div>
                                {exp.description && (
                                  <p className="text-sm mt-2 text-gray-700">{exp.description}</p>
                                )}
                              </div>
                            )
                        )}
                      </div>
                    )}

                    {/* Education */}
                    {education[0].school && (
                      <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-3 text-gray-900">Education</h2>
                        {education.map(
                          (edu, index) =>
                            edu.school && (
                              <div key={index} className="mb-3">
                                <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                                <p className="text-sm text-gray-700">
                                  {edu.school} • {edu.field}
                                </p>
                                <p className="text-sm text-gray-600">{edu.graduationYear}</p>
                              </div>
                            )
                        )}
                      </div>
                    )}

                    {/* Skills */}
                    {skills && (
                      <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-2 text-gray-900">Skills</h2>
                        <p className="text-sm text-gray-700">{skills}</p>
                      </div>
                    )}

                    {/* Projects */}
                    {projects[0].name && (
                      <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-3 text-gray-900">Projects</h2>
                        {projects.map(
                          (project, index) =>
                            project.name && (
                              <div key={index} className="mb-3">
                                <h3 className="font-semibold text-gray-900">{project.name}</h3>
                                {project.description && (
                                  <p className="text-sm text-gray-700">{project.description}</p>
                                )}
                                {project.technologies && (
                                  <p className="text-xs text-gray-600 mt-1">
                                    {project.technologies}
                                  </p>
                                )}
                              </div>
                            )
                        )}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResumeBuilder;
