'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Search, Plus, FileText, Code, BarChart2, Brain, Database, GitBranch } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const assignments = [
  { id: 1, title: "Data Cleaning and Preprocessing", course: "Data Science Fundamentals", dueDate: "2024-05-15", type: "Project", status: "In Progress", marks: 85, totalMarks: 100, description: "Clean and preprocess a given dataset using pandas and numpy.", submissionDate: "2024-05-14", feedback: "Good work on handling missing values. Consider using more advanced techniques for outlier detection." },
  { id: 2, title: "Linear Regression Model", course: "Machine Learning Basics", dueDate: "2024-05-18", type: "Coding", status: "Not Started", marks: null, totalMarks: 100, description: "Implement a linear regression model from scratch and compare its performance with scikit-learn's implementation.", submissionDate: null, feedback: null },
  { id: 3, title: "Neural Network Architecture", course: "Deep Learning", dueDate: "2024-05-20", type: "Essay", status: "Submitted", marks: 92, totalMarks: 100, description: "Write an essay explaining the architecture of a convolutional neural network and its applications in computer vision.", submissionDate: "2024-05-19", feedback: "Excellent explanation of CNN architecture. Include more recent advancements in the field for a perfect score." },
  { id: 4, title: "Big Data Analysis with Spark", course: "Big Data Technologies", dueDate: "2024-05-22", type: "Project", status: "In Progress", marks: null, totalMarks: 100, description: "Perform big data analysis on a large dataset using Apache Spark. Focus on data processing and aggregation techniques.", submissionDate: null, feedback: null },
  { id: 5, title: "Implementing Binary Search Tree", course: "Data Structures", dueDate: "2024-05-25", type: "Coding", status: "Not Started", marks: null, totalMarks: 100, description: "Implement a binary search tree in Python, including insertion, deletion, and traversal methods.", submissionDate: null, feedback: null },
]

const assignmentTypes = [
  { icon: FileText, label: "Essay" },
  { icon: Code, label: "Coding" },
  { icon: BarChart2, label: "Project" },
  { icon: Brain, label: "Research" },
  { icon: Database, label: "Practical" },
  { icon: GitBranch, label: "Collaborative" },
]

const performanceData = [
  { name: 'Assignment 1', marks: 85 },
  { name: 'Assignment 2', marks: 78 },
  { name: 'Assignment 3', marks: 92 },
  { name: 'Assignment 4', marks: 88 },
  { name: 'Assignment 5', marks: 95 },
]

export function AssignmentsList() {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [selectedAssignment, setSelectedAssignment] = useState(null)

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Assignments</h1>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add New Assignment
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Assignment</DialogTitle>
              <DialogDescription>Create a new assignment for your course.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">Title</Label>
                <Input id="title" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="course" className="text-right">Course</Label>
                <Select>
                  <SelectTrigger id="course" className="col-span-3">
                    <SelectValue placeholder="Select course" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ds">Data Science Fundamentals</SelectItem>
                    <SelectItem value="ml">Machine Learning Basics</SelectItem>
                    <SelectItem value="dl">Deep Learning</SelectItem>
                    <SelectItem value="bd">Big Data Technologies</SelectItem>
                    <SelectItem value="dsa">Data Structures</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="type" className="text-right">Type</Label>
                <Select>
                  <SelectTrigger id="type" className="col-span-3">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    {assignmentTypes.map((type) => (
                      <SelectItem key={type.label} value={type.label.toLowerCase()}>{type.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="dueDate" className="text-right">Due Date</Label>
                <Input id="dueDate" type="date" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">Description</Label>
                <Textarea id="description" className="col-span-3" />
              </div>
            </div>
            <div className="flex justify-end">
              <Button onClick={() => setIsAddDialogOpen(false)}>Add Assignment</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Your Assignments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-2">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by course" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Courses</SelectItem>
                  <SelectItem value="ds">Data Science Fundamentals</SelectItem>
                  <SelectItem value="ml">Machine Learning Basics</SelectItem>
                  <SelectItem value="dl">Deep Learning</SelectItem>
                  <SelectItem value="bd">Big Data Technologies</SelectItem>
                  <SelectItem value="dsa">Data Structures</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  {assignmentTypes.map((type) => (
                    <SelectItem key={type.label} value={type.label.toLowerCase()}>{type.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="not-started">Not Started</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="submitted">Submitted</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search assignments..."
                className="pl-10 pr-4 py-2 w-64"
              />
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Course</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {assignments.map((assignment) => (
                <TableRow key={assignment.id}>
                  <TableCell className="font-medium">{assignment.title}</TableCell>
                  <TableCell>{assignment.course}</TableCell>
                  <TableCell>
                    {assignmentTypes.find(type => type.label === assignment.type)?.icon && (
                      <div className="flex items-center">
                        {React.createElement(assignmentTypes.find(type => type.label === assignment.type)?.icon, { className: "h-4 w-4 mr-2" })}
                        {assignment.type}
                      </div>
                    )}
                  </TableCell>
                  <TableCell>{assignment.dueDate}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        assignment.status === 'Submitted' ? 'success' :
                        assignment.status === 'In Progress' ? 'warning' : 'default'
                      }
                    >
                      {assignment.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="sm" onClick={() => setSelectedAssignment(assignment)}>View</Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl">
                        <DialogHeader>
                          <DialogTitle>{selectedAssignment?.title}</DialogTitle>
                          <DialogDescription>{selectedAssignment?.course}</DialogDescription>
                        </DialogHeader>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h3 className="text-lg font-semibold mb-2">Assignment Details</h3>
                            <p><strong>Type:</strong> {selectedAssignment?.type}</p>
                            <p><strong>Due Date:</strong> {selectedAssignment?.dueDate}</p>
                            <p><strong>Status:</strong> {selectedAssignment?.status}</p>
                            <p><strong>Description:</strong> {selectedAssignment?.description}</p>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">Submission Details</h3>
                            <p><strong>Submission Date:</strong> {selectedAssignment?.submissionDate || 'Not submitted yet'}</p>
                            <p><strong>Marks:</strong> {selectedAssignment?.marks !== null ? `${selectedAssignment?.marks}/${selectedAssignment?.totalMarks}` : 'Not graded yet'}</p>
                            <p><strong>Feedback:</strong> {selectedAssignment?.feedback || 'No feedback available yet'}</p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <h3 className="text-lg font-semibold mb-2">Performance Graph</h3>
                          <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={performanceData}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="name" />
                              <YAxis />
                              <Tooltip />
                              <Line type="monotone" dataKey="marks" stroke="#8884d8" activeDot={{ r: 8 }} />
                            </LineChart>
                          </ResponsiveContainer>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  )
}