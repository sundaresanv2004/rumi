"use client"

import {
    Bar,
    BarChart,
    Label,
    LabelList,
    PolarAngleAxis,
    RadialBar,
    RadialBarChart,
    Rectangle,
    ReferenceLine,
    XAxis,
    YAxis,
} from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"


export function Charts() {
    return (
        <div className="chart-wrapper flex w-full flex-col flex-wrap items-start justify-center gap-6 sm:flex-row sm:p-8">
            <div className="grid gap-6 lg:max-w-[28rem]">
                <Card className="w-full">
                    <CardHeader className="space-y-0 pb-2">
                        <CardDescription>This Week</CardDescription>
                        <CardTitle className="text-4xl tabular-nums">
                            28.5{" "}
                            <span className="font-sans text-sm font-normal tracking-normal text-muted-foreground">
                hours studied
              </span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer
                            config={{
                                studyHours: {
                                    label: "Study Hours",
                                    color: "hsl(var(--chart-1))",
                                },
                            }}
                        >
                            <BarChart
                                accessibilityLayer
                                margin={{
                                    left: -4,
                                    right: -4,
                                }}
                                data={[
                                    { date: "2024-01-01", studyHours: 4.5 },
                                    { date: "2024-01-02", studyHours: 3.2 },
                                    { date: "2024-01-03", studyHours: 5.1 },
                                    { date: "2024-01-04", studyHours: 3.8 },
                                    { date: "2024-01-05", studyHours: 4.2 },
                                    { date: "2024-01-06", studyHours: 4.8 },
                                    { date: "2024-01-07", studyHours: 2.9 },
                                ]}
                            >
                                <Bar
                                    dataKey="studyHours"
                                    fill="var(--color-studyHours)"
                                    radius={5}
                                    fillOpacity={0.6}
                                    activeBar={<Rectangle fillOpacity={0.8} />}
                                />
                                <XAxis
                                    dataKey="date"
                                    tickLine={false}
                                    axisLine={false}
                                    tickMargin={4}
                                    tickFormatter={(value) => {
                                        return new Date(value).toLocaleDateString("en-US", {
                                            weekday: "short",
                                        })
                                    }}
                                />
                                <ChartTooltip
                                    defaultIndex={2}
                                    content={
                                        <ChartTooltipContent
                                            hideIndicator
                                            labelFormatter={(value) => {
                                                return new Date(value).toLocaleDateString("en-US", {
                                                    day: "numeric",
                                                    month: "long",
                                                    year: "numeric",
                                                })
                                            }}
                                        />
                                    }
                                    cursor={false}
                                />
                                <ReferenceLine
                                    y={4}
                                    stroke="hsl(var(--muted-foreground))"
                                    strokeDasharray="3 3"
                                    strokeWidth={1}
                                >
                                    <Label
                                        position="insideBottomLeft"
                                        value="Daily Goal"
                                        offset={10}
                                        fill="hsl(var(--foreground))"
                                    />
                                    <Label
                                        position="insideTopLeft"
                                        value="4 hours"
                                        className="text-lg"
                                        fill="hsl(var(--foreground))"
                                        offset={10}
                                        startOffset={100}
                                    />
                                </ReferenceLine>
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter className="flex-col items-start gap-1">
                        <CardDescription>
                            Over the past 7 days, you have studied for{" "}
                            <span className="font-medium text-foreground">28.5</span> hours.
                        </CardDescription>
                        <CardDescription>
                            You need{" "}
                            <span className="font-medium text-foreground">1.5</span> more
                            hours to reach your weekly goal.
                        </CardDescription>
                    </CardFooter>
                </Card>
            </div>
            <div className="grid w-full flex-1 gap-6 lg:max-w-[20rem]">
                <Card className="max-w-xs">
                    <CardHeader>
                        <CardTitle>Assignment Completion</CardTitle>
                        <CardDescription>
                            You&#39;re completing more assignments this month compared to last month.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="grid auto-rows-min gap-2">
                            <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                                24/35
                                <span className="text-sm font-normal text-muted-foreground">
                  assignments
                </span>
                            </div>
                            <ChartContainer
                                config={{
                                    completed: {
                                        label: "Completed",
                                        color: "hsl(var(--chart-1))",
                                    },
                                }}
                                className="aspect-auto h-[32px] w-full"
                            >
                                <BarChart
                                    accessibilityLayer
                                    layout="vertical"
                                    margin={{
                                        left: 0,
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                    }}
                                    data={[
                                        {
                                            month: "This Month",
                                            completed: (24 / 35) * 100,
                                        },
                                    ]}
                                >
                                    <Bar
                                        dataKey="completed"
                                        fill="var(--color-completed)"
                                        radius={4}
                                        barSize={32}
                                    >
                                        <LabelList
                                            position="insideLeft"
                                            dataKey="month"
                                            offset={8}
                                            fontSize={12}
                                            fill="white"
                                        />
                                    </Bar>
                                    <YAxis dataKey="month" type="category" tickCount={1} hide/>
                                    <XAxis dataKey="completed" type="number" hide/>
                                </BarChart>
                            </ChartContainer>
                        </div>
                        <div className="grid auto-rows-min gap-2">
                            <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                                18/35
                                <span className="text-sm font-normal text-muted-foreground">
                  assignments
                </span>
                            </div>
                            <ChartContainer
                                config={{
                                    completed: {
                                        label: "Completed",
                                        color: "hsl(var(--muted))",
                                    },
                                }}
                                className="aspect-auto h-[32px] w-full"
                            >
                                <BarChart
                                    accessibilityLayer
                                    layout="vertical"
                                    margin={{
                                        left: 0,
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                    }}
                                    data={[
                                        {
                                            month: "Last Month",
                                            completed: (18 / 35) * 100,
                                        },
                                    ]}
                                >
                                    <Bar
                                        dataKey="completed"
                                        fill="var(--color-completed)"
                                        radius={4}
                                        barSize={32}
                                    >
                                        <LabelList
                                            position="insideLeft"
                                            dataKey="month"
                                            offset={8}
                                            fontSize={12}
                                            fill="hsl(var(--muted-foreground))"
                                        />
                                    </Bar>
                                    <YAxis dataKey="month" type="category" tickCount={1} hide/>
                                    <XAxis dataKey="completed" type="number" hide/>
                                </BarChart>
                            </ChartContainer>
                        </div>
                        <div className="grid auto-rows-min gap-2">
                            <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                                18/35
                                <span className="text-sm font-normal text-muted-foreground">
                  assignments
                </span>
                            </div>
                            <ChartContainer
                                config={{
                                    completed: {
                                        label: "Completed",
                                        color: "hsl(var(--muted))",
                                    },
                                }}
                                className="aspect-auto h-[32px] w-full"
                            >
                                <BarChart
                                    accessibilityLayer
                                    layout="vertical"
                                    margin={{
                                        left: 0,
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                    }}
                                    data={[
                                        {
                                            month: "Last Month",
                                            completed: (2 / 12) * 100,
                                        },
                                    ]}
                                >
                                    <Bar
                                        dataKey="completed"
                                        fill="var(--color-completed)"
                                        radius={4}
                                        barSize={32}
                                    >
                                        <LabelList
                                            position="insideLeft"
                                            dataKey="month"
                                            offset={8}
                                            fontSize={12}
                                            fill="hsl(var(--muted-foreground))"
                                        />
                                    </Bar>
                                    <YAxis dataKey="month" type="category" tickCount={1} hide/>
                                    <XAxis dataKey="completed" type="number" hide/>
                                </BarChart>
                            </ChartContainer>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className="grid w-full flex-1 gap-6 lg:max-w-[20rem]">
                <Card className="max-w-xs">
                    <CardHeader className="p-4 pb-0">
                        <CardTitle>Weekly Scores</CardTitle>
                        <CardDescription>
                            Your average score this week is 85%. Keep up the good work!
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-row items-baseline gap-4 p-4 pt-0">
                        <div className="flex items-baseline gap-1 text-3xl font-bold tabular-nums leading-none">
                            85%
                            <span className="text-sm font-normal text-muted-foreground">
                avg. score
              </span>
                        </div>
                        <ChartContainer
                            config={{
                                score: {
                                    label: "Score",
                                    color: "hsl(var(--chart-1))",
                                },
                            }}
                            className="ml-auto w-[72px]"
                        >
                            <BarChart
                                accessibilityLayer
                                margin={{
                                    left: 0,
                                    right: 0,
                                    top: 0,
                                    bottom: 0,
                                }}
                                data={[
                                    {day: "Mon", score: 80},
                                    {day: "Tue", score: 85},
                                    {day: "Wed", score: 90},
                                    {day: "Thu", score: 82},
                                    {day: "Fri", score: 88},
                                    {day: "Sat", score: 85},
                                    {day: "Sun", score: 85},
                                ]}
                            >
                                <Bar
                                    dataKey="score"
                                    fill="var(--color-score)"
                                    radius={2}
                                    fillOpacity={0.2}
                                    activeIndex={6}
                                    activeBar={<Rectangle fillOpacity={0.8}/>}
                                />
                                <XAxis
                                    dataKey="day"
                                    tickLine={false}
                                    axisLine={false}
                                    tickMargin={4}
                                    hide
                                />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
                <Card className="max-w-xs">
                    <CardContent className="flex gap-4 p-4">
                        <div className="grid items-center gap-2">
                            <div className="grid flex-1 auto-rows-min gap-0.5">
                                <div className="text-sm text-muted-foreground">Course Progress</div>
                                <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
                                    68/100
                                    <span className="text-sm font-normal text-muted-foreground">
                    %
                  </span>
                                </div>
                            </div>
                            <div className="grid flex-1 auto-rows-min gap-0.5">
                                <div className="text-sm text-muted-foreground">Assignments</div>
                                <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
                                    24/35
                                    <span className="text-sm font-normal text-muted-foreground">
                    completed
                  </span>
                                </div>
                            </div>
                            <div className="grid flex-1 auto-rows-min gap-0.5">
                                <div className="text-sm text-muted-foreground">Avg. Score</div>
                                <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
                                    85/100
                                    <span className="text-sm font-normal text-muted-foreground">
                    %
                  </span>
                                </div>
                            </div>
                        </div>
                        <ChartContainer
                            config={{
                                progress: {
                                    label: "Progress",
                                    color: "hsl(var(--chart-1))",
                                },
                                assignments: {
                                    label: "Assignments",
                                    color: "hsl(var(--chart-2))",
                                },
                                score: {
                                    label: "Score",
                                    color: "hsl(var(--chart-3))",
                                },
                            }}
                            className="mx-auto aspect-square w-full max-w-[80%]"
                        >
                            <RadialBarChart
                                margin={{
                                    left: -10,
                                    right: -10,
                                    top: -10,
                                    bottom: -10,
                                }}
                                data={[
                                    {
                                        name: "score",
                                        value: 85,
                                        fill: "var(--color-score)",
                                    },
                                    {
                                        name: "assignments",
                                        value: (24 / 35) * 100,
                                        fill: "var(--color-assignments)",
                                    },
                                    {
                                        name: "progress",
                                        value: 68,
                                        fill: "var(--color-progress)",
                                    },
                                ]}
                                innerRadius="20%"
                                barSize={24}
                                startAngle={90}
                                endAngle={450}
                            >
                                <PolarAngleAxis
                                    type="number"
                                    domain={[0, 100]}
                                    dataKey="value"
                                    tick={false}
                                />
                                <RadialBar dataKey="value" background cornerRadius={5} />
                            </RadialBarChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}