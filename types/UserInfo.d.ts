interface UserInfo {
  id: number
  email: string
  phone_number: any
  money: number
  user_level_id: number
  user_role_id: number
  created_at: string
  updated_at: string
  userLevel: UserLevel
  userRole: UserRole
  profile: IProfile | null
}