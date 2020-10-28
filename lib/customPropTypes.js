import { shape, any, bool, number, string } from 'prop-types';

const imagePropType = shape({
  original: string,
});

export const channelShortPropType = shape({
  type: string.isRequired,
  id: number,
  created_at: string.isRequired,
  updated_at: string.isRequired,
  title: string.isRequired,
  description: string.isRequired,
  formatted_description: string.isRequired,
  station_call_letters: string,
  parent_channel_id: number,
  urls: shape({
    web_url: string.isRequired,
    logo_image: imagePropType.isRequired,
    banner_image: imagePropType,
  }).isRequired,
  recommendation: shape({
    position: number.isRequired,
    category_id: number.isRequired,
    default_follow: bool.isRequired,
  }).isRequired,
}).isRequired;

export const channelPropType = shape({
  id: number.isRequired,
  channel_id: number,
  stream_id: number.isRequired,
  submission_style: string.isRequired,
  channel_style: string.isRequired,
  public_read: bool.isRequired,
  writable: bool.isRequired,
  parent_channel_id: number,
  created_at: string.isRequired,
  updated_at: string.isRequired,
  title: string.isRequired,
  description: string,
  formatted_description: string.isRequired,
  station_call_letters: string,
  urls: shape({
    web_url: string.isRequired,
    logo_image: imagePropType.isRequired,
    banner_image: imagePropType.isRequired,
  }).isRequired,
  category: shape({
    id: number.isRequired,
    title: string.isRequired,
    description: any,
    updated_at: string.isRequired,
    priority: number.isRequired,
  }).isRequired,
  channel_clips_count: number,
  total_plays: any,
}).isRequired;

export const episodePropType = shape({
  id: number.isRequired,
  title: string.isRequired,
  description: string.isRequired,
  updated_at: string.isRequired,
  user: shape({
    id: number.isRequired,
    username: string,
    urls: shape({
      profile: string.isRequired,
      image: string.isRequired,
      profile_image: imagePropType.isRequired,
    }).isRequired,
  }).isRequired,
  link_style: string.isRequired,
  channel: shape({
    id: number.isRequired,
    title: string.isRequired,
    urls: shape({
      detail: string.isRequired,
      logo_image: imagePropType.isRequired,
    }).isRequired,
  }).isRequired,
  duration: number.isRequired,
  mp3_filesize: number,
  uploaded_at: string.isRequired,
  recorded_at: string.isRequired,
  uploaded_at_ts: number.isRequired,
  recorded_at_ts: number.isRequired,
  can_comment: bool.isRequired,
  can_embed: bool.isRequired,
  category_id: number,
  counts: shape({
    comments: number.isRequired,
    likes: number.isRequired,
    plays: number,
  }).isRequired,
  urls: shape({
    detail: string.isRequired,
    high_mp3: string,
    image: string,
    post_image: imagePropType,
    wave_img: string.isRequired,
  }).isRequired,
  image_attachment: number,
}).isRequired;
