export interface Member {
  id: string
  email: string
  gender: string
  dateOfBirth: string
  displayName: string
  created: string
  lastActive: string
  description?: string
  city: string
  country: string
  imageUrl?: string
}

export interface Photo {
  Id: number
  url: string
  publicId?: string
  memberId: string
}

