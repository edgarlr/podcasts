type TImage = {
  original: string
}

type TToast = {
  id: number
  content: string
}

type TChannel = TChannelLong | TChannelShort

type TChannelShort = {
  type: string
  id: number
  created_at: string
  updated_at: string
  title: string
  description: string
  formatted_description: string
  station_call_letters: string
  parent_channel_id: number
  urls: {
    web_url: string
    logo_image: TImage
    banner_image: TImage
  }
  recommendation: {
    position: number
    category_id: number
    default_follow: boolean
  }
}

type TChannelLong = {
  id: number
  channel_id: number
  stream_id: number
  submission_style: string
  channel_style: string
  public_read: boolean
  writable: boolean
  parent_channel_id: number
  created_at: string
  updated_at: string
  title: string
  description: string
  formatted_description: string
  station_call_letters: string
  urls: {
    web_url: string
    logo_image: TImage
    banner_image: TImage
  }
  category: {
    id: number
    title: string
    description: any
    updated_at: string
    priority: number
  }
  channel_clips_count: number
  total_plays: any
}

type TEpisode = {
  id: number
  title: string
  description: string
  updated_at: string
  user: {
    id: number
    username: string
    urls: {
      profile: string
      image: string
      profile_image: TImage
    }
  }
  link_style: string
  channel: {
    id: number
    title: string
    urls: {
      detail: string
      logo_image: TImage
    }
  }
  duration: number
  mp3_filesize: number
  uploaded_at: string
  recorded_at: string
  uploaded_at_ts: number
  recorded_at_ts: number
  can_comment: boolean
  can_embed: boolean
  category_id: number
  counts: {
    comments: number
    likes: number
    plays: number
  }
  urls: {
    detail: string
    high_mp3: string
    image: string
    post_image: TImage
    wave_img: string
  }
  image_attachment: number
}
