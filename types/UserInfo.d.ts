interface UserInfo {
  id: number
  email: string
  money: number
  user_level_id: number
  user_role_id: number
  is_email_verified: boolean
  deleted_at: string | null
  userLevel: UserLevel
  userRole: UserRole
  profile: IProfile | null
}