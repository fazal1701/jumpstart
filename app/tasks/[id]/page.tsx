import TaskDetail from "@/components/task-detail"

export default function TaskPage({ params }: { params: { id: string } }) {
  return (
    <div className="theme-tasks min-h-screen">
      <TaskDetail id={params.id} />
    </div>
  )

}
