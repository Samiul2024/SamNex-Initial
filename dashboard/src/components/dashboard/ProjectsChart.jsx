import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const ProjectsChart = ({
  data,
}) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-secondary p-6">
      <h2 className="mb-6 text-2xl font-black">
        Project Status
      </h2>

      <div className="h-80">
        <ResponsiveContainer>
          <BarChart data={data}>
            <XAxis dataKey="name" />

            <Tooltip />

            <Bar dataKey="value" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default ProjectsChart