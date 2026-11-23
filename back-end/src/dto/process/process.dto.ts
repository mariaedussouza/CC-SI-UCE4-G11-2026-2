export type CreateProcessDTO = {
  process_number: string
  start_date: Date
  court_number: string
  car_brand: string
  car_model: string
  car_color: string
  car_plates: string
  car_year: number
  receipt_chance: string
  current_status: string
  has_active_action: boolean
  case_summary: string
  notes?: string | null
  customer_id: number
}

export type UpdateProcessDTO = Partial<CreateProcessDTO>