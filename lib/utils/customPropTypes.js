import { any, bool, number, shape, string, arrayOf } from 'prop-types';

const imageShape = shape({
  original: string.isRequired,
});

export const channelShortShape = shape({
  type: string.isRequired,
  id: number.isRequired,
  created_at: string.isRequired,
  updated_at: string.isRequired,
  title: string.isRequired,
  description: string.isRequired,
  formatted_description: string.isRequired,
  station_call_letters: string.isRequired,
  parent_channel_id: number.isRequired,
  urls: shape({
    web_url: string.isRequired,
    logo_image: imageShape.isRequired,
    banner_image: imageShape.isRequired,
  }).isRequired,
  recommendation: shape({
    position: number.isRequired,
    category_id: number.isRequired,
    default_follow: bool.isRequired,
  }).isRequired,
}).isRequired;

export const channelShape = shape({
  id: number.isRequired,
  channel_id: number.isRequired,
  stream_id: number.isRequired,
  submission_style: string.isRequired,
  channel_style: string.isRequired,
  public_read: bool.isRequired,
  writable: bool.isRequired,
  parent_channel_id: number.isRequired,
  created_at: string.isRequired,
  updated_at: string.isRequired,
  title: string.isRequired,
  description: string.isRequired,
  formatted_description: string.isRequired,
  station_call_letters: string,
  urls: shape({
    web_url: string.isRequired,
    logo_image: imageShape.isRequired,
    banner_image: imageShape.isRequired,
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

export const episodeShape = shape({
  window: number.isRequired,
  version: number.isRequired,
  timestamp: number.isRequired,
  body: shape({
    totals: shape({
      count: number.isRequired,
      offset: number.isRequired,
    }).isRequired,
    audio_clips: arrayOf(
      shape({
        id: number.isRequired,
        title: string.isRequired,
        description: string.isRequired,
        updated_at: string.isRequired,
        user: shape({
          id: number.isRequired,
          username: string.isRequired,
          urls: shape({
            profile: string.isRequired,
            image: string.isRequired,
            profile_image: imageShape.isRequired,
          }).isRequired,
        }).isRequired,
        link_style: string.isRequired,
        channel: shape({
          id: number.isRequired,
          title: string.isRequired,
          urls: shape({
            detail: string.isRequired,
            logo_image: imageShape.isRequired,
          }).isRequired,
        }).isRequired,
        duration: number.isRequired,
        mp3_filesize: number.isRequired,
        uploaded_at: string.isRequired,
        recorded_at: string.isRequired,
        uploaded_at_ts: number.isRequired,
        recorded_at_ts: number.isRequired,
        can_comment: bool.isRequired,
        can_embed: bool.isRequired,
        category_id: number.isRequired,
        counts: shape({
          comments: number.isRequired,
          likes: number.isRequired,
          plays: number.isRequired,
        }).isRequired,
        urls: shape({
          detail: string.isRequired,
          high_mp3: string.isRequired,
          image: string.isRequired,
          post_image: imageShape.isRequired,
          wave_img: string.isRequired,
        }).isRequired,
        image_attachment: number.isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
}).isRequired;
