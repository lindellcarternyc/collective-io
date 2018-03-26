export interface PerformanceDetailsType {
  date: string
  location: string
  startTime: string
  endTime: string
}

export interface PerformanceDetailsObject extends PerformanceDetailsType {
  id: string
  cast?: string[]
  covers?: string[]
}