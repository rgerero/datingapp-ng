export interface Member {
  Id: string
  Email: string
  Gender: string
  DateOfBirth: string
  DisplayName: string
  Created: string
  LastActive: string
  Description?: string
  City: string
  Country: string
  ImageUrl?: string
}

export interface Photo {
  Id: number
  url: string
  publicId?: string
  memberId: string
}

