import * as d3 from "d3";

export interface ChartData {
    label: string;
    value: number;
    color: string;
}

export function initServiceChart() {
    const container = document.getElementById("service-chart");
    if (!container || container.querySelector("svg")) return;

    const width = 300;
    const height = 300;
    const radius = Math.min(width, height) / 2;

    const data: ChartData[] = [
        { label: "Research", value: 35, color: "#3B82F6" }, // Blue
        { label: "Engineering", value: 30, color: "#10B981" }, // Green
        { label: "Planning", value: 25, color: "#8B5CF6" }, // Purple
        { label: "Social", value: 10, color: "#F59E0B" }, // Amber
    ];

    const svg = d3
        .select("#service-chart")
        .append("svg")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("viewBox", `0 0 ${width} ${height}`)
        .append("g")
        .attr("transform", `translate(${width / 2},${height / 2})`);

    const pie = d3
        .pie<ChartData>()
        .value((d: ChartData) => d.value)
        .sort(null);

    const arc = d3
        .arc<d3.PieArcDatum<ChartData>>()
        .innerRadius(radius * 0.5)
        .outerRadius(radius * 0.9);

    const arcHover = d3
        .arc<d3.PieArcDatum<ChartData>>()
        .innerRadius(radius * 0.5)
        .outerRadius(radius * 0.95);

    // Add paths
    const paths = svg
        .selectAll("path")
        .data(pie(data))
        .enter()
        .append("path")
        .attr("d", (d: d3.PieArcDatum<ChartData>) => arc(d))
        .attr("fill", (d: d3.PieArcDatum<ChartData>) => d.data.color)
        .attr("stroke", "white")
        .style("stroke-width", "2px")
        .style("opacity", 0.9)
        .style("cursor", "pointer");

    // Add simple animation
    paths
        .transition()
        .duration(1000)
        .attrTween("d", function (d: d3.PieArcDatum<ChartData>) {
            const i = d3.interpolate(d.startAngle + 0.1, d.endAngle);
            return function (t: number) {
                d.endAngle = i(t);
                return arc(d) || "";
            };
        });

    // Add labels
    svg.selectAll("text")
        .data(pie(data))
        .enter()
        .append("text")
        .attr(
            "transform",
            (d: d3.PieArcDatum<ChartData>) =>
                `translate(${arc.centroid(d)})`,
        )
        .attr("dy", "0.35em")
        .style("text-anchor", "middle")
        .style("font-size", "12px")
        .style("font-weight", "bold")
        .style("fill", "white")
        .style("pointer-events", "none")
        .text((d: d3.PieArcDatum<ChartData>) => d.data.label)
        .style("opacity", 0)
        .transition()
        .delay(800)
        .duration(500)
        .style("opacity", 1);

    // Tooltip behavior
    paths
        .on(
            "mouseenter",
            (event: MouseEvent, d: d3.PieArcDatum<ChartData>) => {
                const target = event.currentTarget as SVGPathElement;
                d3.select(target)
                    .transition()
                    .duration(200)
                    .attr("d", arcHover(d) || "")
                    .style("opacity", 1);
            },
        )
        .on(
            "mouseleave",
            (event: MouseEvent, d: d3.PieArcDatum<ChartData>) => {
                const target = event.currentTarget as SVGPathElement;
                d3.select(target)
                    .transition()
                    .duration(200)
                    .attr("d", arc(d) || "")
                    .style("opacity", 0.9);
            },
        );
}
